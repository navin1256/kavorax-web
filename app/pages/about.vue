<script setup lang="ts">
import TalkToUs from '~/components/site/TalkToUs.vue'

useHead({
  title: 'About KavoraX | Software for restaurants and shops, from Bengaluru',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX Global Private Limited makes POS, kitchen, stock and customer software for restaurants, cafes and shops. Based in Bengaluru, starting in India, with Oman and the GCC next.'
    }
  ]
})

const config = useRuntimeConfig()
const whatsappNumber = config.public.whatsappNumber || '919629579358'
const whatsappDisplay = `+${whatsappNumber.slice(0, 2)} ${whatsappNumber.slice(2, 7)} ${whatsappNumber.slice(7)}`

const habits = [
  {
    title: 'Start small',
    text: 'We would rather you switch on billing, get comfortable, and add the rest later than buy everything on day one and use a tenth of it.'
  },
  {
    title: 'Offline is not an edge case',
    text: 'Internet in a busy market or a basement kitchen drops. The counter has to keep billing anyway, so that is how we build it.'
  },
  {
    title: 'Screens a new cashier understands',
    text: 'Staff change often. Buttons say what they do, the most-sold items come first, and nobody needs a manual to print a bill.'
  },
  {
    title: 'We say when we are not the right fit',
    text: 'If what you need is something we don’t do yet, we will tell you on the first call instead of after you have paid.'
  }
]
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="pt-14 pb-20 md:pt-20 md:pb-28">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h1 class="font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl lg:col-span-8">
          We make software for the people behind the counter.
        </h1>
        <div class="kx-prose text-lg leading-relaxed text-[#A3A3A3] lg:col-span-7">
          <p>
            KavoraX Global Private Limited is a software company in Bengaluru. We build point-of-sale,
            kitchen, stock and customer software for restaurants, cafes, retail stores and salons.
          </p>
          <p>
            We are starting in India, where GST, UPI and WhatsApp bills are part of every sale.
            Oman and the rest of the GCC come next.
          </p>
        </div>
      </div>
    </section>

    <!-- Why -->
    <section class="border-t border-white/[0.08] bg-[#111111] py-20 md:py-28">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl lg:col-span-4">
          Why we built it
        </h2>
        <div class="kx-prose max-w-2xl text-lg leading-relaxed text-[#D4D4D4] lg:col-span-7 lg:col-start-6">
          <p>
            A typical small restaurant runs on a billing machine at the counter, paper KOTs in the
            kitchen, a notebook for stock, and a WhatsApp group to hold it all together. Each part
            works. They just don’t talk to each other, so the owner spends the evening adding things up.
          </p>
          <p>
            Bigger chains solve this with expensive software that needs an IT team. Most shops
            don’t have one, and shouldn’t need one.
          </p>
          <p>
            KavoraX is our attempt at the middle: one system for the counter, the kitchen, the
            stockroom and the customer list, simple enough for a new cashier and sensible for a
            business with one outlet.
          </p>
        </div>
      </div>
    </section>

    <!-- How we work -->
    <section class="py-20 md:py-28">
      <div class="kx-wrap">
        <h2 class="max-w-xl font-editorial text-3xl leading-tight text-white md:text-4xl">
          A few things we hold ourselves to
        </h2>
        <ol class="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          <li v-for="(h, i) in habits" :key="h.title" class="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
            <span class="font-editorial text-2xl text-brand tabular-nums md:col-span-1">{{ i + 1 }}</span>
            <h3 class="text-xl font-semibold text-white md:col-span-4">{{ h.title }}</h3>
            <p class="leading-relaxed text-[#A3A3A3] md:col-span-7">{{ h.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Company details -->
    <section class="kx-light py-20 md:py-24">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight md:text-4xl lg:col-span-4">Company details</h2>
        <dl class="divide-y divide-black/10 border-y border-black/10 lg:col-span-7 lg:col-start-6">
          <div class="grid gap-1 py-4 sm:grid-cols-3">
            <dt class="text-[#525252]">Legal name</dt>
            <dd class="sm:col-span-2">KavoraX Global Private Limited</dd>
          </div>
          <div class="grid gap-1 py-4 sm:grid-cols-3">
            <dt class="text-[#525252]">Based in</dt>
            <dd class="sm:col-span-2">Bengaluru, Karnataka, India</dd>
          </div>
          <div class="grid gap-1 py-4 sm:grid-cols-3">
            <dt class="text-[#525252]">Markets</dt>
            <dd class="sm:col-span-2">India now. Oman and the GCC next.</dd>
          </div>
          <div class="grid gap-1 py-4 sm:grid-cols-3">
            <dt class="text-[#525252]">Email</dt>
            <dd class="sm:col-span-2"><a href="mailto:contact@kavorax.com" class="kx-link">contact@kavorax.com</a></dd>
          </div>
          <div class="grid gap-1 py-4 sm:grid-cols-3">
            <dt class="text-[#525252]">WhatsApp</dt>
            <dd class="sm:col-span-2">
              <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener noreferrer" class="kx-link">{{ whatsappDisplay }}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <TalkToUs heading="Come and say hello." text="Whether you want a demo, have a question about a feature, or just want to know if KavoraX fits your shop." />
  </div>
</template>
