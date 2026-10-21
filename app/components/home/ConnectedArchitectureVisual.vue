<script setup lang="ts">
import { ref, computed } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Workflow,
  BarChart3,
  Network,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-vue-next'

const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })

const activeLayerId = ref<'operations' | 'telemetry' | 'integration' | 'governance'>('operations')

const layers = [
  {
    id: 'operations' as const,
    title: 'Workflows & Operations',
    tag: 'Layer 01',
    icon: Workflow,
    summary:
      'Coordinating cross-functional workflows, automating routine team handoffs, and eliminating operational friction across distributed departments.',
    capabilities: [
      'Multi-team task synchronization',
      'Automated SLA routing & escalation',
      'Exception triage & bottleneck mitigation'
    ],
    flowHighlight: 'OPERATIONS COORDINATION LAYER'
  },
  {
    id: 'telemetry' as const,
    title: 'Data & Telemetry Stream',
    tag: 'Layer 02',
    icon: BarChart3,
    summary:
      'Aggregating operational events into real-time business telemetry, equipping leadership with direct visibility over throughput and bottlenecks.',
    capabilities: [
      'Centralized operational telemetry feeds',
      'Continuous latency and throughput tracking',
      'Real-time anomaly identification'
    ],
    flowHighlight: 'REAL-TIME TELEMETRY & INSIGHTS'
  },
  {
    id: 'integration' as const,
    title: 'Universal Integration Fabric',
    tag: 'Layer 03',
    icon: Network,
    summary:
      'Bridging on-premise databases, cloud applications, and external partner APIs into a synchronized data fabric without disruptive rip-and-replace.',
    capabilities: [
      'Resilient multi-system data pipelines',
      'Cross-platform webhook synchronization',
      'Decoupled architecture compatibility'
    ],
    flowHighlight: 'UNIVERSAL SYSTEM INTEROPERABILITY'
  },
  {
    id: 'governance' as const,
    title: 'Governance & Security Perimeter',
    tag: 'Layer 04',
    icon: ShieldCheck,
    summary:
      'Maintaining verifiable operational boundaries, role-based controls, and immutable audit logs across all enterprise systems.',
    capabilities: [
      'Role-based authorization boundaries',
      'Traceable operational audit trails',
      'Continuous compliance verification'
    ],
    flowHighlight: 'GOVERNANCE & VERIFIABLE AUDIT'
  }
]

const currentLayer = computed(() => {
  return (layers.find((l) => l.id === activeLayerId.value) || layers[0]) as (typeof layers)[number]
})
</script>

