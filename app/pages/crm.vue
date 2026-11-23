<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('crm')!

useHead({
  title: 'CRM & loyalty for restaurants and shops | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Customer history, loyalty points and WhatsApp offers, so first-time customers come back.'
    }
  ]
})
</script>
