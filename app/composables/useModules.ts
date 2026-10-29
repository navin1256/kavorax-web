import { useStorage } from '@vueuse/core'

export interface Module {
  slug: string
  name: string
  headline: string
  subline: string
  heroImageQuery: string
  heroDetail: string
  features: string[]
  tabs: { id: string; label: string; description: string; bullets: string[] }[]
  whoUsesIt: string[]
  worksWith: string[]
  faq: { question: string; answer: string }[]
}

export const initialModules: Module[] = [
  {
    slug: 'pos-billing',
    name: 'POS & Billing',
    headline: 'POS & Billing',
    subline: 'Bill faster, accept every payment method and keep selling even when the internet is down.',
    heroImageQuery: 'cashier at a POS in an Indian cafe',
    heroDetail: 'Bill total updates instantly',
    features: [
      'Quick billing',
      'GST-ready invoices',
      'Split and multiple payments (UPI, card, cash)',
      'Offers and discounts',
      'Offline billing with auto-sync',
      'Receipts by print, WhatsApp or SMS'
    ],
    tabs: [
      {
        id: 'billing',
        label: 'Billing',
        description: 'Fast, itemized billing with barcode and search support.',
        bullets: ['Search or scan items', 'Apply discounts instantly', 'Print or send digital receipts']
      },
      {
        id: 'tables',
        label: 'Tables',
        description: 'Table-wise order tracking for dine-in service.',
        bullets: ['Assign orders to tables', 'Merge or split bills', 'Track table status live']
      },
      {
        id: 'reports',
        label: 'Reports',
        description: 'See how billing performed today.',
        bullets: ['Daily sales total', 'Payment method breakdown', 'Top-selling items']
      }
    ],
    whoUsesIt: ['Restaurants', 'Cafes', 'Retail', 'Convenience Stores', 'Salons'],
    worksWith: ['Inventory & Stock', 'CRM', 'Business Analytics'],
    faq: [
      { question: 'Does it work without internet?', answer: "Yes — POS & Billing keeps working offline and syncs automatically once you're back online." },
      { question: 'Can we use our existing printers and barcode scanners?', answer: 'Most standard receipt printers and barcode scanners work out of the box.' },
      { question: 'Is GST invoicing supported?', answer: 'Yes, every bill can generate a GST-ready invoice automatically.' },
      { question: 'How long does staff training take?', answer: 'Most teams are comfortable using it within a single shift.' }
    ]
  },
  {
    slug: 'inventory-stock',
    name: 'Inventory & Stock',
    headline: 'Inventory & Stock',
    subline: 'Know exactly what you have, before you run out.',
    heroImageQuery: 'shop owner scanning shelf stock',
    heroDetail: 'Low-stock alert on 3 items',
    features: [
      'Live stock levels',
      'Low-stock alerts',
      'Purchase orders',
      'Supplier records',
      'Batch and expiry tracking',
      'Stock transfers between outlets'
    ],
    tabs: [
      {
        id: 'stock',
        label: 'Stock Levels',
        description: 'See live stock across every outlet.',
        bullets: ['Real-time quantity tracking', 'Low-stock flags', 'Category-wise view']
      },
      {
        id: 'orders',
        label: 'Purchase Orders',
        description: 'Reorder from suppliers directly.',
        bullets: ['Create purchase orders', 'Track supplier deliveries', 'Auto-suggest reorder quantities']
      },
      {
        id: 'transfers',
        label: 'Transfers',
        description: 'Move stock between outlets.',
        bullets: ['Request transfers', 'Track transfer status', 'Update stock automatically']
      }
    ],
    whoUsesIt: ['Retail', 'Convenience Stores', 'Restaurants', 'E-commerce'],
    worksWith: ['POS & Billing', 'Multi-Location Management', 'Business Analytics'],
    faq: [
      { question: 'Can I track expiry dates?', answer: 'Yes, batch and expiry tracking is built in.' },
      { question: 'Does it alert me before I run out of stock?', answer: 'Yes, low-stock alerts are sent automatically.' },
      { question: 'Can I move stock between outlets?', answer: 'Yes, stock transfers are tracked in real time.' },
      { question: 'Does it work with barcode scanners?', answer: 'Yes, standard barcode scanners are supported.' }
    ]
  },
  {
    slug: 'crm',
    name: 'CRM',
    headline: 'CRM',
    subline: 'Turn first-time customers into regulars.',
    heroImageQuery: 'salon receptionist greeting a client',
    heroDetail: 'New loyalty member added',
    features: [
      'Customer profiles and history',
      'Loyalty points',
      'Feedback capture',
      'WhatsApp and SMS campaigns',
      'Birthday offers',
      'Customer segments'
    ],
    tabs: [
      {
        id: 'profiles',
        label: 'Profiles',
        description: "Every customer's full history in one place.",
        bullets: ['Purchase history', 'Contact details', 'Preferences and notes']
      },
      {
        id: 'loyalty',
        label: 'Loyalty',
        description: 'Reward repeat customers automatically.',
        bullets: ['Points per purchase', 'Redeemable rewards', 'Member-only offers']
      },
      {
        id: 'campaigns',
        label: 'Campaigns',
        description: 'Reach customers directly.',
        bullets: ['WhatsApp and SMS campaigns', 'Birthday offers', 'Segment by behavior']
      }
    ],
    whoUsesIt: ['Salons', 'Restaurants', 'Retail', 'Hospitality'],
    worksWith: ['POS & Billing', 'Digital Ordering', 'Business Analytics'],
    faq: [
      { question: 'How do customers earn loyalty points?', answer: 'Points are added automatically at every billed purchase.' },
      { question: 'Can I send offers by WhatsApp?', answer: 'Yes, campaigns can be sent by WhatsApp or SMS.' },
      { question: 'Is customer data kept private?', answer: 'Yes, customer data is only visible to your business.' },
      { question: "Can I see a customer's order history?", answer: 'Yes, every customer profile shows their full history.' }
    ]
  },
  {
    slug: 'digital-ordering',
    name: 'Digital Ordering',
    headline: 'Digital Ordering',
    subline: 'Let customers order from their own phone.',
    heroImageQuery: 'diners scanning a QR code at a table',
    heroDetail: 'Order sent to kitchen',
    features: [
      'QR code menus',
      'Table ordering',
      'Online ordering link',
      'Live kitchen display',
      'Item availability control',
      'Order status updates'
    ],
    tabs: [
      {
        id: 'qr',
        label: 'QR Menu',
        description: 'Diners order straight from their phone.',
        bullets: ['No app download needed', 'High-res photos and filters', 'Works on any smartphone camera']
      },
      {
        id: 'kitchen',
        label: 'Kitchen Display',
        description: 'Orders route straight to the kitchen.',
        bullets: ['Station-wise order routing', 'Real-time order queue', 'Mark items ready']
      },
      {
        id: 'status',
        label: 'Order Status',
        description: 'Customers see live progress.',
        bullets: ['Order confirmed notification', 'Preparation updates', 'Ready-for-pickup alert']
      }
    ],
    whoUsesIt: ['Restaurants', 'Cafes', 'Hospitality'],
    worksWith: ['POS & Billing', 'Delivery Management', 'CRM'],
    faq: [
      { question: 'Do customers need to download an app?', answer: "No, the menu opens directly in their phone's browser." },
      { question: 'Can I turn off sold-out items instantly?', answer: 'Yes, item availability updates across all menus immediately.' },
      { question: 'Does this work for takeaway too?', answer: 'Yes, both dine-in and takeaway orders are supported.' },
      { question: 'Can I update the menu myself?', answer: 'Yes, menu changes are made from your dashboard.' }
    ]
  },
  {
    slug: 'delivery-management',
    name: 'Delivery Management',
    headline: 'Delivery Management',
    subline: 'Every order delivered, tracked and on time.',
    heroImageQuery: 'delivery rider checking a phone',
    heroDetail: 'Rider assigned to order',
    features: [
      'Order dispatch',
      'Rider assignment',
      'Live status tracking',
      'Delivery zones and charges',
      'Customer notifications',
      'Delivery reports'
    ],
    tabs: [
      {
        id: 'dispatch',
        label: 'Dispatch',
        description: 'Orders route to the nearest available rider.',
        bullets: ['Auto-assign or manual assign', 'Zone-based routing', 'Priority for urgent orders']
      },
      {
        id: 'tracking',
        label: 'Live Tracking',
        description: 'Know where every order is.',
        bullets: ['Live rider location', 'Estimated delivery time', 'Delivery confirmation']
      },
      {
        id: 'reports',
        label: 'Reports',
        description: 'See delivery performance over time.',
        bullets: ['Average delivery time', 'On-time delivery rate', 'Rider performance']
      }
    ],
    whoUsesIt: ['Restaurants', 'Cafes', 'E-commerce'],
    worksWith: ['Digital Ordering', 'POS & Billing', 'Business Analytics'],
    faq: [
      { question: 'Can I set different delivery charges by area?', answer: 'Yes, delivery zones and charges are configurable.' },
      { question: 'Do customers get order updates automatically?', answer: 'Yes, status updates are sent automatically.' },
      { question: 'Can I assign my own riders?', answer: 'Yes, in-house riders can be assigned directly.' },
      { question: 'Does it work with delivery apps?', answer: 'Yes, it can work alongside third-party delivery platforms.' }
    ]
  },
  {
    slug: 'business-analytics',
    name: 'Business Analytics',
    headline: 'Business Analytics',
    subline: 'Clear numbers, better decisions.',
    heroImageQuery: 'owner reviewing charts on a tablet',
    heroDetail: "Today's report ready",
    features: [
      'Sales and profit reports',
      'Best and slow-moving items',
      'Hourly trends',
      'Staff performance',
      'Outlet comparison',
      'Scheduled report emails'
    ],
    tabs: [
      {
        id: 'sales',
        label: 'Sales',
        description: 'Track sales and profit together.',
        bullets: ['Daily and monthly totals', 'Profit margin by item', 'Payment method split']
      },
      {
        id: 'items',
        label: 'Items',
        description: "See what's selling and what isn't.",
        bullets: ['Best-selling items', 'Slow-moving stock', 'Category performance']
      },
      {
        id: 'staff',
        label: 'Staff',
        description: 'See how your team is performing.',
        bullets: ['Sales per staff member', 'Shift performance', 'Attendance summary']
      }
    ],
    whoUsesIt: ['All industries'],
    worksWith: ['POS & Billing', 'Inventory & Stock', 'Multi-Location Management'],
    faq: [
      { question: 'Can I get reports emailed to me daily?', answer: 'Yes, reports can be scheduled by email.' },
      { question: 'Can I compare sales across outlets?', answer: 'Yes, outlet comparison is built in.' },
      { question: 'Does it show profit, not just sales?', answer: 'Yes, both sales and profit are tracked.' },
      { question: 'Can I export reports?', answer: 'Yes, reports can be exported for your records.' }
    ]
  },
  {
    slug: 'e-commerce',
    name: 'E-commerce',
    headline: 'E-commerce',
    subline: 'Sell online without a second system.',
    heroImageQuery: 'store owner packing parcels',
    heroDetail: 'New online order received',
    features: [
      'Online store',
      'Real-time stock sync',
      'Order management',
      'Payment links',
      'Coupons',
      'Shipping options'
    ],
    tabs: [
      {
        id: 'storefront',
        label: 'Storefront',
        description: 'Your own branded online store.',
        bullets: ['Custom store page', 'Product photos and descriptions', 'Mobile-friendly checkout']
      },
      {
        id: 'orders',
        label: 'Orders',
        description: 'Manage every online order.',
        bullets: ['Order status tracking', 'Combined online/offline view', 'Refunds and cancellations']
      },
      {
        id: 'coupons',
        label: 'Coupons',
        description: 'Run promotions easily.',
        bullets: ['Percentage or flat discounts', 'Time-limited offers', 'Usage limits']
      }
    ],
    whoUsesIt: ['Retail', 'E-commerce sellers', 'Growing SMEs'],
    worksWith: ['Inventory & Stock', 'Delivery Management', 'Business Analytics'],
    faq: [
      { question: 'Does my online stock stay in sync with my store?', answer: 'Yes, stock updates in real time across channels.' },
      { question: 'Can I offer coupons?', answer: 'Yes, coupons and discount codes are supported.' },
      { question: 'What payment methods are supported?', answer: 'Common payment methods including UPI and cards are supported.' },
      { question: 'Can I manage orders from my phone?', answer: 'Yes, orders can be managed from any device.' }
    ]
  },
  {
    slug: 'business-management',
    name: 'Business Management',
    headline: 'Business Management',
    subline: 'Run daily operations without the chaos.',
    heroImageQuery: 'manager with a tablet checklist',
    heroDetail: 'Staff shift started',
    features: [
      'Staff and roles',
      'Attendance',
      'Expense tracking',
      'Tasks',
      'Permissions',
      'Audit trail'
    ],
    tabs: [
      {
        id: 'staff',
        label: 'Staff',
        description: 'Manage your whole team.',
        bullets: ['Staff profiles and roles', 'Shift scheduling', 'Performance notes']
      },
      {
        id: 'attendance',
        label: 'Attendance',
        description: 'Track attendance automatically.',
        bullets: ['Clock-in and clock-out', 'Attendance summary', 'Leave tracking']
      },
      {
        id: 'expenses',
        label: 'Expenses',
        description: 'Keep daily expenses under control.',
        bullets: ['Log daily expenses', 'Categorize spending', 'Expense reports']
      }
    ],
    whoUsesIt: ['All industries, especially Hospitality and Salons'],
    worksWith: ['Multi-Location Management', 'Business Analytics', 'CRM'],
    faq: [
      { question: 'Can I control what each staff member can see?', answer: 'Yes, permissions are set per role.' },
      { question: 'Can I track daily expenses?', answer: 'Yes, expenses can be logged and tracked.' },
      { question: 'Is there an attendance feature?', answer: 'Yes, staff attendance is tracked in the system.' },
      { question: 'Can I assign tasks to staff?', answer: 'Yes, tasks can be assigned and tracked.' }
    ]
  },
  {
    slug: 'multi-location-management',
    name: 'Multi-Location Management',
    headline: 'Multi-Location Management',
    subline: 'All your outlets, one dashboard.',
    heroImageQuery: 'owner with a laptop and an outlet map',
    heroDetail: '3 outlets synced',
    features: [
      'Outlet dashboard',
      'Central menu and pricing',
      'Outlet-wise reports',
      'Stock transfers',
      'Role-based access',
      'Consolidated billing view'
    ],
    tabs: [
      {
        id: 'outlets',
        label: 'Outlets',
        description: 'See every outlet at a glance.',
        bullets: ['Outlet-wise sales', 'Status overview', 'Quick switch between outlets']
      },
      {
        id: 'menu',
        label: 'Menu & Pricing',
        description: 'Control pricing centrally.',
        bullets: ['Set prices per outlet', 'Push menu updates everywhere', 'Outlet-specific offers']
      },
      {
        id: 'reports',
        label: 'Reports',
        description: 'Compare outlets side by side.',
        bullets: ['Consolidated billing view', 'Outlet comparison', 'Combined performance report']
      }
    ],
    whoUsesIt: ['Growing SMEs', 'Restaurants', 'Retail chains'],
    worksWith: ['Business Analytics', 'Business Management', 'Inventory & Stock'],
    faq: [
      { question: 'Can I set different pricing per outlet?', answer: 'Yes, pricing can be set per outlet.' },
      { question: 'Can I see all outlets in one report?', answer: 'Yes, consolidated reports are available.' },
      { question: 'How many outlets can I add?', answer: "There's no fixed limit — add outlets as you grow." },
      { question: 'Can staff access be limited per outlet?', answer: 'Yes, access is role- and outlet-based.' }
    ]
  },
  {
    slug: 'kitchen-display',
    name: 'Kitchen Display (KDS)',
    headline: 'Kitchen Display (KDS)',
    subline: 'Eliminate lost paper tickets and kitchen confusion with real-time station routing and prep timers.',
    heroImageQuery: '/images/architectural-workspace.webp',
    heroDetail: 'Live order queue: 4 tickets in prep',
    features: [
      'Color-coded ticket aging',
      'Station-wise item routing',
      'Cook times & prep timers',
      'Waiter bump bar & recall',
      'Direct POS & QR order injection',
      'Summary counts for rush hour prep'
    ],
    tabs: [
      {
        id: 'tickets',
        label: 'Live Queue',
        description: 'Color-coded digital tickets sorted by urgency.',
        bullets: ['Real-time order arrival', 'Flashing alerts for delayed tickets', 'Filter by dine-in, takeaway, or delivery']
      },
      {
        id: 'stations',
        label: 'Station Routing',
        description: 'Route dishes to hot kitchen, cold bar, or beverage station automatically.',
        bullets: ['Split item orders across kitchen stations', 'Independent station bump controls', 'Unified expediter screen']
      },
      {
        id: 'analytics',
        label: 'Kitchen Timing',
        description: 'Track average preparation speed and bottlenecks.',
        bullets: ['Average preparation time per item', 'Peak rush bottleneck tracking', 'Cook velocity metrics']
      }
    ],
    whoUsesIt: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Bars & Breweries'],
    worksWith: ['POS & Billing', 'Digital Ordering', 'Delivery Management'],
    faq: [
      { question: 'Does KDS replace paper kitchen tickets completely?', answer: 'Yes, but you can also run paper printers alongside digital screens if preferred.' },
      { question: 'What hardware can run the Kitchen Display?', answer: 'Any commercial kitchen touchscreen, Android tablet, iPad, or standard monitor with a bump bar.' },
      { question: 'Can orders be recalled if marked ready by mistake?', answer: 'Yes, past bumped tickets can be recalled with a single tap.' },
      { question: 'Does it work offline?', answer: 'Yes, local network communication ensures tickets appear instantly even if external internet drops.' }
    ]
  }
]

const slugAliasMap: Record<string, string> = {
  'pos-and-billing': 'pos-billing',
  'pos-billing': 'pos-billing',
  'inventory-and-stock': 'inventory-stock',
  'inventory-stock': 'inventory-stock',
  'crm': 'crm',
  'digital-ordering': 'digital-ordering',
  'delivery-management': 'delivery-management',
  'business-analytics': 'business-analytics',
  'kitchen-display': 'kitchen-display',
  'multi-location': 'multi-location-management',
  'multi-location-management': 'multi-location-management',
  'ecommerce': 'e-commerce',
  'e-commerce': 'e-commerce',
  'business-management': 'business-management'
}

export function getModuleBySlug(slug: string): Module | undefined {
  const canonicalSlug = slugAliasMap[slug] || slug
  return initialModules.find(m => m.slug === canonicalSlug || m.slug === slug)
}

export function useModules() {
  const modules = useStorage('kavorax-modules', initialModules)
  return modules.value || initialModules
}
