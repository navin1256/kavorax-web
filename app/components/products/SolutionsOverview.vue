<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import TelemetryBadge from '~/components/visual/TelemetryBadge.vue'
import {
  Cpu,
  BarChart3,
  Network,
  ArrowRight,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  ArrowRightLeft,
  Radio,
  Activity,
  Terminal,
  Server,
  Zap,
  Lock
} from 'lucide-vue-next'

const route = useRoute()

// Active interactive state in Product 1: Operations Platform
const activeOpsStage = ref(1)
const opsStages = [
  {
    step: '01',
    name: 'INGESTION & VALIDATION',
    latency: '1.2ms',
    status: 'VERIFIED',
    desc: 'Deterministic schema evaluation with zero-trust gate validation and payload sanitization.',
    target: 'Cluster Ingress Node A'
  },
  {
    step: '02',
    name: 'MULTI-CLUSTER DISPATCH',
    latency: '4.8ms',
    status: 'ACTIVE RUN',
    desc: 'Distributed cross-team state replication with automated threshold escalation monitoring.',
    target: 'Global Workflow Pipeline'
  },
  {
    step: '03',
    name: 'IMMUTABLE AUDIT RECORD',
    latency: '2.1ms',
    status: 'SEALED',
    desc: 'Complete activity lifecycle committed to tamper-proof cryptographic audit ledger.',
    target: 'Persistent Compliance Store'
  }
]

// Active interactive channel in Product 2: Analytics & Insights
type AnalyticsChannel = 'throughput' | 'latency' | 'anomalies'
const activeAnalyticsChannel = ref<AnalyticsChannel>('throughput')

const channelData: Record<AnalyticsChannel, { title: string, rate: string, precision: string, status: string, bars: number[] }> = {
  throughput: {
    title: 'INGESTION THROUGHPUT',
    rate: '1.2M EVENTS/SEC',
    precision: '99.98% ACCURACY',
    status: 'OPTIMAL STREAM',
    bars: [45, 62, 78, 68, 85, 94, 98, 88, 72, 60, 82, 91]
  },
  latency: {
    title: 'DISTRIBUTED LATENCY MESH',
    rate: 'P99 < 8.4MS',
    precision: 'SUB-SECOND QUERY',
    status: 'ZERO DRIFT',
    bars: [30, 42, 38, 50, 44, 39, 48, 52, 41, 35, 46, 39]
  },
  anomalies: {
    title: 'ANOMALY RADAR SCANNER',
    rate: '0 FAULTS DETECTED',
    precision: '99.99% DRIFT-FREE',
    status: 'ALL NODES STABLE',
    bars: [15, 20, 18, 22, 16, 25, 19, 14, 21, 18, 16, 15]
  }
}

// Active interactive protocol in Product 3: Integration Hub
type ProtocolType = 'rest' | 'graphql' | 'kafka'
const activeProtocol = ref<ProtocolType>('rest')

const protocolDetails: Record<ProtocolType, { label: string, desc: string, payload: string, latency: string }> = {
  rest: {
    label: 'REST & WEBHOOK INGRESS',
    desc: 'Deterministic HTTP/2 webhooks with idempotent retry semantics and HMAC signatures.',
    payload: '{"protocol": "REST/v2", "delivery": "exactly-once", "tls": "1.3", "cipher": "AES-256-GCM"}',
    latency: '6.4ms'
  },
  graphql: {
    label: 'GRAPHQL FEDERATION MESH',
    desc: 'Unified distributed schema stitching spanning multi-cloud services with zero resolver bottlenecks.',
    payload: '{"protocol": "Federated_GraphQL", "subgraphs": 8, "sync": "real-time", "caching": "distributed"}',
    latency: '8.2ms'
  },
  kafka: {
    label: 'EVENT PUB/SUB KAFKA STREAM',
    desc: 'High-throughput partitioned event pipelines with strict ordering and consumer group balancing.',
    payload: '{"protocol": "Event_Bus", "partition": 16, "replication_factor": 3, "acks": "all"}',
    latency: '4.1ms'
  }
}

