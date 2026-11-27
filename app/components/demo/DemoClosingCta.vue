<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { MessageSquare, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="py-16 md:py-24 bg-transparent bg-technical-grid border-t border-white/[0.08] relative overflow-hidden"
  >
    <!-- Subtle Ambient Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] ambient-glow-emerald rounded-full pointer-events-none -z-10"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-2xl border border-white/10 bg-[#0c141e] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl corner-crosshair"
      >
        <!-- Tag -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] px-3.5 py-1 text-xs font-ui text-emerald-400 font-medium tracking-normal mb-6"
        >
          <span>Direct Advisory</span>
        </div>

        <!-- Headline -->
        <h2
          class="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4"
        >
          Let’s Explore <span class="italic font-light text-brand">What’s Possible.</span>
        </h2>

        <!-- Supporting text -->
        <p
          class="font-ui text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Start a conversation about your business needs and goals.
        </p>

        <!-- Action CTA: Link to existing /contact route -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-colors duration-200"
            >
              <MessageSquare class="mr-2 h-4 w-4" />
              Contact Us
              <ArrowRight class="ml-2 h-4 w-4" />
            </Button>
          </NuxtLink>
        </div>

        <div class="mt-8 pt-6 border-t border-white/[0.06] text-xs font-ui text-zinc-500">
          KavoraX Global Private Limited · Enterprise Business Architecture
        </div>
      </div>
    </div>
  </section>
</template>
