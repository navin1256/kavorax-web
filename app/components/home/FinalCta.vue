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
    class="py-24 md:py-36 bg-[#080c10] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Cinematic Emerald Lighting Halo -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-3xl border border-white/10 bg-[#0c141e]/90 p-6 sm:p-12 lg:p-16 text-center relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] corner-crosshair group reveal-base"
        :class="{ 'is-revealed': isRevealed }"
      >
        <!-- Chapter Eyebrow -->
        <div class="flex justify-center mb-8 reveal-base delay-75" :class="{ 'is-revealed': isRevealed }">
          <ChapterLabel index="07" label="INITIATE COLLABORATION" sublabel="ENTERPRISE ADVISORY" />
        </div>

        <!-- Headline: Expressive closing typography reveal -->
        <WordReveal
          text="Ready to move your business forward?"
          as="h2"
          highlight="forward"
          highlight-class="italic font-light text-brand"
          :threshold="0.15"
          :base-delay-ms="180"
          :stagger-ms="55"
          class="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-white leading-[1.08] max-w-3xl mx-auto text-balance"
        />

        <!-- Subheading -->
        <p
          class="mt-6 font-ui text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal reveal-base delay-250"
          :class="{ 'is-revealed': isRevealed }"
        >
          Schedule an architectural walkthrough with KavoraX technology leaders to examine our connected solutions, system topology, and deployment roadmaps.
        </p>

        <!-- CTAs -->
        <div
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base delay-350"
          :class="{ 'is-revealed': isRevealed }"
        >
          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
            >
              <span>Book an Architectural Demo</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-7 py-6 text-base rounded-md transition-colors"
            >
              <Mail class="mr-2 h-4 w-4 text-brand" />
              <span>Contact Solutions Team</span>
            </Button>
          </NuxtLink>
        </div>

        <div
          class="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400 reveal-base delay-400"
          :class="{ 'is-revealed': isRevealed }"
        >
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-3.5 w-3.5 text-brand" />
            <span>CONFIDENTIAL ARCHITECTURAL BRIEFING</span>
          </div>
          <span class="text-zinc-600 hidden sm:inline">·</span>
          <span>NO VENDOR LOCK-IN</span>
          <span class="text-zinc-600 hidden sm:inline">·</span>
          <span>ENTERPRISE SLA VERIFIED</span>
        </div>
      </div>
    </div>
  </section>
</template>
