<script setup lang="ts">
import { Button } from '~/components/ui/button'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import { ArrowRight, Mail, ShieldCheck, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <section
    class="py-28 md:py-36 bg-[#080c10] border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Cinematic Ambient Depth Lighting -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-brand/[0.07] blur-[160px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-cyan-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-3xl border border-white/[0.1] bg-[#0c141e]/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
      >
        <!-- Corner Crosshairs inspired by Active Theory -->
        <div class="absolute top-4 left-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-4 right-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 left-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute bottom-4 right-4 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

        <!-- Top Chapter Tag -->
        <div class="flex justify-center mb-6">
          <ChapterLabel
            index="NEXT STEPS"
            label="COMMERCIAL ADVISORY"
            sublabel="ENGAGEMENT ONBOARDING"
          />
        </div>

        <!-- Headline -->
        <h2
          class="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.03em] text-white leading-[1.05] text-balance-editorial max-w-3xl mx-auto"
        >
          Ready to Explore Connected Solutions
          <span class="italic font-light text-brand">for Your Organization</span>?
        </h2>

        <!-- Supporting Copy -->
        <p
          class="mt-6 font-editorial text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with our team to discuss your operational objectives, system dependencies, and
          deployment strategy.
        </p>

        <!-- Action CTAs -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_28px_-4px_rgba(16,185,129,0.38)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.5)] transition-all duration-200 group"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NuxtLink>

          <NuxtLink to="/demo" class="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              class="w-full sm:w-auto border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-white px-8 py-6 text-base rounded-md transition-colors"
            >
              <Mail class="mr-2 h-4 w-4 text-brand" />
              <span>Book an Architecture Demo</span>
            </Button>
          </NuxtLink>
        </div>

        <!-- Verification Indicators Footer -->
        <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <div class="flex items-center gap-2">
            <ShieldCheck class="h-3.5 w-3.5 text-brand" />
            <span>CONFIDENTIAL ARCHITECTURAL EVALUATION</span>
          </div>

          <div class="flex items-center gap-2">
            <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
            <span>NO SURPRISE OVERHEAD GUARANTEE</span>
          </div>

          <div class="text-zinc-500">
            KavoraX Global Private Limited
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
