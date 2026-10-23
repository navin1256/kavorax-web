<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { Compass, Sliders, MessageSquare, ArrowRight } from 'lucide-vue-next'

const approachRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(approachRef, { threshold: 0.1 })

const approachSteps = [
  {
    step: '01',
    title: 'Understand Your Needs',
    subtitle: 'Operational Goals & Systems',
    icon: Compass,
    description:
      'We start by discussing your operational goals, existing software systems, cross-department handoffs, and specific technical requirements to understand where connectivity delivers the highest leverage.',
    focusPoints: [
      'Current workflow friction & bottlenecks',
      'Existing infrastructure & legacy integrations',
      'Target performance and scalability goals'
    ]
  },
  {
    step: '02',
    title: 'Identify the Right Solution',
    subtitle: 'Modular Product Alignment',
    icon: Sliders,
    description:
      'Together, we explore relevant KavoraX platforms—Operations Platform, Analytics & Insights, or Integration Hub—and determine the combination that addresses your exact business needs.',
    focusPoints: [
      'Operations Platform for workflow orchestration',
      'Analytics & Insights for centralized telemetry',
      'Integration Hub for multi-system interoperability'
    ]
  },
  {
    step: '03',
    title: 'Discuss the Engagement',
    subtitle: 'Scope & Commercial Details',
    icon: MessageSquare,
    description:
      'Connect directly with the KavoraX technical team to discuss rollout scope, milestone expectations, deployment parameters, and commercial details suited to your organization.',
    focusPoints: [
      'Transparent scope and rollout sequencing',
      'Collaborative commercial alignment',
      'Dedicated engineering and deployment review'
    ]
  }
]
</script>

<template>
  <section
    ref="approachRef"
    class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.08]"
    :class="{ 'is-revealed': isRevealed }"
  >
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl space-y-4">
        <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isRevealed }">
          <ChapterLabel
            index="CHAPTER 02"
            label="CONSULTATION METHODOLOGY"
            sublabel="OPERATIONAL ALIGNMENT"
          />
        </div>
        <WordReveal
          text="How we shape engagements around your operational reality."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          :italic-words="['operational', 'reality.']"
          :delay="120"
          :threshold="0.12"
        />
        <p
          class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl reveal-paragraph transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isRevealed }"
        >
          Rather than imposing rigid pricing tiers on varied enterprise architectures, KavoraX
          follows a consultative model designed to align technical capabilities with your real
          business scale.
        </p>
      </div>

      <!-- 3 Informational Editorial Cards -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 font-ui">
        <div
          v-for="(step, index) in approachSteps"
          :key="step.step"
          :class="[
            'reveal-card',
            `stagger-${index + 1}`,
            isRevealed ? 'is-revealed' : '',
            'rounded-2xl border border-white/[0.08] bg-[#0e151f]/90 p-8 hover:border-brand/35 transition-all duration-300 group flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl relative'
          ]"
        >
          <!-- Corner Crosshair -->
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <div>
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#121c29] border border-white/10 text-brand group-hover:scale-105 transition-transform"
              >
                <component :is="step.icon" class="h-5 w-5" />
              </div>
              <span
                class="font-mono text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded border border-brand/20"
              >
                Step {{ step.step }}
              </span>
            </div>

            <div class="font-mono text-xs font-semibold text-brand uppercase tracking-wider">
              {{ step.subtitle }}
            </div>

            <h3
              class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors mt-1.5"
            >
              {{ step.title }}
            </h3>

            <p class="mt-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {{ step.description }}
            </p>

            <!-- Focus Points List -->
            <div class="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5 text-xs">
              <div
                v-for="(point, pIdx) in step.focusPoints"
                :key="pIdx"
                class="flex items-start gap-2.5 text-zinc-300"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                <span class="leading-snug">{{ point }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-5 border-t border-white/[0.06]">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-between w-full py-1 text-xs font-semibold text-brand hover:text-white transition-colors group/link font-mono"
            >
              <span>Discuss this stage with our team</span>
              <ArrowRight
                class="h-4 w-4 text-brand group-hover/link:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