<template>
  <section
    ref="targetRef"
    class="py-24 md:py-36 bg-[#080c10] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Ambient emerald atmospheric glows -->
    <div
      class="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Chapter Header -->
      <div
        class="pb-8 border-b border-white/[0.08] mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <div>
          <ChapterLabel index="02" label="CONNECTED SYSTEMS BLUEPRINT" sublabel="INTERCONNECTED ARCHITECTURE" />
          <WordReveal
            text="How connected systems function in unison."
            as="h2"
            highlight="unison."
            highlight-class="italic font-light text-brand"
            :threshold="0.12"
            :base-delay-ms="100"
            :stagger-ms="55"
            class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mt-4"
          />
        </div>
        <p class="font-editorial text-lg sm:text-xl text-zinc-300 max-w-md leading-relaxed font-normal">
          KavoraX architecture replaces fragmented point tools with a layered, synchronized digital fabric engineered for business resilience.
        </p>
      </div>

      <!-- Self-Drawing Technical Architecture Interconnect Bus (Priority 3) -->
      <div
        class="mb-12 rounded-2xl border border-white/10 bg-[#0c1420]/80 backdrop-blur-md p-5 sm:p-7 relative overflow-hidden reveal-card transition-editorial duration-700 delay-100"
        :class="{ 'is-revealed': isRevealed }"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.06] font-mono text-xs gap-2">
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-brand" />
            <span class="text-white font-medium tracking-wider uppercase text-[11px]">INTER-LAYER DATA SYNCHRONIZATION BUS</span>
          </div>
          <div class="flex items-center gap-4 text-[10px] text-zinc-400">
            <span class="flex items-center gap-1.5"><span class="h-1.5 w-3 rounded-full bg-brand inline-block" /> Primary Backbone</span>
            <span class="flex items-center gap-1.5"><span class="h-1.5 w-3 rounded-full bg-zinc-500 inline-block" /> Secondary Telemetry Link</span>
            <span class="text-brand font-semibold hidden sm:inline">STATE SYNCHRONIZED</span>
          </div>
        </div>

        <!-- SVG Technical Connection Canvas -->
        <div class="relative w-full overflow-hidden">
          <svg
            viewBox="0 0 960 70"
            class="w-full h-16 sm:h-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="KavoraX Interconnected Systems Architecture Schematic"
          >
            <!-- 1. Background static guide tracks (fine dotted hairline) -->
            <line x1="80" y1="35" x2="880" y2="35" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" stroke-dasharray="4 6" />
            <line x1="80" y1="52" x2="880" y2="52" stroke="rgba(255,255,255,0.04)" stroke-width="1" />

            <!-- 2. Secondary telemetry paths (muted gray, draws after 450ms delay, duration 750ms) -->
            <path
              d="M 80 52 L 320 52 L 320 35 M 320 52 L 600 52 L 600 35 M 600 52 L 880 52 L 880 35"
              stroke="#64748b"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="draw-path-secondary"
              :class="{ 'is-revealed': isRevealed }"
            />

            <!-- 3. Primary Connection Backbone (Emerald #10b981, draws progressively 0-1100ms) -->
            <path
              d="M 80 35 L 880 35"
              stroke="#10b981"
              stroke-width="2.5"
              stroke-linecap="round"
              class="draw-path-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              :class="{ 'is-revealed': isRevealed }"
            />

            <!-- 4. Interactive Layer Nodes (Fade and scale in at 950ms after lines arrive) -->
            <!-- Node 01: Workflows & Operations -->
            <g class="draw-node cursor-pointer group" :class="{ 'is-revealed': isRevealed }" @click="activeLayerId = 'operations'">
              <circle v-if="activeLayerId === 'operations'" cx="80" cy="35" r="20" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.4" class="animate-ping" />
              <circle cx="80" cy="35" r="14" fill="#080c10" :stroke="activeLayerId === 'operations' ? '#10b981' : 'rgba(255,255,255,0.2)'" stroke-width="2" class="transition-colors duration-300" />
              <circle cx="80" cy="35" r="5" :fill="activeLayerId === 'operations' ? '#10b981' : '#64748b'" class="transition-colors duration-300" />
              <text x="80" y="16" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle" font-weight="600">LAYER 01</text>
            </g>

            <!-- Node 02: Data & Telemetry -->
            <g class="draw-node cursor-pointer group" :class="{ 'is-revealed': isRevealed }" @click="activeLayerId = 'telemetry'">
              <circle v-if="activeLayerId === 'telemetry'" cx="320" cy="35" r="20" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.4" class="animate-ping" />
              <circle cx="320" cy="35" r="14" fill="#080c10" :stroke="activeLayerId === 'telemetry' ? '#10b981' : 'rgba(255,255,255,0.2)'" stroke-width="2" class="transition-colors duration-300" />
              <circle cx="320" cy="35" r="5" :fill="activeLayerId === 'telemetry' ? '#10b981' : '#64748b'" class="transition-colors duration-300" />
              <text x="320" y="16" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle" font-weight="600">LAYER 02</text>
            </g>

            <!-- Node 03: Universal Integration -->
            <g class="draw-node cursor-pointer group" :class="{ 'is-revealed': isRevealed }" @click="activeLayerId = 'integration'">
              <circle v-if="activeLayerId === 'integration'" cx="600" cy="35" r="20" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.4" class="animate-ping" />
              <circle cx="600" cy="35" r="14" fill="#080c10" :stroke="activeLayerId === 'integration' ? '#10b981' : 'rgba(255,255,255,0.2)'" stroke-width="2" class="transition-colors duration-300" />
              <circle cx="600" cy="35" r="5" :fill="activeLayerId === 'integration' ? '#10b981' : '#64748b'" class="transition-colors duration-300" />
              <text x="600" y="16" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle" font-weight="600">LAYER 03</text>
            </g>

            <!-- Node 04: Governance & Security -->
            <g class="draw-node cursor-pointer group" :class="{ 'is-revealed': isRevealed }" @click="activeLayerId = 'governance'">
              <circle v-if="activeLayerId === 'governance'" cx="880" cy="35" r="20" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.4" class="animate-ping" />
              <circle cx="880" cy="35" r="14" fill="#080c10" :stroke="activeLayerId === 'governance' ? '#10b981' : 'rgba(255,255,255,0.2)'" stroke-width="2" class="transition-colors duration-300" />
              <circle cx="880" cy="35" r="5" :fill="activeLayerId === 'governance' ? '#10b981' : '#64748b'" class="transition-colors duration-300" />
              <text x="880" y="16" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle" font-weight="600">LAYER 04</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- Custom Interactive Architecture Schematic -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start font-ui">
        <!-- Left: Interactive Layer Navigator Stack -->
        <div
          class="lg:col-span-5 space-y-3 reveal-base transition-editorial duration-700 delay-150"
          :class="{ 'is-revealed': isRevealed }"
        >
          <div
            v-for="layer in layers"
            :key="layer.id"
            class="p-5 rounded-xl border transition-all duration-300 cursor-pointer relative group"
            :class="[
              activeLayerId === layer.id
                ? 'border-brand/50 bg-[#111a26] shadow-[0_8px_30px_rgba(16,185,129,0.16)]'
                : 'border-white/[0.06] bg-[#0c131c]/60 hover:border-white/20 hover:bg-[#0e1622]'
            ]"
            @click="activeLayerId = layer.id"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3.5">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg border transition-all"
                  :class="[
                    activeLayerId === layer.id
                      ? 'border-brand/40 bg-brand/20 text-brand'
                      : 'border-white/10 bg-[#121c29] text-zinc-400 group-hover:text-white'
                  ]"
                >
                  <component :is="layer.icon" class="h-5 w-5" />
                </div>
                <div>
                  <div class="font-editorial text-xl font-semibold text-white tracking-tight">
                    {{ layer.title }}
                  </div>
                  <div class="font-mono text-xs text-zinc-400 mt-0.5">
                    {{ layer.tag }}
                  </div>
                </div>
              </div>

              <div
                class="h-2 w-2 rounded-full transition-colors"
                :class="activeLayerId === layer.id ? 'bg-brand shadow-[0_0_8px_#10b981]' : 'bg-transparent'"
              />
            </div>
          </div>
        </div>

        <!-- Right: Layer Details View -->
        <div
          class="lg:col-span-7 relative reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isRevealed }"
        >
          <div
            class="rounded-2xl border border-white/10 bg-[#0c1420]/95 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.7)] relative overflow-hidden group"
          >
            <!-- Top Status Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] font-mono text-xs gap-2">
              <div class="flex items-center gap-2 text-brand">
                <span class="h-2 w-2 rounded-full bg-brand shrink-0" />
                <span class="font-semibold uppercase tracking-wider">{{ currentLayer.flowHighlight }}</span>
              </div>
              <span class="text-zinc-400 font-mono text-xs">ENTERPRISE FRAMEWORK</span>
            </div>

            <!-- Content Area -->
            <div class="py-6 sm:py-8 space-y-6">
              <div class="flex items-center gap-3.5">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 border border-brand/30 text-brand">
                  <component :is="currentLayer.icon" class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                    {{ currentLayer.title }}
                  </h3>
                  <div class="font-mono text-xs text-brand mt-0.5">
                    {{ currentLayer.tag }} · Integrated Enterprise Capability
                  </div>
                </div>
              </div>

              <p class="font-editorial text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal">
                {{ currentLayer.summary }}
              </p>

              <!-- Capability List -->
              <div class="pt-4 border-t border-white/[0.06] space-y-3 font-ui text-sm">
                <div class="text-xs font-mono text-zinc-400 uppercase tracking-widest font-medium">
                  Operational Capabilities:
                </div>
                <div
                  v-for="(cap, cIdx) in currentLayer.capabilities"
                  :key="cIdx"
                  class="flex items-center gap-3 text-zinc-200"
                >
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- Footer Deep Link -->
            <div class="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between font-ui text-xs gap-3">
              <span class="text-zinc-400 font-mono text-xs">KavoraX Platform Convergence</span>
              <NuxtLink
                to="/solutions"
                class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors font-semibold"
              >
                <span>Explore Solutions Architecture</span>
                <ArrowRight class="h-3.5 w-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
