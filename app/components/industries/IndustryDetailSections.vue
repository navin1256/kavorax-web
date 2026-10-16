<script setup lang="ts">
import { Button } from '~/components/ui/button'
import {
  Building2,
  Landmark,
  Activity,
  Truck,
  ArrowRight,
  CheckCircle2,
  Cpu,
  BarChart3,
  Network,
  ArrowUpRight,
  ShieldCheck,
  Radio
} from 'lucide-vue-next'

interface IndustryItem {
  id: string
  number: string
  category: string
  name: string
  subtitle: string
  icon: any
  image: string
  imageAlt: string
  imageBadge: string
  imageCaption: string
  context: string
  commonNeeds: { title: string; desc: string }[]
  solutionTitle: string
  solutionDesc: string
  solutionLink: string
  solutionIcon: any
  capabilities: string[]
  primaryCta: string
  secondaryCta: string
}

const industries: [IndustryItem, IndustryItem, IndustryItem, IndustryItem] = [
  {
    id: 'enterprise-tech',
    number: '01',
    category: 'DIGITAL OPERATIONS',
    name: 'Enterprise Technology & SaaS',
    subtitle: 'Streamlining cross-functional execution and multi-system digital operations.',
    icon: Building2,
    image: '/images/tech-infrastructure.jpg',
    imageAlt: 'High-density cloud infrastructure and telemetry servers',
    imageBadge: 'HIGH-CONCURRENCY MESH',
    imageCaption: 'Distributed Cloud Cluster · Sub-10ms Routing',
    context:
      'Modern software and technology companies operate in fast-paced environments where engineering, product, customer support, and go-to-market teams rely on heavily decentralized toolchains. Maintaining clear visibility over cross-functional deliverables without slowing down release cycles remains a continuous operational challenge.',
    commonNeeds: [
      {
        title: 'Cross-Departmental Task Coordination',
        desc: 'Minimizing friction during critical handoffs between engineering sprints, customer success onboarding, and back-office billing.'
      },
      {
        title: 'Decoupled Toolchain Interoperability',
        desc: 'Synchronizing data records between issue trackers, customer engagement tools, and internal admin panels without brittle custom scripts.'
      },
      {
        title: 'Operational Bottleneck Detection',
        desc: 'Identifying workflow lags and systemic delays across service provisioning and customer lifecycle milestones.'
      }
    ],
    solutionTitle: 'Operations Platform & Integration Hub',
    solutionDesc:
      'KavoraX Operations Platform establishes unified workflow coordination across distributed teams, while Integration Hub maintains reliable data synchronization between disconnected SaaS services.',
    solutionLink: '/products#operations-platform',
    solutionIcon: Cpu,
    capabilities: [
      'Multi-tenant toolchain data synchronization',
      'Automated service milestone routing and notification',
      'Real-time bottleneck and handoff lag visibility'
    ],
    primaryCta: 'Discuss Tech Operations',
    secondaryCta: 'Explore Operations Platform'
  },
  {
    id: 'financial-services',
    number: '02',
    category: 'AUDITABLE ARCHITECTURE',
    name: 'Financial Services & FinTech',
    subtitle: 'Auditable transaction architectures, rigorous data segregation, and governance.',
    icon: Landmark,
    image: '/images/fintech-headquarters.jpg',
    imageAlt: 'Modern financial architectural headquarters with glass facade',
    imageBadge: 'REGULATORY COMPLIANCE',
    imageCaption: 'Institutional Governance · End-to-End Cryptography',
    context:
      'Financial institutions and fintech organizations navigate stringent regulatory frameworks, rigorous audit requirements, and zero-tolerance expectations for transactional errors. Software systems must coordinate high-volume transactions while preserving full operational transparency and data lineage.',
    commonNeeds: [
      {
        title: 'Auditable Operational Logging',
        desc: 'Ensuring every state transition, user authorization, and system event is immutably recorded for regulatory scrutiny.'
      },
      {
        title: 'Rigorous Data Segregation',
        desc: 'Maintaining strict organizational boundaries and role-based permissions across sensitive accounts and customer portfolios.'
      },
      {
        title: 'Reconciliation Traceability',
        desc: 'Automating multi-system balance reconciliations and identifying ledger discrepancies before settlement windows close.'
      }
    ],
    solutionTitle: 'Analytics & Insights & Operations Platform',
    solutionDesc:
      'KavoraX Analytics & Insights delivers continuous operational telemetry and anomaly detection, paired with policy-governed task execution for compliance workflows.',
    solutionLink: '/products#analytics-insights',
    solutionIcon: BarChart3,
    capabilities: [
      'Continuous compliance audit event aggregation',
      'Multi-entity policy governance and permission gates',
      'Real-time operational exception escalation'
    ],
    primaryCta: 'Discuss FinTech Governance',
    secondaryCta: 'Explore Analytics Engine'
  },
  {
    id: 'healthcare',
    number: '03',
    category: 'CARE CONTINUITY',
    name: 'Healthcare & Life Sciences',
    subtitle: 'Confidential clinical data pipelines and synchronized patient workflows.',
    icon: Activity,
    image: '/images/healthcare-diagnostics.jpg',
    imageAlt: 'Modern laboratory instrumentation and clinical diagnostics',
    imageBadge: 'CLINICAL GRADE',
    imageCaption: 'Encrypted Telemetry · Care Coordination',
    context:
      'Healthcare organizations, medical device manufacturers, and clinical laboratories must balance exceptional patient care standards with rigorous patient privacy mandates and fragmented legacy electronic record systems.',
    commonNeeds: [
      {
        title: 'Multi-Department Scheduling & Handoffs',
        desc: 'Coordinating operational workflows between laboratory diagnostics, clinical evaluation, and administrative billing.'
      },
      {
        title: 'Confidential Diagnostics Routing',
        desc: 'Transmitting sensitive patient telemetry and laboratory findings across authenticated endpoints without risk of exposure.'
      },
      {
        title: 'Cross-System EHR Interoperability',
        desc: 'Enabling legacy record databases to communicate with modern clinical scheduling and telemedicine portals.'
      }
    ],
    solutionTitle: 'Operations Platform & Integration Hub',
    solutionDesc:
      'KavoraX Integration Hub provides cryptographically verified data pipelines for healthcare providers, while Operations Platform coordinates clinical task handoffs with strict privacy enforcement.',
    solutionLink: '/products#operations-platform',
    solutionIcon: Cpu,
    capabilities: [
      'Encrypted inter-departmental task routing',
      'Confidential clinical data lineage tracking',
      'Automated SLA monitoring for critical patient milestones'
    ],
    primaryCta: 'Discuss Healthcare Solutions',
    secondaryCta: 'Explore Integration Hub'
  },
  {
    id: 'supply-chain',
    number: '04',
    category: 'GLOBAL SYNCHRONIZATION',
    name: 'Supply Chain & Logistics',
    subtitle: 'Intermodal freight coordination, inventory synchronization, and milestone tracking.',
    icon: Truck,
    image: '/images/logistics-terminal.jpg',
    imageAlt: 'Modern automated intermodal container logistics terminal',
    imageBadge: 'INTERMODAL LOGISTICS',
    imageCaption: 'Multi-Terminal Hub · Real-Time Freight Sync',
    context:
      'Global logistics operators, freight coordinators, and warehouse networks face compounding complexity from fluctuating carrier capacity, weather disruptions, and heterogeneous inventory management software.',
    commonNeeds: [
      {
        title: 'Multi-Vendor Freight Bridging',
        desc: 'Unifying disparate EDI, API, and legacy transport management protocols into a single, predictable tracking stream.'
      },
      {
        title: 'Automated Exception Routing',
        desc: 'Triggering rapid mitigation workflows whenever shipment milestones or cold-chain temperature thresholds are breached.'
      },
      {
        title: 'Warehouse & Inventory Synchronization',
        desc: 'Maintaining cross-terminal inventory visibility to optimize dispatch timing and eliminate dwell time.'
      }
    ],
    solutionTitle: 'Integration Hub & Operations Platform',
    solutionDesc:
      'KavoraX Integration Hub standardizes communication across global freight providers, while Operations Platform orchestrates automated exception resolution across distributed fulfillment teams.',
    solutionLink: '/products#integration-hub',
    solutionIcon: Network,
    capabilities: [
      'Multi-carrier operational protocol bridging',
      'Automated freight exception handling workflows',
      'Real-time multi-terminal inventory synchronization'
    ],
    primaryCta: 'Discuss Logistics Architecture',
    secondaryCta: 'Explore Integration Hub'
  }
]
</script>

