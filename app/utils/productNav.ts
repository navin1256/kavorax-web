export interface ProductNavItem {
  slug: string
  name: string
  href: string
  description: string
  group: 'Sell' | 'Operate' | 'Grow & manage'
}

export interface ProductNavGroup {
  name: 'Sell' | 'Operate' | 'Grow & manage'
  tagline: string
  items: ProductNavItem[]
}

export const productNavItems: ProductNavItem[] = [
  // Group: Sell
  {
    slug: 'pos-and-billing',
    name: 'POS & Billing',
    href: '/pos-and-billing',
    description: 'High-speed counter billing with GST, split tender & offline sync.',
    group: 'Sell'
  },
  {
    slug: 'digital-ordering',
    name: 'Digital Ordering',
    href: '/digital-ordering',
    description: 'QR table ordering, contactless payments & takeaway queues.',
    group: 'Sell'
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    href: '/e-commerce',
    description: 'Branded online storefront with real-time stock sync.',
    group: 'Sell'
  },

  // Group: Operate
  {
    slug: 'inventory-and-stock',
    name: 'Inventory & Stock',
    href: '/inventory-and-stock',
    description: 'Real-time stock counts, recipe costing & low-stock alerts.',
    group: 'Operate'
  },
  {
    slug: 'kitchen-display',
    name: 'Kitchen Display (KDS)',
    href: '/kitchen-display',
    description: 'Live order routing and station prep timing for busy kitchens.',
    group: 'Operate'
  },
  {
    slug: 'delivery-management',
    name: 'Delivery Management',
    href: '/delivery-management',
    description: 'Rider dispatch, route optimization & delivery status tracking.',
    group: 'Operate'
  },

  // Group: Grow & manage
  {
    slug: 'crm',
    name: 'CRM & Loyalty',
    href: '/crm',
    description: 'Customer profiles, loyalty rewards & repeat visit campaigns.',
    group: 'Grow & manage'
  },
  {
    slug: 'business-analytics',
    name: 'Business Analytics',
    href: '/business-analytics',
    description: 'Real-time sales dashboards, product margins & performance reports.',
    group: 'Grow & manage'
  },
  {
    slug: 'multi-location',
    name: 'Multi-Location',
    href: '/multi-location',
    description: 'Centralized menu, pricing & stock control across all outlets.',
    group: 'Grow & manage'
  },
  {
    slug: 'business-management',
    name: 'Business Management',
    href: '/business-management',
    description: 'Staff shifts, attendance, expense logs & role permissions.',
    group: 'Grow & manage'
  }
]

export const productNavGroups: ProductNavGroup[] = [
  {
    name: 'Sell',
    tagline: 'Front-of-house counters, online channels & digital ordering',
    items: productNavItems.filter(item => item.group === 'Sell')
  },
  {
    name: 'Operate',
    tagline: 'Kitchen operations, stock management & dispatch logistics',
    items: productNavItems.filter(item => item.group === 'Operate')
  },
  {
    name: 'Grow & manage',
    tagline: 'Customer retention, analytics intelligence & multi-outlet scale',
    items: productNavItems.filter(item => item.group === 'Grow & manage')
  }
]
