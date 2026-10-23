<template>
  <div class="kavorax-grid-background text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-surface-container-lowest">
    <!-- HERO SECTION -->
    <section class="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-transparent via-[#080c0f]/60 to-[#080c0f]">
      <!-- Cinematic Horizon Arc & Atmospheric Glow -->
      <div class="kavorax-hero-horizon pointer-events-none"></div>
      <div class="absolute -right-24 top-12 w-[650px] h-[650px] opacity-[0.035] pointer-events-none select-none">
        <img alt="KavoraX Brand" class="w-full h-full object-contain filter grayscale contrast-200" src="/logo.png"/>
      </div>
      <div class="absolute top-1/4 left-1/3 -translate-x-1/2 w-[520px] h-[520px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        <nav class="flex items-center gap-2 mb-6 font-label-md text-label-md text-on-surface-variant">
          <NuxtLink to="/solutions" class="hover:text-primary transition-colors">Solutions</NuxtLink>
          <span class="text-outline-variant text-xs">/</span>
          <span class="text-primary font-medium">{{ module.name }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div class="lg:col-span-6 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span class="w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_var(--color-brand-green)] animate-pulse"></span>
              <span class="text-primary text-label-md font-label-md tracking-wider uppercase">{{ module.name }}</span>
            </div>
            <h1 class="font-display-lg text-display-lg md:text-[44px] text-on-surface tracking-tight leading-[1.1] mb-6">
              {{ module.headline }}
            </h1>
            <p class="text-body-lg font-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              {{ module.subline }}
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <NuxtLink class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary hover:bg-primary-fixed text-[#080c10] text-title-md font-title-md font-bold transition-all duration-200 shadow-none cursor-pointer" to="/demo">
                Book a Demo
              </NuxtLink>
              <a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-outline-variant/60 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-on-surface hover:text-white text-title-md font-title-md font-semibold transition-all duration-200" href="#showcase">
                Watch Product Tour
              </a>
            </div>

            <div class="flex flex-wrap gap-2 mt-2">
              <div v-for="user in module.whoUsesIt" :key="user" class="px-3 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px] text-primary">check</span> {{ user }}
              </div>
            </div>

          </div>
          <div class="lg:col-span-6 relative flex justify-center">
            <div class="relative w-full max-w-[620px]">
              <div class="absolute -inset-4 bg-gradient-to-tr from-primary-container/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
              <div class="faceted-card bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/40 p-2 md:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden rounded-2xl group">
                <div class="relative w-full aspect-video bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 flex items-center justify-center">
                  <img
                    :src="moduleImage"
                    :alt="module.name"
                    class="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0e141a]/60 via-transparent to-transparent"></div>
                </div>

                <div class="absolute bottom-6 -left-4 md:-left-8 bg-surface-container-lowest/95 backdrop-blur-xl border border-primary/30 p-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <div class="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Live Activity</div>
                    <div class="text-title-md font-title-md text-on-surface font-semibold">{{ module.heroDetail }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY FEATURES GRID -->
    <section class="py-24 bg-transparent border-t border-outline-variant/30 relative">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-primary text-label-sm font-label-sm uppercase tracking-wider font-bold">CORE CAPABILITIES</span>
          <h2 class="font-display-md text-headline-lg md:text-display-md text-on-surface tracking-tight mt-2">
            Everything you need to succeed.
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in module.features" :key="feature" class="faceted-card bg-surface-container-low/80 border border-outline-variant/40 p-6 flex flex-col justify-center items-start hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group rounded-2xl">
            <div class="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined">check_circle</span>
            </div>
            <h3 class="text-title-lg font-title-lg text-on-surface font-semibold">{{ feature }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE SHOWCASE -->
    <section class="py-24 bg-[#0b1114]/60 backdrop-blur-sm border-t border-outline-variant/30 relative" id="showcase">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-primary text-label-sm font-label-sm uppercase tracking-wider font-bold">PLATFORM PREVIEW</span>
          <h2 class="font-display-md text-headline-lg md:text-display-md text-on-surface tracking-tight mt-2">
            See it in action
          </h2>
        </div>
        <div class="flex justify-center mb-12 flex-wrap gap-2">
          <div class="inline-flex p-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 overflow-x-auto max-w-full">
            <button
              v-for="tab in module.tabs" :key="tab.id"
              @click="activeTab = tab.id"
              :class="activeTab === tab.id ? 'bg-[#10b981] text-[#003824] font-bold shadow-[0_0_16px_rgba(16,185,129,0.35)]' : 'text-on-surface-variant hover:text-on-surface'"
              class="px-5 py-2 rounded-full text-title-sm font-title-sm transition-all whitespace-nowrap cursor-pointer"
            >{{ tab.label }}</button>
          </div>
        </div>

        <div class="bg-surface-container-low/70 border border-outline-variant/40 rounded-2xl p-6 lg:p-10 relative overflow-hidden backdrop-blur-md min-h-[400px]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            <div class="lg:col-span-5">
              <h3 class="font-headline-md text-headline-md text-on-surface mb-4">
                {{ activeTabData?.label }}
              </h3>
              <p class="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                {{ activeTabData?.description }}
              </p>
              <ul class="space-y-3 mb-8 text-body-md font-body-md text-on-surface">
                <li v-for="bullet in activeTabData?.bullets" :key="bullet" class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                  {{ bullet }}
                </li>
              </ul>
            </div>
            <div class="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-8 shadow-2xl h-full flex flex-col items-center justify-center text-center min-h-[300px]">
              <div class="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 shadow-[0_0_24px_rgba(16,185,129,0.2)]">
                <span class="material-symbols-outlined text-4xl">dashboard</span>
              </div>
              <div class="text-title-lg font-title-lg text-on-surface font-semibold">{{ activeTabData?.label }} Live Workflow</div>
              <div class="text-body-sm font-body-sm text-on-surface-variant mt-2 max-w-md">
                {{ activeTabData?.description }}
              </div>
              <NuxtLink to="/demo" class="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 border border-primary/40 text-primary hover:bg-primary hover:text-[#002819] font-title-md text-sm font-bold transition-all">
                <span>Schedule Live Sandbox Walkthrough</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORKS WITH -->
    <section class="py-24 bg-transparent border-t border-outline-variant/30 relative" v-if="integrationModules.length > 0">
      <div class="max-w-[1440px] mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-primary text-label-sm font-label-sm uppercase tracking-wider font-bold">ECOSYSTEM INTEGRATIONS</span>
          <h2 class="font-display-md text-headline-lg md:text-display-md text-on-surface tracking-tight mt-2">
            Works perfectly with
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <NuxtLink
            v-for="integration in integrationModules"
            :key="integration.slug"
            :to="getIntegrationRoute(integration.slug)"
            class="faceted-card bg-surface-container-low border border-outline-variant/40 p-6 flex flex-col hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group rounded-2xl"
          >
            <h3 class="text-title-lg font-title-lg text-on-surface mb-2 font-semibold group-hover:text-primary transition-colors">{{ integration.name }}</h3>
            <p class="text-body-sm font-body-sm text-on-surface-variant mb-4 flex-1">
              {{ integration.subline }}
            </p>
            <span class="text-primary text-label-sm font-label-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore Module →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-[#0b1114]/60 backdrop-blur-sm border-t border-outline-variant/30 relative">
      <div class="max-w-3xl mx-auto px-6 md:px-12">
        <div class="text-center mb-12">
          <h2 class="font-display-md text-headline-lg md:text-display-md text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="space-y-4">
          <div v-for="(item, index) in module.faq" :key="index" class="bg-surface-container-low border border-outline-variant/40 rounded-xl overflow-hidden hover:border-primary/40 transition-colors">
            <details class="group">
              <summary class="flex justify-between items-center font-title-md text-title-md cursor-pointer list-none p-6 text-on-surface">
                <span>{{ item.question }}</span>
                <span class="transition group-open:rotate-180">
                  <span class="material-symbols-outlined text-primary">expand_more</span>
                </span>
              </summary>
              <div class="text-on-surface-variant text-body-md font-body-md px-6 pb-6 mt-[-10px] leading-relaxed border-t border-outline-variant/20 pt-4">
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
        <h2 class="font-display-md text-headline-lg md:text-display-md text-white font-serif tracking-tight mb-4 max-w-2xl mx-auto">
          See {{ module.name }} live at our Experience Center.
        </h2>
        <p class="font-body-lg text-body-lg text-[#94a3b8] mb-8 max-w-lg mx-auto font-normal">
          Book an interactive walkthrough or chat with an operational specialist.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary hover:bg-primary-fixed text-[#080c10] text-title-md font-title-md font-bold transition-all shadow-none cursor-pointer" to="/demo">
            <span>Book a Demo</span>
            <span class="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
          </NuxtLink>
          <a class="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] border border-[rgba(110,150,140,0.30)] hover:border-[rgba(110,150,140,0.50)] text-white text-title-md font-title-md font-semibold transition-all shadow-none" href="https://wa.me/919629579358" target="_blank" rel="noopener noreferrer">
            <span class="material-symbols-outlined mr-2 text-primary">chat</span>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { initialModules, type Module } from '~/composables/useModules'

const props = defineProps<{
  module: Module
}>()

const activeTab = ref(props.module.tabs.length > 0 ? props.module.tabs[0].id : '')

const activeTabData = computed(() => {
  return props.module.tabs.find(t => t.id === activeTab.value) || props.module.tabs[0]
})

const moduleImageMap: Record<string, string> = {
  'pos-billing': '/images/pos_dashboard.jpg',
  'pos-and-billing': '/images/pos_dashboard.jpg',
  'inventory-stock': '/images/inventory_dashboard.jpg',
  'inventory-and-stock': '/images/inventory_dashboard.jpg',
  'crm': '/images/crm_dashboard.jpg',
  'digital-ordering': '/images/digital_ordering_ui.jpg',
  'delivery-management': '/images/delivery_dashboard.jpg',
  'business-analytics': '/images/analytics_dashboard.jpg',
  'kitchen-display': '/images/kitchen-kds.jpg',
  'multi-location-management': '/images/business_dashboard.jpg',
  'multi-location': '/images/business_dashboard.jpg',
  'e-commerce': '/images/ecommerce_dashboard.jpg',
  'ecommerce': '/images/ecommerce_dashboard.jpg',
  'business-management': '/images/planning-cafe.jpg'
}

const moduleImage = computed(() => {
  if (props.module.heroImageQuery && props.module.heroImageQuery.startsWith('/')) {
    return props.module.heroImageQuery
  }
  return moduleImageMap[props.module.slug] || '/images/pos_dashboard.jpg'
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
