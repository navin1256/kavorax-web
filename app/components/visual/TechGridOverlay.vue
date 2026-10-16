<script setup lang="ts">
interface Props {
  density?: 'fine' | 'medium'
  opacity?: 'subtle' | 'faint'
}

withDefaults(defineProps<Props>(), {
  density: 'medium',
  opacity: 'subtle'
})
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10"
    aria-hidden="true"
  >
    <div
      :class="[
        'absolute inset-0 bg-tech-grid',
        density === 'fine' ? 'scale-75' : 'scale-100',
        opacity === 'faint' ? 'opacity-40' : 'opacity-70'
      ]"
      :style="{
        maskImage: 'radial-gradient(ellipse 70% 50% at 50% 30%, black 10%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 30%, black 10%, transparent 80%)'
      }"
    />
  </div>
</template>
