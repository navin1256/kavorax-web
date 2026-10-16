<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import { Plus, CheckCircle, ArrowUpRight } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Products Management',
  'Manage the enterprise product catalog, module descriptions, and architectural capabilities.'
)

interface ProductPreview {
  id: string
  code: string
  name: string
  tier: string
  status: 'Active' | 'Draft'
  description: string
  modulesCount: number
}

// Sample product entities aligned with the public KavoraX site
const sampleProducts: ProductPreview[] = [
  {
    id: 'prod-1',
    code: 'EDP-01',
    name: 'Enterprise Data Platform',
    tier: 'Core Architecture',
    status: 'Active',
    description: 'Unified multi-cloud data layer with real-time stream processing and governance.',
    modulesCount: 14
  },
  {
    id: 'prod-2',
    code: 'AAE-02',
    name: 'AI Analytics Engine',
    tier: 'Cognitive Computing',
    status: 'Active',
    description: 'High-precision operational intelligence with automated anomaly detection.',
    modulesCount: 8
  },
  {
    id: 'prod-3',
    code: 'CAS-03',
    name: 'Cloud Automation Suite',
    tier: 'Infrastructure',
    status: 'Active',
    description: 'Autonomous provisioning, resilient orchestration, and self-healing cluster services.',
    modulesCount: 11
  },
  {
    id: 'prod-4',
    code: 'SGM-04',
    name: 'Security & Governance Mesh',
    tier: 'Zero-Trust Protocol',
    status: 'Active',
    description: 'End-to-end cryptographic integrity, policy enforcement, and audit lineage.',
    modulesCount: 9
  },
  {
    id: 'prod-5',
    code: 'HTA-05',
    name: 'High-Throughput APIs',
    tier: 'Interconnect',
    status: 'Active',
    description: 'Ultra-low latency microservices gateways engineered for 99.999% uptime.',
    modulesCount: 6
  },
  {
    id: 'prod-6',
    code: 'ECH-06',
    name: 'Edge Computing Hub',
    tier: 'Distributed Compute',
    status: 'Draft',
    description: 'Decentralized compute nodes operating on low-bandwidth field networks.',
    modulesCount: 4
  }
]
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <AdminPageHeader
      title="Products Management"
      description="Manage KavoraX enterprise software modules, service definitions, and capabilities."
      icon-name="Layers"
      badge="Catalog v2.4"
    >
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          title="CRUD actions will connect to backend API endpoints in future sprints"
        >
          <Plus class="w-4 h-4" />
          <span>New Product</span>
        </button>
      </template>
    </AdminPageHeader>

    <!-- Products Catalog Overview -->
    <AdminSectionCard
      title="Configured Enterprise Products"
      description="Software modules currently exposed on the corporate website and customer portal."
      badge="6 Modules"
    >
      <template #actions>
        <NuxtLink
          to="/products"
          target="_blank"
          class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span>View Public Page</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </NuxtLink>
      </template>

      <!-- Table of Products -->
      <div class="overflow-x-auto admin-scrollbar">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[#26313d] bg-[#0b0f14]/60 text-[#94a3b8] uppercase tracking-wider text-[11px]">
              <th scope="col" class="py-3 px-4 font-semibold">Code</th>
              <th scope="col" class="py-3 px-4 font-semibold">Product Name</th>
              <th scope="col" class="py-3 px-4 font-semibold hidden md:table-cell">Tier</th>
              <th scope="col" class="py-3 px-4 font-semibold hidden sm:table-cell">Sub-modules</th>
              <th scope="col" class="py-3 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#26313d]/60">
            <tr
              v-for="item in sampleProducts"
              :key="item.id"
              class="hover:bg-[#121c27] transition-colors"
            >
              <td class="py-3.5 px-4 font-mono text-emerald-400/90 text-xs">
                {{ item.code }}
              </td>
              <td class="py-3.5 px-4">
                <span class="font-medium text-slate-200 block text-xs sm:text-sm">{{ item.name }}</span>
                <span class="text-[11px] text-[#94a3b8] line-clamp-1">{{ item.description }}</span>
              </td>
              <td class="py-3.5 px-4 hidden md:table-cell text-slate-300">
                {{ item.tier }}
              </td>
              <td class="py-3.5 px-4 hidden sm:table-cell text-[#94a3b8]">
                {{ item.modulesCount }} services
              </td>
              <td class="py-3.5 px-4">
                <span
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase border"
                  :class="item.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'"
                >
                  <CheckCircle v-if="item.status === 'Active'" class="w-3 h-3 text-emerald-400" />
                  <span>{{ item.status }}</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminSectionCard>

    <!-- Empty State Demonstrator for Filtered Views -->
    <AdminEmptyState
      title="No Archived Products Found"
      description="All 6 corporate products are currently active in production. When products are decommissioned, they will appear here with version records."
      icon-name="Layers"
    />
  </div>
</template>
