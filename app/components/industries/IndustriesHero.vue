<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import {
  ArrowRight,
  ArrowDown,
  Building2,
  Landmark,
  Activity,
  Truck,
  Radio,
  ShieldCheck
} from 'lucide-vue-next'

const { isRevealed: isHeroMounted } = useScrollReveal({ immediate: true })

const scrollToSectors = () => {
  const el = document.getElementById('industry-overview')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Visual Striking Photographic Hero with Multi-Stop Vignette -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src="/images/global-connectivity.webp"
        alt="Connected global industries and infrastructure"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        width="1920"
        height="1080"
        class="w-full h-full object-cover object-center opacity-25 scale-105 animate-hero-drift"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/95 to-[#080c10]/70" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/70 to-[#080c10]/40" />
      <div class="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-brand/[0.05] blur-[160px] rounded-full animate-ambient-drift" />
      <div class="absolute inset-0 bg-tech-grid opacity-40" />
    </div>

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- HUD Telemetry Header Bar -->
      <div
        class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroMounted }"
      >
        <div class="flex items-center gap-3">
          <ChapterLabel
            index="CHAPTER 01"
            label="INDUSTRY ARCHITECTURES"
            sublabel="VERIFIED OPERATING DOMAINS"
          />
        </div>

        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="hidden md:inline-flex items-center gap-1.5">
            <Radio class="h-3 w-3 text-brand animate-pulse-subtle" />
            <span>VERTICAL INTEGRATION: <strong class="text-white font-mono">NOMINAL</strong></span>
          </span>
          <span class="text-zinc-600 hidden md:inline">|</span>
          <span>4 SECTOR FRAMEWORKS</span>
          <span class="text-zinc-600">|</span>
          <span class="text-zinc-400 font-mono">[ 01 // OVERVIEW ]</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        <!-- Left: Editorial Headline & Copy -->
        <div class="lg:col-span-7 space-y-7">
          <!-- Subtle Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>INDUSTRIES</span>
          </div>

          <!-- Hero Headline with WordReveal -->
          <WordReveal
            text="Technology for the Industries Moving Business Forward."
            as="h1"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
            :italic-words="['Moving', 'Business', 'Forward.']"
            :delay="240"
            :immediate="true"
          />

          <!-- Hero Supporting Copy: Reverted to Inter font-ui -->
          <p
            class="font-ui text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            Every industry has distinct operational needs. KavoraX builds connected business solutions
            designed to help organisations improve visibility, streamline operations and adapt as
            they grow.
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
                <span>Discuss Your Industry Needs</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <button
              type="button"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-zinc-200 hover:text-white transition-colors group border border-white/10 rounded-md bg-[#111a26]/60 hover:bg-[#111a26] cursor-pointer"
              @click="scrollToSectors"
            >
              <span>Explore Sectors</span>
              <ArrowDown class="h-4 w-4 text-brand group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <!-- Quick Sector Navigation Chips -->
          <div
            class="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-800"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <a href="#enterprise-tech" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Building2 class="h-3.5 w-3.5 text-brand" />
              <span>Technology &amp; SaaS</span>
            </a>
            <a href="#financial-services" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Landmark class="h-3.5 w-3.5 text-brand" />
              <span>Financial Services</span>
            </a>
            <a href="#healthcare" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Activity class="h-3.5 w-3.5 text-brand" />
              <span>Healthcare</span>
            </a>
            <a href="#supply-chain" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Truck class="h-3.5 w-3.5 text-brand" />
              <span>Logistics</span>
            </a>
          </div>
        </div>

        <!-- Right: Asymmetric Mosaic / Photographic Hero Canvas -->
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
            class="relative rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <!-- Corner Crosshairs inspired by Active Theory -->
            <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Header -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span class="font-mono text-xs font-semibold text-white tracking-wider">
                DOMAINS OF OPERATION
              </span>
              <span class="font-mono text-[10px] text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                FIELD TESTED
              </span>
            </div>

            <!-- Photographic Hero Inset -->
            <div class="my-5 relative h-60 rounded-xl overflow-hidden border border-white/[0.08] group">
              <img
                src="/images/fintech-headquarters.webp"
                alt="Institutional enterprise environment"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="600"
                height="240"
                class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-opacity"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c141e] via-[#0c141e]/40 to-transparent" />
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span class="text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>CRITICAL INFRASTRUCTURE</span>
                </span>
                <span class="text-zinc-400">SOC2 / ISO COMPLIANT</span>
              </div>
            </div>

            <p class="font-ui text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Every vertical demands distinct compliance, transaction velocity, and system integration patterns. We architect software that aligns with these operating realities.
            </p>

            <div class="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span class="flex items-center gap-1.5">
                <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                <span>INDEPENDENT DOMAIN ALIGNMENT</span>
              </span>
              <span class="text-emerald-400">4 SECTORS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
