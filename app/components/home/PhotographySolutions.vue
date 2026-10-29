<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import ArchitecturalFrame from '~/components/visual/ArchitecturalFrame.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowUpRight, CheckCircle2, Cpu } from 'lucide-vue-next'

const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })
</script>

<template>
  <section
    ref="targetRef"
    class="py-24 md:py-36 bg-[#080c10] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Ambient emerald atmospheric glow -->
    <div
      class="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-brand/[0.035] blur-[170px] rounded-full pointer-events-none"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Chapter Index -->
      <div
        class="pb-8 border-b border-white/[0.08] mb-16 flex items-center justify-between reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <ChapterLabel index="04" label="CONNECTED SOLUTIONS" sublabel="ENTERPRISE ADOPTION & GOVERNANCE" />
        <div class="hidden sm:block font-mono text-xs text-zinc-400">
          INSTITUTIONAL GRADE DELIVERY
        </div>
      </div>

      <!-- Main Photography-Led Asymmetrical Composition -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <!-- Left: High-Resolution Photographic Showcase with Reusable ArchitecturalFrame -->
        <div
          class="lg:col-span-7 relative reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isRevealed }"
        >
          <ArchitecturalFrame
            src="/images/architectural-workspace.webp"
            alt="Collaborative systems engineering workspace representing KavoraX enterprise advisory"
            aspect-ratio="wide"
            badge-text="SYSTEMS ADVISORY"
            coordinate="ENTERPRISE ARCHITECTURE"
          >
            <template #caption>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-xl border border-white/10 bg-[#080c10]/85 backdrop-blur-md font-mono text-xs text-zinc-200">
                <span class="text-white font-ui font-medium">Enterprise Delivery Framework</span>
                <span class="text-brand font-mono">COLLABORATIVE ARCHITECTURE</span>
              </div>
            </template>
          </ArchitecturalFrame>
        </div>

        <!-- Right: Editorial Narrative & Solution Pillars -->
        <div
          class="lg:col-span-5 space-y-6 font-ui reveal-base transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isRevealed }"
        >
          <div class="inline-flex items-center gap-2 text-xs font-mono text-brand uppercase tracking-widest">
            <Cpu class="h-3.5 w-3.5" />
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>

          <h3 class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.08]">
            Solutions that adapt to your operational reality.
          </h3>

          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We don’t impose rigid dogmas. KavoraX works alongside enterprise teams to integrate and scale technology that respects existing investments while unlocking next-generation capability.
          </p>

          <div class="space-y-4 pt-2 text-sm text-zinc-300">
            <div
              class="p-4 rounded-xl border border-white/[0.07] bg-[#0c131c]/60 flex items-start gap-3.5 reveal-card delay-150"
              :class="{ 'is-revealed': isRevealed }"
            >
              <CheckCircle2 class="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <strong class="text-white font-medium block">Customized Enterprise Deployment</strong>
                <span class="text-xs text-zinc-400 leading-relaxed">Tailored to multi-region architectures, strict compliance regimes, and high-frequency workloads.</span>
              </div>
            </div>

            <div
              class="p-4 rounded-xl border border-white/[0.07] bg-[#0c131c]/60 flex items-start gap-3.5 reveal-card delay-250"
              :class="{ 'is-revealed': isRevealed }"
            >
              <CheckCircle2 class="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <strong class="text-white font-medium block">Progressive Modernization Roadmaps</strong>
                <span class="text-xs text-zinc-400 leading-relaxed">Gradual migration models that safeguard system continuity with zero business downtime.</span>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <NuxtLink
              to="/solutions"
              class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md border border-brand/30 bg-brand/10 hover:bg-brand/20 text-brand hover:text-white transition-all text-xs font-semibold tracking-wider uppercase font-ui group shadow-[0_0_20px_-3px_rgba(16,185,129,0.2)]"
            >
              <span>Explore All Solutions</span>
              <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
