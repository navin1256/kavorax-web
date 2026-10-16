<script setup lang="ts">
interface Props {
  rows?: number
  label?: string
}

withDefaults(defineProps<Props>(), {
  rows: 4,
  label: 'Loading telemetry & records...'
})
</script>

<template>
  <div
    class="w-full rounded-lg border border-[#26313d] bg-[#0f161f] p-6 space-y-4 animate-pulse"
    role="status"
    :aria-label="label"
  >
    <div class="flex items-center justify-between border-b border-[#26313d]/60 pb-3">
      <div class="h-4 w-1/4 bg-slate-800 rounded" />
      <div class="h-4 w-16 bg-slate-800/80 rounded" />
    </div>

    <div class="space-y-3 pt-2">
      <div
        v-for="i in rows"
        :key="i"
        class="flex items-center justify-between gap-4 py-2"
      >
        <div class="flex items-center gap-3 w-1/2">
          <div class="w-8 h-8 rounded bg-slate-800/80 shrink-0" />
          <div class="space-y-1.5 w-full">
            <div class="h-3 w-3/4 bg-slate-800 rounded" />
            <div class="h-2.5 w-1/2 bg-slate-800/60 rounded" />
          </div>
        </div>
        <div class="h-3 w-20 bg-slate-800/70 rounded shrink-0" />
        <div class="h-3 w-16 bg-slate-800/50 rounded shrink-0 hidden sm:block" />
      </div>
    </div>

    <span class="sr-only">{{ label }}</span>
  </div>
</template>
