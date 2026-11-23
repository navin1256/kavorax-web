<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import OutletsOverview from '~/components/product-ui/OutletsOverview.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import TalkToUs from '~/components/site/TalkToUs.vue'

useHead({
  title: 'Solutions | Fix slow billing, lost KOTs and wrong stock | KavoraX',
  meta: [
    {
      name: 'description',
      content:
        'Common problems in restaurants and shops, and how KavoraX fixes them: slow billing, lost kitchen tickets, wrong stock counts, day-end cash mismatches and branches that report differently.'
    }
  ]
})

const problems = [
  {
    problem: 'The queue backs up at the counter at lunch.',
    fix: 'Favourite items on the first screen, barcode billing, and QR ordering so some guests skip the queue.',
    product: { label: 'POS & Billing', href: '/pos-and-billing' }
  },
  {
    problem: 'Paper KOTs get lost or misread in the kitchen.',
    fix: 'Orders go to a kitchen screen by station. Late tickets turn red. Ready is one tap.',
    product: { label: 'Kitchen Display', href: '/kitchen-display' }
  },
  {
    problem: 'The day-end cash never matches the bills.',
    fix: 'Every payment is recorded by type, UPI, card and cash separately, so the count shows exactly where the gap is.',
    product: { label: 'POS & Billing', href: '/pos-and-billing' }
  },
  {
    problem: 'The system says it’s in stock. The shelf says it isn’t.',
    fix: 'Stock goes down with every bill. Low items go on a reorder list, and purchase orders update stock when goods arrive.',
    product: { label: 'Inventory & Stock', href: '/inventory-and-stock' }
  },
  {
    problem: 'You don’t know who your regulars are.',
    fix: 'Each bill can be linked to a phone number. See visit history, give points, and send WhatsApp offers.',
    product: { label: 'CRM & Loyalty', href: '/crm' }
  },
  {
    problem: 'You call the shop every evening to ask how the day went.',
    fix: 'Sales by item, hour and payment type on your phone, for one outlet or all of them.',
    product: { label: 'Business Analytics', href: '/business-analytics' }
  },
  {
    problem: 'Each branch has its own prices and its own spreadsheet.',
    fix: 'One menu and price list, pushed to every branch. Reports you can compare side by side.',
    product: { label: 'Multi-Location', href: '/multi-location' }
  },
  {
    problem: 'Online orders and shop stock don’t agree.',
    fix: 'Your online store reads the same stock as the counter, so what sells in one place disappears from the other.',
    product: { label: 'E-commerce', href: '/e-commerce' }
  }
]

const switchSteps = [
  { title: 'A call', text: 'You tell us how the shop runs now. We show you the parts that matter, on a video call or in person.' },
  { title: 'Your items and taxes', text: 'Your menu or product list, prices and GST rates go in. Send a spreadsheet or a photo of the menu.' },
  { title: 'One counter first', text: 'Try it at one counter alongside your old system until you trust it.' },
  { title: 'Everyone else', text: 'Staff learn on the job. The other counters, the kitchen screen and the rest come after.' }
]
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="pt-14 pb-16 md:pt-20 md:pb-20">
      <div class="kx-wrap max-w-[1200px]">
        <h1 class="max-w-4xl font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl">
          Your billing, kitchen and stock should agree with each other. Usually they don’t.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-[#A3A3A3]">
          Here are the problems we hear about most from restaurant and shop owners, and what
          changes with KavoraX. Find yours.
        </p>
      </div>
    </section>

    <!-- Problem / fix table -->
    <section class="pb-20 md:pb-28">
      <div class="kx-wrap">
        <div class="hidden grid-cols-12 gap-8 border-b border-white/[0.14] pb-3 text-sm text-[#737373] md:grid">
          <span class="col-span-4">The problem</span>
          <span class="col-span-5">What changes</span>
          <span class="col-span-3 text-end">Where it lives</span>
        </div>
        <ul class="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          <li v-for="row in problems" :key="row.problem" class="grid gap-3 py-7 md:grid-cols-12 md:gap-8">
            <p class="font-editorial text-xl leading-snug text-white md:col-span-4 md:text-2xl">{{ row.problem }}</p>
            <p class="leading-relaxed text-[#A3A3A3] md:col-span-5">{{ row.fix }}</p>
            <NuxtLink
              :to="row.product.href"
              class="inline-flex items-center gap-2 font-semibold text-white hover:text-brand md:col-span-3 md:justify-end"
            >
              {{ row.product.label }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Chains -->
    <section class="border-t border-white/[0.08] bg-[#111111] py-20 md:py-28">
      <div class="kx-wrap grid items-center gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl">
            Opening a second outlet?
          </h2>
          <p class="mt-5 leading-relaxed text-[#A3A3A3]">
            This is usually when spreadsheets stop working. With KavoraX the new branch gets the
            same menu, prices and tax settings as the first. You see both on one screen, and
            staff only see the outlet they work in.
          </p>
          <NuxtLink to="/multi-location" class="kx-link mt-6 inline-block">How multi-outlet works</NuxtLink>
        </div>
        <figure class="lg:col-span-7 lg:col-start-6">
          <UiDeviceFrame title="All outlets" status="Online">
            <OutletsOverview embedded />
          </UiDeviceFrame>
          <figcaption class="mt-3 text-sm text-[#737373]">Sample screen with demo data.</figcaption>
        </figure>
      </div>
    </section>

    <!-- Switching -->
    <section class="kx-light py-20 md:py-28">
      <div class="kx-wrap">
        <div class="grid gap-6 lg:grid-cols-12">
          <h2 class="font-editorial text-3xl leading-tight md:text-5xl lg:col-span-6">
            Moving from your current system
          </h2>
          <p class="text-lg text-[#525252] lg:col-span-5 lg:col-start-8 lg:pt-3">
            Whether that is a billing machine, another POS or a notebook. You don’t have to
            switch everything on day one.
          </p>
        </div>
        <ol class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <li v-for="(step, i) in switchSteps" :key="step.title" class="border-t-2 border-[#0A0A0A] pt-5">
            <span class="text-sm text-[#525252]">Step {{ i + 1 }}</span>
            <h3 class="mt-1 text-xl font-semibold">{{ step.title }}</h3>
            <p class="mt-3 leading-relaxed text-[#525252]">{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <TalkToUs heading="Which problem is costing you the most?" text="Tell us that one first. We will start the demo there instead of walking through every screen." />
  </div>
</template>
