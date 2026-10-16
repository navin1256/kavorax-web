<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import {
  ShieldCheck,
  Server,
  Building,
  KeyRound,
  Database,
  ExternalLink
} from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Admin Settings',
  'Global workspace preferences, administrative security controls, and runtime telemetry.'
)
</script>

<template>
  <div class="space-y-6">
    <AdminPageHeader
      title="Admin Settings"
      description="System environment parameters, organization profile, and future API connectivity configuration."
      icon-name="SlidersHorizontal"
      badge="Production Ready"
    />

    <!-- System & Environment Information -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AdminSectionCard
        title="Runtime Telemetry"
        description="Nuxt 4 framework and deployment infrastructure status."
      >
        <div class="space-y-3 text-xs">
          <div class="flex items-center justify-between py-2 border-b border-[#26313d]/60">
            <span class="text-[#94a3b8] flex items-center gap-2">
              <Server class="w-4 h-4 text-emerald-400" />
              <span>Framework Engine</span>
            </span>
            <span class="font-mono text-slate-200">Nuxt 4.6.1 / Vue 3.5</span>
          </div>

          <div class="flex items-center justify-between py-2 border-b border-[#26313d]/60">
            <span class="text-[#94a3b8] flex items-center gap-2">
              <ShieldCheck class="w-4 h-4 text-emerald-400" />
              <span>TypeScript Strict Mode</span>
            </span>
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Enabled (Zero Any)
            </span>
          </div>

          <div class="flex items-center justify-between py-2 border-b border-[#26313d]/60">
            <span class="text-[#94a3b8] flex items-center gap-2">
              <Database class="w-4 h-4 text-emerald-400" />
              <span>Component Architecture</span>
            </span>
            <span class="font-mono text-slate-200">shadcn-vue + Tailwind CSS</span>
          </div>

          <div class="flex items-center justify-between py-2">
            <span class="text-[#94a3b8] flex items-center gap-2">
              <KeyRound class="w-4 h-4 text-emerald-400" />
              <span>Admin State Isolation</span>
            </span>
            <span class="font-mono text-slate-200">Scoped admin.css & layout</span>
          </div>
        </div>
      </AdminSectionCard>

      <AdminSectionCard
        title="Organization Metadata"
        description="Corporate identity records and legal registrations."
      >
        <div class="space-y-3 text-xs">
          <div class="flex items-center justify-between py-2 border-b border-[#26313d]/60">
            <span class="text-[#94a3b8] flex items-center gap-2">
              <Building class="w-4 h-4 text-emerald-400" />
              <span>Entity Name</span>
            </span>
            <span class="text-slate-200 font-medium">KavoraX Global Private Limited</span>
          </div>

          <div class="flex items-center justify-between py-2 border-b border-[#26313d]/60">
            <span class="text-[#94a3b8]">Domain Classification</span>
            <span class="text-slate-200 font-medium">B2B SaaS & Technology Solutions</span>
          </div>

          <div class="flex items-center justify-between py-2 border-b border-[#26313d]/60">
            <span class="text-[#94a3b8]">Public Website Domain</span>
            <NuxtLink to="/" target="_blank" class="text-emerald-400 hover:underline flex items-center gap-1 font-mono">
              <span>kavorax.com</span>
              <ExternalLink class="w-3 h-3" />
            </NuxtLink>
          </div>

          <div class="flex items-center justify-between py-2">
            <span class="text-[#94a3b8]">Primary Accent Brand</span>
            <div class="flex items-center gap-2">
              <div class="w-3.5 h-3.5 rounded bg-[#10b981] border border-white/20" />
              <span class="font-mono text-slate-200">#10b981 (Emerald)</span>
            </div>
          </div>
        </div>
      </AdminSectionCard>
    </div>

    <!-- Security & Authentication Architecture Preview -->
    <AdminSectionCard
      title="Access Control & API Integrations Architecture"
      description="Prepared architecture for upcoming authentication providers and CRUD API endpoints."
      badge="Starter Shell"
    >
      <div class="p-4 rounded-lg bg-[#0b0f14] border border-[#26313d] space-y-3 text-xs text-[#94a3b8] leading-relaxed">
        <p>
          This admin console starter is fully structured to receive real authentication (OAuth 2.0 / OIDC / Enterprise SSO) and Nuxt server API endpoints (<code class="font-mono text-emerald-400">server/api/*</code>).
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div class="p-3 rounded bg-[#0f161f] border border-[#26313d]">
            <span class="font-semibold text-slate-200 block mb-1">State Management</span>
            <span>Pinia & Nuxt useState composables configured for session tokens and user state.</span>
          </div>
          <div class="p-3 rounded bg-[#0f161f] border border-[#26313d]">
            <span class="font-semibold text-slate-200 block mb-1">Form Validation</span>
            <span>VeeValidate + Zod schema validation ready to be attached to CRUD modal forms.</span>
          </div>
          <div class="p-3 rounded bg-[#0f161f] border border-[#26313d]">
            <span class="font-semibold text-slate-200 block mb-1">Data Fetching</span>
            <span>Nuxt native $fetch and useFetch caching prepared with typed response interfaces.</span>
          </div>
        </div>
      </div>
    </AdminSectionCard>

    <AdminEmptyState
      title="No Custom API Keys Registered"
      description="Third-party telemetry tokens and webhook subscriptions will be configurable here upon backend integration."
      icon-name="SlidersHorizontal"
    />
  </div>
</template>