interface ProductItem {
  id: string
  aliasId: string
  name: string
  category: string
  badge: string
  icon: any
  headline: string
  description: string
  capabilities: string[]
  ctaText: string
  ctaLink: string
  metrics: { label: string; value: string }[]
}

const products: [ProductItem, ProductItem, ProductItem] = [
  {
    id: 'operations-platform',
    aliasId: 'operations',
    name: 'Operations Platform',
    category: 'Core Operations Engine',
    badge: 'FLAGSHIP PLATFORM // 01',
    icon: Cpu,
    headline: 'Unified orchestration across complex enterprise workflows.',
    description:
      'Engineered to streamline business workflows, eliminate operational friction, and coordinate mission-critical activities across distributed teams without fragile scripts or manual handoffs.',
    capabilities: [
      'End-to-end operational workflow coordination',
      'Automated cross-functional handoff protocols',
      'Policy-governed task execution & audit trails',
      'Continuous distributed health & SLA monitoring'
    ],
    ctaText: 'Consult on Operations Platform',
    ctaLink: '/contact',
    metrics: [
      { label: 'Workflow Reliability', value: '99.99%' },
      { label: 'Dispatch Latency', value: '< 6ms' },
      { label: 'Policy Gates', value: 'Zero-Trust' }
    ]
  },
  {
    id: 'analytics-insights',
    aliasId: 'analytics-intelligence',
    name: 'Analytics & Insights',
    category: 'Visibility & Telemetry',
    badge: 'VISIBILITY SUITE // 02',
    icon: BarChart3,
    headline: 'Actionable intelligence derived from live operational data.',
    description:
      'Transforms operational business data into actionable visibility, equipping leadership with direct clarity on system activity, resource saturation, and cross-platform bottlenecks.',
    capabilities: [
      'Centralized operational telemetry visibility',
      'Real-time business activity reporting & alerts',
      'Unified trend insights across connected platforms',
      'Predictive anomaly detection and root-cause tracing'
    ],
    ctaText: 'Consult on Analytics Engine',
    ctaLink: '/contact',
    metrics: [
      { label: 'Data Ingestion', value: '1.2M evt/s' },
      { label: 'Telemetry Precision', value: '99.98%' },
      { label: 'Query Latency', value: 'sub-second' }
    ]
  },
  {
    id: 'integration-hub',
    aliasId: 'integrations',
    name: 'Integration Hub',
    category: 'Interoperability Fabric',
    badge: 'INTEROPERABILITY FABRIC // 03',
    icon: Network,
    headline: 'Zero-friction interoperability for hybrid enterprise systems.',
    description:
      'Enables reliable interoperability across software systems, bridging legacy on-premise infrastructure and modern cloud applications into one synchronized environment.',
    capabilities: [
      'Multi-system operational synchronization',
      'Frictionless bidirectional data exchange pipelines',
      'Extensible cross-platform adapter bridging',
      'Cryptographically signed payload validation'
    ],
    ctaText: 'Consult on Integration Fabric',
    ctaLink: '/contact',
    metrics: [
      { label: 'Protocol Connectors', value: '45+ Native' },
      { label: 'Sync Latency', value: '< 12ms' },
      { label: 'Delivery Guarantee', value: 'Exactly-Once' }
    ]
  }
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  if (route.hash) {
    const cleanHash = route.hash.replace('#', '')
    setTimeout(() => {
      scrollToSection(cleanHash)
    }, 150)
  }
})

watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      const cleanHash = newHash.replace('#', '')
      scrollToSection(cleanHash)
    }
  }
)
</script>

