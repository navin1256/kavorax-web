<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import { Plus, ArrowUpRight, ShieldCheck } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Industries Management',
  'Configure industry verticals, regulatory compliance profiles, and sector-specific landing presentations.'
)

interface IndustryPreview {
  id: string
  name: string
  leadClientType: string
  compliance: string[]
  activeEngagements: number
  description: string
}

const industries: IndustryPreview[] = [
  {
    id: 'ind-fin',
    name: 'Financial Services & Capital Markets',
    leadClientType: 'Tier-1 Investment Banks & FinTech Scale-ups',
    compliance: ['SOC2 Type II', 'PCI-DSS v4.0', 'ISO 27001'],
    activeEngagements: 14,
    description: 'Ultra-resilient ledger architectures and compliance validation pipelines designed for zero packet drop.'
  },
  {
    id: 'ind-log',
    name: 'Logistics & Global Freight Networks',
    leadClientType: 'Maritime Carriers & Distributed 3PL Networks',
    compliance: ['ISO 9001', 'C-TPAT Certified', 'GS1 Standards'],
    activeEngagements: 9,
    description: 'Dynamic telematics and autonomous route optimization connecting port terminals with last-mile fleets.'
  },
  {
    id: 'ind-health',
    name: 'Healthcare & Life Sciences',
    leadClientType: 'Hospital Systems & Clinical Research Hubs',
    compliance: ['HIPAA', 'HITECH', 'FDA 21 CFR Part 11'],
    activeEngagements: 6,
    description: 'Secure data vaults ensuring patient confidentiality alongside federated machine learning acceleration.'
  },
  {
    id: 'ind-tech',
    name: 'High-Tech & Advanced Manufacturing',
    leadClientType: 'OEM Equipment Builders & Semiconductor Foundries',
    compliance: ['ISO 26262', 'NIST 800-171', 'IEC 62443'],
    activeEngagements: 11,
    description: 'Real-time telemetry and industrial IoT bridging physical automation with cloud orchestration.'
  }
]
</script>

<template>
  <div class="space-y-6">
    <AdminPageHeader
      title="Industries Management"
      description="Vertical industry blueprints, regulatory compliance targets, and sector page controls."
      icon-name="Building2"
      badge="4 Sectors"
    >
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          title="CRUD actions will connect to backend API endpoints in future sprints"
        >
          <Plus class="w-4 h-4" />
          <span>New Sector Blueprint</span>
        </button>
      </template>
    </AdminPageHeader>

    <AdminSectionCard
      title="Configured Industry Verticals"
      description="Active enterprise market segments with associated compliance frameworks and case studies."
    >
      <template #actions>
        <NuxtLink
          to="/industries"
          target="_blank"
          class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span>View Public Page</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </NuxtLink>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="ind in industries"
          :key="ind.id"
          class="p-4 rounded-lg border border-[#26313d] bg-[#0b0f14] hover:border-[#3b4c5e] transition-colors"
        >
          <div class="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-slate-100">
                {{ ind.name }}
              </h3>
              <span class="text-xs text-[#94a3b8] block mt-0.5">
                {{ ind.leadClientType }}
              </span>
            </div>
            <span class="px-2 py-0.5 text-[10px] font-medium rounded bg-[#121c27] text-emerald-400 border border-emerald-500/20 shrink-0">
              {{ ind.activeEngagements }} Engagements
            </span>
          </div>

          <p class="text-xs text-[#94a3b8] leading-relaxed my-3">
            {{ ind.description }}
          </p>

          <div class="pt-3 border-t border-[#26313d]/60 flex items-center justify-between gap-2 flex-wrap">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span
                v-for="cert in ind.compliance"
                :key="cert"
                class="px-2 py-0.5 rounded text-[10px] bg-[#121a24] text-slate-300 border border-[#26313d]"
              >
                {{ cert }}
              </span>
            </div>
            <div class="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck class="w-3.5 h-3.5" />
              <span>Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </AdminSectionCard>

    <AdminEmptyState
      title="No Unmapped Sectors"
      description="All incoming leads are currently classified under the four core industry blueprints. New sector archetypes can be defined as market expansion dictates."
      icon-name="Building2"
    />
  </div>
</template>
