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
        'Official Terms of Service governing access to KavoraX Global software platform, enterprise cloud telemetry, and connected venue applications.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#0b0f14] text-zinc-300 py-16 md:py-24 overflow-x-hidden">
    <!-- Ambient emerald backlight glow -->
    <div
      class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand/[0.04] blur-[140px] rounded-full pointer-events-none -z-10"
      aria-hidden="true"
    />

    <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center gap-2 mb-8 font-ui text-xs text-zinc-400" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
        <span class="text-zinc-600">/</span>
        <span class="text-brand font-medium">Terms of Service</span>
      </nav>

      <!-- Editorial Header -->
      <div class="border-b border-white/[0.08] pb-10 mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/[0.08] border border-brand/25 text-brand text-xs font-ui tracking-wider uppercase mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-subtle" />
          <span>LEGAL &amp; COMPLIANCE</span>
        </div>
        <h1 class="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.08] mb-4">
          Terms of Service
        </h1>
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl">
          Effective Date: January 1, 2026 · Last Updated: October 2026.<br />
          These terms govern your access to and use of KavoraX Global Private Limited's software platform, cloud telemetry, and connected venue applications.
        </p>
      </div>

      <!-- Terms Content Sections -->
      <div class="space-y-12 font-ui text-sm sm:text-base leading-relaxed text-zinc-300">
        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">1. Acceptance of Terms</h2>
          <p>
            By accessing, deploying, subscribing to, or operating the KavoraX software platform (including our Point of Sale terminals, kitchen displays, inventory sync engine, digital ordering portals, and cloud analytics dashboards), you ("Customer", "Venue Operator", or "Subscriber") agree to be bound by these Terms of Service ("Terms") entered into with <strong class="text-white">KavoraX Global Private Limited</strong> ("KavoraX", "we", "our", or "us").
          </p>
          <p>
            If you are entering into these Terms on behalf of an enterprise entity, partnership, or retail franchise, you represent and warrant that you possess full corporate authorization to bind that organization.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">2. Service Architecture &amp; Subscribed Modules</h2>
          <p>
            KavoraX provides a modular, connected business operations platform designed for retail shops, restaurants, cafes, supermarkets, salons, and multi-location enterprises across India and the GCC. Services include but are not limited to:
          </p>
          <ul class="list-disc list-inside space-y-2.5 pl-2 text-zinc-300">
            <li><strong class="text-brand">POS &amp; Billing:</strong> High-speed counter transaction processing, split tender receipts, and offline transaction caching.</li>
            <li><strong class="text-brand">Inventory &amp; Stock:</strong> Real-time SKU tracking, recipe-level depletion, automated vendor purchase orders, and multi-outlet stock transfers.</li>
            <li><strong class="text-brand">CRM &amp; Loyalty:</strong> Customer visit logs, automated loyalty tiers, WhatsApp/SMS digital invoices, and promotion dispatch.</li>
            <li><strong class="text-brand">Digital Ordering &amp; Delivery:</strong> QR code table menus, online ordering web apps, rider dispatch, and fleet routing.</li>
            <li><strong class="text-brand">Kitchen Display System (KDS):</strong> Station item routing, ticket aging timers, and expediter bump controls.</li>
            <li><strong class="text-brand">Multi-Location &amp; Analytics:</strong> Consolidated headquarters governance, centralized price control, and executive telemetry.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">3. Offline-First Architecture &amp; Synchronization</h2>
          <p>
            The software utilizes an offline-first distributed architecture. Local transactions committed during internet disruptions remain valid and automatically sync with the cloud upon reconnection. Operators are responsible for safeguarding local hardware terminals.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">4. Confidentiality &amp; Intellectual Property</h2>
          <p>
            All source code, user interface designs, algorithmic workflows, trademarks, and documentation associated with KavoraX remain the exclusive intellectual property of KavoraX Global Private Limited. Venue transaction datasets and customer lists remain the exclusive property of the subscribing venue partner.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">5. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any legal dispute or claim arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
