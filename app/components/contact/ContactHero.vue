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

const isHeroMounted = ref(true)
</script>

<template>
  <section class="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-transparent border-b border-white/[0.08]">
    <!-- Ambient emerald backlight glow with subtle atmospheric drift -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
      <!-- Main Editorial Headline & Introduction Spread -->
      <div class="max-w-4xl space-y-7">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] px-4 py-1.5 text-xs sm:text-[13px] font-ui text-emerald-400 font-medium tracking-normal reveal-base transition-editorial duration-700 delay-150"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-subtle" />
          <span>Start a Conversation</span>
        </div>

        <!-- Headline with WordReveal -->
        <WordReveal
          text="Let’s Start a Conversation."
          as="h1"
          class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
          :italic-words="['Conversation.']"
          :delay="240"
          :immediate="true"
        />

        <!-- Supporting Text -->
        <p
          class="font-ui text-base sm:text-lg font-normal leading-[1.65] text-white/75 max-w-2xl reveal-base transition-editorial duration-700 delay-500"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          Tell us about your venues, current software systems, and operational requirements.
          Let’s discuss how KavoraX can support your team.
        </p>

        <!-- Narrative Context -->
        <p
          class="font-ui text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed reveal-base transition-editorial duration-700 delay-600"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          Technology discussions should be direct and focused on real-world workflows.
          You’ll speak directly with product specialists who understand counter checkout speed,
          kitchen routing, offline resilience, and multi-branch rollouts.
        </p>

        <!-- Action CTAs -->
        <div
          class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <a href="#inquiry-form" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-colors duration-200 group"
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
