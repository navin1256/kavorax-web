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
    description: 'GST bills, UPI/card/cash, and billing that works offline.',
    group: 'Sell'
  },
  {
    slug: 'digital-ordering',
    name: 'Digital Ordering',
    href: '/digital-ordering',
    description: 'Guests order and pay from a QR code on the table.',
    group: 'Sell'
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    href: '/e-commerce',
    description: 'Your own online store, using the same stock as the shop.',
    group: 'Sell'
  },

  // Group: Operate
  {
    slug: 'inventory-and-stock',
    name: 'Inventory & Stock',
    href: '/inventory-and-stock',
    description: 'Stock that goes down as you sell, and a list of what to reorder.',
    group: 'Operate'
  },
  {
    slug: 'kitchen-display',
    name: 'Kitchen Display (KDS)',
    href: '/kitchen-display',
    description: 'Orders on a kitchen screen by station, instead of paper KOTs.',
    group: 'Operate'
  },
  {
    slug: 'delivery-management',
    name: 'Delivery Management',
    href: '/delivery-management',
    description: 'Assign riders and see which orders are out for delivery.',
    group: 'Operate'
  },

  // Group: Grow & manage
  {
    slug: 'crm',
    name: 'CRM & Loyalty',
    href: '/crm',
    description: 'Know your regulars, give them points, send them offers.',
    group: 'Grow & manage'
  },
  {
    slug: 'business-analytics',
    name: 'Business Analytics',
    href: '/business-analytics',
    description: 'Sales by item, hour and payment type, on your phone.',
    group: 'Grow & manage'
  },
  {
    slug: 'multi-location',
    name: 'Multi-Location',
    href: '/multi-location',
    description: 'One menu and price list for every branch, with branch-wise reports.',
    group: 'Grow & manage'
  },
  {
    slug: 'business-management',
    name: 'Business Management',
    href: '/business-management',
    description: 'Staff shifts, attendance, expenses and who can see what.',
    group: 'Grow & manage'
  }
]

export const productNavGroups: ProductNavGroup[] = [
  {
    name: 'Sell',
    tagline: 'Counter, table and online orders',
    items: productNavItems.filter(item => item.group === 'Sell')
  },
  {
    name: 'Operate',
    tagline: 'Kitchen, stock and deliveries',
    items: productNavItems.filter(item => item.group === 'Operate')
  },
  {
    name: 'Grow & manage',
    tagline: 'Customers, reports and more branches',
    items: productNavItems.filter(item => item.group === 'Grow & manage')
  }
]
