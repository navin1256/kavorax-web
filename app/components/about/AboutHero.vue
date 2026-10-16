<script setup lang="ts">
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { ArrowRight, Building2, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Ambient emerald backlight glow -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Editorial Eyebrow & Coordinate Metadata Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-12 font-mono text-xs text-zinc-400">
        <div class="inline-flex items-center gap-2.5">
          <ChapterLabel
            index="CHAPTER 01"
            label="EDITORIAL ARCHIVE"
            sublabel="ABOUT KAVORAX"
          />
        </div>
        <div class="flex items-center gap-6 text-[10px] text-zinc-400">
          <span>CORP: <strong class="text-white font-mono">KAVORAX GLOBAL PRIVATE LIMITED</strong></span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">CONNECTED SYSTEMS ARCHITECTURE</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <!-- Left Column: Oversized Editorial Typography & Purpose -->
        <div class="lg:col-span-7 space-y-7">
          <!-- Subtle Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>ABOUT US</span>
          </div>

          <h1
            class="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-normal tracking-[-0.03em] text-white leading-[1.02] text-balance-editorial"
          >
            Building Technology That
            <span class="italic font-light text-brand">Moves Business Forward</span>.
          </h1>

          <p class="font-editorial text-xl sm:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
            KavoraX builds connected business solutions that help organisations operate smarter,
            improve operational visibility, and scale with sustainable confidence.
          </p>

          <p class="font-ui text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
            We believe enterprise technology should bridge operational divides—linking fragmented
            processes, telemetry, and distributed departments into a synchronized and resilient whole.
          </p>

          <!-- Dual CTAs -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui">
            <NuxtLink to="/products" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Explore Platform Solutions</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
              >
                <span>Contact KavoraX</span>
                <ArrowRight class="ml-2 h-4 w-4 text-brand" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Editorial Chapter Navigation Strip -->
          <div class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-xl font-ui">
            <a href="#who-we-are" class="space-y-1 group block transition-all">
              <span class="font-mono text-[10px] text-brand tracking-widest uppercase flex items-center gap-1">
                <span>01 // ESSENCE</span>
                <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
              </span>
              <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Business at Core</div>
            </a>
            <a href="#our-approach" class="space-y-1 group block transition-all">
              <span class="font-mono text-[10px] text-brand tracking-widest uppercase flex items-center gap-1">
                <span>02 // METHOD</span>
                <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
              </span>
              <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Connected Parts</div>
            </a>
            <a href="#guiding-principles" class="space-y-1 group block transition-all">
              <span class="font-mono text-[10px] text-brand tracking-widest uppercase flex items-center gap-1">
                <span>03 // ETHIC</span>
                <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
              </span>
              <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Responsible Scale</div>
            </a>
          </div>
        </div>

        <!-- Right Column: Cinematic Architectural Photography Frame -->
        <div class="lg:col-span-5 relative">
          <!-- Subtle Backdrop Glow -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-60 pointer-events-none"
            aria-hidden="true"
          />

          <!-- Editorial Photography Frame with Fine-Line Graphics -->
          <div
            class="relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
          >
            <!-- Corner Crosshairs inspired by Active Theory -->
            <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Architectural Workspace Photograph -->
            <div class="relative h-96 sm:h-[460px] w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/architectural-workspace.jpg"
                alt="Modern enterprise architecture engineering workspace and design studio"
                loading="eager"
                class="h-full w-full object-cover img-editorial-zoom opacity-85 group-hover:opacity-100 transition-opacity"
              >
              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent"
              />

              <!-- Floating Metadata Ribbon -->
              <div class="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-zinc-300">
                <span class="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>STUDIO ARCHIVE</span>
                </span>
                <span class="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-brand">
                  SYSTEMS_ENGINEERING
                </span>
              </div>

              <!-- Editorial Caption Card -->
              <div class="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#0e1622]/90 backdrop-blur-md p-5 space-y-2">
                <div class="flex items-center justify-between font-ui text-xs">
                  <span class="text-brand font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 class="h-3.5 w-3.5 text-brand" />
                    KavoraX Global Private Limited
                  </span>
                  <span class="font-mono text-zinc-400 text-[10px]">VERIFIED</span>
                </div>
                <p class="font-editorial text-base text-zinc-200 italic leading-snug">
                  "Engineering enterprise platforms that unify fragmented software, workflows, and operational intelligence."
                </p>
                <div class="pt-2 flex items-center justify-between border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                  <span class="flex items-center gap-1 text-zinc-300">
                    <ShieldCheck class="h-3 w-3 text-brand" />
                    Auditable Systems
                  </span>
                  <span class="text-zinc-500">Zero Fabrications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
