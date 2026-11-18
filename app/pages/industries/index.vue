<script setup lang="ts">
import { ref, type Component } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { Button } from '~/components/ui/button'
import {
  Activity,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cpu,
  Landmark,
  Layers,
  Mail,
  Network,
  Radio,
  ShieldCheck,
  Truck,
  Workflow
} from 'lucide-vue-next'

useHead({
  title: 'Enterprise Industries & Solutions | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'Explore how KavoraX builds connected business solutions designed to improve visibility, streamline operations and adapt across enterprise industries.'
    }
  ]
})

// --- IndustriesHero ---
const { isRevealed: isHeroMounted } = useScrollReveal({ immediate: true })const scrollToSectors = () => {  const el = document.getElementById('industry-overview')  if (el) {    el.scrollIntoView({ behavior: 'smooth', block: 'start' })  }}

// --- IndustriesOverview ---
const overviewRef = ref<HTMLElement | null>(null)const { isRevealed: isOverviewRevealed } = useScrollReveal(overviewRef, { threshold: 0.1 })const overviewIndustries = [  {    id: 'enterprise-tech',    name: 'Enterprise Technology & SaaS',    tag: 'Digital Operations',    icon: Building2,    colSpan: 'lg:col-span-7',    description:      'Fast-moving software and technology providers coordinating complex product lifecycles, cross-functional handoffs, and multi-tenant operational toolchains.',    keyFocus: 'Workflow execution & toolchain interoperability',    primaryAnchor: '#enterprise-tech',    ctaLabel: 'Explore SaaS Context',    image: '/images/tech-infrastructure.webp',    alt: 'High-density enterprise computing and telemetry infrastructure'  },  {    id: 'financial-services',    name: 'Financial Services & FinTech',    tag: 'Auditable Systems',    icon: Landmark,    colSpan: 'lg:col-span-5',    description:      'Banking, payment, and financial institutions requiring continuous operational visibility, strict governance, and synchronized data exchange across distributed platforms.',    keyFocus: 'Operational telemetry & multi-system exchange',    primaryAnchor: '#financial-services',    ctaLabel: 'Explore FinTech Context',    image: '/images/fintech-headquarters.webp',    alt: 'Modern financial architectural headquarters with glass facade'  },  {    id: 'healthcare',    name: 'Healthcare & Life Sciences',    tag: 'Care Delivery Workflows',    icon: Activity,    colSpan: 'lg:col-span-5',    description:      'Clinical operations and health networks managing distributed administrative processes, cross-facility coordination, and complex stakeholder communications.',    keyFocus: 'Operational coordination & bottleneck visibility',    primaryAnchor: '#healthcare',    ctaLabel: 'Explore Healthcare Context',    image: '/images/healthcare-diagnostics.webp',    alt: 'Modern laboratory instrumentation and clinical diagnostics'  },  {    id: 'supply-chain',    name: 'Supply Chain & Logistics',    tag: 'Fulfillment & Freight',    icon: Truck,    colSpan: 'lg:col-span-7',    description:      'Logistics providers and fulfillment operators requiring dependable interoperability between distributed inventory, freight tracking, and back-office ERP systems.',    keyFocus: 'Ecosystem bridging & milestone tracking',    primaryAnchor: '#supply-chain',    ctaLabel: 'Explore Logistics Context',    image: '/images/logistics-terminal.webp',    alt: 'Modern automated intermodal logistics terminal'  }]

