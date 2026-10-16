<script setup lang="ts">
import IndustriesHero from '~/components/industries/IndustriesHero.vue'
import IndustriesOverview from '~/components/industries/IndustriesOverview.vue'
import IndustryDetailSections from '~/components/industries/IndustryDetailSections.vue'
import ConnectedOperations from '~/components/industries/ConnectedOperations.vue'
import IndustriesConsultationCta from '~/components/industries/IndustriesConsultationCta.vue'

useHead({
  title: 'Enterprise Industries & Solutions | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'Explore how KavoraX builds connected business solutions designed to improve visibility, streamline operations and adapt across enterprise industries.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Hero Section -->
    <IndustriesHero />

    <!-- 4 Industry Verticals Overview -->
    <IndustriesOverview />

    <!-- Alternating Industry Detail Sections (4 verified categories) -->
    <IndustryDetailSections />

    <!-- Connected Business Operations Section -->
    <ConnectedOperations />

    <!-- Industry Consultation Final CTA -->
    <IndustriesConsultationCta />
  </div>
</template>
