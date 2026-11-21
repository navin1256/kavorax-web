<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, ArrowRight } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import MobileNavigation from './MobileNavigation.vue'
import { productNavGroups } from '~/utils/productNav'
import type { NavItem } from '~~/shared/types'

const isProductsOpen = ref(false)
const productsMenuRef = ref<HTMLElement | null>(null)

const toggleProducts = () => {
  isProductsOpen.value = !isProductsOpen.value
}

const closeProducts = () => {
  isProductsOpen.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isProductsOpen.value) {
    closeProducts()
  }
}

const handleClickOutside = (e: MouseEvent) => {
  if (productsMenuRef.value && !productsMenuRef.value.contains(e.target as Node)) {
    closeProducts()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClickOutside)
})

const navItems: NavItem[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
]
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0A0A0A] transition-colors"
  >
    <div
      class="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Brand Logo / Wordmark -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3 group transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg p-1"
        aria-label="KavoraX Home"
      >
        <NuxtImg
          src="/logo-trimmed.png"
          alt="KavoraX Logo"
          width="37"
          height="32"
          class="h-8 w-auto object-contain transition-transform group-hover:scale-105"
        />
        <span
          class="font-editorial text-2xl font-semibold tracking-tight text-white flex items-center"
        >
          Kavora<span class="text-brand">X</span>
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main navigation">
        <!-- Products Dropdown -->
        <div ref="productsMenuRef" class="relative">
          <button
            type="button"
            class="font-ui inline-flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            :class="isProductsOpen ? 'text-white bg-white/[0.08]' : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'"
            :aria-expanded="isProductsOpen"
            aria-haspopup="true"
            @click.stop="toggleProducts"
          >
            <span>Products</span>
            <ChevronDown
              class="h-3.5 w-3.5 transition-transform duration-200"
              :class="isProductsOpen ? 'rotate-180 text-brand' : 'text-zinc-400'"
            />
          </button>

          <!-- Dropdown Mega Menu -->
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-if="isProductsOpen"
              class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[760px] rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl z-50"
              role="menu"
              aria-label="Products Submenu"
            >
              <div class="grid grid-cols-3 gap-6">
                <div v-for="grp in productNavGroups" :key="grp.name" class="space-y-3">
                  <div class="pb-2 border-b border-white/[0.08]">
                    <span class="font-ui text-xs font-semibold text-brand uppercase tracking-wider">
                      {{ grp.name }}
                    </span>
                    <p class="font-ui text-[11px] text-zinc-500 mt-0.5 leading-snug">
                      {{ grp.tagline }}
                    </p>
                  </div>
                  <ul class="space-y-1.5">
                    <li v-for="item in grp.items" :key="item.slug">
                      <NuxtLink
                        :to="item.href"
                        class="block p-2 rounded-lg hover:bg-white/[0.05] transition-colors group/item focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand"
                        role="menuitem"
                        @click="closeProducts"
                      >
                        <div class="font-ui text-xs font-semibold text-zinc-200 group-hover/item:text-brand transition-colors">
                          {{ item.name }}
                        </div>
                        <p class="font-ui text-[11px] text-zinc-400 leading-snug mt-0.5 line-clamp-2">
                          {{ item.description }}
                        </p>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- All products footer bar -->
              <div class="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 px-2 font-ui">
                <span>Explore complete system capabilities &amp; modules</span>
                <NuxtLink
                  to="/products"
                  class="text-brand hover:underline font-semibold inline-flex items-center gap-1.5 transition-colors"
                  @click="closeProducts"
                >
                  <span>All products</span>
                  <ArrowRight class="h-3.5 w-3.5" />
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="font-ui px-3.5 py-1.5 text-[13px] font-medium text-zinc-300 hover:text-white rounded-md hover:bg-white/[0.04] transition-all relative"
          active-class="text-white bg-white/[0.06] font-semibold"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Action CTAs & Mobile Navigation Trigger -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/demo" class="hidden sm:inline-flex">
          <Button
            size="sm"
            class="font-ui bg-brand text-black font-semibold hover:bg-brand/90 transition-all duration-200 px-4 py-2 h-9 text-xs rounded-md"
          >
            Book a Demo
          </Button>
        </NuxtLink>

        <!-- Mobile Navigation Drawer -->
        <MobileNavigation />
      </div>
    </div>
  </header>
</template>
