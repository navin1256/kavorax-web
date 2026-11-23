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
  title: 'POS & Billing software for restaurants and shops | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'GST-ready billing with UPI, card and cash, split payments, WhatsApp bills and offline billing that syncs when the internet is back.'
    }
  ]
})
</script>
