<script setup lang="ts">
import {
  Menu,
  Bell,
  Search,
  CheckCircle2
} from 'lucide-vue-next'
import { useAdminNavigation } from '~/composables/admin/useAdminNavigation'
import AdminBreadcrumbs from './AdminBreadcrumbs.vue'

const { toggleMobileNav } = useAdminNavigation()
</script>

<template>
  <header
    class="h-16 sticky top-0 z-20 border-b border-[#26313d] bg-[#080c10]/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
  >
    <!-- Left Section: Mobile Menu Trigger + Breadcrumbs -->
    <div class="flex items-center gap-3 sm:gap-4 min-w-0">
      <button
        type="button"
        class="lg:hidden w-9 h-9 rounded-md border border-[#26313d] bg-[#0f161f] text-slate-300 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors focus-visible:outline-emerald-400"
        aria-label="Open navigation menu"
        @click="toggleMobileNav"
      >
        <Menu class="w-5 h-5" />
      </button>

      <!-- Breadcrumbs in Header -->
      <div class="hidden sm:block truncate">
        <AdminBreadcrumbs />
      </div>

      <!-- Mobile Fallback Brand (small screens) -->
      <div class="sm:hidden flex items-center gap-2">
        <span class="font-bold text-sm tracking-wide text-slate-100">KAVORAX</span>
        <span class="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20">
          ADMIN
        </span>
      </div>
    </div>

    <!-- Right Section: System Search placeholder, Notification bell placeholder, User profile badge -->
    <div class="flex items-center gap-2 sm:gap-3 shrink-0">
      <!-- Search Trigger (visual placeholder) -->
      <div
        class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#26313d] bg-[#0b0f14] text-xs text-[#94a3b8]"
        title="Admin quick search placeholder"
      >
        <Search class="w-3.5 h-3.5 text-slate-500" />
        <span class="text-slate-400">Search console...</span>
        <kbd class="px-1.5 py-0.5 text-[10px] font-mono bg-[#0f161f] border border-[#26313d] rounded text-slate-400">⌘K</kbd>
      </div>

      <!-- Notifications Icon (Visual Placeholder only, no fake functionality) -->
      <div
        class="relative w-9 h-9 rounded-md border border-[#26313d] bg-[#0f161f] text-slate-400 flex items-center justify-center cursor-default select-none"
        title="Notifications (visual placeholder)"
        aria-label="Notifications"
      >
        <Bell class="w-4 h-4 text-slate-400" />
        <!-- Static indicator dot -->
        <span
          class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#080c10]"
          aria-hidden="true"
        />
      </div>

      <!-- User Profile Badge (Visual Placeholder, clearly labeled) -->
      <div
        class="flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-[#26313d] select-none"
      >
        <!-- Avatar Placeholder -->
        <div
          class="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-xs shrink-0 shadow-inner"
        >
          <span>KX</span>
        </div>

        <div class="hidden sm:flex flex-col text-left">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-medium text-slate-200">Admin Session</span>
            <CheckCircle2 class="w-3 h-3 text-emerald-400" />
          </div>
          <span class="text-[10px] text-slate-400">Platform Engineer</span>
        </div>
      </div>
    </div>
  </header>
</template>
