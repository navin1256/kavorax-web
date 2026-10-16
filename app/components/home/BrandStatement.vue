<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { ShieldCheck, Network, Cpu } from 'lucide-vue-next'

const commitments = [
  {
    icon: Network,
    number: '01',
    title: 'Interoperability First',
    description:
      'We reject vendor lock-in. Every KavoraX system is engineered with open, standardized protocols designed to interface cleanly with existing enterprise infrastructure.'
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Zero-Compromise Security',
    description:
      'Cryptographic integrity and continuous authorization are embedded into every operational layer, from initial packet ingestion to persistent storage.'
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Durable Architecture',
    description:
      'Built for institutional longevity. Our platforms handle continuous high-throughput volume without compounding brittle technical debt.'
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#080c10] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden">
    <!-- Atmospheric Emerald Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Chapter Header -->
      <div class="pb-8 border-b border-white/[0.08] mb-16 flex items-center justify-between">
        <ChapterLabel index="06" label="THE KAVORAX STANDARD" sublabel="FOUNDATIONAL COMMITMENTS" />
        <div class="hidden sm:block font-mono text-xs text-zinc-400">
          INSTITUTIONAL CRITERIA
        </div>
      </div>

      <!-- Monumental Editorial Brand Quote -->
      <div class="max-w-5xl mx-auto text-center space-y-8 mb-20">
        <blockquote
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight"
        >
          “We believe enterprise technology should empower organisations to operate with
          <span class="italic font-light text-brand">absolute clarity</span>,
          interconnect critical operations, and scale with unwavering durability.”
        </blockquote>

        <p class="font-editorial text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
          KavoraX Global Private Limited is dedicated to engineering dependable, connected technology solutions that transform organizational complexity into measurable agility.
        </p>
      </div>

      <!-- Architectural Principles Ledger (Horizontal Continuum) -->
      <div class="rounded-2xl border border-white/10 bg-[#0c131e]/90 backdrop-blur-xl p-6 sm:p-8 md:p-12 font-ui divide-y divide-white/[0.08]">
        <div
          v-for="item in commitments"
          :key="item.title"
          class="py-8 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
        >
          <!-- Left: Number & Icon -->
          <div class="lg:col-span-3 flex items-center gap-4">
            <span class="font-mono text-sm font-semibold text-brand">
              {{ item.number }}
            </span>
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111a26] border border-white/10 text-brand group-hover:scale-105 transition-transform">
              <component :is="item.icon" class="h-5 w-5" />
            </div>
            <div class="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              Commitment
            </div>
          </div>

          <!-- Middle: Title -->
          <div class="lg:col-span-4">
            <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors">
              {{ item.title }}
            </h3>
          </div>

          <!-- Right: Description -->
          <div class="lg:col-span-5">
            <p class="font-ui text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
