<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import {
  Workflow,
  BarChart3,
  Network,
  ShieldCheck,
  ArrowRight,
  Layers,
  CheckCircle2
} from 'lucide-vue-next'

const connectedRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(connectedRef, { threshold: 0.1 })

const operationalPillars = [
  {
    id: 'workflows',
    number: '01',
    title: 'Business Workflows',
    subtitle: 'Execution & Coordination',
    icon: Workflow,
    description:
      'Coordinating cross-functional execution and milestone progression so teams spend less time chasing status updates and more time moving initiatives forward.',
    highlights: [
      'Multi-team handoff synchronization',
      'Automated task routing and escalation',
      'Exception triage and bottleneck mitigation'
    ]
  },
  {
    id: 'data-insights',
    number: '02',
    title: 'Data & Insights',
    subtitle: 'Visibility & Telemetry',
    icon: BarChart3,
    description:
      'Aggregating operational telemetry into clear, real-time views so leadership can observe system health, workload throughput, and potential delivery risks.',
    highlights: [
      'Centralized operational telemetry feeds',
      'Activity visibility across siloed units',
      'Data-backed decision clarity'
    ]
  },
  {
    id: 'connected-systems',
    number: '03',
    title: 'Connected Systems',
    subtitle: 'Interoperability & Bridging',
    icon: Network,
    description:
      'Bridging legacy on-premise infrastructure, modern SaaS platforms, and external partner APIs into one coherent operational fabric without rip-and-replace.',
    highlights: [
      'Cross-platform event synchronization',
      'Resilient multi-system data pipelines',
      'Decoupled architecture compatibility'
    ]
  },
  {
    id: 'governance',
    number: '04',
    title: 'Governance & Oversight',
    subtitle: 'Policy & Auditability',
    icon: ShieldCheck,
    description:
      'Ensuring that as workflows scale across systems and departments, administrative actions remain policy-compliant, traceable, and ready for internal audit.',
    highlights: [
      'Role-based authorization boundaries',
      'Traceable operational audit trails',
      'Consistent policy governance'
    ]
  }
]
</script>

<template>
  <section
    ref="connectedRef"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] overflow-hidden"
    :class="{ 'is-revealed': isRevealed }"
  >
    <!-- Ambient emerald depth lighting -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isRevealed }">
          <ChapterLabel
            index="CHAPTER 03"
            label="CONNECTED BUSINESS OPERATIONS"
            sublabel="FOUNDATIONAL ARCHITECTURE"
          />
        </div>

        <WordReveal
          text="Connected Systems. Clearer Operations."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          :italic-words="['Clearer', 'Operations.']"
          :delay="120"
          :threshold="0.15"
        />

        <p
          class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto reveal-paragraph transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isRevealed }"
        >
          Operational resilience depends on how effectively workflows, data, systems, and governance
          interact. KavoraX designs solutions that reinforce these four essential pillars, creating
          coherent operational foundations across varied business environments.
        </p>
      </div>

      <!-- Conceptual Relationship Diagram -->
      <div class="mt-16 sm:mt-20">
        <!-- Center Interconnection Hub Board -->
        <div
          class="rounded-2xl border border-white/[0.1] bg-[#0c131d]/90 p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative reveal-card transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isRevealed }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

          <!-- Top Banner Bar -->
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-white/[0.08] gap-4 font-ui reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isRevealed }"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand"
              >
                <Layers class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-white">
                  The Four Operational Pillars of Connected Enterprise
                </h3>
                <p class="text-xs text-zinc-400">
                  Illustrative architecture: Interdependent relationships driving business clarity
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 font-mono text-xs">
              <span class="text-zinc-500">MODEL:</span>
              <span
                class="text-brand bg-brand/10 px-2.5 py-1 rounded border border-brand/20 font-semibold"
              >
                UNIFIED COHESION
              </span>
            </div>
          </div>

          <!-- 4 Pillars Quad Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-ui">
            <div
              v-for="(pillar, index) in operationalPillars"
              :key="pillar.id"
              :class="[
                'group relative rounded-xl border border-white/[0.07] bg-[#101925]/70 p-6 sm:p-7 hover:border-brand/35 transition-all duration-300 hover:bg-[#121d2c] reveal-card',
                `stagger-${index + 1}`,
                isRevealed ? 'is-revealed' : ''
              ]"
            >
              <!-- Card Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#142030] border border-white/10 text-brand group-hover:scale-105 transition-transform shrink-0"
                  >
                    <component :is="pillar.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <h4
                      class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors"
                    >
                      {{ pillar.title }}
                    </h4>
                    <span class="text-xs font-mono text-zinc-400 block mt-0.5">
                      {{ pillar.subtitle }}
                    </span>
                  </div>
                </div>
                <span class="font-mono text-xs text-brand font-semibold">[ {{ pillar.number }} ]</span>
              </div>

              <!-- Body Description -->
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {{ pillar.description }}
              </p>

              <!-- Capability Highlights -->
              <div class="mt-6 pt-5 border-t border-white/[0.06] space-y-2 text-xs text-zinc-400">
                <div
                  v-for="(hl, hIdx) in pillar.highlights"
                  :key="hIdx"
                  class="flex items-center gap-2"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
                  <span class="text-zinc-300">{{ hl }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Visual Flow Conduit Bar -->
          <div
            class="mt-8 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isRevealed }"
          >
            <div class="flex items-center gap-2 text-zinc-300">
              <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
              <span>Conceptual Relationship: Workflows generate Data · Systems bridge Processes · Governance protects Operations</span>
            </div>
            <NuxtLink
              to="/products"
              class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors group/link font-semibold"
            >
              <span>Explore KavoraX Connected Products</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