// --- IndustryDetailSections ---
const s0Ref = ref<HTMLElement | null>(null)const s1Ref = ref<HTMLElement | null>(null)const s2Ref = ref<HTMLElement | null>(null)const s3Ref = ref<HTMLElement | null>(null)const { isRevealed: s0Revealed } = useScrollReveal(s0Ref, { threshold: 0.1 })const { isRevealed: s1Revealed } = useScrollReveal(s1Ref, { threshold: 0.1 })const { isRevealed: s2Revealed } = useScrollReveal(s2Ref, { threshold: 0.1 })const { isRevealed: s3Revealed } = useScrollReveal(s3Ref, { threshold: 0.1 })interface IndustryDetailItem {  id: string  number: string  category: string  name: string  subtitle: string  icon: Component  image: string  imageAlt: string  imageBadge: string  imageCaption: string  context: string  commonNeeds: { title: string; desc: string }[]  solutionTitle: string  solutionDesc: string  solutionLink: string  solutionIcon: Component  capabilities: string[]  primaryCta: string  secondaryCta: string}const detailIndustries: [IndustryDetailItem, IndustryDetailItem, IndustryDetailItem, IndustryDetailItem] = [  {    id: 'enterprise-tech',    number: '01',    category: 'DIGITAL OPERATIONS',    name: 'Enterprise Technology & SaaS',    subtitle: 'Streamlining cross-functional execution and multi-system digital operations.',    icon: Building2,    image: '/images/tech-infrastructure.webp',    imageAlt: 'High-density cloud infrastructure and telemetry servers',    imageBadge: 'HIGH-CONCURRENCY MESH',    imageCaption: 'Distributed Cloud Cluster · Sub-10ms Routing',    context:      'Modern software and technology companies operate in fast-paced environments where engineering, product, customer support, and go-to-market teams rely on heavily decentralized toolchains. Maintaining clear visibility over cross-functional deliverables without slowing down release cycles remains a continuous operational challenge.',    commonNeeds: [      {        title: 'Cross-Departmental Task Coordination',        desc: 'Minimizing friction during critical handoffs between engineering sprints, customer success onboarding, and back-office billing.'      },      {        title: 'Decoupled Toolchain Interoperability',        desc: 'Synchronizing data records between issue trackers, customer engagement tools, and internal admin panels without brittle custom scripts.'      },      {        title: 'Operational Bottleneck Detection',        desc: 'Identifying workflow lags and systemic delays across service provisioning and customer lifecycle milestones.'      }    ],    solutionTitle: 'Operations Platform & Integration Hub',    solutionDesc:      'KavoraX Operations Platform establishes unified workflow coordination across distributed teams, while Integration Hub maintains reliable data synchronization between disconnected SaaS services.',    solutionLink: '/products#operations-platform',    solutionIcon: Cpu,    capabilities: [      'Multi-tenant toolchain data synchronization',      'Automated service milestone routing and notification',      'Real-time bottleneck and handoff lag visibility'    ],    primaryCta: 'Discuss Tech Operations',    secondaryCta: 'Explore Operations Platform'  },  {    id: 'financial-services',    number: '02',    category: 'AUDITABLE ARCHITECTURE',    name: 'Financial Services & FinTech',    subtitle: 'Auditable transaction architectures, rigorous data segregation, and governance.',    icon: Landmark,    image: '/images/fintech-headquarters.webp',    imageAlt: 'Modern financial architectural headquarters with glass facade',    imageBadge: 'REGULATORY COMPLIANCE',    imageCaption: 'Institutional Governance · End-to-End Cryptography',    context:      'Financial institutions and fintech organizations navigate stringent regulatory frameworks, rigorous audit requirements, and zero-tolerance expectations for transactional errors. Software systems must coordinate high-volume transactions while preserving full operational transparency and data lineage.',    commonNeeds: [      {        title: 'Auditable Operational Logging',        desc: 'Ensuring every state transition, user authorization, and system event is immutably recorded for regulatory scrutiny.'      },      {        title: 'Rigorous Data Segregation',        desc: 'Maintaining strict organizational boundaries and role-based permissions across sensitive accounts and customer portfolios.'      },      {        title: 'Reconciliation Traceability',        desc: 'Automating multi-system balance reconciliations and identifying ledger discrepancies before settlement windows close.'      }    ],    solutionTitle: 'Analytics & Insights & Operations Platform',    solutionDesc:      'KavoraX Analytics & Insights delivers continuous operational telemetry and anomaly detection, paired with policy-governed task execution for compliance workflows.',    solutionLink: '/products#analytics-insights',    solutionIcon: BarChart3,    capabilities: [      'Continuous compliance audit event aggregation',      'Multi-entity policy governance and permission gates',      'Real-time operational exception escalation'    ],    primaryCta: 'Discuss FinTech Governance',    secondaryCta: 'Explore Analytics Engine'  },  {    id: 'healthcare',    number: '03',    category: 'CARE CONTINUITY',    name: 'Healthcare & Life Sciences',    subtitle: 'Confidential clinical data pipelines and synchronized patient workflows.',    icon: Activity,    image: '/images/healthcare-diagnostics.webp',    imageAlt: 'Modern laboratory instrumentation and clinical diagnostics',    imageBadge: 'CLINICAL GRADE',    imageCaption: 'Encrypted Telemetry · Care Coordination',    context:      'Healthcare organizations, medical device manufacturers, and clinical laboratories must balance exceptional patient care standards with rigorous patient privacy mandates and fragmented legacy electronic record systems.',    commonNeeds: [      {        title: 'Multi-Department Scheduling & Handoffs',        desc: 'Coordinating operational workflows between laboratory diagnostics, clinical evaluation, and administrative billing.'      },      {        title: 'Confidential Diagnostics Routing',        desc: 'Transmitting sensitive patient telemetry and laboratory findings across authenticated endpoints without risk of exposure.'      },      {        title: 'Cross-System EHR Interoperability',        desc: 'Enabling legacy record databases to communicate with modern clinical scheduling and telemedicine portals.'      }    ],    solutionTitle: 'Operations Platform & Integration Hub',    solutionDesc:      'KavoraX Integration Hub provides cryptographically verified data pipelines for healthcare providers, while Operations Platform coordinates clinical task handoffs with strict privacy enforcement.',    solutionLink: '/products#operations-platform',    solutionIcon: Cpu,    capabilities: [      'Encrypted inter-departmental task routing',      'Confidential clinical data lineage tracking',      'Automated SLA monitoring for critical patient milestones'    ],    primaryCta: 'Discuss Healthcare Solutions',    secondaryCta: 'Explore Integration Hub'  },  {    id: 'supply-chain',    number: '04',    category: 'GLOBAL SYNCHRONIZATION',    name: 'Supply Chain & Logistics',    subtitle: 'Intermodal freight coordination, inventory synchronization, and milestone tracking.',    icon: Truck,    image: '/images/logistics-terminal.webp',    imageAlt: 'Modern automated intermodal container logistics terminal',    imageBadge: 'INTERMODAL LOGISTICS',    imageCaption: 'Multi-Terminal Hub · Real-Time Freight Sync',    context:      'Global logistics operators, freight coordinators, and warehouse networks face compounding complexity from fluctuating carrier capacity, weather disruptions, and heterogeneous inventory management software.',    commonNeeds: [      {        title: 'Multi-Vendor Freight Bridging',        desc: 'Unifying disparate EDI, API, and legacy transport management protocols into a single, predictable tracking stream.'      },      {        title: 'Automated Exception Routing',        desc: 'Triggering rapid mitigation workflows whenever shipment milestones or cold-chain temperature thresholds are breached.'      },      {        title: 'Warehouse & Inventory Synchronization',        desc: 'Maintaining cross-terminal inventory visibility to optimize dispatch timing and eliminate dwell time.'      }    ],    solutionTitle: 'Integration Hub & Operations Platform',    solutionDesc:      'KavoraX Integration Hub standardizes communication across global freight providers, while Operations Platform orchestrates automated exception resolution across distributed fulfillment teams.',    solutionLink: '/products#integration-hub',    solutionIcon: Network,    capabilities: [      'Multi-carrier operational protocol bridging',      'Automated freight exception handling workflows',      'Real-time multi-terminal inventory synchronization'    ],    primaryCta: 'Discuss Logistics Architecture',    secondaryCta: 'Explore Integration Hub'  }]

