<script setup lang="ts">
import { ref } from 'vue'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/components/ui/sheet'
import { Button } from '~/components/ui/button'
import { Menu, ArrowRight } from 'lucide-vue-next'
import type { NavItem } from '~~/shared/types'

defineProps<{
  navItems: NavItem[]
}>()

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
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
      class="w-[300px] sm:w-[350px] bg-[#0b0f14] border-l border-white/[0.08] text-zinc-100 p-6 flex flex-col justify-between"
    >
      <div>
        <SheetHeader class="text-left pb-5 border-b border-white/[0.07]">
          <SheetTitle class="flex items-center gap-2.5 text-white">
            <span
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e1620] border border-brand/35 text-brand"
            >
              <span class="font-ui text-xs font-bold tracking-wider">KX</span>
            </span>
            <span class="font-editorial text-2xl font-semibold tracking-tight"
              >Kavora<span class="text-brand">X</span></span
            >
          </SheetTitle>
        </SheetHeader>

        <nav class="flex flex-col gap-1.5 mt-8 font-ui" aria-label="Mobile navigation">
          <NuxtLink
            v-for="item in navItems"
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

      <div class="pt-6 border-t border-white/[0.07] flex flex-col gap-3 font-ui">
        <NuxtLink to="/demo" @click="closeMenu">
          <Button
            class="w-full h-11 bg-brand text-black font-semibold hover:bg-brand/90 glow-emerald-sm rounded-md"
          >
            Book a Demo
          </Button>
        </NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu">
          <Button
            variant="outline"
            class="w-full h-11 border-white/10 bg-[#0f1620] text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-md"
          >
            Contact Sales
          </Button>
        </NuxtLink>
      </div>
    </SheetContent>
  </Sheet>
</template>
