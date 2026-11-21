<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import ScrollTextReveal from '~/components/visual/ScrollTextReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Split,
  GitCommit,
  Network,
  RefreshCw,
  Sliders,
  Database,
  GitMerge,
  Cpu,
  Workflow,
  BarChart3,
  Compass,
  Scale
} from 'lucide-vue-next'

useHead({
  title: 'About KavoraX Global | Connected Business Solutions',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX Global Private Limited builds connected business solutions that help organisations operate smarter, improve visibility, and scale with confidence.'
    }
  ]
})


// Hero
const isHeroMounted = ref(false)

onMounted(() => {
  isHeroMounted.value = true
})

// Who We Are
const whoWeAreSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isWhoWeAreRevealed } = useScrollReveal(whoWeAreSectionRef, { threshold: 0.15 })

// Our Approach
const { isRevealed: isApproachHeaderRevealed, targetRef: approachHeaderRef } = useScrollReveal({ threshold: 0.15 })
const { isRevealed: isPhase1Revealed, targetRef: phase1Ref } = useScrollReveal({ threshold: 0.12 })
const { isRevealed: isPhase2Revealed, targetRef: phase2Ref } = useScrollReveal({ threshold: 0.12 })
const { isRevealed: isPhase3Revealed, targetRef: phase3Ref } = useScrollReveal({ threshold: 0.12 })

// Architecture
const archSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isAboutArchRevealed } = useScrollReveal(archSectionRef, { threshold: 0.15 })

const activeDimId = ref('operations')

const architecturalDimensions = [
  {
    id: 'operations',
    code: 'DIM_01',
    title: 'Operations & Workflows',
    tag: 'Daily Execution',
    icon: Workflow,
    description:
      'The day-to-day work: order routing, fulfillment stages, shift handoffs, and customer interactions that form the heartbeat of the business.',
    elements: ['Automated Task Routing', 'Cross-Team Handoffs', 'Exception Triggers'],
    telemetry: 'Operational Flow'
  },
  {
    id: 'systems',
    code: 'DIM_02',
    title: 'Software & Integrations',
    tag: 'Tools & Platforms',
    icon: Network,
    description:
      'The tools and platforms in use: POS terminals, ERP systems, delivery dispatch, inventory databases, and third-party APIs.',
    elements: ['API Integrations', 'Legacy System Bridges', 'Cloud Applications'],
    telemetry: 'Platform Sync'
  },
  {
    id: 'telemetry',
    code: 'DIM_03',
    title: 'Data & Analytics',
    tag: 'Insights & Metrics',
    icon: BarChart3,
    description:
      'The data stream: sales trends, inventory depletion, margin reports, and operational metrics needed for informed leadership decisions.',
    elements: ['Real-Time Reporting', 'Margin Analytics', 'Inventory Forecasts'],
    telemetry: 'Continuous Feeds'
  },
  {
    id: 'governance',
    code: 'DIM_04',
    title: 'Security & Access',
    tag: 'Control & Trust',
    icon: ShieldCheck,
    description:
      'The policies and safeguards: role-based access controls, verifiable audit trails, and privacy compliance that protect business continuity.',
    elements: ['Role Permissions', 'Audit Logs', 'Data Encryption'],
    telemetry: 'Policy Integrity'
  }
]

const selectDimension = (id: string) => {
  activeDimId.value = id
}

// Guiding Principles
const { isRevealed: isGuidesRevealed, targetRef: guidesTargetRef } = useScrollReveal({ threshold: 0.12 })

const principles = [
  {
    id: 'business-first',
    num: '01',
    code: 'PRIN_01',
    title: 'Business Context Before Code',
    subtitle: 'Pragmatic Purpose',
    icon: Compass,
    description:
      'We never deploy technology for novelty. Every architecture decision, data pipeline, and API endpoint must solve an identifiable operational challenge.',
    quote: 'Software exists to serve business outcomes, not to showcase abstract complexity.',
    commitment: 'Direct business alignment verified before implementation'
  },
  {
    id: 'connected-systems',
    num: '02',
    code: 'PRIN_02',
    title: 'Coherence Over Fragmentation',
    subtitle: 'Connected Operations',
    icon: Layers,
    description:
      'Isolated tools create friction, redundant data entry, and visibility blind spots. We engineer platforms where workflows, telemetry, and departments operate in harmony.',
    quote: 'The value of technology compounds when systems communicate reliably.',
    commitment: 'Seamless data flow and integration standards'
  },
  {
    id: 'honest-engineering',
    num: '03',
    code: 'PRIN_03',
    title: 'Honest, Dependable Engineering',
    subtitle: 'Responsible Architecture',
    icon: Scale,
    description:
      'We reject hyperbole and fragile prototypes. Our solutions emphasize transparent documentation, auditable security boundaries, and modular longevity.',
    quote: 'True dependability is proven through reliable uptime and clear documentation.',
    commitment: 'Clear documentation and verifiable audit trails'
  },
  {
    id: 'sustainable-growth',
    num: '04',
    code: 'PRIN_04',
    title: 'Designed for Sustainable Scale',
    subtitle: 'Long-Term Durability',
    icon: Cpu,
    description:
      'Scalability should not require destabilizing rewrites. We design modular foundations capable of expanding with transaction volumes while keeping operational overhead low.',
    quote: 'Sustainable growth is built on modular, maintainable software foundations.',
    commitment: 'High-availability architecture built for expansion'
  }
]

