<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { Cpu, BarChart3, Network, ShieldCheck, Zap, ArrowRightLeft, CheckCircle2 } from 'lucide-vue-next'

const selectedNode = ref(0)

const headerRef = ref<HTMLElement | null>(null)
const { isRevealed: isHeaderRevealed } = useScrollReveal(headerRef, { threshold: 0.12 })

const matrixRef = ref<HTMLElement | null>(null)
const { isRevealed: isMatrixRevealed } = useScrollReveal(matrixRef, { threshold: 0.12 })

const nodes = [
  {
    title: 'Business Operations',
    subtitle: 'Process Orchestration',
    description:
      'Coordinates operational tasks, standardizes cross-team handoffs, and ensures continuous workflow execution across distributed departments.',
    icon: Cpu,
    tag: 'Execution',
    channel: 'EVENT DISPATCH BUS',
    protocol: 'Zero-Wait State Replication'
  },
  {
    title: 'Analytics & Visibility',
    subtitle: 'Operational Telemetry',
    description:
      'Aggregates system activity into clear metrics, providing leadership with real-time operational context and continuous anomaly surveillance.',
    icon: BarChart3,
    tag: 'Clarity',
    channel: 'CONTINUOUS STREAM',
    protocol: 'Sub-Second Ingestion'
  },
  {
    title: 'System Integrations',
    subtitle: 'Interoperability Fabric',
    description:
      'Facilitates reliable bidirectional data flow across existing enterprise software, internal tools, and external cloud service touchpoints.',
    icon: Network,
    tag: 'Connectivity',
    channel: 'ADAPTER GATEWAY',
    protocol: 'mTLS Signed Pipelines'
  },
  {
    title: 'Governance & Security',
    subtitle: 'Policy & Protection',
    description:
      'Enforces enterprise system boundaries, permission controls, and cryptographically signed audit trails across all connected operations.',
    icon: ShieldCheck,
    tag: 'Assurance',
    channel: 'ZERO-TRUST GATE',
    protocol: 'Immutable Audit Ledger'
  }
]
</script>

<template>
  <section class="py-24 md:py-32 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden">
    <!-- Ambient Depth Lighting with Drift -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Scroll Reveal -->
      <div
        ref="headerRef"
        class="max-w-3xl mx-auto text-center space-y-4 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isHeaderRevealed }"
      >
        <ChapterLabel
          index="CHAPTER 03"
          label="ARCHITECTURAL INTERCONNECTION"
          sublabel="SYSTEM TOPOLOGY"
        />
        <WordReveal
          as="h2"
          text="One Connected Foundation. Multiple Business Possibilities."
          :italic-words="['Multiple', 'Business', 'Possibilities.']"
          class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
        />
        <p
          class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal"
        >
          Rather than functioning as isolated products, KavoraX solutions share a common operational
          fabric—enabling organizations to deploy what they need today and connect additional
          capabilities seamlessly tomorrow.
        </p>
      </div>

      <!-- Architectural Matrix Diagram Container with Scroll Reveal -->
      <div
        ref="matrixRef"
        class="mt-16 max-w-5xl mx-auto reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isMatrixRevealed }"
      >
        <div
          class="rounded-2xl border border-white/[0.1] bg-[#0c131c]/90 p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl relative"
        >
          <!-- Corner Crosshairs -->
          <div class="absolute top-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute top-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 left-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
          <div class="absolute bottom-3 right-3 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

          <!-- Top Diagram Telemetry Bar -->
          <div
            class="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08] font-ui text-xs"
          >
            <div class="flex items-center gap-2 text-zinc-300 font-medium font-mono">
              <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" />
              <span>CONNECTED FOUNDATION TOPOLOGY</span>
            </div>
            <div class="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
              <span class="text-zinc-500 hidden sm:inline">STATE SYNCHRONIZATION:</span>
              <span class="text-brand font-semibold">ACTIVE MESH</span>
            </div>
          </div>

          <!-- Central Architectural Quad Matrix with Staggered Entrance -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div
              v-for="(node, index) in nodes"
              :key="node.title"
              class="rounded-xl border p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group reveal-card"
              :class="[
                `stagger-${index + 1}`,
                isMatrixRevealed ? 'is-revealed' : '',
                selectedNode === index
                  ? 'border-brand/50 bg-[#121c2a] shadow-[0_4px_24px_rgba(16,185,129,0.18)] scale-[1.01]'
                  : 'border-white/[0.08] bg-[#0e1622]/80 hover:border-white/20 hover:bg-[#101926]'
              ]"
              @click="selectedNode = index"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-lg border transition-colors"
                    :class="[
                      selectedNode === index
                        ? 'border-brand/40 bg-brand/15 text-brand shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                        : 'border-white/10 bg-[#142131] text-zinc-300 group-hover:text-brand'
                    ]"
                  >
                    <component :is="node.icon" class="h-5 w-5" />
                  </div>
                  <div class="flex items-center gap-2">
                    <span
                      class="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded border"
                      :class="[
                        selectedNode === index
                          ? 'border-brand/30 bg-brand/15 text-brand font-semibold'
                          : 'border-white/[0.06] bg-white/[0.04] text-zinc-400'
                      ]"
                    >
                      {{ node.tag }}
                    </span>
                  </div>
                </div>

                <div class="font-mono text-[11px] text-brand tracking-wider uppercase font-semibold">
                  {{ node.subtitle }}
                </div>
                <h3 class="font-editorial text-2xl font-semibold text-white mt-1">
                  {{ node.title }}
                </h3>
                <p class="mt-2.5 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {{ node.description }}
                </p>
              </div>

              <!-- Node Telemetry Footer -->
              <div
                class="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-zinc-400"
              >
                <div class="flex items-center gap-1.5 text-zinc-400">
                  <ArrowRightLeft class="h-3.5 w-3.5 text-brand" />
                  <span class="text-zinc-300">{{ node.channel }}</span>
                </div>
                <span class="text-emerald-400 text-[10px]">{{ node.protocol }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Visual Ribbon: Unified Synchronization Status -->
          <div
            class="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400"
          >
            <div class="flex items-center gap-2 text-zinc-300">
              <Zap class="h-4 w-4 text-brand" />
              <span>Bidirectional telemetry and automated event synchronization across all nodes</span>
            </div>
            <div class="flex items-center gap-2 text-[11px] text-zinc-400">
              <CheckCircle2 class="h-3.5 w-3.5 text-brand" />
              <span>MODULAR DEPLOYMENT MODEL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
