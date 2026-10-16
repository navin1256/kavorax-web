<script setup lang="ts">
import { ChevronRight, Home } from 'lucide-vue-next'
import { useAdminNavigation } from '~/composables/admin/useAdminNavigation'

const { breadcrumbs } = useAdminNavigation()
</script>

<template>
  <nav aria-label="Admin Breadcrumb" class="flex items-center text-xs sm:text-sm">
    <ol class="flex items-center flex-wrap gap-1 sm:gap-1.5 text-[#94a3b8]">
      <li
        v-for="(crumb, idx) in breadcrumbs"
        :key="crumb.path"
        class="flex items-center gap-1 sm:gap-1.5"
      >
        <ChevronRight
          v-if="idx > 0"
          class="w-3.5 h-3.5 text-slate-600 shrink-0"
          aria-hidden="true"
        />

        <span v-if="crumb.current" class="font-medium text-slate-200" aria-current="page">
          {{ crumb.label }}
        </span>

        <NuxtLink
          v-else
          :to="crumb.path"
          class="hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          <Home v-if="idx === 0" class="w-3 h-3 text-slate-500" />
          <span>{{ crumb.label }}</span>
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
