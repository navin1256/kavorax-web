<script setup lang="ts">
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import ScrollTextReveal from '~/components/visual/ScrollTextReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  BarChart3,
  Network,
  ChevronDown,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Database,
  GitBranch,
  Cpu,
  Landmark,
  Truck,
  Building2,
  Check,
  Mail
} from 'lucide-vue-next'

useHead({
  title: 'KavoraX Global | Technology that moves business forward',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX builds connected business solutions that help organisations operate smarter, serve customers better and scale with confidence.'
    }
  ]
})


const archSvgNodes = [
  { id: 'operations' as const, cx: 80, label: 'OPERATIONS' },
  { id: 'telemetry' as const, cx: 320, label: 'ANALYTICS' },
  { id: 'integration' as const, cx: 600, label: 'INTEGRATIONS' },
  { id: 'governance' as const, cx: 880, label: 'SECURITY' }
]

// --- 1. HeroSection ---
const heroRef = ref<HTMLElement | null>(null)
const capRef = ref<HTMLElement | null>(null)
const isHeroVisible = ref(true)

// Cinematic immediate reveal for hero elements on page entry
const { isRevealed: isHeroRevealed } = useScrollReveal(heroRef, { immediate: true })
// Viewport-triggered scroll reveal for enterprise capabilities section
const { isRevealed: isCapRevealed } = useScrollReveal(capRef, { threshold: 0.15 })

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window && heroRef.value) {
    const obs = new IntersectionObserver(([entry]) => {
      isHeroVisible.value = entry ? entry.isIntersecting : false
    }, { rootMargin: '100px 0px 100px 0px' })
    obs.observe(heroRef.value)
    onUnmounted(() => obs.disconnect())
  }
})

const enterpriseCapabilities = [
  {
    id: 1,
    name: 'Workflow Orchestration',
    category: 'Operations',
    icon: Workflow,
    detail: 'Task routing, team coordination, and automated handoffs across departments.',
    metric: 'Real-time task synchronization across teams.'
  },
  {
    id: 2,
    name: 'Real-Time Insights',
    category: 'Analytics',
    icon: BarChart3,
    detail: 'Instant operational visibility that highlights bottlenecks and revenue opportunities.',
    metric: 'Clear reporting for leadership and operations teams.'
  },
  {
    id: 3,
    name: 'Universal Integration',
    category: 'Architecture',
    icon: Network,
    detail: 'Resilient multi-system connectivity linking legacy software, databases, and modern cloud APIs.',
    metric: 'Direct connection with third-party tools and hardware.'
  }
]

const scrollToContent = () => {
  const el = document.getElementById('enterprise-capabilities') || document.getElementById('editorial-intro')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// --- 2. EditorialIntro ---
const introSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isIntroRevealed } = useScrollReveal(introSectionRef, { threshold: 0.15 })

const principles = [
  {
    title: 'Connected Information',
    subtitle: 'Real-time data flow',
    description:
      'Replace isolated databases and standalone tools with continuous, clear information flow across your teams.'
  },
  {
    title: 'Smooth Operations',
    subtitle: 'Reliable automation',
    description:
      'Automate repetitive handoffs and routine tasks with speed, precision, and zero manual routing errors.'
  },
  {
    title: 'Built to Scale',
    subtitle: 'Long-term stability',
    description:
      'Modern, flexible systems engineered to handle growing operational volume without adding friction or complexity.'
  }
]

// --- 3. ConnectedArchitectureVisual ---
const { isRevealed: isArchRevealed, targetRef: archTargetRef } = useScrollReveal({ threshold: 0.12 })

const activeLayerId = ref<'operations' | 'telemetry' | 'integration' | 'governance'>('operations')

const layers = [
  {
    id: 'operations' as const,
    title: 'Operations & Workflows',
    tag: 'Operations',
    icon: Workflow,
    summary:
      'Coordinate cross-functional work, automate routine handoffs, and eliminate operational friction across your business.',
    capabilities: [
      'Multi-team task synchronization',
      'Automated SLA routing & escalation',
      'Exception triage & bottleneck mitigation'
    ],
    flowHighlight: 'OPERATIONS & WORKFLOWS'
  },
  {
    id: 'telemetry' as const,
    title: 'Real-Time Analytics & Reporting',
    tag: 'Analytics',
    icon: BarChart3,
    summary:
      'Turn daily operational activity into clear business insights, giving leadership instant visibility into performance and growth.',
    capabilities: [
      'Centralized operational telemetry feeds',
      'Continuous throughput and latency tracking',
      'Real-time anomaly identification'
    ],
    flowHighlight: 'REAL-TIME ANALYTICS'
  },
  {
    id: 'integration' as const,
    title: 'System Integrations & APIs',
    tag: 'Integrations',
    icon: Network,
    summary:
      'Connect existing databases, cloud tools, and partner systems into a unified platform without disruptive migrations.',
    capabilities: [
      'Resilient multi-system data pipelines',
      'Cross-platform webhook synchronization',
      'Decoupled architecture compatibility'
    ],
    flowHighlight: 'SYSTEM INTEGRATIONS'
  },
  {
    id: 'governance' as const,
    title: 'Security & Access Governance',
    tag: 'Security',
    icon: ShieldCheck,
    summary:
      'Maintain clear access boundaries, role-based controls, and complete audit logs across all company tools.',
    capabilities: [
      'Role-based authorization boundaries',
      'Traceable operational audit trails',
      'Continuous compliance verification'
    ],
    flowHighlight: 'SECURITY & GOVERNANCE'
  }
]

const currentLayer = computed(() => {
  return (layers.find((l) => l.id === activeLayerId.value) || layers[0]) as (typeof layers)[number]
})

function layerTagSubtitle(tag: string): string {
  switch (tag) {
    case 'Operations':
      return 'Connected Operational Foundation'
    case 'Analytics':
      return 'Real-Time Telemetry & Insights'
    case 'Integrations':
      return 'Universal System Interoperability'
    case 'Security':
      return 'Enterprise Governance & Privacy'
    default:
      return 'Connected Platform Capability'
  }
}

