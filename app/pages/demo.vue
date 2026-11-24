<script setup lang="ts">
import DemoHero from '~/components/demo/DemoHero.vue'
import DemoFormSection from '~/components/demo/DemoFormSection.vue'
import DemoWhatToExpect from '~/components/demo/DemoWhatToExpect.vue'
import DemoClosingCta from '~/components/demo/DemoClosingCta.vue'

useHead({
  title: 'Book a Demo | KavoraX Global Private Limited',
  meta: [
    {
      name: 'description',
      content:
        'See what better-connected business looks like. Request a product demonstration of the KavoraX Operations Platform, Analytics, and Integration Hub.'
    },
    {
      property: 'og:title',
      content: 'Book a Demo | KavoraX Global Private Limited'
    },
    {
      property: 'og:description',
      content:
        'See what better-connected business looks like. Request a product demonstration of the KavoraX Operations Platform, Analytics, and Integration Hub.'
    }
  ],
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/executive-briefing.webp',
      type: 'image/webp',
      fetchpriority: 'high'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0b0f14] text-white">
    <!-- Hero Section -->
    <DemoHero />

    <!-- Request Form Section -->
    <DemoFormSection />

    <!-- What to Expect Section -->
    <DemoWhatToExpect />

    <!-- Closing CTA Section -->
    <DemoClosingCta />
  </div>
</template>
