<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  MonitorCheck,
  RefreshCw,
  Headphones,
  Check,
  ArrowRight
} from 'lucide-vue-next'

const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })

interface ImplementationCard {
  id: string
  tag: string
  icon: any
  title: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  footerText: string
}

const cards: ImplementationCard[] = [
  {
    id: 'deployment',
    tag: 'Hardware Agnostic',
    icon: MonitorCheck,
    title: 'Customized Station Deployment',
    description: 'Configured to match your exact floor plan and hardware—connecting touch terminals, barcode scanners, cash drawers, and kitchen screens.',
    image: '/images/solutions/adaptability.webp',
    imageAlt: 'KavoraX multi-device station deployment across POS, tablet, and mobile',
    features: [
      'Android, Windows & iOS compatible',
      'Direct USB, LAN & Bluetooth printer routing',
      'Single or multi-lane counter setup'
    ],
    footerText: 'Zero proprietary hardware lock-in'
  },
  {
    id: 'rollout',
    tag: 'Safe Transition',
    icon: RefreshCw,
    title: 'Smooth, Zero-Disruption Rollout',
    description: 'Import your entire catalog, pricing tiers, and vendor lists overnight. Run in parallel with existing registers so sales never pause.',
    image: '/images/solutions/workflow.webp',
    imageAlt: 'Retail store staff operating modern point of sale counter during daily business',
    features: [
      'One-click bulk inventory & menu import',
      'Zero interruption to daily sales & billing',
      '15-minute staff onboarding curve'
    ],
    footerText: 'Guaranteed business continuity'
  },
  {
    id: 'support',
    tag: 'Priority Assistance',
    icon: Headphones,
    title: 'Dedicated Operational Support',
    description: 'Every rollout is paired with an onboarding specialist who handles station configuration, menu mapping, and peak-hour launch assistance.',
    image: '/images/solutions/automation.webp',
    imageAlt: 'Kitchen display system and staff managing order prep tickets seamlessly',
    features: [
      'Assigned rollout specialist',
      'Priority live phone & WhatsApp support',
      'Continuous system & security updates'
    ],
    footerText: 'Available 7 days a week'
  }
]
</script>

<template>
  <section
    ref="targetRef"
    class="py-14 md:py-20 bg-transparent border-t border-white/[0.08] relative overflow-hidden"
  >
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <div class="max-w-2xl space-y-3">
          <ChapterLabel label="Tailored Implementation" />
          <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Solutions that adapt to how you work.
          </h2>
          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We don't force one-size-fits-all software. KavoraX configures directly around your physical floor plan, existing hardware, and daily operational rhythm.
          </p>
        </div>

        <NuxtLink to="/solutions" class="shrink-0 font-ui">
          <span class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10b981] hover:bg-[#22d97a] text-[#07070b] font-semibold text-xs font-mono transition-colors shadow-sm">
            <span>Explore All Solutions</span>
            <ArrowRight class="h-3.5 w-3.5" />
          </span>
        </NuxtLink>
      </div>

      <!-- 3-Column Real Operational Cards Grid -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 font-ui">
        <div
          v-for="card in cards"
          :key="card.id"
          class="group rounded-2xl border border-white/10 bg-[#0c141e] hover:border-emerald-500/35 transition-all duration-200 shadow-lg flex flex-col justify-between overflow-hidden"
        >
          <div>
            <!-- Photographic Header Frame (16:10 Ratio) -->
            <div class="relative aspect-[16/10] w-full overflow-hidden bg-[#070b10]">
              <img
                :src="card.image"
                :alt="card.imageAlt"
                loading="lazy"
                decoding="async"
                width="640"
                height="400"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c141e] via-[#0c141e]/30 to-transparent pointer-events-none" />

              <!-- Top Category Tag Badge -->
              <div class="absolute top-3.5 left-3.5">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#0b0f14]/85 text-emerald-400 border border-emerald-500/25 backdrop-blur-sm">
                  <component :is="card.icon" class="h-3.5 w-3.5" />
                  <span>{{ card.tag }}</span>
                </span>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="p-5 sm:p-6 space-y-3.5">
              <h3 class="font-ui text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                {{ card.title }}
              </h3>
              <p class="text-sm text-zinc-300 leading-relaxed font-normal">
                {{ card.description }}
              </p>

              <!-- Concrete Capability Bullets -->
              <div class="pt-2 space-y-2 text-xs font-ui text-zinc-300">
                <div
                  v-for="feature in card.features"
                  :key="feature"
                  class="flex items-start gap-2.5"
                >
                  <div class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check class="h-2.5 w-2.5" />
                  </div>
                  <span class="leading-tight">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Operational Strip -->
          <div class="p-5 sm:p-6 pt-3.5 border-t border-white/[0.06] bg-[#0c141e]">
            <div class="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>{{ card.footerText }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