// --- 4. ProductShowcases ---
const { isRevealed: isProductsHeaderRevealed, targetRef: productsHeaderRef } = useScrollReveal({ threshold: 0.15 })
const { isRevealed: isProductCard1Revealed, targetRef: productCard1Ref } = useScrollReveal({ threshold: 0.12 })
const { isRevealed: isProductCards23Revealed, targetRef: productCards23Ref } = useScrollReveal({ threshold: 0.12 })

const telemetryBars = [
  { height: '40%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '55%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '70%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '65%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' },
  { height: '80%', brandShade: 'bg-brand/40 hover:bg-brand/60' },
  { height: '88%', brandShade: 'bg-brand/60 hover:bg-brand/80' },
  { height: '94%', highlight: true },
  { height: '85%', brandShade: 'bg-brand/70 hover:bg-brand/80' },
  { height: '72%', brandShade: 'bg-brand/50 hover:bg-brand/60' },
  { height: '58%', brandShade: 'bg-white/[0.06] hover:bg-brand/40' }
]

// --- 5. PhotographySolutions ---
const { isRevealed: isSolutionsRevealed, targetRef: solutionsTargetRef } = useScrollReveal({ threshold: 0.12 })

// --- 6. IndustryPreview ---
const { isRevealed: isIndustryRevealed, targetRef: industryTargetRef } = useScrollReveal({ threshold: 0.12 })

const industrySelectedIndex = ref(0)

const industries = [
  {
    id: 'financial',
    title: 'Financial Services & FinTech',
    tag: 'Financial Compliance',
    headline: 'Auditable transaction architectures with high data integrity.',
    description: 'Engineering fault-tolerant processing fabrics that meet strict regulatory frameworks, audit standards, and real-time ledger consistency requirements.',
    icon: Landmark,
    image: '/images/fintech-headquarters.webp',
    anchor: '/industries#financial-services',
    metrics: ['Sub-millisecond reconciliation', 'Continuous SOC2 / ISO-level auditability', 'Air-gapped transaction isolation']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    tag: 'Care Continuity',
    headline: 'Secure data pipelines accelerating clinical care delivery.',
    description: 'Enabling clinical teams to share confidential diagnostics and patient records with complete privacy, zero data leakage, and automated compliance.',
    icon: Activity,
    image: '/images/healthcare-diagnostics.webp',
    anchor: '/industries#healthcare',
    metrics: ['Encrypted patient telemetry', 'Automated data lineage tracing', '99.999% clinical availability']
  },
  {
    id: 'logistics',
    title: 'Supply Chain & Logistics',
    tag: 'Global Supply Chain',
    headline: 'End-to-end freight visibility and event-driven fulfillment.',
    description: 'Connecting global container hubs, regional distribution points, and automated inventory systems into a synchronized operational fabric.',
    icon: Truck,
    image: '/images/logistics-terminal.webp',
    anchor: '/industries#supply-chain',
    metrics: ['Real-time intermodal tracking', 'Dynamic route load balancing', 'Automated freight exception handling']
  },
  {
    id: 'technology',
    title: 'Enterprise Technology & Cloud',
    tag: 'Enterprise Cloud',
    headline: 'High-throughput platforms supporting mission-critical SaaS.',
    description: 'Empowering software enterprises with scalable multi-tenant orchestration, zero-downtime rolling deployments, and unified telemetry.',
    icon: Building2,
    image: '/images/tech-infrastructure.webp',
    anchor: '/industries#enterprise-tech',
    metrics: ['Multi-region active-active mesh', 'Deterministic API gateway', 'Automated auto-scaling governance']
  }
]

// --- 7. BrandStatement ---
const brandSectionRef = ref<HTMLElement | null>(null)
const { isRevealed: isBrandRevealed } = useScrollReveal(brandSectionRef, { threshold: 0.15 })

const commitments = [
  {
    icon: Network,
    title: 'Built to Integrate',
    description:
      'We avoid vendor lock-in. Every KavoraX system is built to connect cleanly with your existing software, databases, and third-party tools.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Privacy First',
    description:
      'Enterprise-grade encryption, continuous access controls, and complete audit trails protect your customer data and business operations.'
  },
  {
    icon: Cpu,
    title: 'Reliable at Scale',
    description:
      'Engineered for long-term operational resilience. Our software handles high transaction volumes smoothly as your business expands.'
  }
]

// --- 8. FinalCta ---
const finalCtaRef = ref<HTMLElement | null>(null)
const { isRevealed: isFinalCtaRevealed } = useScrollReveal(finalCtaRef, { threshold: 0.15 })
</script>

<template>
  <div class="relative bg-[#0A0A0A] overflow-x-hidden">
    <div class="relative bg-[#0A0A0A] text-white">
      <section
        ref="heroRef"
        class="hero-cinematic-bg relative min-h-[660px] sm:min-h-[700px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[820px] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white selection:bg-brand/20 selection:text-brand"
      >
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <img
            src="/images/fintech-headquarters.webp"
            alt="KavoraX modern enterprise corporate headquarters architecture"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            class="h-full w-full object-cover object-[center_32%] md:object-[center_28%] lg:object-[center_25%] opacity-40 filter brightness-[0.75] contrast-[1.10] scale-[1.01] animate-hero-drift"
            :style="{ animationPlayState: isHeroVisible ? 'running' : 'paused' }"
          >
          <div class="absolute inset-0 bg-[#0A0A0A]/65" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-transparent to-[#0A0A0A]/85" />
          <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-transparent" />
          
        </div>
        <div
          class="relative z-10 pt-7 sm:pt-9 reveal-base delay-75"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
          <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              class="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-3.5 font-ui text-xs text-zinc-400"
            >
              <div class="flex items-center gap-2.5">
                <span class="flex h-2 w-2 rounded-full bg-brand" />
                <span class="text-zinc-200 font-medium tracking-wide">
                  KavoraX Global Private Limited
                </span>
              </div>

              <div class="hidden sm:flex items-center gap-4 text-xs text-zinc-400">
                <span class="hidden md:inline">Enterprise Technology Consultancy</span>
                <span class="text-zinc-600 hidden md:inline">·</span>
                <span class="text-brand font-medium">Connected Business Solutions</span>
              </div>
            </div>
          </div>
        </div>
        <div class="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 text-center my-auto">
          <div
            class="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-black/60 px-4 py-1.5 text-xs font-ui tracking-wide text-zinc-300 shadow-sm reveal-base delay-100"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-brand" />
            <span class="font-medium text-brand text-xs">
              Connected Business Solutions
            </span>
          </div>
          <WordReveal
            text="Technology that&#10;moves business forward."
            as="h1"
            highlight="forward"
            highlight-class="text-brand font-normal"
            :base-delay-ms="200"
            :stagger-ms="55"
            :immediate="true"
            class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal tracking-[-0.025em] text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          />
          <p
            class="mt-5 sm:mt-6 font-editorial text-lg sm:text-xl md:text-[1.45rem] lg:text-[1.55rem] text-zinc-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-pretty font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] reveal-base delay-500"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            KavoraX builds connected business solutions that help organisations operate smarter,
            serve customers better and scale with confidence.
          </p>
          <div
            class="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base delay-700"
            :class="{ 'is-revealed': isHeroRevealed }"
          >
            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-9 py-6 text-base rounded-md transition-all duration-300 group"
              >
                <span>Book a Demo</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/solutions" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/20 bg-black/40 hover:bg-white/[0.09] text-white px-8 py-6 text-base rounded-md transition-all duration-200 group"
              >
                <span>Explore Our Solutions</span>
                <ArrowUpRight
                  class="ml-2 h-4 w-4 text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Button>
            </NuxtLink>
          </div>
        </div>
        <div
          class="relative z-10 pb-6 sm:pb-8 flex justify-center reveal-base delay-800"
          :class="{ 'is-revealed': isHeroRevealed }"
        >
          <button
            type="button"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 hover:bg-black/75 hover:border-brand/40 font-ui text-xs text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/50 group"
            aria-label="Scroll to enterprise capabilities"
            @click="scrollToContent"
          >
            <span>Explore Platform</span>
            <ChevronDown class="h-3.5 w-3.5 text-brand group-hover:translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </section>
      <section
        id="enterprise-capabilities"
        ref="capRef"
        class="relative z-10 pt-4 pb-16 sm:pb-20 border-b border-white/[0.08] bg-[#0A0A0A]"
      >
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="relative rounded-2xl border border-white/[0.09] bg-[#111111] p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.65)] mb-8 reveal-base"
            :class="{ 'is-revealed': isCapRevealed }"
          >
            
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span class="font-ui text-xs text-brand font-medium">
                    Architecture Overview
                  </span>
                </div>
                <h2 class="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  A Connected Foundation for Your Entire Business
                </h2>
              </div>

              <div class="flex items-center gap-3 font-ui text-xs text-zinc-400">
                <span class="px-2.5 py-1 rounded border border-white/10 bg-black/40 text-zinc-300 flex items-center gap-1.5">
                  <ShieldCheck class="h-3.5 w-3.5 text-brand" />
                  <span>Enterprise Ready</span>
                </span>
                <span class="px-2.5 py-1 rounded border border-white/10 bg-black/40 text-brand hidden sm:inline">
                  High Availability
                </span>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              <div class="rounded-xl border border-white/[0.08] bg-[#0f1722] p-5 flex flex-col justify-between h-full relative group hover:border-brand/30 transition-colors">
                <div class="space-y-3">
                  <div class="flex items-center justify-between text-xs font-ui text-zinc-400">
                    <span class="text-brand flex items-center gap-1.5 font-medium">
                      <Network class="h-3.5 w-3.5" />
                      <span>Integrations</span>
                    </span>
                    <span class="text-zinc-500">Core</span>
                  </div>
                  <h3 class="font-editorial text-xl font-medium text-white">
                    Universal Integration Fabric
                  </h3>
                  <p class="font-ui text-xs text-zinc-400 leading-relaxed">
                    Connects diverse business tools: legacy systems, relational databases, cloud apps, and external partner APIs.
                  </p>
                </div>
                <div class="pt-4 flex flex-wrap gap-1.5 font-ui text-xs text-zinc-400">
                  <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Multi-Protocol</span>
                  <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Real-Time Sync</span>
                </div>
              </div>
              <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-5 flex flex-col justify-between h-full relative group hover:border-brand/40 transition-colors">
                <div class="space-y-3">
                  <div class="flex items-center justify-between text-xs font-ui text-brand">
                    <span class="flex items-center gap-1.5 font-medium">
                      <Workflow class="h-3.5 w-3.5" />
                      <span>Workflows</span>
                    </span>
                    <span class="text-brand/80">Operations</span>
                  </div>
                  <h3 class="font-editorial text-xl font-medium text-white">
                    Workflow Orchestration
                  </h3>
                  <p class="font-ui text-xs text-zinc-300 leading-relaxed">
                    Automated execution pipelines eliminating handoff delays and operational bottlenecks across teams.
                  </p>
                </div>
                <div class="pt-4 flex flex-wrap gap-1.5 font-ui text-xs text-zinc-400">
                  <span class="px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand">Synchronized</span>
                  <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Zero-Latency Bus</span>
                </div>
              </div>
              <div class="rounded-xl border border-white/[0.08] bg-[#0f1722] p-5 flex flex-col justify-between h-full relative group hover:border-brand/30 transition-colors">
                <div class="space-y-3">
                  <div class="flex items-center justify-between text-xs font-ui text-zinc-400">
                    <span class="text-brand flex items-center gap-1.5 font-medium">
                      <Activity class="h-3.5 w-3.5" />
                      <span>Analytics</span>
                    </span>
                    <span class="text-zinc-500">Live</span>
                  </div>
                  <h3 class="font-editorial text-xl font-medium text-white">
                    Real-Time Business Telemetry
                  </h3>
                  <p class="font-ui text-xs text-zinc-400 leading-relaxed">
                    Real-time operational observability, throughput tracking, and automated bottleneck detection for leadership.
                  </p>
                </div>
                <div class="pt-4 flex flex-wrap gap-1.5 font-ui text-xs text-zinc-400">
                  <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Full Visibility</span>
                  <span class="px-2 py-0.5 rounded bg-black/50 border border-white/5">Audit Trails</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-ui items-stretch">
            <div
              v-for="(cap, cIdx) in enterpriseCapabilities"
              :key="cap.id"
              class="rounded-xl border border-white/[0.08] bg-[#111111] p-6 flex flex-col justify-between h-full hover:border-brand/40 hover:bg-[#161616] transition-all duration-300 group relative reveal-base"
              :class="[
                isCapRevealed ? 'is-revealed' : '',
                cIdx === 0 ? 'delay-100' : cIdx === 1 ? 'delay-200' : 'delay-300'
              ]"
            >
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5 text-brand">
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors">
                      <component :is="cap.icon" class="h-4 w-4" />
                    </div>
                    <span class="font-ui text-xs font-medium text-brand">
                      {{ cap.category }}
                    </span>
                  </div>
                </div>

                <h3 class="font-editorial text-2xl font-semibold text-white group-hover:text-brand transition-colors">
                  {{ cap.name }}
                </h3>

                <p class="text-sm text-zinc-300 leading-relaxed font-normal">
                  {{ cap.detail }}
                </p>
              </div>

              <div class="pt-4 border-t border-white/[0.06] mt-4">
                <p class="text-xs text-zinc-400 leading-normal">
                  {{ cap.metric }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section
      id="editorial-intro"
      ref="introSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="pb-8 border-b border-white/[0.08] mb-16 flex items-center justify-between reveal-base"
          :class="{ 'is-revealed': isIntroRevealed }"
        >
          <ChapterLabel label="Technology That Works Better Together" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div class="lg:col-span-7 space-y-8">
            <ScrollTextReveal
              text="The modern enterprise cannot afford fragmented systems. We architect unified technologies that connect people, data and physical operations in synchronized motion."
              as="h2"
              :start-offset="0.88"
              :end-offset="0.32"
              class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.08] tracking-[-0.02em] text-balance"
            />

            <div
              class="border-l-2 border-brand/40 pl-5 sm:pl-6 py-1 space-y-4 font-editorial text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed reveal-paragraph delay-200"
              :class="{ 'is-revealed': isIntroRevealed }"
            >
              <p>
                Fragmented systems drain momentum. When customer inquiries don't reach fulfillment, when inventory doesn't reflect actual stock, when field teams lack context from headquarters—enterprise potential leaks at every seam.
              </p>
            </div>

            <p
              class="font-ui text-base text-zinc-300 leading-relaxed max-w-xl font-normal reveal-paragraph delay-300"
              :class="{ 'is-revealed': isIntroRevealed }"
            >
              We close those gaps permanently. By unifying data pipelines, automating cross-functional workflows, and providing real-time operational clarity, KavoraX transforms disconnected operations into a synchronized enterprise.
            </p>

            <div
              class="pt-2 reveal-base delay-400"
              :class="{ 'is-revealed': isIntroRevealed }"
            >
              <NuxtLink
                to="/about"
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors group font-ui tracking-wide"
              >
                <span>Read Our Story</span>
                <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>
          <div class="lg:col-span-5 space-y-8 font-ui">
            <div class="space-y-8">
              <div
                v-for="(item, pIdx) in principles"
                :key="item.title"
                class="relative group space-y-2 pb-8 border-b border-white/[0.06] last:border-b-0 last:pb-0 reveal-card"
                :class="[
                  isIntroRevealed ? 'is-revealed' : '',
                  pIdx === 0 ? 'delay-150' : pIdx === 1 ? 'delay-250' : 'delay-350'
                ]"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs text-brand font-medium">
                    {{ item.subtitle }}
                  </span>
                </div>

                <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors">
                  {{ item.title }}
                </h3>

                <p class="text-sm text-zinc-300 leading-relaxed pt-1 font-normal">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="archTargetRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="pb-8 border-b border-white/[0.08] mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isArchRevealed }"
        >
          <div>
            <ChapterLabel label="One Connected Technology Ecosystem" />
            <h2 class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mt-4 reveal-base transition-editorial duration-700 delay-150" :class="{ 'is-revealed': isArchRevealed }">
  How connected systems function in unison.
