<script setup lang="ts">
interface Props {
  index?: string
  label: string
  sublabel?: string
}

withDefaults(defineProps<Props>(), {
  index: '',
  sublabel: ''
})
</script>

<template>
  <div class="inline-flex items-center gap-2.5 font-ui text-xs tracking-widest uppercase">
    <span class="flex h-2 w-2 rounded-full bg-brand animate-pulse-subtle shrink-0" aria-hidden="true" />
    <span v-if="index" class="font-mono text-zinc-500 font-medium">
      {{ index }}
    </span>
    <span v-if="index" class="text-white/20 select-none" aria-hidden="true">//</span>
    <span class="font-semibold text-brand tracking-wider">
      {{ label }}
    </span>
    <span v-if="sublabel" class="hidden sm:inline text-zinc-400 font-normal">
      — {{ sublabel }}
    </span>
  </div>
</template>
