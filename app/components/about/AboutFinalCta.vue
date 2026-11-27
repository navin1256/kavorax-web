<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowRight, Cpu, ShieldCheck, Layers } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(sectionRef, { threshold: 0.15 })
</script>

<template>
  <section
    id="about-cta"
    ref="sectionRef"
    class="py-12 md:py-16 bg-transparent bg-technical-grid relative overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-3xl border border-white/10 bg-[#0c141e]/40 backdrop-blur-md bg-technical-grid p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden shadow-2xl group reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <!-- Chapter Label -->
        <div class="flex justify-center mb-8">
          <ChapterLabel label="Work With Us" />
        </div>

        <!-- Headline -->
        <WordReveal
          text="Let's Build Better Operations Together."
          as="h2"
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white"
          :delay="120"
        />

        <!-- Supporting Copy -->
        <p
          class="mt-6 font-ui text-base sm:text-lg font-normal leading-[1.65] text-white/75 max-w-2xl mx-auto"
        >
          Explore how connected business solutions could support your organisation's needs.
        </p>

        <!-- Assurance Badges -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-ui text-zinc-400">
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
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-colors duration-200 group/btn"
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
        <div class="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-ui text-zinc-400">
          <span class="text-zinc-300 font-medium">KavoraX Global Private Limited</span>
          <span class="text-zinc-400 text-xs">Connected Technology &amp; Enterprise Solutions</span>
        </div>
      </div>
    </div>
  </section>
</template>

