<script setup lang="ts">
import { Store, TrendingUp, CheckCircle, ArrowUpRight } from 'lucide-vue-next'

const outlets = [
  { name: 'Indiranagar 100ft Rd', city: 'Bengaluru', sales: '₹58,420', orders: 312, trend: '+14.2%', peak: true, status: 'Active · Peak' },
  { name: 'Koramangala 5th Block', city: 'Bengaluru', sales: '₹44,180', orders: 245, trend: '+9.4%', peak: false, status: 'Active' },
  { name: 'Whitefield Main Rd', city: 'Bengaluru', sales: '₹32,650', orders: 184, trend: '+6.1%', peak: false, status: 'Active' },
  { name: 'Jayanagar 4th Block', city: 'Bengaluru', sales: '₹22,100', orders: 122, trend: '+3.8%', peak: false, status: 'Active' }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Multi-Location Operations Dashboard"
  >
    <!-- Header -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <Store class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Multi-Location Central Hub</span>
        <span class="text-zinc-500">· 4 Outlets Online</span>
      </div>
      <div class="flex items-center gap-2 text-zinc-400 text-xs">
        <span>Consolidated Daily Revenue:</span>
        <strong class="text-white text-xs tabular-nums">₹1,57,350</strong>
        <span class="inline-flex items-center text-brand font-semibold gap-0.5">
          <TrendingUp class="h-3 w-3" /> +11.8%
        </span>
      </div>
    </div>

    <!-- Outlets List -->
    <div class="p-4 space-y-2.5">
      <div
        v-for="o in outlets"
        :key="o.name"
        class="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-[#141414] hover:border-white/15 transition-all gap-2"
      >
        <div class="flex items-center gap-3">
          <div class="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 font-bold text-xs">
            {{ o.name.charAt(0) }}
          </div>
          <div>
            <div class="text-xs font-semibold text-white flex items-center gap-2">
              <span>{{ o.name }}</span>
              <span
                v-if="o.peak"
                class="px-1.5 py-0.2 rounded text-xs font-semibold bg-brand/10 text-brand border border-brand/20"
              >
                High Demand
              </span>
            </div>
            <div class="text-xs text-zinc-400">
              {{ o.orders }} orders fulfilled today · {{ o.city }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between sm:justify-end gap-4 text-xs">
          <div class="text-right">
            <div class="font-bold text-white tabular-nums text-sm">{{ o.sales }}</div>
            <div class="text-xs text-brand flex items-center justify-end gap-0.5 font-medium">
              <span>{{ o.trend }} vs yesterday</span>
            </div>
          </div>
          <button class="h-7 w-7 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <ArrowUpRight class="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
