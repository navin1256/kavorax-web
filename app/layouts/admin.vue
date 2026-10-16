<script setup lang="ts">
import '~/assets/css/admin.css'
import AdminSidebar from '~/components/admin/layout/AdminSidebar.vue'
import AdminHeader from '~/components/admin/layout/AdminHeader.vue'
import AdminMobileNav from '~/components/admin/layout/AdminMobileNav.vue'
</script>

<template>
  <div class="admin-shell min-h-screen bg-[#0b0f14] text-slate-100 flex flex-col lg:flex-row antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
    <!-- Accessible Mobile Navigation Drawer -->
    <AdminMobileNav />

    <!-- Desktop Sidebar -->
    <AdminSidebar />

    <!-- Main Content Stage -->
    <div class="flex-1 flex flex-col min-w-0 min-h-screen">
      <!-- Top Administrative Header -->
      <AdminHeader />

      <!-- Page Outlet Area -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
        <slot />
      </main>

      <!-- Admin Status Footer -->
      <footer class="border-t border-[#26313d] bg-[#080c10]/60 px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#94a3b8] flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>KavoraX Global Admin Environment</span>
          <span class="text-slate-600">·</span>
          <span>Read-only starter console</span>
        </div>
        <div class="flex items-center gap-4 text-[11px] text-slate-400">
          <span>Nuxt 4 Architecture</span>
          <NuxtLink to="/" class="hover:text-emerald-400 transition-colors">
            Return to Public Website →
          </NuxtLink>
        </div>
      </footer>
    </div>
  </div>
</template>
