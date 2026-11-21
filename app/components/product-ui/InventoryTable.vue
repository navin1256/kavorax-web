<script setup lang="ts">
import { AlertCircle, ArrowUpRight, CheckCircle, Package } from 'lucide-vue-next'

const items = [
  { sku: 'RAW-042', name: 'Fresh Malai Paneer', cat: 'Dairy & Perishables', stock: '4.5 kg', reorder: '10.0 kg', status: 'Low Stock', urgent: true },
  { sku: 'RAW-018', name: 'Arabica Coffee Beans', cat: 'Beverage Raw', stock: '18.0 kg', reorder: '5.0 kg', status: 'In Stock', urgent: false },
  { sku: 'PKG-102', name: 'Meal Trays 5-Compartment', cat: 'Packaging', stock: '85 pcs', reorder: '200 pcs', status: 'Low Stock', urgent: true },
  { sku: 'RAW-091', name: 'Pure Cow Ghee (Tins)', cat: 'Grocery', stock: '14 tins', reorder: '6 tins', status: 'In Stock', urgent: false },
  { sku: 'RAW-007', name: 'Basmati Rice (Classic)', cat: 'Grains & Pulses', stock: '65 kg', reorder: '25 kg', status: 'In Stock', urgent: false }
]
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample Inventory & Stock Management Screen"
  >
    <!-- Inventory Header -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs">
      <div class="flex items-center gap-2">
        <Package class="h-4 w-4 text-brand" />
        <span class="font-semibold text-white">Live Central Inventory</span>
        <span class="text-zinc-500">· Outlet: Indiranagar Central Kitchen</span>
      </div>
      <div class="flex items-center gap-2 text-xs">
        <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-medium">2 Items Below Threshold</span>
        <button class="px-2.5 py-1 rounded bg-brand text-black font-semibold text-xs hover:bg-brand-hover transition-colors">
          + Create Purchase Order
        </button>
      </div>
    </div>

    <!-- Inventory Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs border-collapse">
        <thead>
          <tr class="border-b border-white/[0.08] bg-[#121212] text-zinc-400">
            <th class="py-2.5 px-4 font-medium">Item &amp; SKU</th>
            <th class="py-2.5 px-4 font-medium hidden sm:table-cell">Category</th>
            <th class="py-2.5 px-4 font-medium text-right">Current Stock</th>
            <th class="py-2.5 px-4 font-medium text-right hidden sm:table-cell">Reorder Level</th>
            <th class="py-2.5 px-4 font-medium text-center">Status</th>
            <th class="py-2.5 px-4 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/[0.05]">
          <tr
            v-for="row in items"
            :key="row.sku"
            class="hover:bg-white/[0.02] transition-colors"
          >
            <td class="py-3 px-4">
              <div class="font-medium text-white">{{ row.name }}</div>
              <div class="text-xs text-zinc-500 font-mono">{{ row.sku }}</div>
            </td>
            <td class="py-3 px-4 text-zinc-400 hidden sm:table-cell">{{ row.cat }}</td>
            <td class="py-3 px-4 text-right font-semibold text-white tabular-nums">{{ row.stock }}</td>
            <td class="py-3 px-4 text-right text-zinc-400 tabular-nums hidden sm:table-cell">{{ row.reorder }}</td>
            <td class="py-3 px-4 text-center">
              <span
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
                :class="row.urgent ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30' : 'bg-brand/10 text-brand border border-brand/20'"
              >
                <AlertCircle v-if="row.urgent" class="h-2.5 w-2.5" />
                <CheckCircle v-else class="h-2.5 w-2.5" />
                {{ row.status }}
              </span>
            </td>
            <td class="py-3 px-4 text-right">
              <button
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium border border-white/10 hover:border-brand/40 hover:text-brand transition-colors text-zinc-300"
              >
                <span>Reorder</span>
                <ArrowUpRight class="h-3 w-3" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
