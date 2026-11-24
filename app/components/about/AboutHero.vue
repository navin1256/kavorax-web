<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { ArrowRight, Building2, ShieldCheck } from 'lucide-vue-next'

const isHeroMounted = ref(false)

onMounted(() => {
  isHeroMounted.value = true
})
</script>

<template>
  <section class="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#080c10] border-b border-white/[0.08]">
    <!-- Ambient emerald backlight glow with subtle drift -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.06] blur-[160px] rounded-full pointer-events-none -z-10 animate-ambient-drift"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Eyebrow & Metadata Bar -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-12 font-ui text-xs text-zinc-400 reveal-base transition-editorial duration-700 delay-75"
        :class="{ 'is-revealed': isHeroMounted }"
      >
        <div class="inline-flex items-center gap-2.5">
          <ChapterLabel label="About KavoraX" />
        </div>
        <div class="flex items-center gap-6 text-xs text-zinc-400">
          <span class="text-zinc-300 font-medium">KavoraX Global Private Limited</span>
          <span class="text-zinc-600 hidden sm:inline">·</span>
          <span class="hidden sm:inline text-zinc-400">Connected Systems &amp; Technology</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <!-- Left Column: Editorial Typography & Purpose -->
        <div class="lg:col-span-7 space-y-7">
          <!-- Eyebrow Label -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-4 py-1.5 text-xs font-ui text-brand backdrop-blur-sm reveal-base transition-editorial duration-700 delay-150"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse-subtle" />
            <span>About Us</span>
          </div>

          <WordReveal
            text="Building Technology That Moves Business Forward."
            as="h1"
            class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance max-w-full break-words"
            :italic-words="['Moves', 'Business', 'Forward.']"
            :delay="200"
            :immediate="true"
          />

          <div
            class="space-y-4 reveal-base transition-editorial duration-700 delay-500"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <p class="font-ui text-base sm:text-lg text-zinc-200 max-w-2xl leading-relaxed font-normal">
              KavoraX builds connected business solutions that help organisations operate smarter,
              improve operational visibility, and scale with sustainable confidence.
            </p>

            <p class="font-ui text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-normal">
              We believe enterprise technology should bridge operational divides—linking fragmented
              processes, data, and distributed teams into a synchronized and resilient whole.
            </p>
          </div>

          <!-- Dual CTAs -->
          <div
            class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-ui reveal-base transition-editorial duration-700 delay-700"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <NuxtLink to="/products" class="w-full sm:w-auto">
              <Button
                size="lg"
                class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
              >
                <span>Explore Our Products</span>
                <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NuxtLink>

            <NuxtLink to="/contact" class="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
              >
                <span>Contact Our Team</span>
                <ArrowRight class="ml-2 h-4 w-4 text-brand" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Quick Navigation Strip -->
          <div
            class="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-xl font-ui reveal-base transition-editorial duration-700 delay-800"
            :class="{ 'is-revealed': isHeroMounted }"
          >
            <a href="#who-we-are" class="space-y-1 group block transition-all">
              <span class="text-xs text-brand font-medium flex items-center gap-1">
                <span>Who We Are</span>
                <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
              </span>
              <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Business at Core</div>
            </a>
            <a href="#our-approach" class="space-y-1 group block transition-all">
              <span class="text-xs text-brand font-medium flex items-center gap-1">
                <span>Our Approach</span>
                <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
              </span>
              <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Connected Systems</div>
            </a>
            <a href="#guiding-principles" class="space-y-1 group block transition-all">
              <span class="text-xs text-brand font-medium flex items-center gap-1">
                <span>Our Values</span>
                <ArrowRight class="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand" />
              </span>
              <div class="font-editorial text-lg text-white font-medium group-hover:text-brand transition-colors">Reliable Scale</div>
            </a>
          </div>
        </div>

        <!-- Right Column: Photography Frame -->
        <div
          class="lg:col-span-5 relative reveal-base transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isHeroMounted }"
        >
          <!-- Subtle Backdrop Glow -->
          <div
            class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/15 via-transparent to-brand/10 blur-2xl opacity-60 pointer-events-none animate-ambient-drift"
            aria-hidden="true"
          />

          <!-- Photography Frame -->
          <div
            class="relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
          >
            <!-- Corner Crosshairs -->
            <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
            <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

            <div class="relative h-96 sm:h-[460px] w-full overflow-hidden bg-zinc-950">
              <img
                src="/images/architectural-workspace.webp"
                alt="Modern enterprise architecture engineering workspace and design studio"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="800"
                height="460"
                class="h-full w-full object-cover img-editorial-zoom opacity-85 group-hover:opacity-100 transition-opacity animate-hero-drift"
              >
              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent"
              />

              <!-- Floating Metadata Ribbon -->
              <div class="absolute top-6 left-6 right-6 flex items-center justify-between font-ui text-xs text-zinc-300">
                <span class="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>Systems Engineering</span>
                </span>
                <span class="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-brand">
                  Architecture &amp; Design
                </span>
              </div>

              <!-- Caption Card -->
              <div class="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#0e1622]/90 backdrop-blur-md p-5 space-y-2 font-ui">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-brand font-medium flex items-center gap-1.5">
                    <Building2 class="h-3.5 w-3.5 text-brand" />
                    KavoraX Global Private Limited
                  </span>
                  <span class="text-zinc-400 text-xs">Registered Entity</span>
                </div>
                <p class="font-editorial text-base text-zinc-200 italic leading-snug">
                  "Engineering enterprise platforms that unify fragmented software, workflows, and operational intelligence."
                </p>
                <div class="pt-2 flex items-center justify-between border-t border-white/[0.06] text-xs text-zinc-400">
                  <span class="flex items-center gap-1 text-zinc-300">
                    <ShieldCheck class="h-3 w-3 text-brand" />
                    Auditable Systems
                  </span>
                  <span class="text-zinc-500">Reliable &amp; Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
