<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { Cpu, BarChart3, Network, ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-vue-next'

const activeScope = ref<'department' | 'enterprise' | 'global'>('enterprise')

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
</script>

<template>
  <section
    id="solutions-comparison"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08] scroll-mt-28 md:scroll-mt-32"
  >
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
        <div class="max-w-2xl space-y-4">
          <ChapterLabel
            index="CHAPTER 03"
            label="SOLUTION SIZING & COMPARISON"
            sublabel="ARCHITECTURE ALIGNMENT"
          />
          <h2
            class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          >
            Three solution pillars, <span class="italic font-light text-brand">shaped to your architecture</span>.
          </h2>
          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            KavoraX evaluates each solution category based on your functional objectives, existing
            systems, and operational scale, ensuring transparent and relevant engagements.
          </p>
        </div>

        <!-- Scope Switcher Pill -->
        <div class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 bg-[#0e1620] font-mono shrink-0">
          <button
            type="button"
            class="px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer"
            :class="activeScope === 'department' ? 'bg-brand text-black font-semibold' : 'text-zinc-400 hover:text-white'"
            @click="activeScope = 'department'"
          >
            Departmental
          </button>
          <button
            type="button"
            class="px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer"
            :class="activeScope === 'enterprise' ? 'bg-brand text-black font-semibold' : 'text-zinc-400 hover:text-white'"
            @click="activeScope = 'enterprise'"
          >
            Cross-Enterprise
          </button>
          <button
            type="button"
            class="px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer"
            :class="activeScope === 'global' ? 'bg-brand text-black font-semibold' : 'text-zinc-400 hover:text-white'"
            @click="activeScope = 'global'"
          >
            Global Grid
          </button>
        </div>
      </div>

      <!-- Scope Profile Banner -->
      <div class="mt-8 rounded-2xl border border-brand/20 bg-[#0c141f]/90 p-6 sm:p-7 font-ui backdrop-blur-xl relative">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
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

      <!-- Solutions 3-Card Grid -->
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 font-ui">
        <div
          v-for="sol in solutions"
          :key="sol.id"
          class="rounded-2xl border border-white/[0.08] bg-[#0e151f]/90 hover:border-brand/35 transition-all duration-300 group flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl relative p-8"
        >
          <!-- Corner Crosshair -->
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

            <!-- General Business Needs It May Address -->
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

            <!-- Engagement Sizing Basis -->
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

      <!-- Responsive Mobile-Usable Comparison Matrix -->
      <div class="mt-20 rounded-2xl border border-white/[0.08] bg-[#0c141e]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
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

        <!-- Overflow wrapper for clean horizontal swipe on mobile -->
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
              <tr>
                <td class="py-3.5 px-4 font-medium text-white">Primary Focus</td>
                <td class="py-3.5 px-4">Workflow Execution</td>
                <td class="py-3.5 px-4">Continuous Telemetry</td>
                <td class="py-3.5 px-4">Interoperability Bus</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-medium text-white">Data Routing</td>
                <td class="py-3.5 px-4 text-brand font-medium">Deterministic Tasks</td>
                <td class="py-3.5 px-4 text-brand font-medium">1.2M Events/Sec Stream</td>
                <td class="py-3.5 px-4 text-brand font-medium">45+ Native Adapters</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-medium text-white">Policy Enforcement</td>
                <td class="py-3.5 px-4">Zero-Trust Gates</td>
                <td class="py-3.5 px-4">Anomaly Drift Radar</td>
                <td class="py-3.5 px-4">mTLS &amp; Token Encryption</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-medium text-white">SLA Basis</td>
                <td class="py-3.5 px-4 font-mono text-white">99.99% Availability</td>
                <td class="py-3.5 px-4 font-mono text-white">Sub-second Queries</td>
                <td class="py-3.5 px-4 font-mono text-white">&lt; 12ms Sync Latency</td>
              </tr>
              <tr>
                <td class="py-3.5 px-4 font-medium text-white">Engagement Scope</td>
                <td class="py-3.5 px-4 text-zinc-400">Team Units &amp; Workflows</td>
                <td class="py-3.5 px-4 text-zinc-400">Telemetry Volume</td>
                <td class="py-3.5 px-4 text-zinc-400">Endpoint Interfaces</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Footnote Reminder -->
      <div class="mt-12 text-center font-ui text-xs text-zinc-500">
        All engagements are structured around verified organizational requirements and confirmed
        scope.
      </div>
    </div>
  </section>
</template>
