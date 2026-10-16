<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  badge?: string
}

defineProps<Props>()
</script>

<template>
  <section
    class="rounded-lg border border-[#26313d] bg-[#0f161f] shadow-sm overflow-hidden"
  >
    <header
      v-if="title || $slots.header || $slots.actions"
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-b border-[#26313d] bg-[#0b0f14]/50"
    >
      <slot name="header">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-sm sm:text-base font-semibold text-slate-100">
              {{ title }}
            </h2>
            <span
              v-if="badge"
              class="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              {{ badge }}
            </span>
          </div>
          <p v-if="description" class="text-xs sm:text-sm text-[#94a3b8] mt-0.5">
            {{ description }}
          </p>
        </div>
      </slot>

      <div v-if="$slots.actions" class="flex items-center gap-2 shrink-0">
        <slot name="actions" />
      </div>
    </header>

    <div class="p-5">
      <slot />
    </div>

    <footer
      v-if="$slots.footer"
      class="px-5 py-3 border-t border-[#26313d] bg-[#0b0f14]/40 text-xs text-[#94a3b8]"
    >
      <slot name="footer" />
    </footer>
  </section>
</template>