</h2>
          </div>
          <p class="font-ui text-base sm:text-lg text-zinc-300 max-w-md leading-relaxed font-normal">
            KavoraX architecture connects your tools, workflows, and data into a synchronized system engineered for business growth and stability.
          </p>
        </div>
        <div
          class="mb-12 rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7 relative overflow-hidden reveal-card transition-editorial duration-700 delay-100"
          :class="{ 'is-revealed': isArchRevealed }"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/[0.06] font-ui text-xs gap-2">
            <div class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-brand" />
              <span class="text-white font-medium tracking-wide text-xs">UNIFIED SYSTEM DATA FLOW</span>
            </div>
            <div class="flex items-center gap-4 text-xs text-zinc-400">
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-3 rounded-full bg-brand inline-block" /> Primary Flow</span>
              <span class="flex items-center gap-1.5"><span class="h-1.5 w-3 rounded-full bg-zinc-500 inline-block" /> Analytics Link</span>
              <span class="text-brand font-semibold hidden sm:inline">SYNCHRONIZED</span>
            </div>
          </div>
          <div class="relative w-full overflow-hidden">
            <svg
              viewBox="0 0 960 70"
              class="w-full h-16 sm:h-20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="KavoraX Interconnected Systems Architecture Schematic"
            >
              <line x1="80" y1="35" x2="880" y2="35" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" stroke-dasharray="4 6" />
              <line x1="80" y1="52" x2="880" y2="52" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
              <path
                d="M 80 52 L 320 52 L 320 35 M 320 52 L 600 52 L 600 35 M 600 52 L 880 52 L 880 35"
                stroke="#52525B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="draw-path-secondary"
                :class="{ 'is-revealed': isArchRevealed }"
              />
              <path
                d="M 80 35 L 880 35"
                stroke="#08E888"
                stroke-width="2.5"
                stroke-linecap="round"
                class="draw-path-primary"
                :class="{ 'is-revealed': isArchRevealed }"
              />
              <g
                v-for="node in archSvgNodes"
                :key="node.id"
                class="draw-node cursor-pointer group"
                :class="{ 'is-revealed': isArchRevealed }"
                @click="activeLayerId = node.id"
              >
                <circle v-if="activeLayerId === node.id" :cx="node.cx" cy="35" r="20" fill="none" stroke="#08E888" stroke-width="1.5" opacity="0.4" class="animate-ping" />
                <circle :cx="node.cx" cy="35" r="14" fill="#0A0A0A" :stroke="activeLayerId === node.id ? '#08E888' : 'rgba(255,255,255,0.2)'" stroke-width="2" class="transition-colors duration-300" />
                <circle :cx="node.cx" cy="35" r="5" :fill="activeLayerId === node.id ? '#08E888' : '#52525B'" class="transition-colors duration-300" />
                <text :x="node.cx" y="16" fill="#A1A1AA" font-size="10" font-family="'Anek Latin', sans-serif" text-anchor="middle" font-weight="600">{{ node.label }}</text>
              </g>
            </svg>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start font-ui">
          <div
            class="lg:col-span-5 space-y-3 reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isArchRevealed }"
          >
            <div
              v-for="layer in layers"
              :key="layer.id"
              class="p-5 rounded-xl border transition-all duration-300 cursor-pointer relative group"
              :class="[
                activeLayerId === layer.id
                  ? 'border-brand/50 bg-[#1C1C1C]'
                  : 'border-white/[0.06] bg-[#111111] hover:border-white/20 hover:bg-[#161616]'
              ]"
              @click="activeLayerId = layer.id"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-lg border transition-all"
                    :class="[
                      activeLayerId === layer.id
                        ? 'border-brand/40 bg-brand/20 text-brand'
                        : 'border-white/10 bg-[#1C1C1C] text-zinc-400 group-hover:text-white'
                    ]"
                  >
                    <component :is="layer.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <div class="font-editorial text-xl font-semibold text-white tracking-tight">
                      {{ layer.title }}
                    </div>
                    <div class="font-ui text-xs text-zinc-400 mt-0.5">
                      {{ layer.tag }}
                    </div>
                  </div>
                </div>

                <div
                  class="h-2 w-2 rounded-full transition-colors"
                  :class="activeLayerId === layer.id ? 'bg-brand shadow-[0_0_8px_#08E888]' : 'bg-transparent'"
                />
              </div>
            </div>
          </div>
          <div
            class="lg:col-span-7 relative reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isArchRevealed }"
          >
            <div
              class="rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.7)] relative overflow-hidden group"
            >
              <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] font-ui text-xs gap-2">
                <div class="flex items-center gap-2 text-brand">
                  <span class="h-2 w-2 rounded-full bg-brand shrink-0" />
                  <span class="font-medium uppercase tracking-wider text-xs">{{ currentLayer.flowHighlight }}</span>
                </div>
                <span class="text-zinc-400 font-ui text-xs">Connected Platform</span>
              </div>
              <div class="py-6 sm:py-8 space-y-6">
                <div class="flex items-center gap-3.5">
                  <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 border border-brand/30 text-brand">
                    <component :is="currentLayer.icon" class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                      {{ currentLayer.title }}
                    </h3>
                    <div class="font-ui text-xs text-brand mt-0.5 font-medium">
                      {{ layerTagSubtitle(currentLayer.tag) }}
                    </div>
                  </div>
                </div>

                <p class="font-editorial text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal">
                  {{ currentLayer.summary }}
                </p>
                <div class="pt-4 border-t border-white/[0.06] space-y-3 font-ui text-sm">
                  <div class="text-xs font-ui text-zinc-400 font-medium">
                    Key Capabilities:
                  </div>
                  <div
                    v-for="(cap, cIdx) in currentLayer.capabilities"
                    :key="cIdx"
                    class="flex items-center gap-3 text-zinc-200"
                  >
                    <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                    <span>{{ cap }}</span>
                  </div>
                </div>
              </div>
              <div class="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between font-ui text-xs gap-3">
                <span class="text-zinc-400 font-ui text-xs">KavoraX Unified Platform</span>
                <NuxtLink
                  to="/solutions"
                  class="inline-flex items-center gap-1.5 text-brand hover:text-white transition-colors font-semibold"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight class="h-3.5 w-3.5" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="product-showcases" class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="productsHeaderRef"
          class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isProductsHeaderRevealed }"
        >
          <div class="max-w-3xl space-y-4">
            <ChapterLabel label="Our Products" />
            <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Technology designed for real-world operations.
            </h2>
            <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              Three core enterprise capabilities engineered to operate as one unified foundation.
            </p>
          </div>

          <NuxtLink to="/products" class="shrink-0 font-ui">
            <span class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-md border border-white/10 bg-[#161616] text-zinc-200 hover:text-white hover:border-brand/40 transition-all shadow-sm">
              <span>Explore All Products</span>
              <ArrowRight class="h-3.5 w-3.5 text-brand" />
            </span>
          </NuxtLink>
        </div>
        <div
          ref="productCard1Ref"
          class="mt-16 rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 md:p-12 relative group hover:border-brand/40 transition-all duration-500 reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isProductCard1Revealed }"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center font-ui">
            <div class="lg:col-span-6 space-y-6">
              <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-ui font-medium text-brand">
                <Workflow class="h-3.5 w-3.5" />
                <span>Operations Platform</span>
              </div>

              <h3 class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.1]">
                Continuous workflow coordination across distributed teams.
              </h3>

              <p class="font-ui text-base text-zinc-300 leading-relaxed font-normal">
                Eliminate operational friction with smart process routing, automated escalation triggers, and real-time handoff visibility.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Automated task pipeline</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>SLA-based priority triggers</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Cross-functional synchronization</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Auditable activity tracing</span>
                </div>
              </div>

              <div class="pt-4 flex items-center gap-4">
                <NuxtLink
                  to="/products"
                  class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
                >
                  <span>Learn More About Operations</span>
                  <ArrowRight class="h-3.5 w-3.5" />
                </NuxtLink>
              </div>
            </div>
            <div class="lg:col-span-6">
              <div class="rounded-xl border border-white/10 bg-[#0A0A0A] p-5 sm:p-6 space-y-4 font-ui text-xs shadow-inner">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.08] text-zinc-300 gap-2">
                  <span class="font-semibold text-white">Workflow Routing Pipeline</span>
                  <span class="text-brand text-xs font-medium">Coordinated</span>
                </div>
                <div class="space-y-3">
                  <div class="p-3.5 sm:p-4 rounded-lg border border-brand/30 bg-brand/[0.05] flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <span class="h-2 w-2 rounded-full bg-brand shrink-0" />
                      <div>
                        <div class="text-white font-semibold font-ui text-sm">Task Ingestion &amp; Verification</div>
                        <div class="text-xs text-zinc-400 font-sans mt-0.5">Automated validation against business rules</div>
                      </div>
                    </div>
                    <span class="text-brand text-xs font-semibold shrink-0 ml-2">Verified</span>
                  </div>

                  <div class="p-3.5 sm:p-4 rounded-lg border border-white/[0.1] bg-[#111111] flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <span class="h-2 w-2 rounded-full bg-brand shrink-0" />
                      <div>
                        <div class="text-white font-semibold font-ui text-sm">Cross-Team Dispatch</div>
                        <div class="text-xs text-zinc-400 font-sans mt-0.5">Automated routing across operational and administrative units</div>
                      </div>
                    </div>
                    <span class="text-brand text-xs font-semibold shrink-0 ml-2">Synced</span>
                  </div>

                  <div class="p-3.5 sm:p-4 rounded-lg border border-white/[0.06] bg-[#0A0A0A] flex items-center justify-between text-zinc-400">
                    <div class="flex items-center gap-3">
                      <span class="h-2 w-2 rounded-full bg-brand/40 shrink-0" />
                      <div>
                        <div class="text-zinc-200 font-semibold font-ui text-sm">Activity Audit Record</div>
                        <div class="text-xs text-zinc-400 font-sans mt-0.5">Traceable event history captured for management review</div>
                      </div>
                    </div>
                    <span class="text-zinc-400 text-xs font-semibold shrink-0 ml-2">Logged</span>
                  </div>
                </div>

                <div class="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 gap-2">
                  <span>Reliability: 99.99% Uptime</span>
                  <span class="text-brand font-medium">Real-Time Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref="productCards23Ref"
          class="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 font-ui items-stretch"
        >
          <div
            class="lg:col-span-6 rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 md:p-10 relative group hover:border-brand/40 transition-all duration-500 flex flex-col justify-between h-full reveal-base transition-editorial duration-700"
            :class="{ 'is-revealed': isProductCards23Revealed }"
          >
            <div class="space-y-6">
              <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-ui font-medium text-brand">
                <BarChart3 class="h-3.5 w-3.5" />
                <span>Business Analytics</span>
              </div>

              <h3 class="font-editorial text-3xl sm:text-4xl font-medium text-white leading-tight">
                Real-time operational clarity and business foresight.
              </h3>

              <p class="font-ui text-base text-zinc-300 leading-relaxed font-normal">
                Transform continuous business signals into immediate visibility. Identify trends, track margins, and spot bottlenecks before they affect growth.
              </p>
              <div class="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 sm:p-6 font-ui text-xs space-y-4">
                <div class="flex items-center justify-between text-zinc-300 pb-2 border-b border-white/[0.06]">
                  <span class="font-semibold text-white">Daily Performance Overview</span>
                  <span class="text-brand font-medium">Live Telemetry</span>
                </div>
                <div class="h-20 flex items-end gap-2 pt-2">
                  <div
                    v-for="(bar, bIdx) in telemetryBars"
                    :key="bIdx"
                    class="w-full rounded-t transition-[height,opacity] duration-700 transition-editorial"
                    :class="[
                      bar.highlight ? 'bg-brand' : bar.brandShade
                    ]"
                    :style="{
                      height: isProductCards23Revealed ? bar.height : '8%',
                      transitionDelay: isProductCards23Revealed ? `${bIdx * 45}ms` : '0ms'
                    }"
                  />
                </div>

                <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span>System Status: Healthy</span>
                  <span class="text-white">Throughput: Optimal</span>
                </div>
              </div>
            </div>

            <div class="pt-8 border-t border-white/[0.06] mt-6">
              <NuxtLink
                to="/business-analytics"
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
              >
                <span>Explore Analytics</span>
                <ArrowRight class="h-3.5 w-3.5" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="lg:col-span-6 rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 md:p-10 relative group hover:border-brand/40 transition-all duration-500 flex flex-col justify-between h-full reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isProductCards23Revealed }"
          >
            <div class="space-y-6">
              <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-ui font-medium text-brand">
                <Network class="h-3.5 w-3.5" />
                <span>System Integrations</span>
              </div>

              <h3 class="font-editorial text-3xl sm:text-4xl font-medium text-white leading-tight">
                Connect your existing tools into one unified platform.
              </h3>

              <p class="font-ui text-base text-zinc-300 leading-relaxed font-normal">
                Standardize disparate protocols, legacy ERPs, databases, and modern cloud endpoints into a single, high-throughput integration pipeline.
              </p>
              <div class="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 sm:p-6 font-ui text-xs space-y-3.5">
                <div class="flex items-center justify-between text-zinc-300 pb-2 border-b border-white/[0.06]">
                  <span class="font-semibold text-white">System Connectivity Map</span>
                  <span class="text-brand font-medium">Encrypted &amp; Secure</span>
                </div>
                <div class="space-y-2 font-ui">
                  <div class="p-3 rounded-lg bg-[#161616] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200">
                    <span class="flex items-center gap-2">
                      <Database class="h-3.5 w-3.5 text-zinc-400" />
                      Databases &amp; Enterprise ERPs
                    </span>
                    <span class="text-brand text-xs font-medium">Connected</span>
                  </div>

                  <div class="flex justify-center -my-1 py-0.5">
                    <div class="w-px h-3 bg-gradient-to-b from-white/20 to-brand/40" />
                  </div>

                  <div class="p-3 rounded-lg bg-brand/[0.08] border border-brand/30 flex items-center justify-between text-xs text-white font-medium">
                    <span class="flex items-center gap-2">
                      <GitBranch class="h-3.5 w-3.5 text-brand" />
                      KavoraX Unified Integration Bus
                    </span>
                    <span class="text-brand text-xs font-medium">Active Sync</span>
                  </div>

                  <div class="flex justify-center -my-1 py-0.5">
                    <div class="w-px h-3 bg-gradient-to-b from-brand/40 to-white/20" />
                  </div>

                  <div class="p-3 rounded-lg bg-[#161616] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200">
                    <span class="flex items-center gap-2">
                      <ShieldCheck class="h-3.5 w-3.5 text-zinc-400" />
                      Cloud APIs &amp; External Services
                    </span>
                    <span class="text-brand text-xs font-medium">Synchronized</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-8 border-t border-white/[0.06] mt-6">
              <NuxtLink
                to="/products"
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
              >
                <span>Explore Integrations</span>
                <ArrowRight class="h-3.5 w-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="solutionsTargetRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="pb-8 border-b border-white/[0.08] mb-16 flex items-center justify-between reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isSolutionsRevealed }"
        >
          <ChapterLabel label="Solutions Built Around Your Business" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div
            class="lg:col-span-7 relative reveal-base transition-editorial duration-700 delay-75"
            :class="{ 'is-revealed': isSolutionsRevealed }"
          >
            <div class="w-full">
  <UiDeviceFrame type="terminal" title="POS Counter Operations">
    <PosBillingScreen embedded />
  </UiDeviceFrame>
