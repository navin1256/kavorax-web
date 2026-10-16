<script setup lang="ts">
import SolutionsHero from '~/components/solutions/SolutionsHero.vue'
import SolutionsBusinessNeeds from '~/components/solutions/SolutionsBusinessNeeds.vue'
import SolutionsAreas from '~/components/solutions/SolutionsAreas.vue'
import SolutionsEvaluation from '~/components/solutions/SolutionsEvaluation.vue'
import SolutionsIndustries from '~/components/solutions/SolutionsIndustries.vue'
import SolutionsClosingCta from '~/components/solutions/SolutionsClosingCta.vue'

useHead({
  title: 'Connected Solutions | KavoraX Global Private Limited',
  meta: [
    {
      name: 'description',
      content:
        'Explore how connected technology helps businesses simplify operations, improve visibility, and move forward with greater confidence.'
    },
    {
      property: 'og:title',
      content: 'Connected Solutions | KavoraX Global Private Limited'
    },
    {
      property: 'og:description',
      content:
        'Explore how connected technology helps businesses simplify operations, improve visibility, and move forward with greater confidence.'
    }
  ]
})
</script>

<template>
  <main class="min-h-screen bg-[#0b0f14] text-white">
    <!-- Hero Section -->
    <SolutionsHero />

    <!-- Common Business Needs Section -->
    <SolutionsBusinessNeeds />

    <!-- Solution Areas & Connected Approach Section -->
    <SolutionsAreas />

    <!-- How to Evaluate the Right Solution Section -->
    <SolutionsEvaluation />

    <!-- Related Industries Section -->
    <SolutionsIndustries />

    <!-- Final Closing CTA Section -->
    <SolutionsClosingCta />
  </main>
</template>
