<script setup lang="ts">
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import DashboardStatCard from './DashboardStatCard.vue'
import DashboardQuickActions from './DashboardQuickActions.vue'
import RecentActivity from './RecentActivity.vue'
import type { DashboardStat } from '~/types/admin'

const dashboardStats: DashboardStat[] = [
  {
    id: 'stat-products',
    title: 'Total Products',
    value: '6',
    change: '+2 Q4',
    trend: 'up',
    period: 'Current catalog',
    iconName: 'Layers',
    description: 'Enterprise modules',
    targetRoute: '/admin/products'
  },
  {
    id: 'stat-solutions',
    title: 'Active Solutions',
    value: '4',
    change: 'Stable',
    trend: 'neutral',
    period: 'All architectures',
    iconName: 'Cpu',
    description: 'Cross-functional suites',
    targetRoute: '/admin/solutions'
  },
  {
    id: 'stat-enquiries',
    title: 'New Enquiries',
    value: '12',
    change: '+18%',
    trend: 'up',
    period: 'Last 30 days',
    iconName: 'Mail',
    description: 'Demo & RFP pipeline',
    targetRoute: '/admin/enquiries'
  },
  {
    id: 'stat-content',
    title: 'Published Pages',
    value: '8',
    change: 'Live',
    trend: 'neutral',
    period: 'Production build',
    iconName: 'FileText',
    description: 'Core web routes',
    targetRoute: '/admin/content'
  }
]
</script>

<template>
  <div class="space-y-8">
    <!-- Dashboard Header -->
    <AdminPageHeader
      title="System Overview"
      description="Administrative telemetry, module health, and shortcuts across KavoraX Global services."
      icon-name="LayoutDashboard"
      badge="Production Ready"
    >
      <template #actions>
        <NuxtLink
          to="/admin/enquiries"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
        >
          <span>View Inbound Pipeline</span>
        </NuxtLink>
      </template>
    </AdminPageHeader>

    <!-- Key Statistics Grid -->
    <section aria-labelledby="dashboard-metrics-heading">
      <h2 id="dashboard-metrics-heading" class="sr-only">Key Dashboard Statistics</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStatCard
          v-for="stat in dashboardStats"
          :key="stat.id"
          :stat="stat"
        />
      </div>
    </section>

    <!-- Quick Navigation Shortcuts Section -->
    <AdminSectionCard
      title="Administrative Quick Actions"
      description="Rapid access to core entity configuration matrices and operational controls."
    >
      <DashboardQuickActions />
    </AdminSectionCard>

    <!-- Recent Audit Activity Section -->
    <AdminSectionCard
      title="Recent Administrative Activity"
      description="Chronological log of system publications, configuration changes, and customer inquiries."
      badge="Mock Feed"
    >
      <template #actions>
        <NuxtLink
          to="/admin/settings"
          class="text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          Audit Settings →
        </NuxtLink>
      </template>

      <RecentActivity />
    </AdminSectionCard>
  </div>
</template>
