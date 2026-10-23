<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  try {
    const hasConsented = localStorage.getItem('kavorax-cookie-consent')
    if (!hasConsented) {
      isVisible.value = true
    }
  } catch (e) {
    // Graceful fallback if localStorage is disabled or restricted
    isVisible.value = false
  }
})

const acceptAll = () => {
  try {
    localStorage.setItem('kavorax-cookie-consent', 'accepted')
  } catch (e) {}
  isVisible.value = false
}

const rejectAll = () => {
  try {
    localStorage.setItem('kavorax-cookie-consent', 'rejected')
  } catch (e) {}
  isVisible.value = false
}
</script>

<template>
  <div
    v-if="isVisible"
    role="region"
    aria-label="Cookie consent banner"
    class="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-2xl z-50 bg-[#0c141e]/95 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] font-ui text-zinc-300"
  >
    <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
      We use cookies to analyze site traffic and enhance our connected enterprise software experience. Learn more in our
      <NuxtLink to="/privacy-policy" class="text-brand hover:underline">
        Privacy Policy
      </NuxtLink>.
    </p>
    <div class="flex items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
      <button
        type="button"
        @click="rejectAll"
        class="px-3.5 py-1.5 rounded-lg border border-white/10 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors cursor-pointer"
      >
        Reject
      </button>
      <button
        type="button"
        @click="acceptAll"
        class="px-4 py-1.5 rounded-lg bg-brand text-black font-semibold text-xs hover:bg-brand/90 transition-all cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.25)]"
      >
        Accept All
      </button>
    </div>
  </div>
</template>
