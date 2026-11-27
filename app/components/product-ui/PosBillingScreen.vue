<script setup lang="ts">
import { ref } from 'vue'
import { Search, Plus, Minus, CreditCard, Banknote, QrCode, Split, Check } from 'lucide-vue-next'

interface Props {
  embedded?: boolean
}

withDefaults(defineProps<Props>(), {
  embedded: false
})

const categories = ['Quick Favourites', 'Dosa & Tiffins', 'Beverages', 'Meals']
const activeCategory = ref('Quick Favourites')

const menuItems = [
  { id: '1', name: 'Masala Dosa', price: 90, tag: 'Bestseller' },
  { id: '2', name: 'Filter Coffee', price: 40, tag: 'Hot' },
  { id: '3', name: 'Paneer Butter Masala', price: 220, tag: 'Chef Special' },
  { id: '4', name: 'Ghee Roast Dosa', price: 120, tag: null },
  { id: '5', name: 'Idli Vada Combo', price: 75, tag: null },
  { id: '6', name: 'Fresh Lime Soda', price: 60, tag: null }
]

const currentBill = ref([
  { id: '1', name: 'Masala Dosa', qty: 2, price: 90 },
  { id: '2', name: 'Filter Coffee', qty: 2, price: 40 },
  { id: '3', name: 'Paneer Butter Masala', qty: 1, price: 220 }
])

const subtotal = computed(() => {
  return currentBill.value.reduce((sum, item) => sum + item.price * item.qty, 0)
})

const cgst = computed(() => Math.round(subtotal.value * 0.025 * 100) / 100)
const sgst = computed(() => Math.round(subtotal.value * 0.025 * 100) / 100)
const grandTotal = computed(() => (subtotal.value + cgst.value + sgst.value).toFixed(2))

const selectedPayment = ref('UPI')
</script>

