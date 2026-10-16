import type { Component } from 'vue'

export type NavBadgeVariant = 'default' | 'emerald' | 'amber' | 'slate'

export interface AdminNavItem {
  id: string
  label: string
  path: string
  iconName: string
  icon?: Component
  description?: string
  badge?: string | number
  badgeVariant?: NavBadgeVariant
  exact?: boolean
  children?: AdminNavItem[]
}

export interface BreadcrumbItem {
  label: string
  path: string
  current?: boolean
}

export type StatTrend = 'up' | 'down' | 'neutral'

export interface DashboardStat {
  id: string
  title: string
  value: string | number
  change?: string
  trend?: StatTrend
  period?: string
  iconName: string
  description?: string
  targetRoute?: string
}

export interface QuickActionItem {
  id: string
  title: string
  description: string
  iconName: string
  path: string
  badge?: string
}

export type ActivityType = 'product' | 'solution' | 'enquiry' | 'content' | 'settings'
export type ActivityStatus = 'published' | 'pending' | 'updated' | 'archived' | 'new'

export interface RecentActivityItem {
  id: string
  type: ActivityType
  title: string
  description: string
  timestamp: string
  relativeTime: string
  actor: string
  status: ActivityStatus
  route?: string
}

export interface AdminPageMeta {
  title: string
  description: string
  iconName?: string
  badge?: string
}
