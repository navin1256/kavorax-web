<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Receipt,
  QrCode,
  ShoppingBag,
  Boxes,
  UtensilsCrossed,
  Truck,
  Users,
  BarChart3,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(sectionRef, { threshold: 0.1 })

interface ModuleCard {
  slug: string
  name: string
  href: string
  category: string
  description: string
  icon: any
  tag: string
}

const modules: ModuleCard[] = [
  {
    slug: 'pos-and-billing',
    name: 'POS & Billing',
    href: '/pos-and-billing',
    category: 'Sales & Checkout',
    description: 'Fast, offline-first point of sale supporting GST invoicing, UPI, card, cash, and split settlements in under 100ms.',
    icon: Receipt,
    tag: 'Core Terminal'
  },
  {
    slug: 'kitchen-display',
    name: 'Kitchen Display (KDS)',
    href: '/kitchen-display',
    category: 'Kitchen Station',
    description: 'Real-time order routing by prep station, course management, item modifiers, and zero paper ticket loss.',
    icon: UtensilsCrossed,
    tag: 'Kitchen Ops'
  },
  {
    slug: 'inventory-and-stock',
    name: 'Inventory & Stock',
    href: '/inventory-and-stock',
    category: 'Inventory Control',
    description: 'Live recipe depletion, low-stock reorder thresholds, multi-warehouse transfers, and purchase order tracking.',
    icon: Boxes,
    tag: 'Stock Ledger'
  },
  {
    slug: 'digital-ordering',
    name: 'Digital Ordering',
    href: '/digital-ordering',
    category: 'Direct Guest Sales',
    description: 'Commission-free table QR ordering and digital menus that route directly into billing and kitchen displays.',
    icon: QrCode,
    tag: 'QR Commerce'
  },
  {
    slug: 'crm',
    name: 'CRM & Loyalty',
    href: '/crm',
    category: 'Customer Retention',
    description: 'Customer profiles, automated visit tracking, tiered loyalty points, and targeted WhatsApp/SMS re-engagement.',
    icon: Users,
    tag: 'Profiles'
  },
  {
    slug: 'multi-location',
    name: 'Multi-Location',
    href: '/multi-location',
    category: 'Multi-Outlet Scale',
    description: 'Centralized master catalog, menu pricing synchronization across branches, and branch-wise comparative reports.',
    icon: Building2,
    tag: 'Enterprise'
  },
  {
    slug: 'business-analytics',
    name: 'Business Analytics',
    href: '/business-analytics',
    category: 'Operational Intelligence',
    description: 'Hourly revenue velocity, cashier throughput, product mix performance, and real-time margin observability.',
    icon: BarChart3,
    tag: 'Telemetry'
  },
  {
    slug: 'delivery-management',
    name: 'Delivery Management',
    href: '/delivery-management',
    category: 'Logistics & Dispatch',
    description: 'In-house rider assignment, stage-based delivery dispatch, live courier tracking, and third-party delivery aggregation.',
    icon: Truck,
    tag: 'Fleet'
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    href: '/e-commerce',
    category: 'Omnichannel Web',
    description: 'Integrated direct-to-consumer online storefront synchronized in real time with brick-and-mortar inventory levels.',
    icon: ShoppingBag,
    tag: 'Storefront'
  },
  {
    slug: 'business-management',
    name: 'Business Management',
    href: '/business-management',
    category: 'Back-Office Governance',
    description: 'Staff attendance, shift scheduling, role-based terminal access controls, and daily cash drawer reconciliation.',
    icon: Briefcase,
    tag: 'Back-Office'
  }
]
</script>

<template>
  <section
    id="product-modules"
    ref="sectionRef"
    class="py-14 md:py-18 bg-[#070b0f] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 space-y-4">
        <ChapterLabel label="10 Specialized Modules" />
        <WordReveal
          as="h2"
          text="Complete Product Suite for Retail & Hospitality."
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white"
        />
        <p class="font-ui text-base sm:text-lg font-normal leading-[1.65] text-white/75">
          Explore all 10 specialized KavoraX modules. Each operates autonomously offline and connects seamlessly into our unified cloud backend.
        </p>
      </div>

      <!-- Modules 10-Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
        <NuxtLink
          v-for="mod in modules"
          :key="mod.slug"
          :to="mod.href"
          class="rounded-xl border border-white/[0.08] bg-[#0c131d]/90 p-5 flex flex-col justify-between hover:border-brand/40 hover:bg-[#0f1724] transition-colors duration-200 group relative"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand group-hover:scale-105 transition-transform">
                <component :is="mod.icon" class="h-5 w-5" />
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-zinc-400 group-hover:text-brand group-hover:border-brand/20 transition-colors">
                {{ mod.tag }}
              </span>
            </div>

            <span class="text-[11px] font-ui text-zinc-500 uppercase tracking-wider block mb-1">
              {{ mod.category }}
            </span>
            <h3 class="font-editorial text-lg font-semibold text-white group-hover:text-brand transition-colors mb-2">
              {{ mod.name }}
            </h3>
            <p class="font-ui text-xs text-zinc-400 leading-relaxed">
              {{ mod.description }}
            </p>
          </div>

          <div class="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between text-xs font-ui text-brand font-medium">
            <span>Explore Module</span>
            <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
