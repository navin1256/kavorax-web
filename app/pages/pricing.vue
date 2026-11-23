<script setup lang="ts">
import { computed, reactive } from 'vue'
import { Mail, MessageCircle, Minus, Plus } from 'lucide-vue-next'
import TalkToUs from '~/components/site/TalkToUs.vue'
import { productNavItems } from '~/utils/productNav'

useHead({
  title: 'Pricing | How KavoraX pricing works',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX pricing depends on your outlets, billing counters and the products you use. Build your setup and get a quote on WhatsApp or email.'
    }
  ]
})

const priceFactors = [
  { title: 'Outlets', text: 'Each branch is counted separately. A single cafe and a ten-outlet chain do not pay the same.' },
  { title: 'Billing counters', text: 'How many counters, tablets or captain devices take orders and print bills at the same time.' },
  { title: 'Products you switch on', text: 'Billing only, or billing plus the kitchen screen, stock, loyalty and the rest.' },
  { title: 'Hardware', text: 'Use what you already have where it works. If you need something new, we will tell you what to buy.' }
]

const businessTypes = ['Restaurant', 'Cafe or bakery', 'Cloud kitchen', 'Retail store', 'Salon', 'Other']

const quote = reactive({
  type: 'Restaurant',
  outlets: 1,
  counters: 1,
  products: ['pos-and-billing'] as string[]
})

const step = (key: 'outlets' | 'counters', delta: number) => {
  quote[key] = Math.min(99, Math.max(1, quote[key] + delta))
}

const chosenNames = computed(() =>
  productNavItems.filter((p) => quote.products.includes(p.slug)).map((p) => p.name)
)

const summary = computed(
  () =>
    `Business: ${quote.type}\n` +
    `Outlets: ${quote.outlets}\n` +
    `Billing counters per outlet: ${quote.counters}\n` +
    `Products: ${chosenNames.value.join(', ') || 'Not sure yet'}`
)

const config = useRuntimeConfig()
const whatsappUrl = computed(() => {
  const number = config.public.whatsappNumber || '919629579358'
  const text = `Hi KavoraX, please send me a price for this setup:\n\n${summary.value}`
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
})
const mailUrl = computed(
  () =>
    `mailto:contact@kavorax.com?subject=${encodeURIComponent('Price for my setup')}&body=${encodeURIComponent(
      `Hi KavoraX,\n\nPlease send me a price for this setup:\n\n${summary.value}\n`
    )}`
)