<template>
  <div
    class="w-full bg-[#0E0E0E] text-white font-ui rounded-xl overflow-hidden border border-white/[0.08]"
    role="region"
    aria-label="Sample POS & Billing Screen"
  >
    <!-- POS Top Navigation / Quick Stats -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#141414] px-4 py-2.5 text-xs text-zinc-400">
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1.5 font-semibold text-white">
          <span class="h-2 w-2 rounded-full bg-brand" />
          Counter 01 · Dine-in
        </span>
        <span class="hidden sm:inline text-zinc-600">|</span>
        <span class="hidden sm:inline text-zinc-400">Register: ₹14,820 Today</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1 rounded bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
          <Check class="h-3 w-3" />
          Offline Sync: 100% OK
        </span>
      </div>
    </div>

    <!-- Main Workspace: Item Catalog (Left) + Active Ticket (Right) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
      <!-- Left Catalog (7 cols on lg) -->
      <div class="lg:col-span-7 p-4 sm:p-5 flex flex-col border-b lg:border-b-0 lg:border-r border-white/[0.08]">
        <!-- Search & Category Bar -->
        <div class="flex flex-col sm:flex-row gap-2.5 mb-4">
          <div class="relative flex-1">
            <Search class="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
            <input
              type="text"
              readonly
              value="Filter Coffee"
              class="w-full rounded-lg border border-white/10 bg-[#161616] py-1.5 pl-8 pr-3 text-xs text-zinc-300 outline-none"
              aria-label="Search menu items"
            >
          </div>
          <div class="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <button
              v-for="cat in categories"
              :key="cat"
              class="whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
              :class="cat === activeCategory ? 'bg-white/10 text-white font-semibold' : 'text-zinc-400 hover:text-white'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Menu Item Cards Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 flex-1 content-start">
          <div
            v-for="item in menuItems"
            :key="item.id"
            class="group relative flex flex-col justify-between rounded-lg border border-white/[0.08] bg-[#141414] p-3 hover:border-brand/40 hover:bg-[#181818] transition-colors cursor-pointer"
          >
            <div>
              <div v-if="item.tag" class="mb-1 text-xs font-semibold text-brand">
                {{ item.tag }}
              </div>
              <div class="text-xs font-medium text-zinc-200 line-clamp-1 group-hover:text-white">
                {{ item.name }}
              </div>
            </div>
            <div class="mt-3 flex items-center justify-between">
              <span class="font-ui text-sm font-semibold text-white tabular-nums">₹{{ item.price }}</span>
              <button class="h-6 w-6 rounded bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-brand group-hover:text-black transition-colors" aria-label="Add item">
                <Plus class="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
          <span>Shortcuts: [F2] Pay · [F4] Tables · [F9] KOT</span>
          <span>GSTIN: 29AABCU9603R1ZM</span>
        </div>
      </div>

      <!-- Right Bill / Invoice Panel (5 cols on lg) -->
      <div class="lg:col-span-5 bg-[#121212] p-4 sm:p-5 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div>
              <span class="text-xs font-semibold text-white">Order #KOT-0142</span>
              <span class="block text-xs text-zinc-400">Table T-04 · Captain: Rajesh</span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded bg-brand/10 text-brand font-medium">Active Bill</span>
          </div>

          <!-- Line items -->
          <div class="divide-y divide-white/[0.05] my-2 max-h-[190px] overflow-y-auto">
            <div
              v-for="item in currentBill"
              :key="item.id"
              class="py-2.5 flex items-center justify-between text-xs"
            >
              <div class="flex-1 pr-2">
                <div class="font-medium text-zinc-200">{{ item.name }}</div>
                <div class="text-xs text-zinc-500 tabular-nums">₹{{ item.price }} × {{ item.qty }}</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center border border-white/10 rounded bg-[#181818]">
                  <button class="h-5 w-5 flex items-center justify-center text-zinc-400 hover:text-white" aria-label="Decrease">
                    <Minus class="h-2.5 w-2.5" />
                  </button>
                  <span class="px-1.5 text-xs font-semibold tabular-nums">{{ item.qty }}</span>
                  <button class="h-5 w-5 flex items-center justify-center text-zinc-400 hover:text-white" aria-label="Increase">
                    <Plus class="h-2.5 w-2.5" />
                  </button>
                </div>
                <span class="w-14 text-right font-semibold text-white tabular-nums">
                  ₹{{ item.price * item.qty }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bill Totals & Settlement -->
        <div class="pt-3 border-t border-white/[0.08] space-y-2">
          <div class="flex justify-between text-xs text-zinc-400">
            <span>Subtotal</span>
            <span class="tabular-nums text-zinc-200">₹{{ subtotal }}</span>
          </div>
          <div class="flex justify-between text-xs text-zinc-500">
            <span>CGST (2.5%)</span>
            <span class="tabular-nums">₹{{ cgst }}</span>
          </div>
          <div class="flex justify-between text-xs text-zinc-500">
            <span>SGST (2.5%)</span>
            <span class="tabular-nums">₹{{ sgst }}</span>
          </div>

          <div class="flex justify-between items-baseline pt-2 border-t border-white/[0.08]">
            <span class="text-xs font-semibold text-white">Grand Total (GST Incl.)</span>
            <span class="text-xl font-bold text-white tabular-nums">₹{{ grandTotal }}</span>
          </div>

          <!-- Payment Options -->
          <div class="grid grid-cols-4 gap-1.5 pt-2">
            <button
              class="flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-xs font-medium transition-colors"
              :class="selectedPayment === 'UPI' ? 'bg-brand text-black border-brand font-semibold shadow-sm' : 'bg-[#181818] border-white/10 text-zinc-300 hover:text-white'"
              @click="selectedPayment = 'UPI'"
            >
              <QrCode class="h-3.5 w-3.5 mb-1" />
              UPI
            </button>
            <button
              class="flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-xs font-medium transition-colors"
              :class="selectedPayment === 'Card' ? 'bg-brand text-black border-brand font-semibold' : 'bg-[#181818] border-white/10 text-zinc-300 hover:text-white'"
              @click="selectedPayment = 'Card'"
            >
              <CreditCard class="h-3.5 w-3.5 mb-1" />
              Card
            </button>
            <button
              class="flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-xs font-medium transition-colors"
              :class="selectedPayment === 'Cash' ? 'bg-brand text-black border-brand font-semibold' : 'bg-[#181818] border-white/10 text-zinc-300 hover:text-white'"
              @click="selectedPayment = 'Cash'"
            >
              <Banknote class="h-3.5 w-3.5 mb-1" />
              Cash
            </button>
            <button
              class="flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-xs font-medium transition-colors"
              :class="selectedPayment === 'Split' ? 'bg-brand text-black border-brand font-semibold' : 'bg-[#181818] border-white/10 text-zinc-300 hover:text-white'"
              @click="selectedPayment = 'Split'"
            >
              <Split class="h-3.5 w-3.5 mb-1" />
              Split
            </button>
          </div>

          <!-- Settle CTA Button -->
          <button
            class="w-full mt-2 h-10 rounded-lg bg-brand text-black font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-brand-hover transition-colors shadow-sm"
          >
            <span>Print Invoice &amp; Settle Bill (₹{{ grandTotal }})</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
