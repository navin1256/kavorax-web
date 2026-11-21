<script setup lang="ts">
import { Bike, CheckCircle2, Clock, Navigation } from 'lucide-vue-next'

const deliveries = [
  { id: '#DEL-301', partner: 'Direct WhatsApp', dest: 'Indiranagar 2nd Stage', amount: '₹620', status: 'Out for Delivery', time: 'ETA 12m', rider: 'Suresh M. (In-house)' },
  { id: '#DEL-299', partner: 'Zomato Integration', dest: 'Domlur Layout', amount: '₹480', status: 'Rider Arrived', time: 'At Counter', rider: 'Partner Fleet' },
  { id: '#DEL-294', partner: 'Swiggy Integration', dest: 'HAL 3rd Stage', amount: '₹890', status: 'Delivered', time: '12:35 PM', rider: 'Partner Fleet' }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Delivery Dispatch & Fleet Tracker"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <Bike class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Central Delivery &amp; Dispatch Hub</span>
      </div>
      <span class="text-xs text-zinc-400">Direct Storefront &amp; Aggregator Sync</span>
    </div>

    <!-- Active Delivery List -->
    <div class="p-4 space-y-2.5">
      <div
        v-for="d in deliveries"
        :key="d.id"
        class="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-[#141414] gap-2 text-xs"
      >
        <div class="flex items-center gap-3">
          <div class="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand">
            <Navigation class="h-4 w-4" />
          </div>
          <div>
            <div class="font-semibold text-white flex items-center gap-2">
              <span>{{ d.id }}</span>
              <span class="text-xs font-normal text-zinc-400">· {{ d.partner }}</span>
            </div>
            <div class="text-xs text-zinc-400">
              {{ d.dest }} · Rider: {{ d.rider }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between sm:justify-end gap-3">
          <span class="font-semibold text-white tabular-nums">{{ d.amount }}</span>
          <span
            class="px-2 py-0.5 rounded text-xs font-semibold inline-flex items-center gap-1"
            :class="d.status === 'Delivered' ? 'bg-zinc-800 text-zinc-400' : 'bg-brand/10 text-brand border border-brand/20'"
          >
            <CheckCircle2 v-if="d.status === 'Delivered'" class="h-3 w-3" />
            <Clock v-else class="h-3 w-3" />
            {{ d.status }} ({{ d.time }})
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
