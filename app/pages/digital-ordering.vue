<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('digital-ordering')!

useHead({
  title: 'QR table ordering | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Guests scan a QR code on the table, order from their phone and the order goes straight to the kitchen.'
    }
  ]
})
</script>
