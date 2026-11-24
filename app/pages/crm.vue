<template>
  <ProductPageTemplate :module="module" />
</template>

<script setup lang="ts">
import { getModuleBySlug } from '~/composables/useModules'

const module = getModuleBySlug('crm')!

useHead({
  title: 'CRM & Loyalty | Guest Profiles & Auto-Retention | KavoraX',
  meta: [
    {
      name: 'description',
      content: 'Turn first-time customers into regulars with automated purchase history, loyalty rewards, WhatsApp promotions, and visit frequency scoring.'
    }
  ]
})
</script>
