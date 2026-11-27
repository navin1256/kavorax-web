<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Calendar, ArrowRight, Layers } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(sectionRef, {
  threshold: 0.18,
  delay: 50
})
</script>

<template>
  <section
    ref="sectionRef"
    class="py-16 md:py-24 bg-transparent bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Subtle Ambient Glow with Atmospheric Drift -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <!-- Container Card with Progressive Reveal -->
      <div
        class="rounded-3xl border border-white/10 bg-[#0c141e]/40 backdrop-blur-md bg-technical-grid p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl corner-crosshair group reveal-card transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <!-- Active Theory Corner Crosshairs -->

        <!-- Chapter Label -->
        <div
          class="flex justify-center mb-8 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isRevealed }"
        >
          <ChapterLabel label="Schedule a Briefing" />
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          text="Let’s Move Your Business Forward."
          as="h2"
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white"
          :delay="120"
        />

        <!-- Supporting text -->
        <p
          class="mt-6 font-ui text-base sm:text-lg font-normal leading-[1.65] text-white/75 max-w-2xl mx-auto"
          :class="{ 'is-revealed': isRevealed }"
        >
          Start a conversation about your business goals and technology needs with our solutions team.
        </p>

        <!-- Action CTAs with Staggered Entrance -->
        <div
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isRevealed }"
        >
          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-colors duration-200 group/btn"
            >
              <Calendar class="mr-2 h-4 w-4" />
              <span>Book an Executive Demo</span>
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
        <div
          class="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 reveal-base transition-editorial duration-700 delay-400"
          :class="{ 'is-revealed': isRevealed }"
        >
          <span>KAVORAX GLOBAL PRIVATE LIMITED</span>
          <span class="text-zinc-400 font-ui text-[11px]">Enterprise Technology & Operations · Direct Advisory</span>
          <span class="text-brand">CONFIDENTIAL REVIEW</span>
        </div>
      </div>
    </div>
  </section>
</template>
