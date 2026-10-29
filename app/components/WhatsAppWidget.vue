<script setup lang="ts">
import { computed } from 'vue'

const config = useRuntimeConfig()
const whatsappNumber = computed(() => {
  return config.public.whatsappNumber || '919629579358'
})

const defaultMessage = 'Hello KavoraX Global team, I would like to learn more about your enterprise POS and commerce architectures.'

const whatsappUrl = computed(() => {
  const cleanNumber = whatsappNumber.value.replace(/\D/g, '')
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`
})
</script>

<template>
  <aside
    aria-label="WhatsApp Quick Connect"
    class="fixed bottom-20 md:bottom-16 right-5 sm:right-6 z-40 print:hidden select-none transition-all duration-300"
  >
    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0b0f14] border border-emerald-500/30 text-emerald-400 shadow-[0_4px_24px_-4px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.5)] hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c10]"
      aria-label="Connect with KavoraX Enterprise Solutions on WhatsApp"
    >
      <!-- Subtle pulsing halo -->
      <span
        class="absolute -inset-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 animate-pulse pointer-events-none"
        aria-hidden="true"
      />

      <!-- WhatsApp SVG Icon -->
      <svg
        class="w-7 h-7 fill-current relative z-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.633-.929-2.238-.244-.589-.493-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.911 1.23 3.112.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351zM12.042 2C6.518 2 2.03 6.486 2.03 12.008c0 1.93.548 3.731 1.498 5.258L2 22l4.89-1.472a9.96 9.96 0 005.152 1.488c5.524 0 10.012-4.486 10.012-10.008C22.054 6.486 17.566 2 12.042 2zm0 18.272c-1.637 0-3.15-.49-4.42-1.332l-.317-.21-2.905.875.894-2.83-.23-.335a8.212 8.212 0 01-1.304-4.432c0-4.568 3.719-8.285 8.282-8.285 4.564 0 8.283 3.717 8.283 8.285 0 4.568-3.719 8.282-8.283 8.282z"
        />
      </svg>

      <!-- Hover Tooltip -->
      <span
        class="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-[#0f161f] border border-emerald-500/20 text-slate-200 text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl"
        role="tooltip"
      >
        Chat on WhatsApp
      </span>
    </a>
  </aside>
</template>
