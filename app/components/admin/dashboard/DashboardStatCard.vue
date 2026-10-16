<script setup lang="ts">
import { computed } from 'vue'
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Layers,
  Cpu,
  Mail,
  FileText,
  Building2,
  CreditCard,
  SlidersHorizontal,
  ArrowUpRight
} from 'lucide-vue-next'
import type { DashboardStat } from '~/types/admin'

const props = defineProps<{
  stat: DashboardStat
}>()

const iconComponent = computed(() => {
  switch (props.stat.iconName) {
    case 'Layers':
      return Layers
    case 'Cpu':
      return Cpu
    case 'Mail':
      return Mail
    case 'FileText':
      return FileText
    case 'Building2':
      return Building2
    case 'CreditCard':
      return CreditCard
    case 'SlidersHorizontal':
      return SlidersHorizontal
    default:
      return Layers
  }
})

const trendIcon = computed(() => {
  if (props.stat.trend === 'up') return TrendingUp
  if (props.stat.trend === 'down') return TrendingDown
  return Minus
})

const trendColorClass = computed(() => {
  if (props.stat.trend === 'up') return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  if (props.stat.trend === 'down') return 'text-rose-400 bg-rose-500/10 border-rose-500/20'
  return 'text-slate-400 bg-slate-800 border-slate-700'
})
</script>

<template>
  <div
    class="rounded-lg border border-[#26313d] bg-[#0f161f] p-5 shadow-sm hover:border-[#384859] transition-all relative group flex flex-col justify-between"
  >
    <!-- Header with Icon & Category Title -->
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-lg bg-[#0b0f14] border border-[#26313d] flex items-center justify-center text-emerald-400 shrink-0 group-hover:border-emerald-500/40 transition-colors shadow-inner"
        >
          <component :is="iconComponent" class="w-5 h-5" />
        </div>
        <div>
          <span class="text-xs font-medium text-[#94a3b8] uppercase tracking-wider block">
            {{ stat.title }}
          </span>
          <span v-if="stat.description" class="text-[11px] text-slate-500 block">
            {{ stat.description }}
          </span>
        </div>
      </div>

      <!-- Quick Route Link -->
      <NuxtLink
        v-if="stat.targetRoute"
        :to="stat.targetRoute"
        class="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-[#1b2533] text-slate-400 hover:text-emerald-400"
        :title="`View ${stat.title}`"
      >
        <ArrowUpRight class="w-4 h-4" />
      </NuxtLink>
    </div>

    <!-- Metric Value & Trend Row -->
    <div class="mt-4 pt-3 border-t border-[#26313d]/60 flex items-baseline justify-between gap-2">
      <div>
        <div class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
          {{ stat.value }}
        </div>
        <span class="text-[10px] text-slate-400 uppercase tracking-wide">Demo Value</span>
      </div>

      <div
        v-if="stat.change"
        class="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border"
        :class="trendColorClass"
      >
        <component :is="trendIcon" class="w-3.5 h-3.5" />
        <span>{{ stat.change }}</span>
      </div>
    </div>
  </div>
</template>
