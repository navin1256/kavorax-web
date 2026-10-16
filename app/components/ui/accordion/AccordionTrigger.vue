<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/utils'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="props"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-5 font-editorial text-lg sm:text-xl font-medium text-white transition-all hover:text-brand [&[data-state=open]>svg]:rotate-180 text-left cursor-pointer',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown class="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
