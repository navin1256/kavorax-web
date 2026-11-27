<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowRight, Mail, ShieldCheck } from 'lucide-vue-next'

const ctaRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(ctaRef, { threshold: 0.15 })
</script>

<template>
  <section
    id="final-cta"
    ref="ctaRef"
    class="py-12 md:py-16 bg-transparent bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Cinematic Emerald Lighting Halo -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-3xl border border-white/10 bg-[#0c141e] p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden shadow-2xl corner-crosshair group reveal-base"
        :class="{ 'is-revealed': isRevealed }"
      >
        <!-- Eyebrow -->
        <div class="flex justify-center mb-8 reveal-base delay-75" :class="{ 'is-revealed': isRevealed }">
          <ChapterLabel label="Let's Build Something Better Together" />
        </div>

        <!-- Headline -->
        <WordReveal
          text="Ready to move your business forward?"
          as="h2"
          highlight="forward"
          highlight-class="not-italic font-bold text-emerald-400"
          :threshold="0.15"
          :base-delay-ms="180"
          :stagger-ms="55"
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white max-w-3xl mx-auto text-balance"
        />

        <!-- Subheading -->
        <p
          class="mt-6 font-ui text-base sm:text-lg font-normal leading-[1.65] text-white/75 max-w-2xl mx-auto reveal-base delay-250"
          :class="{ 'is-revealed': isRevealed }"
        >
          Schedule a walkthrough with our specialists to explore our connected solutions, system integrations, and implementation roadmap.
        </p>

        <!-- CTAs -->
        <div
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base delay-350"
          :class="{ 'is-revealed': isRevealed }"
        >
          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.45)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.65)] transition-colors duration-200 group"
            >
              <span>Book a Demo</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/20 bg-black/40 hover:bg-white/[0.08] text-white px-8 py-6 text-base rounded-md transition-colors duration-200"
            >
              <Mail class="mr-2 h-4 w-4 text-brand" />
              <span>Contact Our Team</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Trust Badges -->
        <div
          class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-ui reveal-base delay-450"
          :class="{ 'is-revealed': isRevealed }"
        >
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-4 w-4 text-brand" />
            <span>Secure &amp; Confidential</span>
          </div>
          <span class="text-zinc-600 hidden sm:inline">·</span>
          <div>Direct Specialist Consultation</div>
          <span class="text-zinc-600 hidden sm:inline">·</span>
          <div>No Vendor Lock-in</div>
        </div>
      </div>
    </div>
  </section>
</template>

