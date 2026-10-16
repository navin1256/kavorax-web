<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  LayoutDashboard,
  Layers,
  Cpu,
  Building2,
  CreditCard,
  Mail,
  FileText,
  SlidersHorizontal,
  X,
  ExternalLink,
  ShieldCheck
} from 'lucide-vue-next'
import { useAdminNavigation } from '~/composables/admin/useAdminNavigation'

const { navItems, isActive, isMobileNavOpen, closeMobileNav } = useAdminNavigation()
const route = useRoute()

// Auto close on route change
watch(
  () => route.path,
  () => {
    closeMobileNav()
  }
)

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
  <!-- Mobile Drawer Backdrop and Container -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileNavOpen"
        class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden"
        aria-hidden="true"
        @click="closeMobileNav"
      />
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMobileNavOpen"
        class="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-[#080c10] border-r border-[#26313d] z-50 flex flex-col lg:hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Admin Navigation"
      >
        <!-- Mobile Drawer Header -->
        <div class="h-16 px-4 border-b border-[#26313d] flex items-center justify-between shrink-0 bg-[#080c10]">
          <NuxtLink
            to="/admin"
            class="flex items-center gap-2.5"
            @click="closeMobileNav"
          >
            <div class="w-8 h-8 rounded-lg bg-[#0f161f] border border-[#26313d] flex items-center justify-center">
              <div class="w-3 h-3 rotate-45 border-2 border-emerald-400 bg-emerald-500/20" />
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="font-bold text-sm tracking-wider text-slate-100 uppercase">KAVORAX</span>
                <span class="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20">
                  ADMIN
                </span>
              </div>
              <span class="text-[10px] text-[#94a3b8] block">Enterprise Console</span>
            </div>
          </NuxtLink>

          <button
            type="button"
            class="w-8 h-8 rounded-md border border-[#26313d] text-slate-400 hover:text-slate-100 hover:bg-[#0f161f] flex items-center justify-center transition-colors"
            aria-label="Close navigation"
            @click="closeMobileNav"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <!-- Mobile Drawer Nav Items -->
        <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-1 admin-scrollbar">
          <div class="px-3 pb-2 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
            Navigation
          </div>

          <NuxtLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all"
            :class="[
              isActive(item.path, item.exact)
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm'
                : 'text-[#94a3b8] hover:text-slate-200 hover:bg-[#0f161f] border border-transparent'
            ]"
            @click="closeMobileNav"
          >
            <component
              :is="resolveIcon(item.iconName)"
              class="w-4 h-4 shrink-0"
              :class="isActive(item.path, item.exact) ? 'text-emerald-400' : 'text-slate-400'"
            />

            <span class="flex-1 truncate">{{ item.label }}</span>

            <span
              v-if="item.badge"
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

        <!-- Mobile Drawer Footer -->
        <div class="p-3 border-t border-[#26313d] bg-[#080c10] space-y-2 shrink-0">
          <NuxtLink
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-slate-400 hover:text-emerald-400 hover:bg-[#0f161f] border border-transparent hover:border-[#26313d] transition-all"
            @click="closeMobileNav"
          >
            <ExternalLink class="w-4 h-4 shrink-0" />
            <span class="flex-1">Visit Live Website</span>
          </NuxtLink>

          <div class="p-2 rounded-md bg-[#0f161f] border border-[#26313d] text-[11px] text-[#94a3b8] flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
            <ShieldCheck class="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
