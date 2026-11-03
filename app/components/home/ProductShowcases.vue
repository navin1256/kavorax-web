<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  BarChart3,
  Network,
  ArrowRight,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Database,
  GitBranch
} from 'lucide-vue-next'

const { isRevealed: isHeaderRevealed, targetRef: headerRef } = useScrollReveal({ threshold: 0.15 })
const { isRevealed: isCard1Revealed, targetRef: card1Ref } = useScrollReveal({ threshold: 0.12 })
const { isRevealed: isCards23Revealed, targetRef: cards23Ref } = useScrollReveal({ threshold: 0.12 })

const telemetryBars = [
  { height: '40%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '55%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '70%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '65%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '80%', brandShade: 'bg-brand/40 hover:bg-brand/60' },
  { height: '88%', brandShade: 'bg-brand/60 hover:bg-brand/80' },
  { height: '94%', highlight: true },
  { height: '85%', brandShade: 'bg-brand/70 hover:bg-brand/80' },
  { height: '72%', brandShade: 'bg-brand/50 hover:bg-brand/60' },
  { height: '58%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' }
]
</script>

<template>
  <section id="product-showcases" class="py-24 md:py-36 bg-[#0b0f14] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Chapter Header -->
      <div
        ref="headerRef"
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <div class="max-w-3xl space-y-4">
          <ChapterLabel label="Our Products" />
          <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Technology designed for real-world operations.
          </h2>
          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
            Three core enterprise capabilities engineered to operate as one unified foundation.
          </p>
        </div>

        <NuxtLink to="/products" class="shrink-0 font-ui">
          <span class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-md border border-white/10 bg-[#0f1620] text-zinc-200 hover:text-white hover:border-brand/40 transition-all shadow-sm">
            <span>Explore All Products</span>
            <ArrowRight class="h-3.5 w-3.5 text-brand" />
          </span>
        </NuxtLink>
      </div>

      <!-- SHOWCASE 1: Operations Platform (Wide Asymmetrical Editorial Canvas) -->
      <div
        ref="card1Ref"
        class="mt-16 rounded-2xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 md:p-12 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-500 corner-crosshair reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isCard1Revealed }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center font-ui">
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-ui font-medium text-brand">
              <Workflow class="h-3.5 w-3.5" />
              <span>Operations Platform</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Continuous workflow coordination across distributed teams.
            </h3>

            <p class="font-ui text-base text-zinc-300 leading-relaxed font-normal">
              Eliminate operational friction with smart process routing, automated escalation triggers, and real-time handoff visibility.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Automated task pipeline</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>SLA-based priority triggers</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Cross-functional synchronization</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Auditable activity tracing</span>
              </div>
            </div>

            <div class="pt-4 flex items-center gap-4">
              <NuxtLink
                to="/products"
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
              >
                <span>Learn More About Operations</span>
                <ArrowRight class="h-3.5 w-3.5" />
              </NuxtLink>
            </div>
          </div>

          <!-- Visual Treatment 1: Clean Workflow State Diagram -->
          <div class="lg:col-span-6">
            <div class="rounded-xl border border-white/10 bg-[#070b10] p-5 sm:p-6 space-y-4 font-ui text-xs shadow-inner">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.08] text-zinc-300 gap-2">
                <span class="font-semibold text-white">Workflow Routing Pipeline</span>
                <span class="text-brand text-xs font-medium">Coordinated</span>
              </div>

              <!-- Workflow Stage Nodes -->
              <div class="space-y-3">
                <div class="p-3.5 sm:p-4 rounded-lg border border-brand/30 bg-brand/[0.05] flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full bg-brand shrink-0" />
                    <div>
                      <div class="text-white font-semibold font-ui text-sm">Task Ingestion &amp; Verification</div>
                      <div class="text-xs text-zinc-400 font-sans mt-0.5">Automated validation against business rules</div>
                    </div>
                  </div>
                  <span class="text-brand text-xs font-semibold shrink-0 ml-2">Verified</span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-lg border border-white/[0.1] bg-[#0d141e] flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <div>
                      <div class="text-white font-semibold font-ui text-sm">Cross-Team Dispatch</div>
                      <div class="text-xs text-zinc-400 font-sans mt-0.5">Automated routing across operational and administrative units</div>
                    </div>
                  </div>
                  <span class="text-emerald-400 text-xs font-semibold shrink-0 ml-2">Synced</span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-lg border border-white/[0.06] bg-[#090e15] flex items-center justify-between text-zinc-400">
                  <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full bg-brand/40 shrink-0" />
                    <div>
                      <div class="text-zinc-200 font-semibold font-ui text-sm">Activity Audit Record</div>
                      <div class="text-xs text-zinc-400 font-sans mt-0.5">Traceable event history captured for management review</div>
                    </div>
                  </div>
                  <span class="text-zinc-400 text-xs font-semibold shrink-0 ml-2">Logged</span>
                </div>
              </div>

              <div class="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 gap-2">
                <span>Reliability: 99.99% Uptime</span>
                <span class="text-brand font-medium">Real-Time Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SHOWCASES 2 & 3: 2-Column Split (Analytics vs Integration) -->
      <div
        ref="cards23Ref"
        class="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 font-ui items-stretch"
      >
        <!-- Showcase 2: Analytics & Intelligence -->
        <div
          class="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 md:p-10 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-500 flex flex-col justify-between corner-crosshair h-full reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isCards23Revealed }"
        >
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-ui font-medium text-brand">
              <BarChart3 class="h-3.5 w-3.5" />
              <span>Business Analytics</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl font-medium text-white leading-tight">
              Real-time operational clarity and business foresight.
            </h3>

            <p class="font-ui text-base text-zinc-300 leading-relaxed font-normal">
              Transform continuous business signals into immediate visibility. Identify trends, track margins, and spot bottlenecks before they affect growth.
            </p>

            <!-- Visual Treatment 2: Clean Telemetry Distribution -->
            <div class="rounded-xl border border-white/[0.08] bg-[#070b10] p-5 sm:p-6 font-ui text-xs space-y-4">
              <div class="flex items-center justify-between text-zinc-300 pb-2 border-b border-white/[0.06]">
                <span class="font-semibold text-white">Daily Performance Overview</span>
                <span class="text-brand font-medium">Live Telemetry</span>
              </div>

              <!-- Bar chart visualization -->
              <div class="h-20 flex items-end gap-2 pt-2">
                <div
                  v-for="(bar, bIdx) in telemetryBars"
                  :key="bIdx"
                  class="w-full rounded-t transition-[height,opacity] duration-700 transition-editorial"
                  :class="[
                    bar.highlight ? 'bg-brand shadow-[0_0_12px_rgba(16,185,129,0.5)]' : bar.brandShade
                  ]"
                  :style="{
                    height: isCards23Revealed ? bar.height : '8%',
                    transitionDelay: isCards23Revealed ? `${bIdx * 45}ms` : '0ms'
                  }"
                />
              </div>

              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span>System Status: Healthy</span>
                <span class="text-white">Throughput: Optimal</span>
              </div>
            </div>
          </div>

          <div class="pt-8 border-t border-white/[0.06] mt-6">
            <NuxtLink
              to="/business-analytics"
              class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
            >
              <span>Explore Analytics</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </NuxtLink>
          </div>
        </div>

        <!-- Showcase 3: Integration Architecture -->
        <div
          class="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 md:p-10 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-500 flex flex-col justify-between corner-crosshair h-full reveal-base transition-editorial duration-700 delay-150"
          :class="{ 'is-revealed': isCards23Revealed }"
        >
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-ui font-medium text-brand">
              <Network class="h-3.5 w-3.5" />
              <span>System Integrations</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl font-medium text-white leading-tight">
              Connect your existing tools into one unified platform.
            </h3>

            <p class="font-ui text-base text-zinc-300 leading-relaxed font-normal">
              Standardize disparate protocols, legacy ERPs, databases, and modern cloud endpoints into a single, high-throughput integration pipeline.
            </p>

            <!-- Visual Treatment 3: Clean Multi-System Bridge Map -->
            <div class="rounded-xl border border-white/[0.08] bg-[#070b10] p-5 sm:p-6 font-ui text-xs space-y-3.5">
              <div class="flex items-center justify-between text-zinc-300 pb-2 border-b border-white/[0.06]">
                <span class="font-semibold text-white">System Connectivity Map</span>
                <span class="text-brand font-medium">Encrypted &amp; Secure</span>
              </div>

              <!-- Integration Map Nodes -->
              <div class="space-y-2 font-ui">
                <div class="p-3 rounded-lg bg-[#0e1622] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200">
                  <span class="flex items-center gap-2">
                    <Database class="h-3.5 w-3.5 text-zinc-400" />
                    Databases &amp; Enterprise ERPs
                  </span>
                  <span class="text-brand text-xs font-medium">Connected</span>
                </div>

                <div class="flex justify-center -my-1 py-0.5">
                  <div class="w-px h-3 bg-gradient-to-b from-white/20 to-brand/40" />
                </div>

                <div class="p-3 rounded-lg bg-brand/[0.08] border border-brand/30 flex items-center justify-between text-xs text-white font-medium shadow-[0_0_16px_-4px_rgba(16,185,129,0.25)]">
                  <span class="flex items-center gap-2">
                    <GitBranch class="h-3.5 w-3.5 text-brand" />
                    KavoraX Unified Integration Bus
                  </span>
                  <span class="text-brand text-xs font-medium">Active Sync</span>
                </div>

                <div class="flex justify-center -my-1 py-0.5">
                  <div class="w-px h-3 bg-gradient-to-b from-brand/40 to-white/20" />
                </div>

                <div class="p-3 rounded-lg bg-[#0e1622] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200">
                  <span class="flex items-center gap-2">
                    <ShieldCheck class="h-3.5 w-3.5 text-zinc-400" />
                    Cloud APIs &amp; External Services
                  </span>
                  <span class="text-brand text-xs font-medium">Synchronized</span>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-8 border-t border-white/[0.06] mt-6">
            <NuxtLink
              to="/products"
              class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
            >
              <span>Explore Integrations</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
