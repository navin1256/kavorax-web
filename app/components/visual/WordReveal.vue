<script setup lang="ts">
import { ref, computed } from 'vue'
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
  threshold: 0.15,
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

// Normalize highlight terms for matching from both highlight and italicWords props
const highlightTerms = computed(() => {
  const rawTerms = props.italicWords || props.highlight
  if (!rawTerms) return []
  const terms = Array.isArray(rawTerms) ? rawTerms : [rawTerms]
  return terms.map((t) => t.trim().toLowerCase().replace(/[.,!?;:“”"']/g, ''))
})

// Split into clean words while preserving trailing punctuation
const words = computed(() => {
  return props.text.split(/\s+/).filter(Boolean)
})

function isHighlighted(word: string): boolean {
  const clean = word.toLowerCase().replace(/[.,!?;:“”"']/g, '')
  return highlightTerms.value.includes(clean)
}

function getDelay(index: number): number {
  return effectiveBaseDelay.value + index * props.staggerMs
}
</script>

<template>
  <component
    :is="props.as"
    ref="rootRef"
    :aria-label="props.text"
    :class="[
      'relative font-editorial leading-[1.08] tracking-[-0.025em] max-w-full break-words select-text',
      props.class
    ]"
  >
    <!-- Visual words: masked upward reveal preventing clipped descenders & flourishes -->
    <span aria-hidden="true" class="inline select-text">
      <template v-for="(word, index) in words" :key="index">
        <span
          class="inline-block overflow-hidden align-bottom px-[0.06em] -mx-[0.06em] pt-[0.1em] pb-[0.25em] -mb-[0.25em] select-text"
        >
          <span
            :class="[
              'inline-block transition-[transform,opacity,color] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]',
              isHighlighted(word) ? props.highlightClass : '',
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[115%]'
            ]"
            :style="{
              transitionDelay: isRevealed ? `${getDelay(index)}ms` : '0ms'
            }"
          >{{ word }}</span>
        </span>{{ index < words.length - 1 ? ' ' : '' }}
      </template>
    </span>
  </component>
</template>

