<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/ui/accordion'
import ChapterLabel from '~/components/visual/ChapterLabel.vue'
import WordReveal from '~/components/visual/WordReveal.vue'
import { ArrowRight } from 'lucide-vue-next'

const faqRef = ref<HTMLElement | null>(null)
const { isRevealed } = useScrollReveal(faqRef, { threshold: 0.1 })

const faqs = [
  {
    id: 'faq-1',
    question: 'How can I discuss pricing with KavoraX?',
    answer:
      'Prospective clients can connect directly with our advisory team through our Contact page or by requesting an architecture briefing. We evaluate your operational priorities, system integration scope, and scale to outline an engagement approach suited to your organisation.'
  },
  {
    id: 'faq-2',
    question: 'Which solution may fit my business?',
    answer:
      'Our capabilities are organized into three primary pillars: Operations Platform for workflow coordination, Analytics & Insights for centralized operational telemetry, and Integration Hub for cross-system interoperability. You can review our Products page or schedule an introductory dialogue to identify the right combination for your needs.'
  },
  {
    id: 'faq-3',
    question: 'Can I discuss requirements for multiple business systems?',
    answer:
      'Yes. Many enterprises operate with fragmented software stacks, legacy backbones, and third-party partner portals. During our consultation, we explore how our Integration Hub and Operations Platform can bridge disparate environments without requiring costly system overhauls.'
  },
  {
    id: 'faq-4',
    question: 'How do I arrange a product discussion?',
    answer:
      'You can initiate a product conversation by visiting our Contact page or submitting a technical briefing request via our Book a Demo page. The KavoraX team will coordinate with your team to organize an informative, architectural walkthrough.'
  }
]
</script>

<template>
  <section
    ref="faqRef"
    class="py-24 md:py-36 bg-[#080c10] relative border-t border-white/[0.08]"
    :class="{ 'is-revealed': isRevealed }"
  >
    <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4 mb-14">
        <div class="flex justify-center reveal-base transition-editorial duration-700 delay-75" :class="{ 'is-revealed': isRevealed }">
          <ChapterLabel
            index="CHAPTER 05"
            label="FREQUENTLY ASKED QUESTIONS"
            sublabel="COMMERCIAL TRANSPARENCY"
          />
        </div>

        <WordReveal
          text="Frequently Asked Questions"
          as="h2"
          class="font-editorial text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight text-balance-editorial"
          :delay="120"
          :threshold="0.1"
        />

        <p
          class="font-ui text-lg sm:text-xl text-zinc-300 leading-relaxed reveal-paragraph transition-editorial duration-700 delay-300"
          :class="{ 'is-revealed': isRevealed }"
        >
          Common inquiries regarding KavoraX solution models, product evaluations, and consultation
          dialogues.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div
        class="rounded-2xl border border-white/[0.08] bg-[#0c141e]/90 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative reveal-card transition-editorial duration-700 delay-200"
        :class="{ 'is-revealed': isRevealed }"
      >
        <!-- Corner Crosshairs -->
        <div class="absolute top-3 left-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>
        <div class="absolute top-3 right-3 font-mono text-xs text-brand/50 select-none pointer-events-none" aria-hidden="true">+</div>

        <Accordion type="single" class="w-full font-ui" collapsible default-value="faq-1">
          <AccordionItem
            v-for="faq in faqs"
            :key="faq.id"
            :value="faq.id"
            class="border-b border-white/[0.08] last:border-b-0 py-2"
          >
            <AccordionTrigger class="hover:no-underline text-base sm:text-lg font-editorial font-medium text-white text-left">
              <span>{{ faq.question }}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="text-zinc-300 text-sm sm:text-base leading-relaxed pt-1 pb-4 font-sans">
                {{ faq.answer }}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <!-- Context Help Sub-strip -->
      <div
        class="mt-8 text-center font-ui text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-center gap-3 reveal-base transition-editorial duration-700 delay-400"
        :class="{ 'is-revealed': isRevealed }"
      >
        <span>Have a question not listed here?</span>
        <NuxtLink
          to="/contact"
          class="text-brand hover:text-white transition-colors inline-flex items-center gap-1 font-semibold font-mono"
        >
          <span>Speak directly with our team</span>
          <ArrowRight class="h-3.5 w-3.5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