<template>
  <div class="relative bg-[#080c10] overflow-hidden">
    <!-- ======================================================== -->
    <!-- INDUSTRY 01: ENTERPRISE TECHNOLOGY & SAAS               -->
    <!-- Layout: Content on Left, High-Density Cluster on Right  -->
    <!-- ======================================================== -->
    <section
      :id="industries[0].id"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#080c10]"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Text Narrative Column -->
          <div class="lg:col-span-6 space-y-8 font-ui">
            <div class="flex items-center gap-3">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-brand/10 border border-brand/25 text-brand font-mono text-xs font-semibold"
              >
                {{ industries[0].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
                [ {{ industries[0].category }} ]
              </span>
            </div>

            <div class="space-y-3">
              <h2
                class="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08] text-balance-editorial"
              >
                {{ industries[0].name }}
              </h2>
              <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                {{ industries[0].subtitle }}
              </p>
            </div>

            <!-- Operational Context -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ industries[0].context }}
              </p>
            </div>

            <!-- Key Challenges -->
            <div class="space-y-3">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in industries[0].commonNeeds"
                :key="nIdx"
                class="p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-brand/30 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white">
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
            <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-6 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="industries[0].solutionIcon" class="h-4 w-4 text-brand" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ industries[0].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ industries[0].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in industries[0].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-brand shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ industries[0].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="industries[0].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ industries[0].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Photo Canvas Right -->
          <div class="lg:col-span-6 relative">
            <div
              class="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

              <div class="relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="industries[0].image"
                  :alt="industries[0].imageAlt"
                  loading="lazy"
                  class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

                <!-- Floating HUD Chip -->
                <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/85 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
                  <div class="flex items-center gap-2 text-brand">
                    <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
                    <span class="font-semibold tracking-wider">{{ industries[0].imageBadge }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 mt-1">
                    SECTOR ARCHITECTURE SPECIFICATION
                  </div>
                </div>

                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span class="font-ui font-medium text-white">{{ industries[0].imageCaption }}</span>
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
      :id="industries[1].id"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#0b0f14]"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Photo Canvas Left -->
          <div class="lg:col-span-6 relative order-2 lg:order-1">
            <div
              class="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

              <div class="relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="industries[1].image"
                  :alt="industries[1].imageAlt"
                  loading="lazy"
                  class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

                <!-- Floating HUD Chip -->
                <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/85 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
                  <div class="flex items-center gap-2 text-cyan-400">
                    <ShieldCheck class="h-4 w-4 text-cyan-400" />
                    <span class="font-semibold tracking-wider">{{ industries[1].imageBadge }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 mt-1">
                    AUDITABLE GOVERNANCE MATRIX
                  </div>
                </div>

                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span class="font-ui font-medium text-white">{{ industries[1].imageCaption }}</span>
                  <span class="text-cyan-400">SOC2 COMPLIANT</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Text Narrative Column Right -->
          <div class="lg:col-span-6 space-y-8 font-ui order-1 lg:order-2">
            <div class="flex items-center gap-3">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-mono text-xs font-semibold"
              >
                {{ industries[1].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
                [ {{ industries[1].category }} ]
              </span>
            </div>

            <div class="space-y-3">
              <h2
                class="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08] text-balance-editorial"
              >
                {{ industries[1].name }}
              </h2>
              <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                {{ industries[1].subtitle }}
              </p>
            </div>

            <!-- Operational Context -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ industries[1].context }}
              </p>
            </div>

            <!-- Key Challenges -->
            <div class="space-y-3">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in industries[1].commonNeeds"
                :key="nIdx"
                class="p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-cyan-500/30 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white">
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
            <div class="rounded-xl border border-cyan-500/25 bg-cyan-500/[0.04] p-6 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="industries[1].solutionIcon" class="h-4 w-4 text-cyan-400" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ industries[1].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ industries[1].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in industries[1].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ industries[1].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="industries[1].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ industries[1].secondaryCta }}</span>
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
      :id="industries[2].id"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#080c10]"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Text Narrative Column -->
          <div class="lg:col-span-7 space-y-8 font-ui">
            <div class="flex items-center gap-3">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold"
              >
                {{ industries[2].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400">
                [ {{ industries[2].category }} ]
              </span>
            </div>

            <div class="space-y-3">
              <h2
                class="font-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.08] text-balance-editorial"
              >
                {{ industries[2].name }}
              </h2>
              <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
                {{ industries[2].subtitle }}
              </p>
            </div>

            <!-- Operational Context -->
            <div class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ industries[2].context }}
              </p>
            </div>

            <!-- Key Challenges -->
            <div class="space-y-3">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in industries[2].commonNeeds"
                :key="nIdx"
                class="p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-emerald-500/30 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white">
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
            <div class="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.04] p-6 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="industries[2].solutionIcon" class="h-4 w-4 text-emerald-400" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ industries[2].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ industries[2].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in industries[2].capabilities"
                  :key="cIdx"
                  class="flex items-center gap-2.5"
                >
                  <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{{ cap }}</span>
                </div>
              </div>
            </div>

            <!-- CTAs -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ industries[2].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="industries[2].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ industries[2].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Photo Canvas Right -->
          <div class="lg:col-span-5 relative">
            <div
              class="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
            >
              <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
              <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

              <div class="relative h-[440px] sm:h-[520px] w-full overflow-hidden bg-zinc-950">
                <img
                  :src="industries[2].image"
                  :alt="industries[2].imageAlt"
                  loading="lazy"
                  class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
                <div class="absolute inset-0 bg-gradient-to-r from-[#080c10]/60 via-transparent to-transparent" />

                <!-- Floating HUD Chip -->
                <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#080c10]/85 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
                  <div class="flex items-center gap-2 text-emerald-400">
                    <Radio class="h-4 w-4 animate-pulse-subtle" />
                    <span class="font-semibold tracking-wider">{{ industries[2].imageBadge }}</span>
                  </div>
                  <div class="text-[10px] text-zinc-400 mt-1">
                    HIPAA / GDPR VERIFIED ENCLAVE
                  </div>
                </div>

                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span class="font-ui font-medium text-white">{{ industries[2].imageCaption }}</span>
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
      :id="industries[3].id"
      class="py-24 md:py-36 border-t border-white/[0.08] relative scroll-mt-28 md:scroll-mt-32 bg-[#0b0f14]"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Panoramic Top Visual Feature -->
        <div class="mb-14 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c141f] shadow-2xl relative group">
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none z-10" aria-hidden="true">+</div>

          <div class="relative h-[280px] sm:h-[360px] w-full overflow-hidden bg-zinc-950">
            <img
              :src="industries[3].image"
              :alt="industries[3].imageAlt"
              loading="lazy"
              class="w-full h-full object-cover img-editorial-zoom opacity-80 group-hover:opacity-100 transition-all duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-[#0b0f14]/40 to-transparent" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#0b0f14]/80 via-transparent to-transparent" />

            <!-- Floating Inset Banner -->
            <div class="absolute top-6 left-6 rounded-lg border border-white/15 bg-[#0b0f14]/90 p-3.5 backdrop-blur-md font-mono text-xs shadow-xl">
              <div class="flex items-center gap-2 text-brand">
                <Truck class="h-4 w-4" />
                <span class="font-semibold tracking-wider">{{ industries[3].imageBadge }}</span>
              </div>
              <div class="text-[10px] text-zinc-400 mt-1">
                MULTI-TERMINAL FREIGHT NETWORK
              </div>
            </div>

            <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
              <span class="font-ui font-medium text-white">{{ industries[3].imageCaption }}</span>
              <span class="text-brand">REAL-TIME TELEMETRY</span>
            </div>
          </div>
        </div>

        <!-- 2-Column Split Details Below Panoramic Image -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-6 space-y-6 font-ui">
            <div class="flex items-center gap-3">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-md bg-brand/10 border border-brand/25 text-brand font-mono text-xs font-semibold"
              >
                {{ industries[3].number }}
              </span>
              <span class="text-xs font-mono font-semibold uppercase tracking-widest text-brand">
                [ {{ industries[3].category }} ]
              </span>
            </div>

            <h2
              class="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight text-balance-editorial"
            >
              {{ industries[3].name }}
            </h2>

            <p class="font-editorial text-lg text-zinc-300 leading-relaxed">
              {{ industries[3].subtitle }}
            </p>

            <div class="rounded-xl border border-white/[0.08] bg-[#0c141e]/80 p-6 backdrop-blur-md">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Operational Realities
              </div>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {{ industries[3].context }}
              </p>
            </div>

            <!-- CTAs -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <NuxtLink to="/contact">
                <Button
                  size="default"
                  class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-6 py-5 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] transition-all duration-200"
                >
                  <span>{{ industries[3].primaryCta }}</span>
                  <ArrowRight class="ml-2 h-4 w-4" />
                </Button>
              </NuxtLink>

              <NuxtLink
                :to="industries[3].solutionLink"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                <span>{{ industries[3].secondaryCta }}</span>
                <ArrowUpRight class="h-3.5 w-3.5 text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Challenges & Mapped Architecture -->
          <div class="lg:col-span-6 space-y-6 font-ui">
            <!-- Key Challenges -->
            <div class="space-y-3">
              <div class="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Key Industry Challenges Addressed
              </div>
              <div
                v-for="(need, nIdx) in industries[3].commonNeeds"
                :key="nIdx"
                class="p-4 rounded-xl border border-white/[0.05] bg-[#0c131c]/50 hover:border-brand/30 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-xs font-mono mt-0.5">
                    {{ nIdx + 1 }}
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-white">
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
            <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-6 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <component :is="industries[3].solutionIcon" class="h-4 w-4 text-brand" />
                  <span class="text-xs font-semibold text-white">
                    Relevant Architecture: {{ industries[3].solutionTitle }}
                  </span>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {{ industries[3].solutionDesc }}
              </p>

              <div class="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                <div
                  v-for="(cap, cIdx) in industries[3].capabilities"
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
</template>
