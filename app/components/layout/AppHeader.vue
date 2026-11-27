<script setup lang="ts">
import { Button } from '~/components/ui/button'
import MobileNavigation from './MobileNavigation.vue'
import type { NavItem } from '~~/shared/types'

const navItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
]
</script>

<template>
  <header
    class="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 pointer-events-none -mb-[58px] sm:-mb-[66px]"
    style="will-change: transform; transform: translateZ(0);"
  >
    <div
      class="max-w-5xl mx-auto rounded-full px-3 sm:px-5 py-2 flex items-center justify-between bg-[#0b0f14]/65 backdrop-blur-md border border-white/12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.45)] pointer-events-auto transition-all duration-300"
    >
      <!-- Brand Logo / Wordmark -->
      <NuxtLink to="/" class="pl-2 flex items-center gap-2.5 sm:gap-3 group transition-opacity hover:opacity-95">
        <img
          src="/logo.png"
          alt="KavoraX Logo"
          width="1024"
          height="861"
          class="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0"
          loading="eager"
          decoding="async"
        />
        <span
          class="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-white flex items-center"
        >
          Kavora<span class="text-brand">X</span>
        </span>
      </NuxtLink>

      <!-- Center: Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main navigation">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="font-ui px-3.5 py-1.5 text-sm font-medium text-white/75 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors relative"
          active-class="!text-emerald-400 bg-white/[0.08] font-semibold"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Right: Action CTA & Mobile Navigation Trigger -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        <NuxtLink to="/demo" class="hidden sm:inline-flex">
          <Button
            class="font-ui rounded-full bg-[#10b981] hover:bg-[#22d97a] text-[#07070b] font-semibold px-4 sm:px-5 py-2 text-sm shadow-[0_0_18px_-3px_rgba(16,185,129,0.35)] hover:shadow-[0_0_24px_0px_rgba(16,185,129,0.5)] transition-all duration-200 h-9"
          >
            Book a Demo
          </Button>
        </NuxtLink>

        <!-- Mobile Navigation Drawer -->
        <MobileNavigation :nav-items="navItems" />
      </div>
    </div>
  </header>
</template>
