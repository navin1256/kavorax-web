<script setup lang="ts">
definePageMeta({
  alias: ['/terms']
})

useHead({
  title: 'Terms of Service | KavoraX Global Private Limited',
  meta: [
    {
      name: 'description',
      content:
        'The terms for using KavoraX Global Private Limited software and apps.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#080c10] bg-technical-grid text-zinc-300 min-h-screen py-24 md:py-32 overflow-x-hidden selection:bg-brand selection:text-black">
    <div class="container mx-auto max-w-4xl px-6 md:px-8 relative z-10">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center gap-2 mb-6 font-sans text-xs text-zinc-400" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
        <span class="text-zinc-600">/</span>
        <span class="text-brand font-medium">Terms of Service</span>
      </nav>

      <!-- Pill Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-6">
        <span class="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
        <span class="text-brand text-xs font-semibold tracking-wider uppercase font-sans">Legal &amp; Service Terms</span>
      </div>

      <!-- Editorial Header -->
      <div class="mb-10">
        <h1 class="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.08] mb-4">
          Terms of Service
        </h1>
        <p class="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-normal mb-2">
          Effective Date: January 1, 2026 · Last Updated: October 2026.
        </p>
        <p class="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-3xl">
          These terms govern your access to and use of KavoraX Global Private Limited's software platform and apps.
        </p>
      </div>

      <!-- Divider Line -->
      <div class="w-full h-px bg-white/[0.08] mb-12"></div>

      <!-- Terms Content Sections -->
      <div class="space-y-12 font-sans text-sm sm:text-base leading-relaxed text-zinc-300">
        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-normal">1. Acceptance of Terms</h2>
          <p class="leading-relaxed text-zinc-400">
            By accessing, deploying, subscribing to, or operating the KavoraX software platform (including our Point of Sale terminals, kitchen displays, inventory sync engine, digital ordering portals, and cloud analytics dashboards), you ("Customer", "Venue Operator", or "Subscriber") agree to be bound by these Terms of Service ("Terms") entered into with <strong class="text-white font-medium">KavoraX Global Private Limited</strong> ("KavoraX", "we", "our", or "us").
          </p>
          <p class="leading-relaxed text-zinc-400">
            If you are entering into these Terms on behalf of an enterprise entity, partnership, or retail franchise, you represent and warrant that you possess full corporate authorization to bind that organization.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-normal">2. Service Architecture &amp; Subscribed Modules</h2>
          <p class="leading-relaxed text-zinc-400">
            KavoraX provides a modular, connected business operations platform designed for retail shops, restaurants, cafes, supermarkets, salons, and multi-location enterprises across India and the GCC. Services include but are not limited to:
          </p>
          <ul class="space-y-3 pl-2 text-zinc-400">
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">POS &amp; Billing:</strong>
                <span class="text-zinc-400"> High-speed counter transaction processing, split tender receipts, and offline transaction caching.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Inventory &amp; Stock:</strong>
                <span class="text-zinc-400"> Real-time SKU tracking, recipe-level depletion, automated vendor purchase orders, and multi-outlet stock transfers.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">CRM &amp; Loyalty:</strong>
                <span class="text-zinc-400"> Customer visit logs, automated loyalty tiers, WhatsApp/SMS digital invoices, and promotion dispatch.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Digital Ordering &amp; Delivery:</strong>
                <span class="text-zinc-400"> QR code table menus, online ordering web apps, rider dispatch, and fleet routing.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Kitchen Display System (KDS):</strong>
                <span class="text-zinc-400"> Station item routing, ticket aging timers, and expediter bump controls.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Multi-Location &amp; Analytics:</strong>
                <span class="text-zinc-400"> Consolidated headquarters governance, centralized price control, and executive telemetry.</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-normal">3. Offline-First Architecture &amp; Synchronization</h2>
          <p class="leading-relaxed text-zinc-400">
            The software utilizes an offline-first distributed architecture. Local transactions committed during internet disruptions remain valid and automatically sync with the cloud upon reconnection. Operators are responsible for safeguarding local hardware terminals.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-normal">4. Confidentiality &amp; Intellectual Property</h2>
          <p class="leading-relaxed text-zinc-400">
            All source code, user interface designs, algorithmic workflows, trademarks, and documentation associated with KavoraX remain the exclusive intellectual property of KavoraX Global Private Limited. Venue transaction datasets and customer lists remain the exclusive property of the subscribing venue partner.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-normal">5. Governing Law &amp; Jurisdiction</h2>
          <p class="leading-relaxed text-zinc-400">
            These Terms shall be governed by and construed in accordance with the laws of India. Any legal dispute or claim arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-normal">6. Legal &amp; Compliance Inquiries</h2>
          <div class="p-6 md:p-8 rounded-2xl bg-[#0e1620] border border-white/10 space-y-3 text-zinc-300">
            <h3 class="text-white font-semibold text-base">Corporate Legal Counsel</h3>
            <p class="text-sm">
              <span class="text-zinc-400">Email:</span>
              <a href="mailto:info@kavorax.com" class="text-brand hover:underline ml-1">info@kavorax.com</a>
            </p>
            <p class="text-sm">
              <span class="text-zinc-400">Jurisdiction:</span>
              <span class="text-zinc-300 ml-1">KavoraX Global Private Limited, Bengaluru, Karnataka, India</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
