<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import {
  Landmark,
  Activity,
  Truck,
  Building2,
  ArrowRight,
  Check
} from 'lucide-vue-next'

const selectedIndex = ref(0)

const industries = [
  {
    id: 'financial',
    title: 'Financial Services & FinTech',
    tag: 'REGULATORY COMPLIANCE',
    headline: 'Auditable transaction architectures with zero-trust isolation.',
    description: 'Engineering fault-tolerant processing fabrics that meet strict regulatory frameworks, audit standards, and real-time ledger consistency requirements.',
    icon: Landmark,
    image: '/images/fintech-headquarters.jpg',
    anchor: '/industries#financial-services',
    metrics: ['Sub-millisecond reconciliation', 'Continuous SOC2 / ISO-level auditability', 'Air-gapped transaction isolation']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    tag: 'CARE CONTINUITY',
    headline: 'Secure data pipelines accelerating care delivery.',
    description: 'Enabling clinical teams to share confidential diagnostics and telemetry with cryptographic privacy, zero data leakage, and automated compliance.',
    icon: Activity,
    image: '/images/healthcare-diagnostics.jpg',
    anchor: '/industries#healthcare',
    metrics: ['Encrypted patient telemetry', 'Automated data lineage tracing', '99.999% clinical availability']
  },
  {
    id: 'logistics',
    title: 'Supply Chain & Logistics',
    tag: 'GLOBAL SYNCHRONIZATION',
    headline: 'End-to-end freight visibility and event-driven fulfillment.',
    description: 'Connecting global container hubs, regional distribution points, and automated inventory systems into a synchronized operational fabric.',
    icon: Truck,
    image: '/images/logistics-terminal.jpg',
    anchor: '/industries#supply-chain',
    metrics: ['Real-time intermodal tracking', 'Dynamic route load balancing', 'Automated freight exception handling']
  },
  {
    id: 'technology',
    title: 'Enterprise Technology & Cloud',
    tag: 'DISTRIBUTED ARCHITECTURE',
    headline: 'High-throughput platforms supporting mission-critical SaaS.',
    description: 'Empowering software enterprises with scalable multi-tenant orchestration, zero-downtime rolling deployments, and unified telemetry.',
    icon: Building2,
    image: '/images/tech-infrastructure.jpg',
    anchor: '/industries#enterprise-tech',
    metrics: ['Multi-region active-active mesh', 'Deterministic API gateway', 'Automated auto-scaling governance']
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#0b0f14] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Chapter Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
        <div class="max-w-3xl space-y-4">
          <ChapterLabel index="05" label="SECTOR ARCHITECTURES" sublabel="CRITICAL INDUSTRIES" />
          <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Specialized solutions for critical industries.
          </h2>
          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
            Every sector requires purpose-built engineering to navigate unique compliance, operational scale, and data sensitivities.
          </p>
        </div>

        <NuxtLink to="/industries" class="shrink-0 font-ui">
          <span class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-md border border-white/10 bg-[#0f1620] text-zinc-200 hover:text-white hover:border-brand/40 transition-all shadow-sm">
            <span>View All Industry Frameworks</span>
            <ArrowRight class="h-3.5 w-3.5 text-brand" />
          </span>
        </NuxtLink>
      </div>

      <!-- Asymmetrical Interactive Showcase: Left Tab Selector + Right Photographic Stage -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch font-ui">
        <!-- Left: Sector Navigators -->
        <div class="lg:col-span-5 space-y-3 flex flex-col justify-between">
          <div
            v-for="(ind, index) in industries"
            :key="ind.id"
            class="p-5 rounded-xl border transition-all duration-300 cursor-pointer relative group"
            :class="[
              selectedIndex === index
                ? 'border-brand/40 bg-[#101924] shadow-[0_4px_24px_rgba(16,185,129,0.12)]'
                : 'border-white/[0.06] bg-[#0c131c]/60 hover:border-white/15 hover:bg-[#0c131c]'
            ]"
            @mouseenter="selectedIndex = index"
            @click="selectedIndex = index"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors mt-0.5"
                :class="[
                  selectedIndex === index
                    ? 'border-brand/40 bg-brand/10 text-brand'
                    : 'border-white/10 bg-white/[0.02] text-zinc-400 group-hover:text-white'
                ]"
              >
                <component :is="ind.icon" class="h-5 w-5" />
              </div>

              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-mono tracking-wider text-brand uppercase font-medium">
                    {{ ind.tag }}
                  </span>
                  <div
                    class="h-1.5 w-1.5 rounded-full transition-colors"
                    :class="selectedIndex === index ? 'bg-brand shadow-[0_0_6px_#10b981]' : 'bg-transparent'"
                  />
                </div>
                <h3 class="font-editorial text-xl font-semibold text-white mt-1">
                  {{ ind.title }}
                </h3>
                <p class="text-xs text-zinc-300 mt-1 leading-relaxed line-clamp-2 font-normal">
                  {{ ind.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Immersive Photographic Stage with Editorial Details -->
        <div class="lg:col-span-7 relative min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-2xl corner-crosshair flex flex-col justify-between">
          <!-- Active Photographic Background -->
          <div class="absolute inset-0 z-0">
            <img
              :src="industries[selectedIndex]?.image"
              :alt="industries[selectedIndex]?.title"
              class="w-full h-full object-cover img-editorial-zoom transition-all duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/75 to-[#080c10]/40" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/85 via-[#080c10]/45 to-transparent" />
          </div>

          <!-- Foreground Narrative Overlay -->
          <div class="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.1] pb-4 gap-2">
              <span class="text-xs font-mono text-brand font-semibold tracking-wider uppercase">
                Sector Focus · {{ industries[selectedIndex]?.title }}
              </span>
              <span class="text-xs font-mono text-zinc-300">
                ACTIVE FRAMEWORK
              </span>
            </div>

            <div class="space-y-4 my-auto">
              <h3 class="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
                {{ industries[selectedIndex]?.headline }}
              </h3>

              <p class="font-editorial text-lg sm:text-xl text-zinc-200 leading-relaxed max-w-xl font-normal">
                {{ industries[selectedIndex]?.description }}
              </p>

              <!-- Metric checklist -->
              <div class="pt-4 space-y-2 text-xs font-ui text-zinc-200">
                <div
                  v-for="metric in industries[selectedIndex]?.metrics"
                  :key="metric"
                  class="flex items-center gap-2.5"
                >
                  <div class="flex h-4 w-4 items-center justify-center rounded-full bg-brand/20 text-brand shrink-0">
                    <Check class="h-3 w-3" />
                  </div>
                  <span>{{ metric }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <NuxtLink
                :to="industries[selectedIndex]?.anchor"
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors group font-ui"
              >
                <span>Read Full Industry Specification</span>
                <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>

              <span class="text-xs font-mono text-zinc-400">
                AUDITABLE STANDARDS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
