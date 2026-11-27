<script setup lang="ts">
import { Clock, ChefHat, CheckCircle2 } from 'lucide-vue-next'

const tickets = [
  {
    kot: '#KOT-142',
    table: 'Table T-04',
    type: 'Dine-in',
    time: '2m ago',
    urgency: 'normal',
    urgencyLabel: 'Normal',
    station: 'Hot Kitchen',
    items: [
      { name: '2× Masala Dosa', notes: 'Extra crispy' },
      { name: '1× Paneer Butter Masala', notes: 'Medium spice' }
    ],
    status: 'Preparing'
  },
  {
    kot: '#KOT-140',
    table: 'Table T-09',
    type: 'Dine-in',
    time: '8m ago',
    urgency: 'warning',
    urgencyLabel: 'Attention',
    station: 'Hot Kitchen',
    items: [
      { name: '1× Ghee Roast Dosa', notes: 'With extra sambar' },
      { name: '2× Filter Coffee', notes: 'Strong, less sugar' }
    ],
    status: 'Ready to Expedite'
  },
  {
    kot: '#KOT-138',
    table: 'Online #SW-892',
    type: 'Delivery',
    time: '14m ago',
    urgency: 'urgent',
    urgencyLabel: 'Delayed',
    station: 'Packing',
    items: [
      { name: '2× Veg Biryani Combo', notes: 'Include extra raita' },
      { name: '2× Fresh Lime Soda', notes: 'Sweet & salt' }
    ],
    status: 'Final Quality Check'
  }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Kitchen Display System (KDS)"
  >
    <!-- KDS Header Bar -->
    <div class="flex items-center justify-between border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <ChefHat class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Live Kitchen Display (KDS)</span>
        <span class="text-zinc-500">· Main Hot Line &amp; Grill</span>
      </div>
      <div class="flex items-center gap-3 text-xs text-zinc-400">
        <span>Average Ticket Time: <strong class="text-white">6m 40s</strong></span>
        <span class="h-2 w-2 rounded-full bg-brand" />
      </div>
    </div>

    <!-- Active Tickets Grid -->
    <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-3.5">
      <div
        v-for="t in tickets"
        :key="t.kot"
        class="flex flex-col justify-between rounded-lg border bg-[#141414] p-3.5 transition-colors"
        :class="[ t.urgency === 'urgent' ? 'border-red-500/50 bg-red-950/10' : t.urgency === 'warning' ? 'border-amber-500/40 bg-amber-950/10' : 'border-white/[0.08]' ]"
      >
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
            <div>
              <span class="font-bold text-white">{{ t.kot }}</span>
              <span class="block text-xs text-zinc-400">{{ t.table }} · {{ t.type }}</span>
            </div>
            <div class="text-right">
              <span
                class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-semibold"
                :class="[ t.urgency === 'urgent' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : t.urgency === 'warning' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-brand/10 text-brand border border-brand/20' ]"
              >
                <Clock class="h-2.5 w-2.5" />
                {{ t.time }} ({{ t.urgencyLabel }})
              </span>
            </div>
          </div>

          <!-- Items List -->
          <div class="py-2.5 space-y-2 text-xs">
            <div v-for="item in t.items" :key="item.name" class="leading-snug">
              <div class="font-medium text-zinc-200">{{ item.name }}</div>
              <div v-if="item.notes" class="text-xs text-zinc-400 italic">
                ↳ {{ item.notes }}
              </div>
            </div>
          </div>
        </div>

        <!-- Action button -->
        <button
          class="mt-3 w-full h-8 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          :class="[ t.urgency === 'warning' ? 'bg-brand text-black hover:bg-brand-hover' : 'bg-white/10 text-white hover:bg-white/15' ]"
        >
          <CheckCircle2 class="h-3.5 w-3.5" />
          <span>{{ t.status }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
