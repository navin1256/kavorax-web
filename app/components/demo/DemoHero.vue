<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '~/components/ui/button'
import WordReveal from '~/components/visual/WordReveal.vue'
import { ArrowDown, Layers, Cpu, BarChart3, Network, ShieldCheck } from 'lucide-vue-next'

const isHeroMounted = ref(false)

onMounted(() => {
  isHeroMounted.value = true
})
</script>

<template>
  <section class="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-cinematic-radial">
    <!-- Ambient emerald backlight glow -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[360px] bg-brand/5 blur-[130px] rounded-full pointer-events-none -z-10"
    />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Left Column: Editorial Headline & Copy -->
        <div class="lg:col-span-6 xl:col-span-7 space-y-6">
          <!-- Subtle Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui tracking-widest uppercase text-brand backdrop-blur-sm reveal-base transition-editorial duration-700 delay-75"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <span class="flex h-2 w-2 rounded-full bg-brand" />
            <span>BOOK A DEMO</span>
          </div>

          <!-- Hero Headline with WordReveal -->
          <WordReveal
            text="See What Better-Connected Business Looks Like."
            as="h1"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-white leading-[1.08] text-balance max-w-full break-words"
            :italic-words="['Business', 'Looks', 'Like.']"
            :delay="240"
            :immediate="true"
          />

          <!-- Hero Supporting Text -->
          <p
            class="font-editorial text-xl sm:text-2xl text-zinc-300 max-w-xl leading-relaxed reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            Tell us a little about your business and what you want to achieve. We’ll use that context
            to help guide the conversation.
          </p>

          <!-- Dual CTAs -->
          <div
            class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 font-ui reveal-base transition-editorial duration-700 delay-700"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <a href="#demo-form" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-all duration-200"
              >
                Request a Demo
                <ArrowDown class="ml-2 h-4 w-4" />
              </Button>
            </a>

            <NuxtLink to="/products" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/10 bg-[#111a26]/60 hover:bg-[#111a26] text-zinc-200 hover:text-white px-7 py-6 text-base transition-colors"
              >
                <Layers class="mr-2 h-4 w-4 text-brand" />
                View Solutions
              </Button>
            </NuxtLink>
          </div>

          <!-- Consultation Principles Strip -->
          <div
            class="pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-6 max-w-lg font-ui reveal-base transition-editorial duration-700 delay-800"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <div>
              <div class="font-editorial text-2xl font-semibold text-white">Contextual</div>
              <div class="text-xs text-zinc-400 mt-0.5">Guided Discussion</div>
            </div>
            <div>
              <div class="font-editorial text-2xl font-semibold text-white">Confidential</div>
              <div class="text-xs text-zinc-400 mt-0.5">Non-Disclosure</div>
            </div>
            <div>
              <div class="font-editorial text-2xl font-semibold text-white">Tailored</div>
              <div class="text-xs text-zinc-400 mt-0.5">Solution Scope</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Demonstration Architectural Topology Panel -->
        <div
          class="lg:col-span-6 xl:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <!-- Subtle Glow Backplate -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-60 pointer-events-none"
          />

          <!-- Architecture Composition Container -->
          <div
            class="relative rounded-2xl border border-white/[0.08] bg-[#0d141d]/90 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl group"
          >
            <!-- Executive Briefing Visual Header -->
            <div class="relative h-44 w-full overflow-hidden bg-zinc-900">
              <img
                src="/images/executive-briefing.jpg"
                alt="Executive briefing room for architectural demonstration walkthrough"
                loading="lazy"
                class="h-full w-full object-cover img-editorial-zoom opacity-70 group-hover:opacity-90 transition-opacity"
              >
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0d141d] via-[#0d141d]/60 to-transparent"
              />
              <div class="absolute top-3 left-4 right-4 flex items-center justify-between">
                <span
                  class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10"
                >
                  SYSTEMS ARCHITECTURE SESSION
                </span>
                <span
                  class="font-ui text-[11px] text-brand bg-brand/20 px-2 py-0.5 rounded border border-brand/30 flex items-center gap-1.5"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
                  Live Walkthrough
                </span>
              </div>
            </div>

            <!-- Panel Content -->
            <div class="p-6 sm:p-7 space-y-3 font-ui">
              <!-- Pillar 1 -->
              <div class="rounded-xl border border-white/[0.07] bg-[#111a26]/80 p-3.5">
                <div class="flex items-start gap-3">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-brand shrink-0"
                  >
                    <Cpu class="h-4 w-4" />
                  </div>
                  <div>
                    <h4 class="font-editorial text-base font-semibold text-white leading-snug">
                      Operations Platform Walkthrough
                    </h4>
                    <p class="text-xs text-zinc-400 mt-0.5">
                      Workflow execution, automated handoffs & policy monitoring
                    </p>
                  </div>
                </div>
              </div>

              <!-- Connector Line -->
              <div class="flex items-center justify-center -my-1.5">
                <div class="h-3 w-px bg-brand/30" />
              </div>

              <!-- Pillar 2 -->
              <div class="rounded-xl border border-brand/25 bg-brand/[0.04] p-4">
                <div class="flex items-start gap-3">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/20 border border-brand/30 text-brand shrink-0"
                  >
                    <BarChart3 class="h-4 w-4" />
                  </div>
                  <div>
                    <h4 class="font-editorial text-lg font-semibold text-brand leading-snug">
                      Analytics & Telemetry Visibility
                    </h4>
                    <p class="text-xs text-zinc-300 mt-0.5">
                      Operational telemetry aggregation & real-time business activity
                    </p>
                  </div>
                </div>
              </div>

              <!-- Connector Line -->
              <div class="flex items-center justify-center -my-1.5">
                <div class="h-3 w-px bg-brand/30" />
              </div>

              <!-- Pillar 3 -->
              <div class="rounded-xl border border-white/[0.07] bg-[#111a26]/80 p-4">
                <div class="flex items-start gap-3">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 shrink-0"
                  >
                    <Network class="h-4 w-4 text-brand" />
                  </div>
                  <div>
                    <h4 class="font-editorial text-lg font-semibold text-white leading-snug">
                      Integration Hub Bridging
                    </h4>
                    <p class="text-xs text-zinc-400 mt-0.5">
                      Multi-system data exchange & legacy-to-cloud compatibility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Footnote -->
            <div
              class="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between font-ui text-xs text-zinc-400"
            >
              <span class="flex items-center gap-2 text-zinc-300">
                <ShieldCheck class="h-4 w-4 text-brand" />
                Structured Around Your Real Priorities
              </span>
              <span class="font-mono text-[11px] text-zinc-500">KavoraX Platform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
