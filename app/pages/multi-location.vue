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
  title: 'Multi-outlet management | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'One menu and price list for every branch, stock transfers between outlets and branch-wise reports.'
    }
  ]
})
</script>
