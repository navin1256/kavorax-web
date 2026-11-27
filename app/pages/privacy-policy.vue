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
        'How KavoraX Global Private Limited collects, secures, encrypts, and processes venue operational information and customer data.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-transparent text-zinc-300 min-h-screen pt-24 pb-14 md:pt-28 md:pb-20 overflow-x-hidden selection:bg-brand selection:text-black">
    <div class="container mx-auto max-w-4xl px-6 md:px-8 relative z-10">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center gap-2 mb-6 font-sans text-xs text-zinc-400" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
        <span class="text-zinc-600">/</span>
        <span class="text-brand font-medium">Privacy Policy</span>
      </nav>

      <!-- Pill Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 mb-6">
        <span class="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
        <span class="text-brand text-xs font-semibold tracking-wider uppercase font-sans">Data Privacy &amp; Security</span>
      </div>

      <!-- Editorial Header -->
      <div class="mb-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.14] tracking-[-0.025em] not-italic text-white mb-4">
          Privacy Policy
        </h1>
        <p class="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-normal mb-2">
          Effective Date: January 1, 2026 · Last Updated: October 2026.
        </p>
        <p class="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-3xl">
          How KavoraX Global Private Limited collects, secures, encrypts, and processes venue operational information and customer data.
        </p>
      </div>

      <!-- Divider Line -->
      <div class="w-full h-px bg-white/[0.08] mb-8"></div>

      <!-- Policy Content Sections -->
      <div class="space-y-8 font-sans text-sm sm:text-base leading-relaxed text-zinc-300">
        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white">1. Scope &amp; Commitment</h2>
          <p class="text-sm sm:text-base font-normal leading-[1.65] text-white/70">
            At <strong class="text-white font-medium">KavoraX Global Private Limited</strong> ("KavoraX", "we", "our"), protecting the privacy, commercial confidentiality, and data autonomy of our venue partners and their customers is fundamental to our software engineering standards.
          </p>
          <p class="text-sm sm:text-base font-normal leading-[1.65] text-white/70">
            This Privacy Policy explains our practices regarding information collected through the KavoraX software ecosystem, including our point-of-sale terminals, handheld mobile devices, kitchen displays, web portals, and public digital ordering links.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white">2. Information We Process</h2>
          <p class="text-sm sm:text-base font-normal leading-[1.65] text-white/70">
            In providing business operations software, we process information categorized under:
          </p>
          <ul class="space-y-3 pl-2 text-zinc-400">
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Venue Account Information:</strong>
                <span class="text-zinc-400"> Business registration names, GSTIN/VAT identification numbers, authorized administrator contact credentials, and billing details.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Store Operational Records:</strong>
                <span class="text-zinc-400"> Transaction volume summaries, cashier shift logs, recipe stock deductions, and local hardware status reports.</span>
              </div>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-brand mt-1.5 shrink-0">•</span>
              <div>
                <strong class="text-brand font-medium">Customer Profile Records:</strong>
                <span class="text-zinc-400"> Customer phone numbers, order histories, and loyalty credit balances recorded at counter checkout by venue cashiers with customer consent.</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white">3. Data Ownership &amp; Non-Monetization Pledge</h2>
          <p class="text-sm sm:text-base font-normal leading-[1.65] text-white/70">
            Your venue data belongs exclusively to you. <strong class="text-white font-semibold">KavoraX does not sell, rent, broker, or monetize venue transaction histories or customer phone lists to third-party data aggregators or advertising networks.</strong>
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white">4. Security &amp; Encryption Standards</h2>
          <p class="text-sm sm:text-base font-normal leading-[1.65] text-white/70">
            All client-to-cloud communications are encrypted in transit using industry-standard TLS 1.3 cryptography. Offline local databases on certified KavoraX terminals use AES-256 encrypted local storage to safeguard cash drawer and customer records during off-grid operations.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] not-italic text-white">5. Contact Information</h2>
          <div class="p-6 md:p-8 rounded-2xl bg-[#0e1620] border border-white/10 space-y-3 text-zinc-300">
            <h3 class="text-white font-semibold text-base">Data Protection &amp; Privacy Office</h3>
            <p class="text-sm">
              <span class="text-zinc-400">Email:</span>
              <a href="mailto:info@kavorax.com" class="text-brand hover:underline ml-1">info@kavorax.com</a>
            </p>
            <p class="text-sm">
              <span class="text-zinc-400">Address:</span>
              <span class="text-zinc-300 ml-1">KavoraX Global Private Limited, Bengaluru, Karnataka, India</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

