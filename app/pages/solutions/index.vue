<script setup lang="ts">
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import InventoryTable from '~/components/product-ui/InventoryTable.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Radio,
  CheckCircle2,
  AlertCircle,
  Cpu,
  BarChart3,
  Network,
  Link2,
  Sparkles,
  Workflow,
  Target,
  Server,
  TrendingUp,
  Building2,
  Landmark,
  Activity,
  Truck,
  MessageSquare,
  Calendar
} from 'lucide-vue-next'

useHead({
  title: 'Connected Solutions | KavoraX Global Private Limited',
  meta: [
    {
      name: 'description',
      content:
        'Explore how connected technology helps businesses simplify operations, improve visibility, and move forward with greater confidence.'
    },
    {
      property: 'og:title',
      content: 'Connected Solutions | KavoraX Global Private Limited'
    },
    {
      property: 'og:description',
      content:
        'Explore how connected technology helps businesses simplify operations, improve visibility, and move forward with greater confidence.'
    }
  ]
})


// Hero
const heroRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeroRevealed } = useScrollReveal(heroRef, { immediate: true })

// Business Needs
const needsHeaderRef = ref<HTMLElement | null>(null)
const { isRevealed: isNeedsHeaderRevealed } = useScrollReveal(needsHeaderRef, { threshold: 0.12 })

const needsStickyRef = ref<HTMLElement | null>(null)
const { isRevealed: isNeedsStickyRevealed } = useScrollReveal(needsStickyRef, { threshold: 0.12 })

const needsCardsRef = ref<HTMLElement | null>(null)
const { isRevealed: isNeedsCardsRevealed } = useScrollReveal(needsCardsRef, { threshold: 0.12 })

const storytellingPairs = [
  {
    tag: 'Workflows',
    problemTitle: 'Disconnected Tools & Siloed Workflows',
    problemText:
      'When core operational teams rely on separate software tools that do not communicate, critical data must be manually transcribed or re-entered, creating handoff delays, errors, and operational friction.',
    solutionTitle: 'Coordinated Operational Flow',
    solutionText:
      'Unified workflow routing eliminates manual data re-entry by synchronizing task handoffs automatically across departments.',
    relatedProduct: 'Operations Platform',
    relatedLink: '/products#operations-platform'
  },
  {
    tag: 'Visibility',
    problemTitle: 'Limited Operational Visibility',
    problemText:
      'Dispersed data stores make it challenging for leadership to maintain a clear, unified view of business activity, making it harder to spot bottlenecks or evaluate performance trends in a timely manner.',
    solutionTitle: 'Authoritative Telemetry & Signals',
    solutionText:
      'Continuous telemetry aggregation equips decision-makers with sub-second operational reporting, trend detection, and system health insights.',
    relatedProduct: 'Analytics & Insights',
    relatedLink: '/products#analytics-insights'
  },
  {
    tag: 'Execution',
    problemTitle: 'Repetitive Manual Processes',
    problemText:
      'Routine operational handoffs, status checks, and data reconciliations consume valuable team hours when software systems lack the capability to coordinate events or notify downstream stakeholders automatically.',
    solutionTitle: 'Automated Event Coordination',
    solutionText:
      'Policy-governed event triggers execute deterministic handoffs without requiring fragile manual scripts or administrative intervention.',
    relatedProduct: 'Operations Platform',
    relatedLink: '/products#operations-platform'
  },
  {
    tag: 'Interoperability',
    problemTitle: 'Difficulty Adapting as Needs Evolve',
    problemText:
      'Rigid architectures and brittle custom scripts can make systems slow to adapt. When organizational priorities or regulatory requirements shift, modifying disconnected infrastructure often requires excessive rework.',
    solutionTitle: 'Extensible Integration Fabric',
    solutionText:
      'Standardized protocol adapters bridge legacy databases, ERPs, and modern cloud applications into a future-ready, interchangeable architecture.',
    relatedProduct: 'Integration Hub',
    relatedLink: '/products#integration-hub'
  }
]

// Solution Areas & Approach
const activePhase = ref(1)

const areasHeaderRef = ref<HTMLElement | null>(null)
const { isRevealed: isAreasHeaderRevealed } = useScrollReveal(areasHeaderRef, { threshold: 0.12 })

const areasSchematicRef = ref<HTMLElement | null>(null)
const { isRevealed: isAreasSchematicRevealed } = useScrollReveal(areasSchematicRef, { threshold: 0.12 })

