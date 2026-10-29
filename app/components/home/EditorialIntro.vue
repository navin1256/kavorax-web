<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import ScrollTextReveal from '~/components/visual/ScrollTextReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowUpRight } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(sectionRef, { threshold: 0.15 })

const principles = [
  {
    number: '01',
    title: 'Cohesive Intelligence',
    subtitle: 'Breaking down departmental silos',
    description:
      'Replacing isolated databases and standalone tools with continuous, bidirectional information flow across business units.'
  },
  {
    number: '02',
    title: 'Operational Precision',
    subtitle: 'Deterministic workflow execution',
    description:
      'Automating high-frequency handoffs with zero tolerance for latency, data drift, or manual routing exceptions.'
  },
  {
    number: '03',
    title: 'Institutional Longevity',
    subtitle: 'Architected to outlast technical cycles',
    description:
      'Building modular, scalable foundations that absorb exponential operational volume without compounding brittle technical debt.'
  }
]
</script>

<template>
  <section
    id="editorial-intro"
    ref="sectionRef"
    class="py-24 md:py-36 bg-[#0b0f14] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Subtle Background Ambient Glow -->
    <div
      class="absolute top-1/2 -left-48 w-96 h-96 bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Chapter Eyebrow -->
      <div
        class="pb-8 border-b border-white/[0.08] mb-16 flex items-center justify-between reveal-base"
        :class="{ 'is-revealed': isRevealed }"
      >
        <ChapterLabel index="01" label="THE CONNECTED MANDATE" sublabel="COHERENCE OVER FRAGMENTATION" />
        <div class="hidden sm:block font-mono text-xs text-zinc-400">
          KAVORAX OPERATIONAL PARADIGM
        </div>
      </div>

      <!-- Asymmetrical Editorial Spread -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left: Oversized Typographic Manifesto & Context -->
        <div class="lg:col-span-7 space-y-8">
          <ScrollTextReveal
            text="The modern enterprise cannot afford fragmented systems. We architect unified technologies that connect people, data and physical operations in synchronized motion."
            as="h2"
            :highlight="['synchronized', 'motion.']"
            highlight-class="italic font-light text-brand"
            :start-offset="0.88"
            :end-offset="0.32"
            class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.08] tracking-[-0.02em] text-balance"
          />

          <div
            class="border-l-2 border-brand/40 pl-5 sm:pl-6 py-1 space-y-4 font-editorial text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed reveal-paragraph delay-200"
            :class="{ 'is-revealed': isRevealed }"
          >
            <p>
              Fragmented systems drain momentum. When customer inquiries don't reach fulfillment, when inventory doesn't reflect actual stock, when field teams lack context from headquarters—enterprise potential leaks at every seam.
            </p>
          </div>

          <p
            class="font-ui text-base text-zinc-300 leading-relaxed max-w-xl font-normal reveal-paragraph delay-300"
            :class="{ 'is-revealed': isRevealed }"
          >
            We close those gaps permanently. By unifying data pipelines, automating cross-functional workflows, and providing real-time operational clarity, KavoraX transforms disconnected operations into a synchronized enterprise.
          </p>

          <div
            class="pt-2 reveal-base delay-400"
            :class="{ 'is-revealed': isRevealed }"
          >
            <NuxtLink
              to="/about"
              class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors group font-ui uppercase tracking-wider"
            >
              <span>Read Our Story</span>
              <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Sequential Editorial Continuum (Fine-line, not boxy cards) -->
        <div class="lg:col-span-5 space-y-8 font-ui">
          <div class="space-y-8">
            <div
              v-for="(item, pIdx) in principles"
              :key="item.number"
              class="relative group space-y-2 pb-8 border-b border-white/[0.06] last:border-b-0 last:pb-0 reveal-card"
              :class="[
                isRevealed ? 'is-revealed' : '',
                pIdx === 0 ? 'delay-150' : pIdx === 1 ? 'delay-250' : 'delay-350'
              ]"
            >
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-semibold text-brand tracking-widest">
                  {{ item.number }}
                </span>
                <span class="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  {{ item.subtitle }}
                </span>
              </div>

              <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors">
                {{ item.title }}
              </h3>

              <p class="text-sm text-zinc-300 leading-relaxed pt-1 font-normal">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
