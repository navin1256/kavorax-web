<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('delivery-management')!

useHead({
  title: 'Delivery Management | Fleet Dispatch & Live Tracking | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Coordinate in-house delivery riders and third-party fleets with automated order dispatching, zone charges, and live GPS tracking.'
    }
  ]
})
</script>
