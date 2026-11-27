<script setup lang="ts">
import ProductsHero from '~/components/products/ProductsHero.vue'
import ProductModulesSection from '~/components/products/ProductModulesSection.vue'
import SolutionsOverview from '~/components/products/SolutionsOverview.vue'
import ConnectedArchitecture from '~/components/products/ConnectedArchitecture.vue'
import BusinessValue from '~/components/products/BusinessValue.vue'
import SolutionSelection from '~/components/products/SolutionSelection.vue'
import ProductsFinalCta from '~/components/products/ProductsFinalCta.vue'

definePageMeta({
  alias: ['/product', '/04_products', '/04-products']
})

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
  <div class="relative bg-transparent overflow-x-hidden">
    <!-- Products Hero Section -->
    <ProductsHero />

    <!-- 10 Product & Solution Modules Directory -->
    <ProductModulesSection />

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
