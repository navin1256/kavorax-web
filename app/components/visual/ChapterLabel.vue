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
  <div class="inline-flex items-center gap-2 font-ui text-[13px] tracking-wide">
    <span class="font-medium text-brand">
      {{ label }}
    </span>
    <span v-if="sublabel" class="hidden sm:inline text-zinc-400 font-normal">
      · {{ sublabel }}
    </span>
  </div>
</template>
