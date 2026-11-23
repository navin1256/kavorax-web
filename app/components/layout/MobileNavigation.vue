<script setup lang="ts">
import { ref } from 'vue'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet'
import { Button } from '~/components/ui/button'
import { Menu, ArrowRight, ChevronDown } from 'lucide-vue-next'
import { productNavGroups } from '~/utils/productNav'
import type { NavItem } from '~~/shared/types'

defineProps<{
  navItems?: NavItem[]
}>()

const isOpen = ref(false)
const isProductsAccordionOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

const toggleProductsAccordion = () => {
  isProductsAccordionOpen.value = !isProductsAccordionOpen.value
}

const staticNavLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
]
</script>

<template>
  <Sheet v-model:open="isOpen">
    <SheetTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="text-zinc-300 hover:text-white hover:bg-white/[0.05] md:hidden h-9 w-9 rounded-md border border-white/[0.08]"
        aria-label="Toggle navigation menu"
      >
        <Menu class="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      class="w-[320px] sm:w-[380px] bg-[#0A0A0A] border-l border-white/[0.08] text-zinc-100 p-6 flex flex-col justify-between overflow-y-auto"
    >
      <div>
        <SheetHeader class="text-left pb-5 border-b border-white/[0.07]">
          <SheetTitle class="flex items-center gap-2.5 text-white">
            <NuxtImg
              src="/logo-trimmed.png"
              alt="KavoraX Logo"
              width="37"
              height="32"
              class="h-8 w-auto object-contain"
            />
            <span class="font-editorial text-2xl font-semibold tracking-tight">
              Kavora<span class="text-brand">X</span>
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav class="flex flex-col gap-1.5 mt-6 font-ui" aria-label="Mobile navigation">
          <!-- Products Accordion -->
          <div class="rounded-lg border border-white/[0.06] bg-[#111111] overflow-hidden">
            <button
              type="button"
              class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white hover:bg-white/[0.04] transition-colors"
              :aria-expanded="isProductsAccordionOpen"
              @click="toggleProductsAccordion"
            >
              <span class="font-semibold">Products</span>
              <ChevronDown
                class="h-4 w-4 text-zinc-400 transition-transform duration-200"
                :class="isProductsAccordionOpen ? 'rotate-180 text-brand' : ''"
              />
            </button>

            <div v-if="isProductsAccordionOpen" class="px-4 pb-3 space-y-4 pt-1 border-t border-white/[0.04]">
              <div v-for="grp in productNavGroups" :key="grp.name" class="space-y-1.5">
                <div class="text-sm font-semibold text-white">
                  {{ grp.name }}
                </div>
                <div class="space-y-1 pl-1">
                  <NuxtLink
                    v-for="item in grp.items"
                    :key="item.slug"
                    :to="item.href"
                    class="block py-1 text-xs text-zinc-300 hover:text-white transition-colors"
                    @click="closeMenu"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>

              <div class="pt-2 border-t border-white/[0.06]">
                <NuxtLink
                  to="/products"
                  class="flex items-center justify-between text-xs font-semibold text-brand hover:underline"
                  @click="closeMenu"
                >
                  <span>All products</span>
                  <ArrowRight class="h-3 w-3" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            v-for="item in staticNavLinks"
            :key="item.href"
            :to="item.href"
            class="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all group"
            active-class="text-white bg-white/[0.06] font-semibold text-brand"
            @click="closeMenu"
          >
            <span>{{ item.label }}</span>
            <ArrowRight class="h-3.5 w-3.5 text-zinc-500 group-hover:text-brand transition-colors" />
          </NuxtLink>
        </nav>
      </div>

      <div class="pt-6 border-t border-white/[0.07] flex flex-col gap-3 font-ui mt-6">
        <NuxtLink to="/demo" @click="closeMenu">
          <Button
            class="w-full h-11 bg-brand text-black font-semibold hover:bg-brand/90 rounded-md"
          >
            Book a Demo
          </Button>
        </NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu">
          <Button
            variant="outline"
            class="w-full h-11 border-white/10 bg-[#161616] text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-md"
          >
            Contact Sales
          </Button>
        </NuxtLink>
      </div>
    </SheetContent>
  </Sheet>
</template>
