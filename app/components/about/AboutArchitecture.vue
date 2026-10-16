<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { Workflow, Network, BarChart3, ShieldCheck, ArrowRight, Layers } from 'lucide-vue-next'

const architecturalDimensions = [
  {
    id: 'business-ops',
    code: 'DIM_01',
    title: 'Business Operations',
    tag: 'Execution & Handoffs',
    icon: Workflow,
    description:
      'Coordinating cross-functional workflows, automating routine team handoffs, and eliminating operational friction across distributed departments.',
    elements: ['Task routing', 'Milestone coordination', 'Handoff visibility'],
    telemetry: 'REAL-TIME WORKFLOW DISPATCH'
  },
  {
    id: 'connected-systems',
    code: 'DIM_02',
    title: 'Connected Systems',
    tag: 'Interoperability & Data Bus',
    icon: Network,
    description:
      'Bridging on-premise databases, cloud applications, and external partner APIs into a synchronized data fabric that prevents fragmented records.',
    elements: ['API bridges', 'Legacy sync', 'Event exchange'],
    telemetry: 'BI-DIRECTIONAL INTEROP BUS'
  },
  {
    id: 'data-insights',
    code: 'DIM_03',
    title: 'Data & Insights',
    tag: 'Telemetry & Observability',
    icon: BarChart3,
    description:
      'Aggregating operational events into real-time business telemetry, equipping leadership with direct visibility over throughput and bottlenecks.',
    elements: ['Operational feeds', 'Latency tracking', 'Decision clarity'],
    telemetry: 'LATENCY & EVENT OBSERVABILITY'
  },
  {
    id: 'governance',
    code: 'DIM_04',
    title: 'Governance & Oversight',
    tag: 'Integrity & Policies',
    icon: ShieldCheck,
    description:
      'Maintaining verifiable operational boundaries, role-based controls, and policy enforcement across interconnected enterprise systems.',
    elements: ['Audit readiness', 'Access boundaries', 'Traceable logs'],
    telemetry: 'VERIFIABLE POLICY CONTROL'
  }
]

const activeDimId = ref('business-ops')

function selectDimension(id: string) {
  activeDimId.value = id
}
</script>

<template>
  <section
    id="connected-architecture"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.06] overflow-hidden"
  >
    <!-- Ambient emerald glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Tag & Coordinate Metadata Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-mono text-xs text-zinc-400">
        <ChapterLabel
          index="CHAPTER 04"
          label="CONNECTED ARCHITECTURE"
          sublabel="CONCEPTUAL FRAMEWORK"
        />
        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            SYSTEM BLUEPRINT
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">QUADRANT COORDINATION MODEL</span>
        </div>
      </div>

      <!-- Section Header -->
      <div class="max-w-3xl space-y-4 mb-16">
        <h2
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
        >
          A More Connected
          <span class="italic font-light text-brand">View of Business</span>.
        </h2>

        <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
          When operations, systems, data, and governance function as unified elements, organisations
          achieve greater resilience. KavoraX aligns these four dimensions into one cohesive
          operational model.
        </p>
      </div>

      <!-- Bespoke Conceptual Blueprint Frame with Corner Crosshairs -->
      <div
        class="relative rounded-2xl border border-white/10 bg-[#0c131d]/90 p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] group"
      >
        <!-- Active Theory Corner Crosshairs -->
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
              <h3 class="text-base font-semibold text-white">
                The Four Interconnected Dimensions of Business
              </h3>
              <p class="text-xs text-zinc-400">
                Illustrative conceptual diagram: Synchronizing enterprise operations, data, and oversight
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-xs text-zinc-400 font-mono">FRAMEWORK:</span>
            <span
              class="font-mono text-xs text-brand bg-brand/10 px-2.5 py-1 rounded border border-brand/20"
            >
              KAVORAX_QUAD_MODEL
            </span>
          </div>
        </div>

        <!-- Interactive 4 Dimensions Quad Grid -->
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
                    <span class="font-mono text-[10px] text-brand/70">{{ dim.code }}</span>
                    <span class="text-zinc-600">//</span>
                    <span class="text-xs font-mono text-zinc-400">
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

            <!-- Sub-elements Pills & Telemetry Tag -->
            <div class="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(el, eIdx) in dim.elements"
                  :key="eIdx"
                  class="bg-black/50 text-zinc-300 px-2.5 py-1 rounded border border-white/5 font-mono text-[11px]"
                >
                  {{ el }}
                </span>
              </div>
              <span class="font-mono text-[10px] text-brand/80">
                {{ dim.telemetry }}
              </span>
            </div>
          </div>
        </div>

        <!-- Dynamic Detailed View of Selected Dimension -->
        <div class="mt-8 rounded-xl border border-white/[0.08] bg-[#090e15] p-5 sm:p-6 font-ui">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs text-brand font-semibold">SELECTED VIEW:</span>
              <span class="text-sm text-white font-medium">
                {{ architecturalDimensions.find(d => d.id === activeDimId)?.title }}
              </span>
            </div>
            <div class="font-mono text-[11px] text-zinc-400 flex items-center gap-2">
              <span>INTERFACE BUS:</span>
              <span class="text-brand">INTERCONNECTED & MONITORED</span>
            </div>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-editorial italic">
            "In a mature enterprise, no single dimension operates as an island. Operational processes trigger data records, software systems capture transactions, and governance rules continuously ensure auditable integrity."
          </p>
        </div>

        <!-- Bottom Visual Conduit Bar -->
        <div
          class="mt-8 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 font-ui text-xs text-zinc-400"
        >
          <div class="flex items-center gap-2 text-zinc-300">
            <span class="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span>Conceptual Relationship: Operations flow into Data · Systems support Workflows · Governance protects all layers</span>
          </div>
          <NuxtLink
            to="/products"
            class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors group"
          >
            <span>Explore KavoraX Connected Products</span>
            <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
