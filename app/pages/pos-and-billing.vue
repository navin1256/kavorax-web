<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

definePageMeta({
  alias: ['/pos-billing']
})

const module = getModuleBySlug('pos-and-billing')!

useHead({
  title: 'POS & Billing | High-Speed Counter Operations | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'High-speed counter transactions with sub-second item punching, dynamic GST calculations, split tender payments, and offline resilience.'
    }
  ]
})
</script>
