export interface NavItem {
  label: string
  href: string
  badge?: string
  external?: boolean
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  iconName: string
  tag?: string
}

export interface PlatformMetric {
  value: string
  label: string
  change?: string
}
