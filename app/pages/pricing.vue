<script setup lang="ts">
import PricingHero from '~/components/pricing/PricingHero.vue'
import PricingApproach from '~/components/pricing/PricingApproach.vue'
import SolutionComparison from '~/components/pricing/SolutionComparison.vue'
import CustomEngagementCta from '~/components/pricing/CustomEngagementCta.vue'
import PricingFaq from '~/components/pricing/PricingFaq.vue'
import PricingFinalCta from '~/components/pricing/PricingFinalCta.vue'

useHead({
  title: 'Pricing & Engagement | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'A solution model built around your business. Discuss requirements, scope, and technical alignment for KavoraX enterprise platforms.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Hero Section -->
    <PricingHero />

    <!-- 3-Step Consultative Approach -->
    <PricingApproach />

    <!-- 3 Solution Pillars Comparison -->
    <SolutionComparison />

    <!-- Custom Engagement Section -->
    <CustomEngagementCta />

    <!-- Accessible FAQ Accordion -->
    <PricingFaq />

    <!-- Restrained Final Call to Action -->
    <PricingFinalCta />
  </div>
</template>
