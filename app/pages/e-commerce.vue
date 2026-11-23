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
  title: 'Online store for shops and restaurants | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Sell online with the same items, prices and stock as your shop. Orders, payment links and coupons included.'
    }
  ]
})
</script>
