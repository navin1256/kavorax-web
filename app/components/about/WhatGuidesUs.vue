<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Compass,
  Cpu,
  Layers,
  Scale,
  CheckCircle2,
  ShieldCheck
} from 'lucide-vue-next'

const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })

const principles = [
  {
    id: 'business-first',
    num: '01',
    code: 'PRIN_01',
    title: 'Business Context Before Code',
    subtitle: 'Pragmatic Purpose',
    icon: Compass,
    description:
      'We never deploy technology for novelty. Every architecture decision, data pipeline, and API endpoint must solve an identifiable operational challenge.',
    quote: 'Software exists to serve business outcomes, not to showcase abstract complexity.',
    commitment: 'Direct business alignment verified before implementation'
  },
  {
    id: 'connected-systems',
    num: '02',
    code: 'PRIN_02',
    title: 'Coherence Over Fragmentation',
    subtitle: 'Connected Operations',
    icon: Layers,
    description:
      'Isolated tools create friction, redundant data entry, and visibility blind spots. We engineer platforms where workflows, telemetry, and departments operate in harmony.',
    quote: 'The value of technology compounds when systems communicate reliably.',
    commitment: 'Seamless data flow and integration standards'
  },
  {
    id: 'honest-engineering',
    num: '03',
    code: 'PRIN_03',
    title: 'Honest, Dependable Engineering',
    subtitle: 'Responsible Architecture',
    icon: Scale,
    description:
      'We reject hyperbole and fragile prototypes. Our solutions emphasize transparent documentation, auditable security boundaries, and modular longevity.',
    quote: 'True dependability is proven through reliable uptime and clear documentation.',
    commitment: 'Clear documentation and verifiable audit trails'
  },
  {
    id: 'sustainable-growth',
    num: '04',
    code: 'PRIN_04',
    title: 'Designed for Sustainable Scale',
    subtitle: 'Long-Term Durability',
    icon: Cpu,
    description:
      'Scalability should not require destabilizing rewrites. We design modular foundations capable of expanding with transaction volumes while keeping operational overhead low.',
    quote: 'Sustainable growth is built on modular, maintainable software foundations.',
    commitment: 'High-availability architecture built for expansion'
  }
]
</script>

<template>
  <section
    id="guiding-principles"
    ref="targetRef"
    class="py-24 md:py-36 bg-[#080c10] bg-technical-grid border-b border-white/[0.08] relative overflow-hidden"
  >
    <!-- Ambient emerald backlight glow -->
    <div
      class="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-brand/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <ChapterLabel label="Our Principles" />
        <div class="flex items-center gap-4 text-xs text-zinc-400">
          <span class="text-zinc-300">Core Values</span>
        </div>
      </div>

      <!-- Section Title Area -->
      <div
        class="max-w-3xl space-y-4 mb-20 reveal-base transition-editorial duration-700 delay-100"
        :class="{ 'is-revealed': isRevealed }"
      >
        <WordReveal
          text="What guides us: Pragmatic values."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
          :italic-words="['Pragmatic', 'values.']"
          :delay="100"
        />
        <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
          Four foundational principles inform our engineering decisions, client collaborations,
          and long-term architectural standards.
        </p>
      </div>

      <!-- 4 Principles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-ui">
        <div
          v-for="(item, pIdx) in principles"
          :key="item.id"
          class="rounded-2xl border border-white/[0.08] bg-[#0c131e]/90 p-8 sm:p-10 backdrop-blur-xl hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.16)] relative reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isRevealed }"
          :style="{ transitionDelay: isRevealed ? `${pIdx * 90 + 100}ms` : '0ms' }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <!-- Top Row -->
          <div>
            <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
              <div class="flex items-center gap-3.5">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#111a26] border border-white/10 text-brand group-hover:scale-105 transition-transform">
                  <component :is="item.icon" class="h-5 w-5" />
                </div>
                <div>
                  <span class="text-xs text-brand font-medium block">{{ item.subtitle }}</span>
                  <div class="text-[11px] text-zinc-400">Guiding Principle</div>
                </div>
              </div>
              <span class="font-editorial text-4xl sm:text-5xl font-semibold text-zinc-600 group-hover:text-brand transition-colors">
                {{ item.num }}
              </span>
            </div>

            <!-- Title & Narrative -->
            <div class="mt-6 space-y-3">
              <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors">
                {{ item.title }}
              </h3>
              <p class="font-ui text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Bottom Quote & Commitment Tag -->
          <div class="mt-8 pt-5 border-t border-white/[0.06] space-y-3">
            <div class="font-editorial italic text-base text-zinc-200">
              "{{ item.quote }}"
            </div>
            <div class="flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
              <span>{{ item.commitment }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Authenticity Guarantee -->
      <div class="mt-16 rounded-xl border border-white/[0.06] bg-[#0c141f]/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-ui text-xs text-zinc-400">
        <div class="flex items-center gap-2.5">
          <ShieldCheck class="h-4 w-4 text-brand shrink-0" />
          <span>Every principle represents practical engineering commitments implemented directly across KavoraX platforms.</span>
        </div>
        <span class="text-zinc-400 shrink-0 font-medium">
          Guaranteed Transparency
        </span>
      </div>
    </div>
  </section>
</template>
