<script setup lang="ts">
import ProductsHero from '~/components/products/ProductsHero.vue'
import SolutionsOverview from '~/components/products/SolutionsOverview.vue'
import ConnectedArchitecture from '~/components/products/ConnectedArchitecture.vue'
import BusinessValue from '~/components/products/BusinessValue.vue'
import SolutionSelection from '~/components/products/SolutionSelection.vue'
import ProductsFinalCta from '~/components/products/ProductsFinalCta.vue'

useHead({
  title: 'Products & Connected Solutions | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'Explore connected business solutions designed to simplify operations, improve visibility and help your organisation scale with confidence.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Products Hero Section -->
    <ProductsHero />

    <!-- Three Solution Categories Overview -->
    <SolutionsOverview />

    <!-- Connected Architecture Interconnection Section -->
    <ConnectedArchitecture />

    <!-- Business Value Foundations -->
    <BusinessValue />

    <!-- Solution Selection / Guidance -->
    <SolutionSelection />

    <!-- Final Products Call to Action -->
    <ProductsFinalCta />
  </div>
</template>
