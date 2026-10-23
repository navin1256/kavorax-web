<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import CookieBanner from '~/components/CookieBanner.vue'
import WhatsAppWidget from '~/components/WhatsAppWidget.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-[#0b0f14] text-foreground selection:bg-brand/20 selection:text-brand relative overflow-x-hidden max-w-full"
  >
    <AppHeader />
    <main class="flex-1 max-w-full overflow-x-hidden">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppWidget />
    <CookieBanner />
  </div>
</template>
