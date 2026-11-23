<script setup lang="ts">
import KdsBoard from '~/components/product-ui/KdsBoard.vue'
import InventoryTable from '~/components/product-ui/InventoryTable.vue'
import CrmProfile from '~/components/product-ui/CrmProfile.vue'
import DeliveryTracker from '~/components/product-ui/DeliveryTracker.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import TalkToUs from '~/components/site/TalkToUs.vue'

useHead({
  title: 'Industries | Restaurants, cafes, cloud kitchens, retail and salons | KavoraX',
  meta: [
    {
      name: 'description',
      content:
        'How KavoraX is set up for restaurants, cafes and bakeries, cloud kitchens, retail and convenience stores, salons and online sellers.'
    }
  ]
})

interface Industry {
  id: string
  name: string
  problem: string
  handles: string[]
  products: { label: string; href: string }[]
  screen?: { component: unknown; title: string; device: 'terminal' | 'tablet' }
}

const industries: Industry[] = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    problem:
      'Friday night: the captain writes a KOT, the kitchen loses it, table 9 waits 25 minutes and the bill is wrong when it finally comes.',
    handles: [
      'Orders are kept by table, so the bill builds up as the meal goes on',
      'Each dish goes to the right kitchen station with a timer',
      'Merge tables, split bills, and split one bill across UPI and cash',
      'GST bills on paper or on the guest’s WhatsApp'
    ],
    products: [
      { label: 'POS & Billing', href: '/pos-and-billing' },
      { label: 'Kitchen Display', href: '/kitchen-display' },
      { label: 'Digital Ordering', href: '/digital-ordering' }
    ],
    screen: { component: KdsBoard, title: 'Kitchen · Hot station', device: 'tablet' }
  },
  {
    id: 'cafes',
    name: 'Cafes & bakeries',
    problem:
      'The morning queue is ten people deep, half of them regulars who order the same thing, and the counter is still typing it out every time.',
    handles: [
      'Favourites on the first screen, so a regular’s order is two taps',
      'Guests can order and pay from a QR code while the queue moves',
      'Loyalty points without a paper stamp card',
      'Stock of milk, beans and baked goods goes down as you sell'
    ],
    products: [
      { label: 'POS & Billing', href: '/pos-and-billing' },
      { label: 'Digital Ordering', href: '/digital-ordering' },
      { label: 'CRM & Loyalty', href: '/crm' }
    ]
  },
  {
    id: 'cloud-kitchens',
    name: 'Cloud kitchens',
    problem:
      'Orders come in from your own link, from phone calls and from walk-ins, and nobody is sure which rider took which one.',
    handles: [
      'All orders in one kitchen queue, whatever the source',
      'Assign orders to your riders and see which are out for delivery',
      'Delivery charges set by area',
      'Your own online ordering link'
    ],
    products: [
      { label: 'Kitchen Display', href: '/kitchen-display' },
      { label: 'Delivery Management', href: '/delivery-management' },
      { label: 'Digital Ordering', href: '/digital-ordering' }
    ],
    screen: { component: DeliveryTracker, title: 'Deliveries', device: 'terminal' }
  },
  {
    id: 'retail',
    name: 'Retail & convenience stores',
    problem:
      'A customer asks for something, the system says there are six, and the shelf is empty. Nobody knows when it ran out.',
    handles: [
      'Barcode billing with your existing scanner',
      'Stock goes down with every bill, and low items show on a reorder list',
      'Purchase orders and supplier records',
      'Batch and expiry dates for items that go off',
      'Points and WhatsApp offers for regular customers'
    ],
    products: [
      { label: 'POS & Billing', href: '/pos-and-billing' },
      { label: 'Inventory & Stock', href: '/inventory-and-stock' },
      { label: 'CRM & Loyalty', href: '/crm' }
    ],
    screen: { component: InventoryTable, title: 'Stock', device: 'terminal' }
  },
  {
    id: 'salons',
    name: 'Salons',
    problem:
      'A customer comes back after two months. Nobody remembers what colour they had or who did it, and the product shelf count is a guess.',
    handles: [
      'Bill services and retail products on the same bill',
      'Customer history: what they had and when',
      'WhatsApp offers to customers who haven’t visited in a while',
      'Staff attendance and shifts',
      'Stock of products you sell and use'
    ],
    products: [
      { label: 'POS & Billing', href: '/pos-and-billing' },
      { label: 'CRM & Loyalty', href: '/crm' },
      { label: 'Business Management', href: '/business-management' }
    ],
    screen: { component: CrmProfile, title: 'Customer', device: 'terminal' }
  },
  {
    id: 'online',
    name: 'Online sellers',
    problem:
      'You sell in the shop and online. Stock is kept in two places, and twice a week you sell something online that is already gone.',
    handles: [
      'An online store that uses the same stock as the shop',
      'Online orders appear next to counter orders',
      'Payment links and coupons',
      'Delivery tracking with your own riders'
    ],
    products: [
      { label: 'E-commerce', href: '/e-commerce' },
      { label: 'Inventory & Stock', href: '/inventory-and-stock' },
      { label: 'Delivery Management', href: '/delivery-management' }
    ]
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
            A restaurant and a kirana store don’t run the same way. So we don’t set them up the same way.
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            Below is what usually goes wrong in each kind of business, and which parts of
            KavoraX fix it. If yours isn’t listed, ask us anyway.
          </p>
        </div>
        <nav aria-label="Industries on this page" class="lg:col-span-4 lg:col-start-9 lg:pt-3">
          <ul class="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            <li v-for="ind in industries" :key="ind.id">
              <a :href="`#${ind.id}`" class="flex items-center justify-between py-3 text-white hover:text-brand">
                {{ ind.name }}
                <span aria-hidden="true" class="text-[#737373]">↓</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <!-- Industries -->
    <section
      v-for="(ind, i) in industries"
      :id="ind.id"
      :key="ind.id"
      class="scroll-mt-20 border-t border-white/[0.08] py-20 md:py-24"
      :class="i % 2 === 1 ? 'bg-[#111111]' : ''"
    >
      <div class="kx-wrap">
        <div class="grid gap-12 lg:grid-cols-12">
          <div v-if="!ind.screen" class="lg:col-span-5">
            <h2 class="font-editorial text-4xl text-white md:text-5xl">{{ ind.name }}</h2>
            <blockquote class="mt-6 border-s-2 border-brand ps-5 text-lg leading-relaxed text-[#D4D4D4]">
              {{ ind.problem }}
            </blockquote>
          </div>
          <div :class="ind.screen ? 'lg:col-span-5' : 'lg:col-span-6 lg:col-start-7'">
            <template v-if="ind.screen">
              <h2 class="font-editorial text-4xl text-white md:text-5xl">{{ ind.name }}</h2>
              <blockquote class="mt-6 border-s-2 border-brand ps-5 text-lg leading-relaxed text-[#D4D4D4]">
                {{ ind.problem }}
              </blockquote>
            </template>

            <h3 class="text-sm font-semibold text-[#A3A3A3]" :class="ind.screen ? 'mt-10' : 'lg:mt-3'">What KavoraX does about it</h3>
            <ul class="mt-3 space-y-3">
              <li v-for="h in ind.handles" :key="h" class="flex gap-3 text-[#E5E5E5]">
                <span class="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {{ h }}
              </li>
            </ul>

            <p class="mt-10 text-[#A3A3A3]">
              Usually starts with
              <template v-for="(p, pi) in ind.products" :key="p.href">
                <NuxtLink :to="p.href" class="kx-link">{{ p.label }}</NuxtLink><span v-if="pi < ind.products.length - 2">, </span><span v-else-if="pi === ind.products.length - 2"> and </span>
              </template>.
            </p>
          </div>

          <figure v-if="ind.screen" class="lg:col-span-7 lg:pt-16" :class="i % 2 === 1 ? 'lg:order-first' : ''">
            <UiDeviceFrame :type="ind.screen.device" :title="ind.screen.title" status="Online">
              <component :is="ind.screen.component" embedded />
            </UiDeviceFrame>
            <figcaption class="mt-3 text-sm text-[#737373]">Sample screen with demo data.</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Not listed -->
    <section class="kx-light py-20 md:py-24">
      <div class="kx-wrap grid gap-8 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight md:text-4xl lg:col-span-6">
          Sweet shop, juice bar, food court stall, gift shop?
        </h2>
        <div class="lg:col-span-5 lg:col-start-8">
          <p class="text-lg leading-relaxed text-[#525252]">
            If you sell things over a counter and need a bill, KavoraX probably fits. Tell us
            how your day goes and we will tell you honestly whether it does.
          </p>
          <NuxtLink to="/contact" class="kx-btn mt-8">Ask us</NuxtLink>
        </div>
      </div>
    </section>

    <TalkToUs />
  </div>
</template>
