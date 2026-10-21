<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowRight, ShieldCheck } from 'lucide-vue-next'

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

const scenariosRef = ref<HTMLElement | null>(null)
const { isRevealed: isScenariosRevealed } = useScrollReveal(scenariosRef, { threshold: 0.12 })

const advisoryRef = ref<HTMLElement | null>(null)
const { isRevealed: isAdvisoryRevealed } = useScrollReveal(advisoryRef, { threshold: 0.12 })

const scenarios = [
  {
    priority: 'Streamlining Operations',
    recommendation: 'Operations Platform',
    code: 'START // OPS-01',
    fit: 'Ideal for organizations looking to eliminate manual handoffs, standardize execution routines, and coordinate activities across distributed operational teams.',
    focusArea: 'Process orchestration & team coordination'
  },
  {
    priority: 'Gaining Real-Time Visibility',
    recommendation: 'Analytics & Insights',
    code: 'START // INTEL-02',
    fit: 'Ideal for leadership teams seeking authoritative operational telemetry, unified data reporting, and continuous clarity on system activity.',
    focusArea: 'Operational intelligence & activity reporting'
  },
  {
    priority: 'Connecting Legacy & Cloud Systems',
    recommendation: 'Integration Hub',
    code: 'START // MESH-03',
    fit: 'Ideal for enterprises needing seamless interoperability between legacy internal software, modern cloud platforms, and external service touchpoints.',
    focusArea: 'Cross-system synchronization & bridging'
  }
]
</script>

<template>
  <section class="py-24 md:py-32 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden">
    <!-- Ambient Depth Lighting with Drift -->
    <div
      class="absolute top-1/3 left-10 w-[550px] h-[450px] bg-brand/[0.03] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Scroll Reveal -->
      <div
        ref="headerRef"
        class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 05"
          label="GUIDANCE & PLANNING"
          sublabel="ENTERPRISE FIT MATRIX"
        />
        <WordReveal
          as="h2"
          text="Identifying the right starting point for your enterprise."
          :italic-words="['your', 'enterprise.']"
          class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
        />
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
          KavoraX solutions are modular by design. Organizations can deploy a focused solution to
          resolve immediate challenges, then interconnect additional layers over time.
        </p>
      </div>

      <!-- Scenarios List with Staggered Card Entrance -->
      <div
        ref="scenariosRef"
        class="mt-14 space-y-5"
      >
        <div
          v-for="(item, index) in scenarios"
          :key="item.recommendation"
          class="rounded-2xl border border-white/[0.08] bg-[#0c131c]/80 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-brand/35 transition-all relative group backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] reveal-card"
          :class="[
            `stagger-${index + 1}`,
            isScenariosRevealed ? 'is-revealed' : ''
          ]"
        >
          <!-- Corner Crosshair -->
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="space-y-2.5 max-w-3xl">
            <div class="flex flex-wrap items-center gap-3">
              <span
                class="font-mono text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded"
              >
                {{ item.priority }}
              </span>
              <span class="font-mono text-xs text-zinc-600">•</span>
              <span class="font-mono text-xs text-zinc-400">Focus: {{ item.focusArea }}</span>
              <span class="font-mono text-xs text-zinc-600 hidden sm:inline">•</span>
              <span class="font-mono text-[10px] text-zinc-500 hidden sm:inline">{{ item.code }}</span>
            </div>

            <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
              Recommended: <span class="text-white">{{ item.recommendation }}</span>
            </h3>

            <p class="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {{ item.fit }}
            </p>
          </div>

          <div class="shrink-0 font-ui">
            <NuxtLink to="/contact">
              <Button
                variant="outline"
                class="w-full sm:w-auto border-white/10 bg-[#101824]/80 text-zinc-200 hover:text-white hover:bg-white/[0.06] px-6 py-5 text-xs transition-colors group/btn"
              >
                <span>Discuss Requirements</span>
                <ArrowRight class="ml-2 h-4 w-4 text-brand group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom Advisory Banner with Scroll Reveal -->
      <div
        ref="advisoryRef"
        class="mt-14 rounded-2xl border border-white/[0.1] bg-[#0e1622]/90 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isAdvisoryRevealed }"
      >
        <!-- Top Glow Accent -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-80" />

        <div class="space-y-2">
          <div
            class="flex items-center gap-2 text-brand font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <ShieldCheck class="h-4 w-4" />
            <span>CONFIDENTIAL ARCHITECTURAL ADVISORY</span>
          </div>
          <h4 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
            Unsure which module fits your roadmap?
          </h4>
          <p class="font-sans text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
            Our systems architects conduct confidential architectural evaluations to recommend an
            optimal integration scope tailored to your operational dependencies.
          </p>
        </div>

        <NuxtLink to="/demo" class="shrink-0 font-ui w-full sm:w-auto">
          <Button
            size="lg"
            class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-sm shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-all duration-200"
          >
            Book an Architectural Demo
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
