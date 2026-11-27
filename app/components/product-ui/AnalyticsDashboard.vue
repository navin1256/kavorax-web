<script setup lang="ts">
import { BarChart3, TrendingUp, DollarSign, Calendar, ArrowUpRight } from 'lucide-vue-next'

const stats = [
  { label: "Today's Revenue", value: "₹48,920", change: "+14.8%", up: true },
  { label: "Gross Margin", value: "68.4%", change: "+2.1%", up: true },
  { label: "Total Invoices", value: "142", change: "+18 bills", up: true },
  { label: "Avg Ticket Size", value: "₹344", change: "-0.8%", up: false }
]

const topItems = [
  { rank: '01', name: 'Special Masala Dosa', sales: '84 sold', revenue: '₹7,560' },
  { rank: '02', name: 'South Indian Filter Coffee', sales: '142 sold', revenue: '₹5,680' },
  { rank: '03', name: 'Paneer Butter Masala', sales: '24 sold', revenue: '₹5,280' },
  { rank: '04', name: 'Idli Vada Combo', sales: '48 sold', revenue: '₹3,600' }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Business Analytics Dashboard"
  >
    <!-- Analytics Header -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <BarChart3 class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Consolidated Analytics &amp; Reporting</span>
        <span class="text-zinc-500">· All Outlets (Live)</span>
      </div>
      <div class="flex items-center gap-2 text-xs text-zinc-400">
        <span class="inline-flex items-center gap-1 text-brand bg-brand/10 px-2 py-0.5 rounded">
          <TrendingUp class="h-3 w-3" />
          Pacing +14.8% vs last week
        </span>
      </div>
    </div>

    <!-- KPI Summary Grid -->
    <div class="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-white/[0.06]">
      <div
        v-for="s in stats"
        :key="s.label"
        class="bg-[#141414] border border-white/[0.06] rounded-lg p-3"
      >
        <div class="text-xs text-zinc-400">{{ s.label }}</div>
        <div class="text-base font-semibold text-white mt-1">{{ s.value }}</div>
        <div class="text-xs text-brand flex items-center gap-0.5 mt-0.5">
          <ArrowUpRight class="h-2.5 w-2.5" />
          <span>{{ s.change }}</span>
        </div>
      </div>
    </div>

    <!-- Charts & Leaderboards -->
    <div class="p-4 grid grid-cols-1 sm:grid-cols-12 gap-4">
      <!-- Hourly Trend Simulated Chart -->
      <div class="sm:col-span-7 bg-[#141414] border border-white/[0.06] rounded-lg p-3 flex flex-col justify-between">
        <div class="flex items-center justify-between text-xs mb-3">
          <span class="font-medium text-zinc-300">Hourly Revenue Curve</span>
          <span class="text-zinc-500 text-xs">Peak: 1:00 PM – 2:30 PM</span>
        </div>
        <div class="h-28 flex items-end gap-2 pt-2 px-1">
          <div class="flex-1 bg-brand/20 hover:bg-brand/40 rounded-t h-[35%] transition-colors" title="09:00"></div>
          <div class="flex-1 bg-brand/30 hover:bg-brand/50 rounded-t h-[50%] transition-colors" title="10:00"></div>
          <div class="flex-1 bg-brand/40 hover:bg-brand/60 rounded-t h-[65%] transition-colors" title="11:00"></div>
          <div class="flex-1 bg-brand/60 hover:bg-brand/80 rounded-t h-[85%] transition-colors" title="12:00"></div>
          <div class="flex-1 bg-brand hover:bg-brand-hover rounded-t h-[100%] transition-colors shadow-[0_0_8px_rgba(16,185,129,0.4)]" title="13:00 Peak"></div>
          <div class="flex-1 bg-brand/80 hover:bg-brand rounded-t h-[90%] transition-colors" title="14:00"></div>
          <div class="flex-1 bg-brand/35 hover:bg-brand/55 rounded-t h-[45%] transition-colors" title="15:00"></div>
          <div class="flex-1 bg-brand/50 hover:bg-brand/70 rounded-t h-[70%] transition-colors" title="16:00"></div>
          <div class="flex-1 bg-brand/75 hover:bg-brand/95 rounded-t h-[80%] transition-colors" title="17:00"></div>
        </div>
        <div class="flex justify-between text-xs text-zinc-500 mt-2 px-1 font-mono">
          <span>09:00</span>
          <span>13:00 (Peak)</span>
          <span>18:00</span>
        </div>
      </div>

      <!-- Top Grossing SKUs -->
      <div class="sm:col-span-5 bg-[#141414] border border-white/[0.06] rounded-lg p-3">
        <div class="text-xs font-medium text-zinc-300 mb-2.5">Top Grossing Items</div>
        <div class="space-y-2">
          <div
            v-for="item in topItems"
            :key="item.rank"
            class="flex items-center justify-between text-xs"
          >
            <div class="flex items-center gap-2 truncate pr-2">
              <span class="font-mono text-xs text-zinc-500">{{ item.rank }}</span>
              <span class="text-zinc-200 truncate">{{ item.name }}</span>
            </div>
            <span class="font-semibold text-white shrink-0">{{ item.revenue }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


