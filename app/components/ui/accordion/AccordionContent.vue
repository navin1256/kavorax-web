<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { cn } from '@/utils'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <AccordionContent
    v-bind="props"
    class="overflow-hidden font-ui text-sm text-zinc-300 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pb-5 pt-0 leading-relaxed text-zinc-300', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
