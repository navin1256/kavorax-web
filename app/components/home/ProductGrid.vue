<script setup lang="ts">
import {
  Cpu,
  BarChart3,
  Network,
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-vue-next'
</script>

<template>
  <section id="solutions" class="py-24 md:py-32 bg-[#0b0f14] relative">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl space-y-4">
        <div
          class="inline-flex items-center gap-2 text-xs font-ui font-semibold uppercase tracking-widest text-brand"
        >
          Enterprise Solutions
        </div>
        <h2 class="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-white">
          Connected solutions built for modern scale.
        </h2>
        <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
          KavoraX develops integrated technological systems that empower organizations to modernize
          workflows, serve clients effectively, and achieve sustainable growth.
        </p>
      </div>

      <!-- Asymmetrical Varied Layout -->
      <div class="mt-16 space-y-8 font-ui">
        <!-- 1. Featured Flagship Card: Operations Platform (Wide 2-column editorial card) -->
        <div
          class="rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 p-8 sm:p-10 backdrop-blur-sm relative group hover:border-brand/40 transition-all duration-300"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <!-- Left Info -->
            <div class="lg:col-span-7 space-y-5">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 text-brand"
                >
                  <Cpu class="h-5 w-5" />
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-brand">
                  Flagship Capability · Core Operations
                </span>
              </div>

              <h3 class="font-editorial text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Operations Platform
              </h3>

              <p class="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Engineered to streamline business workflows, eliminate operational friction, and
                coordinate mission-critical activities across distributed organizational teams.
              </p>

              <!-- Capability List -->
              <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>End-to-end workflow coordination</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Cross-functional handoff automation</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Policy-governed task execution</span>
                </div>
                <div class="flex items-center gap-2">
                  <CheckCircle2 class="h-4 w-4 text-brand shrink-0" />
                  <span>Continuous operational monitoring</span>
                </div>
              </div>

              <div class="pt-4 flex items-center gap-5">
                <NuxtLink
                  to="/products#operations-platform"
                  class="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:text-white transition-colors"
                >
                  <span>Explore Operations Platform</span>
                  <ArrowRight class="h-3.5 w-3.5" />
                </NuxtLink>
                <span class="text-zinc-600">·</span>
                <NuxtLink
                  to="/solutions"
                  class="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  View Solutions Overview
                </NuxtLink>
              </div>
            </div>

            <!-- Right Visual Mock / Telemetry Topology -->
            <div class="lg:col-span-5">
              <div
                class="rounded-xl border border-white/[0.06] bg-[#111a26]/80 p-5 space-y-3.5 text-xs font-mono"
              >
                <div class="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span class="text-zinc-400 flex items-center gap-2">
                    <span class="h-2 w-2 rounded-full bg-brand" />
                    Workflow Orchestration
                  </span>
                  <span class="text-[11px] text-brand">Running</span>
                </div>
                <div class="space-y-2">
                  <div class="flex justify-between text-zinc-300">
                    <span class="text-zinc-500">Service Task:</span>
                    <span>Order Handoff -> Fulfillment</span>
                  </div>
                  <div class="flex justify-between text-zinc-300">
                    <span class="text-zinc-500">Security Gate:</span>
                    <span>Policy Token Verified</span>
                  </div>
                  <div class="flex justify-between text-zinc-300">
                    <span class="text-zinc-500">Throughput:</span>
                    <span>Low-Latency Sync</span>
                  </div>
                </div>
                <div class="pt-2 border-t border-white/[0.04] text-[11px] text-zinc-500 flex justify-between">
                  <span>Engine: Core v4.2</span>
                  <span>Zero-Trust Enforced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Secondary Row: 3 Distinct Modular Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <!-- Card A: Analytics & Insights -->
          <div
            class="rounded-xl border border-white/[0.08] bg-[#0c131d]/80 p-7 flex flex-col justify-between hover:border-brand/30 transition-all duration-300 group"
          >
            <div>
              <div class="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                <span class="text-xs font-semibold text-brand uppercase tracking-wider">
                  Visibility
                </span>
                <div
                  class="h-9 w-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand/10 transition-colors"
                >
                  <BarChart3 class="h-4 w-4" />
                </div>
              </div>
              <h4 class="font-editorial text-2xl font-semibold text-white mt-5">
                Analytics & Insights
              </h4>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2.5">
                Transforms operational business data into actionable visibility, equipping leadership
                with direct clarity on system activity and operational trends.
              </p>
            </div>
            <div class="mt-8 pt-5 border-t border-white/[0.05]">
              <NuxtLink
                to="/products#analytics-insights"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors"
              >
                <span>View Analytics Details</span>
                <ArrowRight class="h-3.5 w-3.5 text-brand group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Card B: Integration Hub -->
          <div
            class="rounded-xl border border-white/[0.08] bg-[#0c131d]/80 p-7 flex flex-col justify-between hover:border-brand/30 transition-all duration-300 group"
          >
            <div>
              <div class="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                <span class="text-xs font-semibold text-brand uppercase tracking-wider">
                  Interoperability
                </span>
                <div
                  class="h-9 w-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-brand group-hover:bg-brand/10 transition-colors"
                >
                  <Network class="h-4 w-4" />
                </div>
              </div>
              <h4 class="font-editorial text-2xl font-semibold text-white mt-5">
                Integration Hub
              </h4>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2.5">
                Enables reliable interoperability across software systems, bridging legacy
                infrastructure and cloud applications into one synchronized environment.
              </p>
            </div>
            <div class="mt-8 pt-5 border-t border-white/[0.05]">
              <NuxtLink
                to="/products#integration-hub"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors"
              >
                <span>View Integration Details</span>
                <ArrowRight class="h-3.5 w-3.5 text-brand group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>
          </div>

          <!-- Card C: Direct Consultation Action Card -->
          <div
            class="rounded-xl border border-brand/25 bg-gradient-to-b from-[#102420]/50 to-[#0d141e]/70 p-7 flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)]"
          >
            <div>
              <div class="flex items-center justify-between pb-5 border-b border-brand/20">
                <span class="text-xs font-semibold text-brand uppercase tracking-wider">
                  Consultation
                </span>
                <div
                  class="h-9 w-9 rounded-lg bg-brand/20 border border-brand/30 flex items-center justify-center text-brand"
                >
                  <Calendar class="h-4 w-4" />
                </div>
              </div>
              <h4 class="font-editorial text-2xl font-semibold text-white mt-5">
                Need a Custom Architecture?
              </h4>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2.5">
                Our technology architects work directly with enterprise leadership to map solutions
                against your exact software environment and growth milestones.
              </p>
            </div>
            <div class="mt-8 pt-5 border-t border-brand/20">
              <NuxtLink
                to="/demo"
                class="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-brand text-black text-xs font-semibold hover:bg-brand/90 transition-colors shadow-sm"
              >
                Request Architecture Briefing
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