// --- ConnectedOperations ---
const connectedRef = ref<HTMLElement | null>(null)const { isRevealed: isConnectedRevealed } = useScrollReveal(connectedRef, { threshold: 0.1 })const operationalPillars = [  {    id: 'workflows',    number: '01',    title: 'Business Workflows',    subtitle: 'Execution & Coordination',    icon: Workflow,    description:      'Coordinating cross-functional execution and milestone progression so teams spend less time chasing status updates and more time moving initiatives forward.',    highlights: [      'Multi-team handoff synchronization',      'Automated task routing and escalation',      'Exception triage and bottleneck mitigation'    ]  },  {    id: 'data-insights',    number: '02',    title: 'Data & Insights',    subtitle: 'Visibility & Telemetry',    icon: BarChart3,    description:      'Aggregating operational telemetry into clear, real-time views so leadership can observe system health, workload throughput, and potential delivery risks.',    highlights: [      'Centralized operational telemetry feeds',      'Activity visibility across siloed units',      'Data-backed decision clarity'    ]  },  {    id: 'connected-systems',    number: '03',    title: 'Connected Systems',    subtitle: 'Interoperability & Bridging',    icon: Network,    description:      'Bridging legacy on-premise infrastructure, modern SaaS platforms, and external partner APIs into one coherent operational fabric without rip-and-replace.',    highlights: [      'Cross-platform event synchronization',      'Resilient multi-system data pipelines',      'Decoupled architecture compatibility'    ]  },  {    id: 'governance',    number: '04',    title: 'Governance & Oversight',    subtitle: 'Policy & Auditability',    icon: ShieldCheck,    description:      'Ensuring that as workflows scale across systems and departments, administrative actions remain policy-compliant, traceable, and ready for internal audit.',    highlights: [      'Role-based authorization boundaries',      'Traceable operational audit trails',      'Consistent policy governance'    ]  }]

