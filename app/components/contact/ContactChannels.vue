<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { Mail, Calendar, Layers, ArrowRight } from 'lucide-vue-next'

const channels = [
  {
    title: 'General Inquiries',
    icon: Mail,
    code: 'CHANNEL_01',
    category: 'Direct Communication',
    description: 'Reach our team directly for business, partnership, and corporate inquiries.',
    contactText: 'contact@kavorax.com',
    link: 'mailto:contact@kavorax.com',
    linkLabel: 'Email Directly'
  },
  {
    title: 'Demo & Technical Walkthrough',
    icon: Calendar,
    code: 'CHANNEL_02',
    category: 'Executive Briefing',
    description: 'Schedule a structured 45-minute technical briefing with our systems architects.',
    contactText: 'Executive Walkthrough Request',
    link: '/demo',
    linkLabel: 'Book a Demo'
  },
  {
    title: 'Solutions Architecture',
    icon: Layers,
    code: 'CHANNEL_03',
    category: 'Platform Exploration',
    description: 'Explore our Operations Platform, Analytics & Insights, and Integration Hub.',
    contactText: 'Connected Enterprise Platform',
    link: '/products',
    linkLabel: 'Explore Solutions'
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.08] overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with ChapterLabel -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 font-mono text-xs text-zinc-400">
        <ChapterLabel
          index="CHAPTER 03"
          label="ENGAGEMENT OPTIONS"
          sublabel="VERIFIED CHANNELS"
        />
        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            OFFICIAL ADVISORY
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">AUTHENTIC DIRECT REACH</span>
        </div>
      </div>

      <!-- Section Title Area -->
      <div class="max-w-3xl space-y-4 mb-16">
        <h2
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
        >
          Verified Channels for
          <span class="italic font-light text-brand">Enterprise Dialogue</span>.
        </h2>
        <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed font-normal">
          Select the channel that best matches your timeline, preferred communication style, and
          organizational prerequisites.
        </p>
      </div>

      <!-- 3 Channels Grid with Restrained Refinement -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 font-ui">
        <div
          v-for="ch in channels"
          :key="ch.title"
          class="rounded-2xl border border-white/10 bg-[#0c141e]/90 p-8 sm:p-10 backdrop-blur-xl hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.16)] relative"
        >
          <!-- Active Theory Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <div>
            <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
              <div class="flex items-center gap-3.5">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#121c29] border border-white/10 text-brand group-hover:scale-105 transition-transform"
                >
                  <component :is="ch.icon" class="h-5 w-5" />
                </div>
                <div>
                  <span class="font-mono text-xs text-brand uppercase tracking-wider block">{{ ch.category }}</span>
                  <div class="font-mono text-[10px] text-zinc-500">{{ ch.code }}</div>
                </div>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <h3
                class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors leading-snug"
              >
                {{ ch.title }}
              </h3>
              <p class="font-ui text-sm text-zinc-400 leading-relaxed font-normal">
                {{ ch.description }}
              </p>
            </div>

            <div class="mt-6 pt-5 border-t border-white/[0.06] font-ui">
              <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Primary Channel
              </span>
              <span class="text-xs text-white font-mono font-medium mt-1 block">
                {{ ch.contactText }}
              </span>
            </div>
          </div>

          <div class="pt-8 border-t border-white/[0.06] mt-8 font-ui">
            <NuxtLink
              :to="ch.link"
              class="inline-flex items-center justify-between w-full py-1 text-xs font-semibold text-brand hover:text-white transition-colors group/link"
            >
              <span>{{ ch.linkLabel }}</span>
              <ArrowRight
                class="h-4 w-4 text-brand group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
