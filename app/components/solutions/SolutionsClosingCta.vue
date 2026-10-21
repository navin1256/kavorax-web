<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { MessageSquare, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-vue-next'

const ctaRef = ref<HTMLElement | null>(null)
const { isRevealed: isCtaRevealed } = useScrollReveal(ctaRef, { threshold: 0.12 })
</script>

<template>
  <section
    class="py-28 md:py-36 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Cinematic Emerald Lighting Halo with Organic Drift -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand/[0.07] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-cyan-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        ref="ctaRef"
        class="rounded-3xl border border-white/[0.1] bg-[#0c141e]/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isCtaRevealed }"
      >
        <!-- Corner Crosshairs inspired by Active Theory -->
        <div class="absolute top-4 left-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-4 right-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 left-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 right-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <!-- Top Chapter Tag (Standardized to CHAPTER 06) -->
        <div class="flex justify-center mb-6">
          <ChapterLabel
            index="CHAPTER 06"
            label="SOLUTIONS ADVISORY"
            sublabel="CONSULTATIVE ENGAGEMENT"
          />
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          as="h2"
          text="Let’s Find the Right Way Forward."
          :italic-words="['Right', 'Way', 'Forward.']"
          class="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance-editorial max-w-3xl mx-auto"
        />

        <!-- Supporting text (Standardized to Inter font-ui) -->
        <p
          class="mt-6 font-ui text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Tell us about your business priorities and the challenges you want to address.
        </p>

        <!-- Dual Action Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
            >
              <MessageSquare class="mr-2 h-4 w-4" />
              <span>Talk to Our Team</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
            >
              <Calendar class="mr-2 h-4 w-4 text-brand" />
              <span>Book a Demo</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Verification Indicators Footer -->
        <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-3.5 w-3.5 text-brand" />
            <span>CONFIDENTIAL ARCHITECTURAL EVALUATION</span>
          </div>

          <div class="flex items-center gap-2">
            <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
            <span>ENTERPRISE COMPLIANCE RESPECTED</span>
          </div>

          <div class="text-zinc-500">
            NO VENDOR LOCK-IN
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