<template>
  <div id="solutions-overview" class="py-24 md:py-32 bg-[#0b0f14] relative border-b border-white/[0.08]">
    <!-- Background Ambient Refraction -->
    <div
      class="absolute top-1/3 left-10 w-[500px] h-[500px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-brand/[0.03] blur-[160px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Editorial Header -->
      <div
        class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]"
      >
        <div class="max-w-3xl space-y-4">
          <ChapterLabel
            index="CHAPTER 02"
            label="CAPABILITY SPECTRUM"
            sublabel="VERIFIED ENTERPRISE MODULES"
          />
          <h2
            class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          >
            Distinct capability. <span class="italic font-light text-brand">Shared operational architecture</span>.
          </h2>
          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Inspect our three core enterprise platforms below, each detailed with verified technical
            specifications, operational telemetry, and bespoke interface demonstrations.
          </p>
        </div>

        <!-- Sticky Quick Jump Anchor Navigator -->
        <div
          class="flex flex-wrap items-center gap-2 p-1.5 rounded-xl border border-white/10 bg-[#0c131d]/90 backdrop-blur-md font-ui shrink-0 shadow-lg"
        >
          <button
            type="button"
            class="px-3.5 py-2 text-xs font-medium rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-2 cursor-pointer"
            @click="scrollToSection('operations-platform')"
          >
            <Cpu class="h-3.5 w-3.5 text-brand" />
            <span>Operations</span>
          </button>
          <button
            type="button"
            class="px-3.5 py-2 text-xs font-medium rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-2 cursor-pointer"
            @click="scrollToSection('analytics-insights')"
          >
            <BarChart3 class="h-3.5 w-3.5 text-brand" />
            <span>Analytics</span>
          </button>
          <button
            type="button"
            class="px-3.5 py-2 text-xs font-medium rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-2 cursor-pointer"
            @click="scrollToSection('integration-hub')"
          >
            <Network class="h-3.5 w-3.5 text-brand" />
            <span>Integration</span>
          </button>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- PRODUCT 1: OPERATIONS PLATFORM (Workflow Orchestration)  -->
      <!-- Layout: Left = Content, Right = Workflow State Canvas    -->
      <!-- ======================================================== -->
      <section
        id="operations-platform"
        class="mt-16 scroll-mt-28 md:scroll-mt-32 rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative"
      >
        <!-- Invisible alias target for deep link #operations -->
        <div id="operations" class="absolute -top-32 left-0 pointer-events-none" />

        <!-- Corner Crosshairs -->
        <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Left Info Column -->
          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-3">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand"
              >
                <Cpu class="h-4 w-4" />
              </div>
              <span class="font-mono text-xs text-brand tracking-widest uppercase font-semibold">
                {{ products[0].badge }}
              </span>
            </div>

            <h3
              class="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.1] text-balance-editorial"
            >
              {{ products[0].headline }}
            </h3>

            <p class="font-editorial text-lg text-zinc-300 leading-relaxed">
              {{ products[0].description }}
            </p>

            <!-- Verified Capabilities -->
            <div class="space-y-3 pt-2 font-ui">
              <div
                v-for="(cap, idx) in products[0].capabilities"
                :key="idx"
                class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
              >
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <span>{{ cap }}</span>
              </div>
            </div>

            <!-- Telemetry Metrics Bar -->
            <div class="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 font-ui">
              <div v-for="m in products[0].metrics" :key="m.label">
                <div class="text-[11px] text-zinc-400 font-mono">{{ m.label }}</div>
                <div class="font-mono text-base font-semibold text-white mt-1">{{ m.value }}</div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="pt-4 flex flex-wrap items-center gap-4 font-ui">
              <NuxtLink :to="products[0].ctaLink">
                <Button
                  class="bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 group"
                >
                  <span>{{ products[0].ctaText }}</span>
                  <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>
              <NuxtLink
                to="/demo"
                class="px-5 py-2.5 rounded-md border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Request Technical Demonstration
              </NuxtLink>
            </div>
          </div>

          <!-- Right: Bespoke Custom Interface Illustration (Interactive Workflow State Machine Canvas) -->
          <div class="lg:col-span-6">
            <div
              class="rounded-xl border border-white/[0.1] bg-[#070b10] p-6 space-y-5 font-mono text-xs shadow-2xl relative overflow-hidden"
            >
              <!-- Top Glow Bar -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-75" />

              <!-- Console Header -->
              <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-zinc-400">
                <div class="flex items-center gap-2">
                  <Workflow class="h-4 w-4 text-brand" />
                  <span class="text-white font-semibold tracking-wide">WORKFLOW STATE ENGINE</span>
                </div>
                <div class="flex items-center gap-2">
                  <TelemetryBadge label="DISPATCH" metric="6MS" status="active" />
                </div>
              </div>

              <!-- Interactive Step Nodes -->
              <div class="space-y-3 font-ui">
                <div
                  v-for="(stg, index) in opsStages"
                  :key="stg.step"
                  class="p-4 rounded-xl border transition-all duration-300 cursor-pointer relative"
                  :class="[
                    activeOpsStage === index
                      ? 'border-brand/50 bg-[#101824] shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                      : 'border-white/[0.06] bg-[#0c121a]/80 hover:border-white/15'
                  ]"
                  @click="activeOpsStage = index"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5 font-mono text-xs">
                      <span
                        class="h-5 w-5 rounded-md flex items-center justify-center font-bold text-[10px]"
                        :class="activeOpsStage === index ? 'bg-brand text-black' : 'bg-white/10 text-zinc-400'"
                      >
                        {{ stg.step }}
                      </span>
                      <span class="font-semibold text-white tracking-wide">{{ stg.name }}</span>
                    </div>

                    <div class="flex items-center gap-2 font-mono text-[10px]">
                      <span class="text-zinc-500">{{ stg.latency }}</span>
                      <span
                        class="px-2 py-0.5 rounded text-[9px] font-semibold"
                        :class="activeOpsStage === index ? 'bg-brand/20 text-brand border border-brand/30' : 'bg-white/[0.04] text-zinc-400'"
                      >
                        {{ stg.status }}
                      </span>
                    </div>
                  </div>

                  <p class="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {{ stg.desc }}
                  </p>

                  <div
                    v-if="activeOpsStage === index"
                    class="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400"
                  >
                    <span class="text-zinc-500">TARGET DISPATCH:</span>
                    <span class="text-emerald-400">{{ stg.target }}</span>
                  </div>
                </div>
              </div>

              <!-- Terminal Telemetry Footer -->
              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span class="flex items-center gap-1.5">
                  <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                  <span>POLICY GATES: ZERO-TRUST</span>
                </span>
                <span class="text-white font-semibold">SLA: 99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ======================================================== -->
      <!-- PRODUCT 2: ANALYTICS & INSIGHTS (Continuous Telemetry)   -->
      <!-- Layout: Alternating! Left = Telemetry Cockpit, Right = Content -->
      <!-- ======================================================== -->
      <section
        id="analytics-insights"
        class="mt-16 scroll-mt-28 md:scroll-mt-32 rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative"
      >
        <!-- Invisible alias target for deep link #analytics-intelligence -->
        <div id="analytics-intelligence" class="absolute -top-32 left-0 pointer-events-none" />

        <!-- Corner Crosshairs -->
        <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Left: Bespoke Custom Interface Illustration (Interactive Telemetry Cockpit & Sparklines) -->
          <div class="lg:col-span-6 order-2 lg:order-1">
            <div
              class="rounded-xl border border-white/[0.1] bg-[#070b10] p-6 space-y-5 font-mono text-xs shadow-2xl relative overflow-hidden"
            >
              <!-- Top Glow Bar -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75" />

              <!-- Cockpit Header -->
              <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-zinc-400">
                <div class="flex items-center gap-2">
                  <BarChart3 class="h-4 w-4 text-cyan-400" />
                  <span class="text-white font-semibold tracking-wide">OPERATIONAL TELEMETRY MONITOR</span>
                </div>
                <div class="flex items-center gap-1.5 text-[10px] text-cyan-400">
                  <Radio class="h-3 w-3 animate-pulse" />
                  <span>STREAMING</span>
                </div>
              </div>

              <!-- Multi-Channel Selector -->
              <div class="flex items-center gap-2 p-1 rounded-lg bg-[#0b1018] border border-white/[0.05] text-[11px]">
                <button
                  type="button"
                  class="flex-1 py-1.5 px-2 rounded text-center transition-colors cursor-pointer"
                  :class="activeAnalyticsChannel === 'throughput' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-zinc-400 hover:text-white'"
                  @click="activeAnalyticsChannel = 'throughput'"
                >
                  Throughput
                </button>
                <button
                  type="button"
                  class="flex-1 py-1.5 px-2 rounded text-center transition-colors cursor-pointer"
                  :class="activeAnalyticsChannel === 'latency' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-zinc-400 hover:text-white'"
                  @click="activeAnalyticsChannel = 'latency'"
                >
                  Latency Mesh
                </button>
                <button
                  type="button"
                  class="flex-1 py-1.5 px-2 rounded text-center transition-colors cursor-pointer"
                  :class="activeAnalyticsChannel === 'anomalies' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-zinc-400 hover:text-white'"
                  @click="activeAnalyticsChannel = 'anomalies'"
                >
                  Anomaly Radar
                </button>
              </div>

              <!-- Signal Visualizer Graph Display -->
              <div class="p-5 rounded-xl bg-[#04070a] border border-white/[0.05] space-y-4">
                <div class="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span class="text-white font-semibold">{{ channelData[activeAnalyticsChannel].title }}</span>
                  <span class="text-cyan-400 font-mono">{{ channelData[activeAnalyticsChannel].rate }}</span>
                </div>

                <!-- Dynamic Visual Bars Spectrum -->
                <div class="h-28 flex items-end gap-2 pt-3 px-1 border-b border-white/[0.05] pb-2">
                  <div
                    v-for="(height, bIdx) in channelData[activeAnalyticsChannel].bars"
                    :key="bIdx"
                    class="w-full rounded-t transition-all duration-500 group relative"
                    :style="{ height: `${height}%` }"
                    :class="[
                      height > 80
                        ? 'bg-gradient-to-t from-cyan-600 to-brand shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                        : height > 50
                          ? 'bg-cyan-500/60 hover:bg-cyan-400'
                          : 'bg-white/10 hover:bg-white/20'
                    ]"
                  />
                </div>

                <div class="flex items-center justify-between text-[10px] text-zinc-500 pt-1">
                  <span>{{ channelData[activeAnalyticsChannel].precision }}</span>
                  <span class="text-emerald-400 font-mono">{{ channelData[activeAnalyticsChannel].status }}</span>
                </div>
              </div>

              <!-- Cockpit Telemetry Footer -->
              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                <span class="flex items-center gap-1.5">
                  <Activity class="h-3.5 w-3.5 text-cyan-400" />
                  <span>SUB-SECOND QUERY ENGINE</span>
                </span>
                <span class="text-white font-mono">AGGREGATION: 0.6MS</span>
              </div>
            </div>
          </div>

          <!-- Right Info Column -->
          <div class="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div class="flex items-center gap-3">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-400"
              >
                <BarChart3 class="h-4 w-4" />
              </div>
              <span class="font-mono text-xs text-cyan-400 tracking-widest uppercase font-semibold">
                {{ products[1].badge }}
              </span>
            </div>

            <h3
              class="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.1] text-balance-editorial"
            >
              {{ products[1].headline }}
            </h3>

            <p class="font-editorial text-lg text-zinc-300 leading-relaxed">
              {{ products[1].description }}
            </p>

            <!-- Verified Capabilities -->
            <div class="space-y-3 pt-2 font-ui">
              <div
                v-for="(cap, idx) in products[1].capabilities"
                :key="idx"
                class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
              >
                <CheckCircle2 class="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{{ cap }}</span>
              </div>
            </div>

            <!-- Telemetry Metrics Bar -->
            <div class="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 font-ui">
              <div v-for="m in products[1].metrics" :key="m.label">
                <div class="text-[11px] text-zinc-400 font-mono">{{ m.label }}</div>
                <div class="font-mono text-base font-semibold text-white mt-1">{{ m.value }}</div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="pt-4 flex flex-wrap items-center gap-4 font-ui">
              <NuxtLink :to="products[1].ctaLink">
                <Button
                  class="bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 group"
                >
                  <span>{{ products[1].ctaText }}</span>
                  <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>
              <NuxtLink
                to="/demo"
                class="px-5 py-2.5 rounded-md border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Request Analytics Walkthrough
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- ======================================================== -->
      <!-- PRODUCT 3: INTEGRATION HUB (Interoperability Fabric)    -->
      <!-- Layout: Left = Content, Right = Universal Protocol Bus   -->
      <!-- ======================================================== -->
      <section
        id="integration-hub"
        class="mt-16 scroll-mt-28 md:scroll-mt-32 rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative"
      >
        <!-- Invisible alias target for deep link #integrations -->
        <div id="integrations" class="absolute -top-32 left-0 pointer-events-none" />

        <!-- Corner Crosshairs -->
        <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Left Info Column -->
          <div class="lg:col-span-6 space-y-6">
            <div class="flex items-center gap-3">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400"
              >
                <Network class="h-4 w-4" />
              </div>
              <span class="font-mono text-xs text-emerald-400 tracking-widest uppercase font-semibold">
                {{ products[2].badge }}
              </span>
            </div>

            <h3
              class="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.1] text-balance-editorial"
            >
              {{ products[2].headline }}
            </h3>

            <p class="font-editorial text-lg text-zinc-300 leading-relaxed">
              {{ products[2].description }}
            </p>

            <!-- Verified Capabilities -->
            <div class="space-y-3 pt-2 font-ui">
              <div
                v-for="(cap, idx) in products[2].capabilities"
                :key="idx"
                class="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
              >
                <CheckCircle2 class="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{{ cap }}</span>
              </div>
            </div>

            <!-- Telemetry Metrics Bar -->
            <div class="pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 font-ui">
              <div v-for="m in products[2].metrics" :key="m.label">
                <div class="text-[11px] text-zinc-400 font-mono">{{ m.label }}</div>
                <div class="font-mono text-base font-semibold text-white mt-1">{{ m.value }}</div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="pt-4 flex flex-wrap items-center gap-4 font-ui">
              <NuxtLink :to="products[2].ctaLink">
                <Button
                  class="bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 group"
                >
                  <span>{{ products[2].ctaText }}</span>
                  <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>
              <NuxtLink
                to="/demo"
                class="px-5 py-2.5 rounded-md border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Request Architecture Briefing
              </NuxtLink>
            </div>
          </div>

          <!-- Right: Bespoke Custom Interface Illustration (Universal Protocol Bridge & Envelope Inspector) -->
          <div class="lg:col-span-6">
            <div
              class="rounded-xl border border-white/[0.1] bg-[#070b10] p-6 space-y-5 font-mono text-xs shadow-2xl relative overflow-hidden"
            >
              <!-- Top Glow Bar -->
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-75" />

              <!-- Console Header -->
              <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-zinc-400">
                <div class="flex items-center gap-2">
                  <Network class="h-4 w-4 text-emerald-400" />
                  <span class="text-white font-semibold tracking-wide">UNIVERSAL PROTOCOL BRIDGE</span>
                </div>
                <span class="text-brand font-mono text-[10px] bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                  45+ ADAPTERS
                </span>
              </div>

              <!-- Interactive Protocol Selector -->
              <div class="flex items-center gap-2 p-1 rounded-lg bg-[#0b1018] border border-white/[0.05] text-[11px]">
                <button
                  type="button"
                  class="flex-1 py-1.5 px-2 rounded text-center transition-colors cursor-pointer"
                  :class="activeProtocol === 'rest' ? 'bg-brand/20 text-brand font-semibold border border-brand/30' : 'text-zinc-400 hover:text-white'"
                  @click="activeProtocol = 'rest'"
                >
                  REST / Webhooks
                </button>
                <button
                  type="button"
                  class="flex-1 py-1.5 px-2 rounded text-center transition-colors cursor-pointer"
                  :class="activeProtocol === 'graphql' ? 'bg-brand/20 text-brand font-semibold border border-brand/30' : 'text-zinc-400 hover:text-white'"
                  @click="activeProtocol = 'graphql'"
                >
                  GraphQL Mesh
                </button>
                <button
                  type="button"
                  class="flex-1 py-1.5 px-2 rounded text-center transition-colors cursor-pointer"
                  :class="activeProtocol === 'kafka' ? 'bg-brand/20 text-brand font-semibold border border-brand/30' : 'text-zinc-400 hover:text-white'"
                  @click="activeProtocol = 'kafka'"
                >
                  Event Pub/Sub
                </button>
              </div>

              <!-- Protocol Bridge Flow Schematic -->
              <div class="p-4 rounded-xl bg-[#04070a] border border-white/[0.04] space-y-4">
                <div class="flex items-center justify-between gap-3">
                  <!-- Inbound Source -->
                  <div class="flex-1 p-3.5 rounded-lg border border-white/[0.08] bg-[#0c121a] text-center">
                    <div class="text-[10px] text-zinc-500">SOURCE NODE</div>
                    <div class="text-xs font-semibold text-white mt-1">Enterprise ERP</div>
                    <div class="text-[10px] text-brand mt-1 flex items-center justify-center gap-1">
                      <Lock class="h-3 w-3" />
                      <span>TLS 1.3 Ingress</span>
                    </div>
                  </div>

                  <div class="flex flex-col items-center gap-1 shrink-0 px-1">
                    <ArrowRightLeft class="h-4 w-4 text-brand animate-pulse-subtle" />
                    <span class="text-[9px] font-mono text-zinc-500">{{ protocolDetails[activeProtocol].latency }}</span>
                  </div>

                  <!-- Outbound Target -->
                  <div class="flex-1 p-3.5 rounded-lg border border-brand/30 bg-brand/[0.06] text-center">
                    <div class="text-[10px] text-brand">TARGET CLUSTER</div>
                    <div class="text-xs font-semibold text-white mt-1">Multi-Cloud SaaS</div>
                    <div class="text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1">
                      <ShieldCheck class="h-3 w-3" />
                      <span>mTLS Signed</span>
                    </div>
                  </div>
                </div>

                <!-- Live Encrypted Payload Envelope -->
                <div class="p-3.5 rounded-lg bg-[#090d14] border border-white/[0.05] text-[11px] text-zinc-300 space-y-2">
                  <div class="flex items-center justify-between text-zinc-500 text-[10px]">
                    <span class="text-brand flex items-center gap-1">
                      <Terminal class="h-3 w-3" />
                      <span>ACTIVE PAYLOAD ENVELOPE</span>
                    </span>
                    <span class="text-zinc-400 font-mono">{{ protocolDetails[activeProtocol].label }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 font-mono bg-black/40 p-2 rounded border border-white/[0.03] break-all">
                    {{ protocolDetails[activeProtocol].payload }}
                  </div>
                  <div class="flex items-center justify-between text-[10px] text-emerald-400 pt-1 border-t border-white/[0.04]">
                    <span class="flex items-center gap-1.5">
                      <ShieldCheck class="h-3.5 w-3.5" />
                      <span>CRYPTOGRAPHICALLY VALIDATED</span>
                    </span>
                    <span class="text-zinc-400">STATUS: 200 OK</span>
                  </div>
                </div>
              </div>

              <!-- Terminal Telemetry Footer -->
              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span class="flex items-center gap-1.5">
                  <Zap class="h-3.5 w-3.5 text-brand" />
                  <span>DELIVERY: EXACTLY-ONCE</span>
                </span>
                <span class="text-brand font-semibold">SYNC LATENCY: &lt; 12MS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ======================================================== -->
      <!-- INTER-PRODUCT INTELLIGENCE MESH (Supported by Real Data) -->
      <!-- ======================================================== -->
      <div class="mt-20 pt-16 border-t border-white/[0.08]">
        <div class="rounded-2xl border border-white/[0.08] bg-[#0a1017]/90 p-8 sm:p-12 backdrop-blur-xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <!-- Crosshairs -->
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span class="text-xs font-mono text-brand uppercase tracking-widest">[ SYSTEM INTERACTION MESH ]</span>
            <h3 class="font-editorial text-2xl sm:text-4xl font-semibold text-white text-balance-editorial">
              How KavoraX Platforms Exchange Intelligence.
            </h3>
            <p class="font-editorial text-base sm:text-lg text-zinc-300 leading-relaxed">
              Operations emit real-time event signals. Analytics continuously ingest telemetry. Integration Hub synchronizes state with external systems.
            </p>
          </div>

          <!-- Dynamic Connection Bridge Diagram -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div class="p-6 rounded-xl border border-white/[0.07] bg-[#0d141e] text-center space-y-3 relative group hover:border-brand/30 transition-colors">
              <div class="flex justify-center">
                <div class="h-10 w-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                  <Cpu class="h-5 w-5" />
                </div>
              </div>
              <div class="text-brand font-semibold">[ 01. WORKFLOW ]</div>
              <div class="text-base font-ui font-semibold text-white">Operations Platform</div>
              <p class="text-xs font-sans text-zinc-400 leading-relaxed">
                Generates task event state changes, execution milestones, and process dispatch triggers.
              </p>
              <div class="text-[10px] text-zinc-400 pt-3 border-t border-white/[0.06] flex items-center justify-center gap-1 text-emerald-400">
                <span>EMITS REAL-TIME TELEMETRY</span>
                <span>&rarr;</span>
              </div>
            </div>

            <div class="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/[0.04] text-center space-y-3 relative group hover:border-cyan-500/50 transition-colors">
              <div class="flex justify-center">
                <div class="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                  <BarChart3 class="h-5 w-5" />
                </div>
              </div>
              <div class="text-cyan-400 font-semibold">[ 02. VISIBILITY ]</div>
              <div class="text-base font-ui font-semibold text-white">Analytics &amp; Insights</div>
              <p class="text-xs font-sans text-zinc-400 leading-relaxed">
                Aggregates operational throughput, anomalous activity spikes, and multi-team SLA performance.
              </p>
              <div class="text-[10px] text-cyan-400 pt-3 border-t border-cyan-500/20 flex items-center justify-center gap-1">
                <span>SYNCHRONIZES STATE</span>
                <span>&rarr;</span>
              </div>
            </div>

            <div class="p-6 rounded-xl border border-white/[0.07] bg-[#0d141e] text-center space-y-3 relative group hover:border-brand/30 transition-colors">
              <div class="flex justify-center">
                <div class="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Network class="h-5 w-5" />
                </div>
              </div>
              <div class="text-emerald-400 font-semibold">[ 03. CONNECTIVITY ]</div>
              <div class="text-base font-ui font-semibold text-white">Integration Hub</div>
              <p class="text-xs font-sans text-zinc-400 leading-relaxed">
                Bridges verified transaction results across external ERPs, databases, and multi-cloud environments.
              </p>
              <div class="text-[10px] text-emerald-400 pt-3 border-t border-white/[0.06] flex items-center justify-center gap-1">
                <Server class="h-3 w-3" />
                <span>GLOBAL INTEROPERABILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
