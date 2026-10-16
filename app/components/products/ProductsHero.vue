<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import {
  ArrowRight,
  ArrowDown,
  Cpu,
  BarChart3,
  Network,
  Layers,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-vue-next'

const activeOrb = ref(0)

const productTiers = [
  {
    id: 'operations-platform',
    aliasId: 'operations',
    name: 'Operations Platform',
    code: 'OPS // 01',
    metric: '99.99% Reliability',
    latency: '4.8ms Dispatch',
    icon: Cpu,
    tag: 'Workflow Orchestration',
    headline: 'Multi-cluster process orchestration & automated handoffs',
    accent: '#10b981'
  },
  {
    id: 'analytics-insights',
    aliasId: 'analytics-intelligence',
    name: 'Analytics & Insights',
    code: 'INTEL // 02',
    metric: '1.2M Events / Sec',
    latency: '0.6ms Ingestion',
    icon: BarChart3,
    tag: 'Continuous Telemetry',
    headline: 'Real-time telemetry visibility & SLA drift monitoring',
    accent: '#06b6d4'
  },
  {
    id: 'integration-hub',
    aliasId: 'integrations',
    name: 'Integration Hub',
    code: 'MESH // 03',
    metric: '< 12ms Sync Latency',
    latency: '45+ Adapters',
    icon: Network,
    tag: 'Interoperability Fabric',
    headline: 'Bidirectional enterprise ERP & cloud SaaS data sync',
    accent: '#34d399'
  }
]

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    activeOrb.value = (activeOrb.value + 1) % productTiers.length
  }, 4500)
})

const selectTier = (index: number) => {
  activeOrb.value = index
  if (timer) clearInterval(timer)
}