const solutionAreasRef = ref<HTMLElement | null>(null)
const { isRevealed: isSolutionAreasRevealed } = useScrollReveal(solutionAreasRef, { threshold: 0.12 })

const schematicNodes = [
  { cx: 150, color: '#08E888' },
  { cx: 450, color: '#08E888' },
  { cx: 750, color: '#08EC8D' }
]

const solutionAreas = [
  {
    id: 'operations-platform',
    title: 'Operations Platform',
    category: 'Core Operations Engine',
    icon: Cpu,
    tagline: 'Orchestrating cross-functional workflows with deterministic precision.',
    description:
      'Engineered to streamline business workflows, reduce administrative friction, and coordinate mission-critical activities across distributed teams without fragile manual handoffs.',
    capabilities: [
      'Cross-departmental workflow coordination',
      'Structured operational handoffs',
      'Policy-governed task execution monitoring'
    ],
    link: '/products#operations-platform',
    linkText: 'Explore Operations Platform'
  },
  {
    id: 'analytics-insights',
    title: 'Analytics & Insights',
    category: 'Visibility & Intelligence',
    icon: BarChart3,
    tagline: 'Translating continuous telemetry into immediate operational visibility.',
    description:
      'Translates operational business data into actionable visibility, equipping decision-makers with timely clarity on activity, resource saturation, and cross-platform bottlenecks.',
    capabilities: [
      'Centralized operational telemetry reporting',
      'Real-time business activity visibility',
      'Cross-system performance metrics'
    ],
    link: '/products#analytics-insights',
    linkText: 'Explore Analytics Solutions'
  },
  {
    id: 'integration-hub',
    title: 'Integration Hub',
    category: 'Interoperability Fabric',
    icon: Network,
    tagline: 'Bridging legacy databases and modern cloud microservices seamlessly.',
    description:
      'Facilitates structured interoperability across existing software environments, bridging legacy systems and cloud applications into synchronized data flows.',
    capabilities: [
      'Multi-system operational synchronization',
      'Structured data exchange pipelines',
      'Extensible cross-platform bridging'
    ],
    link: '/products#integration-hub',
    linkText: 'Explore Integration Hub'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Start with business goals and operational needs.',
    detail:
      'Before evaluating software capabilities, identify the specific business outcomes, compliance boundaries, and operational handoffs that define daily operations.',
    icon: Compass,
    action: 'Operational Audit & Workflow Mapping',
    metric: 'Goal & Boundary Definition'
  },
  {
    number: '02',
    title: 'Connect',
    tagline: 'Consider how tools, information, and workflows fit together.',
    detail:
      'Examine the connective tissue between disparate applications. True efficiency emerges when information moves predictably between platforms without manual intervention.',
    icon: Link2,
    action: 'Interoperable Protocol & Event Synchronization',
    metric: 'Real-Time Interoperability'
  },
  {
    number: '03',
    title: 'Adapt',
    tagline: 'Plan for changing priorities and future requirements.',
    detail:
      'Technology should accommodate organizational growth and evolving operational needs, allowing systems to scale without requiring complete architectural replacement.',
    icon: Sparkles,
    action: 'Modular Evolution & Sustainable Scale',
    metric: 'Future-Ready Architecture'
  }
]

// Evaluation
const evalHeaderRef = ref<HTMLElement | null>(null)
const { isRevealed: isEvalHeaderRevealed } = useScrollReveal(evalHeaderRef, { threshold: 0.12 })

const evalLedgerRef = ref<HTMLElement | null>(null)
const { isRevealed: isEvalLedgerRevealed } = useScrollReveal(evalLedgerRef, { threshold: 0.12 })

const evalFootnoteRef = ref<HTMLElement | null>(null)
const { isRevealed: isEvalFootnoteRevealed } = useScrollReveal(evalFootnoteRef, { threshold: 0.12 })

