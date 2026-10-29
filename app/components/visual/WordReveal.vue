<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

interface Props {
  text: string
  as?: string
  /** Primary highlight terms or array of terms */
  highlight?: string | string[]
  /** Alias for highlight, commonly used in secondary heroes */
  italicWords?: string | string[]
  highlightClass?: string
  staggerMs?: number
  baseDelayMs?: number
  /** Alias for baseDelayMs */
  delay?: number
  immediate?: boolean
  threshold?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h2',
  highlight: '',
  italicWords: '',
  highlightClass: 'italic font-light text-brand',
  staggerMs: 55,
  baseDelayMs: 120,
  delay: undefined,
  immediate: false,
  threshold: 0.05,
  class: ''
})

const effectiveBaseDelay = computed(() => {
  return props.delay !== undefined ? props.delay : props.baseDelayMs
})

const rootRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(rootRef, {
  threshold: props.threshold,
  immediate: props.immediate,
  delay: effectiveBaseDelay.value,
  triggerOnce: true
})

// Normalize highlight terms from single words or multi-word phrases (e.g. 'Our Team.')
const highlightTerms = computed(() => {
  const rawTerms = props.italicWords || props.highlight
  if (!rawTerms) return []
  const terms = Array.isArray(rawTerms) ? rawTerms : [rawTerms]
  return terms
    .flatMap((t) => t.trim().toLowerCase().split(/\s+/))
    .map((t) => t.replace(/[.,!?;:“”"']/g, ''))
    .filter(Boolean)
})

// Support explicit newlines (\n) for responsive editorial breaks
const lines = computed(() => {
  return props.text.split('\n')
})

interface WordToken {
  word: string
  globalIndex: number
}

const parsedLines = computed(() => {
  let counter = 0
  return lines.value.map((line) => {
    const rawWords = line.split(/\s+/).filter(Boolean)
    const tokens: WordToken[] = rawWords.map((word) => ({
      word,
      globalIndex: counter++
    }))
    return tokens
  })
})

function isHighlighted(word: string): boolean {
  const clean = word.toLowerCase().replace(/[.,!?;:“”"']/g, '')
  return highlightTerms.value.includes(clean)
}

function getDelay(index: number): number {
  return effectiveBaseDelay.value + index * props.staggerMs
}

onMounted(() => {
  // Safety net: force reveal after 1.5s if not already triggered by scroll observer
  setTimeout(() => {
    if (!isRevealed.value) {
      isRevealed.value = true
    }
  }, 1500)
})
</script>

<template>
  <component
    :is="props.as"
    ref="rootRef"
    :aria-label="props.text.replace(/\n/g, ' ')"
    :class="[
      'relative font-editorial leading-[1.08] tracking-[-0.025em] max-w-full break-words select-text lining-nums',
      props.class
    ]"
  >
    <!-- Visual words: masked upward reveal preventing clipped descenders & flourishes -->
    <span aria-hidden="true" class="inline select-text">
      <template v-for="(lineTokens, lineIdx) in parsedLines" :key="lineIdx">
        <template v-for="(item, wordIdx) in lineTokens" :key="item.globalIndex">
          <span
            class="inline-block overflow-hidden align-bottom px-[0.06em] -mx-[0.06em] pt-[0.1em] pb-[0.25em] -mb-[0.25em] select-text"
          >
            <span
              :class="[
                'inline-block transition-[transform,opacity,color] duration-word-reveal transition-editorial will-change-[transform,opacity]',
                isHighlighted(item.word) ? props.highlightClass : '',
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[115%]'
              ]"
              :style="{
                transitionDelay: isRevealed ? `${getDelay(item.globalIndex)}ms` : '0ms'
              }"
            >{{ item.word }}</span>
          </span>{{ wordIdx < lineTokens.length - 1 ? ' ' : '' }}
        </template>
        <br v-if="lineIdx < parsedLines.length - 1" class="hidden sm:inline" />
        <span v-if="lineIdx < parsedLines.length - 1" class="inline sm:hidden">&nbsp;</span>
      </template>
    </span>
  </component>
</template>
