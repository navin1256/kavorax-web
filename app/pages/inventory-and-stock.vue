<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

definePageMeta({
  alias: ['/inventory-stock']
})

const module = getModuleBySlug('inventory-and-stock')!

useHead({
  title: 'Inventory & stock management | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Stock that goes down as you sell, low-stock alerts, purchase orders, batch and expiry tracking, and transfers between outlets.'
    }
  ]
})
</script>
