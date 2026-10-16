<script setup lang="ts">
import AboutHero from '~/components/about/AboutHero.vue'
import WhoWeAre from '~/components/about/WhoWeAre.vue'
import OurApproach from '~/components/about/OurApproach.vue'
import AboutArchitecture from '~/components/about/AboutArchitecture.vue'
import WhatGuidesUs from '~/components/about/WhatGuidesUs.vue'
import AboutFinalCta from '~/components/about/AboutFinalCta.vue'

useHead({
  title: 'About KavoraX Global | Connected Business Solutions',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX Global Private Limited builds connected business solutions that help organisations operate smarter, improve visibility, and scale with confidence.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Hero Section -->
    <AboutHero />

    <!-- Who We Are (Verified Company Information) -->
    <WhoWeAre />

    <!-- Our Approach (Understand Business, Connect Parts, Build for Change) -->
    <OurApproach />

    <!-- Connected Architecture Conceptual Visual -->
    <AboutArchitecture />

    <!-- What Guides Us (Guiding Principles) -->
    <WhatGuidesUs />

    <!-- Final Call to Action -->
    <AboutFinalCta />
  </div>
</template>
