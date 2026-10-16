<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import { Plus, ArrowUpRight, Check } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Pricing Management',
  'Manage commercial tier definitions, enterprise license matrices, and bespoke contract parameters.'
)

interface PricingTier {
  id: string
  name: string
  commercialModel: string
  sla: string
  support: string
  targetOrganization: string
  includedModules: string[]
  status: 'Active' | 'Review'
}

const pricingTiers: PricingTier[] = [
  {
    id: 'tier-starter',
    name: 'Enterprise Foundation',
    commercialModel: 'Annual Commitment · Usage Balanced',
    sla: '99.9% Uptime SLA',
    support: 'Business Hours (8x5) Dedicated TAM',
    targetOrganization: 'Emerging tech enterprises scaling core transaction workloads.',
    includedModules: ['Single-Region Data Platform', 'Standard API Gateway', 'Role-Based Access Control'],
    status: 'Active'
  },
  {
    id: 'tier-scale',
    name: 'Scale Architecture',
    commercialModel: 'Multi-Year Enterprise Agreement',
    sla: '99.99% Uptime SLA',
    support: '24/7/365 Incident Response (<15 min P1)',
    targetOrganization: 'Mid-to-large enterprises requiring multi-zone resilience and automated scaling.',
    includedModules: ['Multi-Region Mesh', 'AI Analytics Core', 'Federated Identity', 'Zero-Trust Protocol'],
    status: 'Active'
  },
  {
    id: 'tier-global',
    name: 'Global Enterprise',
    commercialModel: 'Custom Enterprise Volume License',
    sla: '99.999% Fault-Tolerant SLA',
    support: 'Dedicated Platform Engineering Squadron',
    targetOrganization: 'Fortune 500 multinationals with sovereign data boundary requirements.',
    includedModules: ['Global Active-Active VPCs', 'Bespoke AI Training', 'Edge Hub Node License', 'Custom Cryptography'],
    status: 'Active'
  }
]
</script>

<template>
  <div class="space-y-6">
    <AdminPageHeader
      title="Pricing & Licensing Management"
      description="Manage enterprise licensing tiers, commercial SLA commitments, and custom client proposals."
      icon-name="CreditCard"
      badge="3 Active Tiers"
    >
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          title="CRUD actions will connect to backend API endpoints in future sprints"
        >
          <Plus class="w-4 h-4" />
          <span>New License Tier</span>
        </button>
      </template>
    </AdminPageHeader>

    <AdminSectionCard
      title="Commercial Tier Configurations"
      description="Licensing structures exposed on public pricing calculators and sales quotes."
    >
      <template #actions>
        <NuxtLink
          to="/pricing"
          target="_blank"
          class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span>View Public Page</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </NuxtLink>
      </template>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
          v-for="tier in pricingTiers"
          :key="tier.id"
          class="p-5 rounded-lg border border-[#26313d] bg-[#0b0f14] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between gap-2 pb-3 border-b border-[#26313d]/60 mb-3">
              <h3 class="text-base font-semibold text-slate-100">
                {{ tier.name }}
              </h3>
              <span class="px-2 py-0.5 text-[10px] font-semibold rounded uppercase tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {{ tier.status }}
              </span>
            </div>

            <div class="space-y-2 mb-4">
              <div class="text-xs text-emerald-400/90 font-mono">
                {{ tier.commercialModel }}
              </div>
              <p class="text-xs text-[#94a3b8] leading-relaxed">
                {{ tier.targetOrganization }}
              </p>
            </div>

            <!-- Commitments -->
            <div class="p-3 rounded bg-[#0f161f] border border-[#26313d] space-y-1.5 text-xs mb-4">
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Operational Commitments
              </div>
              <div class="text-slate-300 font-medium">{{ tier.sla }}</div>
              <div class="text-[#94a3b8] text-[11px]">{{ tier.support }}</div>
            </div>

            <!-- Included Features -->
            <div class="space-y-1.5">
              <div class="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                Core Inclusions
              </div>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li
                  v-for="mod in tier.includedModules"
                  :key="mod"
                  class="flex items-center gap-2"
                >
                  <Check class="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{{ mod }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 pt-3 border-t border-[#26313d] text-right">
            <span class="text-[11px] text-[#94a3b8]">Managed via Contract Engine</span>
          </div>
        </div>
      </div>
    </AdminSectionCard>

    <AdminEmptyState
      title="No Custom Price Exceptions"
      description="Specialized multi-currency overrides or grandfathered rate cards will be displayed here once configured in the commercial billing system."
      icon-name="CreditCard"
    />
  </div>
</template>
