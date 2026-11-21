<template>
  <div class="text-white antialiased overflow-x-hidden selection:bg-brand selection:text-black">
    <section class="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-transparent via-[#0A0A0A] to-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center gap-2 mb-6 font-ui text-sm text-zinc-400" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
          <span class="text-zinc-600 text-xs">›</span>
          <NuxtLink to="/products" class="hover:text-white transition-colors">Products</NuxtLink>
          <span class="text-zinc-600 text-xs">›</span>
          <span class="text-brand font-medium">{{ module.name }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-6 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-6">
              <span class="w-2 h-2 rounded-full bg-brand"></span>
              <span class="text-brand text-xs font-semibold tracking-wider uppercase font-ui">{{ module.name }}</span>
            </div>
            <h1 class="font-editorial text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              {{ module.headline }}
            </h1>
            <p class="font-ui text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed">
              {{ module.subline }}
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <NuxtLink
                class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand hover:bg-brand/90 text-black text-sm font-semibold tracking-wide transition-all duration-200 shadow-none cursor-pointer"
                :to="`/demo?module=${module.slug}`"
              >
                Book a Demo
              </NuxtLink>
              <NuxtLink
                class="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 hover:border-brand/40 hover:bg-brand/5 text-zinc-300 hover:text-white text-sm font-semibold transition-all duration-200"
                to="/products"
              >
                View all modules
              </NuxtLink>
            </div>

            <div class="flex flex-wrap gap-2 mt-2">
              <div v-for="user in module.whoUsesIt" :key="user" class="px-3 py-1 bg-[#161616] border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1 font-ui">
                <Check class="w-3.5 h-3.5 text-brand" /> {{ user }}
              </div>
            </div>
          </div>

          <!-- Hero Visual Slot: Coded Mockup -->
          <div class="lg:col-span-6 relative flex justify-center w-full">
            <div class="w-full max-w-[620px]">
              <UiDeviceFrame :type="deviceType" :title="module.name">
                <component :is="mockupComponent" embedded />
              </UiDeviceFrame>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Capabilities -->
    <section class="py-24 bg-transparent border-t border-white/[0.08] relative">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-brand text-xs font-semibold uppercase tracking-wider font-ui">Core Capabilities</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Engineered for high-reliability operations.
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in module.features" :key="feature" class="bg-[#111111] border border-white/10 p-6 flex flex-col justify-center items-start hover:border-brand/40 transition-all duration-200 group rounded-2xl">
            <div class="w-10 h-10 rounded-lg bg-brand/10 border border-brand/30 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CheckCircle2 class="w-5 h-5" />
            </div>
            <h3 class="text-lg text-white font-semibold font-ui">{{ feature }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Showcase Tabs -->
    <section class="py-24 bg-[#0E0E0E] border-t border-white/[0.08] relative" id="showcase">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-brand text-xs font-semibold uppercase tracking-wider font-ui">Interactive Walkthrough</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Operational workflow &amp; controls
          </h2>
        </div>
        <div class="flex justify-center mb-12 flex-wrap gap-2">
          <div class="inline-flex p-1.5 rounded-full bg-[#161616] border border-white/10 overflow-x-auto max-w-full">
            <button
              v-for="tab in module.tabs" :key="tab.id"
              @click="activeTab = tab.id"
              :class="activeTab === tab.id ? 'bg-brand text-black font-semibold' : 'text-zinc-400 hover:text-white'"
              class="px-5 py-2 rounded-full text-sm font-ui transition-all whitespace-nowrap cursor-pointer"
            >{{ tab.label }}</button>
          </div>
        </div>

        <div class="bg-[#111111] border border-white/10 rounded-2xl p-6 lg:p-10 relative overflow-hidden min-h-[400px]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            <div class="lg:col-span-5">
              <h3 class="font-editorial text-2xl md:text-3xl text-white mb-4">
                {{ activeTabData?.label }}
              </h3>
              <p class="text-base text-zinc-300 mb-6 leading-relaxed font-ui">
                {{ activeTabData?.description }}
              </p>
              <ul class="space-y-3 mb-8 text-sm text-zinc-200 font-ui">
                <li v-for="bullet in activeTabData?.bullets" :key="bullet" class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-brand shrink-0" />
                  {{ bullet }}
                </li>
              </ul>
            </div>
            <div class="lg:col-span-7 bg-[#161616] rounded-xl border border-white/10 p-8 shadow-2xl h-full flex flex-col items-center justify-center text-center min-h-[300px]">
              <div class="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-4">
                <LayoutDashboard class="w-9 h-9" />
              </div>
              <div class="text-lg text-white font-semibold font-ui">{{ activeTabData?.label }} Live Workflow</div>
              <div class="text-sm text-zinc-400 mt-2 max-w-md font-ui">
                {{ activeTabData?.description }}
              </div>
              <NuxtLink :to="`/demo?module=${module.slug}`" class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand text-black font-ui text-sm font-semibold hover:bg-brand/90 transition-all">
                <span>Book Live Sandbox Walkthrough</span>
                <ArrowRight class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Connected Integrations -->
    <section class="py-24 bg-transparent border-t border-white/[0.08] relative" v-if="integrationModules.length > 0">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-brand text-xs font-semibold uppercase tracking-wider font-ui">Connected Integrations</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Works seamlessly across modules
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <NuxtLink
            v-for="integration in integrationModules"
            :key="integration.slug"
            :to="getIntegrationRoute(integration.slug)"
            class="bg-[#111111] border border-white/10 p-6 flex flex-col hover:border-brand/40 transition-all duration-200 group rounded-2xl"
          >
            <h3 class="text-lg text-white mb-2 font-semibold group-hover:text-brand transition-colors font-ui">{{ integration.name }}</h3>
            <p class="text-sm text-zinc-400 mb-4 flex-1 font-ui leading-relaxed">
              {{ integration.subline }}
            </p>
            <span class="text-brand text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform font-ui">Explore Module →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-[#0E0E0E] border-t border-white/[0.08] relative">
      <div class="max-w-3xl mx-auto px-6 md:px-12">
        <div class="text-center mb-12">
          <h2 class="font-editorial text-3xl md:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="space-y-4">
          <div v-for="(item, index) in module.faq" :key="index" class="bg-[#111111] border border-white/10 rounded-xl overflow-hidden hover:border-brand/40 transition-colors">
            <details class="group">
              <summary class="flex justify-between items-center text-base font-medium cursor-pointer list-none p-6 text-white font-ui">
                <span>{{ item.question }}</span>
                <span class="transition group-open:rotate-180">
                  <ChevronDown class="w-5 h-5 text-brand" />
                </span>
              </summary>
              <div class="text-zinc-300 text-sm px-6 pb-6 mt-[-10px] leading-relaxed border-t border-white/5 pt-4 font-ui">
                {{ item.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Banner -->
    <section class="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 mb-8 text-center">
      <div class="relative bg-[#111111] border border-white/10 p-10 lg:p-14 rounded-3xl overflow-hidden shadow-none max-w-4xl mx-auto">
        <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-4 max-w-2xl mx-auto">
          See {{ module.name }} live at our Experience Center.
        </h2>
        <p class="font-ui text-base text-zinc-300 mb-8 max-w-lg mx-auto font-normal">
          Book an interactive walkthrough or chat with an operational specialist.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand hover:bg-brand/90 text-black text-sm font-semibold tracking-wide transition-all shadow-none cursor-pointer"
            :to="`/demo?module=${module.slug}`"
          >
            <span>Book a Demo</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </NuxtLink>
          <a
            class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] border border-white/15 text-white text-sm font-semibold transition-all shadow-none"
            href="https://wa.me/919629579358"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare class="w-4 h-4 mr-2 text-brand" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Check,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
  ChevronDown,
  MessageSquare
} from 'lucide-vue-next'
import { initialModules, type Module } from '~/composables/useModules'
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import KdsBoard from '~/components/product-ui/KdsBoard.vue'
import InventoryTable from '~/components/product-ui/InventoryTable.vue'
import QrOrderPhone from '~/components/product-ui/QrOrderPhone.vue'
import OutletsOverview from '~/components/product-ui/OutletsOverview.vue'
import CrmProfile from '~/components/product-ui/CrmProfile.vue'
import DeliveryTracker from '~/components/product-ui/DeliveryTracker.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'

const props = defineProps<{
  module: Module
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kavorax.com' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://kavorax.com/products' },
          { '@type': 'ListItem', position: 3, name: props.module.name, item: `https://kavorax.com/${props.module.slug}` }
        ]
      })
    }
  ]
})

