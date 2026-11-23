<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-vue-next'
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import KdsBoard from '~/components/product-ui/KdsBoard.vue'
import QrOrderPhone from '~/components/product-ui/QrOrderPhone.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import TalkToUs from '~/components/site/TalkToUs.vue'
import { productNavGroups } from '~/utils/productNav'

useHead({
  title: 'KavoraX | POS, billing and kitchen software for restaurants and shops',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX is a POS and back-office system for restaurants, cafes and retail stores in India. GST bills, UPI payments, kitchen tickets and stock in one place, even when the internet drops.'
    }
  ]
})

const config = useRuntimeConfig()
const whatsappUrl = computed(
  () => `https://wa.me/${config.public.whatsappNumber || '919629579358'}`
)

// One order, followed through the system. Same sample cafe as the screens.
const orderSteps = [
  { where: 'Table 4', what: 'Scans the QR on the table and orders 2 masala dosa and 2 filter coffee.' },
  { where: 'Kitchen screen', what: 'The dosa goes to the hot station, the coffee to the beverage counter. Each with its own timer.' },
  { where: 'Counter', what: 'Cashier opens Table 4. The bill is already there, with CGST and SGST worked out.' },
  { where: 'Payment', what: 'Guest pays by UPI. The bill goes to their WhatsApp, or prints on the thermal printer.' },
  { where: 'Stock', what: 'Batter, milk and coffee powder are reduced from stock. Low items show up on the morning list.' },
  { where: 'Owner’s phone', what: 'Today’s sales, by item and by payment type, without calling the shop.' }
]

const indiaDetails = [
  { title: 'GST on every bill', text: 'CGST, SGST or IGST worked out per item, with your GSTIN and HSN codes printed.' },
  { title: 'UPI, card, cash, or all three', text: 'Split one bill across payment methods. Each one is recorded separately for the day-end count.' },
  { title: 'Keeps billing offline', text: 'Internet goes down at lunch? The counter keeps billing and syncs once the connection is back.' },
  { title: 'Bills on WhatsApp', text: 'Send the bill to the customer’s phone instead of printing, or do both.' },
  { title: 'Your printers and scanners', text: 'Most standard thermal printers and barcode scanners work without anything extra.' },
  { title: 'Kitchen tickets that don’t get lost', text: 'Orders appear on a kitchen screen by station. You can keep paper KOTs alongside if you like.' }
]

const businessTypes = [
  { label: 'Restaurants', href: '/industries#restaurants' },
  { label: 'Cafes & bakeries', href: '/industries#cafes' },
  { label: 'Cloud kitchens', href: '/industries#cloud-kitchens' },
  { label: 'Retail & convenience stores', href: '/industries#retail' },
  { label: 'Salons', href: '/industries#salons' },
  { label: 'Online sellers', href: '/industries#online' }
]

