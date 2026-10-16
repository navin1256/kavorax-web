<script setup lang="ts">
import { Building2, Landmark, Activity, Truck, ArrowRight } from 'lucide-vue-next'

const industries = [
  {
    title: 'Enterprise Technology & SaaS',
    tag: 'Digital Operations',
    description:
      'High-concurrency distributed platforms, multi-tenant data architecture, and mission-critical cloud uptime.',
    icon: Building2,
    anchor: '/industries#enterprise-tech',
    image: '/images/tech-infrastructure.jpg',
    alt: 'High-density enterprise cloud infrastructure and telemetry servers'
  },
  {
    title: 'Financial Services & FinTech',
    tag: 'Auditable Systems',
    description:
      'Auditable transaction architectures, rigorous data segregation, and zero-trust regulatory compliance frameworks.',
    icon: Landmark,
    anchor: '/industries#financial-services',
    image: '/images/fintech-headquarters.jpg',
    alt: 'Modern financial architectural headquarters with glass facade'
  },
  {
    title: 'Healthcare & Life Sciences',
    tag: 'Care Delivery Workflows',
    description:
      'Compliant health-data processing, confidential telemetry pipelines, and connected operational workflows.',
    icon: Activity,
    anchor: '/industries#healthcare',
    image: '/images/healthcare-diagnostics.jpg',
    alt: 'Modern laboratory instrumentation and clinical diagnostics'
  },
  {
    title: 'Supply Chain & Logistics',
    tag: 'Fulfillment & Freight',
    description:
      'Multi-region operational tracking, automated inventory governance, and event-driven logistics synchronization.',
    icon: Truck,
    anchor: '/industries#supply-chain',
    image: '/images/logistics-terminal.jpg',
    alt: 'Modern automated intermodal logistics facility'
  }
]
</script>

<template>
  <section class="py-24 md:py-32 bg-[#0b0f14] border-t border-white/[0.06] relative">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]"
      >
        <div class="max-w-2xl space-y-4">
          <div
            class="inline-flex items-center gap-2 text-xs font-ui font-semibold uppercase tracking-widest text-brand"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            Industry Verticals
          </div>
          <h2
            class="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight"
          >
            Solutions tailored to complex industry requirements.
          </h2>
          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
            KavoraX engineers connected systems designed to meet the rigorous security, operational,
            and performance standards of specialized sectors.
          </p>
        </div>

        <NuxtLink to="/industries" class="shrink-0 font-ui">
          <span
            class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-md border border-white/10 bg-[#0f1620] text-zinc-200 hover:text-white hover:border-brand/40 transition-all shadow-sm"
          >
            <span>All Industry Frameworks</span>
            <ArrowRight class="h-3.5 w-3.5 text-brand" />
          </span>
        </NuxtLink>
      </div>

      <!-- Industry Cards Grid with Photography -->
      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-ui">
        <NuxtLink
          v-for="item in industries"
          :key="item.title"
          :to="item.anchor"
          class="rounded-xl border border-white/[0.08] bg-[#0d141e] overflow-hidden hover:border-brand/40 transition-all duration-500 group flex flex-col justify-between hover:shadow-[0_16px_36px_-8px_rgba(16,185,129,0.18)]"
        >
          <div>
            <!-- Contextual Photograph with Gradient Scrim -->
            <div class="relative h-44 w-full overflow-hidden bg-zinc-900">
              <img
                :src="item.image"
                :alt="item.alt"
                loading="lazy"
                class="h-full w-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-opacity"
              >
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0d141e] via-[#0d141e]/50 to-transparent"
              />
              <div class="absolute top-3 right-3">
                <span
                  class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10"
                >
                  {{ item.tag }}
                </span>
              </div>
              <div class="absolute bottom-3 left-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b0f14]/90 border border-white/15 text-brand shadow-md group-hover:border-brand/40 transition-colors"
                >
                  <component :is="item.icon" class="h-5 w-5" />
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <h3
                class="font-editorial text-xl font-semibold text-white group-hover:text-brand transition-colors leading-snug"
              >
                {{ item.title }}
              </h3>
              <p class="mt-2.5 text-xs text-zinc-400 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div
            class="px-6 pb-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-white transition-colors"
          >
            <span>Explore Architecture</span>
            <ArrowRight
              class="h-3.5 w-3.5 text-brand group-hover:translate-x-1 transition-transform"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
