<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import DashboardOverview from '~/components/admin/dashboard/DashboardOverview.vue'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle('Executive Dashboard', 'Real-time telemetry, core business metrics, and administrative quick actions.')
</script>

<template>
  <div>
    <DashboardOverview />
  </div>
</template>
