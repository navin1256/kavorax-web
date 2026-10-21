<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Cpu,
  BarChart3,
  Network,
  ArrowRight,
  Compass,
  Link2,
  Sparkles,
  CheckCircle2,
  Workflow,
  Radio
} from 'lucide-vue-next'

const activePhase = ref(1)

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

const schematicRef = ref<HTMLElement | null>(null)
const { isRevealed: isSchematicRevealed } = useScrollReveal(schematicRef, { threshold: 0.12 })

const areasRef = ref<HTMLElement | null>(null)
const { isRevealed: isAreasRevealed } = useScrollReveal(areasRef, { threshold: 0.12 })

const solutionAreas = [
  {
    id: 'operations-platform',
    title: 'Operations Platform',
    category: 'Core Operations Engine',
    icon: Cpu,
    tagline: 'Orchestrating cross-functional workflows with deterministic precision.',
    description:
      'Engineered to streamline business workflows, reduce administrative friction, and coordinate mission-critical activities across distributed teams without fragile manual handoffs.',
    capabilities: [
      'Cross-departmental workflow coordination',
      'Structured operational handoffs',
      'Policy-governed task execution monitoring'
    ],
    link: '/products#operations-platform',
    linkText: 'Explore Operations Platform'
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Insights',
    category: 'Visibility & Intelligence',
    icon: BarChart3,
    tagline: 'Translating continuous telemetry into immediate operational visibility.',
    description:
      'Translates operational business data into actionable visibility, equipping decision-makers with timely clarity on activity, resource saturation, and cross-platform bottlenecks.',
    capabilities: [
      'Centralized operational telemetry reporting',
      'Real-time business activity visibility',
      'Cross-system performance metrics'
    ],
    link: '/products#analytics-insights',
    linkText: 'Explore Analytics Solutions'
  },
  {
    id: 'integration-hub',
    title: 'Integration Hub',
    category: 'Interoperability Fabric',
    icon: Network,
    tagline: 'Bridging legacy databases and modern cloud microservices seamlessly.',
    description:
      'Facilitates structured interoperability across existing software environments, bridging legacy systems and cloud applications into synchronized data flows.',
    capabilities: [
      'Multi-system operational synchronization',
      'Structured data exchange pipelines',
      'Extensible cross-platform bridging'
    ],
    link: '/products#integration-hub',
    linkText: 'Explore Integration Hub'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Start with business goals and operational needs.',
    detail:
      'Before evaluating software capabilities, identify the specific business outcomes, compliance boundaries, and operational handoffs that define daily operations.',
    icon: Compass,
    action: 'Operational Audit & Workflow Mapping',
    metric: 'Goal & Boundary Definition'
  },
  {
    number: '02',
    title: 'Connect',
    tagline: 'Consider how tools, information, and workflows fit together.',
    detail:
      'Examine the connective tissue between disparate applications. True efficiency emerges when information moves predictably between platforms without manual intervention.',
    icon: Link2,
    action: 'Interoperable Protocol & Event Synchronization',
    metric: 'Real-Time Interoperability'
  },
  {
    number: '03',
    title: 'Adapt',
    tagline: 'Plan for changing priorities and future requirements.',
    detail:
      'Technology should accommodate organizational growth and evolving operational needs, allowing systems to scale without requiring complete architectural replacement.',
    icon: Sparkles,
    action: 'Modular Evolution & Sustainable Scale',
    metric: 'Future-Ready Architecture'
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] overflow-hidden">
    <!-- Ambient emerald atmospheric glow with Organic Drift -->
    <div
      class="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Scroll Reveal -->
      <div
        ref="headerRef"
        class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 03"
          label="CONNECTED METHODOLOGY"
          sublabel="SYSTEMIC ARCHITECTURE"
        />
        <WordReveal
          as="h2"
          text="Architected for Organizational Coherence."
          :italic-words="['Organizational', 'Coherence.']"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
        />
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
          KavoraX solutions are structured across three interconnected capabilities designed to address practical operational challenges in modern enterprise environments.
        </p>
      </div>

      <!-- ======================================================== -->
      <!-- PART 1: CUSTOM SVG CONNECTED WORKFLOW DIAGRAM            -->
      <!-- ======================================================== -->
      <div
        ref="schematicRef"
        class="mt-16 rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative reveal-card transition-editorial duration-700"
        :class="{ 'is-revealed': isSchematicRevealed }"
      >
        <!-- Corner Crosshairs -->
        <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-lg bg-brand/10 border border-brand/25 flex items-center justify-center text-brand">
              <Workflow class="h-4 w-4" />
            </div>
            <div>
              <span class="text-xs font-mono text-brand font-semibold tracking-wider uppercase">
                THE CONNECTED ARCHITECTURE LIFECYCLE
              </span>
              <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                A Structured, Three-Phase Engagement Model
              </h3>
            </div>
          </div>

          <div class="flex items-center gap-2 font-mono text-xs text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded">
            <Radio class="h-3 w-3 animate-pulse" />
            <span>PRAGMATIC ROLLOUT</span>
          </div>
        </div>

        <!-- Custom SVG Connected Workflow Schematic Header -->
        <div class="my-6 hidden md:block">
          <svg class="w-full h-12" viewBox="0 0 900 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background Static Track -->
            <path d="M 150 24 L 750 24" stroke="rgba(255,255,255,0.08)" stroke-width="2" stroke-dasharray="4 4" />
            <!-- Animated Flowing Beam (Self-drawing line) -->
            <path
              d="M 150 24 L 750 24"
              stroke="url(#flowGradient)"
              stroke-width="2.5"
              stroke-linecap="round"
              class="draw-path-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
              :class="{ 'is-revealed': isSchematicRevealed }"
            />
            
            <!-- Stage 1 Node -->
            <g class="draw-node" :class="{ 'is-revealed': isSchematicRevealed }">
              <circle cx="150" cy="24" r="10" fill="#0c141e" stroke="#10b981" stroke-width="2" />
              <circle cx="150" cy="24" r="4" fill="#10b981" />
            </g>
            
            <!-- Stage 2 Node -->
            <g class="draw-node" :class="{ 'is-revealed': isSchematicRevealed }">
              <circle cx="450" cy="24" r="10" fill="#0c141e" stroke="#06b6d4" stroke-width="2" />
              <circle cx="450" cy="24" r="4" fill="#06b6d4" />
            </g>
            
            <!-- Stage 3 Node -->
            <g class="draw-node" :class="{ 'is-revealed': isSchematicRevealed }">
              <circle cx="750" cy="24" r="10" fill="#0c141e" stroke="#34d399" stroke-width="2" />
              <circle cx="750" cy="24" r="4" fill="#34d399" />
            </g>

            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.8" />
                <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#34d399" stop-opacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- Connected Line Process Cards (Interactive 3-Step Lifecycle) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative font-ui">
          <div
            v-for="(step, idx) in processSteps"
            :key="step.number"
            class="p-6 sm:p-7 rounded-xl border transition-all duration-200 ease-out relative group cursor-pointer"
            :class="[
              activePhase === idx
                ? 'border-brand/50 bg-[#121c2a] shadow-[0_4px_24px_rgba(16,185,129,0.18)] scale-[1.01]'
                : 'border-white/[0.07] bg-[#090e16]/80 hover:border-white/20 hover:bg-[#0d141e]'
            ]"
            @click="activePhase = idx"
          >
            <!-- Step Header with Number & Status -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div class="flex items-center gap-2">
                <span class="font-mono text-sm font-semibold text-brand">[ {{ step.number }} ]</span>
                <span class="text-xs font-semibold text-white tracking-wide uppercase">{{ step.title }}</span>
              </div>
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors shrink-0"
                :class="[
                  activePhase === idx
                    ? 'border-brand/40 bg-brand/15 text-brand shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'border-white/10 bg-white/[0.02] text-zinc-400'
                ]"
              >
                <component :is="step.icon" class="h-4 w-4" />
              </div>
            </div>

            <!-- Content -->
            <div class="mt-5 space-y-2">
              <div class="font-editorial text-xl font-medium text-white leading-snug">
                {{ step.tagline }}
              </div>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                {{ step.detail }}
              </p>
            </div>

            <div class="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
              <span class="text-zinc-500">DELIVERABLE:</span>
              <span class="text-brand font-semibold">{{ step.action }}</span>
            </div>
          </div>
        </div>

        <!-- Connection Pipeline Ribbon -->
        <div class="mt-8 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <span class="flex items-center gap-2 text-zinc-300">
            <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
            <span>CONTINUOUS COHERENCE: NO COMPROMISE ON EXISTING WORKFLOWS</span>
          </span>
          <span class="text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 class="h-3.5 w-3.5" />
            <span>ZERO-DISRUPTION ROLLOUT</span>
          </span>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- PART 2: CORE SOLUTION AREAS WITH PRODUCT INTEGRATION    -->
      <!-- ======================================================== -->
      <div ref="areasRef" class="mt-20">
        <div class="flex items-center justify-between pb-6 border-b border-white/[0.08] font-mono text-xs text-zinc-400">
          <span class="text-brand font-semibold">[ 04 // CAPABILITY APPLICATION ]</span>
          <span class="text-zinc-400">CONNECTED SOLUTIONS MATRIX</span>
        </div>

        <!-- Asymmetric 3-Column Solution Cards with Direct Product Deep Links -->
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 font-ui">
          <div
            v-for="(area, i) in solutionAreas"
            :key="area.id"
            class="p-8 rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] reveal-card transition-editorial duration-700"
            :class="[{ 'is-revealed': isAreasRevealed }, 'stagger-' + (i + 1)]"
          >
            <!-- Corner Crosshair -->
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

            <div class="space-y-5">
              <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand">
                  <component :is="area.icon" class="h-5 w-5" />
                </div>
                <span class="font-mono text-xs text-brand font-medium tracking-wider uppercase">
                  {{ area.category }}
                </span>
              </div>

              <h4 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                {{ area.title }}
              </h4>

              <div class="text-xs text-brand font-medium font-mono">
                {{ area.tagline }}
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ area.description }}
              </p>

              <!-- Capability Checklist -->
              <div class="space-y-2.5 pt-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, i) in area.capabilities"
                  :key="i"
                  class="flex items-start gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- Deep link to Product with Arrow hover -->
            <div class="mt-8 pt-5 border-t border-white/[0.06]">
              <NuxtLink
                :to="area.link"
                class="inline-flex items-center justify-between w-full text-xs font-semibold text-brand hover:text-white transition-colors group/link font-mono"
              >
                <span>{{ area.linkText }}</span>
                <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