const questions = [
  {
    q: 'Can I start with billing and add things later?',
    a: 'Yes. Most businesses do. Add products whenever you are ready.'
  },
  {
    q: 'Can I get a price before a demo?',
    a: 'Yes. Send your setup using the form above and we will reply with a price. The demo is optional.'
  },
  {
    q: 'Selling in Oman?',
    a: 'We are starting in India, with Oman and the GCC next. Tell us where you are and we will tell you what is ready.'
  }
]
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="pt-14 pb-16 md:pt-20 md:pb-20">
      <div class="kx-wrap grid gap-10 lg:grid-cols-12">
        <h1 class="font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl lg:col-span-8">
          The price depends on what you run. Here is exactly what changes it.
        </h1>
        <p class="text-lg leading-relaxed text-[#A3A3A3] lg:col-span-4 lg:pt-4">
          No single number fits a one-counter cafe and a chain of supermarkets. Pick your setup
          below and we will send you a price.
        </p>
      </div>
    </section>

    <!-- What changes the price -->
    <section class="border-t border-white/[0.08] py-16 md:py-20">
      <div class="kx-wrap">
        <dl class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div v-for="(f, i) in priceFactors" :key="f.title">
            <dt class="flex items-baseline gap-3">
              <span class="font-editorial text-2xl text-brand tabular-nums">{{ i + 1 }}</span>
              <span class="text-lg font-semibold text-white">{{ f.title }}</span>
            </dt>
            <dd class="mt-3 leading-relaxed text-[#A3A3A3]">{{ f.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Quote builder -->
    <section id="quote" class="kx-light py-20 md:py-28">
      <div class="kx-wrap grid gap-14 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <h2 class="font-editorial text-3xl leading-tight md:text-5xl">Get a price for your setup</h2>
          <p class="mt-4 text-lg text-[#525252]">Takes a minute. Nothing is sent until you press a button.</p>

          <fieldset class="mt-10">
            <legend class="font-semibold">What kind of business?</legend>
            <div class="mt-3 flex flex-wrap gap-2">
              <label
                v-for="t in businessTypes"
                :key="t"
                class="cursor-pointer rounded-md border px-4 py-2 transition-colors"
                :class="quote.type === t ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white' : 'border-black/20 hover:border-black/50'"
              >
                <input v-model="quote.type" type="radio" name="business-type" :value="t" class="sr-only" />
                {{ t }}
              </label>
            </div>
          </fieldset>

          <div class="mt-10 grid gap-8 sm:grid-cols-2">
            <div v-for="field in ([{ key: 'outlets', label: 'Outlets' }, { key: 'counters', label: 'Billing counters per outlet' }] as const)" :key="field.key">
              <p :id="`${field.key}-label`" class="font-semibold">{{ field.label }}</p>
              <div class="mt-3 inline-flex items-center rounded-md border border-black/20" role="group" :aria-labelledby="`${field.key}-label`">
                <button type="button" class="flex h-11 w-11 items-center justify-center hover:bg-black/5" :aria-label="`Fewer ${field.label.toLowerCase()}`" @click="step(field.key, -1)">
                  <Minus class="h-4 w-4" />
                </button>
                <output class="w-12 text-center text-lg font-semibold tabular-nums" aria-live="polite">{{ quote[field.key] }}</output>
                <button type="button" class="flex h-11 w-11 items-center justify-center hover:bg-black/5" :aria-label="`More ${field.label.toLowerCase()}`" @click="step(field.key, 1)">
                  <Plus class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <fieldset class="mt-10">
            <legend class="font-semibold">Which products? <span class="font-normal text-[#525252]">Leave blank if you are not sure.</span></legend>
            <div class="mt-3 grid gap-x-6 sm:grid-cols-2">
              <label
                v-for="p in productNavItems"
                :key="p.slug"
                class="flex cursor-pointer items-center gap-3 border-b border-black/10 py-3"
              >
                <input v-model="quote.products" type="checkbox" :value="p.slug" class="h-4 w-4 accent-[#0A0A0A]" />
                {{ p.name }}
              </label>
            </div>
          </fieldset>
        </div>

        <aside class="lg:col-span-4 lg:col-start-9">
          <div class="rounded-xl bg-[#0A0A0A] p-7 text-white lg:sticky lg:top-24">
            <h3 class="font-editorial text-2xl">Your setup</h3>
            <dl class="mt-6 space-y-4 text-[0.95rem]">
              <div class="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt class="text-[#A3A3A3]">Business</dt>
                <dd class="text-end">{{ quote.type }}</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt class="text-[#A3A3A3]">Outlets</dt>
                <dd class="tabular-nums">{{ quote.outlets }}</dd>
              </div>
              <div class="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt class="text-[#A3A3A3]">Counters per outlet</dt>
                <dd class="tabular-nums">{{ quote.counters }}</dd>
              </div>
              <div>
                <dt class="text-[#A3A3A3]">Products</dt>
                <dd class="mt-1">{{ chosenNames.join(', ') || 'Not sure yet' }}</dd>
              </div>
            </dl>
            <div class="mt-8 grid gap-3">
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="kx-btn w-full !bg-brand !text-[#0A0A0A] hover:!bg-[#4FF0AA]">
                <MessageCircle class="h-4 w-4" />
                Send on WhatsApp
              </a>
              <a :href="mailUrl" class="kx-btn-line w-full !border-white/20 !text-white">
                <Mail class="h-4 w-4" />
                Send by email
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Questions -->
    <section class="py-20 md:py-28">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl lg:col-span-4">Pricing questions</h2>
        <dl class="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          <div v-for="item in questions" :key="item.q">
            <dt class="text-lg font-semibold text-white">{{ item.q }}</dt>
            <dd class="mt-2 leading-relaxed text-[#A3A3A3]">{{ item.a }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <TalkToUs heading="Rather talk it through?" text="Some setups are easier to explain on a call. Book a demo and we will price it with you at the end." />
  </div>
</template>
