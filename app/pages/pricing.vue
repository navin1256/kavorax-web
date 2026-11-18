<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Button } from '~/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/ui/accordion'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Cpu,
  Mail,
  MessageSquare,
  Network,
  Radio,
  ShieldCheck,
  Sliders
} from 'lucide-vue-next'

useHead({
  title: 'Pricing & Engagement | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'A solution model built around your business. Discuss requirements, scope, and technical alignment for KavoraX enterprise platforms.'
    }
  ]
})

const cornerCrosshairs3 = ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3']
const cornerCrosshairs4 = ['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4']

// Hero
const { isRevealed: isHeroMounted } = useScrollReveal({ immediate: true, delay: 60 })
const scrollToComparison = () => {
  const el = document.getElementById('solutions-comparison')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const heroHighlights = [
  { title: 'Consultative', subtitle: 'Aligned to Scale' },
  { title: 'Modular', subtitle: 'Flexible Scope' },
  { title: 'Predictable', subtitle: 'Direct Governance' }
]


// Approach
const approachRef = ref<HTMLElement | null>(null)
const { isRevealed: isApproachRevealed } = useScrollReveal(approachRef, { threshold: 0.1 })
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

// Comparison
const comparisonRef = ref<HTMLElement | null>(null)
const { isRevealed: isComparisonRevealed } = useScrollReveal(comparisonRef, { threshold: 0.1 })
const activeScope = ref<'department' | 'enterprise' | 'global'>('enterprise')
const isScopeTransitioning = ref(false)
const setScope = (scope: 'department' | 'enterprise' | 'global') => {
  if (activeScope.value === scope) return
  isScopeTransitioning.value = true
  setTimeout(() => {
    activeScope.value = scope
    setTimeout(() => {
      isScopeTransitioning.value = false
    }, 40)
  }, 90)
}

const scopeTabs: { id: 'department' | 'enterprise' | 'global'; label: string }[] = [
  { id: 'department', label: 'Departmental' },
  { id: 'enterprise', label: 'Cross-Enterprise' },
  { id: 'global', label: 'Global Grid' }
]

const scopeProfiles = {
  department: {
    title: 'Departmental Foundation',
    badge: 'Focused Scale',
    description: 'Designed for single business units or localized operational departments coordinating discrete workflows.',
    latency: '< 15ms',
    concurrency: 'Standard Tier',
    governance: 'Role-Based Access (RBAC)',
    deployment: 'Single-Cluster VPC / SaaS'
  },
  enterprise: {
    title: 'Cross-Enterprise Operations',
    badge: 'Multi-Department Scale',
    description: 'Engineered for multi-department organizations synchronizing operations, live telemetry, and multiple cloud toolchains.',
    latency: '< 6ms',
    concurrency: 'High Concurrency Active-Active',
    governance: 'Zero-Trust Token Enforced',
    deployment: 'Multi-Region High Availability'
  },
  global: {
    title: 'Global Distributed Grid',
    badge: 'Mission-Critical Scale',
    description: 'Tailored for sovereign or multinational enterprises requiring air-gapped support, bespoke protocol bridges, and continuous auditability.',
    latency: 'Sub-millisecond Edge',
    concurrency: 'Federated Global Mesh',
    governance: 'Cryptographic Audit Trails & GxP/SOC2',
    deployment: 'Sovereign Cloud / Hybrid On-Prem'
  }
}

const solutions = [
  {
    id: 'operations-platform',
    name: 'Operations Platform',
    category: 'Core Operations',
    icon: Cpu,
    description:
      'Engineered to streamline business workflows, eliminate operational friction, and coordinate mission-critical activities across distributed teams.',
    businessNeeds: [
      'End-to-end operational workflow coordination',
      'Cross-functional handoff automation',
      'Policy-governed task execution & monitoring',
      'Cross-departmental bottleneck mitigation'
    ],
    engagementModel: 'Scoped around operational workflows & active team units',
    productLink: '/products#operations-platform',
    contactLink: '/contact',
    ctaLabel: 'Discuss Operations Platform'
  },
  {
    id: 'analytics-insights',
    name: 'Analytics & Insights',
    category: 'Visibility & Intelligence',
    icon: BarChart3,
    description:
      'Transforms operational business data into actionable visibility, equipping leadership with direct clarity on system activity and operational trends.',
    businessNeeds: [
      'Centralized operational telemetry visibility',
      'Real-time business activity reporting',
      'Unified insights across connected platforms',
      'Continuous audit and milestone tracking'
    ],
    engagementModel: 'Aligned to telemetry volume & reporting surfaces',
    productLink: '/products#analytics-insights',
    contactLink: '/contact',
    ctaLabel: 'Discuss Analytics & Insights'
  },
  {
    id: 'integration-hub',
    name: 'Integration Hub',
    category: 'Interoperability',
    icon: Network,
    description:
      'Enables reliable interoperability across software systems, bridging legacy infrastructure and cloud applications into one synchronized environment.',
    businessNeeds: [
      'Multi-system operational synchronization',
      'Frictionless data exchange pipelines',
      'Extensible cross-platform bridging',
      'Decoupled system architecture compatibility'
    ],
    engagementModel: 'Configured for endpoint interfaces & data pipelines',
    productLink: '/products#integration-hub',
    contactLink: '/contact',
    ctaLabel: 'Discuss Integration Hub'
  }
]

const matrixRows = [
  { dimension: 'Primary Focus', ops: 'Workflow Execution', analytics: 'Continuous Telemetry', hub: 'Interoperability Bus', cellClass: '' },
  { dimension: 'Data Routing', ops: 'Deterministic Tasks', analytics: '1.2M Events/Sec Stream', hub: '45+ Native Adapters', cellClass: 'text-brand font-medium' },
  { dimension: 'Policy Enforcement', ops: 'Zero-Trust Gates', analytics: 'Anomaly Drift Radar', hub: 'mTLS & Token Encryption', cellClass: '' },
  { dimension: 'SLA Basis', ops: '99.99% Availability', analytics: 'Sub-second Queries', hub: '< 12ms Sync Latency', cellClass: 'font-mono text-white' },
  { dimension: 'Engagement Scope', ops: 'Team Units & Workflows', analytics: 'Telemetry Volume', hub: 'Endpoint Interfaces', cellClass: 'text-zinc-400' }
]

// Custom CTA
const customCtaRef = ref<HTMLElement | null>(null)
const { isRevealed: isCustomCtaRevealed } = useScrollReveal(customCtaRef, { threshold: 0.12 })

// FAQ
const faqRef = ref<HTMLElement | null>(null)
const { isRevealed: isFaqRevealed } = useScrollReveal(faqRef, { threshold: 0.1 })
const faqs = [
  {
    id: 'faq-1',
    question: 'How can I discuss pricing with KavoraX?',
    answer:
      'Prospective clients can connect directly with our advisory team through our Contact page or by requesting an architecture briefing. We evaluate your operational priorities, system integration scope, and scale to outline an engagement approach suited to your organisation.'
  },
  {
    id: 'faq-2',
    question: 'Which solution may fit my business?',
    answer:
      'Our capabilities are organized into three primary pillars: Operations Platform for workflow coordination, Analytics & Insights for centralized operational telemetry, and Integration Hub for cross-system interoperability. You can review our Products page or schedule an introductory dialogue to identify the right combination for your needs.'
  },
  {
    id: 'faq-3',
    question: 'Can I discuss requirements for multiple business systems?',
    answer:
      'Yes. Many enterprises operate with fragmented software stacks, legacy backbones, and third-party partner portals. During our consultation, we explore how our Integration Hub and Operations Platform can bridge disparate environments without requiring costly system overhauls.'
  },
  {
    id: 'faq-4',
    question: 'How do I arrange a product discussion?',
    answer:
      'You can initiate a product conversation by visiting our Contact page or submitting a technical briefing request via our Book a Demo page. The KavoraX team will coordinate with your team to organize an informative, architectural walkthrough.'
  }
]

// Final CTA
const finalCtaRef = ref<HTMLElement | null>(null)
const { isRevealed: isFinalCtaRevealed } = useScrollReveal(finalCtaRef, { threshold: 0.12 })
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none -z-10" aria-hidden="true" />

      <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <div class="flex items-center gap-3">
            <ChapterLabel label="Simple, Transparent Pricing" />
          </div>

          <div class="flex items-center gap-4 text-[10px] text-zinc-400">
            <span class="hidden md:inline-flex items-center gap-1.5">
              <Radio class="h-3 w-3 text-brand animate-pulse-subtle" />
              <span>TRANSPARENCY: <strong class="text-white font-mono">100% AUDITABLE</strong></span>
            </span>
            <span class="text-zinc-600 hidden md:inline">|</span>
            <span>MODULAR SCOPE</span>
            <span class="text-zinc-600">|</span>
            <span class="text-zinc-400 font-mono">[ 01 // OVERVIEW ]</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-7">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand font-medium backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
              <span>Pricing &amp; Plans</span>
            </div>

            <WordReveal
              text="A Solution Model Built Around Your Business."
              as="h1"
              class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
              :italic-words="['Around', 'Your', 'Business.']"
              :delay="240"
              :immediate="true"
            />

            <p
              class="font-ui text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              Every organisation has different operational needs. Let's discuss your requirements and
              identify an approach that fits your business, priorities and scale.
            </p>

            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <NuxtLink to="/contact" class="w-full sm:w-auto">
                <Button
                  size="lg"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>

              <button
                type="button"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-zinc-200 hover:text-white transition-colors group border border-white/10 rounded-md bg-[#111a26]/60 hover:bg-[#111a26] cursor-pointer"
                @click="scrollToComparison"
              >
                <span>Explore Sizing Scopes</span>
                <ArrowDown class="h-4 w-4 text-brand group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div
              class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg font-ui reveal-base transition-editorial duration-700 delay-800"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <div v-for="item in heroHighlights" :key="item.title">
                <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">{{ item.title }}</div>
                <div class="text-xs text-zinc-400 mt-1">{{ item.subtitle }}</div>
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <div
              class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            <div
              class="relative rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <div
                v-for="pos in cornerCrosshairs3"
                :key="pos"
                :class="['absolute font-mono text-xs text-brand/70 select-none pointer-events-none', pos]"
                aria-hidden="true"
              >+</div>

              <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div class="flex items-center gap-2.5">
                  <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 border border-brand/30 text-brand">
                    <ShieldCheck class="h-4 w-4" />
                  </div>
                  <div>
                    <div class="font-mono text-xs font-semibold text-white tracking-wide">
                      ENGAGEMENT PRINCIPLES
                    </div>
                    <div class="font-mono text-[10px] text-zinc-500">
                      NO OPAQUE TIERS · FULL CLARITY
                    </div>
                  </div>
                </div>

                <span class="font-mono text-[10px] text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded font-semibold">
                  ENTERPRISE
                </span>
              </div>

              <div class="my-6 space-y-4 font-ui">
                <div class="p-4 rounded-xl border border-white/[0.06] bg-[#070b10] space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-white font-semibold text-xs">Diagnostic Assessment</span>
                    <span class="font-mono text-[10px] text-brand">STAGE 01</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed">
                    We evaluate workflows, integration endpoints, and concurrency requirements to determine appropriate architecture.
                  </p>
                </div>

                <div class="p-4 rounded-xl border border-brand/30 bg-brand/[0.04] space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-white font-semibold text-xs">Scoped Deployment</span>
                    <span class="font-mono text-[10px] text-emerald-400">STAGE 02</span>
                  </div>
                  <p class="text-xs text-zinc-300 leading-relaxed">
                    Transparent scope aligned to active team units, data ingress volume, and high-availability SLAs.
                  </p>
                </div>

                <div class="p-4 rounded-xl border border-white/[0.06] bg-[#070b10] space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-white font-semibold text-xs">Continuous Operational SLAs</span>
                    <span class="font-mono text-[10px] text-brand">STAGE 03</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed">
                    Guaranteed uptime, dedicated architectural guidance, and ongoing platform updates without surprise overhead.
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>ZERO VENDOR LOCK-IN</span>
                <span class="text-brand font-semibold">OPEN API INTERFACES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="approachRef"
      class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.08]"
      :class="{ 'is-revealed': isApproachRevealed }"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isApproachRevealed }">
            <ChapterLabel label="How Pricing Works" />
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
            :class="{ 'is-revealed': isApproachRevealed }"
          >
            Rather than imposing rigid pricing tiers on varied enterprise architectures, KavoraX
            follows a consultative model designed to align technical capabilities with your real
            business scale.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 font-ui">
          <div
            v-for="(step, index) in approachSteps"
            :key="step.step"
            :class="[
              'reveal-card',
              `stagger-${index + 1}`,
              isApproachRevealed ? 'is-revealed' : '',
              'rounded-2xl border border-white/[0.08] bg-[#0e151f]/90 p-8 hover:border-brand/35 transition-all duration-300 group flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl relative'
            ]"
          >
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

    <section
      id="solutions-comparison"
      ref="comparisonRef"
      class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] scroll-mt-28 md:scroll-mt-32"
      :class="{ 'is-revealed': isComparisonRevealed }"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div class="max-w-2xl space-y-4">
            <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isComparisonRevealed }">
              <ChapterLabel label="Compare Solutions" />
            </div>
            <WordReveal
              text="Three solution pillars, shaped to your architecture."
              as="h2"
              class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
              :italic-words="['shaped', 'to', 'your', 'architecture.']"
              :delay="120"
              :threshold="0.12"
            />
            <p
              class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl reveal-paragraph transition-editorial duration-700 delay-300"
              :class="{ 'is-revealed': isComparisonRevealed }"
            >
              KavoraX evaluates each solution category based on your functional objectives, existing
              systems, and operational scale, ensuring transparent and relevant engagements.
            </p>
          </div>

          <div
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 bg-[#0e1620] font-mono shrink-0 reveal-base transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': isComparisonRevealed }"
          >
            <button
              v-for="tab in scopeTabs"
              :key="tab.id"
              type="button"
              class="px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer"
              :class="activeScope === tab.id ? 'bg-brand text-black font-semibold' : 'text-zinc-400 hover:text-white'"
              @click="setScope(tab.id)"
            >
              {{ ' ' + tab.label + ' ' }}
            </button>
          </div>
        </div>

        <div
          class="mt-8 rounded-2xl border border-brand/20 bg-[#0c141f]/90 p-6 sm:p-7 font-ui backdrop-blur-xl relative reveal-card transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isComparisonRevealed }"
        >
          <div
            class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-opacity duration-200 ease-out"
            :class="isScopeTransitioning ? 'opacity-40' : 'opacity-100'"
          >
            <div class="space-y-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-semibold uppercase tracking-wider text-brand">
                  {{ scopeProfiles[activeScope].badge }}
                </span>
                <span class="text-zinc-600">·</span>
                <span class="text-sm font-semibold text-white">
                  {{ scopeProfiles[activeScope].title }}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                {{ scopeProfiles[activeScope].description }}
              </p>
            </div>

            <div class="grid grid-cols-3 gap-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-4 lg:pt-0 lg:pl-8 shrink-0 text-xs">
              <div>
                <div class="text-[10px] text-zinc-500 uppercase font-mono">Telemetry SLA</div>
                <div class="text-white font-mono mt-1 font-semibold">{{ scopeProfiles[activeScope].latency }}</div>
              </div>
              <div>
                <div class="text-[10px] text-zinc-500 uppercase font-mono">Governance</div>
                <div class="text-brand font-medium mt-1 truncate">{{ scopeProfiles[activeScope].governance }}</div>
              </div>
              <div>
                <div class="text-[10px] text-zinc-500 uppercase font-mono">Topology</div>
                <div class="text-zinc-300 mt-1 truncate font-mono text-[11px]">{{ scopeProfiles[activeScope].deployment }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 font-ui">
          <div
            v-for="(sol, index) in solutions"
            :key="sol.id"
            :class="[
              'reveal-card',
              `stagger-${index + 1}`,
              isComparisonRevealed ? 'is-revealed' : '',
              'rounded-2xl border border-white/[0.08] bg-[#0e151f]/90 hover:border-brand/35 transition-all duration-300 group flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl relative p-8'
            ]"
          >
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

            <div>
              <div class="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#121c29] border border-white/10 text-brand group-hover:scale-105 transition-transform"
                >
                  <component :is="sol.icon" class="h-5 w-5" />
                </div>
                <span
                  class="font-mono text-[11px] font-medium text-zinc-400 bg-white/[0.04] px-3 py-1 rounded border border-white/[0.06]"
                >
                  {{ sol.category }}
                </span>
              </div>

              <h3
                class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors leading-snug"
              >
                {{ sol.name }}
              </h3>

              <p class="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ sol.description }}
              </p>

              <div class="mt-8 pt-6 border-t border-white/[0.06] space-y-4">
                <h4 class="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                  General Business Needs Addressed
                </h4>
                <div class="space-y-2.5 text-xs text-zinc-300">
                  <div
                    v-for="(need, idx) in sol.businessNeeds"
                    :key="idx"
                    class="flex items-start gap-2.5"
                  >
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-snug">{{ need }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-white/[0.06]">
                <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Engagement Model
                </span>
                <p class="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {{ sol.engagementModel }}
                </p>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-white/[0.06] space-y-3">
              <NuxtLink :to="sol.contactLink" class="block">
                <Button
                  class="w-full bg-brand text-black font-semibold hover:bg-brand/90 py-5 text-xs rounded-md transition-all shadow-[0_0_15px_-3px_rgba(16,185,129,0.25)] flex items-center justify-center gap-2 group/btn"
                >
                  <span>{{ sol.ctaLabel }}</span>
                  <ArrowRight class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="sol.productLink"
                class="inline-flex items-center justify-center w-full py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors gap-1.5 font-mono"
              >
                <span>View Product Architecture</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-zinc-400" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="mt-20 rounded-2xl border border-white/[0.08] bg-[#0c141e]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative reveal-card transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isComparisonRevealed }"
        >
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

          <div class="pb-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-mono text-brand font-semibold uppercase tracking-wider">
                DIMENSIONAL COMPARISON
              </span>
              <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white mt-1">
                Cross-Platform Architectural Matrix
              </h3>
            </div>
            <span class="font-mono text-xs text-zinc-400 bg-white/[0.04] px-3 py-1 rounded border border-white/10 shrink-0">
              VERIFIED CRITERIA
            </span>
          </div>

          <div class="overflow-x-auto mt-6">
            <table class="w-full text-left text-xs font-ui min-w-[640px]">
              <thead>
                <tr class="border-b border-white/[0.08] text-zinc-400 font-mono text-[11px]">
                  <th class="py-3.5 px-4 font-semibold">CAPABILITY DIMENSION</th>
                  <th class="py-3.5 px-4 text-white font-semibold">OPERATIONS PLATFORM</th>
                  <th class="py-3.5 px-4 text-white font-semibold">ANALYTICS &amp; INSIGHTS</th>
                  <th class="py-3.5 px-4 text-white font-semibold">INTEGRATION HUB</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/[0.04] text-zinc-300">
                <tr v-for="row in matrixRows" :key="row.dimension">
                  <td class="py-3.5 px-4 font-medium text-white">{{ row.dimension }}</td>
                  <td :class="['py-3.5 px-4', row.cellClass]">{{ row.ops }}</td>
                  <td :class="['py-3.5 px-4', row.cellClass]">{{ row.analytics }}</td>
                  <td :class="['py-3.5 px-4', row.cellClass]">{{ row.hub }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-12 text-center font-ui text-xs text-zinc-500">
          All engagements are structured around verified organizational requirements and confirmed
          scope.
        </div>
      </div>
    </section>

    <section
      ref="customCtaRef"
      class="py-24 md:py-36 bg-[#0b0f14] border-t border-white/[0.08] relative overflow-hidden"
      :class="{ 'is-revealed': isCustomCtaRevealed }"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-brand/[0.06] blur-[150px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
        aria-hidden="true"
      />

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-3xl border border-white/[0.1] bg-[#0c141e]/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] reveal-card transition-editorial duration-700"
          :class="{ 'is-revealed': isCustomCtaRevealed }"
        >
          <div
            v-for="pos in cornerCrosshairs4"
            :key="pos"
            :class="['absolute font-mono text-xs text-brand/70 select-none pointer-events-none', pos]"
            aria-hidden="true"
          >+</div>

          <div class="flex justify-center mb-6 reveal-base transition-editorial duration-700 delay-100" :class="{ 'is-revealed': isCustomCtaRevealed }">
            <ChapterLabel label="Custom Solutions" />
          </div>

          <WordReveal
            text="Let's Discuss the Right Approach for Your Business."
            as="h2"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial max-w-3xl mx-auto"
            :italic-words="['Right', 'Approach', 'for', 'Your', 'Business.']"
            :delay="120"
            :threshold="0.12"
          />

          <p
            class="mt-6 font-ui text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed reveal-paragraph transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isCustomCtaRevealed }"
          >
            Share your priorities with KavoraX so the team can discuss relevant solutions and next
            steps.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-450" :class="{ 'is-revealed': isCustomCtaRevealed }">
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Request a Consultation</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
              >
                <Mail class="mr-2 h-4 w-4 text-brand" />
                <span>Book Technical Demo</span>
              </Button>
            </NuxtLink>
          </div>

          <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-550" :class="{ 'is-revealed': isCustomCtaRevealed }">
            <div class="flex items-center gap-2">
              <ShieldCheck class="h-3.5 w-3.5 text-brand" />
              <span>CONFIDENTIAL ARCHITECTURAL REVIEW</span>
            </div>

            <div class="flex items-center gap-2">
              <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
              <span>TRANSPARENT COMMERCIAL DIALOGUES</span>
            </div>

            <div class="text-zinc-500">
              KavoraX Global Private Limited
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="faqRef"
      class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08]"
      :class="{ 'is-revealed': isFaqRevealed }"
    >
      <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div class="flex justify-center reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isFaqRevealed }">
            <ChapterLabel label="Frequently Asked Questions" />
          </div>

          <WordReveal
            text="Frequently Asked Questions"
            as="h2"
            class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
            :delay="120"
            :threshold="0.1"
          />

          <p
            class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed reveal-paragraph transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isFaqRevealed }"
          >
            Common inquiries regarding KavoraX solution models, product evaluations, and consultation
            dialogues.
          </p>
        </div>

        <div
          class="rounded-2xl border border-white/[0.08] bg-[#0c141e]/90 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative reveal-card transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isFaqRevealed }"
        >
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

          <Accordion type="single" class="w-full font-ui" collapsible default-value="faq-1">
            <AccordionItem
              v-for="faq in faqs"
              :key="faq.id"
              :value="faq.id"
              class="border-b border-white/[0.08] last:border-b-0 py-2"
            >
              <AccordionTrigger class="hover:no-underline text-base sm:text-lg font-editorial font-medium text-white text-left">
                <span>{{ faq.question }}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div class="text-zinc-300 text-sm sm:text-base leading-relaxed pt-1 pb-4 font-sans">
                  {{ faq.answer }}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          class="mt-8 text-center font-ui text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-center gap-3 reveal-base transition-editorial duration-700 delay-400"
          :class="{ 'is-revealed': isFaqRevealed }"
        >
          <span>Have a question not listed here?</span>
          <NuxtLink
            to="/contact"
            class="text-brand hover:text-white transition-colors inline-flex items-center gap-1 font-semibold font-mono"
          >
            <span>Speak directly with our team</span>
            <ArrowRight class="h-3.5 w-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      ref="finalCtaRef"
      class="py-28 md:py-36 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden"
      :class="{ 'is-revealed': isFinalCtaRevealed }"
    >
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand/[0.07] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
        aria-hidden="true"
      />
      <div
        class="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-cyan-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-3xl border border-white/[0.1] bg-[#0c141e]/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] reveal-card transition-editorial duration-700"
          :class="{ 'is-revealed': isFinalCtaRevealed }"
        >
          <div
            v-for="pos in cornerCrosshairs4"
            :key="pos"
            :class="['absolute font-mono text-xs text-brand/70 select-none pointer-events-none', pos]"
            aria-hidden="true"
          >+</div>

          <div class="flex justify-center mb-6 reveal-base transition-editorial duration-700 delay-100" :class="{ 'is-revealed': isFinalCtaRevealed }">
            <ChapterLabel label="Get a Tailored Quote" />
          </div>

          <WordReveal
            text="Ready to Explore Connected Solutions for Your Organization?"
            as="h2"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance-editorial max-w-3xl mx-auto"
            :italic-words="['Connected', 'Solutions', 'for', 'Your', 'Organization?']"
            :delay="120"
            :threshold="0.12"
          />

          <p
            class="mt-6 font-ui text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed reveal-paragraph transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isFinalCtaRevealed }"
          >
            Connect with our team to discuss your operational objectives, system dependencies, and
            deployment strategy.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-450" :class="{ 'is-revealed': isFinalCtaRevealed }">
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
              >
                <Mail class="mr-2 h-4 w-4 text-brand" />
                <span>Book an Architecture Demo</span>
              </Button>
            </NuxtLink>
          </div>

          <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-550" :class="{ 'is-revealed': isFinalCtaRevealed }">
            <div class="flex items-center gap-2">
              <ShieldCheck class="h-3.5 w-3.5 text-brand" />
              <span>CONFIDENTIAL ARCHITECTURAL EVALUATION</span>
            </div>

            <div class="flex items-center gap-2">
              <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
              <span>NO SURPRISE OVERHEAD GUARANTEE</span>
            </div>

            <div class="text-zinc-500">
              KavoraX Global Private Limited
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
