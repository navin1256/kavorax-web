<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { Building2, Landmark, Activity, Truck, ArrowDownRight } from 'lucide-vue-next'

const overviewRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(overviewRef, { threshold: 0.1 })

const industries = [
  {
    id: 'enterprise-tech',
    name: 'Enterprise Technology & SaaS',
    tag: 'Digital Operations',
    icon: Building2,
    colSpan: 'lg:col-span-7',
    description:
      'Fast-moving software and technology providers coordinating complex product lifecycles, cross-functional handoffs, and multi-tenant operational toolchains.',
    keyFocus: 'Workflow execution & toolchain interoperability',
    primaryAnchor: '#enterprise-tech',
    ctaLabel: 'Explore SaaS Context',
    image: '/images/tech-infrastructure.jpg',
    alt: 'High-density enterprise computing and telemetry infrastructure'
  },
  {
    id: 'financial-services',
    name: 'Financial Services & FinTech',
    tag: 'Auditable Systems',
    icon: Landmark,
    colSpan: 'lg:col-span-5',
    description:
      'Banking, payment, and financial institutions requiring continuous operational visibility, strict governance, and synchronized data exchange across distributed platforms.',
    keyFocus: 'Operational telemetry & multi-system exchange',
    primaryAnchor: '#financial-services',
    ctaLabel: 'Explore FinTech Context',
    image: '/images/fintech-headquarters.jpg',
    alt: 'Modern financial architectural headquarters with glass facade'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tag: 'Care Delivery Workflows',
    icon: Activity,
    colSpan: 'lg:col-span-5',
    description:
      'Clinical operations and health networks managing distributed administrative processes, cross-facility coordination, and complex stakeholder communications.',
    keyFocus: 'Operational coordination & bottleneck visibility',
    primaryAnchor: '#healthcare',
    ctaLabel: 'Explore Healthcare Context',
    image: '/images/healthcare-diagnostics.jpg',
    alt: 'Modern laboratory instrumentation and clinical diagnostics'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain & Logistics',
    tag: 'Fulfillment & Freight',
    icon: Truck,
    colSpan: 'lg:col-span-7',
    description:
      'Logistics providers and fulfillment operators requiring dependable interoperability between distributed inventory, freight tracking, and back-office ERP systems.',
    keyFocus: 'Ecosystem bridging & milestone tracking',
    primaryAnchor: '#supply-chain',
    ctaLabel: 'Explore Logistics Context',
    image: '/images/logistics-terminal.jpg',
    alt: 'Modern automated intermodal logistics terminal'
  }
]
</script>

<template>
  <section
    id="industry-overview"
    ref="overviewRef"
    class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.08]"
    :class="{ 'is-revealed': isRevealed }"
  >
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl space-y-4">
        <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isRevealed }">
          <ChapterLabel
            index="CHAPTER 02"
            label="INDUSTRY EXPLORER"
            sublabel="OPERATIONAL REALITIES"
          />
        </div>
        <WordReveal
          text="Purposeful solutions tailored to enterprise operational realities."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          :italic-words="['enterprise', 'operational', 'realities']"
          :delay="120"
          :threshold="0.12"
        />
        <p
          class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl reveal-paragraph transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isRevealed }"
        >
          KavoraX concentrates on four foundational enterprise verticals where operational
          coordination, end-to-end visibility, and reliable interoperability are vital to
          sustainable growth.
        </p>
      </div>

      <!-- Asymmetric Editorial Gallery Grid (7-5 and 5-7 Col Spans) -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 font-ui">
        <div
          v-for="(ind, index) in industries"
          :key="ind.id"
          :class="[
            ind.colSpan,
            'reveal-card',
            `stagger-${index + 1}`,
            isRevealed ? 'is-revealed' : '',
            'rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 overflow-hidden hover:border-brand/40 transition-all duration-500 group flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative'
          ]"
        >
          <!-- Corner Crosshair -->
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/60 select-none pointer-events-none z-10" aria-hidden="true">+</div>

          <div>
            <!-- Contextual Photograph with Gradient Scrim -->
            <div class="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-950">
              <img
                :src="ind.image"
                :alt="ind.alt"
                loading="lazy"
                class="h-full w-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
              >
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0d141e] via-[#0d141e]/50 to-transparent"
              />
              <div class="absolute top-3 left-3">
                <span
                  class="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-brand border border-white/10 flex items-center gap-1.5"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
                  <span>{{ ind.tag }}</span>
                </span>
              </div>
              <div class="absolute bottom-4 left-4">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b0f14]/90 border border-white/15 text-brand shadow-lg group-hover:border-brand/40 transition-colors"
                >
                  <component :is="ind.icon" class="h-5 w-5" />
                </div>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 sm:p-8">
              <h3
                class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors leading-snug"
              >
                {{ ind.name }}
              </h3>

              <p class="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ ind.description }}
              </p>

              <div class="mt-5 pt-4 border-t border-white/[0.06]">
                <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                  Primary Focus
                </span>
                <span class="text-xs text-zinc-200 mt-1 block font-medium">
                  {{ ind.keyFocus }}
                </span>
              </div>
            </div>
          </div>

          <div class="p-6 sm:p-8 pt-0">
            <div class="pt-4 border-t border-white/[0.06]">
              <a
                :href="ind.primaryAnchor"
                class="inline-flex items-center justify-between w-full py-1 text-xs font-semibold text-brand hover:text-white transition-colors group/link cursor-pointer font-mono"
              >
                <span>{{ ind.ctaLabel }}</span>
                <ArrowDownRight
                  class="h-4 w-4 text-brand group-hover/link:translate-x-0.5 group-hover/link:translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
