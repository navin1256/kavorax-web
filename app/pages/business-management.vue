<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('business-management')!

useHead({
  title: 'Business Management | Staff, Attendance & Expenses | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Run daily business operations without the chaos. Staff management, attendance, expense tracking, role permissions, and full audit trails.'
    }
  ]
})
</script>
