<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import {
  ArrowDown,
  Calendar,
  ShieldCheck,
  UserCheck,
  Cpu
} from 'lucide-vue-next'

const isHeroMounted = ref(false)

onMounted(() => {
  isHeroMounted.value = true
})
</script>

<template>
  <section class="relative pt-20 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Ambient emerald backlight glow with subtle atmospheric drift -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Editorial Eyebrow & Corporate Coordinate Header -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-14 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroMounted }"
      >
        <ChapterLabel
          index="CHAPTER 01"
          label="DIRECT ENGAGEMENT"
          sublabel="KAVORAX GLOBAL PRIVATE LIMITED"
        />
        <div class="flex items-center gap-6 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            CONFIDENTIAL ADVISORY
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">DIRECT TECHNICAL LEADERSHIP</span>
        </div>
      </div>

      <!-- Main Editorial Headline & Introduction Spread -->
      <div class="max-w-4xl space-y-7">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
          <span>START A CONVERSATION</span>
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          text="Let’s Start a Conversation."
          as="h1"
          class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
          :italic-words="['Conversation.']"
          :delay="240"
          :immediate="true"
        />

        <!-- Supporting Text (Corrected to font-ui font-light) -->
        <p
          class="font-ui text-xl sm:text-2xl text-zinc-300 leading-relaxed font-light reveal-base transition-editorial duration-700 delay-500"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          Tell us about your business, your challenges, and what you’re looking to achieve.
          Let’s explore how KavoraX can help move your business forward.
        </p>

        <!-- Narrative Context -->
        <p
          class="font-ui text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed reveal-base transition-editorial duration-700 delay-600"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          Enterprise technology discussions should be straightforward, thoughtful, and grounded in operational reality.
          We operate without high-pressure sales funnels—connecting you directly with solution specialists who understand
          interoperable systems, data governance, and long-term business objectives.
        </p>

        <!-- Action CTAs -->
        <div
          class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <a href="#inquiry-form" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
            >
              <span>Send an Inquiry</span>
              <ArrowDown class="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </a>

          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
            >
              <Calendar class="mr-2 h-4 w-4 text-brand" />
              <span>Book an Executive Demo</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- 3 Approachable Principles Strip with Individual Staggered Card Entrance -->
        <div class="pt-12 mt-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 font-ui">
          <div
            class="rounded-xl border border-white/[0.06] bg-[#0c131d]/60 p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
            :class="{ 'is-revealed': isHeroMounted }"
            :style="{ transitionDelay: isHeroMounted ? '750ms' : '0ms' }"
          >
            <div class="flex items-center gap-2.5 text-white font-medium text-sm">
              <UserCheck class="h-4 w-4 text-brand shrink-0" />
              <span>Direct Architect Access</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Discussions are reviewed directly by technical solution specialists rather than sales SDRs.
            </p>
          </div>

          <div
            class="rounded-xl border border-white/[0.06] bg-[#0c131d]/60 p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
            :class="{ 'is-revealed': isHeroMounted }"
            :style="{ transitionDelay: isHeroMounted ? '850ms' : '0ms' }"
          >
            <div class="flex items-center gap-2.5 text-white font-medium text-sm">
              <ShieldCheck class="h-4 w-4 text-brand shrink-0" />
              <span>Strict Confidentiality</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              All shared business contexts, system schemas, and operational requirements remain confidential.
            </p>
          </div>

          <div
            class="rounded-xl border border-white/[0.06] bg-[#0c131d]/60 p-5 space-y-2 relative group hover:border-brand/30 transition-colors reveal-card transition-editorial duration-700"
            :class="{ 'is-revealed': isHeroMounted }"
            :style="{ transitionDelay: isHeroMounted ? '950ms' : '0ms' }"
          >
            <div class="flex items-center gap-2.5 text-white font-medium text-sm">
              <Cpu class="h-4 w-4 text-brand shrink-0" />
              <span>Pragmatic Guidance</span>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Objective evaluation of architectural compatibility with zero pressure for unnecessary replacements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
