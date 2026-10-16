<script setup lang="ts">
import { useAdminPageTitle } from '~/composables/admin/useAdminPageTitle'
import AdminPageHeader from '~/components/admin/layout/AdminPageHeader.vue'
import AdminSectionCard from '~/components/admin/shared/AdminSectionCard.vue'
import AdminEmptyState from '~/components/admin/shared/AdminEmptyState.vue'
import { Plus, ArrowUpRight, CheckCircle2 } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin'
})

useAdminPageTitle(
  'Website Content Management',
  'Manage public marketing copy, corporate announcements, and regulatory governance disclosures.'
)

interface ContentPageRecord {
  id: string
  route: string
  pageName: string
  template: string
  lastModified: string
  status: 'Published' | 'Draft'
  editor: string
}

const websitePages: ContentPageRecord[] = [
  {
    id: 'page-home',
    route: '/',
    pageName: 'Corporate Homepage',
    template: 'Cinematic Hero + Enterprise Grid',
    lastModified: '15 Oct 2026',
    status: 'Published',
    editor: 'Editorial Core'
  },
  {
    id: 'page-prod',
    route: '/products',
    pageName: 'Products Hub',
    template: 'Capability Matrix & Interactive Demos',
    lastModified: '15 Oct 2026',
    status: 'Published',
    editor: 'Product Marketing'
  },
  {
    id: 'page-sol',
    route: '/solutions',
    pageName: 'Solutions Architecture',
    template: 'Cross-Industry Blueprint Showcase',
    lastModified: '15 Oct 2026',
    status: 'Published',
    editor: 'Solutions Engineering'
  },
  {
    id: 'page-ind',
    route: '/industries',
    pageName: 'Industry Verticals',
    template: 'Sector Compliance & Case Studies',
    lastModified: '14 Oct 2026',
    status: 'Published',
    editor: 'Industry Practice'
  },
  {
    id: 'page-price',
    route: '/pricing',
    pageName: 'Commercial Pricing',
    template: 'SLA Tiers & Enterprise Estimator',
    lastModified: '14 Oct 2026',
    status: 'Published',
    editor: 'Commercial Operations'
  },
  {
    id: 'page-about',
    route: '/about',
    pageName: 'About KavoraX Global',
    template: 'Leadership & Engineering Philosophy',
    lastModified: '14 Oct 2026',
    status: 'Published',
    editor: 'Corporate Communications'
  },
  {
    id: 'page-contact',
    route: '/contact',
    pageName: 'Global Inquiries',
    template: 'Interactive Inbound Lead Gateway',
    lastModified: '14 Oct 2026',
    status: 'Published',
    editor: 'Lead Routing Ops'
  },
  {
    id: 'page-demo',
    route: '/demo',
    pageName: 'Request Platform Walkthrough',
    template: 'Enterprise Solution Briefing Flow',
    lastModified: '14 Oct 2026',
    status: 'Published',
    editor: 'Pre-Sales Engineering'
  }
]
</script>

<template>
  <div class="space-y-6">
    <AdminPageHeader
      title="Website Content Management"
      description="Manage the public website pages, meta descriptions, and editorial assets."
      icon-name="FileText"
      badge="8 Live Pages"
    >
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          title="CRUD actions will connect to backend API endpoints in future sprints"
        >
          <Plus class="w-4 h-4" />
          <span>New Page Draft</span>
        </button>
      </template>
    </AdminPageHeader>

    <AdminSectionCard
      title="Configured Public Website Pages"
      description="Active frontend routes registered under the Nuxt 4 application."
    >
      <div class="overflow-x-auto admin-scrollbar">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[#26313d] bg-[#0b0f14]/60 text-[#94a3b8] uppercase tracking-wider text-[11px]">
              <th scope="col" class="py-3 px-4 font-semibold">Route</th>
              <th scope="col" class="py-3 px-4 font-semibold">Page Title</th>
              <th scope="col" class="py-3 px-4 font-semibold hidden md:table-cell">Template</th>
              <th scope="col" class="py-3 px-4 font-semibold hidden sm:table-cell">Last Modified</th>
              <th scope="col" class="py-3 px-4 font-semibold">Status</th>
              <th scope="col" class="py-3 px-4 font-semibold text-right">Preview</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#26313d]/60">
            <tr
              v-for="page in websitePages"
              :key="page.id"
              class="hover:bg-[#121c27] transition-colors"
            >
              <td class="py-3.5 px-4 font-mono text-emerald-400 text-xs">
                {{ page.route }}
              </td>
              <td class="py-3.5 px-4">
                <span class="font-medium text-slate-200 block text-xs sm:text-sm">{{ page.pageName }}</span>
                <span class="text-[11px] text-[#94a3b8]">{{ page.editor }}</span>
              </td>
              <td class="py-3.5 px-4 hidden md:table-cell text-slate-300">
                {{ page.template }}
              </td>
              <td class="py-3.5 px-4 hidden sm:table-cell text-[#94a3b8]">
                {{ page.lastModified }}
              </td>
              <td class="py-3.5 px-4">
                <span
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase border bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                >
                  <CheckCircle2 class="w-3 h-3 text-emerald-400" />
                  <span>{{ page.status }}</span>
                </span>
              </td>
              <td class="py-3.5 px-4 text-right">
                <NuxtLink
                  :to="page.route"
                  target="_blank"
                  class="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <span>Open</span>
                  <ArrowUpRight class="w-3.5 h-3.5" />
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminSectionCard>

    <AdminEmptyState
      title="No Staged Content Drafts"
      description="Content revisions pending editorial sign-off or scheduled releases will appear here once drafted."
      icon-name="FileText"
    />
  </div>
</template>
