<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { ArrowRight } from 'lucide-vue-next'

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

interface SolutionCard {
  id: string
  index: string
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  relatedProduct: string
  relatedLink: string
}

const storytellingPairs: SolutionCard[] = [
  {
    id: 'workflows',
    index: '01',
    category: 'Workflows',
    title: 'Synced Team Workflows',
    description:
      'When front-of-house staff, order desks, and back-office teams use disconnected tools, data gets manually re-typed—leading to delays and mistakes. KavoraX synchronizes POS transactions, orders, and inventory handoffs automatically across every device in real time.',
    image: '/images/solutions/workflow.webp',
    imageAlt: 'Modern retail store team using tablet POS and handheld devices to manage orders and inventory seamlessly',
    relatedProduct: 'Operations Platform',
    relatedLink: '/products#operations-platform'
  },
  {
    id: 'visibility',
    index: '02',
    category: 'Visibility',
    title: 'Live Operational Reporting',
    description:
      'Fragmented sales registers and branch spreadsheets leave leadership guessing about true daily performance. KavoraX aggregates live transactions, inventory levels, and labor throughput across all locations into an authoritative, single-screen dashboard.',
    image: '/images/solutions/visibility.webp',
    imageAlt: 'Executive analytics dashboard displaying real-time multi-location business metrics, KPIs, and branch performance',
    relatedProduct: 'Analytics & Insights',
    relatedLink: '/products#analytics-insights'
  },
  {
    id: 'automation',
    index: '03',
    category: 'Automation',
    title: 'Automated Task & Prep Routing',
    description:
      'Manual ticket passing and verbal status checks cause friction during peak service hours. KavoraX routes customer orders directly from POS and digital ordering channels to kitchen display stations and fulfillment lines without manual intervention.',
    image: '/images/solutions/automation.webp',
    imageAlt: 'Commercial kitchen and fulfillment station with digital kitchen display system automatically routing incoming orders',
    relatedProduct: 'Operations Platform',
    relatedLink: '/products#operations-platform'
  },
  {
    id: 'adaptability',
    index: '04',
    category: 'Adaptability',
    title: 'Flexible System Connectors',
    description:
      'Rigid legacy software and brittle custom scripts lock businesses in when operational needs or payment standards change. KavoraX provides modular connectors bridging hardware terminals, online ordering, and third-party accounting with zero disruption.',
    image: '/images/solutions/adaptability.webp',
    imageAlt: 'Unified multi-device architecture showing synchronized POS terminal, web ordering, and mobile dashboard',
    relatedProduct: 'Integration Hub',
    relatedLink: '/products#integration-hub'
  }
]
</script>

<template>
  <section class="py-14 md:py-20 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Editorial Header -->
      <div
        ref="headerRef"
        class="max-w-3xl space-y-3.5 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel label="Common Business Challenges" />
        <h2 class="text-2xl sm:text-3xl md:text-[2.25rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white">
          Technology Should Work Around Your Business
        </h2>
        <p class="font-ui text-base sm:text-lg font-normal leading-[1.65] text-white/75">
          As operations scale, standalone systems create communication silos and manual bottlenecks. We contrast these core operational friction points with connected architectural solutions.
        </p>
      </div>

      <!-- Clean 2 x 2 High-Craft Card Grid -->
      <div class="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 font-ui">
        <div
          v-for="item in storytellingPairs"
          :key="item.id"
          class="group rounded-2xl border border-white/10 bg-[#0c141e] hover:border-emerald-500/35 p-5 sm:p-6 transition-all duration-200 shadow-lg"
        >
          <!-- Top Meta Row: Topic Label + Module Link -->
          <div class="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {{ item.index }} · {{ item.category }}
            </span>
            <NuxtLink
              :to="item.relatedLink"
              class="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors group/link"
            >
              <span>{{ item.relatedProduct }}</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>

          <!-- Visual Media Frame (16:9 Landscape) with zero layout shift & dark placeholder -->
          <div class="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0f14]">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              loading="lazy"
              decoding="async"
              width="640"
              height="360"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <!-- Subtle gradient overlay at bottom for smooth visual blending -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#0c141e]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <!-- Card Heading & Narrative Copy -->
          <div class="mt-5 space-y-2">
            <h3 class="font-ui text-xl font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-sm text-zinc-300 leading-relaxed font-normal">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
