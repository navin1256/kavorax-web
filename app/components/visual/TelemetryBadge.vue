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
  synced: 'bg-[#08EC8D]',
  verified: 'bg-brand',
  neutral: 'bg-zinc-400'
}
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#161616] px-2.5 py-1 font-ui text-xs text-zinc-300 shadow-sm"
  >
    <span
      :class="['h-1.5 w-1.5 rounded-full shrink-0', dotColors[props.status], props.status === 'active' ? '' : '']"
      aria-hidden="true"
    />
    <span class="tracking-wider uppercase text-zinc-400">{{ props.label }}</span>
    <span v-if="props.metric" class="text-white font-semibold font-mono pl-1 border-l border-white/10">
      {{ props.metric }}
    </span>
  </span>
</template>
