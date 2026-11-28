<script setup lang="ts">
import {
  Mail,
  MapPin,
  Calendar,
  Clock,
  Globe,
  Linkedin,
  Github,
  ShieldCheck
} from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const footerNav = {
  solutions: [
    { label: 'POS & Billing', href: '/pos-and-billing' },
    { label: 'Kitchen Display (KDS)', href: '/kitchen-display' },
    { label: 'Inventory & Stock', href: '/inventory-and-stock' },
    { label: 'Digital Ordering', href: '/digital-ordering' },
    { label: 'Products & Platforms', href: '/products' }
  ],
  operations: [
    { label: 'Multi-Location', href: '/multi-location' },
    { label: 'Business Analytics', href: '/business-analytics' },
    { label: 'Delivery Management', href: '/delivery-management' },
    { label: 'CRM & Loyalty', href: '/crm' },
    { label: 'E-commerce Storefront', href: '/e-commerce' }
  ],
  company: [
    { label: 'Solutions Overview', href: '/solutions' },
    { label: 'Industry Verticals', href: '/industries' },
    { label: 'Pricing Plans', href: '/pricing' },
    { label: 'About KavoraX', href: '/about' },
    { label: 'Book a Demo', href: '/demo' }
  ]
}

const socialLinks = [
  { label: 'Global Platform', href: '/solutions', icon: Globe, external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, external: true },
  { label: 'GitHub', href: 'https://github.com/navin1256/kavorax-web', icon: Github, external: true },
  { label: 'Email', href: 'mailto:contact@kavorax.com', icon: Mail, external: true }
]
</script>

<template>
  <footer class="border-t border-white/[0.08] bg-transparent py-12 md:py-16 text-zinc-400 font-ui">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <!-- 1. Left Brand Column (lg:col-span-4) -->
        <div class="sm:col-span-2 lg:col-span-4 space-y-5">
          <NuxtLink to="/" class="inline-flex items-center gap-3 group">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e1620] border border-brand/35 text-brand shadow-[0_0_12px_-2px_rgba(16,185,129,0.2)]"
            >
              <span class="text-xs font-bold font-ui">KX</span>
            </div>
            <span class="font-editorial text-2xl font-semibold text-white tracking-tight">
              Kavora<span class="text-brand">X</span>
            </span>
          </NuxtLink>

          <p class="font-ui text-sm text-zinc-400 max-w-sm leading-relaxed">
            KavoraX Global Private Limited builds connected business solutions that help
            organisations operate smarter, serve customers better, and scale with confidence.
          </p>

          <!-- Social / Brand Badges Row -->
          <div class="flex items-center gap-2.5 pt-1">
            <template v-for="item in socialLinks" :key="item.label">
              <a
                v-if="item.external"
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="item.label"
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0c141e] text-zinc-400 hover:text-brand hover:border-brand/40 transition-colors duration-200"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </a>
              <NuxtLink
                v-else
                :to="item.href"
                :aria-label="item.label"
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0c141e] text-zinc-400 hover:text-brand hover:border-brand/40 transition-colors duration-200"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </NuxtLink>
            </template>
          </div>

          <div class="flex items-center gap-2 text-xs text-zinc-500 pt-1">
            <ShieldCheck class="h-4 w-4 text-brand" />
            <span>Connected Enterprise Architecture</span>
          </div>
        </div>

        <!-- 2. Balanced Navigation Columns (lg:col-span-5) -->
        <div class="sm:col-span-2 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <!-- Column A: Solutions & Core -->
          <div class="space-y-4">
            <h4 class="text-xs font-semibold text-white font-ui tracking-wider uppercase">
              Solutions &amp; Core
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-[13px]">
              <li v-for="link in footerNav.solutions" :key="link.label">
                <NuxtLink
                  :to="link.href"
                  class="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column B: Operations & Commerce -->
          <div class="space-y-4">
            <h4 class="text-xs font-semibold text-white font-ui tracking-wider uppercase">
              Operations
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-[13px]">
              <li v-for="link in footerNav.operations" :key="link.label">
                <NuxtLink
                  :to="link.href"
                  class="text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column C: Company -->
          <div class="space-y-4 col-span-2 sm:col-span-1">
            <h4 class="text-xs font-semibold text-white font-ui tracking-wider uppercase">
              Company
            </h4>
            <ul class="space-y-2.5 text-xs sm:text-[13px]">
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

        <!-- 3. Right Contact Column (lg:col-span-3) -->
        <div class="sm:col-span-2 lg:col-span-3 space-y-4">
          <h4 class="text-xs font-semibold text-white font-ui tracking-wider uppercase">
            Get in Touch
          </h4>

          <div class="space-y-3.5 pt-1">
            <!-- Email -->
            <a
              href="mailto:contact@kavorax.com"
              class="group flex items-start gap-3 text-xs text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <div
                class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0c141e] border border-white/10 text-brand shrink-0 group-hover:border-brand/40 transition-colors duration-200"
              >
                <Mail class="h-3.5 w-3.5" />
              </div>
              <div class="min-w-0">
                <span class="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </span>
                <span class="text-zinc-300 group-hover:text-brand font-mono transition-colors duration-200">
                  contact@kavorax.com
                </span>
              </div>
            </a>

            <!-- Location -->
            <div class="flex items-start gap-3 text-xs text-zinc-400">
              <div
                class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0c141e] border border-white/10 text-brand shrink-0"
              >
                <MapPin class="h-3.5 w-3.5" />
              </div>
              <div class="min-w-0">
                <span class="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  Headquarters
                </span>
                <span class="text-zinc-300">
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>

            <!-- Demo / Briefing -->
            <NuxtLink
              to="/demo"
              class="group flex items-start gap-3 text-xs text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <div
                class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0c141e] border border-white/10 text-brand shrink-0 group-hover:border-brand/40 transition-colors duration-200"
              >
                <Calendar class="h-3.5 w-3.5" />
              </div>
              <div class="min-w-0">
                <span class="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  Executive Briefing
                </span>
                <span class="text-zinc-300 group-hover:text-brand transition-colors duration-200">
                  Book a 45-Min Demo →
                </span>
              </div>
            </NuxtLink>

            <!-- Working Hours -->
            <div class="flex items-start gap-3 text-xs text-zinc-400">
              <div
                class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0c141e] border border-white/10 text-brand shrink-0"
              >
                <Clock class="h-3.5 w-3.5" />
              </div>
              <div class="min-w-0">
                <span class="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                  Advisory Hours
                </span>
                <span class="text-zinc-300">
                  Mon – Fri · 9:00 AM – 6:00 PM IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Bottom Legal & Copyright Bar -->
      <div
        class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500"
      >
        <p>© {{ currentYear }} KavoraX Global Private Limited. All rights reserved.</p>
        <div class="flex items-center gap-6 text-zinc-400 font-ui text-xs">
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors duration-200">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors duration-200">
            Terms of Service
          </NuxtLink>
          <NuxtLink to="/contact" class="hover:text-white transition-colors duration-200">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