const considerations = [
  {
    category: 'Operational Focus',
    title: 'Business Priorities',
    question: 'What specific outcome is your organization trying to unlock?',
    description:
      'Clarify whether your near-term priority is eliminating manual cross-department handoffs, centralizing live performance telemetry, or meeting rigorous compliance audit standards. Clear outcomes prevent scope creep and establish direct criteria for success.',
    icon: Target,
    diagnostic: 'Define core workflow bottleneck & target cycle time.'
  },
  {
    category: 'System Dependencies',
    title: 'Existing Environment & Constraints',
    question: 'Which legacy systems, databases, or compliance boundaries must be respected?',
    description:
      'Review established ERPs, custom on-premise databases, cloud microservices, and regional data residency constraints currently in production. Understanding constraints ensures new solutions complement rather than disrupt ongoing business operations.',
    icon: Server,
    diagnostic: 'Map existing protocol endpoints and integration boundaries.'
  },
  {
    category: 'Long-Term Horizon',
    title: 'Future Adaptability & Scale',
    question: 'How might organizational requirements evolve over the next 24 to 36 months?',
    description:
      'Anticipate how increased transaction volumes, cross-border expansion, or new regulatory mandates could impact system architecture. Planning for modular evolution prevents costly re-platforming and compounding technical debt.',
    icon: TrendingUp,
    diagnostic: 'Ensure architecture allows modular layer upgrades.'
  }
]

// Industries
const industriesHeaderRef = ref<HTMLElement | null>(null)
const { isRevealed: isIndustriesHeaderRevealed } = useScrollReveal(industriesHeaderRef, { threshold: 0.12 })

const industriesGridRef = ref<HTMLElement | null>(null)
const { isRevealed: isIndustriesGridRevealed } = useScrollReveal(industriesGridRef, { threshold: 0.12 })

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

// Closing CTA
const solutionsCtaRef = ref<HTMLElement | null>(null)
const { isRevealed: isSolutionsCtaRevealed } = useScrollReveal(solutionsCtaRef, { threshold: 0.12 })
</script>

