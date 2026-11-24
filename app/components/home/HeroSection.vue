<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '~/components/ui/button'
import { useScrollReveal } from '~/composables/useScrollReveal'
import WordReveal from '~/components/visual/WordReveal.vue'
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

const heroRef = ref<HTMLElement | null>(null)
const capRef = ref<HTMLElement | null>(null)
const isHeroVisible = ref(true)

// Cinematic immediate reveal for hero elements on page entry
const { isRevealed: isHeroRevealed } = useScrollReveal(heroRef, { immediate: true })
// Viewport-triggered scroll reveal for enterprise capabilities section
const { isRevealed: isCapRevealed } = useScrollReveal(capRef, { threshold: 0.15 })

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window && heroRef.value) {
    const obs = new IntersectionObserver(([entry]) => {
      isHeroVisible.value = entry.isIntersecting
    }, { rootMargin: '100px 0px 100px 0px' })
    obs.observe(heroRef.value)
    onUnmounted(() => obs.disconnect())
  }
})

const enterpriseCapabilities = [
  {
    id: 1,
    name: 'Workflow Orchestration',
    category: 'Operations',
    icon: Workflow,
    detail: 'Task routing, team coordination, and automated handoffs across departments.',
    metric: 'Real-time task synchronization across teams.'
  },
  {
    id: 2,
    name: 'Real-Time Insights',
    category: 'Analytics',
    icon: BarChart3,
    detail: 'Instant operational visibility that highlights bottlenecks and revenue opportunities.',
    metric: 'Clear reporting for leadership and operations teams.'
  },
  {
    id: 3,
    name: 'Universal Integration',
    category: 'Architecture',
    icon: Network,
    detail: 'Resilient multi-system connectivity linking legacy software, databases, and modern cloud APIs.',
    metric: 'Direct connection with third-party tools and hardware.'
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
    <!-- 1. CINEMATIC OPENING HERO SECTION -->
    <section
      ref="heroRef"
      class="hero-cinematic-bg relative min-h-[660px] sm:min-h-[700px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[820px] flex flex-col justify-between overflow-hidden bg-[#070D10] text-white selection:bg-brand/20 selection:text-brand"
    >
      <!-- Background Architectural Photography Visual -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src="/images/fintech-headquarters.webp"
          alt="KavoraX modern enterprise corporate headquarters architecture"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
          class="h-full w-full object-cover object-[center_32%] md:object-[center_28%] lg:object-[center_25%] opacity-40 filter brightness-[0.75] contrast-[1.10] scale-[1.01] animate-hero-drift"
          :style="{ animationPlayState: isHeroVisible ? 'running' : 'paused' }"
        >

        <!-- Layered Dark Linear Gradients -->
        <div class="absolute inset-0 bg-[#070D10]/65" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#070D10]/85 via-transparent to-[#070D10]/85" />
        <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070D10] via-[#070D10]/85 to-transparent" />
        <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070D10] via-[#070D10]/95 to-transparent" />
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none animate-ambient-drift" />
      </div>

      <!-- Top Metadata Ribbon (Clean Enterprise Identity) -->
      <div
        class="relative z-10 pt-7 sm:pt-9 reveal-base delay-75"
        :class="{ 'is-revealed': isHeroRevealed }"
      >
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-3.5 font-ui text-xs text-zinc-400"
          >
            <div class="flex items-center gap-2.5">
              <span class="flex h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
              <span class="text-zinc-200 font-medium tracking-wide">
                KavoraX Global Private Limited
              </span>
            </div>

            <div class="hidden sm:flex items-center gap-4 text-xs text-zinc-400">
              <span class="hidden md:inline">Enterprise Technology Consultancy</span>
              <span class="text-zinc-600 hidden md:inline">·</span>
              <span class="text-brand font-medium">Connected Business Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Centered Hero Typography & Core CTA Area -->
      <div class="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 text-center my-auto">
        <!-- Eyebrow Pill -->
        <div
          class="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-black/60 px-4 py-1.5 text-xs font-ui tracking-wide text-zinc-300 backdrop-blur-md shadow-sm reveal-base delay-100"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand" />
          <span class="font-medium text-brand text-xs">
            Connected Business Solutions
          </span>
        </div>

        <!-- Headline: Word-by-word reveal with italic emerald flourish -->
        <WordReveal
          text="Technology that&#10;moves business forward."
          as="h1"
          highlight="forward"
          highlight-class="italic font-light text-brand"
          :base-delay-ms="200"
          :stagger-ms="55"
          :immediate="true"
          class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal tracking-[-0.025em] text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
        />

        <!-- Supporting Text -->
        <p
          class="mt-5 sm:mt-6 font-editorial text-lg sm:text-xl md:text-[1.45rem] lg:text-[1.55rem] text-zinc-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-pretty font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] reveal-base delay-500"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
          KavoraX builds connected business solutions that help organisations operate smarter,
          serve customers better and scale with confidence.
        </p>

        <!-- Dual CTAs -->
        <div
          class="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base delay-700"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
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

      <!-- Scroll Indicator -->
      <div
        class="relative z-10 pb-6 sm:pb-8 flex justify-center reveal-base delay-800"
        :class="{ 'is-revealed': isHeroRevealed }"
      >
        <button
          type="button"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 hover:bg-black/75 hover:border-brand/40 backdrop-blur-md font-ui text-xs text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/50 group"
          aria-label="Scroll to enterprise capabilities"
          @click="scrollToContent"
        >
          <span>Explore Platform</span>
          <ChevronDown class="h-3.5 w-3.5 text-brand group-hover:translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </section>

    <!-- 2. ENTERPRISE ARCHITECTURE SHOWCASE & 3 CAPABILITY CARDS -->
    <section
      id="enterprise-capabilities"
      ref="capRef"
      class="relative z-10 pt-4 pb-16 sm:pb-20 border-b border-white/[0.08] bg-[#070D10] bg-technical-grid"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Visual Architecture System Stage -->
        <div
          class="relative rounded-2xl border border-white/[0.09] bg-[#0c131d]/90 p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.65)] mb-8 reveal-base"
          :class="{ 'is-revealed': isCapRevealed }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-30 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

          <!-- Section Label & Architecture Indicator -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                <span class="font-ui text-xs text-brand font-medium">
                  Architecture Overview
                </span>
              </div>
              <h2 class="font-editorial text-2xl sm:text-3xl font-normal text-white">
                A Connected Foundation for Your Entire Business
              </h2>
            </div>

            <div class="flex items-center gap-3 font-ui text-xs text-zinc-400">
              <span class="px-2.5 py-1 rounded border border-white/10 bg-black/40 text-zinc-300 flex items-center gap-1.5">
                <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                <span>Enterprise Ready</span>
              </span>
              <span class="px-2.5 py-1 rounded border border-white/10 bg-black/40 text-brand hidden sm:inline">
                High Availability
              </span>
            </div>
          </div>

          <!-- Interactive Enterprise Architecture Flow Diagram -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <!-- Node A: Universal Integration -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0f1722] p-5 flex flex-col justify-between h-full relative group hover:border-brand/30 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-ui text-zinc-400">
                  <span class="text-brand flex items-center gap-1.5 font-medium">
                    <Network class="h-3.5 w-3.5" />
                    <span>Integrations</span>
                  </span>
                  <span class="text-zinc-500">Core</span>
                </div>
                <h3 class="font-editorial text-xl font-medium text-white">
                  Universal Integration Fabric
                </h3>
                <p class="font-ui text-xs text-zinc-400 leading-relaxed">
                  Connects diverse business tools: legacy systems, relational databases, cloud apps, and external partner APIs.
                </p>
              </div>
              <div class="pt-4 flex flex-wrap gap-1.5 font-ui text-[11px] text-zinc-400">
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Multi-Protocol</span>
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Real-Time Sync</span>
              </div>
            </div>

            <!-- Central Bridge Connector -->
            <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-5 flex flex-col justify-between h-full relative group hover:border-brand/40 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-ui text-brand">
                  <span class="flex items-center gap-1.5 font-medium">
                    <Workflow class="h-3.5 w-3.5" />
                    <span>Workflows</span>
                  </span>
                  <span class="text-brand/80">Operations</span>
                </div>
                <h3 class="font-editorial text-xl font-medium text-white">
                  Workflow Orchestration
                </h3>
                <p class="font-ui text-xs text-zinc-300 leading-relaxed">
                  Automated execution pipelines eliminating handoff delays and operational bottlenecks across teams.
                </p>
              </div>
              <div class="pt-4 flex flex-wrap gap-1.5 font-ui text-[11px] text-zinc-400">
                <span class="px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand">Synchronized</span>
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Zero-Latency Bus</span>
              </div>
            </div>

            <!-- Node B: Continuous Telemetry -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0f1722] p-5 flex flex-col justify-between h-full relative group hover:border-brand/30 transition-colors">
              <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-ui text-zinc-400">
                  <span class="text-brand flex items-center gap-1.5 font-medium">
                    <Activity class="h-3.5 w-3.5" />
                    <span>Analytics</span>
                  </span>
                  <span class="text-zinc-500">Live</span>
                </div>
                <h3 class="font-editorial text-xl font-medium text-white">
                  Real-Time Business Telemetry
                </h3>
                <p class="font-ui text-xs text-zinc-400 leading-relaxed">
                  Real-time operational observability, throughput tracking, and automated bottleneck detection for leadership.
                </p>
              </div>
              <div class="pt-4 flex flex-wrap gap-1.5 font-ui text-[11px] text-zinc-400">
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Full Visibility</span>
                <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Audit Trails</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 CAPABILITY CARDS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-ui items-stretch">
          <div
            v-for="(cap, cIdx) in enterpriseCapabilities"
            :key="cap.id"
            class="rounded-xl border border-white/[0.08] bg-[#0c131d]/85 p-6 flex flex-col justify-between h-full hover:border-brand/40 hover:bg-[#0e1622] transition-all duration-300 group relative reveal-base"
            :class="[
              isCapRevealed ? 'is-revealed' : '',
              cIdx === 0 ? 'delay-100' : cIdx === 1 ? 'delay-200' : 'delay-300'
            ]"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5 text-brand">
                  <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors">
                    <component :is="cap.icon" class="h-4 w-4" />
                  </div>
                  <span class="font-ui text-xs font-medium text-brand">
                    {{ cap.category }}
                  </span>
                </div>
              </div>

              <h3 class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors">
                {{ cap.name }}
              </h3>

              <p class="text-sm text-zinc-300 leading-relaxed font-normal">
                {{ cap.detail }}
              </p>
            </div>

            <div class="pt-4 border-t border-white/[0.06] mt-4">
              <p class="text-xs text-zinc-400 leading-normal">
                {{ cap.metric }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
