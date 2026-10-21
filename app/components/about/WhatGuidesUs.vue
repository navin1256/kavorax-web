<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Eye, Layers, RefreshCw, ShieldCheck, CheckCircle2 } from 'lucide-vue-next'

const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })

const principles = [
  {
    num: '01',
    code: 'ETHIC_01',
    id: 'clarity',
    title: 'Clarity',
    subtitle: 'Operational Visibility',
    icon: Eye,
    description:
      'Software should illuminate enterprise processes rather than obscure them. We prioritize direct system telemetry, unambiguous task statuses, and actionable clarity for operational teams so decisions are based on observable facts.',
    quote: 'Illuminate workflows, eliminate ambiguity.',
    commitment: 'Unambiguous telemetry across all modules'
  },
  {
    num: '02',
    code: 'ETHIC_02',
    id: 'cohesion',
    title: 'Cohesion',
    subtitle: 'Connected Operations',
    icon: Layers,
    description:
      'Isolated tools introduce latency and communication breakdowns. We engineer solutions that unify workflow coordination, system records, and team handoffs into a synchronized operational fabric across departments.',
    quote: 'Unify moving parts into one synchronized fabric.',
    commitment: 'Cross-departmental synchronization'
  },
  {
    num: '03',
    code: 'ETHIC_03',
    id: 'adaptability',
    title: 'Adaptability',
    subtitle: 'Evolving Architecture',
    icon: RefreshCw,
    description:
      'Business models and software environments continually shift. We build modular, decoupled systems that allow organisations to adjust workflows and add integrations without disruptive rebuilds or vendor lock-in.',
    quote: 'Flexibility engineered into core platform boundaries.',
    commitment: 'Decoupled modules with zero lock-in'
  },
  {
    num: '04',
    code: 'ETHIC_04',
    id: 'responsible-growth',
    title: 'Responsible Growth',
    subtitle: 'Sustainable Governance',
    icon: ShieldCheck,
    description:
      'Scaling should never compromise system integrity or governance. We embed verifiable audit trails, role-based access controls, and policy compliance directly into platform foundations for long-term trust.',
    quote: 'Scale with verifiable integrity and auditable controls.',
    commitment: 'Auditable controls & compliance trails'
  }
]
</script>

<template>
  <section
    id="guiding-principles"
    ref="targetRef"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.06] overflow-hidden"
  >
    <!-- Ambient ambient glow -->
    <div
      class="absolute top-1/2 right-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with ChapterLabel -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 05"
          label="GUIDING ETHICS"
          sublabel="PRAGMATIC VALUES"
        />
        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-zinc-300">
            ENGINEERING PRINCIPLES
          </span>
          <span class="text-zinc-600 hidden sm:inline">|</span>
          <span class="hidden sm:inline font-mono">NON-NEGOTIABLE STANDARDS</span>
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

      <!-- 4 Principles Editorial 2x2 Ledger with Restrained Composition -->
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
                  <span class="font-mono text-xs text-brand uppercase tracking-wider block">{{ item.subtitle }}</span>
                  <div class="font-mono text-[10px] text-zinc-500">{{ item.code }} // CORE PRINCIPLE</div>
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
            <div class="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
              <span>{{ item.commitment }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Institutional Authenticity Guarantee -->
      <div class="mt-16 rounded-xl border border-white/[0.06] bg-[#0c141f]/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-ui text-xs text-zinc-400">
        <div class="flex items-center gap-2.5">
          <ShieldCheck class="h-4 w-4 text-brand shrink-0" />
          <span>Every principle represents practical engineering commitments implemented directly across KavoraX platforms.</span>
        </div>
        <span class="font-mono text-[11px] text-zinc-400 shrink-0">
          ZERO INVENTED CLAIMS
        </span>
      </div>
    </div>
  </section>
</template>
