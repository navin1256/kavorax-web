<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowRight, Mail, ShieldCheck, CheckCircle2 } from 'lucide-vue-next'

const ctaCardRef = ref<HTMLElement | null>(null)
const { isRevealed: isCtaRevealed } = useScrollReveal(ctaCardRef, { threshold: 0.12 })
</script>

<template>
  <section
    class="py-16 md:py-24 bg-transparent bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Cinematic Ambient Depth Lighting with Drift -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[380px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 right-1/4 w-[360px] h-[360px] ambient-glow-cyan rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <!-- Subtle Tech Grid -->
    <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        ref="ctaCardRef"
        class="rounded-3xl border border-white/[0.1] bg-[#0c141e]/40 backdrop-blur-md bg-technical-grid p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden shadow-xl reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isCtaRevealed }"
      >
        <!-- Corner Crosshairs inspired by Active Theory -->

        <!-- Top Chapter & Status Tag -->
        <div class="flex justify-center mb-6">
          <ChapterLabel label="Get Started" />
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          as="h2"
          text="Let's Build a More Connected Business."
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white max-w-3xl mx-auto"
        />

        <!-- Supporting Copy -->
        <p
          class="mt-6 font-ui text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Tell us about your requirements and start a conversation with KavoraX.
        </p>

        <!-- Action CTAs -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-colors duration-200 group"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/10 bg-[#111a26]/60 hover:bg-[#111a26] text-zinc-200 hover:text-white px-8 py-6 text-base transition-colors"
            >
              <Mail class="mr-2 h-4 w-4 text-brand" />
              <span>Book an Architecture Demo</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Verification Indicators Footer -->
        <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-3.5 w-3.5 text-brand" />
            <span>CONFIDENTIAL ARCHITECTURAL REVIEW</span>
          </div>

          <div class="flex items-center gap-2">
            <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
            <span>ZERO DATA RESIDENCY COMPROMISE</span>
          </div>

          <div class="text-zinc-500">
            KavoraX Global Private Limited
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