const scrollToSection = (id: string) => {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Ambient Atmospheric Lighting -->
    <div
      class="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-brand/[0.08] blur-[160px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-10 right-10 w-[420px] h-[420px] bg-brand/[0.04] blur-[140px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <!-- Architectural Tech Grid Background -->
    <div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Top HUD Telemetry Metadata Strip -->
      <div
        class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[11px] text-zinc-400"
      >
        <div class="flex items-center gap-3">
          <ChapterLabel
            index="KX // 02"
            label="PRODUCT DISCOVERY CONSOLE"
            sublabel="INTERCONNECTED ARCHITECTURE"
          />
        </div>

        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="hidden sm:inline">PORTFOLIO: <strong class="text-white font-mono">3 CORE PLATFORMS</strong></span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span>COMPLIANCE: <strong class="text-brand font-mono">ENTERPRISE VERIFIED</strong></span>
          <span class="text-zinc-600">|</span>
          <span class="text-zinc-400 font-mono flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>ALL TIERS SYNCHRONIZED</span>
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <!-- Left Column: Editorial Headline, Storytelling & CTAs -->
        <div class="lg:col-span-6 xl:col-span-7 space-y-7">
          <!-- Subtle Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>OUR PRODUCTS &amp; SOLUTIONS</span>
          </div>

          <!-- Hero Headline (Exact requested copy) -->
          <h1
            class="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-normal tracking-[-0.03em] text-white leading-[1.02] text-balance-editorial"
          >
            Connected Solutions for
            <span class="italic font-light text-brand">Modern Businesses</span>.
          </h1>

          <!-- Hero Supporting Copy (Exact requested copy) -->
          <p class="font-editorial text-xl sm:text-2xl text-zinc-300 max-w-xl leading-relaxed">
            Explore connected business solutions designed to simplify operations, improve visibility
            and help your organisation scale with confidence.
          </p>

          <!-- Dual CTAs -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui">
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <button
              type="button"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-zinc-200 hover:text-white transition-colors group border border-white/10 rounded-md bg-[#111a26]/60 hover:bg-[#111a26] cursor-pointer"
              @click="scrollToSection('solutions-overview')"
            >
              <span>Explore Solutions</span>
              <ArrowDown class="h-4 w-4 text-brand group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <!-- Editorial Architecture Overview Indicators -->
          <div class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg font-ui">
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Modular</div>
              <div class="text-xs text-zinc-400 mt-1">Solution Foundations</div>
            </div>
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Unified</div>
              <div class="text-xs text-zinc-400 mt-1">Connected Workflows</div>
            </div>
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Auditable</div>
              <div class="text-xs text-zinc-400 mt-1">Enterprise Governance</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Bespoke Product Fabric Matrix Console -->
        <div class="lg:col-span-6 xl:col-span-5 relative">
          <!-- Ambient Halo -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/20 via-transparent to-brand/10 blur-2xl opacity-75 pointer-events-none"
            aria-hidden="true"
          />

          <!-- Matrix Console Container -->
          <div
            class="relative rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          >
            <!-- Corner Crosshairs inspired by Active Theory -->
            <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Console Header -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div class="flex items-center gap-2.5">
                <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 border border-brand/30 text-brand">
                  <Layers class="h-4 w-4" />
                </div>
                <div>
                  <div class="font-mono text-xs font-semibold text-white tracking-wide">
                    KX // FABRIC MATRIX
                  </div>
                  <div class="font-mono text-[10px] text-zinc-500">
                    INTERCONNECTED SYSTEMS
                  </div>
                </div>
              </div>

              <div class="font-mono text-[10px] text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
                <span>3 TIERS ACTIVE</span>
              </div>
            </div>

            <!-- Interactive Tier List -->
            <div class="py-5 space-y-3 font-ui">
              <div
                v-for="(tier, index) in productTiers"
                :key="tier.code"
                class="p-4 rounded-xl border transition-all duration-300 cursor-pointer relative"
                :class="[
                  activeOrb === index
                    ? 'border-brand/50 bg-[#121c29] shadow-[0_4px_24px_rgba(16,185,129,0.18)] scale-[1.01]'
                    : 'border-white/[0.06] bg-[#090e16]/80 hover:border-white/15 hover:bg-[#0e1622]'
                ]"
                @click="selectTier(index)"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3.5">
                    <div
                      class="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors shrink-0"
                      :class="[
                        activeOrb === index
                          ? 'border-brand/40 bg-brand/15 text-brand shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                          : 'border-white/10 bg-white/[0.02] text-zinc-400'
                      ]"
                    >
                      <component :is="tier.icon" class="h-4 w-4" />
                    </div>

                    <div>
                      <div class="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                        <span>{{ tier.name }}</span>
                        <span
                          v-if="activeOrb === index"
                          class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-brand/15 text-brand border border-brand/30"
                        >
                          SELECTED
                        </span>
                      </div>
                      <div class="font-mono text-[10px] text-zinc-400 mt-0.5">
                        {{ tier.tag }}
                      </div>
                    </div>
                  </div>

                  <div class="text-right shrink-0">
                    <div class="font-mono text-xs text-brand font-semibold">
                      {{ tier.metric }}
                    </div>
                    <div class="font-mono text-[10px] text-zinc-500">
                      {{ tier.code }}
                    </div>
                  </div>
                </div>

                <!-- Expanded Telemetry Panel when Active -->
                <div
                  v-if="activeOrb === index"
                  class="mt-3 pt-3 border-t border-white/[0.08] space-y-2.5 text-[11px] font-mono"
                >
                  <p class="text-zinc-300 font-sans text-xs leading-relaxed">
                    {{ tier.headline }}
                  </p>

                  <div class="flex items-center justify-between text-[10px] text-zinc-400 pt-1">
                    <span class="flex items-center gap-1.5 text-zinc-400">
                      <ShieldCheck class="h-3 w-3 text-brand" />
                      <span>{{ tier.latency }}</span>
                    </span>

                    <button
                      type="button"
                      class="inline-flex items-center gap-1.5 text-brand hover:text-white font-mono transition-colors cursor-pointer group"
                      @click.stop="scrollToSection(tier.id)"
                    >
                      <span>INSPECT SPEC</span>
                      <ExternalLink class="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Inter-Tier Connection Visual Wire -->
            <div class="px-2 py-3 rounded-lg bg-[#070b10] border border-white/[0.05] flex items-center justify-between font-mono text-[10px] text-zinc-400">
              <span class="flex items-center gap-1.5">
                <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
                <span class="text-zinc-300">INTER-MODULE FABRIC</span>
              </span>
              <span class="text-emerald-400 font-medium">STANDARDIZED API BUS</span>
              <span class="text-zinc-500">TLS 1.3 / mTLS</span>
            </div>

            <!-- Bottom Console Footer -->
            <div class="pt-4 mt-2 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-zinc-400">
              <span class="flex items-center gap-1.5">
                <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
                <span>STATE REPLICATION</span>
              </span>
              <span class="text-zinc-400">ZERO DATA LOSS GUARANTEE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