// Final CTA
const aboutCtaSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isAboutCtaRevealed } = useScrollReveal(aboutCtaSectionRef, { threshold: 0.15 })
</script>

<template>
  <div class="relative bg-[#0A0A0A] overflow-x-hidden">
    <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0A0A0A] border-b border-white/[0.08]">
      
      <div class="absolute inset-0 opacity-40 pointer-events-none -z-10" aria-hidden="true" />

      <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-12 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <div class="inline-flex items-center gap-2.5">
            <ChapterLabel label="About KavoraX" />
          </div>
          <div class="flex items-center gap-6 text-xs text-zinc-400">
            <span class="text-zinc-300 font-medium">KavoraX Global Private Limited</span>
            <span class="text-zinc-600 hidden sm:inline">·</span>
            <span class="hidden sm:inline text-zinc-400">Connected Systems &amp; Technology</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-7">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand reveal-base transition-editorial duration-700 delay-150"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <span class="flex h-1.5 w-1.5 rounded-full bg-brand" />
              <span>About Us</span>
            </div>

            <h1 class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words reveal-base transition-editorial duration-700 delay-200" :class="{ 'is-revealed': isHeroMounted }">
  Building Technology That Moves Business <span class="text-brand font-normal">Forward.</span>
</h1>

            <div
              class="space-y-4 reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <p class="font-ui text-base sm:text-lg text-zinc-200 max-w-2xl leading-relaxed font-normal">
                KavoraX builds connected business solutions that help organisations operate smarter,
                improve operational visibility, and scale with sustainable confidence.
              </p>

              <p class="font-ui text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-normal">
                We believe enterprise technology should bridge operational divides—linking fragmented
                processes, data, and distributed teams into a synchronized and resilient whole.
              </p>
            </div>

            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <NuxtLink to="/products" class="w-full sm:w-auto">
                <Button
                  size="lg"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200 group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>

              <NuxtLink to="/contact" class="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight class="ml-2 h-4 w-4 text-brand" />
                </Button>
              </NuxtLink>
            </div>

            <div
              class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-xl font-ui reveal-base transition-editorial duration-700 delay-800"
              :class="{ 'is-revealed': isHeroMounted }"
            >
              <a href="#who-we-are" class="space-y-1 group block transition-all">
                <span class="text-xs text-brand font-medium flex items-center gap-1">
                  <span>Who We Are</span>
                  <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
                </span>
                <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Business at Core</div>
              </a>
              <a href="#our-approach" class="space-y-1 group block transition-all">
                <span class="text-xs text-brand font-medium flex items-center gap-1">
                  <span>Our Approach</span>
                  <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
                </span>
                <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Connected Systems</div>
              </a>
              <a href="#guiding-principles" class="space-y-1 group block transition-all">
                <span class="text-xs text-brand font-medium flex items-center gap-1">
                  <span>Our Values</span>
                  <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
                </span>
                <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Reliable Scale</div>
              </a>
            </div>
          </div>

          <div
            class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <div
              class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-60 pointer-events-none"
              aria-hidden="true"
            />

            <div
              class="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              

              <div class="relative h-96 sm:h-[460px] w-full overflow-hidden bg-zinc-950">
                <img
                  src="/images/architectural-workspace.webp"
                  alt="Modern enterprise architecture engineering workspace and design studio"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  width="800"
                  height="460"
                  class="h-full w-full object-cover img-editorial-zoom opacity-85 group-hover:opacity-100 transition-opacity animate-hero-drift"
                >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"
                />

                <div class="absolute top-6 left-6 right-6 flex items-center justify-between font-ui text-xs text-zinc-300">
                  <span class="px-2.5 py-1 rounded bg-black/75 border border-white/10 text-white flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>Systems Engineering</span>
                  </span>
                  <span class="px-2 py-0.5 rounded bg-black/75 border border-white/10 text-brand">
                    Architecture &amp; Design
                  </span>
                </div>

                <div class="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#161616] p-5 space-y-2 font-ui">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-brand font-medium flex items-center gap-1.5">
                      <Building2 class="h-3.5 w-3.5 text-brand" />
                      KavoraX Global Private Limited
                    </span>
                    <span class="text-zinc-400 text-xs">Registered Entity</span>
                  </div>
                  <p class="font-editorial text-base text-zinc-200 leading-snug">
                    "Engineering enterprise platforms that unify fragmented software, workflows, and operational intelligence."
                  </p>
                  <div class="pt-2 flex items-center justify-between border-t border-white/[0.06] text-xs text-zinc-400">
                    <span class="flex items-center gap-1 text-zinc-300">
                      <ShieldCheck class="h-3 w-3 text-brand" />
                      Auditable Systems
                    </span>
                    <span class="text-zinc-500">Reliable &amp; Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="who-we-are"
      ref="whoWeAreSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-b border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isWhoWeAreRevealed }"
        >
          <ChapterLabel label="Who We Are" />
          <div class="flex items-center gap-4 text-xs text-zinc-400">
            <span class="text-zinc-300">Company Overview</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div
            class="lg:col-span-7 space-y-8 reveal-base transition-editorial duration-700 delay-75"
            :class="{ 'is-revealed': isWhoWeAreRevealed }"
          >
            <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
  Technology with business at its core.
