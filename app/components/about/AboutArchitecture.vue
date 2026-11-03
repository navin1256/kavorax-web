<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Workflow,
  BarChart3,
  Network,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(sectionRef, { threshold: 0.15 })

const activeDimId = ref('operations')

const architecturalDimensions = [
  {
    id: 'operations',
    code: 'DIM_01',
    title: 'Operations & Workflows',
    tag: 'Daily Execution',
    icon: Workflow,
    description:
      'The day-to-day work: order routing, fulfillment stages, shift handoffs, and customer interactions that form the heartbeat of the business.',
    elements: ['Automated Task Routing', 'Cross-Team Handoffs', 'Exception Triggers'],
    telemetry: 'Operational Flow'
  },
  {
    id: 'systems',
    code: 'DIM_02',
    title: 'Software & Integrations',
    tag: 'Tools & Platforms',
    icon: Network,
    description:
      'The tools and platforms in use: POS terminals, ERP systems, delivery dispatch, inventory databases, and third-party APIs.',
    elements: ['API Integrations', 'Legacy System Bridges', 'Cloud Applications'],
    telemetry: 'Platform Sync'
  },
  {
    id: 'telemetry',
    code: 'DIM_03',
    title: 'Data & Analytics',
    tag: 'Insights & Metrics',
    icon: BarChart3,
    description:
      'The data stream: sales trends, inventory depletion, margin reports, and operational metrics needed for informed leadership decisions.',
    elements: ['Real-Time Reporting', 'Margin Analytics', 'Inventory Forecasts'],
    telemetry: 'Continuous Feeds'
  },
  {
    id: 'governance',
    code: 'DIM_04',
    title: 'Security & Access',
    tag: 'Control & Trust',
    icon: ShieldCheck,
    description:
      'The policies and safeguards: role-based access controls, verifiable audit trails, and privacy compliance that protect business continuity.',
    elements: ['Role Permissions', 'Audit Logs', 'Data Encryption'],
    telemetry: 'Policy Integrity'
  }
]

const selectDimension = (id: string) => {
  activeDimId.value = id
}
</script>

<template>
  <section
    id="connected-architecture"
    ref="sectionRef"
    class="py-24 md:py-36 bg-[#070b0f] bg-technical-grid border-b border-white/[0.08] relative overflow-hidden"
  >
    <!-- Background Ambient Emerald Drift Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-brand/5 blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <ChapterLabel label="Our Architecture" />
        <div class="flex items-center gap-4 text-xs text-zinc-400">
          <span class="text-zinc-300">Connected Model</span>
        </div>
      </div>

      <!-- Section Header -->
      <div
        class="max-w-3xl space-y-4 mb-16 reveal-base transition-editorial duration-700 delay-100"
        :class="{ 'is-revealed': isRevealed }"
      >
        <WordReveal
          text="A More Connected View of Business."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
          :italic-words="['View', 'of', 'Business.']"
          :delay="100"
        />

        <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
          When operations, systems, data, and governance function as unified elements, organisations
          achieve greater resilience. KavoraX aligns these four dimensions into one cohesive
          operational model.
        </p>
      </div>

      <!-- Blueprint Frame -->
      <div
        class="relative rounded-2xl border border-white/10 bg-[#0c131d]/90 p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] group reveal-base transition-editorial duration-700 delay-200"
        :class="{ 'is-revealed': isRevealed }"
      >
        <!-- Corner Crosshairs -->
        <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <!-- Center Blueprint Metadata Bar -->
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-white/[0.06] gap-4 font-ui"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand"
            >
              <Layers class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-base font-semibold text-white font-ui">
                The Four Interconnected Dimensions of Business
              </h3>
              <p class="text-xs text-zinc-400">
                Synchronizing enterprise operations, data, software, and governance
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span
              class="font-ui text-xs text-brand bg-brand/10 px-2.5 py-1 rounded border border-brand/20 font-medium"
            >
              Four Core Pillars
            </span>
          </div>
        </div>

        <!-- Interactive 4 Dimensions Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-ui">
          <div
            v-for="dim in architecturalDimensions"
            :key="dim.id"
            class="group/card relative rounded-xl border p-6 sm:p-7 transition-all duration-300 cursor-pointer"
            :class="[
              activeDimId === dim.id
                ? 'border-brand/50 bg-[#121f2e] shadow-[0_0_30px_-5px_rgba(16,185,129,0.18)]'
                : 'border-white/[0.08] bg-[#101925]/70 hover:border-brand/35 hover:bg-[#121d2c]'
            ]"
            @click="selectDimension(dim.id)"
          >
            <!-- Card Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3.5">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300"
                  :class="[
                    activeDimId === dim.id
                      ? 'bg-brand/20 border-brand text-brand'
                      : 'bg-[#142030] border-white/10 text-brand group-hover/card:scale-105'
                  ]"
                >
                  <component :is="dim.icon" class="h-5 w-5" />
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-ui text-brand font-medium">
                      {{ dim.tag }}
                    </span>
                  </div>
                  <h4
                    class="font-editorial text-2xl font-semibold text-white group-hover/card:text-brand transition-colors mt-0.5"
                  >
                    {{ dim.title }}
                  </h4>
                </div>
              </div>

              <!-- Active Status Indicator -->
              <span
                class="h-2 w-2 rounded-full transition-colors"
                :class="activeDimId === dim.id ? 'bg-brand animate-pulse' : 'bg-white/20'"
              />
            </div>

            <!-- Body Description -->
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {{ dim.description }}
            </p>

            <!-- Sub-elements Pills & Tag -->
            <div class="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(el, eIdx) in dim.elements"
                  :key="eIdx"
                  class="bg-black/50 text-zinc-300 px-2.5 py-1 rounded border border-white/5 font-ui text-xs"
                >
                  {{ el }}
                </span>
              </div>
              <span class="font-ui text-xs text-brand font-medium">
                {{ dim.telemetry }}
              </span>
            </div>
          </div>
        </div>

        <!-- Dynamic Detailed View of Selected Dimension -->
        <div class="mt-8 rounded-xl border border-white/[0.08] bg-[#090e15] p-5 sm:p-6 font-ui">
          <Transition name="dimension-fade" mode="out-in">
            <div :key="activeDimId">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div class="flex items-center gap-2">
                  <span class="text-xs text-brand font-medium">Selected Dimension:</span>
                  <span class="text-sm text-white font-medium">
                    {{ architecturalDimensions.find(d => d.id === activeDimId)?.title }}
                  </span>
                </div>
                <div class="text-xs text-zinc-400 flex items-center gap-2">
                  <span>Platform State:</span>
                  <span class="text-brand font-medium">Connected &amp; Monitored</span>
                </div>
              </div>
              <p class="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-editorial italic">
                "In a mature enterprise, no single dimension operates as an island. Operational processes trigger data records, software systems capture transactions, and governance rules continuously ensure auditable integrity."
              </p>
            </div>
          </Transition>
        </div>

        <!-- Bottom Visual Conduit Bar -->
        <div
          class="mt-8 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 font-ui text-xs text-zinc-400"
        >
          <div class="flex items-center gap-2 text-zinc-300">
            <span class="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span>Operations flow into Data · Systems support Workflows · Governance protects all layers</span>
          </div>
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors group"
          >
            <span>Explore Connected Products</span>
            <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dimension-fade-enter-active,
.dimension-fade-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}
.dimension-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.dimension-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
@media (prefers-reduced-motion: reduce) {
  .dimension-fade-enter-active,
  .dimension-fade-leave-active {
    transition: none !important;
  }
}
</style>
