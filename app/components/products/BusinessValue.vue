<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { Gauge, Eye, TrendingUp, CheckCircle2 } from 'lucide-vue-next'

const values = [
  {
    index: '01',
    title: 'Operational Efficiency',
    subtitle: 'Streamlined Coordination',
    description:
      'Eliminate manual handoffs and cross-departmental friction by synchronizing workflows within a unified operational framework.',
    icon: Gauge,
    pillar: 'PROCESS AGILITY',
    metric: 'Zero-Wait Execution'
  },
  {
    index: '02',
    title: 'Greater Visibility',
    subtitle: 'Authoritative Insight',
    description:
      'Consolidate disjointed reporting streams into clear, connected telemetry—enabling technical and operational leaders to act with confident clarity.',
    icon: Eye,
    pillar: 'DATA TRANSPARENCY',
    metric: 'Live Event Stream'
  },
  {
    index: '03',
    title: 'Adaptable Growth',
    subtitle: 'Sustainable Architecture',
    description:
      'Expand system capabilities and integrate new enterprise touchpoints seamlessly, growing your technological footprint without compounding technical debt.',
    icon: TrendingUp,
    pillar: 'FUTURE READINESS',
    metric: 'Modular Expansion'
  }
]
</script>

<template>
  <section class="py-24 md:py-32 bg-[#0b0f14] border-t border-white/[0.08] relative">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl space-y-4">
        <ChapterLabel
          index="CHAPTER 04"
          label="ORGANIZATIONAL VALUE"
          sublabel="CORE ENGINEERING PRINCIPLES"
        />
        <h2 class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial">
          Designed Around the Way <span class="italic font-light text-brand">Businesses Work</span>.
        </h2>
        <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
          Enterprise software should reduce complexity rather than create it. KavoraX solutions are
          crafted around real-world business dynamics to deliver tangible, sustainable operational
          value.
        </p>
      </div>

      <!-- Architectural Value Continuum Ledger -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="item in values"
          :key="item.title"
          class="rounded-2xl border border-white/[0.08] bg-[#0c131c]/90 p-8 sm:p-10 flex flex-col justify-between hover:border-brand/35 transition-all duration-300 relative group shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <!-- Corner Crosshair -->
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

          <div>
            <!-- Top Ledger Index & Pillar -->
            <div class="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-brand font-semibold">{{ item.index }} //</span>
                <span class="font-mono text-[11px] text-zinc-400 tracking-wider uppercase">{{ item.pillar }}</span>
              </div>
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 text-brand"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </div>
            </div>

            <div class="font-mono text-xs text-brand font-medium tracking-wide uppercase">
              {{ item.subtitle }}
            </div>
            <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white mt-1.5">
              {{ item.title }}
            </h3>

            <p class="mt-4 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom Telemetry Metric -->
          <div class="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
            <span class="text-zinc-500">KAVORAX PRINCIPLE</span>
            <span class="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 class="h-3 w-3" />
              <span>{{ item.metric }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
