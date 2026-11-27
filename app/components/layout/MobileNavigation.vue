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
        class="text-zinc-300 hover:text-white hover:bg-white/[0.08] md:hidden h-9 w-9 rounded-full border border-white/12 bg-white/[0.03] transition-colors"
        aria-label="Toggle navigation menu"
      >
        <Menu class="h-4.5 w-4.5" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      class="mobile-nav-backdrop w-[300px] sm:w-[350px] bg-[#0b0f14]/90 backdrop-blur-xl border-l border-white/12 text-zinc-100 p-6 flex flex-col justify-between shadow-2xl"
    >
      <div>
        <SheetHeader class="text-left pb-5 border-b border-white/[0.08]">
          <SheetTitle class="flex items-center gap-2.5 text-white">
            <img
              src="/logo.png"
              alt="KavoraX Logo"
              width="1024"
              height="861"
              class="h-8 w-auto object-contain shrink-0"
              loading="lazy"
              decoding="async"
            />
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
            class="flex items-center justify-between px-4 py-3 rounded-full text-sm font-medium text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors group"
            active-class="!text-emerald-400 bg-white/[0.08] font-semibold"
            @click="closeMenu"
          >
            <span>{{ item.label }}</span>
            <ArrowRight class="h-3.5 w-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
          </NuxtLink>
        </nav>
      </div>

      <div class="pt-6 border-t border-white/[0.08] flex flex-col gap-3 font-ui">
        <NuxtLink to="/demo" @click="closeMenu">
          <Button
            class="w-full h-11 rounded-full bg-[#10b981] hover:bg-[#22d97a] text-[#07070b] font-semibold shadow-[0_0_18px_-3px_rgba(16,185,129,0.35)] transition-all duration-200"
          >
            Book a Demo
          </Button>
        </NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu">
          <Button
            variant="outline"
            class="w-full h-11 rounded-full border-white/12 bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Contact Sales
          </Button>
        </NuxtLink>
      </div>
    </SheetContent>
  </Sheet>
</template>
