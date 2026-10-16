<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { MessageSquare, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="py-24 md:py-32 bg-[#080c10] border-t border-white/[0.06] relative overflow-hidden"
  >
    <!-- Subtle Ambient Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10"
    />

    <div class="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div
        class="rounded-2xl border border-white/[0.08] bg-[#0c141e]/90 p-8 sm:p-14 text-center relative overflow-hidden backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        <!-- Tag -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.06] px-3.5 py-1 text-xs font-ui tracking-widest uppercase text-brand mb-6"
        >
          <span>DIRECT ADVISORY</span>
        </div>

        <!-- Headline (Exact requested copy) -->
        <h2
          class="font-editorial text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
        >
          Let’s Explore
          <span class="italic font-light text-brand">What’s Possible</span>.
        </h2>

        <!-- Supporting text (Exact requested copy) -->
        <p
          class="mt-6 font-editorial text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Start a conversation about your business needs and goals.
        </p>

        <!-- Action CTA: Link to existing /contact route -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-ui">
          <NuxtLink to="/contact" class="w-full sm:w-auto">
            <Button
              size="lg"
              class="w-full sm:w-auto bg-brand text-black font-semibold hover:bg-brand/90 px-8 py-6 text-base rounded-md shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.45)] transition-all duration-200"
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
