<script setup lang="ts">
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import {
  BarChart3,
  Network,
  ArrowRight,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Database,
  GitBranch
} from 'lucide-vue-next'
</script>

<template>
  <section class="py-24 md:py-36 bg-[#0b0f14] bg-technical-grid border-t border-white/[0.08] relative overflow-hidden">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Chapter Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
        <div class="max-w-3xl space-y-4">
          <ChapterLabel index="03" label="PRODUCT SHOWCASE" sublabel="UNIFIED PLATFORM ENGINES" />
          <h2 class="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Institutional technology with bespoke design.
          </h2>
          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
            Three core enterprise capabilities engineered to operate as one unified foundation.
          </p>
        </div>

        <NuxtLink to="/products" class="shrink-0 font-ui">
          <span class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-md border border-white/10 bg-[#0f1620] text-zinc-200 hover:text-white hover:border-brand/40 transition-all shadow-sm">
            <span>Explore All Capabilities</span>
            <ArrowRight class="h-3.5 w-3.5 text-brand" />
          </span>
        </NuxtLink>
      </div>

      <!-- SHOWCASE 1: Operations Platform (Wide Asymmetrical Editorial Canvas) -->
      <div class="mt-16 rounded-2xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 md:p-12 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-500 corner-crosshair">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center font-ui">
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-mono text-brand">
              <Workflow class="h-3.5 w-3.5" />
              <span>CAPABILITY 01 · OPERATIONS PLATFORM</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Continuous workflow orchestration across distributed teams.
            </h3>

            <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
              Eliminate operational friction with deterministic process routing, automated escalation triggers, and real-time handoff visibility.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Deterministic task pipeline</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Policy-driven SLA triggers</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Cross-functional state synchronization</span>
              </div>
              <div class="flex items-center gap-2">
                <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                <span>Auditable activity tracing</span>
              </div>
            </div>

            <div class="pt-4 flex items-center gap-4">
              <NuxtLink
                to="/products#operations-platform"
                class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
              >
                <span>Deep Dive into Operations</span>
                <ArrowRight class="h-3.5 w-3.5" />
              </NuxtLink>
            </div>
          </div>

          <!-- Bespoke Visual Treatment 1: Clean Workflow State Diagram -->
          <div class="lg:col-span-6">
            <div class="rounded-xl border border-white/10 bg-[#070b10] p-5 sm:p-6 space-y-4 font-mono text-xs shadow-inner">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/[0.08] text-zinc-300 gap-2">
                <span class="font-semibold">WORKFLOW ORCHESTRATION PIPELINE</span>
                <span class="text-brand">COORDINATED</span>
              </div>

              <!-- Workflow Stage Nodes -->
              <div class="space-y-3">
                <div class="p-3.5 sm:p-4 rounded-lg border border-brand/30 bg-brand/[0.05] flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full bg-brand shrink-0" />
                    <div>
                      <div class="text-white font-semibold font-ui text-sm">01. Ingestion &amp; Policy Verification</div>
                      <div class="text-xs text-zinc-400 font-sans mt-0.5">Automated validation against organizational compliance rules</div>
                    </div>
                  </div>
                  <span class="text-brand text-xs font-semibold shrink-0 ml-2">VERIFIED</span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-lg border border-white/[0.1] bg-[#0d141e] flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <div>
                      <div class="text-white font-semibold font-ui text-sm">02. Cross-Team Dispatch</div>
                      <div class="text-xs text-zinc-400 font-sans mt-0.5">Automated routing across operational and administrative units</div>
                    </div>
                  </div>
                  <span class="text-emerald-400 text-xs font-semibold shrink-0 ml-2">SYNCHRONIZED</span>
                </div>

                <div class="p-3.5 sm:p-4 rounded-lg border border-white/[0.06] bg-[#090e15] flex items-center justify-between text-zinc-400">
                  <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full bg-brand/40 shrink-0" />
                    <div>
                      <div class="text-zinc-200 font-semibold font-ui text-sm">03. Immutable Audit Record</div>
                      <div class="text-xs text-zinc-400 font-sans mt-0.5">Traceable event history captured for executive review</div>
                    </div>
                  </div>
                  <span class="text-zinc-400 text-xs font-semibold shrink-0 ml-2">LOGGED</span>
                </div>
              </div>

              <div class="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 gap-2">
                <span>EXECUTION GUARANTEE: HIGH AVAILABILITY</span>
                <span class="text-brand font-medium">ZERO DATA DRIFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SHOWCASES 2 & 3: 2-Column Split (Analytics vs Integration) -->
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 font-ui items-stretch">
        <!-- Showcase 2: Analytics & Intelligence -->
        <div class="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 md:p-10 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-500 flex flex-col justify-between corner-crosshair h-full">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-mono text-brand">
              <BarChart3 class="h-3.5 w-3.5" />
              <span>CAPABILITY 02 · ANALYTICS &amp; INTELLIGENCE</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl font-medium text-white leading-tight">
              Real-time operational telemetry and predictive foresight.
            </h3>

            <p class="font-editorial text-lg text-zinc-300 leading-relaxed font-normal">
              Transform continuous business signals into immediate visibility. Identify anomalies and forecast operational capacity before bottlenecks emerge.
            </p>

            <!-- Bespoke Visual Treatment 2: Clean Telemetry Distribution -->
            <div class="rounded-xl border border-white/[0.08] bg-[#070b10] p-5 sm:p-6 font-mono text-xs space-y-4">
              <div class="flex items-center justify-between text-zinc-300 pb-2 border-b border-white/[0.06]">
                <span class="font-semibold">OPERATIONAL THROUGHPUT OVERVIEW</span>
                <span class="text-brand font-medium">REAL-TIME TELEMETRY</span>
              </div>

              <!-- Bar chart visualization -->
              <div class="h-20 flex items-end gap-2 pt-2">
                <div class="w-full bg-white/[0.06] rounded-t hover:bg-brand/40 transition-colors h-[40%]" />
                <div class="w-full bg-white/[0.06] rounded-t hover:bg-brand/40 transition-colors h-[55%]" />
                <div class="w-full bg-white/[0.06] rounded-t hover:bg-brand/40 transition-colors h-[70%]" />
                <div class="w-full bg-white/[0.06] rounded-t hover:bg-brand/40 transition-colors h-[65%]" />
                <div class="w-full bg-brand/40 rounded-t hover:bg-brand/60 transition-colors h-[80%]" />
                <div class="w-full bg-brand/60 rounded-t hover:bg-brand/80 transition-colors h-[88%]" />
                <div class="w-full bg-brand rounded-t shadow-[0_0_12px_rgba(16,185,129,0.5)] h-[94%]" />
                <div class="w-full bg-brand/70 rounded-t hover:bg-brand/80 transition-colors h-[85%]" />
                <div class="w-full bg-brand/50 rounded-t hover:bg-brand/60 transition-colors h-[72%]" />
                <div class="w-full bg-white/[0.06] rounded-t hover:bg-brand/40 transition-colors h-[58%]" />
              </div>

              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span>SYSTEM HEALTH: OPTIMAL</span>
                <span class="text-white">LATENCY: SUB-SECOND</span>
              </div>
            </div>
          </div>

          <div class="pt-8 border-t border-white/[0.06] mt-6">
            <NuxtLink
              to="/products#analytics-intelligence"
              class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
            >
              <span>Explore Analytics Capabilities</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </NuxtLink>
          </div>
        </div>

        <!-- Showcase 3: Integration Architecture -->
        <div class="lg:col-span-6 rounded-2xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 md:p-10 backdrop-blur-xl relative group hover:border-brand/40 transition-all duration-500 flex flex-col justify-between corner-crosshair h-full">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-md bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-mono text-brand">
              <Network class="h-3.5 w-3.5" />
              <span>CAPABILITY 03 · INTEGRATION ARCHITECTURE</span>
            </div>

            <h3 class="font-editorial text-3xl sm:text-4xl font-medium text-white leading-tight">
              Interoperable protocol fabric connecting any system.
            </h3>

            <p class="font-editorial text-lg text-zinc-300 leading-relaxed font-normal">
              Standardize disparate protocols, legacy ERPs, databases, and modern cloud endpoints into a single, high-throughput integration pipeline.
            </p>

            <!-- Bespoke Visual Treatment 3: Clean Multi-System Bridge Map -->
            <div class="rounded-xl border border-white/[0.08] bg-[#070b10] p-5 sm:p-6 font-mono text-xs space-y-3.5">
              <div class="flex items-center justify-between text-zinc-300 pb-2 border-b border-white/[0.06]">
                <span class="font-semibold">INTEROPERABILITY PROTOCOL FABRIC</span>
                <span class="text-brand font-medium">SECURE TLS</span>
              </div>

              <!-- Integration Map Nodes -->
              <div class="space-y-2.5 font-ui">
                <div class="p-3 rounded-lg bg-[#0e1622] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200">
                  <span class="flex items-center gap-2">
                    <Database class="h-3.5 w-3.5 text-zinc-400" />
                    Core Databases &amp; Enterprise ERP
                  </span>
                  <span class="font-mono text-brand text-[11px]">CONNECTED</span>
                </div>

                <div class="p-3 rounded-lg bg-brand/[0.08] border border-brand/30 flex items-center justify-between text-xs text-white font-medium">
                  <span class="flex items-center gap-2">
                    <GitBranch class="h-3.5 w-3.5 text-brand" />
                    KavoraX Unified Interoperability Bus
                  </span>
                  <span class="font-mono text-brand text-[11px]">ACTIVE SYNCHRONY</span>
                </div>

                <div class="p-3 rounded-lg bg-[#0e1622] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-200">
                  <span class="flex items-center gap-2">
                    <ShieldCheck class="h-3.5 w-3.5 text-zinc-400" />
                    Cloud Applications &amp; Partner APIs
                  </span>
                  <span class="font-mono text-brand text-[11px]">CONNECTED</span>
                </div>
              </div>

              <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>STANDARDS: REST · GRAPHQL · GRPC</span>
                <span class="text-zinc-300">ZERO RIP-AND-REPLACE</span>
              </div>
            </div>
          </div>

          <div class="pt-8 border-t border-white/[0.06] mt-6">
            <NuxtLink
              to="/products#integration-hub"
              class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
            >
              <span>Explore Integration Architecture</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
