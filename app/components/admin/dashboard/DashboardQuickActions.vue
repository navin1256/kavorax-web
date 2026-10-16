<script setup lang="ts">
import {
  Layers,
  Cpu,
  Building2,
  CreditCard,
  Mail,
  FileText,
  SlidersHorizontal,
  ArrowRight
} from 'lucide-vue-next'
import type { QuickActionItem } from '~/types/admin'

const quickActions: QuickActionItem[] = [
  {
    id: 'manage-products',
    title: 'Product Catalog',
    description: 'Configure software modules & enterprise capability matrix',
    iconName: 'Layers',
    path: '/admin/products',
    badge: '6 Items'
  },
  {
    id: 'manage-solutions',
    title: 'Solution Architectures',
    description: 'Manage cross-vertical integration suites & blueprints',
    iconName: 'Cpu',
    path: '/admin/solutions',
    badge: '4 Suites'
  },
  {
    id: 'manage-enquiries',
    title: 'Lead Pipeline',
    description: 'Review prospect enquiries, evaluation requests & RFPs',
    iconName: 'Mail',
    path: '/admin/enquiries',
    badge: '12 Active'
  },
  {
    id: 'manage-content',
    title: 'Website Content',
    description: 'Update public pages, editorial releases & governance docs',
    iconName: 'FileText',
    path: '/admin/content',
    badge: '8 Pages'
  },
  {
    id: 'manage-pricing',
    title: 'Pricing & SLAs',
    description: 'Maintain commercial tier pricing & service commitments',
    iconName: 'CreditCard',
    path: '/admin/pricing'
  },
  {
    id: 'manage-settings',
    title: 'System Settings',
    description: 'Audit controls, security configurations & role policies',
    iconName: 'SlidersHorizontal',
    path: '/admin/settings'
  }
]

function resolveIcon(iconName: string) {
  switch (iconName) {
    case 'Layers':
      return Layers
    case 'Cpu':
      return Cpu
    case 'Building2':
      return Building2
    case 'CreditCard':
      return CreditCard
    case 'Mail':
      return Mail
    case 'FileText':
      return FileText
    case 'SlidersHorizontal':
      return SlidersHorizontal
    default:
      return Layers
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <NuxtLink
      v-for="action in quickActions"
      :key="action.id"
      :to="action.path"
      class="group p-4 rounded-lg border border-[#26313d] bg-[#0f161f] hover:border-emerald-500/40 hover:bg-[#121c27] transition-all flex flex-col justify-between"
    >
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3">
          <div
            class="w-9 h-9 rounded-md bg-[#0b0f14] border border-[#26313d] flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors shadow-inner shrink-0"
          >
            <component :is="resolveIcon(action.iconName)" class="w-4 h-4" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                {{ action.title }}
              </h3>
              <span
                v-if="action.badge"
                class="px-1.5 py-0.5 text-[10px] font-medium rounded bg-[#182330] text-[#94a3b8] border border-[#26313d]"
              >
                {{ action.badge }}
              </span>
            </div>
            <p class="text-xs text-[#94a3b8] mt-1 line-clamp-2">
              {{ action.description }}
            </p>
          </div>
        </div>

        <ArrowRight class="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
      </div>
    </NuxtLink>
  </div>
</template>
