<template>
  <div class="bg-technical-grid text-white antialiased overflow-x-hidden selection:bg-brand selection:text-black">
    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-transparent via-[#080c0f]/60 to-[#080c0f]">
      <!-- Cinematic Horizon Arc & Atmospheric Glow -->
      <div class="absolute inset-0 bg-cinematic-radial pointer-events-none"></div>
      <div class="absolute -right-24 top-12 w-[650px] h-[650px] opacity-[0.035] pointer-events-none select-none">
        <img alt="KavoraX Brand" class="w-full h-full object-contain filter grayscale contrast-200" src="/logo.png" loading="lazy" decoding="async" width="650" height="650" />
      </div>
      <div class="absolute top-1/4 left-1/3 -translate-x-1/2 w-[520px] h-[520px] bg-brand/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        <nav class="flex items-center gap-2 mb-6 font-sans text-sm text-zinc-400">
          <NuxtLink to="/solutions" class="hover:text-brand transition-colors">Solutions</NuxtLink>
          <span class="text-zinc-600 text-xs">/</span>
          <span class="text-brand font-medium">{{ module.name }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-6 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-6">
              <span class="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
              <span class="text-brand text-xs font-semibold tracking-wider uppercase font-sans">{{ module.name }}</span>
            </div>
            <h1 class="font-editorial text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              {{ module.headline }}
            </h1>
            <p class="font-sans text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed">
              {{ module.subline }}
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <NuxtLink class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand hover:bg-brand/90 text-black text-sm font-semibold tracking-wide transition-all duration-200 shadow-none cursor-pointer" to="/demo">
                Book a Demo
              </NuxtLink>
              <a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 hover:border-brand/40 hover:bg-brand/5 text-zinc-300 hover:text-white text-sm font-semibold transition-all duration-200" href="#showcase">
                Watch Product Tour
              </a>
            </div>

            <div class="flex flex-wrap gap-2 mt-2">
              <div v-for="user in module.whoUsesIt" :key="user" class="px-3 py-1 bg-[#0e1620] border border-white/10 rounded-full text-xs text-zinc-300 flex items-center gap-1 font-sans">
                <Check class="w-3.5 h-3.5 text-brand" /> {{ user }}
              </div>
            </div>

          </div>
          <div class="lg:col-span-6 relative flex justify-center">
            <div class="relative w-full max-w-[620px]">
              <div class="absolute -inset-4 bg-gradient-to-tr from-brand/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
              <div class="bg-[#0e1620]/90 backdrop-blur-xl border border-white/10 p-2 md:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-2xl group relative">
                <div class="relative w-full aspect-video bg-[#080c10] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                  <img
                    :src="moduleImage"
                    :alt="module.name"
                    width="604"
                    height="340"
                    loading="eager"
                    fetchpriority="high"
                    decoding="auto"
                    class="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0e141a]/60 via-transparent to-transparent"></div>
                </div>

                <div class="absolute bottom-6 -left-2 sm:-left-4 md:-left-6 bg-[#080c10]/95 backdrop-blur-xl border border-brand/30 p-3 sm:p-4 rounded-xl shadow-2xl flex items-center gap-3 z-10">
                  <div class="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand shrink-0">
                    <Zap class="w-5 h-5" />
                  </div>
                  <div>
                    <div class="text-xs text-zinc-400 uppercase tracking-wider font-sans">Live Activity</div>
                    <div class="text-sm text-white font-semibold font-sans">{{ module.heroDetail }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY FEATURES GRID -->
    <section class="py-24 bg-transparent border-t border-white/5 relative">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-brand text-xs font-semibold uppercase tracking-wider font-sans">CORE CAPABILITIES</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Everything you need to succeed.
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in module.features" :key="feature" class="bg-[#0e1620]/80 border border-white/10 p-6 flex flex-col justify-center items-start hover:border-brand/40 hover:-translate-y-1 transition-all duration-200 group rounded-2xl">
            <div class="w-10 h-10 rounded-lg bg-brand/10 border border-brand/30 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CheckCircle2 class="w-5 h-5" />
            </div>
            <h3 class="text-lg text-white font-semibold font-sans">{{ feature }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE SHOWCASE -->
    <section class="py-24 bg-[#0b1114]/60 backdrop-blur-sm border-t border-white/5 relative" id="showcase">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-brand text-xs font-semibold uppercase tracking-wider font-sans">PLATFORM PREVIEW</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            See it in action
          </h2>
        </div>
        <div class="flex justify-center mb-12 flex-wrap gap-2">
          <div class="inline-flex p-1.5 rounded-full bg-[#0e1620] border border-white/10 overflow-x-auto max-w-full">
            <button
              v-for="tab in module.tabs" :key="tab.id"
              @click="activeTab = tab.id"
              :class="activeTab === tab.id ? 'bg-brand text-black font-semibold shadow-[0_0_16px_rgba(16,185,129,0.35)]' : 'text-zinc-400 hover:text-white'"
              class="px-5 py-2 rounded-full text-sm font-sans transition-all whitespace-nowrap cursor-pointer"
            >{{ tab.label }}</button>
          </div>
        </div>

        <div class="bg-[#0e1620]/70 border border-white/10 rounded-2xl p-6 lg:p-10 relative overflow-hidden backdrop-blur-md min-h-[400px]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            <div class="lg:col-span-5">
              <h3 class="font-editorial text-2xl md:text-3xl text-white mb-4">
                {{ activeTabData?.label }}
              </h3>
              <p class="text-base text-zinc-400 mb-6 leading-relaxed font-sans">
                {{ activeTabData?.description }}
              </p>
              <ul class="space-y-3 mb-8 text-sm text-zinc-200 font-sans">
                <li v-for="bullet in activeTabData?.bullets" :key="bullet" class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-brand shrink-0" />
                  {{ bullet }}
                </li>
              </ul>
            </div>
            <div class="lg:col-span-7 bg-[#080c10] rounded-xl border border-white/10 p-8 shadow-2xl h-full flex flex-col items-center justify-center text-center min-h-[300px]">
              <div class="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-4 shadow-[0_0_24px_rgba(16,185,129,0.2)]">
                <LayoutDashboard class="w-9 h-9" />
              </div>
              <div class="text-lg text-white font-semibold font-sans">{{ activeTabData?.label }} Live Workflow</div>
              <div class="text-sm text-zinc-400 mt-2 max-w-md font-sans">
                {{ activeTabData?.description }}
              </div>
              <NuxtLink to="/demo" class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand/15 border border-brand/40 text-brand hover:bg-brand hover:text-black font-sans text-sm font-semibold transition-all">
                <span>Schedule Live Sandbox Walkthrough</span>
                <ArrowRight class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKS WITH -->
    <section class="py-24 bg-transparent border-t border-white/5 relative" v-if="integrationModules.length > 0">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-brand text-xs font-semibold uppercase tracking-wider font-sans">ECOSYSTEM INTEGRATIONS</span>
          <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mt-2">
            Works perfectly with
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <NuxtLink
            v-for="integration in integrationModules"
            :key="integration.slug"
            :to="getIntegrationRoute(integration.slug)"
            class="bg-[#0e1620] border border-white/10 p-6 flex flex-col hover:border-brand/40 hover:-translate-y-1 transition-all duration-200 group rounded-2xl"
          >
            <h3 class="text-lg text-white mb-2 font-semibold group-hover:text-brand transition-colors font-sans">{{ integration.name }}</h3>
            <p class="text-sm text-zinc-400 mb-4 flex-1 font-sans">
              {{ integration.subline }}
            </p>
            <span class="text-brand text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform font-sans">Explore Module →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-[#0b1114]/60 backdrop-blur-sm border-t border-white/5 relative">
      <div class="max-w-3xl mx-auto px-6 md:px-12">
        <div class="text-center mb-12">
          <h2 class="font-editorial text-3xl md:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="space-y-4">
          <div v-for="(item, index) in module.faq" :key="index" class="bg-[#0e1620] border border-white/10 rounded-xl overflow-hidden hover:border-brand/40 transition-colors">
            <details class="group">
              <summary class="flex justify-between items-center text-base font-medium cursor-pointer list-none p-6 text-white font-sans">
                <span>{{ item.question }}</span>
                <span class="transition group-open:rotate-180">
                  <ChevronDown class="w-5 h-5 text-brand" />
                </span>
              </summary>
              <div class="text-zinc-400 text-sm px-6 pb-6 mt-[-10px] leading-relaxed border-t border-white/5 pt-4 font-sans">
                {{ item.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 mb-8 text-center">
      <div class="relative kavorax-cta-banner bg-[#0b1114] border border-[rgba(110,150,140,0.20)] p-10 lg:p-14 rounded-3xl overflow-hidden shadow-none max-w-4xl mx-auto">
        <h2 class="font-editorial text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-4 max-w-2xl mx-auto">
          See {{ module.name }} live at our Experience Center.
        </h2>
        <p class="font-sans text-base text-zinc-400 mb-8 max-w-lg mx-auto font-normal">
          Book an interactive walkthrough or chat with an operational specialist.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand hover:bg-brand/90 text-black text-sm font-semibold tracking-wide transition-all shadow-none cursor-pointer" to="/demo">
            <span>Book a Demo</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </NuxtLink>
          <a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] border border-[rgba(110,150,140,0.30)] hover:border-[rgba(110,150,140,0.50)] text-white text-sm font-semibold transition-all shadow-none" href="https://wa.me/919629579358" target="_blank" rel="noopener noreferrer">
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

const props = defineProps<{
  module: Module
}>()

const activeTab = ref(props.module.tabs.length > 0 ? props.module.tabs[0].id : '')

const activeTabData = computed(() => {
  return props.module.tabs.find(t => t.id === activeTab.value) || props.module.tabs[0]
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
