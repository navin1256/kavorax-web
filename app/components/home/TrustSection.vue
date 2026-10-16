<script setup lang="ts">
import { Network, ShieldCheck, Cpu } from 'lucide-vue-next'

const commitments = [
  {
    icon: Network,
    number: '01',
    title: 'Interconnected by Design',
    description:
      'Eliminating organizational and system silos through unified business solution architecture.'
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Zero-Compromise Security',
    description:
      'Rigorous cryptographic protection, strict compliance protocols, and continuous authorization.'
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Engineered for Scale',
    description:
      'Resilient foundation built to handle enterprise transaction volume and organizational growth.'
  }
]
</script>

<template>
  <section class="py-24 md:py-32 border-y border-white/[0.06] bg-[#080c10] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Minimal Editorial Brand Statement -->
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <div
          class="inline-flex items-center gap-2 text-xs font-ui font-semibold uppercase tracking-widest text-brand"
        >
          The KavoraX Standard
        </div>

        <blockquote
          class="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-snug"
        >
          “We believe enterprise technology should empower organizations to operate with absolute
          clarity, interconnect critical operations, and scale with unwavering durability.”
        </blockquote>

        <p class="font-editorial text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          KavoraX Global Private Limited is dedicated to engineering dependable, connected
          technology solutions that transform enterprise complexity into measurable agility.
        </p>
      </div>

      <!-- Architectural Pillars with Fine Dividers -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto font-ui">
        <div
          v-for="item in commitments"
          :key="item.title"
          class="relative p-7 sm:p-8 rounded-xl border border-white/[0.07] bg-[#0c131d]/70 hover:border-brand/35 transition-all duration-300 group flex flex-col justify-between corner-crosshair"
        >
          <div>
            <div class="flex items-center justify-between pb-5 border-b border-white/[0.06]">
              <span class="font-mono text-xs text-brand font-semibold">[ {{ item.number }} ]</span>
              <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-brand group-hover:bg-brand/10 transition-colors"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </div>
            </div>

            <div class="mt-6 space-y-2">
              <h3 class="font-editorial text-2xl font-semibold text-white leading-snug">
                {{ item.title }}
              </h3>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-white/[0.05] text-[10px] text-zinc-500 font-mono flex justify-between">
            <span>ARCHITECTURAL STANDARD</span>
            <span class="text-brand">VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
