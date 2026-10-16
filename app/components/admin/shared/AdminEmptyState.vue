<script setup lang="ts">
import { computed } from 'vue'
import {
  FolderOpen,
  Layers,
  Cpu,
  Building2,
  CreditCard,
  Mail,
  FileText,
  SlidersHorizontal,
  Search,
  Plus
} from 'lucide-vue-next'

interface Props {
  title: string
  description: string
  iconName?: string
  actionLabel?: string
  actionRoute?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconName: 'FolderOpen',
  actionLabel: '',
  actionRoute: ''
})

defineEmits<{
  (e: 'action'): void
}>()

const iconComponent = computed(() => {
  switch (props.iconName) {
    case 'Layers':
      return Layers
    case 'Cpu':
      return Cpu
    case 'Building2':
      return Building2
    case 'CreditCard':
      return CreditCard
    case 'Mail':
      return Mail
    case 'FileText':
      return FileText
    case 'SlidersHorizontal':
      return SlidersHorizontal
    case 'Search':
      return Search
    default:
      return FolderOpen
  }
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-lg border border-[#26313d] bg-[#0f161f]/60 backdrop-blur-sm"
  >
    <div
      class="w-12 h-12 rounded-lg bg-[#0b0f14] border border-[#26313d] flex items-center justify-center text-[#94a3b8] mb-4 shadow-inner"
    >
      <slot name="icon">
        <component :is="iconComponent" class="w-6 h-6 text-emerald-400/90" />
      </slot>
    </div>

    <h3 class="text-base sm:text-lg font-medium text-slate-100 mb-1">
      {{ title }}
    </h3>

    <p class="text-sm text-[#94a3b8] max-w-md leading-relaxed mb-6">
      {{ description }}
    </p>

    <div v-if="$slots.actions || actionLabel" class="flex flex-wrap items-center justify-center gap-3">
      <slot name="actions">
        <NuxtLink
          v-if="actionRoute"
          :to="actionRoute"
          class="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
        >
          <Plus class="w-4 h-4" />
          <span>{{ actionLabel }}</span>
        </NuxtLink>
        <button
          v-else-if="actionLabel"
          type="button"
          class="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          @click="$emit('action')"
        >
          <Plus class="w-4 h-4" />
          <span>{{ actionLabel }}</span>
        </button>
      </slot>
    </div>
  </div>
</template>
