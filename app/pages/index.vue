<script setup lang="ts">
import HeroSection from '~/components/home/HeroSection.vue'
import EditorialIntro from '~/components/home/EditorialIntro.vue'
import ConnectedArchitectureVisual from '~/components/home/ConnectedArchitectureVisual.vue'
import ProductShowcases from '~/components/home/ProductShowcases.vue'
import PhotographySolutions from '~/components/home/PhotographySolutions.vue'
import IndustryPreview from '~/components/home/IndustryPreview.vue'
import BrandStatement from '~/components/home/BrandStatement.vue'
import FinalCta from '~/components/home/FinalCta.vue'

useHead({
  title: 'KavoraX Global | Technology that moves business forward',
  meta: [
    {
      name: 'description',
      content:
        'KavoraX builds connected business solutions that help organisations operate smarter, serve customers better and scale with confidence.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#080c10] overflow-x-hidden">
    <!-- 1. Cinematic Hero with focal point & scroll indicator -->
    <HeroSection />

    <!-- 2. Editorial Introduction -->
    <EditorialIntro />

    <!-- 3. Connected Architecture Visual -->
    <ConnectedArchitectureVisual />

    <!-- 4. Product Showcases -->
    <ProductShowcases />

    <!-- 5. Solutions Section -->
    <PhotographySolutions />

    <!-- 6. Industry Preview -->
    <IndustryPreview />

    <!-- 7. Why Businesses Choose KavoraX -->
    <BrandStatement />

    <!-- 8. Closing CTA -->
    <FinalCta />
  </div>
</template>
