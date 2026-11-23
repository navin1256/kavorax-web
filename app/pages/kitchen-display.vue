<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

definePageMeta({
  alias: ['/kds']
})

const module = getModuleBySlug('kitchen-display')!

useHead({
  title: 'Kitchen Display (KDS) for restaurants | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Replace paper KOTs with a kitchen screen. Orders go to the right station with a timer, and late tickets change colour.'
    }
  ]
})
</script>
