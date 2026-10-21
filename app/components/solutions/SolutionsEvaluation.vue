<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Target, Server, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

const ledgerRef = ref<HTMLElement | null>(null)
const { isRevealed: isLedgerRevealed } = useScrollReveal(ledgerRef, { threshold: 0.12 })

const footnoteRef = ref<HTMLElement | null>(null)
const { isRevealed: isFootnoteRevealed } = useScrollReveal(footnoteRef, { threshold: 0.12 })

const considerations = [
  {
    category: 'AXIS 01 // OPERATIONAL FOCUS',
    title: 'Business Priorities',
    question: 'What specific outcome is your organization trying to unlock?',
    description:
      'Clarify whether your near-term priority is eliminating manual cross-department handoffs, centralizing live performance telemetry, or meeting rigorous compliance audit standards. Clear outcomes prevent scope creep and establish direct criteria for success.',
    icon: Target,
    diagnostic: 'Define core workflow bottleneck & target cycle time.'
  },
  {
    category: 'AXIS 02 // SYSTEM DEPENDENCIES',
    title: 'Existing Environment & Constraints',
    question: 'Which legacy systems, databases, or compliance boundaries must be respected?',
    description:
      'Review established ERPs, custom on-premise databases, cloud microservices, and regional data residency constraints currently in production. Understanding constraints ensures new solutions complement rather than disrupt ongoing business operations.',
    icon: Server,
    diagnostic: 'Map existing protocol endpoints and integration boundaries.'
  },
  {
    category: 'AXIS 03 // LONG-TERM HORIZON',
    title: 'Future Adaptability & Scale',
    question: 'How might organizational requirements evolve over the next 24 to 36 months?',
    description:
      'Anticipate how increased transaction volumes, cross-border expansion, or new regulatory mandates could impact system architecture. Planning for modular evolution prevents costly re-platforming and compounding technical debt.',
    icon: TrendingUp,
    diagnostic: 'Ensure architecture allows modular layer upgrades.'
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#0b0f14] border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Scroll Reveal -->
      <div
        ref="headerRef"
        class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 04"
          label="EVALUATION FRAMEWORK"
          sublabel="OBJECTIVE SCOPING AXES"
        />
        <WordReveal
          as="h2"
          text="How to Evaluate the Right Solution."
          :italic-words="['Right', 'Solution.']"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
        />
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
          Selecting the appropriate technology scope requires evaluating current operational objectives against established systems and future organizational growth.
        </p>
      </div>

      <!-- Editorial Evaluation Ledger (3 Horizontal/Asymmetric Diagnostic Bands) -->
      <div ref="ledgerRef" class="mt-16 space-y-6 font-ui">
        <div
          v-for="(item, idx) in considerations"
          :key="item.title"
          class="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0c131d]/90 backdrop-blur-xl relative hover:border-brand/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group reveal-card transition-editorial duration-700"
          :class="[{ 'is-revealed': isLedgerRevealed }, 'stagger-' + (idx + 1)]"
        >
          <!-- Corner Crosshair -->
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- Left Metadata Column -->
            <div class="lg:col-span-4 space-y-3">
              <span class="font-mono text-xs text-brand font-semibold tracking-wider">
                {{ item.category }}
              </span>
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand shrink-0">
                  <component :is="item.icon" class="h-5 w-5" />
                </div>
                <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                  {{ item.title }}
                </h3>
              </div>
              <div class="pt-2 text-xs font-mono text-zinc-400">
                <span class="text-zinc-500">DIAGNOSTIC CRITERION:</span>
                <p class="text-emerald-400 mt-0.5 font-medium">{{ item.diagnostic }}</p>
              </div>
            </div>

            <!-- Right Question & Analysis Column -->
            <div class="lg:col-span-8 space-y-4 lg:pl-8 lg:border-l border-white/[0.06]">
              <div class="font-editorial text-xl sm:text-2xl text-white italic leading-snug">
                “{{ item.question }}”
              </div>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {{ item.description }}
              </p>

              <div class="pt-3 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
                <span>INDEPENDENT EVALUATION AXIS VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Consultative Guidance Footnote with Scroll Reveal -->
      <div
        ref="footnoteRef"
        class="mt-12 rounded-2xl border border-white/[0.08] bg-[#0c141e]/90 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-ui relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isFootnoteRevealed }"
      >
        <div class="space-y-1.5">
          <span class="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
            ARCHITECTURAL CONSULTATION
          </span>
          <p class="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
            These questions establish objective internal criteria. KavoraX technology leaders conduct confidential scoping sessions to help teams evaluate trade-offs before committing resources.
          </p>
        </div>

        <NuxtLink to="/contact" class="shrink-0 w-full sm:w-auto">
          <button
            type="button"
            class="w-full sm:w-auto px-7 py-4 rounded-md border border-brand/40 bg-brand/10 hover:bg-brand/20 text-brand hover:text-white transition-all text-xs font-semibold tracking-wider uppercase font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)] cursor-pointer"
          >
            <span>Request Diagnostic Scoping</span>
            <ArrowRight class="h-4 w-4" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
