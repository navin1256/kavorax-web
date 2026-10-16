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
    class="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#0b0f14]/80 backdrop-blur-xl transition-all"
  >
    <div
      class="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Brand Logo / Wordmark -->
      <NuxtLink to="/" class="flex items-center gap-3 group transition-opacity hover:opacity-95">
        <div
          class="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e1620] border border-brand/35 shadow-[0_0_16px_-3px_rgba(16,185,129,0.25)] group-hover:border-brand/60 transition-colors"
        >
          <svg
            class="h-4 w-4 text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <span
          class="font-editorial text-2xl font-semibold tracking-tight text-white flex items-center"
        >
          Kavora<span class="text-brand">X</span>
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main navigation">
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
            class="font-ui bg-brand text-black font-semibold hover:bg-brand/90 transition-all duration-200 px-4 py-2 h-9 text-xs rounded-md shadow-[0_0_18px_-3px_rgba(16,185,129,0.3)] hover:shadow-[0_0_24px_0px_rgba(16,185,129,0.45)]"
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
