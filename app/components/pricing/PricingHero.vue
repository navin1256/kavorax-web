<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import {
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Radio
} from 'lucide-vue-next'

const { isRevealed: isHeroMounted } = useScrollReveal({ immediate: true, delay: 60 })

const scrollToComparison = () => {
  const el = document.getElementById('solutions-comparison')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Ambient emerald backlight glow with subtle drift -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- HUD Telemetry Top Bar -->
      <div
        class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroMounted }"
      >
        <div class="flex items-center gap-3">
          <ChapterLabel
            index="CHAPTER 01"
            label="COMMERCIAL ARCHITECTURE"
            sublabel="TRANSPARENT ENGAGEMENT MODEL"
          />
        </div>

        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="hidden md:inline-flex items-center gap-1.5">
            <Radio class="h-3 w-3 text-brand animate-pulse-subtle" />
            <span>TRANSPARENCY: <strong class="text-white font-mono">100% AUDITABLE</strong></span>
          </span>
          <span class="text-zinc-600 hidden md:inline">|</span>
          <span>MODULAR SCOPE</span>
          <span class="text-zinc-600">|</span>
          <span class="text-zinc-400 font-mono">[ 01 // OVERVIEW ]</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <!-- Left Column: Editorial Headline & Copy -->
        <div class="lg:col-span-7 space-y-7">
          <!-- Subtle Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>PRICING &amp; ENGAGEMENT</span>
          </div>

          <!-- Hero Headline with WordReveal -->
          <WordReveal
            text="A Solution Model Built Around Your Business."
            as="h1"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
            :italic-words="['Around', 'Your', 'Business.']"
            :delay="240"
            :immediate="true"
          />

          <!-- Hero Supporting Copy -->
          <p
            class="font-ui text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            Every organisation has different operational needs. Let's discuss your requirements and
            identify an approach that fits your business, priorities and scale.
          </p>

          <!-- Dual CTAs -->
          <div
            class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
            :class="{ 'is-revealed': isHeroMounted }"
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

            <button
              type="button"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-zinc-200 hover:text-white transition-colors group border border-white/10 rounded-md bg-[#111a26]/60 hover:bg-[#111a26] cursor-pointer"
              @click="scrollToComparison"
            >
              <span>Explore Sizing Scopes</span>
              <ArrowDown class="h-4 w-4 text-brand group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <!-- Editorial Trust Highlights -->
          <div
            class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg font-ui reveal-base transition-editorial duration-700 delay-800"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Consultative</div>
              <div class="text-xs text-zinc-400 mt-1">Aligned to Scale</div>
            </div>
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Modular</div>
              <div class="text-xs text-zinc-400 mt-1">Flexible Scope</div>
            </div>
            <div>
              <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Predictable</div>
              <div class="text-xs text-zinc-400 mt-1">Direct Governance</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Sizing & Engagement Architecture Blueprint Card -->
        <div
          class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <!-- Ambient Halo -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          <div
            class="relative rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <!-- Corner Crosshairs inspired by Active Theory -->
            <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Card Header -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div class="flex items-center gap-2.5">
                <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 border border-brand/30 text-brand">
                  <ShieldCheck class="h-4 w-4" />
                </div>
                <div>
                  <div class="font-mono text-xs font-semibold text-white tracking-wide">
                    ENGAGEMENT PRINCIPLES
                  </div>
                  <div class="font-mono text-[10px] text-zinc-500">
                    NO OPAQUE TIERS · FULL CLARITY
                  </div>
                </div>
              </div>

              <span class="font-mono text-[10px] text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded font-semibold">
                ENTERPRISE
              </span>
            </div>

            <!-- Structured Engagement Summary -->
            <div class="my-6 space-y-4 font-ui">
              <div class="p-4 rounded-xl border border-white/[0.06] bg-[#070b10] space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-white font-semibold text-xs">Diagnostic Assessment</span>
                  <span class="font-mono text-[10px] text-brand">STAGE 01</span>
                </div>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  We evaluate workflows, integration endpoints, and concurrency requirements to determine appropriate architecture.
                </p>
              </div>

              <div class="p-4 rounded-xl border border-brand/30 bg-brand/[0.04] space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-white font-semibold text-xs">Scoped Deployment</span>
                  <span class="font-mono text-[10px] text-emerald-400">STAGE 02</span>
                </div>
                <p class="text-xs text-zinc-300 leading-relaxed">
                  Transparent scope aligned to active team units, data ingress volume, and high-availability SLAs.
                </p>
              </div>

              <div class="p-4 rounded-xl border border-white/[0.06] bg-[#070b10] space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-white font-semibold text-xs">Continuous Operational SLAs</span>
                  <span class="font-mono text-[10px] text-brand">STAGE 03</span>
                </div>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  Guaranteed uptime, dedicated architectural guidance, and ongoing platform updates without surprise overhead.
                </p>
              </div>
            </div>

            <div class="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>ZERO VENDOR LOCK-IN</span>
              <span class="text-brand font-semibold">OPEN API INTERFACES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
