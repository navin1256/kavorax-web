<script setup lang="ts">
import { computed } from 'vue'
import {
  LayoutDashboard,
  Layers,
  Cpu,
  Building2,
  CreditCard,
  Mail,
  FileText,
  SlidersHorizontal,
  Shield
} from 'lucide-vue-next'

interface Props {
  title: string
  description?: string
  iconName?: string
  badge?: string
}

const props = defineProps<Props>()

const iconComponent = computed(() => {
  switch (props.iconName) {
    case 'LayoutDashboard':
      return LayoutDashboard
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
    default:
      return Shield
  }
})
</script>

<template>
  <div
    class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#26313d]"
  >
    <div class="flex items-start sm:items-center gap-3">
      <div
        v-if="iconName"
        class="w-10 h-10 rounded-lg bg-[#0f161f] border border-[#26313d] flex items-center justify-center text-emerald-400 shrink-0 shadow-inner mt-0.5 sm:mt-0"
      >
        <slot name="icon">
          <component :is="iconComponent" class="w-5 h-5" />
        </slot>
      </div>

      <div>
        <div class="flex items-center gap-2.5 flex-wrap">
          <h1 class="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100">
            {{ title }}
          </h1>
          <span
            v-if="badge"
            class="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            {{ badge }}
          </span>
        </div>
        <p v-if="description" class="text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-2xl">
          {{ description }}
        </p>
      </div>
    </div>

    <div v-if="$slots.actions" class="flex items-center gap-3 shrink-0 self-start sm:self-auto">
      <slot name="actions" />
    </div>
  </div>
</template>
