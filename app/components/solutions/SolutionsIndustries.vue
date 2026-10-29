<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Building2,
  Landmark,
  Activity,
  Truck,
  ArrowRight
} from 'lucide-vue-next'

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

const gridRef = ref<HTMLElement | null>(null)
const { isRevealed: isGridRevealed } = useScrollReveal(gridRef, { threshold: 0.12 })

const industries = [
  {
    name: 'Enterprise Technology & SaaS',
    focus: 'Cross-functional release handoffs & toolchain interoperability',
    icon: Building2,
    anchor: '/industries#enterprise-tech',
    image: '/images/tech-infrastructure.webp',
    tag: 'HIGH CONCURRENCY'
  },
  {
    name: 'Financial Services & FinTech',
    focus: 'Operational telemetry, data exchange & auditable governance',
    icon: Landmark,
    anchor: '/industries#financial-services',
    image: '/images/fintech-headquarters.webp',
    tag: 'REGULATORY COMPLIANCE'
  },
  {
    name: 'Healthcare & Life Sciences',
    focus: 'Administrative coordination & multi-department process visibility',
    icon: Activity,
    anchor: '/industries#healthcare',
    image: '/images/healthcare-diagnostics.webp',
    tag: 'CARE CONTINUITY'
  },
  {
    name: 'Supply Chain & Logistics',
    focus: 'Multi-system synchronization across inventory & fulfillment networks',
    icon: Truck,
    anchor: '/industries#supply-chain',
    image: '/images/logistics-terminal.webp',
    tag: 'INTERMODAL SYNCHRONIZATION'
  }
]
</script>

<template>
  <section class="py-24 md:py-36 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        ref="headerRef"
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <div class="max-w-2xl space-y-4">
          <ChapterLabel
            index="CHAPTER 05"
            label="DOMAIN ALIGNMENT"
            sublabel="SECTOR-SPECIFIC FRAMEWORKS"
          />
          <WordReveal
            as="h2"
            text="Connected Across Operating Domains."
            :italic-words="['Operating', 'Domains.']"
            class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          />
          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Different sectors face distinct operational rhythms, data sensitivities, and compliance boundaries. Explore how connected architecture addresses industry-specific requirements.
          </p>
        </div>

        <NuxtLink to="/industries" class="shrink-0 font-ui">
          <Button
            variant="outline"
            size="lg"
            class="border-white/10 bg-[#0f1620] hover:bg-white/[0.05] text-zinc-200 hover:text-white px-6 py-5 transition-colors group"
          >
            <span>Explore Industry Frameworks</span>
            <ArrowRight class="ml-2 h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
          </Button>
        </NuxtLink>
      </div>

      <!-- 4 Verified Industry Visual Photographic Panels -->
      <div ref="gridRef" class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-ui">
        <NuxtLink
          v-for="(item, idx) in industries"
          :key="item.name"
          :to="item.anchor"
          class="rounded-2xl border border-white/[0.08] bg-[#0d141e] overflow-hidden hover:border-brand/40 transition-all duration-500 group flex flex-col justify-between shadow-xl relative reveal-card transition-editorial duration-700"
          :class="[{ 'is-revealed': isGridRevealed }, 'stagger-' + (idx + 1)]"
        >
          <!-- Corner Crosshair -->
          <div class="absolute top-2.5 right-2.5 font-mono text-xs text-brand/50 select-none pointer-events-none z-10" aria-hidden="true">+</div>

          <div>
            <!-- Contextual Photograph with Gradient Scrim -->
            <div class="relative h-48 w-full overflow-hidden bg-zinc-900">
              <img
                :src="item.image"
                :alt="item.name"
                loading="lazy"
                decoding="async"
                width="600"
                height="192"
                class="h-full w-full object-cover img-editorial-zoom opacity-75 group-hover:opacity-100 transition-opacity"
              >
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0d141e] via-[#0d141e]/50 to-transparent"
              />
              <div class="absolute top-3 left-3 text-[10px] font-mono text-brand bg-[#0d141e]/90 border border-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                {{ item.tag }}
              </div>
            </div>

            <!-- Narrative Body -->
            <div class="p-6 space-y-2">
              <div class="flex items-center gap-2 text-zinc-400 group-hover:text-brand transition-colors text-xs font-mono">
                <component :is="item.icon" class="h-4 w-4" />
                <span>SECTOR PROFILE</span>
              </div>
              <h3 class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors leading-snug">
                {{ item.name }}
              </h3>
              <p class="text-xs text-zinc-300 leading-relaxed pt-1">
                {{ item.focus }}
              </p>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="px-6 pb-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-brand transition-colors">
            <span>VIEW FRAMEWORK</span>
            <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
