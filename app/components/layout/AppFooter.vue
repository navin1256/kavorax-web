<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const footerNav = {
  platform: [
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Pricing', href: '/pricing' }
  ],
  company: [
    { label: 'About KavoraX', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a Demo', href: '/demo' }
  ]
}
</script>

<template>
  <footer class="border-t border-white/[0.08] bg-[#070b0f] bg-technical-grid py-16 md:py-20 text-zinc-400 font-ui">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
        <!-- Brand Narrative Column -->
        <div class="md:col-span-5 lg:col-span-6 space-y-4">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e1620] border border-brand/35 text-brand shadow-[0_0_12px_-2px_rgba(16,185,129,0.2)]"
            >
              <span class="text-xs font-bold font-ui">KX</span>
            </div>
            <span class="font-editorial text-2xl font-semibold text-white tracking-tight">
              Kavora<span class="text-brand">X</span>
            </span>
          </NuxtLink>

          <p class="font-editorial text-lg text-zinc-300 max-w-md leading-relaxed">
            KavoraX Global Private Limited builds connected business solutions that help
            organisations operate smarter, serve customers better and scale with confidence.
          </p>

          <div class="pt-2 flex items-center gap-2 text-xs text-zinc-500">
            <ShieldCheck class="h-4 w-4 text-brand" />
            <span>Enterprise Technology Solutions · Interoperable Architecture</span>
          </div>
        </div>

        <!-- Links: Platform -->
        <div class="md:col-span-3 lg:col-span-3 space-y-4">
          <h4 class="text-xs font-semibold text-white uppercase tracking-wider">
            Platform Capabilities
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in footerNav.platform" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Links: Company -->
        <div class="md:col-span-4 lg:col-span-3 space-y-4">
          <h4 class="text-xs font-semibold text-white uppercase tracking-wider">
            Organization & Engagement
          </h4>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in footerNav.company" :key="link.label">
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

      <!-- Copyright & Legal Footnote -->
      <div
        class="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500"
      >
        <p>© {{ currentYear }} KavoraX Global Private Limited. All rights reserved.</p>
        <div class="flex items-center gap-4 text-zinc-500 font-ui text-xs">
          <NuxtLink to="/privacy-policy" class="hover:text-zinc-300 transition-colors">
            Privacy Policy
          </NuxtLink>
          <span>·</span>
          <NuxtLink to="/terms-of-service" class="hover:text-zinc-300 transition-colors">
            Terms of Service
          </NuxtLink>
          <span>·</span>
          <span>Confidentiality Respected</span>
        </div>
      </div>
    </div>
  </footer>
</template>
