<script setup lang="ts">
interface Props {
  type?: 'terminal' | 'tablet' | 'phone' | 'window'
  title?: string
  status?: string
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  type: 'terminal',
  title: 'KavoraX Terminal',
  status: 'Online · Sync OK',
  customClass: ''
})
</script>

<template>
  <div
    :class="[
      'relative rounded-2xl border border-white/[0.12] bg-[#141414] shadow-2xl overflow-hidden',
      type === 'phone' ? 'max-w-[340px] mx-auto rounded-[32px] border-white/20' : '',
      customClass
    ]"
    role="region"
    aria-label="Sample screen"
  >
    <!-- Hardware bezel top bar -->
    <div
      v-if="type !== 'phone'"
      class="flex h-10 items-center justify-between border-b border-white/[0.08] bg-[#1A1A1A] px-4 text-xs font-ui text-zinc-400 select-none"
    >
      <div class="flex items-center gap-2">
        <span class="inline-block h-2.5 w-2.5 rounded-full bg-brand" />
        <span class="font-medium text-zinc-300">{{ title }}</span>
      </div>
      <div class="flex items-center gap-3 text-zinc-400 font-ui text-xs">
        <span>{{ status }}</span>
        <span>12:45 PM</span>
      </div>
    </div>

    <!-- Phone top bar (speaker & camera notch) -->
    <div
      v-else
      class="flex h-7 items-center justify-between px-6 pt-2 text-xs text-zinc-400 font-ui select-none"
    >
      <span>12:45</span>
      <div class="h-3 w-20 rounded-full bg-[#242424]" />
      <div class="flex items-center gap-1.5">
        <span class="h-2 w-2 rounded-full bg-brand" />
        <span>5G</span>
      </div>
    </div>

    <!-- Screen Content Slot -->
    <div class="relative overflow-x-auto bg-[#0F0F0F] text-white">
      <slot />
    </div>
  </div>
</template>
