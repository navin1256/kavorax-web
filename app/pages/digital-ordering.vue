<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('digital-ordering')!

useHead({
  title: 'Digital Ordering | Tabletop QR & Direct Web Menus | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Self-serve digital ordering with QR menus, real-time kitchen routing, item availability control, and zero aggregator commissions.'
    }
  ]
})
</script>
