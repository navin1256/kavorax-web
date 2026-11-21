<script setup lang="ts">
import { CheckCircle2, ShoppingBag, Utensils } from 'lucide-vue-next'

const items = [
  { name: 'Special Masala Dosa', desc: 'Served with 3 chutneys & sambar', price: 95 },
  { name: 'Traditional Filter Kaapi', desc: 'Degree decoction with frothed milk', price: 40 },
  { name: 'Ghee Podi Idli (2 pcs)', desc: 'Tossed in homemade gunpowder & ghee', price: 80 }
]
</script>

<template>
  <div
    class="w-full max-w-[320px] mx-auto bg-[#0F0F0F] rounded-[28px] border-2 border-white/20 p-3 shadow-2xl font-ui text-white select-none"
    role="region"
    aria-label="Sample QR Ordering Mobile Screen"
  >
    <!-- Top Notch -->
    <div class="flex items-center justify-between px-2 pt-1 pb-3 text-xs text-zinc-400">
      <span>12:45</span>
      <div class="h-3 w-16 rounded-full bg-[#202020]" />
      <span class="text-brand">5G ●</span>
    </div>

    <!-- Restaurant Header -->
    <div class="rounded-xl bg-[#181818] p-3 border border-white/[0.08] mb-3">
      <div class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
          <Utensils class="h-4 w-4" />
        </div>
        <div>
          <h4 class="text-xs font-bold text-white">The Bangalore Tiffin Room</h4>
          <span class="text-xs text-zinc-400">Table T-07 · Digital Dine-in QR</span>
        </div>
      </div>
    </div>

    <!-- Active Menu Items -->
    <div class="space-y-2 mb-3">
      <div
        v-for="item in items"
        :key="item.name"
        class="rounded-lg bg-[#141414] p-2.5 border border-white/[0.06] flex items-center justify-between"
      >
        <div class="pr-2">
          <div class="text-xs font-semibold text-zinc-100">{{ item.name }}</div>
          <div class="text-xs text-zinc-400 line-clamp-1">{{ item.desc }}</div>
          <div class="text-xs font-bold text-brand mt-1 tabular-nums">₹{{ item.price }}</div>
        </div>
        <button class="px-2 py-1 rounded bg-white/10 hover:bg-brand hover:text-black text-xs font-semibold text-zinc-200 transition-colors">
          Add
        </button>
      </div>
    </div>

    <!-- Order Status Bottom Card -->
    <div class="rounded-xl bg-brand/10 border border-brand/30 p-2.5 text-xs">
      <div class="flex items-center gap-1.5 text-brand font-semibold mb-0.5">
        <CheckCircle2 class="h-3.5 w-3.5" />
        <span>KOT Sent to Kitchen!</span>
      </div>
      <p class="text-xs text-zinc-300">
        Order #T07-28 is being prepared. Your bill will update live.
      </p>
      <div class="mt-2 pt-2 border-t border-brand/20 flex justify-between text-xs font-semibold">
        <span>3 Items Ordered</span>
        <span class="tabular-nums">Total: ₹215</span>
      </div>
    </div>
  </div>
</template>
