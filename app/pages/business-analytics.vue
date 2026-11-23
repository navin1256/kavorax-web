<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('business-analytics')!

useHead({
  title: 'Sales reports and analytics | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Sales by item, hour and payment type, margins and branch comparisons, on your phone.'
    }
  ]
})
</script>
