<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-vue-next'

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

const stickyRef = ref<HTMLElement | null>(null)
const { isRevealed: isStickyRevealed } = useScrollReveal(stickyRef, { threshold: 0.12 })

const cardsRef = ref<HTMLElement | null>(null)
const { isRevealed: isCardsRevealed } = useScrollReveal(cardsRef, { threshold: 0.12 })

const storytellingPairs = [
  {
    tag: 'FRICTION POINT 01 // WORKFLOWS',
    problemTitle: 'Disconnected Tools & Siloed Workflows',
    problemText:
      'When core operational teams rely on separate software tools that do not communicate, critical data must be manually transcribed or re-entered, creating handoff delays, errors, and operational friction.',
    solutionTitle: 'Coordinated Operational Flow',
    solutionText:
      'Unified workflow routing eliminates manual data re-entry by synchronizing task handoffs automatically across departments.',
    relatedProduct: 'Operations Platform',
    relatedLink: '/products#operations-platform'
  },
  {
    tag: 'FRICTION POINT 02 // VISIBILITY',
    problemTitle: 'Limited Operational Visibility',
    problemText:
      'Dispersed data stores make it challenging for leadership to maintain a clear, unified view of business activity, making it harder to spot bottlenecks or evaluate performance trends in a timely manner.',
    solutionTitle: 'Authoritative Telemetry & Signals',
    solutionText:
      'Continuous telemetry aggregation equips decision-makers with sub-second operational reporting, trend detection, and system health insights.',
    relatedProduct: 'Analytics & Insights',
    relatedLink: '/products#analytics-insights'
  },
  {
    tag: 'FRICTION POINT 03 // EXECUTION',
    problemTitle: 'Repetitive Manual Processes',
    problemText:
      'Routine operational handoffs, status checks, and data reconciliations consume valuable team hours when software systems lack the capability to coordinate events or notify downstream stakeholders automatically.',
    solutionTitle: 'Automated Event Coordination',
    solutionText:
      'Policy-governed event triggers execute deterministic handoffs without requiring fragile manual scripts or administrative intervention.',
    relatedProduct: 'Operations Platform',
    relatedLink: '/products#operations-platform'
  },
  {
    tag: 'FRICTION POINT 04 // INTEROPERABILITY',
    problemTitle: 'Difficulty Adapting as Needs Evolve',
    problemText:
      'Rigid architectures and brittle custom scripts can make systems slow to adapt. When organizational priorities or regulatory requirements shift, modifying disconnected infrastructure often requires excessive rework.',
    solutionTitle: 'Extensible Integration Fabric',
    solutionText:
      'Standardized protocol adapters bridge legacy databases, ERPs, and modern cloud applications into a future-ready, interchangeable architecture.',
    relatedProduct: 'Integration Hub',
    relatedLink: '/products#integration-hub'
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#0b0f14] border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Editorial Header with Scroll Reveal -->
      <div
        ref="headerRef"
        class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 02"
          label="OPERATIONAL REALITIES"
          sublabel="PROBLEM-TO-SOLUTION CONTINUUM"
        />
        <WordReveal
          as="h2"
          text="Technology Should Work Around Your Business."
          :italic-words="['Around', 'Your', 'Business.']"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
        />
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
          As modern organizations scale, their technology landscape often fragments across standalone applications, distinct departmental toolchains, and legacy platforms. We contrast these critical friction points with connected architectural solutions.
        </p>
      </div>

      <!-- Asymmetrical Narrative Storytelling Layout (Image on Left, Comparative Progression on Right) -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start font-ui">
        <!-- Left: Realistic High-Resolution Technology Photography with Contextual Annotation -->
        <div
          ref="stickyRef"
          class="lg:col-span-5 sticky top-28 space-y-6 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isStickyRevealed }"
        >
          <div class="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-2xl relative group">
            <!-- Corner Crosshairs -->
            <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

            <div class="relative h-[380px] sm:h-[460px] w-full overflow-hidden">
              <img
                src="/images/tech-infrastructure.jpg"
                alt="Modern cloud data center and high-throughput networking infrastructure"
                class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-opacity"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
              <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

              <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/90 p-3.5 backdrop-blur-md font-mono text-xs">
                <div class="text-brand font-semibold flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
                  <span>INFRASTRUCTURE RESILIENCE</span>
                </div>
                <div class="text-[10px] text-zinc-400 mt-0.5">ELIMINATING OPERATIONAL BOTTLENECKS</div>
              </div>

              <div class="absolute bottom-6 left-6 right-6 font-mono text-xs text-zinc-400">
                <span class="text-white block font-ui font-semibold text-sm">Deterministic System Bridge</span>
                <span class="text-[11px] text-zinc-400">Transforming disconnected tools into coherent business advantage.</span>
              </div>
            </div>
          </div>

          <!-- Editorial Pull-Quote -->
          <div class="p-6 rounded-xl border border-white/[0.08] bg-[#0c141e]/80 backdrop-blur-md">
            <p class="font-editorial text-lg text-zinc-300 italic leading-relaxed">
              “True technological efficiency is not measured by the quantity of applications deployed, but by how cleanly information moves between them.”
            </p>
            <div class="mt-3 text-xs font-mono text-brand font-semibold">
              — KavoraX Architectural Principles
            </div>
          </div>
        </div>

        <!-- Right: Business Problem vs. Connected Solution Storytelling Cards -->
        <div ref="cardsRef" class="lg:col-span-7 space-y-6">
          <div
            v-for="(item, idx) in storytellingPairs"
            :key="idx"
            class="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 backdrop-blur-xl relative hover:border-brand/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group reveal-card transition-editorial duration-700"
            :class="[{ 'is-revealed': isCardsRevealed }, 'stagger-' + (idx + 1)]"
          >
            <!-- Corner Crosshair -->
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

            <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span class="font-mono text-xs text-brand font-semibold tracking-wider">
                {{ item.tag }}
              </span>
              <span class="text-[10px] font-mono text-zinc-400 uppercase">
                COMPARATIVE ANALYSIS
              </span>
            </div>

            <!-- Problem Block -->
            <div class="mt-5 space-y-2">
              <div class="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <AlertCircle class="h-3.5 w-3.5" />
                <span>The Operational Challenge</span>
              </div>
              <h3 class="font-editorial text-2xl font-semibold text-white">
                {{ item.problemTitle }}
              </h3>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ item.problemText }}
              </p>
            </div>

            <!-- Visual Flow Arrow Divider -->
            <div class="my-5 flex items-center gap-3">
              <div class="h-[1px] flex-1 bg-white/[0.08]" />
              <div class="text-[10px] font-mono text-brand uppercase px-2.5 py-0.5 rounded border border-brand/25 bg-brand/[0.06] flex items-center gap-1.5">
                <span class="h-1 w-1 rounded-full bg-brand" />
                <span>RESOLVED VIA CONNECTED ARCHITECTURE</span>
              </div>
              <div class="h-[1px] flex-1 bg-white/[0.08]" />
            </div>

            <!-- Solution Block -->
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider font-mono">
                <CheckCircle2 class="h-3.5 w-3.5" />
                <span>The Connected Solution</span>
              </div>
              <h4 class="font-editorial text-xl font-semibold text-white">
                {{ item.solutionTitle }}
              </h4>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ item.solutionText }}
              </p>
            </div>

            <!-- Related Product Link with Verified Deep Anchor -->
            <div class="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span class="text-zinc-400">POWERED BY:</span>
              <NuxtLink
                :to="item.relatedLink"
                class="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-white transition-colors group/link"
              >
                <span>{{ item.relatedProduct }}</span>
                <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