</h2>

            <div class="space-y-6">
              <div class="border-l-2 border-brand/40 pl-6">
                <ScrollTextReveal
                  text="Modern enterprises frequently struggle with fragmented software landscapes where critical workflows, operational telemetry, and cross-departmental handoffs remain trapped in disconnected tools."
                  as="blockquote"
                  class="font-editorial text-xl sm:text-2xl leading-relaxed text-white font-normal"
                  :start-offset="0.88"
                  :end-offset="0.32"
                />
              </div>
              <p class="font-ui text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                KavoraX Global Private Limited develops enterprise technological systems engineered to
                help organisations operate smarter, serve customers better, and scale with sustainable
                confidence. We bridge operational divides without requiring disruptive overhauls.
              </p>
              <p class="font-ui text-base text-zinc-400 leading-relaxed">
                By aligning technical architecture directly with pragmatic operational objectives, KavoraX
                delivers solutions that improve process visibility, reinforce governance, and establish
                resilient foundations for growth.
              </p>
            </div>

            <div class="pt-6 border-t border-white/[0.06] space-y-4 font-ui">
              <div class="flex items-center justify-between text-xs text-zinc-400 font-medium">
                <span>What We Stand For</span>
                <span class="text-brand">Quality &amp; Transparency</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="rounded-xl border border-white/[0.08] bg-[#111111] p-5 space-y-2 hover:border-brand/30 transition-colors">
                  <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                    <span>Pragmatic Architecture</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed">
                    Engineered to work alongside existing enterprise investments, not mandate risky rip-and-replace deployments.
                  </p>
                </div>
                <div class="rounded-xl border border-white/[0.08] bg-[#111111] p-5 space-y-2 hover:border-brand/30 transition-colors">
                  <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                    <ShieldCheck class="h-4 w-4 text-brand shrink-0" />
                    <span>Transparent Governance</span>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed">
                    Explicit boundary controls and traceable execution trails that simplify compliance and management oversight.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-2 font-ui flex flex-wrap items-center gap-6">
              <NuxtLink
                to="/solutions"
                class="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight class="h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
              <span class="text-zinc-600 hidden sm:inline">|</span>
              <NuxtLink
                to="/products"
                class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-brand transition-colors"
              >
                <span>View Connected Products</span>
              </NuxtLink>
            </div>
          </div>

          <div
            class="lg:col-span-5 space-y-6 reveal-base transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': isWhoWeAreRevealed }"
          >
            <div class="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              

              <div class="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                <img
                  src="/images/executive-briefing.webp"
                  alt="Executive briefing room where technology strategy aligns with business operations"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="288"
                  class="h-full w-full object-cover img-editorial-zoom opacity-85 group-hover:opacity-100 transition-opacity"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

                <div class="absolute top-4 left-4 right-4 flex items-center justify-between font-ui text-xs text-zinc-300">
                  <span class="px-2.5 py-1 rounded bg-black/80 border border-white/10 text-white flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>Executive Briefing</span>
                  </span>
                  <span class="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-brand text-xs">
                    Strategic Alignment
                  </span>
                </div>

                <div class="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-[#161616] p-3.5 space-y-1 font-ui">
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-zinc-200 font-semibold">Operational Alignment</span>
                    <span class="text-zinc-400 text-xs">Strategy</span>
                  </div>
                  <p class="text-zinc-400 font-editorial text-xs leading-snug">
                    Aligning technology investments with operational reality and accountability.
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-white/10 bg-[#0c131e]/90 p-6 sm:p-7 space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] font-ui">
              <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                <div class="flex items-center gap-2 text-zinc-200 font-medium">
                  <Building2 class="h-4 w-4 text-brand" />
                  <span>Enterprise Systems Model</span>
                </div>
                <span class="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/20 font-medium">
                  Unified
                </span>
              </div>

              <div class="space-y-3 text-xs">
                <div class="rounded-xl border border-white/[0.06] bg-[#0f1826] p-3.5 space-y-1.5">
                  <div class="flex items-center justify-between text-zinc-300 font-semibold text-xs">
                    <span class="flex items-center gap-2">
                      <Split class="h-3.5 w-3.5 text-zinc-400" />
                      Distributed Operational Tools
                    </span>
                    <span class="text-zinc-400 text-xs">Uncoordinated</span>
                  </div>
                  <p class="text-zinc-400 text-xs leading-relaxed">
                    ERP databases, disparate CRM systems, spreadsheet trackers, and legacy APIs functioning in isolation.
                  </p>
                </div>

                <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                  <svg width="2" height="20" viewBox="0 0 2 20" fill="none" class="overflow-visible">
                    <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="20"
                      stroke="#08E888"
                      stroke-width="1.5"
                      stroke-dasharray="20"
                      :stroke-dashoffset="isWhoWeAreRevealed ? '0' : '20'"
                      class="transition-all duration-700 delay-300 ease-out"
                    />
                  </svg>
                </div>

                <div
                  class="rounded-xl border border-brand/35 bg-brand/[0.06] p-3.5 space-y-1.5 relative overflow-hidden transition-all duration-700 delay-500"
                  :class="{ '': isWhoWeAreRevealed }"
                >
                  <div class="flex items-center justify-between text-brand font-semibold text-xs">
                    <span class="flex items-center gap-2">
                      <Layers class="h-4 w-4 text-brand" />
                      KavoraX Connected Business Fabric
                    </span>
                    <span class="text-xs text-brand bg-brand/15 px-2 py-0.5 rounded border border-brand/30 font-medium">
                      Connected
                    </span>
                  </div>
                  <p class="text-zinc-200 text-xs leading-relaxed">
                    Real-time workflow execution, synchronized telemetry feeds, and resilient multi-system bridge protocols.
                  </p>
                </div>

                <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                  <svg width="2" height="20" viewBox="0 0 2 20" fill="none" class="overflow-visible">
                    <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="20"
                      stroke="#08E888"
                      stroke-width="1.5"
                      stroke-dasharray="20"
                      :stroke-dashoffset="isWhoWeAreRevealed ? '0' : '20'"
                      class="transition-all duration-700 delay-700 ease-out"
                    />
                  </svg>
                </div>

                <div class="rounded-xl border border-white/[0.06] bg-[#0f1826] p-3.5 space-y-1.5">
                  <div class="flex items-center justify-between text-zinc-300 font-semibold text-xs">
                    <span class="flex items-center gap-2">
                      <GitCommit class="h-3.5 w-3.5 text-brand" />
                      Unified Business Operations
                    </span>
                    <span class="text-brand text-xs font-medium">Synchronized</span>
                  </div>
                  <p class="text-zinc-400 text-xs leading-relaxed">
                    Continuous visibility for leadership, frictionless handoffs for teams, and dependable audit readiness.
                  </p>
                </div>
              </div>

              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span>KavoraX Global Private Limited</span>
                <span class="text-zinc-400">Enterprise Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="our-approach"
      ref="approachHeaderRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-b border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isApproachHeaderRevealed }"
        >
          <ChapterLabel label="How We Work" />
          <div class="flex items-center gap-4 text-xs text-zinc-400">
            <span class="text-zinc-300">Our Methodology</span>
          </div>
        </div>

        <div
          class="max-w-3xl space-y-4 mb-20 reveal-base transition-editorial duration-700 delay-100"
          :class="{ 'is-revealed': isApproachHeaderRevealed }"
        >
          <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
  Connected thinking. Practical solutions.
</h2>
          <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
            Meaningful technological progress requires understanding business realities first.
            Our approach connects workflows, information, and people to build clarity without unnecessary complexity.
          </p>
        </div>

        <div class="space-y-16 lg:space-y-24">
          <div
            ref="phase1Ref"
            class="rounded-2xl border border-white/[0.08] bg-[#111111] p-8 sm:p-12 relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
            :class="{ 'is-revealed': isPhase1Revealed }"
          >
            

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div class="lg:col-span-7 space-y-6">
                <div class="flex items-center gap-4">
                  <span class="font-editorial text-5xl sm:text-6xl font-semibold text-brand/50 group-hover:text-brand transition-colors">
                    01
                  </span>
                  <div class="h-8 w-px bg-white/10" />
                  <div class="font-ui">
                    <span class="text-xs text-brand font-medium block">
                      Discovery &amp; Strategy
                    </span>
                    <span class="text-xs text-zinc-500">Step 1</span>
                  </div>
                </div>

                <div class="space-y-2 font-ui">
                  <h3 class="font-editorial text-2xl sm:text-4xl font-medium text-white group-hover:text-brand transition-colors">
                    Understand the Business
                  </h3>
                  <div class="text-xs text-zinc-400 font-medium">
                    Requirements Before Architecture
                  </div>
                </div>

                <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                  We believe sound technological solutions start with clear business understanding. Before proposing software modules or integration strategies, we examine your core operational dynamics, organizational dependencies, and real business priorities to ensure engineering serves practical needs.
                </p>

                <div class="pt-4 border-t border-white/[0.06] space-y-3 font-ui text-xs sm:text-sm">
                  <div class="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-relaxed">Prioritize verified operational friction over hypothetical features</span>
                  </div>
                  <div class="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-relaxed">Assess existing toolchains and legacy systems to leverage current investments</span>
                  </div>
                  <div class="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-relaxed">Align technical scope directly with measurable business objectives</span>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-5">
                <div class="rounded-xl border border-white/10 overflow-hidden bg-zinc-950 relative group">
                  <div class="relative h-64 sm:h-72 w-full">
                    <img
                      src="/images/tech-infrastructure.webp"
                      alt="Process mapping and business analysis studio"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="288"
                      class="h-full w-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-opacity"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                    <div class="absolute top-4 left-4 right-4 flex items-center justify-between font-ui text-xs text-zinc-300">
                      <span class="px-2.5 py-1 rounded bg-black/80 border border-white/10 flex items-center gap-1.5 text-white">
                        <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                        Process Mapping
                      </span>
                      <span class="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-brand">
                        Operational Analysis
                      </span>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-[#161616] p-3">
                      <span class="font-ui text-xs font-semibold text-zinc-200 block">Baseline Process Audit</span>
                      <p class="font-editorial text-xs text-zinc-400 mt-0.5">
                        Mapping data lifecycles and manual handoffs before touching code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref="phase2Ref"
            class="rounded-2xl border border-white/[0.08] bg-[#111111] p-8 sm:p-12 relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
            :class="{ 'is-revealed': isPhase2Revealed }"
          >
            

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div class="lg:col-span-5 order-2 lg:order-1 font-ui">
                <div class="rounded-xl border border-white/10 bg-[#0f1724]/90 p-5 space-y-4 shadow-inner">
                  <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                    <span class="text-zinc-200 font-medium flex items-center gap-2">
                      <Network class="h-3.5 w-3.5 text-brand" />
                      Multi-System Data Bus
                    </span>
                    <span class="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/20 font-medium">
                      Live Sync
                    </span>
                  </div>

                  <div class="space-y-2.5 text-xs">
                    <div class="rounded-lg border border-white/5 bg-[#1C1C1C] p-3 flex items-center justify-between">
                      <div class="flex items-center gap-2 text-zinc-300">
                        <Database class="h-3.5 w-3.5 text-zinc-400" />
                        <span>Enterprise ERP Feeds</span>
                      </div>
                      <span class="text-xs text-brand font-medium">Synchronized</span>
                    </div>

                    <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                      <svg width="2" height="18" viewBox="0 0 2 18" fill="none" class="overflow-visible">
                        <line x1="1" y1="0" x2="1" y2="18" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="18"
                          stroke="#08E888"
                          stroke-width="1.5"
                          stroke-dasharray="18"
                          :stroke-dashoffset="isPhase2Revealed ? '0' : '18'"
                          class="transition-all duration-700 delay-300 ease-out"
                        />
                      </svg>
                    </div>

                    <div
                      class="rounded-lg border border-brand/30 bg-brand/10 p-3 flex items-center justify-between transition-all duration-700 delay-500"
                      :class="{ '': isPhase2Revealed }"
                    >
                      <div class="flex items-center gap-2 text-white font-medium">
                        <GitMerge class="h-3.5 w-3.5 text-brand" />
                        <span>KavoraX Event Engine</span>
                      </div>
                      <span class="text-xs text-brand font-medium">Coordinated</span>
                    </div>

                    <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                      <svg width="2" height="18" viewBox="0 0 2 18" fill="none" class="overflow-visible">
                        <line x1="1" y1="0" x2="1" y2="18" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="18"
                          stroke="#08E888"
                          stroke-width="1.5"
                          stroke-dasharray="18"
                          :stroke-dashoffset="isPhase2Revealed ? '0' : '18'"
                          class="transition-all duration-700 delay-700 ease-out"
                        />
                      </svg>
                    </div>

                    <div class="rounded-lg border border-white/5 bg-[#1C1C1C] p-3 flex items-center justify-between">
                      <div class="flex items-center gap-2 text-zinc-300">
                        <ShieldCheck class="h-3.5 w-3.5 text-zinc-400" />
                        <span>Executive Observability</span>
                      </div>
                      <span class="text-xs text-brand font-medium">Traceable</span>
                    </div>
                  </div>

                  <div class="pt-2 text-xs text-zinc-400 text-center">
                    No disruptive rip-and-replace required
                  </div>
                </div>
              </div>

              <div class="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div class="flex items-center gap-4">
                  <span class="font-editorial text-5xl sm:text-6xl font-semibold text-brand/50 group-hover:text-brand transition-colors">
                    02
                  </span>
                  <div class="h-8 w-px bg-white/10" />
                  <div class="font-ui">
                    <span class="text-xs text-brand font-medium block">
                      Integration &amp; Automation
                    </span>
                    <span class="text-xs text-zinc-500">Step 2</span>
                  </div>
                </div>

                <div class="space-y-2 font-ui">
                  <h3 class="font-editorial text-2xl sm:text-4xl font-medium text-white group-hover:text-brand transition-colors">
                    Connect the Moving Parts
                  </h3>
                  <div class="text-xs text-zinc-400 font-medium">
                    Workflows, Systems &amp; Information
                  </div>
                </div>

                <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                  Enterprise efficiency is hindered when critical information and responsibilities are siloed. KavoraX focuses on unifying decentralized workflows, disparate system records, and cross-departmental handoffs into a coordinated operational environment without requiring disruptive system overhauls.
                </p>

                <div class="pt-4 border-t border-white/[0.06] space-y-3 font-ui text-xs sm:text-sm">
                  <div class="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-relaxed">Establish dependable cross-system interoperability across APIs and databases</span>
                  </div>
                  <div class="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-relaxed">Synchronize operational data and status updates without manual re-entry</span>
                  </div>
                  <div class="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span class="leading-relaxed">Bridge gaps between administrative teams and technical operators</span>
                  </div>
                </div>

                <div class="pt-2">
                  <span class="inline-flex items-center gap-2 rounded bg-[#101a26] border border-white/10 px-3 py-1 font-ui text-xs text-zinc-300">
                    <Network class="h-3.5 w-3.5 text-brand" />
                    Unified Event-Driven Sync
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref="phase3Ref"
            class="rounded-2xl border border-white/[0.08] bg-[#111111] p-8 sm:p-12 relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
            :class="{ 'is-revealed': isPhase3Revealed }"
          >
            

            <div class="space-y-8">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-ui">
                <div class="flex items-center gap-4">
                  <span class="font-editorial text-5xl sm:text-6xl font-semibold text-brand/50 group-hover:text-brand transition-colors">
                    03
                  </span>
                  <div class="h-8 w-px bg-white/10" />
                  <div>
                    <span class="text-xs text-brand font-medium block">
                      Continuous Evolution
                    </span>
                    <span class="text-xs text-zinc-500">Step 3</span>
                  </div>
                </div>

                <div class="text-xs text-zinc-400">
                  Modular &amp; Scalable Architecture
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start font-ui">
                <div class="lg:col-span-6 space-y-4">
                  <h3 class="font-editorial text-2xl sm:text-4xl font-medium text-white group-hover:text-brand transition-colors">
                    Build for Change
                  </h3>
                  <div class="text-xs text-zinc-400 font-medium">
                    Adaptability by Design
                  </div>
                  <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                    Business models, regulatory demands, and software stacks inevitably shift over time. We approach architecture with modular flexibility as a foundational design goal, creating systems structured to accommodate new requirements and operational scale smoothly.
                  </p>
                  <div class="pt-2">
                    <span class="inline-flex items-center gap-2 rounded bg-[#101a26] border border-white/10 px-3 py-1 text-xs text-zinc-300">
                      <RefreshCw class="h-3.5 w-3.5 text-brand" />
                      Modular Architecture
                    </span>
                  </div>
                </div>

                <div class="lg:col-span-6 space-y-3 text-xs sm:text-sm">
                  <div class="p-4 rounded-xl border border-white/[0.06] bg-[#0f1724]/60 space-y-1 hover:border-brand/30 transition-colors">
                    <div class="flex items-center gap-2 text-white font-medium">
                      <Sliders class="h-4 w-4 text-brand shrink-0" />
                      <span>Decoupled Components</span>
                    </div>
                    <p class="text-zinc-400 leading-relaxed text-xs">
                      Design software modules that can be updated, scaled, or adjusted independently without introducing systemic failure risks.
                    </p>
                  </div>

                  <div class="p-4 rounded-xl border border-white/[0.06] bg-[#0f1724]/60 space-y-1 hover:border-brand/30 transition-colors">
                    <div class="flex items-center gap-2 text-white font-medium">
                      <Cpu class="h-4 w-4 text-brand shrink-0" />
                      <span>Incremental Expansion</span>
                    </div>
                    <p class="text-zinc-400 leading-relaxed text-xs">
                      Enable businesses to roll out new capabilities incrementally as operational requirements mature and scale dictates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="connected-architecture"
      ref="archSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-b border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isAboutArchRevealed }"
        >
          <ChapterLabel label="Our Architecture" />
          <div class="flex items-center gap-4 text-xs text-zinc-400">
            <span class="text-zinc-300">Connected Model</span>
          </div>
        </div>

        <div
          class="max-w-3xl space-y-4 mb-16 reveal-base transition-editorial duration-700 delay-100"
          :class="{ 'is-revealed': isAboutArchRevealed }"
        >
          <h2 class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
  A More Connected View of Business.
</h2>

          <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
            When operations, systems, data, and governance function as unified elements, organisations
            achieve greater resilience. KavoraX aligns these four dimensions into one cohesive
            operational model.
          </p>
        </div>

        <div
          class="relative rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] group reveal-base transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isAboutArchRevealed }"
        >
          

          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-white/[0.06] gap-4 font-ui"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand"
              >
                <Layers class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-white font-ui">
                  The Four Interconnected Dimensions of Business
                </h3>
                <p class="text-xs text-zinc-400">
                  Synchronizing enterprise operations, data, software, and governance
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <span
                class="font-ui text-xs text-brand bg-brand/10 px-2.5 py-1 rounded border border-brand/20 font-medium"
              >
                Four Core Pillars
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-ui">
            <div
              v-for="dim in architecturalDimensions"
              :key="dim.id"
              class="group/card relative rounded-xl border p-6 sm:p-7 transition-all duration-300 cursor-pointer"
              :class="[
                activeDimId === dim.id
                  ? 'border-brand/50 bg-[#1C1C1C]'
                  : 'border-white/[0.08] bg-[#1C1C1C] hover:border-brand/35 hover:bg-[#121d2c]'
              ]"
              @click="selectDimension(dim.id)"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300"
                    :class="[
                      activeDimId === dim.id
                        ? 'bg-brand/20 border-brand text-brand'
                        : 'bg-[#1C1C1C] border-white/10 text-brand group-hover/card:scale-105'
                    ]"
                  >
                    <component :is="dim.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-ui text-brand font-medium">
                        {{ dim.tag }}
                      </span>
                    </div>
                    <h4
                      class="font-editorial text-2xl font-semibold text-white group-hover/card:text-brand transition-colors mt-0.5"
                    >
                      {{ dim.title }}
                    </h4>
                  </div>
                </div>

                <span
                  class="h-2 w-2 rounded-full transition-colors"
                  :class="activeDimId === dim.id ? 'bg-brand animate-pulse' : 'bg-white/20'"
                />
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {{ dim.description }}
              </p>

              <div class="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(el, eIdx) in dim.elements"
                    :key="eIdx"
                    class="bg-black/50 text-zinc-300 px-2.5 py-1 rounded border border-white/5 font-ui text-xs"
                  >
                    {{ el }}
                  </span>
                </div>
                <span class="font-ui text-xs text-brand font-medium">
                  {{ dim.telemetry }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-8 rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 sm:p-6 font-ui">
            <Transition name="dimension-fade" mode="out-in">
              <div :key="activeDimId">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <div class="flex items-center gap-2">
                    <span class="text-xs text-brand font-medium">Selected Dimension:</span>
                    <span class="text-sm text-white font-medium">
                      {{ architecturalDimensions.find(d => d.id === activeDimId)?.title }}
                    </span>
                  </div>
                  <div class="text-xs text-zinc-400 flex items-center gap-2">
                    <span>Platform State:</span>
                    <span class="text-brand font-medium">Connected &amp; Monitored</span>
                  </div>
                </div>
                <p class="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-editorial">
                  "In a mature enterprise, no single dimension operates as an island. Operational processes trigger data records, software systems capture transactions, and governance rules continuously ensure auditable integrity."
                </p>
              </div>
            </Transition>
          </div>

          <div
            class="mt-8 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 font-ui text-xs text-zinc-400"
          >
            <div class="flex items-center gap-2 text-zinc-300">
              <span class="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span>Operations flow into Data · Systems support Workflows · Governance protects all layers</span>
            </div>
            <NuxtLink
              to="/products"
              class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors group"
            >
              <span>Explore Connected Products</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section
      id="guiding-principles"
      ref="guidesTargetRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-b border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isGuidesRevealed }"
        >
          <ChapterLabel label="Our Principles" />
          <div class="flex items-center gap-4 text-xs text-zinc-400">
            <span class="text-zinc-300">Core Values</span>
          </div>
        </div>

        <div
          class="max-w-3xl space-y-4 mb-20 reveal-base transition-editorial duration-700 delay-100"
          :class="{ 'is-revealed': isGuidesRevealed }"
        >
          <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
  What guides us: Pragmatic values.
</h2>
          <p class="font-editorial text-xl sm:text-2xl text-zinc-300 leading-relaxed">
            Four foundational principles inform our engineering decisions, client collaborations,
            and long-term architectural standards.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-ui">
          <div
            v-for="(item, pIdx) in principles"
            :key="item.id"
            class="rounded-2xl border border-white/[0.08] bg-[#0c131e]/90 p-8 sm:p-10 hover:border-brand/40 transition-all duration-300 group flex flex-col justify-between relative reveal-base transition-editorial duration-700"
            :class="{ 'is-revealed': isGuidesRevealed }"
            :style="{ transitionDelay: isGuidesRevealed ? `${pIdx * 90 + 100}ms` : '0ms' }"
          >
            

            <div>
              <div class="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div class="flex items-center gap-3.5">
                  <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1C1C1C] border border-white/10 text-brand group-hover:scale-105 transition-transform">
                    <component :is="item.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <span class="text-xs text-brand font-medium block">{{ item.subtitle }}</span>
                    <div class="text-xs text-zinc-400">Guiding Principle</div>
                  </div>
                </div>
                <span class="font-editorial text-4xl sm:text-5xl font-semibold text-zinc-600 group-hover:text-brand transition-colors">
                  {{ item.num }}
                </span>
              </div>

              <div class="mt-6 space-y-3">
                <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors">
                  {{ item.title }}
                </h3>
                <p class="font-ui text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div class="mt-8 pt-5 border-t border-white/[0.06] space-y-3">
              <div class="font-editorial text-base text-zinc-200">
                "{{ item.quote }}"
              </div>
              <div class="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
                <span>{{ item.commitment }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 rounded-xl border border-white/[0.06] bg-[#111111] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-ui text-xs text-zinc-400">
          <div class="flex items-center gap-2.5">
            <ShieldCheck class="h-4 w-4 text-brand shrink-0" />
            <span>Every principle represents practical engineering commitments implemented directly across KavoraX platforms.</span>
          </div>
          <span class="text-zinc-400 shrink-0 font-medium">
            Guaranteed Transparency
          </span>
        </div>
      </div>
    </section>

    <section
      id="about-cta"
      ref="aboutCtaSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden"
    >
      

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] group reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isAboutCtaRevealed }"
        >
          

          <div class="flex justify-center mb-8">
            <ChapterLabel label="Work With Us" />
          </div>

          <h2 class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
  Let's Move Your Business Forward.