<template>
  <div class="min-h-screen bg-[#0A0A0A] text-white">
    <section
      ref="heroRef"
      class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#0A0A0A] border-b border-white/[0.08]"
    >
      
      
      <div class="absolute inset-0 opacity-40 pointer-events-none -z-10" aria-hidden="true" />

      <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
          <div class="flex items-center gap-3">
            <ChapterLabel label="Tailored Solutions" />
          </div>

          <div class="flex items-center gap-4 text-xs text-zinc-400">
            <span class="hidden md:inline-flex items-center gap-1.5">
              <Radio class="h-3 w-3 text-brand" />
              <span>ALIGNMENT: <strong class="text-white font-mono">DETERMINISTIC</strong></span>
            </span>
            <span class="text-zinc-600 hidden md:inline">|</span>
            <span>FRAMEWORK: <strong class="text-brand font-mono">CONNECTED ENTERPRISE</strong></span>
            <span class="text-zinc-600">|</span>
            <span class="text-zinc-400 font-mono">Overview</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div class="lg:col-span-7 space-y-7">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand font-medium reveal-base transition-editorial duration-700 delay-150"
              :class="{ 'is-revealed': isHeroRevealed }"
            >
              <span class="flex h-1.5 w-1.5 rounded-full bg-brand" />
              <span>OUR SOLUTIONS</span>
            </div>

            <h1 class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words">
              Connected Solutions. Meaningful Business <span class="text-brand font-normal">Progress.</span>
            </h1>

            <p
              class="font-ui text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': isHeroRevealed }"
            >
              Explore how connected technology can help businesses simplify operations, improve
              visibility, and move forward with greater confidence.
            </p>

            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
              :class="{ 'is-revealed': isHeroRevealed }"
            >
              <NuxtLink to="/contact" class="w-full sm:w-auto">
                <Button
                  size="lg"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200 group"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NuxtLink>

              <NuxtLink to="/products" class="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-7 py-6 text-base rounded-md transition-all duration-200 group"
                >
                  <Layers class="mr-2 h-4 w-4 text-brand" />
                  <span>Explore Products</span>
                  <ArrowUpRight class="ml-1.5 h-3.5 w-3.5 text-zinc-500 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Button>
              </NuxtLink>
            </div>

            <div
              class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg font-ui reveal-base transition-editorial duration-700 delay-800"
              :class="{ 'is-revealed': isHeroRevealed }"
            >
              <div>
                <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Pragmatic</div>
                <div class="text-xs text-zinc-400 mt-1">Business-First Fit</div>
              </div>
              <div>
                <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Integrated</div>
                <div class="text-xs text-zinc-400 mt-1">Cross-Tool Synchrony</div>
              </div>
              <div>
                <div class="font-editorial text-2xl sm:text-3xl font-semibold text-white">Measurable</div>
                <div class="text-xs text-zinc-400 mt-1">Operational Clarity</div>
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            <div
              class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            <div
              class="relative rounded-2xl border border-white/[0.1] bg-[#111111] p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
            >
              

              <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div class="flex items-center gap-2.5">
                  <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 border border-brand/30 text-brand">
                    <Compass class="h-4 w-4" />
                  </div>
                  <div>
                    <div class="font-mono text-xs font-semibold text-white tracking-wide">
                      Solutions Blueprint
                    </div>
                    <div class="font-mono text-xs text-zinc-500">
                      MODULAR ENTERPRISE DELIVERY
                    </div>
                  </div>
                </div>

                <div class="font-mono text-xs text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                  VERIFIED ARCHITECTURE
                </div>
              </div>

              <div class="my-5">
                <UiDeviceFrame type="terminal" title="Counter Billing Terminal">
                  <PosBillingScreen embedded />
                </UiDeviceFrame>
              </div>

              <div class="space-y-2.5 font-mono text-xs">
                <div class="p-3 rounded-lg border border-white/[0.06] bg-[#0A0A0A] flex items-center justify-between">
                  <span class="text-zinc-400">01. OPERATIONAL ANALYSIS</span>
                  <span class="text-brand font-semibold flex items-center gap-1">
                    <CheckCircle2 class="h-3 w-3" />
                    <span>COMPLETE</span>
                  </span>
                </div>
                <div class="p-3 rounded-lg border border-brand/30 bg-brand/[0.05] flex items-center justify-between">
                  <span class="text-white font-semibold">02. CONNECTED DEPLOYMENT</span>
                  <span class="text-brand font-semibold">IN PROGRESS</span>
                </div>
                <div class="p-3 rounded-lg border border-white/[0.04] bg-[#0A0A0A] flex items-center justify-between text-zinc-500">
                  <span>03. ADAPTIVE SCALING</span>
                  <span>QUEUED</span>
                </div>
              </div>

              <div class="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span class="flex items-center gap-1.5">
                  <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                  <span>NO VENDOR LOCK-IN</span>
                </span>
                <span class="text-zinc-500">ZERO FRAGILE SCRIPTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="needsHeaderRef"
          class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isNeedsHeaderRevealed }"
        >
          <ChapterLabel label="Common Business Challenges" />
          <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial">Technology Should Work Around Your Business.</h2>
          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            As modern organizations scale, their technology landscape often fragments across standalone applications, distinct departmental toolchains, and legacy platforms. We contrast these critical friction points with connected architectural solutions.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start font-ui">
          <div
            ref="needsStickyRef"
            class="lg:col-span-5 sticky top-28 space-y-6 reveal-base transition-editorial duration-700"
            :class="{ 'is-revealed': isNeedsStickyRevealed }"
          >
            <div class="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#111111] shadow-2xl relative group">
              <div class="w-full">
                <UiDeviceFrame type="tablet" title="Inventory & Stock Control">
                  <InventoryTable embedded />
                </UiDeviceFrame>
              </div>
            </div>

            <div class="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
              <p class="font-editorial text-lg text-zinc-300 italic leading-relaxed">
                “True technological efficiency is not measured by the quantity of applications deployed, but by how cleanly information moves between them.”
              </p>
              <div class="mt-3 text-xs font-mono text-brand font-semibold">
                — KavoraX Architectural Principles
              </div>
            </div>
          </div>

          <div ref="needsCardsRef" class="lg:col-span-7 space-y-6">
            <div
              v-for="(item, idx) in storytellingPairs"
              :key="idx"
              class="p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#111111] relative hover:border-brand/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group reveal-card transition-editorial duration-700"
              :class="[{ 'is-revealed': isNeedsCardsRevealed }, 'stagger-' + (idx + 1)]"
            >
              

              <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span class="font-mono text-xs text-brand font-semibold tracking-wider">
                  {{ item.tag }}
                </span>
                <span class="text-xs font-mono text-zinc-400 uppercase">
                  COMPARATIVE ANALYSIS
                </span>
              </div>

              <div class="mt-5 space-y-2">
                <div class="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  <AlertCircle class="h-3.5 w-3.5" />
                  <span>The Operational Challenge</span>
                </div>
                <h3 class="font-editorial text-2xl font-semibold text-white">
                  {{ item.problemTitle }}
                </h3>
                <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {{ item.problemText }}
                </p>
              </div>

              <div class="my-5 flex items-center gap-3">
                <div class="h-[1px] flex-1 bg-white/[0.08]" />
                <div class="text-xs font-mono text-brand uppercase px-2.5 py-0.5 rounded border border-brand/25 bg-brand/[0.06] flex items-center gap-1.5">
                  <span class="h-1 w-1 rounded-full bg-brand" />
                  <span>RESOLVED VIA CONNECTED ARCHITECTURE</span>
                </div>
                <div class="h-[1px] flex-1 bg-white/[0.08]" />
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider font-mono">
                  <CheckCircle2 class="h-3.5 w-3.5" />
                  <span>The Connected Solution</span>
                </div>
                <h4 class="font-editorial text-xl font-semibold text-white">
                  {{ item.solutionTitle }}
                </h4>
                <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {{ item.solutionText }}
                </p>
              </div>

              <div class="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span class="text-zinc-400">POWERED BY:</span>
                <NuxtLink
                  :to="item.relatedLink"
                  class="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-white transition-colors group/link"
                >
                  <span>{{ item.relatedProduct }}</span>
                  <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-36 bg-[#0A0A0A] relative border-t border-white/[0.08] overflow-hidden">
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="areasHeaderRef"
          class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isAreasHeaderRevealed }"
        >
          <ChapterLabel label="Our Approach" />
          <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial">Architected for Organizational Coherence.</h2>
          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            KavoraX solutions are structured across three interconnected capabilities designed to address practical operational challenges in modern enterprise environments.
          </p>
        </div>

        <div
          ref="areasSchematicRef"
          class="mt-16 rounded-2xl border border-white/[0.1] bg-[#111111] p-8 sm:p-12 shadow-2xl relative reveal-card transition-editorial duration-700"
          :class="{ 'is-revealed': isAreasSchematicRevealed }"
        >
          

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-lg bg-brand/10 border border-brand/25 flex items-center justify-center text-brand">
                <Workflow class="h-4 w-4" />
              </div>
              <div>
                <span class="text-xs font-mono text-brand font-semibold tracking-wider uppercase">
                  THE CONNECTED ARCHITECTURE LIFECYCLE
                </span>
                <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                  A Structured, Three-Phase Engagement Model
                </h3>
              </div>
            </div>

            <div class="flex items-center gap-2 font-mono text-xs text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded">
              <Radio class="h-3 w-3 animate-pulse" />
              <span>PRAGMATIC ROLLOUT</span>
            </div>
          </div>

          <div class="my-6 hidden md:block">
            <svg class="w-full h-12" viewBox="0 0 900 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 150 24 L 750 24" stroke="rgba(255,255,255,0.08)" stroke-width="2" stroke-dasharray="4 4" />
              <path
                d="M 150 24 L 750 24"
                stroke="url(#flowGradient)"
                stroke-width="2.5"
                stroke-linecap="round"
                class="draw-path-primary drop-"
                :class="{ 'is-revealed': isAreasSchematicRevealed }"
              />
              
              <g
                v-for="node in schematicNodes"
                :key="node.cx"
                class="draw-node"
                :class="{ 'is-revealed': isAreasSchematicRevealed }"
              >
                <circle :cx="node.cx" cy="24" r="10" fill="#111111" :stroke="node.color" stroke-width="2" />
                <circle :cx="node.cx" cy="24" r="4" :fill="node.color" />
              </g>

              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#08E888" stop-opacity="0.8" />
                  <stop offset="50%" stop-color="#08E888" stop-opacity="0.8" />
                  <stop offset="100%" stop-color="#08EC8D" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative font-ui">
            <div
              v-for="(step, idx) in processSteps"
              :key="step.number"
              class="p-6 sm:p-7 rounded-xl border transition-all duration-200 ease-out relative group cursor-pointer"
              :class="[
                activePhase === idx
                  ? 'border-brand/50 bg-[#1C1C1C] scale-[1.01]'
                  : 'border-white/[0.07] bg-[#111111] hover:border-white/20 hover:bg-[#161616]'
              ]"
              @click="activePhase = idx"
            >
              <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-sm font-semibold text-brand">[ {{ step.number }} ]</span>
                  <span class="text-xs font-semibold text-white tracking-wide uppercase">{{ step.title }}</span>
                </div>
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors shrink-0"
                  :class="[
                    activePhase === idx
                      ? 'border-brand/40 bg-brand/15 text-brand'
                      : 'border-white/10 bg-white/[0.02] text-zinc-400'
                  ]"
                >
                  <component :is="step.icon" class="h-4 w-4" />
                </div>
              </div>

              <div class="mt-5 space-y-2">
                <div class="font-editorial text-xl font-medium text-white leading-snug">
                  {{ step.tagline }}
                </div>
                <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  {{ step.detail }}
                </p>
              </div>

              <div class="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span class="text-zinc-500">DELIVERABLE:</span>
                <span class="text-brand font-semibold">{{ step.action }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
            <span class="flex items-center gap-2 text-zinc-300">
              <span class="h-2 w-2 rounded-full bg-brand" />
              <span>CONTINUOUS COHERENCE: NO COMPROMISE ON EXISTING WORKFLOWS</span>
            </span>
            <span class="text-brand flex items-center gap-1.5">
              <CheckCircle2 class="h-3.5 w-3.5" />
              <span>ZERO-DISRUPTION ROLLOUT</span>
            </span>
          </div>
        </div>

        <div ref="solutionAreasRef" class="mt-20">
          <div class="flex items-center justify-between pb-6 border-b border-white/[0.08] font-mono text-xs text-zinc-400">
            <span class="text-brand font-semibold">Capability Application</span>
            <span class="text-zinc-400">CONNECTED SOLUTIONS MATRIX</span>
          </div>

          <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 font-ui">
            <div
              v-for="(area, i) in solutionAreas"
              :key="area.id"
              class="p-8 rounded-2xl border border-white/[0.08] bg-[#111111] relative group hover:border-brand/40 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] reveal-card transition-editorial duration-700"
              :class="[{ 'is-revealed': isSolutionAreasRevealed }, 'stagger-' + (i + 1)]"
            >
              

              <div class="space-y-5">
                <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand">
                    <component :is="area.icon" class="h-5 w-5" />
                  </div>
                  <span class="font-mono text-xs text-brand font-medium tracking-wider uppercase">
                    {{ area.category }}
                  </span>
                </div>

                <h4 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                  {{ area.title }}
                </h4>

                <div class="text-xs text-brand font-medium font-mono">
                  {{ area.tagline }}
                </div>

                <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {{ area.description }}
                </p>

                <div class="space-y-2.5 pt-2 text-xs text-zinc-300">
                  <div
                    v-for="(cap, capIdx) in area.capabilities"
                    :key="capIdx"
                    class="flex items-start gap-2.5"
                  >
                    <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                    <span>{{ cap }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-5 border-t border-white/[0.06]">
                <NuxtLink
                  :to="area.link"
                  class="inline-flex items-center justify-between w-full text-xs font-semibold text-brand hover:text-white transition-colors group/link font-mono"
                >
                  <span>{{ area.linkText }}</span>
                  <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="evalHeaderRef"
          class="max-w-3xl space-y-4 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isEvalHeaderRevealed }"
        >
          <ChapterLabel label="How We Evaluate Your Needs" />
          <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial">How to Evaluate the Right Solution.</h2>
          <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Selecting the appropriate technology scope requires evaluating current operational objectives against established systems and future organizational growth.
          </p>
        </div>

        <div ref="evalLedgerRef" class="mt-16 space-y-6 font-ui">
          <div
            v-for="(item, idx) in considerations"
            :key="item.title"
            class="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#111111] relative hover:border-brand/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group reveal-card transition-editorial duration-700"
            :class="[{ 'is-revealed': isEvalLedgerRevealed }, 'stagger-' + (idx + 1)]"
          >
            

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div class="lg:col-span-4 space-y-3">
                <span class="font-mono text-xs text-brand font-semibold tracking-wider">
                  {{ item.category }}
                </span>
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand shrink-0">
                    <component :is="item.icon" class="h-5 w-5" />
                  </div>
                  <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                    {{ item.title }}
                  </h3>
                </div>
                <div class="pt-2 text-xs font-mono text-zinc-400">
                  <span class="text-zinc-500">DIAGNOSTIC CRITERION:</span>
                  <p class="text-brand mt-0.5 font-medium">{{ item.diagnostic }}</p>
                </div>
              </div>

              <div class="lg:col-span-8 space-y-4 lg:pl-8 lg:border-l border-white/[0.06]">
                <div class="font-editorial text-xl sm:text-2xl text-white italic leading-snug">
                  “{{ item.question }}”
                </div>
                <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {{ item.description }}
                </p>

                <div class="pt-3 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
                  <span>INDEPENDENT EVALUATION AXIS VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref="evalFootnoteRef"
          class="mt-12 rounded-2xl border border-white/[0.08] bg-[#111111] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-ui relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isEvalFootnoteRevealed }"
        >
          <div class="space-y-1.5">
            <span class="text-xs font-mono text-brand uppercase tracking-wider font-semibold">
              ARCHITECTURAL CONSULTATION
            </span>
            <p class="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
              These questions establish objective internal criteria. KavoraX technology leaders conduct confidential scoping sessions to help teams evaluate trade-offs before committing resources.
            </p>
          </div>

          <NuxtLink to="/contact" class="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              class="w-full sm:w-auto px-7 py-4 rounded-md border border-brand/40 bg-brand/10 hover:bg-brand/20 text-brand hover:text-white transition-all text-xs font-semibold tracking-wider uppercase font-mono flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Diagnostic Scoping</span>
              <ArrowRight class="h-4 w-4" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="industriesHeaderRef"
          class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isIndustriesHeaderRevealed }"
        >
          <div class="max-w-2xl space-y-4">
            <ChapterLabel label="Industry Expertise" />
            <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial">Connected Across Operating Domains.</h2>
            <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Different sectors face distinct operational rhythms, data sensitivities, and compliance boundaries. Explore how connected architecture addresses industry-specific requirements.
            </p>
          </div>

          <NuxtLink to="/industries" class="shrink-0 font-ui">
            <Button
              variant="outline"
              size="lg"
              class="border-white/10 bg-[#161616] hover:bg-white/[0.05] text-zinc-200 hover:text-white px-6 py-5 transition-colors group"
            >
              <span>Explore Industry Frameworks</span>
              <ArrowRight class="ml-2 h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>
        </div>

        <div ref="industriesGridRef" class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-ui">
          <NuxtLink
            v-for="(item, idx) in industries"
            :key="item.name"
            :to="item.anchor"
            class="rounded-2xl border border-white/[0.08] bg-[#111111] overflow-hidden hover:border-brand/40 transition-all duration-500 group flex flex-col justify-between shadow-xl relative reveal-card transition-editorial duration-700"
            :class="[{ 'is-revealed': isIndustriesGridRevealed }, 'stagger-' + (idx + 1)]"
          >
            

            <div>
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
                  class="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent"
                />
                <div class="absolute top-3 left-3 text-xs font-mono text-brand bg-[#111111] border border-white/10 px-2 py-0.5 rounded">
                  {{ item.tag }}
                </div>
              </div>

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

            <div class="px-6 pb-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-brand transition-colors">
              <span>VIEW FRAMEWORK</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      class="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      
      
      <div class="absolute inset-0 opacity-35 pointer-events-none -z-10" aria-hidden="true" />

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          ref="solutionsCtaRef"
          class="rounded-3xl border border-white/[0.1] bg-[#111111] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isSolutionsCtaRevealed }"
        >
          

          <div class="flex justify-center mb-6">
            <ChapterLabel label="Ready to Get Started?" />
          </div>

          <h2 class="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance-editorial max-w-3xl mx-auto">Let’s Find the Right Way Forward.</h2>

          <p
            class="mt-6 font-ui text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Tell us about your business priorities and the challenges you want to address.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-200 group"
              >
                <MessageSquare class="mr-2 h-4 w-4" />
                <span>Talk to Our Team</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
              >
                <Calendar class="mr-2 h-4 w-4 text-brand" />
                <span>Book a Demo</span>
              </Button>
            </NuxtLink>
          </div>

          <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400">
            <div class="flex items-center gap-2">
              <ShieldCheck class="h-3.5 w-3.5 text-brand" />
              <span>CONFIDENTIAL ARCHITECTURAL EVALUATION</span>
            </div>

            <div class="flex items-center gap-2">
              <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
              <span>ENTERPRISE COMPLIANCE RESPECTED</span>
            </div>

            <div class="text-zinc-500">
              NO VENDOR LOCK-IN
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
