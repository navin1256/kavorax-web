<script setup lang="ts">
import {
  Layers,
  Cpu,
  Mail,
  FileText,
  SlidersHorizontal,
  ExternalLink,
  Info
} from 'lucide-vue-next'
import type { RecentActivityItem } from '~/types/admin'

const activities: RecentActivityItem[] = [
  {
    id: 'act-1',
    type: 'enquiry',
    title: 'Enterprise Demo Request',
    description: 'A global logistics provider requested a tailored platform walkthrough',
    timestamp: '2026-10-16 09:42',
    relativeTime: '1 hour ago',
    actor: 'Lead Routing Bot',
    status: 'new',
    route: '/admin/enquiries'
  },
  {
    id: 'act-2',
    type: 'product',
    title: 'KavoraX DataMesh Engine Spec',
    description: 'Updated enterprise integration matrix & multi-region schema specs',
    timestamp: '2026-10-15 17:15',
    relativeTime: 'Yesterday',
    actor: 'Platform Architect',
    status: 'updated',
    route: '/admin/products'
  },
  {
    id: 'act-3',
    type: 'solution',
    title: 'Financial Services Blueprint',
    description: 'Published revised low-latency transaction processing architecture',
    timestamp: '2026-10-15 14:20',
    relativeTime: 'Yesterday',
    actor: 'Solutions Engineering',
    status: 'published',
    route: '/admin/solutions'
  },
  {
    id: 'act-4',
    type: 'content',
    title: 'Q4 Enterprise Solutions Paper',
    description: 'Drafted executive brief on autonomous supply chain architectures',
    timestamp: '2026-10-14 11:30',
    relativeTime: '2 days ago',
    actor: 'Corporate Editorial',
    status: 'pending',
    route: '/admin/content'
  },
  {
    id: 'act-5',
    type: 'settings',
    title: 'Multi-Factor Policy Check',
    description: 'Routine compliance audit completed for enterprise administration tokens',
    timestamp: '2026-10-13 08:00',
    relativeTime: '3 days ago',
    actor: 'Security Operations',
    status: 'published',
    route: '/admin/settings'
  }
]

function resolveIcon(type: RecentActivityItem['type']) {
  switch (type) {
    case 'product':
      return Layers
    case 'solution':
      return Cpu
    case 'enquiry':
      return Mail
    case 'content':
      return FileText
    case 'settings':
      return SlidersHorizontal
    default:
      return FileText
  }
}

function resolveStatusClass(status: RecentActivityItem['status']) {
  switch (status) {
    case 'new':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    case 'published':
      return 'bg-sky-500/10 text-sky-400 border-sky-500/20'
    case 'updated':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    case 'pending':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    default:
      return 'bg-slate-800 text-slate-400 border-slate-700'
  }
}
</script>

<template>
  <div class="space-y-4">
    <!-- Clarification banner ensuring honest mock data disclosure -->
    <div
      class="flex items-center gap-2 p-2.5 rounded-md bg-[#0b0f14] border border-[#26313d] text-xs text-[#94a3b8]"
    >
      <Info class="w-4 h-4 text-emerald-400 shrink-0" />
      <span>
        Sample audit log demonstrating activity stream presentation. Not connected to a live database.
      </span>
    </div>

    <!-- Activity Stream Table / List -->
    <div class="rounded-lg border border-[#26313d] bg-[#0f161f] overflow-hidden">
      <div class="overflow-x-auto admin-scrollbar">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[#26313d] bg-[#0b0f14]/80 text-[#94a3b8] uppercase tracking-wider text-[11px]">
              <th scope="col" class="py-3 px-4 font-semibold">Event</th>
              <th scope="col" class="py-3 px-4 font-semibold hidden md:table-cell">Actor</th>
              <th scope="col" class="py-3 px-4 font-semibold">Status</th>
              <th scope="col" class="py-3 px-4 font-semibold text-right">Time</th>
              <th scope="col" class="py-3 px-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#26313d]/60">
            <tr
              v-for="act in activities"
              :key="act.id"
              class="hover:bg-[#121c27] transition-colors"
            >
              <td class="py-3.5 px-4">
                <div class="flex items-center gap-3">
                  <div
                    class="w-7 h-7 rounded bg-[#0b0f14] border border-[#26313d] flex items-center justify-center text-slate-400 shrink-0"
                  >
                    <component :is="resolveIcon(act.type)" class="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span class="font-medium text-slate-200 block text-xs sm:text-sm">
                      {{ act.title }}
                    </span>
                    <span class="text-[11px] text-[#94a3b8] line-clamp-1">
                      {{ act.description }}
                    </span>
                  </div>
                </div>
              </td>

              <td class="py-3.5 px-4 hidden md:table-cell text-slate-300">
                {{ act.actor }}
              </td>

              <td class="py-3.5 px-4">
                <span
                  class="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase border"
                  :class="resolveStatusClass(act.status)"
                >
                  {{ act.status }}
                </span>
              </td>

              <td class="py-3.5 px-4 text-right text-[#94a3b8] whitespace-nowrap">
                <span :title="act.timestamp">{{ act.relativeTime }}</span>
              </td>

              <td class="py-3.5 px-4 text-right">
                <NuxtLink
                  v-if="act.route"
                  :to="act.route"
                  class="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                  :title="`Open ${act.title}`"
                >
                  <span class="hidden sm:inline">View</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
