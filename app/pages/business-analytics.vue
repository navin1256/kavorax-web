<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('business-analytics')!

useHead({
  title: 'Business Analytics | Executive BI & Margin Telemetry | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Clear operational metrics and profit reports. Track top margin items, staff shift efficiency, wastage patterns, and chain-wide growth.'
    }
  ]
})
</script>
