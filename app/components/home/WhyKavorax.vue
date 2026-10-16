<script setup lang="ts">
import { Check, ShieldCheck, Layers, Cpu, Server } from 'lucide-vue-next'

const propositions = [
  {
    title: 'Architectural Cohesion',
    description:
      'Eliminates disconnected point solutions by establishing an integrated, synchronized business technology backbone.'
  },
  {
    title: 'Enterprise-Grade Security',
    description:
      'Zero-trust authorization, strict role segregation, and end-to-end data encryption embedded across every service.'
  },
  {
    title: 'Extensible Integration Fabric',
    description:
      'Engineered to interface seamlessly with existing enterprise systems, databases, and third-party cloud infrastructure.'
  },
  {
    title: 'Sustainable Scalability',
    description:
      'Modular architectures designed for high operational durability without incurring compounding technical debt.'
  }
]
</script>

<template>
  <section class="py-24 md:py-32 bg-[#080c10] border-t border-white/[0.06] relative">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left Column: Value Propositions -->
        <div class="lg:col-span-6 space-y-6">
          <div
            class="inline-flex items-center gap-2 text-xs font-ui font-semibold uppercase tracking-widest text-brand"
          >
            The KavoraX Advantage
          </div>

          <h2
            class="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.14]"
          >
            Engineered for durability, clarity, and
            <span class="italic font-light text-brand">institutional trust</span>.
          </h2>

          <p class="font-editorial text-lg sm:text-xl text-zinc-300 leading-relaxed">
            Modern enterprises face mounting system fragmentation. KavoraX replaces disconnected
            software stacks with unified business solutions designed for operational longevity.
          </p>

          <div class="pt-4 space-y-4 font-ui">
            <div
              v-for="item in propositions"
              :key="item.title"
              class="flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] bg-[#0c131d]/40 hover:border-white/[0.1] hover:bg-[#0c131d]/70 transition-all duration-200"
            >
              <div
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/10 border border-brand/25 text-brand mt-0.5"
              >
                <Check class="h-4 w-4" />
              </div>
              <div>
                <h3 class="font-editorial text-xl font-semibold text-white">
                  {{ item.title }}
                </h3>
                <p class="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Editorial System Architecture Matrix -->
        <div class="lg:col-span-6 relative">
          <!-- Subtle Glow Backplate -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/10 via-transparent to-brand/5 blur-2xl opacity-50 pointer-events-none"
          />

          <div
            class="relative rounded-2xl border border-white/[0.08] bg-[#0d141e]/90 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <!-- Diagram Header -->
            <div class="pb-5 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <h4 class="font-editorial text-xl font-semibold text-white">
                  Connected Architecture Matrix
                </h4>
                <p class="font-ui text-xs text-zinc-400 mt-0.5">End-to-End Enterprise Flow</p>
              </div>
              <span
                class="font-ui text-xs text-brand font-medium border border-brand/20 bg-brand/10 px-2.5 py-1 rounded"
              >
                Verified Model
              </span>
            </div>

            <!-- Layered Architecture Representation -->
            <div class="mt-8 space-y-4 font-ui">
              <!-- Tier 1 -->
              <div
                class="rounded-xl border border-white/[0.08] bg-[#111a26]/90 p-4 flex items-center justify-between hover:border-brand/30 transition-colors"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-brand shrink-0"
                  >
                    <Server class="h-4 w-4" />
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-white">
                      Client & Customer Engagement Layer
                    </div>
                    <div class="text-[11px] text-zinc-400">
                      High-concurrency web interfaces, portals, and service APIs
                    </div>
                  </div>
                </div>
                <span class="text-[10px] uppercase font-mono text-zinc-500">Tier 1</span>
              </div>

              <!-- Connecting Line Indicator -->
              <div class="flex justify-center -my-1">
                <div class="w-px h-4 bg-gradient-to-b from-brand/40 to-brand/10" />
              </div>

              <!-- Tier 2 (Highlighted Core) -->
              <div
                class="rounded-xl border border-brand/30 bg-brand/[0.05] p-4 flex items-center justify-between"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/20 border border-brand/30 text-brand shrink-0"
                  >
                    <Cpu class="h-4 w-4" />
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-brand">Operations & Automation Core</div>
                    <div class="text-[11px] text-zinc-300">
                      Intelligent event dispatch, workflow routing & business logic
                    </div>
                  </div>
                </div>
                <span class="text-[10px] uppercase font-mono text-brand font-semibold">Tier 2</span>
              </div>

              <!-- Connecting Line Indicator -->
              <div class="flex justify-center -my-1">
                <div class="w-px h-4 bg-gradient-to-b from-brand/40 to-brand/10" />
              </div>

              <!-- Tier 3 -->
              <div
                class="rounded-xl border border-white/[0.08] bg-[#111a26]/90 p-4 flex items-center justify-between hover:border-brand/30 transition-colors"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 shrink-0"
                  >
                    <Layers class="h-4 w-4 text-brand" />
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-white">
                      Unified Telemetry & Data Infrastructure
                    </div>
                    <div class="text-[11px] text-zinc-400">
                      Decoupled distributed data storage & reporting pipelines
                    </div>
                  </div>
                </div>
                <span class="text-[10px] uppercase font-mono text-zinc-500">Tier 3</span>
              </div>
            </div>

            <!-- Footer Summary -->
            <div
              class="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-ui"
            >
              <span class="flex items-center gap-2">
                <ShieldCheck class="h-4 w-4 text-brand" />
                Auditable & Resilient
              </span>
              <span class="font-mono text-zinc-500">KavoraX Platform Standard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
