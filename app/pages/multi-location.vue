<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

definePageMeta({
  alias: ['/multi-location-management']
})

const module = getModuleBySlug('multi-location')!

useHead({
  title: 'Multi-Location Management | Central Chain Operations | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Govern all your outlets from one single dashboard. Push centralized menu prices, authorize inter-store stock transfers, and view consolidated reports.'
    }
  ]
})
</script>
