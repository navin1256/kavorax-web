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
  <div class="inline-flex items-center gap-2 font-ui text-xs tracking-wide">
    <span class="flex h-2 w-2 rounded-full bg-brand animate-pulse-subtle shrink-0" aria-hidden="true" />
    <span class="font-medium text-brand">
      {{ label }}
    </span>
    <span v-if="sublabel" class="hidden sm:inline text-zinc-400 font-normal">
      · {{ sublabel }}
    </span>
  </div>
</template>
