<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import { Info, Download, Filter } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Inbound Enquiries',
  'Review prospect inquiries submitted through public demo and contact touchpoints.'
)

interface EnquiryRecord {
  id: string
  fullName: string
  company: string
  email: string
  interest: string
  estimatedScale: string
  date: string
  status: 'New' | 'In Review' | 'Qualified'
}

const sampleEnquiries: EnquiryRecord[] = [
  {
    id: 'enq-101',
    fullName: 'Eleanor Vance',
    company: 'Apex Global Logistics Corp',
    email: 'e.vance@apexlogistics.io',
    interest: 'Supply Chain & Logistics Suite',
    estimatedScale: '5,000+ Edge Nodes',
    date: 'Today, 09:42',
    status: 'New'
  },
  {
    id: 'enq-102',
    fullName: 'David Sterling',
    company: 'Meridian Capital Partners',
    email: 'dsterling@meridiancap.com',
    interest: 'Financial Services Architecture',
    estimatedScale: '10M+ Daily Transactions',
    date: 'Yesterday, 16:10',
    status: 'In Review'
  },
  {
    id: 'enq-103',
    fullName: 'Dr. Soraya Hansen',
    company: 'Nordic Health Informatics',
    email: 's.hansen@nordichealth.org',
    interest: 'Healthcare Intelligence System',
    estimatedScale: '45 Regional Clinics',
    date: '14 Oct 2026',
    status: 'Qualified'
  },
  {
    id: 'enq-104',
    fullName: 'Marcus Thorne',
    company: 'AeroDynamics Technology Ltd',
    email: 'mthorne@aerodynamics.tech',
    interest: 'Enterprise Data Platform',
    estimatedScale: 'Petabyte Telemetry Store',
    date: '13 Oct 2026',
    status: 'Qualified'
  }
]

function resolveStatusClass(status: EnquiryRecord['status']) {
  switch (status) {
    case 'New':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'In Review':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'Qualified':
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    default:
      return 'bg-slate-800 text-slate-400 border-slate-700'
  }
}
</script>

<template>
  <div class="space-y-6">
    <AdminPageHeader
      title="Inbound Enquiries"
      description="Prospect leads and architectural demo requests routed from the public website forms."
      icon-name="Mail"
      badge="12 Pending"
    >
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md border border-[#26313d] bg-[#0f161f] hover:bg-[#15202c] text-slate-300 transition-colors"
          title="Export demonstration data"
        >
          <Download class="w-4 h-4 text-slate-400" />
          <span>Export CSV</span>
        </button>
      </template>
    </AdminPageHeader>

    <div
      class="flex items-center gap-2 p-3 rounded-md bg-[#0b0f14] border border-[#26313d] text-xs text-[#94a3b8]"
    >
      <Info class="w-4 h-4 text-emerald-400 shrink-0" />
      <span>
        Sample lead pipeline for demonstration. Form submissions from <NuxtLink to="/contact" class="text-emerald-400 hover:underline">/contact</NuxtLink> and <NuxtLink to="/demo" class="text-emerald-400 hover:underline">/demo</NuxtLink> will populate this inbox once the backend API is connected.
      </span>
    </div>

    <AdminSectionCard
      title="Inbound Lead Submissions"
      description="Recent prospective client requests received through the corporate portal."
    >
      <template #actions>
        <div class="flex items-center gap-2 text-xs text-[#94a3b8]">
          <Filter class="w-3.5 h-3.5 text-slate-500" />
          <span>Showing 4 of 12</span>
        </div>
      </template>

      <div class="overflow-x-auto admin-scrollbar">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[#26313d] bg-[#0b0f14]/60 text-[#94a3b8] uppercase tracking-wider text-[11px]">
              <th scope="col" class="py-3 px-4 font-semibold">Prospect</th>
              <th scope="col" class="py-3 px-4 font-semibold">Interest Area</th>
              <th scope="col" class="py-3 px-4 font-semibold hidden md:table-cell">Estimated Scale</th>
              <th scope="col" class="py-3 px-4 font-semibold">Status</th>
              <th scope="col" class="py-3 px-4 font-semibold text-right">Received</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#26313d]/60">
            <tr
              v-for="lead in sampleEnquiries"
              :key="lead.id"
              class="hover:bg-[#121c27] transition-colors"
            >
              <td class="py-3.5 px-4">
                <span class="font-medium text-slate-200 block text-xs sm:text-sm">{{ lead.fullName }}</span>
                <span class="text-[11px] text-slate-400 block">{{ lead.company }}</span>
                <span class="text-[10px] text-slate-500 font-mono">{{ lead.email }}</span>
              </td>
              <td class="py-3.5 px-4 text-slate-300">
                {{ lead.interest }}
              </td>
              <td class="py-3.5 px-4 hidden md:table-cell text-[#94a3b8]">
                {{ lead.estimatedScale }}
              </td>
              <td class="py-3.5 px-4">
                <span
                  class="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase border"
                  :class="resolveStatusClass(lead.status)"
                >
                  {{ lead.status }}
                </span>
              </td>
              <td class="py-3.5 px-4 text-right text-[#94a3b8] whitespace-nowrap">
                {{ lead.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminSectionCard>

    <AdminEmptyState
      title="No Archived Leads"
      description="Archived and disqualified inquiries will be archived here for historical compliance audit records."
      icon-name="Mail"
    />
  </div>
</template>
