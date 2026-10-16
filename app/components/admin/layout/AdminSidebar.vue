<script setup lang="ts">
import {
  LayoutDashboard,
  Layers,
  Cpu,
  Building2,
  CreditCard,
  Mail,
  FileText,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-vue-next'
import { useAdminNavigation } from '~/composables/admin/useAdminNavigation'

const { navItems, isActive, isSidebarCollapsed, toggleSidebar } = useAdminNavigation()

function resolveIcon(iconName: string) {
  switch (iconName) {
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
      return LayoutDashboard
  }
}
</script>

<template>
  <aside
    class="hidden lg:flex flex-col border-r border-[#26313d] bg-[#080c10] transition-all duration-300 select-none z-30 h-screen sticky top-0"
    :class="isSidebarCollapsed ? 'w-20' : 'w-64'"
    aria-label="Admin Navigation Sidebar"
  >
    <!-- Brand / Header Section -->
    <div
      class="h-16 flex items-center border-b border-[#26313d] px-4 justify-between shrink-0 bg-[#080c10]"
    >
      <NuxtLink
        to="/admin"
        class="flex items-center gap-2.5 overflow-hidden group focus-visible:outline-emerald-400"
        :title="isSidebarCollapsed ? 'KavoraX Admin Dashboard' : undefined"
      >
        <!-- Logo Emblem -->
        <div
          class="w-9 h-9 rounded-lg bg-[#0f161f] border border-[#26313d] flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition-colors shadow-sm"
        >
          <div class="w-3.5 h-3.5 rotate-45 border-2 border-emerald-400 bg-emerald-500/20" />
        </div>

        <div v-if="!isSidebarCollapsed" class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-sm tracking-wider text-slate-100 uppercase">
              KAVORAX
            </span>
            <span class="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
              ADMIN
            </span>
          </div>
          <span class="text-[11px] text-[#94a3b8] truncate">Global Enterprise Suite</span>
        </div>
      </NuxtLink>

      <!-- Collapse Toggle Button -->
      <button
        type="button"
        class="w-7 h-7 rounded border border-[#26313d] bg-[#0f161f] text-[#94a3b8] hover:text-slate-100 hover:border-slate-600 flex items-center justify-center transition-colors"
        :title="isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        :aria-label="isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        @click="toggleSidebar"
      >
        <ChevronRight v-if="isSidebarCollapsed" class="w-4 h-4" />
        <ChevronLeft v-else class="w-4 h-4" />
      </button>
    </div>

    <!-- Navigation Items List -->
    <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 admin-scrollbar">
      <div v-if="!isSidebarCollapsed" class="px-3 pb-2 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
        Management
      </div>

      <NuxtLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.path"
        class="group relative flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-medium transition-all"
        :class="[
          isActive(item.path, item.exact)
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm'
            : 'text-[#94a3b8] hover:text-slate-200 hover:bg-[#0f161f] border border-transparent'
        ]"
        :title="isSidebarCollapsed ? item.label : undefined"
      >
        <!-- Active indicator strip -->
        <span
          v-if="isActive(item.path, item.exact)"
          class="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r bg-emerald-400"
          aria-hidden="true"
        />

        <component
          :is="resolveIcon(item.iconName)"
          class="w-4 h-4 shrink-0 transition-colors"
          :class="isActive(item.path, item.exact) ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'"
        />

        <span v-if="!isSidebarCollapsed" class="flex-1 truncate">
          {{ item.label }}
        </span>

        <!-- Badge -->
        <span
          v-if="!isSidebarCollapsed && item.badge"
          class="px-1.5 py-0.5 text-[10px] font-semibold rounded shrink-0"
          :class="[
            item.badgeVariant === 'emerald'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-[#1b2533] text-slate-300 border border-[#26313d]'
          ]"
        >
          {{ item.badge }}
        </span>
      </NuxtLink>
    </nav>

    <!-- Footer / Environment & Live Site Link -->
    <div class="p-3 border-t border-[#26313d] bg-[#080c10] space-y-2 shrink-0">
      <!-- Live Site Shortcut -->
      <NuxtLink
        to="/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-slate-400 hover:text-emerald-400 hover:bg-[#0f161f] border border-transparent hover:border-[#26313d] transition-all"
        :title="isSidebarCollapsed ? 'View Public Website' : undefined"
      >
        <ExternalLink class="w-4 h-4 shrink-0" />
        <span v-if="!isSidebarCollapsed" class="flex-1 truncate">Live Website</span>
      </NuxtLink>

      <!-- System Status telemetry pill -->
      <div
        v-if="!isSidebarCollapsed"
        class="p-2.5 rounded-md bg-[#0f161f] border border-[#26313d] text-[11px] text-[#94a3b8] flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span class="truncate">Production v4.6</span>
        </div>
        <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
      </div>
    </div>
  </aside>
</template>
