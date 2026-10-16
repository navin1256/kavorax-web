<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(-1000)
const y = ref(-1000)
const isVisible = ref(false)

const onMouseMove = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onMouseMove)
  }
})
</script>

<template>
  <div
    v-if="isVisible"
    class="pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 -translate-x-1/2 -translate-y-1/2"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      width: '700px',
      height: '700px',
      background: 'radial-gradient(circle, rgba(16, 185, 129, 0.055) 0%, rgba(16, 185, 129, 0.015) 40%, transparent 70%)',
      borderRadius: '50%'
    }"
    aria-hidden="true"
  />
</template>
