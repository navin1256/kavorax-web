<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Radio,
  CheckCircle2
} from 'lucide-vue-next'

const heroRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeroRevealed } = useScrollReveal(heroRef, { immediate: true })
</script>

<template>
  <section
    ref="heroRef"
    class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]"
  >
    <!-- Atmospheric Ambient Lighting & Tech Grid Overlay with Organic Drift -->
    <div
      class="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-brand/[0.07] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand/[0.04] blur-[140px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Top HUD Telemetry Metadata Bar -->
      <div
        class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroRevealed }"
      >
        <div class="flex items-center gap-3">
          <ChapterLabel
            index="CHAPTER 01"
            label="STRATEGIC ADVISORY"
            sublabel="BUSINESS-FIRST METHODOLOGY"
          />
        </div>

        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="hidden md:inline-flex items-center gap-1.5">
            <Radio class="h-3 w-3 text-brand animate-pulse-subtle" />
            <span>ALIGNMENT: <strong class="text-white font-mono">DETERMINISTIC</strong></span>
          </span>
          <span class="text-zinc-600 hidden md:inline">|</span>
          <span>FRAMEWORK: <strong class="text-brand font-mono">CONNECTED ENTERPRISE</strong></span>
          <span class="text-zinc-600">|</span>
          <span class="text-zinc-400 font-mono">[ 01 // OVERVIEW ]</span>
        </div>
      </div>

      <!-- Main Editorial Layout: Asymmetric 12-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        <!-- Left: Narrative Headline & Business Storytelling -->
        <div class="lg:col-span-7 space-y-7">
          <!-- Eyebrow Tag -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>OUR SOLUTIONS</span>
          </div>

          <!-- Hero Headline with WordReveal -->
          <WordReveal
            text="Connected Solutions. Meaningful Business Progress."
            as="h1"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
            :italic-words="['Meaningful', 'Business', 'Progress.']"
            :delay="240"
            :immediate="true"
          />

          <!-- Hero Supporting Copy: Reverted to Inter font-ui -->
          <p
            class="font-ui text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            Explore how connected technology can help businesses simplify operations, improve
            visibility, and move forward with greater confidence.
          </p>

          <!-- Dual Action CTAs -->
          <div
            class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/products" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-7 py-6 text-base rounded-md backdrop-blur-sm transition-all duration-200 group"
              >
                <Layers class="mr-2 h-4 w-4 text-brand" />
                <span>Explore Products</span>
                <ArrowUpRight class="ml-1.5 h-3.5 w-3.5 text-zinc-500 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Strategic Principles Strip -->
          <div
            class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg font-ui reveal-base transition-editorial duration-700 delay-800"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Pragmatic</div>
              <div class="text-xs text-zinc-400 mt-1">Business-First Fit</div>
            </div>
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Integrated</div>
              <div class="text-xs text-zinc-400 mt-1">Cross-Tool Synchrony</div>
            </div>
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Measurable</div>
              <div class="text-xs text-zinc-400 mt-1">Operational Clarity</div>
            </div>
          </div>
        </div>

        <!-- Right: Photographic Architecture Canvas with Selective Workplace/Technology Imagery -->
        <div
          class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
          <!-- Ambient Halo -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          <!-- Editorial Image Composition Card -->
          <div
            class="relative rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <!-- Corner Crosshairs inspired by Active Theory -->
            <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Header Bar -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div class="flex items-center gap-2.5">
                <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 border border-brand/30 text-brand">
                  <Compass class="h-4 w-4" />
                </div>
                <div>
                  <div class="font-mono text-xs font-semibold text-white tracking-wide">
                    KX // SOLUTIONS BLUEPRINT
                  </div>
                  <div class="font-mono text-[10px] text-zinc-500">
                    MODULAR ENTERPRISE DELIVERY
                  </div>
                </div>
              </div>

              <div class="font-mono text-[10px] text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                VERIFIED ARCHITECTURE
              </div>
            </div>

            <!-- Realistic Workplace / Technology Image Panel -->
            <div class="my-5 relative h-52 rounded-xl overflow-hidden border border-white/[0.08] group">
              <img
                src="/images/architectural-workspace.webp"
                alt="KavoraX collaborative systems architecture workshop"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="600"
                height="208"
                class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-opacity"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c141e] via-[#0c141e]/40 to-transparent" />
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span class="text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>CONSULTATIVE ENGAGEMENT</span>
                </span>
                <span class="text-zinc-400">STAGE: STRATEGY &amp; SCOPE</span>
              </div>
            </div>

            <!-- Nodal Flow Visualizer Ribbon -->
            <div class="space-y-2.5 font-mono text-xs">
              <div class="p-3 rounded-lg border border-white/[0.06] bg-[#070b10] flex items-center justify-between">
                <span class="text-zinc-400">01. OPERATIONAL ANALYSIS</span>
                <span class="text-brand font-semibold flex items-center gap-1">
                  <CheckCircle2 class="h-3 w-3" />
                  <span>COMPLETE</span>
                </span>
              </div>
              <div class="p-3 rounded-lg border border-brand/30 bg-brand/[0.05] flex items-center justify-between">
                <span class="text-white font-semibold">02. CONNECTED DEPLOYMENT</span>
                <span class="text-emerald-400 animate-pulse-subtle font-semibold">IN PROGRESS</span>
              </div>
              <div class="p-3 rounded-lg border border-white/[0.04] bg-[#070b10] flex items-center justify-between text-zinc-500">
                <span>03. ADAPTIVE SCALING</span>
                <span>QUEUED</span>
              </div>
            </div>

            <!-- Card Footer -->
            <div class="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span class="flex items-center gap-1.5">
                <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                <span>NO VENDOR LOCK-IN</span>
              </span>
              <span class="text-zinc-500">ZERO FRAGILE SCRIPTS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
