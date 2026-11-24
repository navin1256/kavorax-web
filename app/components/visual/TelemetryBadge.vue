<script setup lang="ts">
interface Props {
  status?: 'active' | 'synced' | 'verified' | 'neutral'
  label: string
  metric?: string
}

const props = withDefaults(defineProps<Props>(), {
  status: 'active',
  metric: ''
})

const dotColors = {
  active: 'bg-brand',
  synced: 'bg-[#34d399]',
  verified: 'bg-emerald-400',
  neutral: 'bg-zinc-400'
}
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0e1622]/90 px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-sm backdrop-blur-sm"
  >
    <span
      :class="['h-1.5 w-1.5 rounded-full shrink-0', dotColors[props.status], props.status === 'active' ? 'animate-pulse-subtle' : '']"
      aria-hidden="true"
    />
    <span class="tracking-wider uppercase text-zinc-400">{{ props.label }}</span>
    <span v-if="props.metric" class="text-white font-semibold font-mono pl-1 border-l border-white/10">
      {{ props.metric }}
    </span>
  </span>
</template>
