<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Compass, Network, RefreshCw, CheckCircle2, ArrowRight, ShieldCheck, Database, GitMerge } from 'lucide-vue-next'

const { isRevealed: isHeaderRevealed, targetRef: headerRef } = useScrollReveal({ threshold: 0.12 })
const { isRevealed: isPhase1Revealed, targetRef: phase1Ref } = useScrollReveal({ threshold: 0.15 })
const { isRevealed: isPhase2Revealed, targetRef: phase2Ref } = useScrollReveal({ threshold: 0.15 })
const { isRevealed: isPhase3Revealed, targetRef: phase3Ref } = useScrollReveal({ threshold: 0.15 })
</script>

<template>
  <section
    id="our-approach"
    ref="headerRef"
    class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.06] overflow-hidden"
  >
    <!-- Ambient backlight glow -->
    <div
      class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with ChapterLabel -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 03"
          label="OUR METHODOLOGY"
          sublabel="OPERATIONAL REALITIES"
        />
        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            ENGINEERING WORKFLOW
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">THREE-PHASE DISCIPLINE</span>
        </div>
      </div>

      <!-- Section Title Area -->
      <div
        class="max-w-3xl space-y-4 mb-20 reveal-base transition-editorial duration-700 delay-100"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <WordReveal
          text="Connected thinking. Practical solutions."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
          :italic-words="['Practical', 'solutions.']"
          :delay="100"
        />
        <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
          Meaningful technological progress requires understanding business realities first.
          Our approach connects workflows, information, and people to build clarity without unnecessary complexity.
        </p>
      </div>

      <!-- Alternating Editorial Chapters with Varied Compositions -->
      <div class="space-y-16 lg:space-y-24">

        <!-- Phase 01: Left Narrative + Right Architectural Photo Frame -->
        <div
          ref="phase1Ref"
          class="rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 p-8 sm:p-12 backdrop-blur-xl relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isPhase1Revealed }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <!-- Left: Editorial Content -->
            <div class="lg:col-span-7 space-y-6">
              <div class="flex items-center gap-4">
                <span class="font-editorial text-5xl sm:text-6xl font-semibold text-brand/50 group-hover:text-brand transition-colors">
                  01
                </span>
                <div class="h-8 w-px bg-white/10" />
                <div>
                  <span class="font-mono text-xs text-brand tracking-widest uppercase block">
                    DISCOVERY & ALIGNMENT
                  </span>
                  <span class="font-mono text-[10px] text-zinc-500">PHASE 01 OF 03</span>
                </div>
              </div>

              <div class="space-y-2">
                <h3 class="font-editorial text-2xl sm:text-4xl font-medium text-white group-hover:text-brand transition-colors">
                  Understand the Business
                </h3>
                <div class="font-ui text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Requirements Before Architecture
                </div>
              </div>

              <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                We believe sound technological solutions start with clear business understanding. Before proposing software modules or integration strategies, we examine your core operational dynamics, organizational dependencies, and real business priorities to ensure engineering serves practical needs.
              </p>

              <!-- Principles Checklist -->
              <div class="pt-4 border-t border-white/[0.06] space-y-3 font-ui text-xs sm:text-sm">
                <div class="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span class="leading-relaxed">Prioritize verified operational friction over hypothetical features</span>
                </div>
                <div class="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span class="leading-relaxed">Assess existing toolchains and legacy systems to leverage current investments</span>
                </div>
                <div class="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span class="leading-relaxed">Align technical scope directly with measurable business objectives</span>
                </div>
              </div>

              <div class="pt-2">
                <span class="inline-flex items-center gap-2 rounded bg-[#101a26] border border-white/10 px-3 py-1 font-mono text-[10px] text-zinc-300">
                  <Compass class="h-3.5 w-3.5 text-brand" />
                  PRE-ENGINEERING FEASIBILITY REVIEW
                </span>
              </div>
            </div>

            <!-- Right: Architectural Infrastructure Photography Frame -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-xl border border-white/10 bg-[#0d141e] overflow-hidden group">
                <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-950">
                  <img
                    src="/images/tech-infrastructure.jpg"
                    alt="Enterprise technology infrastructure lines representing structured system mapping"
                    loading="eager"
                    class="h-full w-full object-cover img-editorial-zoom opacity-90 group-hover:opacity-100 transition-opacity"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0c131d] via-[#0c131d]/20 to-transparent" />
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-zinc-300">
                    <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-white">
                      OBSERVABILITY
                    </span>
                    <span class="text-brand font-mono">AUDIT_READY</span>
                  </div>
                  <div class="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-[#0e1622]/90 backdrop-blur-md p-3">
                    <span class="font-ui text-xs font-semibold text-zinc-200 block">Baseline Process Audit</span>
                    <p class="font-editorial text-xs italic text-zinc-400 mt-0.5">
                      Mapping data lifecycles and manual handoffs before touching code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 02: Inverted Composition (Left Visual Diagram + Right Narrative) -->
        <div
          ref="phase2Ref"
          class="rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 p-8 sm:p-12 backdrop-blur-xl relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isPhase2Revealed }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <!-- Left: Bespoke Multi-System Synchronization Board -->
            <div class="lg:col-span-5 order-2 lg:order-1">
              <div class="rounded-xl border border-white/10 bg-[#0f1724]/90 p-5 space-y-4 shadow-inner">
                <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] font-ui text-xs">
                  <span class="text-zinc-200 font-medium flex items-center gap-2">
                    <Network class="h-3.5 w-3.5 text-brand" />
                    Multi-System Data Bus
                  </span>
                  <span class="font-mono text-[10px] text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/20">
                    LIVE SYNC
                  </span>
                </div>

                <!-- 3 Interconnected Stream Layers with Self-Drawing SVG Conduits -->
                <div class="space-y-2.5 font-mono text-[11px]">
                  <div class="rounded-lg border border-white/5 bg-[#142030] p-3 flex items-center justify-between">
                    <div class="flex items-center gap-2 text-zinc-300">
                      <Database class="h-3.5 w-3.5 text-zinc-400" />
                      <span>Enterprise ERP Feeds</span>
                    </div>
                    <span class="text-[10px] text-brand font-semibold">SYNCHRONIZED</span>
                  </div>

                  <!-- Self-Drawing SVG Connector 1 -->
                  <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                    <svg width="2" height="18" viewBox="0 0 2 18" fill="none" class="overflow-visible">
                      <line x1="1" y1="0" x2="1" y2="18" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="18"
                        stroke="#10b981"
                        stroke-width="1.5"
                        stroke-dasharray="18"
                        :stroke-dashoffset="isPhase2Revealed ? '0' : '18'"
                        class="transition-all duration-700 delay-300 ease-out"
                      />
                    </svg>
                  </div>

                  <div
                    class="rounded-lg border border-brand/30 bg-brand/10 p-3 flex items-center justify-between transition-all duration-700 delay-500"
                    :class="{ 'shadow-[0_0_20px_-3px_rgba(16,185,129,0.22)]': isPhase2Revealed }"
                  >
                    <div class="flex items-center gap-2 text-white font-medium">
                      <GitMerge class="h-3.5 w-3.5 text-brand" />
                      <span>KavoraX Event Engine</span>
                    </div>
                    <span class="text-[10px] text-brand font-semibold">COORDINATED</span>
                  </div>

                  <!-- Self-Drawing SVG Connector 2 -->
                  <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                    <svg width="2" height="18" viewBox="0 0 2 18" fill="none" class="overflow-visible">
                      <line x1="1" y1="0" x2="1" y2="18" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="18"
                        stroke="#10b981"
                        stroke-width="1.5"
                        stroke-dasharray="18"
                        :stroke-dashoffset="isPhase2Revealed ? '0' : '18'"
                        class="transition-all duration-700 delay-700 ease-out"
                      />
                    </svg>
                  </div>

                  <div class="rounded-lg border border-white/5 bg-[#142030] p-3 flex items-center justify-between">
                    <div class="flex items-center gap-2 text-zinc-300">
                      <ShieldCheck class="h-3.5 w-3.5 text-zinc-400" />
                      <span>Executive Observability</span>
                    </div>
                    <span class="text-[10px] text-brand font-semibold">TRACEABLE</span>
                  </div>
                </div>

                <div class="pt-2 text-[10px] font-mono text-zinc-500 text-center">
                  NO DISRUPTIVE RIP-AND-REPLACE REQUIRED
                </div>
              </div>
            </div>

            <!-- Right: Editorial Narrative -->
            <div class="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div class="flex items-center gap-4">
                <span class="font-editorial text-5xl sm:text-6xl font-semibold text-brand/50 group-hover:text-brand transition-colors">
                  02
                </span>
                <div class="h-8 w-px bg-white/10" />
                <div>
                  <span class="font-mono text-xs text-brand tracking-widest uppercase block">
                    INTEROPERABILITY & SYNCHRONIZATION
                  </span>
                  <span class="font-mono text-[10px] text-zinc-500">PHASE 02 OF 03</span>
                </div>
              </div>

              <div class="space-y-2">
                <h3 class="font-editorial text-2xl sm:text-4xl font-medium text-white group-hover:text-brand transition-colors">
                  Connect the Moving Parts
                </h3>
                <div class="font-ui text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Workflows, Systems & Information
                </div>
              </div>

              <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                Enterprise efficiency is hindered when critical information and responsibilities are siloed. KavoraX focuses on unifying decentralized workflows, disparate system records, and cross-departmental handoffs into a coordinated operational environment without requiring disruptive system overhauls.
              </p>

              <!-- Principles Checklist -->
              <div class="pt-4 border-t border-white/[0.06] space-y-3 font-ui text-xs sm:text-sm">
                <div class="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span class="leading-relaxed">Establish dependable cross-system interoperability across APIs and databases</span>
                </div>
                <div class="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span class="leading-relaxed">Synchronize operational data and status updates without manual re-entry</span>
                </div>
                <div class="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span class="leading-relaxed">Bridge gaps between administrative teams and technical operators</span>
                </div>
              </div>

              <div class="pt-2">
                <span class="inline-flex items-center gap-2 rounded bg-[#101a26] border border-white/10 px-3 py-1 font-mono text-[10px] text-zinc-300">
                  <Network class="h-3.5 w-3.5 text-brand" />
                  UNIFIED EVENT-DRIVEN SYNC FABRIC
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 03: Distinct Asymmetric Architecture Ledger -->
        <div
          ref="phase3Ref"
          class="rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 p-8 sm:p-12 backdrop-blur-xl relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isPhase3Revealed }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="space-y-8">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div class="flex items-center gap-4">
                <span class="font-editorial text-5xl sm:text-6xl font-semibold text-brand/50 group-hover:text-brand transition-colors">
                  03
                </span>
                <div class="h-8 w-px bg-white/10" />
                <div>
                  <span class="font-mono text-xs text-brand tracking-widest uppercase block">
                    EVOLUTION & RESILIENCE
                  </span>
                  <span class="font-mono text-[10px] text-zinc-500">PHASE 03 OF 03</span>
                </div>
              </div>

              <div class="font-mono text-xs text-zinc-400">
                ARCHITECTURE // DECOUPLED EVOLUTION
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div class="lg:col-span-6 space-y-4">
                <h3 class="font-editorial text-2xl sm:text-4xl font-medium text-white group-hover:text-brand transition-colors">
                  Build for Change
                </h3>
                <div class="font-ui text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Adaptability as an Architectural Goal
                </div>
                <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                  Business models, regulatory demands, and software stacks inevitably shift over time. We approach architecture with modular flexibility as a foundational design goal, creating systems structured to accommodate new requirements and operational scale smoothly.
                </p>
                <div class="pt-2">
                  <span class="inline-flex items-center gap-2 rounded bg-[#101a26] border border-white/10 px-3 py-1 font-mono text-[10px] text-zinc-300">
                    <RefreshCw class="h-3.5 w-3.5 text-brand" />
                    DECOUPLED RESILIENT ARCHITECTURE
                  </span>
                </div>
              </div>

              <!-- 3 Horizontal Architectural Pillars -->
              <div class="lg:col-span-6 space-y-3 font-ui">
                <div class="rounded-xl border border-white/[0.07] bg-[#101926] p-4.5 space-y-1.5 hover:border-brand/30 transition-colors">
                  <div class="flex items-center justify-between">
                    <span class="text-white font-medium text-sm flex items-center gap-2">
                      <CheckCircle2 class="h-4 w-4 text-brand" />
                      Modular Platform Boundaries
                    </span>
                    <span class="font-mono text-[10px] text-brand">MULTI-YEAR HORIZON</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed pl-6">
                    Systems structured to evolve cleanly without creating brittle monolithic dependencies.
                  </p>
                </div>

                <div class="rounded-xl border border-white/[0.07] bg-[#101926] p-4.5 space-y-1.5 hover:border-brand/30 transition-colors">
                  <div class="flex items-center justify-between">
                    <span class="text-white font-medium text-sm flex items-center gap-2">
                      <CheckCircle2 class="h-4 w-4 text-brand" />
                      Decoupled Integrations
                    </span>
                    <span class="font-mono text-[10px] text-brand">ZERO LOCK-IN</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed pl-6">
                    Eliminates fragile point-to-point connections, ensuring third-party tools can be swapped as needs evolve.
                  </p>
                </div>

                <div class="rounded-xl border border-white/[0.07] bg-[#101926] p-4.5 space-y-1.5 hover:border-brand/30 transition-colors">
                  <div class="flex items-center justify-between">
                    <span class="text-white font-medium text-sm flex items-center gap-2">
                      <CheckCircle2 class="h-4 w-4 text-brand" />
                      Resilient Audit & Telemetry
                    </span>
                    <span class="font-mono text-[10px] text-brand">AUDITABLE LOGS</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed pl-6">
                    Built-in observability frameworks engineered to sustain long-term executive and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Context Strip -->
      <div class="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-ui text-xs text-zinc-400">
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-brand" />
          <span>Pragmatic methodology built for real-world enterprise infrastructure.</span>
        </div>
        <NuxtLink
          to="/products"
          class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors"
        >
          <span>See How KavoraX Products Implement This Method</span>
          <ArrowRight class="h-3.5 w-3.5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