</h2>

          <p
            class="mt-6 font-ui text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Explore how connected business solutions could support your organisation's needs.
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-ui text-zinc-400">
            <span class="flex items-center gap-1.5">
              <Cpu class="h-3.5 w-3.5 text-brand" />
              <span>Architecture-First Review</span>
            </span>
            <span class="text-zinc-600 hidden sm:inline">•</span>
            <span class="flex items-center gap-1.5">
              <ShieldCheck class="h-3.5 w-3.5 text-brand" />
              <span>No Forced Migrations</span>
            </span>
            <span class="text-zinc-600 hidden sm:inline">•</span>
            <span class="flex items-center gap-1.5 text-zinc-300">
              <span class="h-1.5 w-1.5 rounded-full bg-brand" />
              <span>Direct Technical Leadership</span>
            </span>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200 group/btn"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/products" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/10 bg-[#1C1C1C] hover:bg-[#1C1C1C] text-zinc-200 hover:text-white px-7 py-6 text-base transition-colors"
              >
                <Layers class="mr-2 h-4 w-4 text-brand" />
                <span>Explore Platform Products</span>
              </Button>
            </NuxtLink>
          </div>

          <div class="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-ui text-zinc-400">
            <span class="text-zinc-300 font-medium">KavoraX Global Private Limited</span>
            <span class="text-zinc-400 text-xs">Connected Technology &amp; Enterprise Solutions</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dimension-fade-enter-active,
.dimension-fade-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}
.dimension-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.dimension-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
@media (prefers-reduced-motion: reduce) {
  .dimension-fade-enter-active,
  .dimension-fade-leave-active {
    transition: none !important;
  }
}
</style>
