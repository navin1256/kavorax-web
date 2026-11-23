<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('business-management')!

useHead({
  title: 'Staff, attendance and expenses | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Staff shifts, attendance, expenses and role permissions for restaurants and shops.'
    }
  ]
})
</script>
