<script setup lang="ts">
import { Button } from '~/components/ui/button'
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  BarChart3,
  Network,
  ChevronDown,
  Activity,
  ShieldCheck
} from 'lucide-vue-next'

const enterpriseCapabilities = [
  {
    id: 1,
    name: 'Workflow Orchestration',
    category: 'Operations',
    icon: Workflow,
    detail: 'Deterministic task routing and cross-departmental process synchronization.',
    metric: 'Sub-second event pipeline routing across multi-cloud environments.'
  },
  {
    id: 2,
    name: 'Continuous Telemetry',
    category: 'Data & Visibility',
    icon: BarChart3,
    detail: 'Operational event visibility providing immediate clarity over bottlenecks.',
    metric: 'Full-fidelity event observability bridging legacy and modern infrastructure.'
  },
  {
    id: 3,
    name: 'Universal Integration',
    category: 'Architecture',
    icon: Network,
    detail: 'Resilient multi-system interoperability connecting legacy tools and cloud APIs.',
    metric: 'Bi-directional protocol bridges eliminating operational silos.'
  }
]

const scrollToContent = () => {
  const el = document.getElementById('enterprise-capabilities') || document.getElementById('editorial-intro')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="relative bg-[#070D10] text-white">
    <!-- 1. CINEMATIC OPENING HERO SECTION (WITH RESTORED SKYSCRAPER ARCHITECTURE BACKGROUND) -->
    <section
      class="hero-cinematic-bg relative min-h-[660px] sm:min-h-[700px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[820px] flex flex-col justify-between overflow-hidden bg-[#070D10] text-white selection:bg-brand/20 selection:text-brand"
    >
      <!-- Background Architectural Skyscraper Photography Visual with Atmospheric Dark Charcoal Linear Overlays -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <!-- Authentic Architectural Skyscraper Photography Asset -->
        <img
          src="/images/fintech-headquarters.jpg"
          alt="KavoraX modern enterprise corporate headquarters architecture"
          loading="eager"
          class="h-full w-full object-cover object-[center_32%] md:object-[center_28%] lg:object-[center_25%] opacity-40 filter brightness-[0.75] contrast-[1.10] scale-[1.01]"
        >

        <!-- Layered Dark Black/Charcoal Linear Gradients (Zero curves, arcs, rings, or radial patterns) -->
        <!-- 1. Deep overall dark charcoal tint for rich enterprise integration -->
        <div class="absolute inset-0 bg-[#070D10]/65" />

        <!-- 2. Subtle horizontal edge vignette using straight linear gradients -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#070D10]/85 via-transparent to-[#070D10]/85" />

        <!-- 3. Top fade from navbar area -->
        <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070D10] via-[#070D10]/85 to-transparent" />

        <!-- 4. Bottom fade cleanly transitioning into following section -->
        <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070D10] via-[#070D10]/95 to-transparent" />
      </div>

      <!-- Top Metadata Ribbon (Clean Enterprise Identity) -->
      <div class="relative z-10 pt-7 sm:pt-9">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-3.5 font-mono text-xs text-zinc-400"
          >
            <div class="flex items-center gap-2.5">
              <span class="flex h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
              <span class="text-zinc-200 font-medium tracking-wider uppercase">
                KAVORAX GLOBAL PRIVATE LIMITED
              </span>
            </div>

            <div class="flex items-center gap-4 text-[11px] text-zinc-400">
              <span class="hidden sm:inline">ENTERPRISE TECHNOLOGY CONSULTANCY</span>
              <span class="text-zinc-600 hidden sm:inline">|</span>
              <span class="text-brand font-mono">CONNECTED SOLUTIONS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Centered Hero Typography & Core CTA Area (Refined Proportions & Balanced Spacing) -->
      <div class="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 text-center my-auto">
        <!-- Eyebrow Pill -->
        <div
          class="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-black/60 px-4 py-1.5 text-xs font-ui tracking-wide text-zinc-300 backdrop-blur-md shadow-sm"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand" />
          <span class="font-semibold text-brand tracking-widest uppercase text-[11px]">
            CONNECTED BUSINESS SOLUTIONS
          </span>
        </div>

        <!-- Headline: Reduced by ~8% on desktop for balanced proportion, preserving serif italic "forward" -->
        <h1
          class="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[5.75rem] font-normal tracking-[-0.025em] text-white leading-[1.05] text-balance mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
        >
          Technology that moves business
          <span class="italic font-light text-brand">forward</span>.
        </h1>

        <!-- Supporting Text: Preserved exact copy with harmonious spacing and high contrast -->
        <p
          class="mt-5 sm:mt-6 font-editorial text-lg sm:text-xl md:text-[1.45rem] lg:text-[1.55rem] text-zinc-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-pretty font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
        >
          KavoraX builds connected business solutions that help organisations operate smarter,
          serve customers better and scale with confidence.
        </p>

        <!-- Prominent Dual CTAs with balanced vertical spacing and comfortable targets -->
        <div class="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-9 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.45)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.65)] transition-all duration-300 group"
            >
              <span>Book a Demo</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/solutions" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/20 bg-black/40 hover:bg-white/[0.09] text-white px-8 py-6 text-base rounded-md backdrop-blur-md transition-all duration-200 group"
            >
              <span>Explore Our Solutions</span>
              <ArrowUpRight
                class="ml-2 h-4 w-4 text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Button>
          </NuxtLink>
        </div>
      </div>

      <!-- Functional, Intentional Scroll Cue Indicator -->
      <div class="relative z-10 pb-6 sm:pb-8 flex justify-center">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 hover:bg-black/75 hover:border-brand/40 backdrop-blur-md font-mono text-[11px] text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/50 group"
          aria-label="Scroll to enterprise capabilities"
          @click="scrollToContent"
        >
          <span class="tracking-widest uppercase text-[10px]">Explore Architecture</span>
          <ChevronDown class="h-3.5 w-3.5 text-brand group-hover:translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </section>

    <!-- 2. REUSED SECTION BELOW HERO: ENTERPRISE ARCHITECTURE SHOWCASE & 3 CAPABILITY CARDS -->
    <!-- (Replaces old duplicate building image with an authentic architectural visual and preserved capability pillars) -->
    <section id="enterprise-capabilities" class="relative z-10 pt-4 pb-16 sm:pb-20 border-b border-white/[0.08] bg-[#070D10] bg-technical-grid">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Visual Architecture System Stage (Meaningful Enterprise Architecture Overview) -->
        <div
          class="relative rounded-2xl border border-white/[0.09] bg-[#0c131d]/90 p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.65)] mb-8"
        >
          <!-- Active Theory Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

          <!-- Section Label & Architecture Indicator -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                <span class="font-mono text-xs text-brand tracking-widest uppercase">
                  ENTERPRISE ARCHITECTURE TOPOLOGY
                </span>
              </div>
              <h2 class="font-editorial text-2xl sm:text-3xl font-normal text-white">
                Deterministic Systems Infrastructure
              </h2>
            </div>

            <div class="flex items-center gap-3 font-mono text-xs text-zinc-400">
              <span class="px-2.5 py-1 rounded border border-white/10 bg-black/40 text-zinc-300 flex items-center gap-1.5">
                <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                <span>SOVEREIGN DEPLOYMENT</span>
              </span>
              <span class="px-2.5 py-1 rounded border border-white/10 bg-black/40 text-brand hidden sm:inline">
                CLASS-1 RESILIENCE
              </span>
            </div>
          </div>

          <!-- Interactive Enterprise Architecture Flow Diagram -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <!-- Node A: Universal Integration -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0f1722] p-5 flex flex-col justify-between h-full relative group hover:border-brand/30 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span class="text-brand flex items-center gap-1.5">
                    <Network class="h-3.5 w-3.5" />
                    <span>FOUNDATION</span>
                  </span>
                  <span>LAYER 01</span>
                </div>
                <h3 class="font-editorial text-xl font-medium text-white">
                  Universal Integration Fabric
                </h3>
                <p class="font-ui text-xs text-zinc-400 leading-relaxed">
                  Connects heterogeneous enterprise assets: mainframe records, relational stores, microservices, and partner APIs.
                </p>
              </div>
              <div class="pt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-400">
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Multi-Protocol</span>
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Sub-millisecond</span>
              </div>
            </div>

            <!-- Central Bridge Connector (Visual Signal Transition) -->
            <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-5 flex flex-col justify-between h-full relative group hover:border-brand/40 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-mono text-brand">
                  <span class="flex items-center gap-1.5">
                    <Workflow class="h-3.5 w-3.5" />
                    <span>ENGINE</span>
                  </span>
                  <span>LAYER 02</span>
                </div>
                <h3 class="font-editorial text-xl font-medium text-white">
                  Deterministic Orchestration
                </h3>
                <p class="font-ui text-xs text-zinc-300 leading-relaxed">
                  Guaranteed execution pipelines eliminating human handoff lag and operational bottlenecks across mission-critical workflows.
                </p>
              </div>
              <div class="pt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-400">
                <span class="px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand">State Verified</span>
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Zero-Latency Bus</span>
              </div>
            </div>

            <!-- Node B: Continuous Telemetry -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0f1722] p-5 flex flex-col justify-between h-full relative group hover:border-brand/30 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span class="text-brand flex items-center gap-1.5">
                    <Activity class="h-3.5 w-3.5" />
                    <span>INTELLIGENCE</span>
                  </span>
                  <span>LAYER 03</span>
                </div>
                <h3 class="font-editorial text-xl font-medium text-white">
                  Continuous Telemetry Stream
                </h3>
                <p class="font-ui text-xs text-zinc-400 leading-relaxed">
                  Sub-millisecond system observability, distributed trace aggregation, and automated operational bottleneck diagnostics.
                </p>
              </div>
              <div class="pt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-400">
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Full Observability</span>
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Telemetry Logs</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 PRESERVED ENTERPRISE CAPABILITY CARDS (Equal Height & Aligned Metrics) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-ui items-stretch">
          <div
            v-for="cap in enterpriseCapabilities"
            :key="cap.id"
            class="rounded-xl border border-white/[0.08] bg-[#0c131d]/85 p-6 flex flex-col justify-between h-full hover:border-brand/40 hover:bg-[#0e1622] transition-all duration-300 group relative"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5 text-brand">
                  <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors">
                    <component :is="cap.icon" class="h-4 w-4" />
                  </div>
                  <span class="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    {{ cap.category }}
                  </span>
                </div>
                <span class="font-mono text-xs text-zinc-500 group-hover:text-brand transition-colors">0{{ cap.id }}</span>
              </div>

              <h3 class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors">
                {{ cap.name }}
              </h3>

              <p class="text-sm text-zinc-300 leading-relaxed font-normal">
                {{ cap.detail }}
              </p>
            </div>

            <div class="mt-6 pt-3.5 border-t border-white/[0.06] text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span class="text-[11px] text-zinc-400">{{ cap.metric }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