const questions = [
  {
    q: 'Do I need new hardware?',
    a: 'Usually not. Most standard receipt printers and barcode scanners work, and the kitchen screen runs on an Android tablet, an iPad or a regular monitor. Tell us what you have and we will check.'
  },
  {
    q: 'What if the internet stops?',
    a: 'Billing continues. Bills are saved on the device and sent up once you are online again. The kitchen screen keeps working over your local network.'
  },
  {
    q: 'Can I start with just billing?',
    a: 'Yes. Most shops start with POS & Billing and add the kitchen screen, stock or loyalty later.'
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the number of counters and outlets, and which parts you use. The pricing page explains what changes the price.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-14 pb-20 md:pt-20 md:pb-28">
      <div class="kx-wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-5">
          <p class="text-[0.95rem] text-[#A3A3A3]">For restaurants, cafes and shops in India</p>
          <h1 class="mt-4 font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl">
            The counter, the kitchen and the stockroom, on one system.
          </h1>
          <p class="mt-6 max-w-md text-lg leading-relaxed text-[#A3A3A3]">
            KavoraX is point-of-sale and back-office software. GST bills, UPI payments,
            kitchen tickets and stock counts stay connected, and the counter keeps billing
            when the internet doesn’t.
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <NuxtLink to="/demo" class="kx-btn">
              Book a demo
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="kx-btn-line">
              <MessageCircle class="h-4 w-4 text-brand" />
              WhatsApp us
            </a>
          </div>
        </div>

        <figure class="lg:col-span-7">
          <UiDeviceFrame title="Counter 01" status="Online">
            <PosBillingScreen embedded />
          </UiDeviceFrame>
          <figcaption class="mt-3 text-sm text-[#737373]">
            The billing screen, with a sample cafe menu.
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- One order, end to end -->
    <section class="border-t border-white/[0.08] bg-[#111111] py-20 md:py-28">
      <div class="kx-wrap">
        <div class="max-w-2xl">
          <h2 class="font-editorial text-3xl leading-tight text-white md:text-5xl">
            Follow one order through the shop.
          </h2>
          <p class="mt-5 text-lg text-[#A3A3A3]">
            Nobody types anything twice. Here is what happens when Table 4 orders breakfast.
          </p>
        </div>

        <ol class="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="(step, i) in orderSteps" :key="step.where" class="bg-[#111111] p-6 md:p-8">
            <div class="flex items-baseline gap-3">
              <span class="font-editorial text-2xl text-brand tabular-nums">{{ i + 1 }}</span>
              <h3 class="text-lg font-semibold text-white">{{ step.where }}</h3>
            </div>
            <p class="mt-3 leading-relaxed text-[#A3A3A3]">{{ step.what }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Kitchen + QR ordering, shown not told -->
    <section class="py-20 md:py-28">
      <div class="kx-wrap grid items-center gap-12 lg:grid-cols-12">
        <div class="order-2 lg:order-1 lg:col-span-7">
          <UiDeviceFrame type="tablet" title="Kitchen · Hot station" status="4 open tickets">
            <KdsBoard embedded />
          </UiDeviceFrame>
        </div>
        <div class="order-1 lg:order-2 lg:col-span-4 lg:col-start-9">
          <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl">
            The kitchen sees the order the moment it’s placed.
          </h2>
          <p class="mt-5 leading-relaxed text-[#A3A3A3]">
            Tickets turn amber, then red, the longer they wait, so the late ones are obvious
            during a rush. When the cook taps <em class="not-italic text-white">ready</em>, the waiter knows.
          </p>
          <NuxtLink to="/kitchen-display" class="kx-link mt-6 inline-block">More about the kitchen display</NuxtLink>
        </div>
      </div>

      <div class="kx-wrap mt-24 grid items-center gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl">
            Guests order from the table. You don’t print a new menu.
          </h2>
          <p class="mt-5 leading-relaxed text-[#A3A3A3]">
            A QR code on each table opens your menu on the guest’s phone. Change a price or mark
            a dish sold out once, and it changes everywhere: QR menu, counter and online store.
          </p>
          <NuxtLink to="/digital-ordering" class="kx-link mt-6 inline-block">More about QR ordering</NuxtLink>
        </div>
        <div class="lg:col-span-6 lg:col-start-7">
          <QrOrderPhone />
          <p class="mt-3 text-center text-sm text-[#737373]">The guest’s view, with a sample menu.</p>
        </div>
      </div>
    </section>

    <!-- India specifics: light section -->
    <section class="kx-light py-20 md:py-28">
      <div class="kx-wrap">
        <div class="grid gap-6 lg:grid-cols-12">
          <h2 class="font-editorial text-3xl leading-tight md:text-5xl lg:col-span-6">
            Made for the way Indian counters work.
          </h2>
          <p class="text-lg text-[#525252] lg:col-span-5 lg:col-start-8 lg:pt-3">
            The small things that slow down billing in India, sorted out of the box.
            Oman and the GCC come next.
          </p>
        </div>

        <dl class="mt-14 grid gap-x-10 gap-y-10 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in indiaDetails" :key="item.title">
            <dt class="font-semibold">{{ item.title }}</dt>
            <dd class="mt-2 leading-relaxed text-[#525252]">{{ item.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Everything in KavoraX -->
    <section class="py-20 md:py-28">
      <div class="kx-wrap">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <h2 class="max-w-xl font-editorial text-3xl leading-tight text-white md:text-5xl">
            Ten parts. Switch on the ones you need.
          </h2>
          <NuxtLink to="/products" class="kx-link">Compare all products</NuxtLink>
        </div>

        <div class="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          <div v-for="group in productNavGroups" :key="group.name">
            <h3 class="border-b border-white/[0.14] pb-3 text-sm font-semibold text-[#A3A3A3]">
              {{ group.name }}
            </h3>
            <ul>
              <li v-for="item in group.items" :key="item.slug" class="border-b border-white/[0.08]">
                <NuxtLink :to="item.href" class="group flex items-start justify-between gap-4 py-4">
                  <span>
                    <span class="block font-semibold text-white group-hover:text-brand">{{ item.name }}</span>
                    <span class="mt-1 block text-sm leading-relaxed text-[#A3A3A3]">{{ item.description }}</span>
                  </span>
                  <ArrowUpRight class="mt-1 h-4 w-4 shrink-0 text-[#737373] group-hover:text-brand" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Who it's for -->
    <section class="border-t border-white/[0.08] py-20 md:py-24">
      <div class="kx-wrap grid gap-10 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl lg:col-span-4">
          Who uses it
        </h2>
        <ul class="flex flex-wrap gap-x-8 gap-y-4 lg:col-span-8">
          <li v-for="type in businessTypes" :key="type.label">
            <NuxtLink :to="type.href" class="font-editorial text-2xl text-white transition-colors hover:text-brand md:text-3xl">
              {{ type.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Questions -->
    <section class="border-t border-white/[0.08] bg-[#111111] py-20 md:py-28">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl lg:col-span-4">
          What owners ask us first
        </h2>
        <dl class="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          <div v-for="item in questions" :key="item.q">
            <dt class="text-lg font-semibold text-white">{{ item.q }}</dt>
            <dd class="mt-2 leading-relaxed text-[#A3A3A3]">
              {{ item.a }}
              <NuxtLink v-if="item.q.startsWith('How much')" to="/pricing" class="kx-link ms-1">See pricing</NuxtLink>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <TalkToUs />
  </div>
</template>
