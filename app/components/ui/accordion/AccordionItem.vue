<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'radix-vue'
import { cn } from '@/utils'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <AccordionItem v-bind="forwardedProps" :class="cn('border-b border-white/[0.08]', props.class)">
    <slot />
  </AccordionItem>
</template>
