<script setup lang="ts">
import { ref } from 'vue'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import ScrollTextReveal from '~/components/visual/ScrollTextReveal.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowRight,
  Layers,
  Split,
  GitCommit
} from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(sectionRef, { threshold: 0.15 })
</script>

<template>
  <section
    id="who-we-are"
    ref="sectionRef"
    class="py-24 md:py-36 bg-[#070b0f] bg-technical-grid border-b border-white/[0.08] relative overflow-hidden"
  >
    <!-- Background Ambient Emerald Glow -->
    <div
      class="absolute top-1/2 -left-48 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.06] mb-16 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700"
        :class="{ 'is-revealed': isRevealed }"
      >
        <ChapterLabel label="Who We Are" />
        <div class="flex items-center gap-4 text-xs text-zinc-400">
          <span class="text-zinc-300">Company Overview</span>
        </div>
      </div>

      <!-- Main Asymmetric Spread -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left: Typographic Statement & Human Narrative -->
        <div
          class="lg:col-span-7 space-y-8 reveal-base transition-editorial duration-700 delay-75"
          :class="{ 'is-revealed': isRevealed }"
        >
          <WordReveal
            text="Technology with business at its core."
            as="h2"
            class="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]"
            :italic-words="['business', 'at', 'its', 'core.']"
            :delay="100"
          />

          <div class="space-y-6">
            <div class="border-l-2 border-brand/40 pl-6">
              <ScrollTextReveal
                text="Modern enterprises frequently struggle with fragmented software landscapes where critical workflows, operational telemetry, and cross-departmental handoffs remain trapped in disconnected tools."
                as="blockquote"
                class="font-editorial text-xl sm:text-2xl leading-relaxed italic"
                :highlight="['fragmented', 'software', 'landscapes', 'disconnected', 'tools.']"
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

          <!-- What We Stand For -->
          <div class="pt-6 border-t border-white/[0.06] space-y-4 font-ui">
            <div class="flex items-center justify-between text-xs text-zinc-400 font-medium">
              <span>What We Stand For</span>
              <span class="text-brand">Quality &amp; Transparency</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="rounded-xl border border-white/[0.08] bg-[#0c141e]/90 p-5 space-y-2 hover:border-brand/30 transition-colors">
                <div class="flex items-center gap-2.5 text-white font-medium text-sm">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Pragmatic Architecture</span>
                </div>
                <p class="text-xs text-zinc-400 leading-relaxed">
                  Engineered to work alongside existing enterprise investments, not mandate risky rip-and-replace deployments.
                </p>
              </div>
              <div class="rounded-xl border border-white/[0.08] bg-[#0c141e]/90 p-5 space-y-2 hover:border-brand/30 transition-colors">
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

        <!-- Right: Environment Frame + Convergence Schematic -->
        <div
          class="lg:col-span-5 space-y-6 reveal-base transition-editorial duration-700 delay-200"
          :class="{ 'is-revealed': isRevealed }"
        >
          <!-- Photographic Frame -->
          <div class="relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            <!-- Corner Crosshairs -->
            <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

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
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />

              <!-- Metadata Bar -->
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between font-ui text-xs text-zinc-300">
                <span class="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>Executive Briefing</span>
                </span>
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-brand text-xs">
                  Strategic Alignment
                </span>
              </div>

              <!-- Caption -->
              <div class="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-[#0e1622]/90 backdrop-blur-md p-3.5 space-y-1 font-ui">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-zinc-200 font-semibold">Operational Alignment</span>
                  <span class="text-zinc-400 text-xs">Strategy</span>
                </div>
                <p class="text-zinc-400 font-editorial italic text-xs leading-snug">
                  Aligning technology investments with operational reality and accountability.
                </p>
              </div>
            </div>
          </div>

          <!-- Architectural Convergence Schematic -->
          <div class="rounded-2xl border border-white/10 bg-[#0c131e]/90 backdrop-blur-xl p-6 sm:p-7 space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] font-ui">
            <!-- Header bar -->
            <div class="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
              <div class="flex items-center gap-2 text-zinc-200 font-medium">
                <Building2 class="h-4 w-4 text-brand" />
                <span>Enterprise Systems Model</span>
              </div>
              <span class="text-xs text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/20 font-medium">
                Unified
              </span>
            </div>

            <!-- Conceptual Flow Nodes -->
            <div class="space-y-3 text-xs">
              <!-- Source Silos -->
              <div class="rounded-xl border border-white/[0.06] bg-[#0f1826] p-3.5 space-y-1.5">
                <div class="flex items-center justify-between text-zinc-300 font-semibold text-xs">
                  <span class="flex items-center gap-2">
                    <Split class="h-3.5 w-3.5 text-zinc-400" />
                    Distributed Operational Tools
                  </span>
                  <span class="text-zinc-400 text-[11px]">Uncoordinated</span>
                </div>
                <p class="text-zinc-400 text-[11px] leading-relaxed">
                  ERP databases, disparate CRM systems, spreadsheet trackers, and legacy APIs functioning in isolation.
                </p>
              </div>

              <!-- Connecting Self-Drawing SVG Conduit 1 -->
              <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                <svg width="2" height="20" viewBox="0 0 2 20" fill="none" class="overflow-visible">
                  <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="20"
                    stroke="#10b981"
                    stroke-width="1.5"
                    stroke-dasharray="20"
                    :stroke-dashoffset="isRevealed ? '0' : '20'"
                    class="transition-all duration-700 delay-300 ease-out"
                  />
                </svg>
              </div>

              <!-- KavoraX Connected Fabric Node -->
              <div
                class="rounded-xl border border-brand/35 bg-brand/[0.06] p-3.5 space-y-1.5 relative overflow-hidden transition-all duration-700 delay-500"
                :class="{ 'shadow-[0_0_24px_-4px_rgba(16,185,129,0.25)]': isRevealed }"
              >
                <div class="flex items-center justify-between text-brand font-semibold text-xs">
                  <span class="flex items-center gap-2">
                    <Layers class="h-4 w-4 text-brand" />
                    KavoraX Connected Business Fabric
                  </span>
                  <span class="text-[11px] text-brand bg-brand/15 px-2 py-0.5 rounded border border-brand/30 font-medium">
                    Connected
                  </span>
                </div>
                <p class="text-zinc-200 text-[11px] leading-relaxed">
                  Real-time workflow execution, synchronized telemetry feeds, and resilient multi-system bridge protocols.
                </p>
              </div>

              <!-- Connecting Self-Drawing SVG Conduit 2 -->
              <div class="flex items-center justify-center my-0.5" aria-hidden="true">
                <svg width="2" height="20" viewBox="0 0 2 20" fill="none" class="overflow-visible">
                  <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="20"
                    stroke="#10b981"
                    stroke-width="1.5"
                    stroke-dasharray="20"
                    :stroke-dashoffset="isRevealed ? '0' : '20'"
                    class="transition-all duration-700 delay-700 ease-out"
                  />
                </svg>
              </div>

              <!-- Resulting Value -->
              <div class="rounded-xl border border-white/[0.06] bg-[#0f1826] p-3.5 space-y-1.5">
                <div class="flex items-center justify-between text-zinc-300 font-semibold text-xs">
                  <span class="flex items-center gap-2">
                    <GitCommit class="h-3.5 w-3.5 text-brand" />
                    Unified Business Operations
                  </span>
                  <span class="text-brand text-[11px] font-medium">Synchronized</span>
                </div>
                <p class="text-zinc-400 text-[11px] leading-relaxed">
                  Continuous visibility for leadership, frictionless handoffs for teams, and dependable audit readiness.
                </p>
              </div>
            </div>

            <!-- Ledger Meta Footer -->
            <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <span>KavoraX Global Private Limited</span>
              <span class="text-zinc-400">Enterprise Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
