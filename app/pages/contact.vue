<script setup lang="ts">
import ContactHero from '~/components/contact/ContactHero.vue'
import ContactFormSection from '~/components/contact/ContactFormSection.vue'
import ContactChannels from '~/components/contact/ContactChannels.vue'
import ContactClosingCta from '~/components/contact/ContactClosingCta.vue'

useHead({
  title: 'Contact Us | KavoraX Global',
  meta: [
    {
      name: 'description',
      content:
        'Let’s start a conversation. Tell us about your business, your challenges, and what you’re looking to achieve. Connect with KavoraX Global Private Limited.'
    }
  ]
})
</script>

<template>
  <div class="relative bg-[#0b0f14] overflow-x-hidden">
    <!-- Contact Hero -->
    <ContactHero />

    <!-- Two-Column Contact Inquiry & Form Section -->
    <ContactFormSection />

    <!-- Additional Verified Engagement Channels -->
    <ContactChannels />

    <!-- Closing Call to Action -->
    <ContactClosingCta />
  </div>
</template>
