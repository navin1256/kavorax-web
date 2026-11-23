<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import InventoryTable from '~/components/product-ui/InventoryTable.vue'
import OutletsOverview from '~/components/product-ui/OutletsOverview.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import TalkToUs from '~/components/site/TalkToUs.vue'
import { productNavGroups } from '~/utils/productNav'
import { getModuleBySlug } from '~/composables/useModules'

useHead({
  title: 'Products | POS, kitchen display, stock, CRM and more | KavoraX',
  meta: [
    {
      name: 'description',
      content:
        'Ten KavoraX products for restaurants and shops: POS & Billing, QR ordering, online store, kitchen display, stock, delivery, CRM, reports, multi-outlet and staff management.'
    }
  ]
})

const groupScreens = {
  Sell: { component: PosBillingScreen, title: 'Counter 01', caption: 'POS & Billing, sample cafe menu' },
  Operate: { component: InventoryTable, title: 'Stock', caption: 'Inventory & Stock, sample store' },
  'Grow & manage': { component: OutletsOverview, title: 'All outlets', caption: 'Multi-location view, sample chain' }
} as const

const groupIntro: Record<string, string> = {
  Sell: 'Everything that takes an order and turns it into a bill: at the counter, at the table or online.',
  Operate: 'What happens after the order: cooking it, keeping stock right, and getting it to the customer.',
  'Grow & manage': 'For when you want more regulars, clearer numbers, or a second and third branch.'
}

const groups = productNavGroups.map((group) => ({
  ...group,
  intro: groupIntro[group.name] || '',
  screen: groupScreens[group.name],
  items: group.items.map((item) => {
    const mod = getModuleBySlug(item.slug)
    return {
      ...item,
      subline: mod?.subline || item.description,
      features: (mod?.features || []).slice(0, 4),
      whoUsesIt: mod?.whoUsesIt || []
    }
  })
}))

const starterSets = [
  {
    who: 'A single cafe or restaurant',
    products: ['POS & Billing', 'Kitchen Display', 'Digital Ordering'],
    why: 'Bills at the counter, orders go straight to the kitchen, and guests can order from the table when you are busy.'
  },
  {
    who: 'A retail or convenience store',
    products: ['POS & Billing', 'Inventory & Stock', 'CRM & Loyalty'],
    why: 'Barcode billing, stock that updates as you sell, and a reason for customers to come back.'
  },
  {
    who: 'A chain with a few branches',
    products: ['Multi-Location', 'Business Analytics', 'Business Management'],
    why: 'One menu and price list for every branch, reports you can compare, and staff access per outlet.'
  }
]
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="pt-14 pb-16 md:pt-20 md:pb-20">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <h1 class="font-editorial text-[2.6rem] leading-[1.05] text-white md:text-6xl">
            Ten products. One set of menus, stock and customers underneath.
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            Start with billing. Add the kitchen screen, stock or loyalty when you need them.
            Whatever you add already knows your items, prices and customers, so there is
            nothing to set up twice.
          </p>
        </div>

        <nav aria-label="Jump to a product" class="lg:col-span-4 lg:col-start-9">
          <div v-for="group in groups" :key="group.name" class="mb-6 last:mb-0">
            <p class="text-sm text-[#737373]">{{ group.name }}</p>
            <ul class="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <li v-for="item in group.items" :key="item.slug">
                <a :href="`#${item.slug}`" class="text-white hover:text-brand">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <!-- Groups -->
    <section
      v-for="(group, gi) in groups"
      :key="group.name"
      class="border-t border-white/[0.08] py-20 md:py-24"
      :class="gi === 1 ? 'bg-[#111111]' : ''"
    >
      <div class="kx-wrap">
        <div class="grid items-end gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <h2 class="font-editorial text-4xl text-white md:text-5xl">{{ group.name }}</h2>
            <p class="mt-4 max-w-md text-lg text-[#A3A3A3]">{{ group.intro }}</p>
          </div>
          <figure class="lg:col-span-7">
            <UiDeviceFrame :title="group.screen.title" status="Online">
              <component :is="group.screen.component" embedded />
            </UiDeviceFrame>
            <figcaption class="mt-3 text-sm text-[#737373]">{{ group.screen.caption }}</figcaption>
          </figure>
        </div>

        <div class="mt-16 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          <article
            v-for="item in group.items"
            :id="item.slug"
            :key="item.slug"
            class="grid scroll-mt-24 gap-6 py-10 md:grid-cols-12"
          >
            <div class="md:col-span-4">
              <h3 class="font-editorial text-2xl text-white md:text-3xl">{{ item.name }}</h3>
              <p class="mt-2 text-[#A3A3A3]">{{ item.subline }}</p>
            </div>
            <ul class="grid gap-x-8 gap-y-2 text-[#D4D4D4] sm:grid-cols-2 md:col-span-5">
              <li v-for="f in item.features" :key="f" class="flex gap-2.5">
                <span class="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <span>{{ f }}</span>
              </li>
            </ul>
            <div class="flex flex-col justify-between gap-4 md:col-span-3 md:items-end md:text-end">
              <p class="text-sm text-[#737373]">{{ item.whoUsesIt.slice(0, 3).join(', ') }}</p>
              <NuxtLink :to="item.href" class="inline-flex items-center gap-2 font-semibold text-white hover:text-brand">
                See {{ item.name }}
                <ArrowRight class="h-4 w-4" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Starter sets -->
    <section class="kx-light py-20 md:py-28">
      <div class="kx-wrap">
        <h2 class="max-w-2xl font-editorial text-3xl leading-tight md:text-5xl">
          Not sure where to start? Most businesses begin with one of these.
        </h2>
        <div class="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <div v-for="set in starterSets" :key="set.who" class="border-t-2 border-[#0A0A0A] pt-6">
            <h3 class="text-xl font-semibold">{{ set.who }}</h3>
            <p class="mt-3 text-[#525252]">{{ set.products.join(' + ') }}</p>
            <p class="mt-4 leading-relaxed text-[#525252]">{{ set.why }}</p>
          </div>
        </div>
        <p class="mt-12 text-[#525252]">
          The price depends on which products you use.
          <NuxtLink to="/pricing" class="kx-link">How pricing works</NuxtLink>
        </p>
      </div>
    </section>

    <TalkToUs heading="Tell us how your shop runs today." text="Paper KOTs, an old billing machine, a spreadsheet for stock? That is a fine place to start. We will suggest what to switch on first." />
  </div>
</template>
