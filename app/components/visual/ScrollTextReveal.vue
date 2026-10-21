<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollProgress } from '~/composables/useScrollProgress'

interface Props {
  text: string
  as?: string
  highlight?: string | string[]
  italicWords?: string | string[]
  highlightClass?: string
  startOffset?: number
  endOffset?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'blockquote',
  highlight: '',
  italicWords: '',
  highlightClass: 'italic font-light text-brand',
  startOffset: 0.85,
  endOffset: 0.35,
  class: ''
})

const rootRef = ref<HTMLElement | null>(null)
const { progress } = useScrollProgress(rootRef, {
  startOffset: props.startOffset,
  endOffset: props.endOffset
})

const highlightTerms = computed(() => {
  const rawTerms = props.italicWords || props.highlight
  if (!rawTerms) return []
  const terms = Array.isArray(rawTerms) ? rawTerms : [rawTerms]
  return terms.map((t) => t.trim().toLowerCase().replace(/[.,!?;:“”"']/g, ''))
})

const words = computed(() => {
  return props.text.split(/\s+/).filter(Boolean)
})

function isHighlighted(word: string): boolean {
  const clean = word.toLowerCase().replace(/[.,!?;:“”"']/g, '')
  return highlightTerms.value.includes(clean)
}

/**
 * Calculates per-word activation based on current scroll progress.
 * Inactive text remains legible at 0.42 opacity (#94a3b8) on dark surfaces,
 * transitioning smoothly to 1.0 (#ffffff) and emerald (#10b981) as the section moves through the viewport.
 */
const renderedWords = computed(() => {
  const currentProgress = progress.value
  const total = words.value.length

  return words.value.map((word, index) => {
    const startRatio = index / total
    const endRatio = (index + 1) / total
    const highlighted = isHighlighted(word)

    let isActive = false
    let opacity = 0.42
    let color: string | undefined = '#94a3b8'

    if (currentProgress >= endRatio) {
      isActive = true
      opacity = 1
      color = '#ffffff'
    } else if (currentProgress <= startRatio) {
      isActive = false
      opacity = 0.42
      color = '#94a3b8'
    } else {
      const partial = (currentProgress - startRatio) / (endRatio - startRatio)
      isActive = partial > 0.4
      opacity = 0.42 + partial * (1.0 - 0.42)
      color = '#ffffff'
    }

    return {
      word,
      index,
      isActive,
      isHighlighted: highlighted,
      opacity,
      color: highlighted && isActive ? undefined : color
    }
  })
})
</script>

<template>
  <component
    :is="props.as"
    ref="rootRef"
    :aria-label="props.text"
    :class="['relative font-editorial leading-tight tracking-tight select-text max-w-full break-words', props.class]"
  >
    <!-- Visual words: progressive scroll-stream color reveal -->
    <span aria-hidden="true" class="inline select-text">
      <template v-for="item in renderedWords" :key="item.index">
        <span
          :class="[
            'inline-block whitespace-nowrap transition-colors duration-300 ease-out select-text',
            item.isHighlighted && item.isActive ? props.highlightClass : ''
          ]"
          :style="{
            opacity: item.opacity,
            color: item.color
          }"
        >{{ item.word }}</span>{{ item.index < renderedWords.length - 1 ? ' ' : '' }}
      </template>
    </span>
  </component>
</template>