</div>
          </div>
          <div
            class="lg:col-span-5 space-y-6 font-ui reveal-base transition-editorial duration-700 delay-200"
            :class="{ 'is-revealed': isSolutionsRevealed }"
          >
            <div class="inline-flex items-center gap-2 text-xs font-ui text-brand font-medium">
              <Cpu class="h-3.5 w-3.5" />
              <span>Tailored Implementation</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.08]">
              Solutions that adapt to how you work.
            </h3>

            <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              We don't force one-size-fits-all software. KavoraX works alongside your teams to implement technology that respects existing workflows while unlocking new operational efficiencies.
            </p>

            <div class="space-y-4 pt-2 text-sm text-zinc-300">
              <div
                class="p-4 rounded-xl border border-white/[0.07] bg-[#111111] flex items-start gap-3.5 reveal-card delay-150"
                :class="{ 'is-revealed': isSolutionsRevealed }"
              >
                <CheckCircle2 class="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong class="text-white font-medium block">Customized Business Deployment</strong>
                  <span class="text-xs text-zinc-400 leading-relaxed">Configured around your specific operational workflows, team structure, and business objectives.</span>
                </div>
              </div>

              <div
                class="p-4 rounded-xl border border-white/[0.07] bg-[#111111] flex items-start gap-3.5 reveal-card delay-250"
                :class="{ 'is-revealed': isSolutionsRevealed }"
              >
                <CheckCircle2 class="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong class="text-white font-medium block">Smooth, Zero-Disruption Rollout</strong>
                  <span class="text-xs text-zinc-400 leading-relaxed">Step-by-step rollout plans that safeguard business continuity with zero disruption to daily sales.</span>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <NuxtLink
                to="/solutions"
                class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md border border-brand/30 bg-brand/10 hover:bg-brand/20 text-brand hover:text-white transition-all text-xs font-semibold font-ui group"
              >
                <span>Explore All Solutions</span>
                <ArrowUpRight class="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      ref="industryTargetRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] reveal-base transition-editorial duration-700"
          :class="{ 'is-revealed': isIndustryRevealed }"
        >
          <div class="max-w-3xl space-y-4">
            <ChapterLabel label="Industries We Serve" />
            <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Specialized solutions for your industry.
            </h2>
            <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              Every sector has distinct operational workflows, customer touchpoints, and compliance requirements.
            </p>
          </div>

          <NuxtLink to="/industries" class="shrink-0 font-ui">
            <span class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-md border border-white/10 bg-[#161616] text-zinc-200 hover:text-white hover:border-brand/40 transition-all shadow-sm">
              <span>Explore All Industries</span>
              <ArrowRight class="h-3.5 w-3.5 text-brand" />
            </span>
          </NuxtLink>
        </div>
        <div class="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch font-ui">
          <div
            class="lg:col-span-5 space-y-3 flex flex-col justify-between reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isIndustryRevealed }"
          >
            <div
              v-for="(ind, index) in industries"
              :key="ind.id"
              class="p-5 rounded-xl border transition-all duration-300 cursor-pointer relative group"
              :class="[
                industrySelectedIndex === index
                  ? 'border-brand/40 bg-[#1C1C1C]'
                  : 'border-white/[0.06] bg-[#111111] hover:border-white/15 hover:bg-[#111111]'
              ]"
              @mouseenter="industrySelectedIndex = index"
              @click="industrySelectedIndex = index"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors mt-0.5"
                  :class="[
                    industrySelectedIndex === index
                      ? 'border-brand/40 bg-brand/10 text-brand'
                      : 'border-white/10 bg-white/[0.02] text-zinc-400 group-hover:text-white'
                  ]"
                >
                  <component :is="ind.icon" class="h-5 w-5" />
                </div>

                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-ui font-medium text-brand">
                      {{ ind.tag }}
                    </span>
                    <div
                      class="h-1.5 w-1.5 rounded-full transition-colors"
                      :class="industrySelectedIndex === index ? 'bg-brand shadow-[0_0_6px_#08E888]' : 'bg-transparent'"
                    />
                  </div>
                  <h3 class="font-editorial text-xl font-semibold text-white mt-1">
                    {{ ind.title }}
                  </h3>
                  <p class="text-xs text-zinc-300 mt-1 leading-relaxed line-clamp-2 font-normal">
                    {{ ind.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="lg:col-span-7 relative min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#111111] shadow-2xl flex flex-col justify-between reveal-base transition-editorial duration-700 delay-300"
            :class="{ 'is-revealed': isIndustryRevealed }"
          >
            <div class="absolute inset-0 z-0">
              <img
                :src="industries[industrySelectedIndex]?.image"
                :alt="industries[industrySelectedIndex]?.title"
                loading="lazy"
                decoding="async"
                width="800"
                height="520"
                class="w-full h-full object-cover img-editorial-zoom transition-all duration-700"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/40" />
              <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/45 to-transparent" />
            </div>
            <div class="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between space-y-6">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.1] pb-4 gap-2">
                <span class="text-xs font-ui text-brand font-medium">
                  {{ industries[industrySelectedIndex]?.title }}
                </span>
                <span class="text-xs font-ui text-zinc-300">
                  Industry Solutions
                </span>
              </div>

              <div class="space-y-4 my-auto">
                <h3 class="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
                  {{ industries[industrySelectedIndex]?.headline }}
                </h3>

                <p class="font-ui text-base text-zinc-200 leading-relaxed max-w-xl font-normal">
                  {{ industries[industrySelectedIndex]?.description }}
                </p>
                <div class="pt-4 space-y-2 text-xs font-ui text-zinc-200">
                  <div
                    v-for="metric in industries[industrySelectedIndex]?.metrics"
                    :key="metric"
                    class="flex items-center gap-2.5"
                  >
                    <div class="flex h-4 w-4 items-center justify-center rounded-full bg-brand/20 text-brand shrink-0">
                      <Check class="h-3 w-3" />
                    </div>
                    <span>{{ metric }}</span>
                  </div>
                </div>
              </div>

              <div class="pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <NuxtLink
                  :to="industries[industrySelectedIndex]?.anchor"
                  class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors group font-ui"
                >
                  <span>Read Industry Overview</span>
                  <ArrowRight class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="brand-statement"
      ref="brandSectionRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          class="pb-8 border-b border-white/[0.08] mb-16 flex items-center justify-between reveal-base"
          :class="{ 'is-revealed': isBrandRevealed }"
        >
          <ChapterLabel label="Why Businesses Choose KavoraX" />
          <h2 class="sr-only">Why Businesses Choose KavoraX</h2>
        </div>
        <div class="max-w-5xl mx-auto text-center space-y-8 mb-20">
          <ScrollTextReveal
            text="“We believe enterprise technology should empower organisations to operate with absolute clarity, interconnect critical operations, and scale with unwavering durability.”"
            as="blockquote"
            :start-offset="0.88"
            :end-offset="0.32"
            class="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight"
          />

          <p
            class="font-ui text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal reveal-base delay-200"
            :class="{ 'is-revealed': isBrandRevealed }"
          >
            KavoraX Global Private Limited builds dependable, connected technology solutions that transform operational complexity into clarity and momentum.
          </p>
        </div>
        <div
          class="rounded-2xl border border-white/10 bg-[#0c131e]/90 p-6 sm:p-8 md:p-12 font-ui divide-y divide-white/[0.08] reveal-base delay-300"
          :class="{ 'is-revealed': isBrandRevealed }"
        >
          <div
            v-for="(item, idx) in commitments"
            :key="item.title"
            class="py-8 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group reveal-base"
            :class="[
              isBrandRevealed ? 'is-revealed' : '',
              idx === 0 ? 'delay-200' : idx === 1 ? 'delay-300' : 'delay-400'
            ]"
          >
            <div class="lg:col-span-3 flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1C1C1C] border border-white/10 text-brand group-hover:scale-105 group-hover:border-brand/40 transition-all">
                <component :is="item.icon" class="h-5 w-5" />
              </div>
              <div class="font-ui text-xs text-brand font-medium">
                Core Principle
              </div>
            </div>
            <div class="lg:col-span-4">
              <h3 class="font-editorial text-2xl sm:text-3xl font-semibold text-white group-hover:text-brand transition-colors">
                {{ item.title }}
              </h3>
            </div>
            <div class="lg:col-span-5">
              <p class="font-ui text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="final-cta"
      ref="finalCtaRef"
      class="py-24 md:py-36 bg-[#0A0A0A] border-t border-white/[0.08] relative overflow-hidden"
    >
      

      <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-3xl border border-white/10 bg-[#111111] p-6 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] group reveal-base"
          :class="{ 'is-revealed': isFinalCtaRevealed }"
        >
          <div class="flex justify-center mb-8 reveal-base delay-75" :class="{ 'is-revealed': isFinalCtaRevealed }">
            <ChapterLabel label="Let's Build Something Better Together" />
          </div>
          <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-white leading-[1.08] max-w-3xl mx-auto text-balance reveal-base delay-150" :class="{ 'is-revealed': isFinalCtaRevealed }">
  Ready to move your business forward?
</h2>
          <p
            class="mt-6 font-ui text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal reveal-base delay-250"
            :class="{ 'is-revealed': isFinalCtaRevealed }"
          >
            Schedule a walkthrough with our specialists to explore our connected solutions, system integrations, and implementation roadmap.
          </p>
          <div
            class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui reveal-base delay-350"
            :class="{ 'is-revealed': isFinalCtaRevealed }"
          >
            <NuxtLink to="/demo" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md transition-all duration-300 group"
              >
                <span>Book a Demo</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/20 bg-black/40 hover:bg-white/[0.08] text-white px-8 py-6 text-base rounded-md transition-all duration-200"
              >
                <Mail class="mr-2 h-4 w-4 text-brand" />
                <span>Contact Our Team</span>
              </Button>
            </NuxtLink>
          </div>
          <div
            class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-ui reveal-base delay-450"
            :class="{ 'is-revealed': isFinalCtaRevealed }"
          >
            <div class="flex items-center gap-2">
              <ShieldCheck class="h-4 w-4 text-brand" />
              <span>Secure &amp; Confidential</span>
            </div>
            <span class="text-zinc-600 hidden sm:inline">·</span>
            <div>Direct Specialist Consultation</div>
            <span class="text-zinc-600 hidden sm:inline">·</span>
            <div>No Vendor Lock-in</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
