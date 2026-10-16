<script setup lang="ts">
interface Props {
  src: string
  alt: string
  aspectRatio?: 'video' | 'wide' | 'square' | 'portrait' | 'auto'
  badgeText?: string
  coordinate?: string
  priority?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  aspectRatio: 'wide',
  badgeText: '',
  coordinate: '',
  priority: false
})

const aspectClasses = {
  video: 'aspect-video',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  auto: 'h-full min-h-[260px]'
}
</script>

<template>
  <div
    class="relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden group shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
  >
    <!-- Corner Crosshairs inspired by Active Theory -->
    <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
    <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
    <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>
    <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/70 select-none pointer-events-none" aria-hidden="true">+</div>

    <!-- Image Container with Smooth Zoom -->
    <div :class="['relative w-full overflow-hidden bg-zinc-900', aspectClasses[props.aspectRatio]]">
      <img
        :src="props.src"
        :alt="props.alt"
        :loading="props.priority ? 'eager' : 'lazy'"
        class="h-full w-full object-cover img-editorial-zoom opacity-85 group-hover:opacity-100 transition-opacity"
      >

      <!-- Cinematic Vignette Scrim -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/35 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <!-- Floating HUD Coordinate Strip -->
      <div
        v-if="props.badgeText || props.coordinate"
        class="absolute top-5 left-5 right-5 z-10 flex items-center justify-between font-mono text-[10px] text-zinc-300"
      >
        <span
          v-if="props.badgeText"
          class="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand" />
          {{ props.badgeText }}
        </span>
        <span
          v-if="props.coordinate"
          class="px-2 py-0.5 rounded bg-black/65 backdrop-blur-md border border-white/10 text-brand"
        >
          {{ props.coordinate }}
        </span>
      </div>

      <!-- Optional Bottom Caption Slot -->
      <div v-if="$slots.caption" class="absolute bottom-5 left-5 right-5 z-10">
        <slot name="caption" />
      </div>
    </div>
  </div>
</template>
