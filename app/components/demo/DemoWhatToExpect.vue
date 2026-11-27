<script setup lang="ts">
import { Target, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-vue-next'

const steps = [
  {
    step: '01',
    title: 'Understand Your Goals',
    description: 'Share your business priorities and current challenges.',
    details:
      'We begin by listening to how your teams currently coordinate, which systems are in place, and where operational bottlenecks create friction.',
    icon: Target
  },
  {
    step: '02',
    title: 'Explore Relevant Solutions',
    description: 'Discuss which capabilities may be relevant to your needs.',
    details:
      'We walk through KavoraX capabilities—such as the Operations Platform, Analytics, or Integration Hub—that directly address your stated priorities.',
    icon: Compass
  },
  {
    step: '03',
    title: 'Discuss Next Steps',
    description: 'Identify potential next steps based on the conversation.',
    details:
      'If there is a mutual fit, we identify clear next steps, whether that involves further technical exploration, architectural review, or scoping.',
    icon: ArrowUpRight
  }
]
</script>

<template>
  <section class="py-12 md:py-16 bg-transparent relative overflow-hidden border-t border-white/[0.06]">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl space-y-4">
        <div
          class="inline-flex items-center gap-2 text-xs font-ui font-medium text-brand"
        >
          Process Guidance
        </div>
        <h2
          class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
        >
          What to Expect from
          <span class="italic font-light text-brand">the Walkthrough</span>.
        </h2>
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          Our demonstration sessions are designed to be focused, practical, and aligned with your
          team's specific store workflows and software requirements.
        </p>
      </div>

      <!-- 3 Steps Grid -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="item in steps"
          :key="item.step"
          class="rounded-2xl border border-white/[0.08] bg-[#0e1620]/80 p-7 sm:p-8 relative group hover:border-brand/30 transition-colors duration-200 flex flex-col justify-between"
        >
          <!-- Top Row: Step Number & Icon -->
          <div>
            <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
              <span class="font-mono text-xs text-brand font-semibold tracking-wider">
                STEP {{ item.step }}
              </span>
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-brand group-hover:bg-brand/10 group-hover:border-brand/20 transition-colors"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </div>
            </div>

            <!-- Content -->
            <div class="mt-6 space-y-3">
              <h3 class="font-editorial text-2xl font-semibold text-white leading-snug">
                {{ item.title }}
              </h3>
              <p class="font-ui text-sm text-brand font-medium leading-relaxed">
                {{ item.description }}
              </p>
              <p class="font-ui text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                {{ item.details }}
              </p>
            </div>
          </div>

          <!-- Bottom Indicator -->
          <div class="mt-8 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs text-zinc-500 font-ui">
            <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
            <span>Structured Process Guidance</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
