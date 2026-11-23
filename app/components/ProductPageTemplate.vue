<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, MessageCircle } from 'lucide-vue-next'
import { initialModules, type Module } from '~/composables/useModules'
import PosBillingScreen from '~/components/product-ui/PosBillingScreen.vue'
import KdsBoard from '~/components/product-ui/KdsBoard.vue'
import InventoryTable from '~/components/product-ui/InventoryTable.vue'
import QrOrderPhone from '~/components/product-ui/QrOrderPhone.vue'
import OutletsOverview from '~/components/product-ui/OutletsOverview.vue'
import CrmProfile from '~/components/product-ui/CrmProfile.vue'
import DeliveryTracker from '~/components/product-ui/DeliveryTracker.vue'
import UiDeviceFrame from '~/components/shared/UiDeviceFrame.vue'
import TalkToUs from '~/components/site/TalkToUs.vue'

const props = defineProps<{ module: Module }>()

const canonicalRouteMap: Record<string, string> = {
  'pos-billing': '/pos-and-billing',
  'inventory-stock': '/inventory-and-stock',
  crm: '/crm',
  'digital-ordering': '/digital-ordering',
  'delivery-management': '/delivery-management',
  'business-analytics': '/business-analytics',
  'kitchen-display': '/kitchen-display',
  'multi-location-management': '/multi-location',
  'e-commerce': '/e-commerce',
  'business-management': '/business-management'
}
const routeFor = (slug: string) => canonicalRouteMap[slug] || `/${slug}`
const pageSlug = computed(() => routeFor(props.module.slug).slice(1))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kavorax.com' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://kavorax.com/products' },
          { '@type': 'ListItem', position: 3, name: props.module.name, item: `https://kavorax.com${routeFor(props.module.slug)}` }
        ]
      })
    }
  ]
})

const screens: Record<string, { component: unknown; device: 'terminal' | 'tablet' | 'phone' }> = {
  'pos-billing': { component: PosBillingScreen, device: 'terminal' },
  'kitchen-display': { component: KdsBoard, device: 'tablet' },
  'inventory-stock': { component: InventoryTable, device: 'terminal' },
  'digital-ordering': { component: QrOrderPhone, device: 'phone' },
  'e-commerce': { component: QrOrderPhone, device: 'phone' },
  crm: { component: CrmProfile, device: 'terminal' },
  'delivery-management': { component: DeliveryTracker, device: 'terminal' },
  'multi-location-management': { component: OutletsOverview, device: 'terminal' },
  'business-analytics': { component: OutletsOverview, device: 'terminal' },
  'business-management': { component: OutletsOverview, device: 'terminal' }
}
const screen = computed(() => screens[props.module.slug] ?? { component: PosBillingScreen, device: 'terminal' as const })

const related = computed(() =>
  (props.module.worksWith || [])
    .map((name) => initialModules.find((m) => m.name === name || m.slug === name))
    .filter((m): m is Module => Boolean(m))
)

const config = useRuntimeConfig()
const whatsappUrl = computed(() => {
  const number = config.public.whatsappNumber || '919629579358'
  const msg = encodeURIComponent(`Hi KavoraX, I have a question about ${props.module.name}.`)
  return `https://wa.me/${number}?text=${msg}`
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-10 pb-20 md:pt-14 md:pb-24">
      <div class="kx-wrap">
        <nav aria-label="Breadcrumb" class="text-sm text-[#737373]">
          <NuxtLink to="/products" class="hover:text-white">Products</NuxtLink>
          <span class="mx-2" aria-hidden="true">/</span>
          <span class="text-[#A3A3A3]">{{ module.name }}</span>
        </nav>

        <div class="mt-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-5">
            <p class="font-semibold text-brand">{{ module.name }}</p>
            <h1 class="mt-3 font-editorial text-4xl leading-[1.08] text-white md:text-[3.4rem]">
              {{ module.subline }}
            </h1>
            <p class="mt-6 text-lg text-[#A3A3A3]">
              Used by {{ module.whoUsesIt.join(', ').toLowerCase() }}.
            </p>
            <div class="mt-9 flex flex-wrap gap-3">
              <NuxtLink :to="`/demo?module=${pageSlug}`" class="kx-btn">
                Book a demo
                <ArrowRight class="h-4 w-4" />
              </NuxtLink>
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="kx-btn-line">
                <MessageCircle class="h-4 w-4 text-brand" />
                Ask a question
              </a>
            </div>
          </div>

          <figure class="lg:col-span-7">
            <component :is="screen.component" v-if="screen.device === 'phone'" />
            <UiDeviceFrame v-else :type="screen.device" :title="module.name" status="Online">
              <component :is="screen.component" embedded />
            </UiDeviceFrame>
            <figcaption class="mt-3 text-sm text-[#737373]" :class="screen.device === 'phone' ? 'text-center' : ''">
              Sample screen with demo data.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- What it does -->
    <section class="border-t border-white/[0.08] py-20 md:py-24">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl lg:col-span-4">
          What {{ module.name }} does
        </h2>
        <ul class="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          <li
            v-for="feature in module.features"
            :key="feature"
            class="flex gap-3 border-b border-white/[0.08] py-4 text-lg text-[#E5E5E5]"
          >
            <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            {{ feature }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Screens you'll use -->
    <section v-if="module.tabs.length" class="kx-light py-20 md:py-24">
      <div class="kx-wrap">
        <h2 class="max-w-xl font-editorial text-3xl leading-tight md:text-4xl">
          The screens your staff will use every day
        </h2>
        <div class="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          <div v-for="tab in module.tabs" :key="tab.id" class="border-t border-black/15 pt-6">
            <h3 class="text-xl font-semibold">{{ tab.label }}</h3>
            <p class="mt-2 text-[#525252]">{{ tab.description }}</p>
            <ul class="mt-5 space-y-2 text-[#262626]">
              <li v-for="b in tab.bullets" :key="b" class="flex gap-2.5">
                <span class="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
                {{ b }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Works with -->
    <section v-if="related.length" class="py-20 md:py-24">
      <div class="kx-wrap grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl">Works with</h2>
          <p class="mt-4 text-[#A3A3A3]">
            Same items, prices and customers. Turn one on and it already knows what the others know.
          </p>
        </div>
        <ul class="divide-y divide-white/[0.08] border-y border-white/[0.08] lg:col-span-8">
          <li v-for="m in related" :key="m.slug">
            <NuxtLink :to="routeFor(m.slug)" class="group grid gap-1 py-5 sm:grid-cols-12 sm:items-center">
              <span class="font-semibold text-white group-hover:text-brand sm:col-span-4">{{ m.name }}</span>
              <span class="text-[#A3A3A3] sm:col-span-7">{{ m.subline }}</span>
              <ArrowRight class="hidden h-4 w-4 justify-self-end text-[#737373] group-hover:text-brand sm:col-span-1 sm:block" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Questions -->
    <section class="border-t border-white/[0.08] bg-[#111111] py-20 md:py-24">
      <div class="kx-wrap grid gap-12 lg:grid-cols-12">
        <h2 class="font-editorial text-3xl leading-tight text-white md:text-4xl lg:col-span-4">Questions</h2>
        <dl class="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          <div v-for="item in module.faq" :key="item.question">
            <dt class="text-lg font-semibold text-white">{{ item.question }}</dt>
            <dd class="mt-2 leading-relaxed text-[#A3A3A3]">{{ item.answer }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <TalkToUs
      :module="pageSlug"
      :heading="`See ${module.name} with your own items.`"
      text="Share your menu or product list before the call and we will use it in the demo, so you see what your staff would see."
    />
  </div>
</template>