// --- IndustriesConsultationCta ---
const ctaRef = ref<HTMLElement | null>(null)const { isRevealed: isCtaRevealed } = useScrollReveal(ctaRef, { threshold: 0.1 })
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Visual Striking Photographic Hero with Multi-Stop Vignette -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src="/images/global-connectivity.webp"
        alt="Connected global industries and infrastructure"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        width="1920"
        height="1080"
        class="w-full h-full object-cover object-center opacity-25 scale-105 animate-hero-drift"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-[#080c10] via-[#080c10]/95 to-[#080c10]/70" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/70 to-[#080c10]/40" />
      <div class="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-brand/[0.05] blur-[160px] rounded-full animate-ambient-drift" />
      <div class="absolute inset-0 bg-tech-grid opacity-40" />
    </div>

    <div class="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- HUD Telemetry Header Bar -->
      <div
        class="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroMounted }"
      >
        <div class="flex items-center gap-3">
          <ChapterLabel label="Industries We Serve" />
        </div>

        <div class="flex items-center gap-4 text-[10px] text-zinc-400">
          <span class="hidden md:inline-flex items-center gap-1.5">
            <Radio class="h-3 w-3 text-brand animate-pulse-subtle" />
            <span>VERTICAL INTEGRATION: <strong class="text-white font-mono">NOMINAL</strong></span>
          </span>
          <span class="text-zinc-600 hidden md:inline">|</span>
          <span>4 SECTOR FRAMEWORKS</span>
          <span class="text-zinc-600">|</span>
          <span class="text-zinc-400 font-mono">[ 01 // OVERVIEW ]</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        <!-- Left: Editorial Headline & Copy -->
        <div class="lg:col-span-7 space-y-7">
          <!-- Subtle Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand font-medium backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>INDUSTRIES</span>
          </div>

          <!-- Hero Headline with WordReveal -->
          <WordReveal
            text="Technology for the Industries Moving Business Forward."
            as="h1"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
            :italic-words="['Moving', 'Business', 'Forward.']"
            :delay="240"
            :immediate="true"
          />

          <!-- Hero Supporting Copy: Reverted to Inter font-ui -->
          <p
            class="font-ui text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            Every industry has distinct operational needs. KavoraX builds connected business solutions
            designed to help organisations improve visibility, streamline operations and adapt as
            they grow.
          </p>

          <!-- Dual CTAs -->
          <div
            class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Discuss Your Industry Needs</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <button
              type="button"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-zinc-200 hover:text-white transition-colors group border border-white/10 rounded-md bg-[#111a26]/60 hover:bg-[#111a26] cursor-pointer"
              @click="scrollToSectors"
            >
              <span>Explore Sectors</span>
              <ArrowDown class="h-4 w-4 text-brand group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <!-- Quick Sector Navigation Chips -->
          <div
            class="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-800"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <a href="#enterprise-tech" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Building2 class="h-3.5 w-3.5 text-brand" />
              <span>Technology &amp; SaaS</span>
            </a>
            <a href="#financial-services" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Landmark class="h-3.5 w-3.5 text-brand" />
              <span>Financial Services</span>
            </a>
            <a href="#healthcare" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Activity class="h-3.5 w-3.5 text-brand" />
              <span>Healthcare</span>
            </a>
            <a href="#supply-chain" class="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-brand/40 hover:text-white transition-colors flex items-center gap-2">
              <Truck class="h-3.5 w-3.5 text-brand" />
              <span>Logistics</span>
            </a>
          </div>
        </div>

        <!-- Right: Asymmetric Mosaic / Photographic Hero Canvas -->
        <div
          class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <!-- Ambient Halo -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          <div
            class="relative rounded-2xl border border-white/[0.1] bg-[#0c141e]/90 p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <!-- Corner Crosshairs inspired by Active Theory -->
            <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <!-- Header -->
            <div class="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span class="font-mono text-xs font-semibold text-white tracking-wider">
                DOMAINS OF OPERATION
              </span>
              <span class="font-mono text-[10px] text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                FIELD TESTED
              </span>
            </div>

            <!-- Photographic Hero Inset -->
            <div class="my-5 relative h-60 rounded-xl overflow-hidden border border-white/[0.08] group">
              <img
                src="/images/fintech-headquarters.webp"
                alt="Institutional enterprise environment"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="600"
                height="240"
                class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-opacity"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c141e] via-[#0c141e]/40 to-transparent" />
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                <span class="text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>CRITICAL INFRASTRUCTURE</span>
                </span>
                <span class="text-zinc-400">SOC2 / ISO COMPLIANT</span>
              </div>
            </div>

            <p class="font-ui text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Every vertical demands distinct compliance, transaction velocity, and system integration patterns. We architect software that aligns with these operating realities.
            </p>

            <div class="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span class="flex items-center gap-1.5">
                <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                <span>INDEPENDENT DOMAIN ALIGNMENT</span>
              </span>
              <span class="text-emerald-400">4 SECTORS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- 4 Industry Verticals Overview -->
    <section
    id="industry-overview"
    ref="overviewRef"
    class="py-24 md:py-36 bg-[#0b0f14] relative border-t border-white/[0.08]"
    :class="{ 'is-revealed': isOverviewRevealed }"
  >
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl space-y-4">
        <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isOverviewRevealed }">
          <ChapterLabel label="Explore Industries" />
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
          :class="{ 'is-revealed': isOverviewRevealed }"
        >
          KavoraX concentrates on four foundational enterprise verticals where operational
          coordination, end-to-end visibility, and reliable interoperability are vital to
          sustainable growth.
        </p>
      </div>

      <!-- Asymmetric Editorial Gallery Grid (7-5 and 5-7 Col Spans) -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 font-ui">
        <div
          v-for="(ind, index) in overviewIndustries"
          :key="ind.id"
          :class="[
            ind.colSpan,
            'reveal-card',
            `stagger-${index + 1}`,
            isOverviewRevealed ? 'is-revealed' : '',
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
                decoding="async"
                width="600"
                height="256"
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

    <!-- Alternating Industry Detail Sections (4 verified categories) -->
    <div class="relative bg-[#080c10] overflow-hidden">
    <!-- ======================================================== -->
    <!-- INDUSTRY 01: ENTERPRISE TECHNOLOGY & SAAS               -->
    <!-- Layout: Content on Left, High-Density Cluster on Right  -->
    <!-- ======================================================== -->
    <section
      :id="detailIndustries[0].id"
      ref="s0Ref"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#080c10]"
      :class="{ 'is-revealed': s0Revealed }"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Text Narrative Column -->
          <div class="lg:col-span-6 space-y-8 font-ui">
            <div
              class="flex items-center gap-3 reveal-base transition-editorial duration-700 delay-75"
              :class="{ 'is-revealed': s0Revealed }"
            >
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-brand/10 border border-brand/25 text-brand font-mono text-xs font-semibold"
              >
                {{ detailIndustries[0].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
                [ {{ detailIndustries[0].category }} ]
              </span>
            </div>

            <div class="space-y-3">
              <WordReveal
                :text="detailIndustries[0].name"
                as="h2"
                class="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08] text-balance-editorial"
                :italic-words="['SaaS', 'Technology']"
                :delay="100"
                :threshold="0.12"
              />
              <p
                class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed reveal-paragraph transition-editorial duration-700 delay-200"
                :class="{ 'is-revealed': s0Revealed }"
              >
                {{ detailIndustries[0].subtitle }}
              </p>
            </div>

            <!-- Operational Context -->
            <div
              class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md reveal-card transition-editorial duration-700 delay-250"
              :class="{ 'is-revealed': s0Revealed }"
            >
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ detailIndustries[0].context }}
              </p>
            </div>

            <!-- Key Challenges -->
            <div class="space-y-3">
              <div
                class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3 reveal-base transition-editorial duration-700 delay-300"
                :class="{ 'is-revealed': s0Revealed }"
              >
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in detailIndustries[0].commonNeeds"
                :key="nIdx"
                :class="[
                  'p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-brand/30 transition-colors reveal-card',
                  `stagger-${nIdx + 1}`,
                  s0Revealed ? 'is-revealed' : ''
                ]"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white font-ui">
                      {{ need.title }}
                    </h3>
                    <p class="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {{ need.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mapped Architecture Card -->
            <div
              class="rounded-xl border border-brand/25 bg-brand/[0.04] p-6 space-y-4 reveal-card transition-editorial duration-700 delay-400"
              :class="{ 'is-revealed': s0Revealed }"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="detailIndustries[0].solutionIcon" class="h-4 w-4 text-brand" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ detailIndustries[0].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ detailIndustries[0].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in detailIndustries[0].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': s0Revealed }"
            >
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ detailIndustries[0].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="detailIndustries[0].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ detailIndustries[0].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Photo Canvas Right -->
          <div
            class="lg:col-span-6 relative reveal-card transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': s0Revealed }"
          >
            <div
              class="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

              <div class="relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="detailIndustries[0].image"
                  :alt="detailIndustries[0].imageAlt"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="520"
                  class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

                <!-- Floating HUD Chip -->
                <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/85 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
                  <div class="flex items-center gap-2 text-brand">
                    <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
                    <span class="font-semibold tracking-wider">{{ detailIndustries[0].imageBadge }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 mt-1">
                    SECTOR ARCHITECTURE SPECIFICATION
                  </div>
                </div>

                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span class="font-ui font-medium text-white">{{ detailIndustries[0].imageCaption }}</span>
                  <span class="text-brand">ACTIVE SPECIFICATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- INDUSTRY 02: FINANCIAL SERVICES & FINTECH               -->
    <!-- Layout: INVERTED! Photo on Left, Content on Right       -->
    <!-- ======================================================== -->
    <section
      :id="detailIndustries[1].id"
      ref="s1Ref"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#0b0f14]"
      :class="{ 'is-revealed': s1Revealed }"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Photo Canvas Left -->
          <div
            class="lg:col-span-6 relative order-2 lg:order-1 reveal-card transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': s1Revealed }"
          >
            <div
              class="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

              <div class="relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="detailIndustries[1].image"
                  :alt="detailIndustries[1].imageAlt"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="520"
                  class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

                <!-- Floating HUD Chip -->
                <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/85 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
                  <div class="flex items-center gap-2 text-cyan-400">
                    <ShieldCheck class="h-4 w-4 text-cyan-400" />
                    <span class="font-semibold tracking-wider">{{ detailIndustries[1].imageBadge }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 mt-1">
                    AUDITABLE GOVERNANCE MATRIX
                  </div>
                </div>

                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span class="font-ui font-medium text-white">{{ detailIndustries[1].imageCaption }}</span>
                  <span class="text-cyan-400">SOC2 COMPLIANT</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Text Narrative Column Right -->
          <div class="lg:col-span-6 space-y-8 font-ui order-1 lg:order-2">
            <div
              class="flex items-center gap-3 reveal-base transition-editorial duration-700 delay-75"
              :class="{ 'is-revealed': s1Revealed }"
            >
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-mono text-xs font-semibold"
              >
                {{ detailIndustries[1].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
                [ {{ detailIndustries[1].category }} ]
              </span>
            </div>

            <div class="space-y-3">
              <WordReveal
                :text="detailIndustries[1].name"
                as="h2"
                class="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08] text-balance-editorial"
                :italic-words="['FinTech']"
                :delay="100"
                :threshold="0.12"
              />
              <p
                class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed reveal-paragraph transition-editorial duration-700 delay-200"
                :class="{ 'is-revealed': s1Revealed }"
              >
                {{ detailIndustries[1].subtitle }}
              </p>
            </div>

            <!-- Operational Context -->
            <div
              class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md reveal-card transition-editorial duration-700 delay-250"
              :class="{ 'is-revealed': s1Revealed }"
            >
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ detailIndustries[1].context }}
              </p>
            </div>

            <!-- Key Challenges -->
            <div class="space-y-3">
              <div
                class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3 reveal-base transition-editorial duration-700 delay-300"
                :class="{ 'is-revealed': s1Revealed }"
              >
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in detailIndustries[1].commonNeeds"
                :key="nIdx"
                :class="[
                  'p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-cyan-500/30 transition-colors reveal-card',
                  `stagger-${nIdx + 1}`,
                  s1Revealed ? 'is-revealed' : ''
                ]"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white font-ui">
                      {{ need.title }}
                    </h3>
                    <p class="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {{ need.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mapped Architecture Card -->
            <div
              class="rounded-xl border border-cyan-500/25 bg-cyan-500/[0.04] p-6 space-y-4 reveal-card transition-editorial duration-700 delay-400"
              :class="{ 'is-revealed': s1Revealed }"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="detailIndustries[1].solutionIcon" class="h-4 w-4 text-cyan-400" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ detailIndustries[1].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ detailIndustries[1].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in detailIndustries[1].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': s1Revealed }"
            >
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ detailIndustries[1].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="detailIndustries[1].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ detailIndustries[1].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- INDUSTRY 03: HEALTHCARE & LIFE SCIENCES                  -->
    <!-- Layout: Clinical Precision Split (7 Cols Text, 5 Image)  -->
    <!-- ======================================================== -->
    <section
      :id="detailIndustries[2].id"
      ref="s2Ref"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#080c10]"
      :class="{ 'is-revealed': s2Revealed }"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Text Narrative Column -->
          <div class="lg:col-span-7 space-y-8 font-ui">
            <div
              class="flex items-center gap-3 reveal-base transition-editorial duration-700 delay-75"
              :class="{ 'is-revealed': s2Revealed }"
            >
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold"
              >
                {{ detailIndustries[2].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
                [ {{ detailIndustries[2].category }} ]
              </span>
            </div>

            <div class="space-y-3">
              <WordReveal
                :text="detailIndustries[2].name"
                as="h2"
                class="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08] text-balance-editorial"
                :italic-words="['Life', 'Sciences']"
                :delay="100"
                :threshold="0.12"
              />
              <p
                class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed reveal-paragraph transition-editorial duration-700 delay-200"
                :class="{ 'is-revealed': s2Revealed }"
              >
                {{ detailIndustries[2].subtitle }}
              </p>
            </div>

            <!-- Operational Context -->
            <div
              class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md reveal-card transition-editorial duration-700 delay-250"
              :class="{ 'is-revealed': s2Revealed }"
            >
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ detailIndustries[2].context }}
              </p>
            </div>

            <!-- Key Challenges -->
            <div class="space-y-3">
              <div
                class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3 reveal-base transition-editorial duration-700 delay-300"
                :class="{ 'is-revealed': s2Revealed }"
              >
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in detailIndustries[2].commonNeeds"
                :key="nIdx"
                :class="[
                  'p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-emerald-500/30 transition-colors reveal-card',
                  `stagger-${nIdx + 1}`,
                  s2Revealed ? 'is-revealed' : ''
                ]"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white font-ui">
                      {{ need.title }}
                    </h3>
                    <p class="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {{ need.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mapped Architecture Card -->
            <div
              class="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.04] p-6 space-y-4 reveal-card transition-editorial duration-700 delay-400"
              :class="{ 'is-revealed': s2Revealed }"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="detailIndustries[2].solutionIcon" class="h-4 w-4 text-emerald-400" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ detailIndustries[2].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ detailIndustries[2].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in detailIndustries[2].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 reveal-base transition-editorial duration-700 delay-500"
              :class="{ 'is-revealed': s2Revealed }"
            >
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ detailIndustries[2].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="detailIndustries[2].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ detailIndustries[2].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Photo Canvas Right -->
          <div
            class="lg:col-span-5 relative reveal-card transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': s2Revealed }"
          >
            <div
              class="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

              <div class="relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="detailIndustries[2].image"
                  :alt="detailIndustries[2].imageAlt"
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="520"
                  class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

                <!-- Floating HUD Chip -->
                <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/85 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
                  <div class="flex items-center gap-2 text-emerald-400">
                    <Radio class="h-4 w-4 animate-pulse-subtle" />
                    <span class="font-semibold tracking-wider">{{ detailIndustries[2].imageBadge }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 mt-1">
                    HIPAA / GDPR VERIFIED ENCLAVE
                  </div>
                </div>

                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span class="font-ui font-medium text-white">{{ detailIndustries[2].imageCaption }}</span>
                  <span class="text-emerald-400">ZERO DATA LEAK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- INDUSTRY 04: SUPPLY CHAIN & LOGISTICS                    -->
    <!-- Layout: Panoramic Terminal Header + Asymmetric Split     -->
    <!-- ======================================================== -->
    <section
      :id="detailIndustries[3].id"
      ref="s3Ref"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#0b0f14]"
      :class="{ 'is-revealed': s3Revealed }"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Panoramic Top Visual Feature -->
        <div
          class="mb-14 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-2xl relative group reveal-card transition-editorial duration-700 delay-150"
          :class="{ 'is-revealed': s3Revealed }"
        >
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

          <div class="relative h-[280px] sm:h-[360px] w-full overflow-hidden bg-zinc-950">
            <img
              :src="detailIndustries[3].image"
              :alt="detailIndustries[3].imageAlt"
              loading="lazy"
              decoding="async"
              width="700"
              height="360"
              class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-[#0b0f14]/40 to-transparent" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#0b0f14]/80 via-transparent to-transparent" />

            <!-- Floating Inset Banner -->
            <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#0b0f14]/90 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
              <div class="flex items-center gap-2 text-brand">
                <Truck class="h-4 w-4" />
                <span class="font-semibold tracking-wider">{{ detailIndustries[3].imageBadge }}</span>
              </div>
              <div class="text-[10px] text-zinc-400 mt-1">
                MULTI-TERMINAL FREIGHT NETWORK
              </div>
            </div>

            <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
              <span class="font-ui font-medium text-white">{{ detailIndustries[3].imageCaption }}</span>
              <span class="text-brand">REAL-TIME TELEMETRY</span>
            </div>
          </div>
        </div>

        <!-- 2-Column Split Details Below Panoramic Image -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-6 space-y-6 font-ui">
            <div
              class="flex items-center gap-3 reveal-base transition-editorial duration-700 delay-75"
              :class="{ 'is-revealed': s3Revealed }"
            >
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-brand/10 border border-brand/25 text-brand font-mono text-xs font-semibold"
              >
                {{ detailIndustries[3].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
                [ {{ detailIndustries[3].category }} ]
              </span>
            </div>

            <WordReveal
              :text="detailIndustries[3].name"
              as="h2"
              class="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight text-balance-editorial"
              :italic-words="['Logistics']"
              :delay="100"
              :threshold="0.12"
            />

            <p
              class="font-ui text-lg text-zinc-300 leading-relaxed reveal-paragraph transition-editorial duration-700 delay-200"
              :class="{ 'is-revealed': s3Revealed }"
            >
              {{ detailIndustries[3].subtitle }}
            </p>

            <div
              class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md reveal-card transition-editorial duration-700 delay-250"
              :class="{ 'is-revealed': s3Revealed }"
            >
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ detailIndustries[3].context }}
              </p>
            </div>

            <!-- CTAs -->
            <div
              class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 reveal-base transition-editorial duration-700 delay-450"
              :class="{ 'is-revealed': s3Revealed }"
            >
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ detailIndustries[3].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="detailIndustries[3].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ detailIndustries[3].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Challenges & Mapped Architecture -->
          <div class="lg:col-span-6 space-y-6 font-ui">
            <!-- Key Challenges -->
            <div class="space-y-3">
              <div
                class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3 reveal-base transition-editorial duration-700 delay-300"
                :class="{ 'is-revealed': s3Revealed }"
              >
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in detailIndustries[3].commonNeeds"
                :key="nIdx"
                :class="[
                  'p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-brand/30 transition-colors reveal-card',
                  `stagger-${nIdx + 1}`,
                  s3Revealed ? 'is-revealed' : ''
                ]"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white font-ui">
                      {{ need.title }}
                    </h3>
                    <p class="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {{ need.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mapped Architecture Card -->
            <div
              class="rounded-xl border border-brand/25 bg-brand/[0.04] p-6 space-y-4 reveal-card transition-editorial duration-700 delay-400"
              :class="{ 'is-revealed': s3Revealed }"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="detailIndustries[3].solutionIcon" class="h-4 w-4 text-brand" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ detailIndustries[3].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ detailIndustries[3].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in detailIndustries[3].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

    <!-- Connected Business Operations Section -->
    <section
    ref="connectedRef"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] overflow-hidden"
    :class="{ 'is-revealed': isConnectedRevealed }"
  >
    <!-- Ambient emerald depth lighting -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand/[0.04] blur-[150px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isConnectedRevealed }">
          <ChapterLabel label="Connected Operations" />
        </div>

        <WordReveal
          text="Connected Systems. Clearer Operations."
          as="h2"
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          :italic-words="['Clearer', 'Operations.']"
          :delay="120"
          :threshold="0.15"
        />

        <p
          class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto reveal-paragraph transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isConnectedRevealed }"
        >
          Operational resilience depends on how effectively workflows, data, systems, and governance
          interact. KavoraX designs solutions that reinforce these four essential pillars, creating
          coherent operational foundations across varied business environments.
        </p>
      </div>

      <!-- Conceptual Relationship Diagram -->
      <div class="mt-16 sm:mt-20">
        <!-- Center Interconnection Hub Board -->
        <div
          class="rounded-2xl border border-white/[0.1] bg-[#0c131d]/90 p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative reveal-card transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isConnectedRevealed }"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

          <!-- Top Banner Bar -->
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-8 border-b border-white/[0.08] gap-4 font-ui reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isConnectedRevealed }"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/25 text-brand"
              >
                <Layers class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-white">
                  The Four Operational Pillars of Connected Enterprise
                </h3>
                <p class="text-xs text-zinc-400">
                  Illustrative architecture: Interdependent relationships driving business clarity
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 font-mono text-xs">
              <span class="text-zinc-500">MODEL:</span>
              <span
                class="text-brand bg-brand/10 px-2.5 py-1 rounded border border-brand/20 font-semibold"
              >
                UNIFIED COHESION
              </span>
            </div>
          </div>

          <!-- 4 Pillars Quad Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-ui">
            <div
              v-for="(pillar, index) in operationalPillars"
              :key="pillar.id"
              :class="[
                'group relative rounded-xl border border-white/[0.07] bg-[#101925]/70 p-6 sm:p-7 hover:border-brand/35 transition-all duration-300 hover:bg-[#121d2c] reveal-card',
                `stagger-${index + 1}`,
                isConnectedRevealed ? 'is-revealed' : ''
              ]"
            >
              <!-- Card Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-lg bg-[#142030] border border-white/10 text-brand group-hover:scale-105 transition-transform shrink-0"
                  >
                    <component :is="pillar.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <h4
                      class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors"
                    >
                      {{ pillar.title }}
                    </h4>
                    <span class="text-xs font-mono text-zinc-400 block mt-0.5">
                      {{ pillar.subtitle }}
                    </span>
                  </div>
                </div>
                <span class="font-mono text-xs text-brand font-semibold">[ {{ pillar.number }} ]</span>
              </div>

              <!-- Body Description -->
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {{ pillar.description }}
              </p>

              <!-- Capability Highlights -->
              <div class="mt-6 pt-5 border-t border-white/[0.06] space-y-2 text-xs text-zinc-400">
                <div
                  v-for="(hl, hIdx) in pillar.highlights"
                  :key="hIdx"
                  class="flex items-center gap-2"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
                  <span class="text-zinc-300">{{ hl }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Visual Flow Conduit Bar -->
          <div
            class="mt-8 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isConnectedRevealed }"
          >
            <div class="flex items-center gap-2 text-zinc-300">
              <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
              <span>Conceptual Relationship: Workflows generate Data · Systems bridge Processes · Governance protects Operations</span>
            </div>
            <NuxtLink
              to="/products"
              class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors group/link font-semibold"
            >
              <span>Explore KavoraX Connected Products</span>
              <ArrowRight class="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Industry Consultation Final CTA -->
    <section
    ref="ctaRef"
    class="py-28 md:py-36 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden"
    :class="{ 'is-revealed': isCtaRevealed }"
  >
    <!-- Cinematic Ambient Depth Lighting -->
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
        :class="{ 'is-revealed': isCtaRevealed }"
      >
        <!-- Corner Crosshairs inspired by Active Theory -->
        <div class="absolute top-4 left-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-4 right-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 left-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 right-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <!-- Top Chapter Tag -->
        <div
          class="flex justify-center mb-6 reveal-base transition-editorial duration-700 delay-100"
          :class="{ 'is-revealed': isCtaRevealed }"
        >
          <ChapterLabel label="Talk to an Industry Specialist" />
        </div>

        <!-- Headline (Exact requested text) -->
        <WordReveal
          text="Let's Explore What Your Industry Needs Next."
          as="h2"
          class="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance-editorial max-w-3xl mx-auto"
          :italic-words="['Industry', 'Needs', 'Next.']"
          :delay="120"
          :threshold="0.18"
        />

        <!-- Supporting Copy (Exact requested text) -->
        <p
          class="mt-6 font-ui text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed reveal-paragraph transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isCtaRevealed }"
        >
          Tell us about your organisation and priorities. The KavoraX team can help you explore
          relevant business solutions.
        </p>

        <!-- Action CTAs -->
        <div
          class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-450"
          :class="{ 'is-revealed': isCtaRevealed }"
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

          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
            >
              <Mail class="mr-2 h-4 w-4 text-brand" />
              <span>Request Architecture Briefing</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Verification Indicators Footer -->
        <div
          class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400 reveal-base transition-editorial duration-700 delay-550"
          :class="{ 'is-revealed': isCtaRevealed }"
        >
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-3.5 w-3.5 text-brand" />
            <span>CONFIDENTIAL OPERATIONAL EVALUATION</span>
          </div>

          <div class="flex items-center gap-2">
            <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
            <span>ENTERPRISE STANDARDS VERIFIED</span>
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