const mockupComponent = computed(() => {
  const s = props.module.slug
  if (s === 'pos-and-billing' || s === 'pos-billing') return PosBillingScreen
  if (s === 'kitchen-display') return KdsBoard
  if (s === 'inventory-and-stock' || s === 'inventory-stock') return InventoryTable
  if (s === 'digital-ordering') return QrOrderPhone
  if (s === 'crm') return CrmProfile
  if (s === 'delivery-management') return DeliveryTracker
  if (s === 'multi-location' || s === 'multi-location-management' || s === 'business-analytics' || s === 'business-management') return OutletsOverview
  if (s === 'e-commerce' || s === 'ecommerce') return QrOrderPhone
  return PosBillingScreen
})

const deviceType = computed<'terminal' | 'tablet' | 'phone' | 'window'>(() => {
  const s = props.module.slug
  if (s === 'digital-ordering' || s === 'e-commerce' || s === 'ecommerce') return 'phone'
  if (s === 'kitchen-display') return 'tablet'
  return 'terminal'
})

const activeTab = ref(props.module.tabs.length > 0 ? (props.module.tabs[0]?.id || '') : '')

const activeTabData = computed(() => {
  return props.module.tabs.find(t => t.id === activeTab.value) || props.module.tabs[0]
})

const canonicalRouteMap: Record<string, string> = {
  'pos-billing': '/pos-and-billing',
  'inventory-stock': '/inventory-and-stock',
  'crm': '/crm',
  'digital-ordering': '/digital-ordering',
  'delivery-management': '/delivery-management',
  'business-analytics': '/business-analytics',
  'kitchen-display': '/kitchen-display',
  'multi-location-management': '/multi-location',
  'e-commerce': '/e-commerce',
  'business-management': '/business-management'
}

const getIntegrationRoute = (slug: string) => {
  return canonicalRouteMap[slug] || ('/' + slug)
}

const integrationModules = computed(() => {
  return (props.module.worksWith || []).map(name => {
    return initialModules.find(m => m.name === name || m.slug === name)
  }).filter(Boolean) as Module[]
})
</script>
