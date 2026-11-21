<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'
import { productNavItems } from '~/utils/productNav'

const currentYear = new Date().getFullYear()

const companyLinks = [
  { label: 'About KavoraX', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing & Plans', href: '/pricing' },
  { label: 'Book a Demo', href: '/demo' },
  { label: 'Contact Us', href: '/contact' }
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' }
]
</script>

<template>
  <footer class="border-t border-white/[0.08] bg-[#0A0A0A] py-16 md:py-20 text-zinc-400 font-ui">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
        <!-- Brand Narrative Column -->
        <div class="md:col-span-4 lg:col-span-4 space-y-4">
          <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="KavoraX Home">
            <NuxtImg
              src="/logo-trimmed.png"
              alt="KavoraX Logo"
              width="37"
              height="32"
              class="h-8 w-auto object-contain"
            />
            <span class="font-editorial text-2xl font-semibold text-white tracking-tight">
              Kavora<span class="text-brand">X</span>
            </span>
          </NuxtLink>

          <p class="font-ui text-sm text-zinc-400 max-w-sm leading-relaxed">
            KavoraX Global Private Limited builds connected business solutions that help
            organisations operate smarter, serve customers better and scale with confidence.
          </p>

          <div class="pt-2 flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck class="h-4 w-4 text-brand" />
            <span>Connected Operations · SaaS Architecture</span>
          </div>
        </div>

        <!-- Links: Products (10 modules) -->
        <div class="md:col-span-4 lg:col-span-4 space-y-4">
          <div class="flex items-center justify-between pb-1 border-b border-white/[0.06]">
            <h4 class="text-xs font-semibold text-white font-ui uppercase tracking-wider">
              Products
            </h4>
            <NuxtLink to="/products" class="text-xs text-brand hover:underline font-semibold">
              All Products →
            </NuxtLink>
          </div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <li v-for="link in productNavItems" :key="link.slug">
              <NuxtLink
                :to="link.href"
                class="text-zinc-400 hover:text-white transition-colors duration-200 block truncate"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Links: Company & Legal -->
        <div class="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-8">
          <div class="space-y-4">
            <h4 class="text-xs font-semibold text-white font-ui uppercase tracking-wider pb-1 border-b border-white/[0.06]">
              Company
            </h4>
            <ul class="space-y-2 text-xs">
              <li v-for="link in companyLinks" :key="link.href">
                <NuxtLink
                  :to="link.href"
                  class="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h4 class="text-xs font-semibold text-white font-ui uppercase tracking-wider pb-1 border-b border-white/[0.06]">
              Legal
            </h4>
            <ul class="space-y-2 text-xs">
              <li v-for="link in legalLinks" :key="link.href">
                <NuxtLink
                  :to="link.href"
                  class="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright & Legal Footnote -->
      <div
        class="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-ui"
      >
        <p>© {{ currentYear }} KavoraX Global Private Limited. All rights reserved.</p>
        <div class="flex items-center gap-4 text-zinc-400">
          <NuxtLink to="/privacy-policy" class="hover:text-zinc-200 transition-colors">
            Privacy Policy
          </NuxtLink>
          <span>·</span>
          <NuxtLink to="/terms-of-service" class="hover:text-zinc-200 transition-colors">
            Terms of Service
          </NuxtLink>
          <span>·</span>
          <span>Confidentiality Respected</span>
        </div>
      </div>
    </div>
  </footer>
</template>
