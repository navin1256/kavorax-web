<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, Mail, MessageCircle } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    heading?: string
    text?: string
    /** Product slug passed on to the demo form, e.g. "pos-and-billing". */
    module?: string
  }>(),
  {
    heading: 'Want to see it on your own menu?',
    text: 'Tell us what you sell and how many counters you run. We will show you the parts that matter to you, and skip the rest.',
    module: ''
  }
)

const config = useRuntimeConfig()
const whatsappUrl = computed(() => {
  const number = config.public.whatsappNumber || '919629579358'
  const msg = encodeURIComponent('Hi KavoraX, I would like to know more about your POS.')
  return `https://wa.me/${number}?text=${msg}`
})
const demoHref = computed(() => (props.module ? `/demo?module=${props.module}` : '/demo'))
</script>

<template>
  <section class="border-t border-white/[0.08] py-20 md:py-28">
    <div class="kx-wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-6">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-[2.75rem]">
          {{ heading }}
        </h2>
        <p class="mt-5 max-w-lg text-lg leading-relaxed text-[#A3A3A3]">
          {{ text }}
        </p>
      </div>

      <ul class="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-5 lg:col-start-8">
        <li>
          <NuxtLink :to="demoHref" class="group flex items-center justify-between gap-4 py-5">
            <span>
              <span class="block font-semibold text-white">Book a demo</span>
              <span class="block text-sm text-[#A3A3A3]">A video call or a visit, whichever suits you.</span>
            </span>
            <ArrowRight class="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
          </NuxtLink>
        </li>
        <li>
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between gap-4 py-5">
            <span>
              <span class="block font-semibold text-white">Message us on WhatsApp</span>
              <span class="block text-sm text-[#A3A3A3]">Quick questions, pricing, anything.</span>
            </span>
            <MessageCircle class="h-5 w-5 shrink-0 text-brand" />
          </a>
        </li>
        <li>
          <a href="mailto:contact@kavorax.com" class="group flex items-center justify-between gap-4 py-5">
            <span>
              <span class="block font-semibold text-white">contact@kavorax.com</span>
              <span class="block text-sm text-[#A3A3A3]">For longer questions or documents.</span>
            </span>
            <Mail class="h-5 w-5 shrink-0 text-brand" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
