<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import { Plus, ArrowUpRight, CheckCircle2 } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Solutions Management',
  'Manage cross-functional business solutions, architecture blueprints, and integration models.'
)

interface SolutionPreview {
  id: string
  name: string
  category: string
  deployments: string
  sla: string
  description: string
  components: string[]
}

const solutions: SolutionPreview[] = [
  {
    id: 'sol-fin',
    name: 'Financial Services Architecture',
    category: 'FinTech & Banking',
    deployments: 'Hybrid Cloud · Multi-Region',
    sla: '99.999% SLA',
    description: 'High-frequency transaction infrastructure, fraud mitigation pipelines, and regulatory reporting.',
    components: ['Real-time Ledger', 'Compliance Audit Mesh', 'Low-Latency Gateway']
  },
  {
    id: 'sol-scm',
    name: 'Supply Chain & Logistics Suite',
    category: 'Global Freight & Operations',
    deployments: 'Edge + Cloud Synchronized',
    sla: '99.99% SLA',
    description: 'Automated multimodal routing, predictive ETA calculations, and autonomous warehouse telemetry.',
    components: ['Telemetry Hub', 'Predictive Routing AI', 'Inventory Ledger']
  },
  {
    id: 'sol-med',
    name: 'Healthcare Intelligence System',
    category: 'Life Sciences & Diagnostics',
    deployments: 'HIPAA-Compliant Dedicated VPC',
    sla: '99.99% SLA',
    description: 'Federated clinical data pipelines with cryptographic patient pseudonymization.',
    components: ['Clinical Ingestion', 'Federated Learning Core', 'Zero-Trust Storage']
  },
  {
    id: 'sol-core',
    name: 'Modern Enterprise Core',
    category: 'Cross-Industry',
    deployments: 'Private Cloud & Managed SaaS',
    sla: '99.95% SLA',
    description: 'Complete ERP modernizer, distributed identity federation, and legacy bridging APIs.',
    components: ['Legacy Bridge', 'Identity Federation', 'Global Event Bus']
  }
]
</script>

<template>
  <div class="space-y-6">
    <AdminPageHeader
      title="Solutions Management"
      description="Manage cross-vertical integration suites and architectural deployment packages."
      icon-name="Cpu"
      badge="4 Active Suites"
    >
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          title="CRUD actions will connect to backend API endpoints in future sprints"
        >
          <Plus class="w-4 h-4" />
          <span>New Solution Blueprint</span>
        </button>
      </template>
    </AdminPageHeader>

    <!-- Solutions Cards Grid -->
    <AdminSectionCard
      title="Deployed Solutions Architecture"
      description="Pre-packaged business solutions presented across KavoraX commercial channels."
    >
      <template #actions>
        <NuxtLink
          to="/solutions"
          target="_blank"
          class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span>View Public Page</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </NuxtLink>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="sol in solutions"
          :key="sol.id"
          class="p-4 rounded-lg border border-[#26313d] bg-[#0b0f14] hover:border-[#3b4c5e] transition-colors flex flex-col justify-between"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-2">
              <div>
                <span class="text-[11px] font-mono text-emerald-400/90 tracking-wide uppercase block">
                  {{ sol.category }}
                </span>
                <h3 class="text-sm sm:text-base font-semibold text-slate-100 mt-0.5">
                  {{ sol.name }}
                </h3>
              </div>
              <span class="px-2 py-0.5 text-[10px] font-medium rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                {{ sol.sla }}
              </span>
            </div>

            <p class="text-xs text-[#94a3b8] leading-relaxed mb-4">
              {{ sol.description }}
            </p>

            <!-- Architecture Components -->
            <div class="space-y-1.5 pt-2 border-t border-[#26313d]/60 mb-4">
              <span class="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
                Integrated Modules
              </span>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="comp in sol.components"
                  :key="comp"
                  class="px-2 py-0.5 rounded text-[11px] bg-[#121c27] text-slate-300 border border-[#26313d]"
                >
                  {{ comp }}
                </span>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-[#26313d]/40">
            <span class="truncate">{{ sol.deployments }}</span>
            <div class="flex items-center gap-1 text-emerald-400 text-[11px]">
              <CheckCircle2 class="w-3 h-3" />
              <span>Verified</span>
            </div>
          </div>
        </div>
      </div>
    </AdminSectionCard>

    <AdminEmptyState
      title="No Custom Enterprise Drafts"
      description="Custom architectural modifications for client pilots will appear here once saved from the proposal workflow."
      icon-name="Cpu"
    />
  </div>
</template>
