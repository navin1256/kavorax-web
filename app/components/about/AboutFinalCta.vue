<script setup lang="ts">
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { ArrowRight, Layers, ShieldCheck, Cpu } from 'lucide-vue-next'
</script>

<template>
  <section
    class="py-24 md:py-36 bg-[#0b0f14] border-t border-white/[0.06] relative overflow-hidden"
  >
    <!-- Subtle Ambient Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand/5 blur-[140px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-3xl border border-white/10 bg-[#0c141e]/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group"
      >
        <!-- Active Theory Corner Crosshairs -->
        <div class="absolute top-4 left-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-4 right-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 left-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 right-4 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <!-- Chapter Label -->
        <div class="flex justify-center mb-8">
          <ChapterLabel
            index="CHAPTER 06"
            label="INITIATE DIALOGUE"
            sublabel="PARTNERSHIP & COLLABORATION"
          />
        </div>

        <!-- Headline -->
        <h2
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
        >
          Let's Move Your
          <span class="italic font-light text-brand">Business Forward</span>.
        </h2>

        <!-- Supporting Copy -->
        <p
          class="mt-6 font-editorial text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Explore how connected business solutions could support your organisation's needs.
        </p>

        <!-- Enterprise Assurance Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
          <span class="flex items-center gap-1.5">
            <Cpu class="h-3.5 w-3.5 text-brand" />
            <span>Architecture-First Review</span>
          </span>
          <span class="text-zinc-600 hidden sm:inline">•</span>
          <span class="flex items-center gap-1.5">
            <ShieldCheck class="h-3.5 w-3.5 text-brand" />
            <span>No Forced Migrations</span>
          </span>
          <span class="text-zinc-600 hidden sm:inline">•</span>
          <span class="flex items-center gap-1.5 text-zinc-300">
            <span class="h-1.5 w-1.5 rounded-full bg-brand" />
            <span>Direct Technical Leadership</span>
          </span>
        </div>

        <!-- Action CTAs -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-all duration-200 group/btn"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/products" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/10 bg-[#111a26]/60 hover:bg-[#111a26] text-zinc-200 hover:text-white px-7 py-6 text-base transition-colors"
            >
              <Layers class="mr-2 h-4 w-4 text-brand" />
              <span>Explore Platform Products</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Corporate Attribution Footer -->
        <div class="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <span>KAVORAX GLOBAL PRIVATE LIMITED</span>
          <span class="text-zinc-400 font-ui text-[11px]">Enterprise Technology & Operations · Verified Corporate Entity</span>
          <span class="text-brand">AUDITED ARCHITECTURE</span>
        </div>
      </div>
    </div>
  </section>
</template>
