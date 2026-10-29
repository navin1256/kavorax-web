<script setup lang="ts">
definePageMeta({
  alias: ['/privacy']
})

useHead({
  title: 'Privacy Policy | KavoraX Global Private Limited',
  meta: [
    {
      name: 'description',
      content:
        'Official Privacy Policy detailing data protection, encryption, and privacy commitments for KavoraX Global software and connected enterprise systems.'
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
        <span class="text-brand font-medium">Privacy Policy</span>
      </nav>

      <!-- Editorial Header -->
      <div class="border-b border-white/[0.08] pb-10 mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/[0.08] border border-brand/25 text-brand text-xs font-ui tracking-wider uppercase mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-subtle" />
          <span>DATA PRIVACY &amp; SECURITY</span>
        </div>
        <h1 class="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.08] mb-4">
          Privacy Policy
        </h1>
        <p class="font-ui text-base sm:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl">
          Effective Date: January 1, 2026 · Last Updated: October 2026.<br />
          How KavoraX Global Private Limited collects, secures, encrypts, and processes venue operational information and customer data.
        </p>
      </div>

      <!-- Policy Content Sections -->
      <div class="space-y-12 font-ui text-sm sm:text-base leading-relaxed text-zinc-300">
        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">1. Scope &amp; Commitment</h2>
          <p>
            At <strong class="text-white">KavoraX Global Private Limited</strong> ("KavoraX", "we", "our"), protecting the privacy, commercial confidentiality, and data autonomy of our venue partners and their customers is fundamental to our software engineering standards.
          </p>
          <p>
            This Privacy Policy explains our practices regarding information collected through the KavoraX software ecosystem, including our point-of-sale terminals, handheld mobile devices, kitchen displays, web portals, and public digital ordering links.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">2. Information We Process</h2>
          <p>
            In providing business operations software, we process information categorized under:
          </p>
          <ul class="list-disc list-inside space-y-2.5 pl-2 text-zinc-300">
            <li><strong class="text-brand">Venue Account Information:</strong> Business registration names, GSTIN/VAT identification numbers, authorized administrator contact credentials, and billing details.</li>
            <li><strong class="text-brand">Store Operational Telemetry:</strong> Anonymized transaction throughput, cashier shift logs, recipe depletion rates, and terminal hardware diagnostic states.</li>
            <li><strong class="text-brand">Customer Profile Records:</strong> Customer phone numbers, order histories, and loyalty credit balances recorded at counter checkout by venue cashiers with customer consent.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">3. Data Ownership &amp; Non-Monetization Pledge</h2>
          <p>
            Your venue data belongs exclusively to you. <strong class="text-white">KavoraX does not sell, rent, broker, or monetize venue transaction histories or customer phone lists to third-party data aggregators or advertising networks.</strong>
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">4. Security &amp; Encryption Standards</h2>
          <p>
            All client-to-cloud communications are encrypted in transit using industry-standard TLS 1.3 cryptography. Offline local databases on certified KavoraX terminals use AES-256 encrypted local storage to safeguard cash drawer and customer records during off-grid operations.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="font-editorial text-2xl sm:text-3xl text-white font-medium lining-nums">5. Contact Information</h2>
          <div class="p-6 rounded-xl bg-[#0f1620] border border-white/[0.08] space-y-2 text-zinc-300">
            <p><strong class="text-white">Data Protection &amp; Privacy Office</strong></p>
            <p>Email: <a href="mailto:info@kavorax.com" class="text-brand hover:underline">info@kavorax.com</a></p>
            <p>Address: KavoraX Global Private Limited, Bengaluru, Karnataka, India</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
