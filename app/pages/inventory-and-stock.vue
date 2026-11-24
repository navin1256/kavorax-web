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
  title: 'Inventory & Stock Management | Live Depletion & Procurement | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Real-time stock depletion, automated vendor purchase orders, recipe-level ingredient deductions, expiry alerts, and batch variance tracking.'
    }
  ]
})
</script>
