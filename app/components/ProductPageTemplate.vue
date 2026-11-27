<template>
  <div class="bg-transparent text-white antialiased overflow-x-hidden selection:bg-brand selection:text-black">
    <!-- HERO SECTION -->
    <section class="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-transparent">
      <!-- Cinematic Horizon Arc & Atmospheric Glow -->
      <div class="absolute inset-0 bg-cinematic-radial pointer-events-none"></div>
      <div class="absolute -right-24 top-12 w-[650px] h-[650px] opacity-[0.035] pointer-events-none select-none">
        <img alt="KavoraX Brand" class="w-full h-full object-contain filter grayscale contrast-200" src="/logo.png" loading="lazy" decoding="async" width="650" height="650" />
      </div>
      <div class="absolute top-1/4 left-1/3 -translate-x-1/2 w-[520px] h-[520px] bg-brand/10 rounded-full ambient-glow-emerald pointer-events-none"></div>
      <div class="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        <nav class="flex items-center gap-2 mb-4 font-sans text-sm text-zinc-400">
          <NuxtLink to="/solutions" class="hover:text-brand transition-colors">Solutions</NuxtLink>
          <span class="text-zinc-600 text-xs">/</span>
          <span class="text-brand font-medium">{{ module.name }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-6 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
              <span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
              <span class="text-emerald-400 text-xs sm:text-[13px] font-medium tracking-normal font-sans">{{ module.name }}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.14] tracking-[-0.025em] not-italic text-white mb-4">
              {{ module.headline }}
            </h1>
            <p class="font-sans text-base sm:text-lg font-normal leading-[1.65] text-white/75 max-w-xl mb-6">
              {{ module.subline }}
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <NuxtLink class="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand hover:bg-brand/90 text-black text-sm font-semibold tracking-wide transition-colors duration-200 shadow-none cursor-pointer" to="/demo">
                Book a Demo
              </NuxtLink>
              <a class="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/10 hover:border-brand/40 hover:bg-brand/5 text-zinc-300 hover:text-white text-sm font-semibold transition-colors duration-200" href="#showcase">
                Watch Product Tour
              </a>
            </div>

            <div class="flex flex-wrap gap-2 mt-1">
              <div v-for="user in module.whoUsesIt" :key="user" class="px-3 py-1 bg-[#0e1620] border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1 font-sans">
                <Check class="w-3.5 h-3.5 text-brand" /> {{ user }}
              </div>
            </div>

          </div>
          <div class="lg:col-span-6 relative flex justify-center w-full">
            <div class="relative w-full max-w-[620px]">
              <div class="absolute -inset-4 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl card-ambient-glow -z-10"></div>
              <div class="bg-[#0e1620]/90 border border-white/10 p-2 md:p-3 shadow-xl rounded-2xl group relative overflow-hidden">
                <!-- Contextual Product Screen Mockup -->
                <PosBillingScreen v-if="module.slug === 'pos-billing' || module.slug === 'pos-and-billing'" :embedded="true" />
                <KdsBoard v-else-if="module.slug === 'kitchen-display'" />
                <InventoryTable v-else-if="module.slug === 'inventory-stock' || module.slug === 'inventory-and-stock'" />
                <CrmProfile v-else-if="module.slug === 'crm'" />
                <QrOrderPhone v-else-if="module.slug === 'digital-ordering'" />
                <DeliveryTracker v-else-if="module.slug === 'delivery-management'" />
                <OutletsOverview v-else-if="module.slug === 'multi-location-management' || module.slug === 'multi-location'" />
                <AnalyticsDashboard v-else-if="module.slug === 'business-analytics'" />
                <EcommerceStorefront v-else-if="module.slug === 'e-commerce' || module.slug === 'ecommerce'" />
                <BusinessManagementConsole v-else-if="module.slug === 'business-management'" />
                <div v-else class="relative w-full aspect-video bg-[#080c10] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                  <img
                    :src="moduleImage"
                    :alt="module.name"
                    width="604"
                    height="340"
                    loading="eager"
                    decoding="async"
                    class="w-full h-full object-cover filter brightness-[0.95]"
                  />
                </div>

                <div class="absolute bottom-3 right-3 bg-[#080c10]/95 border border-brand/30 px-3 py-1.5 rounded-xl shadow-2xl flex items-center gap-2 z-10 pointer-events-none">
                  <span class="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                  <span class="text-xs text-white font-medium font-sans">{{ module.heroDetail }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY FEATURES GRID -->
    <section class="py-14 lg:py-16 bg-transparent border-t border-white/5 relative">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-8">
          <span class="text-brand text-xs font-medium font-sans">Core Capabilities</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            {{ module.capabilitiesHeading || 'Core billing capabilities.' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="feature in module.features" :key="feature" class="bg-[#0e1620]/80 border border-white/10 p-5 flex flex-col justify-between items-start hover:border-brand/40 hover:-translate-y-1 transition-colors duration-200 group rounded-2xl">
            <div>
              <div class="w-9 h-9 rounded-lg bg-brand/10 border border-brand/30 text-brand flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <CheckCircle2 class="w-5 h-5" />
              </div>
              <h3 class="text-base text-white font-semibold font-sans mb-1.5">{{ feature }}</h3>
              <p v-if="module.featureDescriptions?.[feature]" class="text-xs text-zinc-400 font-sans leading-relaxed">
                {{ module.featureDescriptions[feature] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE SHOWCASE -->
    <section class="py-14 lg:py-16 bg-transparent border-t border-white/5 relative" id="showcase">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-6">
          <span class="text-brand text-xs font-medium font-sans">Platform Preview</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            See it in action
          </h2>
        </div>
        <div class="flex justify-center mb-6 flex-wrap gap-2">
          <div class="inline-flex p-1.5 rounded-full bg-[#0e1620] border border-white/10 overflow-x-auto max-w-full">
            <button
              v-for="tab in module.tabs" :key="tab.id"
              @click="activeTab = tab.id"
              :class="activeTab === tab.id ? 'bg-brand text-black font-semibold shadow-[0_0_16px_rgba(16,185,129,0.35)]' : 'text-zinc-400 hover:text-white'"
              class="px-5 py-2 rounded-full text-sm font-sans transition-colors whitespace-nowrap cursor-pointer"
            >{{ tab.label }}</button>
          </div>
        </div>

        <div class="bg-[#0e1620]/70 border border-white/10 rounded-2xl p-5 lg:p-8 relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
            <div class="lg:col-span-5">
              <h3 class="font-editorial text-2xl md:text-3xl text-white mb-3">
                {{ activeTabData?.label }}
              </h3>
              <p class="text-sm md:text-base text-zinc-400 mb-5 leading-relaxed font-sans">
                {{ activeTabData?.description }}
              </p>
              <ul class="space-y-2.5 mb-6 text-sm text-zinc-200 font-sans">
                <li v-for="bullet in activeTabData?.bullets" :key="bullet" class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-brand shrink-0" />
                  {{ bullet }}
                </li>
              </ul>
            </div>
            <div class="lg:col-span-7 bg-[#080c10] rounded-xl border border-white/10 p-5 sm:p-6 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <!-- Top Status Badge -->
                <div class="flex items-center justify-between pb-3 mb-3.5 border-b border-white/[0.08]">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    <span class="text-xs font-semibold text-white font-sans uppercase tracking-wider">
                      {{ currentTabPreview.badge }}
                    </span>
                  </div>
                  <span class="text-[11px] text-zinc-400 font-sans hidden sm:inline">
                    {{ currentTabPreview.subtitle }}
                  </span>
                </div>

                <!-- 3 Distinct Interactive Workflow Rows -->
                <div class="space-y-2 mb-4">
                  <div
                    v-for="(row, idx) in currentTabPreview.rows"
                    :key="idx"
                    class="flex items-center justify-between p-2.5 sm:p-3 rounded-lg border border-white/[0.06] bg-[#141414]/90 text-left transition-colors hover:border-brand/30"
                  >
                    <div class="pr-3">
                      <div class="text-xs font-semibold text-white font-sans">{{ row.title }}</div>
                      <div class="text-[11px] text-zinc-400 font-sans mt-0.5">{{ row.sub }}</div>
                    </div>
                    <div class="flex flex-col items-end shrink-0">
                      <span class="text-xs font-semibold text-white font-mono">{{ row.metric }}</span>
                      <span
                        class="text-[10px] px-2 py-0.5 rounded mt-1 font-sans"
                        :class="row.isAccent ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' : 'bg-brand/10 text-brand border border-brand/20'"
                      >
                        {{ row.status }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Live Metrics Strip -->
                <div class="grid grid-cols-2 gap-2.5 mb-4">
                  <div
                    v-for="m in currentTabPreview.metrics"
                    :key="m.label"
                    class="bg-[#121820]/70 border border-white/[0.06] rounded-lg p-2.5 text-left"
                  >
                    <div class="text-[10px] text-zinc-400 uppercase font-sans">{{ m.label }}</div>
                    <div class="text-sm font-semibold text-white font-sans mt-0.5">{{ m.value }}</div>
                  </div>
                </div>
              </div>

              <!-- CTA Walkthrough Button -->
              <div class="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span class="text-xs text-zinc-400 font-sans hidden sm:inline">Explore interactive sandbox with real operational data</span>
                <NuxtLink to="/demo" class="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 rounded-full bg-brand/15 border border-brand/40 text-brand hover:bg-brand hover:text-black font-sans text-xs font-semibold transition-colors">
                  <span>Schedule Live Sandbox Walkthrough</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKS WITH -->
    <section class="py-14 lg:py-16 bg-transparent border-t border-white/5 relative" v-if="integrationModules.length > 0">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-8">
          <span class="text-brand text-xs font-medium font-sans">Connected Integrations</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Works perfectly with
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <NuxtLink
            v-for="integration in integrationModules"
            :key="integration.slug"
            :to="getIntegrationRoute(integration.slug)"
            class="bg-[#0e1620] border border-white/10 p-5 flex flex-col hover:border-brand/40 hover:-translate-y-1 transition-colors duration-200 group rounded-2xl"
          >
            <h3 class="text-base text-white mb-1.5 font-semibold group-hover:text-brand transition-colors font-sans">{{ integration.name }}</h3>
            <p class="text-xs sm:text-sm text-zinc-400 mb-3 flex-1 font-sans">
              {{ integration.subline }}
            </p>
            <span class="text-brand text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform font-sans">Explore Module →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-14 lg:py-16 bg-transparent border-t border-white/5 relative">
      <div class="max-w-3xl mx-auto px-6 md:px-12">
        <div class="text-center mb-8">
          <h2 class="font-editorial text-3xl md:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="space-y-2.5">
          <div v-for="(item, index) in module.faq" :key="index" class="bg-[#0e1620] border border-white/10 rounded-xl overflow-hidden hover:border-brand/40 transition-colors">
            <details class="group">
              <summary class="flex justify-between items-center text-sm sm:text-base font-medium cursor-pointer list-none p-4 sm:p-5 text-white font-sans">
                <span>{{ item.question }}</span>
                <span class="transition group-open:rotate-180">
                  <ChevronDown class="w-5 h-5 text-brand" />
                </span>
              </summary>
              <div class="text-zinc-400 text-xs sm:text-sm px-4 pb-4 sm:px-5 sm:pb-5 mt-[-6px] leading-relaxed border-t border-white/5 pt-3 font-sans">
                {{ item.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-10 mb-4 text-center">
      <div class="relative kavorax-cta-banner bg-[#0b1114] border border-[rgba(110,150,140,0.20)] p-7 lg:p-10 rounded-3xl overflow-hidden shadow-none max-w-4xl mx-auto">
        <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-3 max-w-2xl mx-auto">
          See {{ module.name }} live at our Experience Center.
        </h2>
        <p class="font-sans text-sm md:text-base text-zinc-400 mb-6 max-w-lg mx-auto font-normal">
          Book an interactive walkthrough or chat with an operational specialist.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <NuxtLink class="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand hover:bg-brand/90 text-black text-sm font-semibold tracking-wide transition-colors shadow-none cursor-pointer" to="/demo">
            <span>Book a Demo</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </NuxtLink>
          <a class="inline-flex items-center justify-center px-7 py-3 rounded-full bg-transparent hover:bg-white/[0.04] border border-[rgba(110,150,140,0.30)] hover:border-[rgba(110,150,140,0.50)] text-white text-sm font-semibold transition-colors shadow-none" href="https://wa.me/919629579358" target="_blank" rel="noopener noreferrer">
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
  Zap,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
  ChevronDown,
  MessageSquare
} from 'lucide-vue-next'
import { initialModules, type Module } from '~/composables/useModules'
import { getTabPreviewData } from '~/composables/useTabPreviews'
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import KdsBoard from '~/components/product-ui/KdsBoard.vue'
import InventoryTable from '~/components/product-ui/InventoryTable.vue'
import DeliveryTracker from '~/components/product-ui/DeliveryTracker.vue'
import CrmProfile from '~/components/product-ui/CrmProfile.vue'
import OutletsOverview from '~/components/product-ui/OutletsOverview.vue'
import QrOrderPhone from '~/components/product-ui/QrOrderPhone.vue'
import AnalyticsDashboard from '~/components/product-ui/AnalyticsDashboard.vue'
import EcommerceStorefront from '~/components/product-ui/EcommerceStorefront.vue'
import BusinessManagementConsole from '~/components/product-ui/BusinessManagementConsole.vue'

const props = defineProps<{
  module: Module
}>()

const activeTab = ref(props.module.tabs[0]?.id ?? '')

const activeTabData = computed(() => {
  return props.module.tabs.find(t => t.id === activeTab.value) ?? props.module.tabs[0]
})

const currentTabPreview = computed(() => {
  return getTabPreviewData(props.module.slug, activeTab.value)
})

const moduleImageMap: Record<string, string> = {
  'pos-billing': '/images/tech-infrastructure.webp',
  'pos-and-billing': '/images/tech-infrastructure.webp',
  'inventory-stock': '/images/logistics-terminal.webp',
  'inventory-and-stock': '/images/logistics-terminal.webp',
  'crm': '/images/executive-briefing.webp',
  'digital-ordering': '/images/fintech-headquarters.webp',
  'delivery-management': '/images/global-connectivity.webp',
  'business-analytics': '/images/healthcare-diagnostics.webp',
  'kitchen-display': '/images/architectural-workspace.webp',
  'multi-location-management': '/images/global-connectivity.webp',
  'multi-location': '/images/global-connectivity.webp',
  'e-commerce': '/images/global-connectivity.webp',
  'ecommerce': '/images/global-connectivity.webp',
  'business-management': '/images/fintech-headquarters.webp'
}

const moduleImage = computed(() => {
  if (props.module.heroImageQuery && props.module.heroImageQuery.startsWith('/')) {
    return props.module.heroImageQuery
  }
  return moduleImageMap[props.module.slug] || '/images/tech-infrastructure.webp'
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
  'e-commerce': '/ecommerce',
  'business-management': '/solutions'
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

<style scoped>
.kavorax-cta-banner {
  background-color: #0b1114 !important;
  background-image: none !important;
  border: 1px solid rgba(110, 150, 140, 0.20) !important;
  box-shadow: none !important;
  filter: none !important;
}

.kavorax-cta-banner::before,
.kavorax-cta-banner::after {
  content: none !important;
  display: none !important;
  box-shadow: none !important;
  filter: none !important;
}
</style>
