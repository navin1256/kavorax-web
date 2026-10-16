import type { AdminNavItem, BreadcrumbItem } from '~/types/admin'

export const ADMIN_NAV_ITEMS: readonly AdminNavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin',
    iconName: 'LayoutDashboard',
    description: 'System overview & executive metrics',
    exact: true
  },
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    iconName: 'Layers',
    description: 'Enterprise modules & product catalog',
    badge: '6'
  },
  {
    id: 'solutions',
    label: 'Solutions',
    path: '/admin/solutions',
    iconName: 'Cpu',
    description: 'Cross-functional industry solutions',
    badge: '4'
  },
  {
    id: 'industries',
    label: 'Industries',
    path: '/admin/industries',
    iconName: 'Building2',
    description: 'Domain verticals & sector capabilities'
  },
  {
    id: 'pricing',
    label: 'Pricing & Tiers',
    path: '/admin/pricing',
    iconName: 'CreditCard',
    description: 'Commercial tier definitions & plans'
  },
  {
    id: 'enquiries',
    label: 'Inbound Enquiries',
    path: '/admin/enquiries',
    iconName: 'Mail',
    description: 'Demo requests & corporate leads',
    badge: '12',
    badgeVariant: 'emerald'
  },
  {
    id: 'content',
    label: 'Website Content',
    path: '/admin/content',
    iconName: 'FileText',
    description: 'Landing copy, case studies & releases'
  },
  {
    id: 'settings',
    label: 'Platform Settings',
    path: '/admin/settings',
    iconName: 'SlidersHorizontal',
    description: 'Security, team access & system config'
  }
]

export const ROUTE_TITLE_MAP: Record<string, { title: string; description: string; iconName: string }> = {
  '/admin': {
    title: 'Executive Dashboard',
    description: 'Real-time telemetry, core business metrics, and administrative quick actions.',
    iconName: 'LayoutDashboard'
  },
  '/admin/products': {
    title: 'Products Management',
    description: 'Configure enterprise product suite, capability matrices, and feature flags.',
    iconName: 'Layers'
  },
  '/admin/solutions': {
    title: 'Solutions Management',
    description: 'Manage architecture blueprints, solutions taxonomy, and value propositions.',
    iconName: 'Cpu'
  },
  '/admin/industries': {
    title: 'Industries Management',
    description: 'Target verticals, compliance profiles, and specialized sector blueprints.',
    iconName: 'Building2'
  },
  '/admin/pricing': {
    title: 'Pricing Management',
    description: 'Manage commercial plans, feature entitlements, and SLA tier definitions.',
    iconName: 'CreditCard'
  },
  '/admin/enquiries': {
    title: 'Enquiries & Lead Pipeline',
    description: 'Review prospective customer inbound inquiries, enterprise demo bookings, and routing.',
    iconName: 'Mail'
  },
  '/admin/content': {
    title: 'Website Content Management',
    description: 'Publish editorial updates, homepage hero banners, and corporate governance documentation.',
    iconName: 'FileText'
  },
  '/admin/settings': {
    title: 'Admin Settings',
    description: 'Global workspace preferences, administrative access controls, and API endpoint configuration.',
    iconName: 'SlidersHorizontal'
  }
}

/**
 * Resolves breadcrumbs for any admin route path.
 */
export function getBreadcrumbsForRoute(routePath: string): BreadcrumbItem[] {
  // Normalize path without trailing slash
  const cleanPath = routePath.replace(/\/$/, '') || '/admin'

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'KavoraX', path: '/' },
    { label: 'Admin', path: '/admin', current: cleanPath === '/admin' }
  ]

  if (cleanPath === '/admin') {
    return breadcrumbs
  }

  // Segment after /admin
  const segments = cleanPath.split('/').filter(Boolean)
  // e.g. ['admin', 'products']
  let accumulatedPath = ''

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (!segment) continue

    accumulatedPath += `/${segment}`

    if (segment === 'admin') continue

    const matchedConfig = ROUTE_TITLE_MAP[accumulatedPath]
    const firstWord = matchedConfig ? matchedConfig.title.split(' ')[0] : undefined
    const label: string = firstWord || (segment.charAt(0).toUpperCase() + segment.slice(1))

    breadcrumbs.push({
      label,
      path: accumulatedPath,
      current: i === segments.length - 1
    })
  }

  return breadcrumbs
}
