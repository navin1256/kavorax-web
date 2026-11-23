<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('delivery-management')!

useHead({
  title: 'Delivery management | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Assign orders to your riders, set delivery charges by area and see which orders are out for delivery.'
    }
  ]
})
</script>
