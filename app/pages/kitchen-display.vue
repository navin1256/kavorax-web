<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

definePageMeta({
  alias: ['/kds']
})

const module = getModuleBySlug('kitchen-display')!

useHead({
  title: 'Kitchen Display (KDS) | Expediter & Station Order Routing | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Eliminate lost paper tickets and kitchen confusion with real-time station routing, color-coded ticket aging, cook timers, and bump bar control.'
    }
  ]
})
</script>
