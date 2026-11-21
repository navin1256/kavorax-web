<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

definePageMeta({
  alias: ['/ecommerce']
})

const module = getModuleBySlug('e-commerce')!

useHead({
  title: 'E-commerce | Online Store & Real-Time Stock Sync | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Sell online without a second system. Branded storefront, live inventory sync with POS, automated orders, payment links, and coupons.'
    }
  ]
})
</script>
