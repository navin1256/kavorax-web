<script setup lang="ts">
import { ShoppingBag, Globe, CheckCircle2, ArrowRight, Package } from 'lucide-vue-next'

const webOrders = [
  { id: '#WEB-2041', customer: 'Ananya S.', items: 'Coffee Beans + Chemex', total: '₹1,850', status: 'Payment Confirmed', sync: 'Stock Synced' },
  { id: '#WEB-2040', customer: 'Vikram R.', items: 'Cold Brew 4-Pack', total: '₹760', status: 'Packed', sync: 'Stock Synced' },
  { id: '#WEB-2038', customer: 'Pooja K.', items: 'Artisan Dosa Batter (2L)', total: '₹320', status: 'In Transit', sync: 'Stock Synced' }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Omnichannel E-commerce Storefront & Order Sync"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <Globe class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Digital Storefront &amp; Unified Inventory Sync</span>
      </div>
      <span class="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded font-medium">Live POS Sync: Active</span>
    </div>

    <!-- Live Store Overview -->
    <div class="p-4 space-y-3">
      <div class="flex items-center justify-between p-3 rounded-lg bg-[#141414] border border-white/[0.06]">
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
            <ShoppingBag class="h-4 w-4" />
          </div>
          <div>
            <div class="text-xs font-semibold text-white">Branded Web Storefront</div>
            <div class="text-xs text-zinc-400">order.kavorax.com/store · Single catalog with counter POS</div>
          </div>
        </div>
        <span class="text-xs text-zinc-300 font-mono">18 Active SKUs</span>
      </div>

      <!-- Orders Pipeline -->
      <div class="space-y-2">
        <div class="text-xs font-medium text-zinc-400 uppercase tracking-wider px-1">Recent Web Orders</div>
        <div
          v-for="order in webOrders"
          :key="order.id"
          class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg border border-white/[0.06] bg-[#141414] text-xs gap-2"
        >
          <div class="flex items-center gap-2.5">
            <Package class="h-3.5 w-3.5 text-brand shrink-0" />
            <div>
              <div class="font-semibold text-white">{{ order.id }} · {{ order.customer }}</div>
              <div class="text-xs text-zinc-400">{{ order.items }}</div>
            </div>
          </div>

          <div class="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <span class="font-semibold text-white">{{ order.total }}</span>
            <span class="px-2 py-0.5 rounded text-xs bg-brand/10 text-brand border border-brand/20">
              {{ order.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


