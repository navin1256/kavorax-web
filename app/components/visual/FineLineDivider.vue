<script setup lang="ts">
interface Props {
  tag?: string
  glow?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: '',
  glow: false
})
</script>

<template>
  <div class="relative w-full py-6 flex items-center justify-center">
    <!-- Base 1px Hairline -->
    <div class="w-full h-px bg-white/[0.08] relative">
      <!-- Optional Emerald Beam in Center -->
      <div
        v-if="glow"
        class="absolute inset-y-0 left-1/4 right-1/4 bg-gradient-to-r from-transparent via-brand/40 to-transparent h-px"
        aria-hidden="true"
      />
    </div>

    <!-- Optional Center Coordinate Tag -->
    <div
      v-if="tag"
      class="absolute px-3 py-0.5 rounded bg-[#0b0f14] border border-white/10 font-mono text-[10px] text-zinc-400 tracking-wider uppercase flex items-center gap-1.5"
    >
      <span class="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
      <span>{{ tag }}</span>
    </div>
  </div>
</template>
