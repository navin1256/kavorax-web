export interface TabPreviewRow {
  title: string
  sub: string
  metric: string
  status: string
  isAccent?: boolean
}

export interface TabPreviewData {
  badge: string
  subtitle: string
  rows: TabPreviewRow[]
  metrics: Array<{ label: string; value: string }>
}

const tabPreviewsMap: Record<string, Record<string, TabPreviewData>> = {
  // 1. POS & Billing
  'pos-billing': {
    billing: {
      badge: 'Sub-Second Counter Billing',
      subtitle: 'Active terminal punching items with instant GST & UPI',
      rows: [
        { title: 'Filter Coffee (South Indian)', sub: '2× @ ₹40.00 · Beverage station', metric: '₹80.00', status: 'Billed' },
        { title: 'Special Masala Dosa', sub: '1× @ ₹120.00 · Kitchen KOT #14 fired', metric: '₹120.00', status: 'Cooking' },
        { title: 'Dynamic GST (5%) & Rounding', sub: 'CGST ₹5.00 + SGST ₹5.00', metric: '₹10.00', status: 'Calculated' }
      ],
      metrics: [
        { label: 'Current Bill Total', value: '₹210.00' },
        { label: 'Offline Sync State', value: '100% Synced' }
      ]
    },
    tables: {
      badge: 'Floor Plan & Table Turnover',
      subtitle: 'Live visual table seating and order aging',
      rows: [
        { title: 'Table T-04 (Corner Booth)', sub: '4 Guests · Seated 28 mins · KOT 2', metric: '₹890.00', status: 'Mains Served' },
        { title: 'Table T-02 (Window 2-Seater)', sub: '2 Guests · Bill requested', metric: '₹420.00', status: 'Payment Due', isAccent: true },
        { title: 'Table T-06 (Family Hall)', sub: 'Available · Cleared & Sanitized', metric: '0 Guests', status: 'Ready' }
      ],
      metrics: [
        { label: 'Active Occupancy', value: '14 / 18 Tables' },
        { label: 'Average Turnaround', value: '34 mins' }
      ]
    },
    reports: {
      badge: 'Real-Time Counter Audit',
      subtitle: 'Daily register sales and payment tender breakdown',
      rows: [
        { title: 'Gross Counter Sales', sub: 'Indiranagar Flagship · Shift 1', metric: '₹48,920', status: '+14.8% YoY' },
        { title: 'UPI & Instant QR Payments', sub: '104 transactions · 0 settlement failures', metric: '₹34,244', status: '70% Share' },
        { title: 'Card & Cash Tenders', sub: '38 transactions (Split tender enabled)', metric: '₹14,676', status: '30% Share' }
      ],
      metrics: [
        { label: 'Invoices Cleared', value: '142 Bills' },
        { label: 'Cashier Accuracy', value: '99.98%' }
      ]
    }
  },

  // 2. Kitchen Display (KDS)
  'kitchen-display': {
    tickets: {
      badge: 'Live Kitchen Display Queue',
      subtitle: 'Color-coded digital tickets sorted by urgency',
      rows: [
        { title: 'Ticket #KOT-142 · Table T-04', sub: '2× Masala Dosa, 1× Paneer Butter Masala', metric: '02:45', status: 'Normal' },
        { title: 'Ticket #KOT-140 · Table T-09', sub: '1× Ghee Roast Dosa, 2× Filter Coffee', metric: '08:12', status: 'Attention' },
        { title: 'Ticket #KOT-138 · Online Takeaway', sub: '2× Veg Biryani Combo, 2× Fresh Lime Soda', metric: '14:05', status: 'Delayed', isAccent: true }
      ],
      metrics: [
        { label: 'Active in Prep', value: '4 Tickets' },
        { label: 'Target Cook Time', value: '< 10 mins' }
      ]
    },
    stations: {
      badge: 'Station-Wise Item Splitting',
      subtitle: 'Automated dish routing to grill, hot kitchen, or bar',
      rows: [
        { title: 'Hot Line & Grill Station', sub: '3 Dosa orders queued · Auto-priority', metric: 'Station 1', status: 'Cooking' },
        { title: 'Cold Bar & Beverage Station', sub: '4 Filter Coffees, 2 Fresh Limes', metric: 'Station 2', status: 'Ready' },
        { title: 'Expediter Pass Counter', sub: 'KOT-140 items unified for runner handoff', metric: 'Expediter', status: 'Calling Runner' }
      ],
      metrics: [
        { label: 'Station Sync Latency', value: 'Sub-200ms' },
        { label: 'Bump Bar Accuracy', value: '100%' }
      ]
    },
    analytics: {
      badge: 'Kitchen Speed & Bottleneck Audit',
      subtitle: 'Rush hour prep times and station latency',
      rows: [
        { title: 'Average Preparation Speed', sub: 'Across breakfast & lunch shift orders', metric: '6m 40s', status: '-1m 15s' },
        { title: 'Peak Rush Bottleneck', sub: 'Grill Station during 1:00 PM – 2:30 PM', metric: '9m 10s', status: 'Optimized' },
        { title: 'Cook Velocity', sub: 'Dishes bumped per hour during peak hour', metric: '74 items/hr', status: 'Peak Flow' }
      ],
      metrics: [
        { label: 'On-Time Dispatch', value: '96.4%' },
        { label: 'Kitchen Waste', value: '< 0.8%' }
      ]
    }
  },

  // 3. Inventory & Stock
  'inventory-stock': {
    stock: {
      badge: 'Live Stock Levels & Depletion',
      subtitle: 'Real-time deduction on every sale across warehouses',
      rows: [
        { title: 'Fresh Malai Paneer (RAW-042)', sub: 'Dairy & Perishables · Central Kitchen', metric: '4.5 kg', status: 'Low Stock Alert', isAccent: true },
        { title: 'Arabica Coffee Beans (RAW-018)', sub: 'Beverage Raw · Indiranagar Store', metric: '18.0 kg', status: 'Optimal' },
        { title: 'Meal Trays 5-Comp (PKG-102)', sub: 'Takeaway Packaging · Central Store', metric: '85 pcs', status: 'Reorder Due' }
      ],
      metrics: [
        { label: 'Tracked SKUs', value: '248 SKUs' },
        { label: 'Items Below Par', value: '2 Items' }
      ]
    },
    orders: {
      badge: 'Automated Supplier Reordering',
      subtitle: 'Vendor purchase orders and delivery tracking',
      rows: [
        { title: 'PO #1042 · Dairy Fresh Farms', sub: 'Paneer, Fresh Curd, Butter · Delivery: Tomorrow', metric: '₹6,800', status: 'Approved' },
        { title: 'PO #1043 · Roast Masters India', sub: '25kg Single-Origin Arabica Blend', metric: '₹14,200', status: 'In Transit' },
        { title: 'PO #1039 · PackPro Supplies', sub: 'Eco Meal Trays & Paper Cups (500 units)', metric: '₹8,400', status: 'Delivered' }
      ],
      metrics: [
        { label: 'Active POs', value: '3 Orders' },
        { label: 'Supplier SLA', value: '99.1%' }
      ]
    },
    transfers: {
      badge: 'Inter-Outlet Stock Movement',
      subtitle: 'Move stock between branches with automated balance update',
      rows: [
        { title: 'TR-88: Central Hub → Koramangala', sub: '20kg Coffee Beans · Dispatched 10:15 AM', metric: '20 kg', status: 'In Transit' },
        { title: 'TR-87: Indiranagar → Whitefield', sub: '100 Takeaway Containers · Requisition', metric: '100 pcs', status: 'Received' },
        { title: 'TR-86: Central Hub → Indiranagar', sub: 'Dairy & Perishables morning transfer', metric: '15 kg', status: 'Completed' }
      ],
      metrics: [
        { label: 'Stock Discrepancy', value: '0.00%' },
        { label: 'Transfer Time', value: '< 2 hrs' }
      ]
    }
  },

  // 4. CRM
  crm: {
    profiles: {
      badge: 'Customer Profiles & Lifetime Value',
      subtitle: 'Complete transaction logs, preferences, and visit records',
      rows: [
        { title: 'Rohan Sharma (+91 98450...)', sub: 'Gold Tier Member · Joined Mar 2025', metric: '14 Visits', status: 'VIP Member' },
        { title: 'Lifetime Billed Value', sub: 'High average spend per table visit', metric: '₹18,400', status: 'Top 5%' },
        { title: 'Guest Preferences', sub: 'Special Masala Dosa, Less sugar Filter Coffee', metric: 'Preferences', status: 'Saved in POS' }
      ],
      metrics: [
        { label: 'Repeat Customer Rate', value: '64.2%' },
        { label: 'Active Profiles', value: '4,210' }
      ]
    },
    loyalty: {
      badge: 'Automated Loyalty Ledger',
      subtitle: 'Instant point accrual and redemption at checkout',
      rows: [
        { title: 'Available Reward Points', sub: '1 point per ₹10 spent · Expiry in 90 days', metric: '450 Pts', status: 'Redeemable' },
        { title: 'Next Reward Tier', sub: '50 points away from Platinum VIP (15% off)', metric: '90% Progress', status: 'Tier Up Soon' },
        { title: 'Recent Redemptions', sub: 'Redeemed Free Artisan Cold Brew on Bill #1402', metric: '-150 Pts', status: 'Redeemed' }
      ],
      metrics: [
        { label: 'Redemption Rate', value: '28.4%' },
        { label: 'AOV Lift on Loyalty', value: '+22%' }
      ]
    },
    campaigns: {
      badge: 'Targeted Outreach Campaigns',
      subtitle: 'Broadcast offers via WhatsApp and SMS with coupon codes',
      rows: [
        { title: 'Weekend Festive Offer (15% Off)', sub: 'Sent to: Diners inactive > 30 days', metric: '1,240 Sent', status: '99.2% Delivered' },
        { title: 'Direct Order Conversions', sub: 'Diners who visited and claimed code within 48h', metric: '142 Orders', status: '11.4% Conv.' },
        { title: 'Automated Birthday Treats', sub: 'Complimentary dessert coupon sent on birthday', metric: '18 Sent Today', status: 'Active Bot' }
      ],
      metrics: [
        { label: 'Campaign ROI', value: '8.4x' },
        { label: 'Unsubscribe Rate', value: '< 0.2%' }
      ]
    }
  },

  // 5. Digital Ordering
  'digital-ordering': {
    qr: {
      badge: 'Contactless QR Table Ordering',
      subtitle: 'Diners scan, browse rich visuals, and place orders directly',
      rows: [
        { title: 'Table 12 QR Session', sub: 'iPhone 15 · Safari Mobile · No app install needed', metric: 'Table #12', status: 'Browsing Menu' },
        { title: 'Cart Additions', sub: '1× Filter Coffee, 1× Paneer Butter Masala (Mild)', metric: '₹260.00', status: 'Item Customized' },
        { title: 'One-Tap Order Injection', sub: 'Order placed by diner routes direct to KDS', metric: '1 Tap', status: 'Order Confirmed' }
      ],
      metrics: [
        { label: 'Table Scan Rate', value: '82%' },
        { label: 'Wait Reduction', value: '-12 mins' }
      ]
    },
    kitchen: {
      badge: 'Direct-to-Station Routing',
      subtitle: 'Orders from QR bypass the counter and print/show in kitchen',
      rows: [
        { title: 'Order #QR-84 · Table 12', sub: 'Sent directly to Station 1 (Hot Line)', metric: '0.15s Latency', status: 'Fired to Prep' },
        { title: 'Kitchen Acknowledgment', sub: 'Chef marked order in progress on KDS screen', metric: 'Ready in 8m', status: 'Cooking' },
        { title: 'Real-time Diner Sync', sub: 'Table phone shows "Your order is being cooked"', metric: 'Live Status', status: 'Phone Updated' }
      ],
      metrics: [
        { label: 'Order Accuracy', value: '99.8%' },
        { label: 'Staff Steps Saved', value: '~4,000/day' }
      ]
    },
    status: {
      badge: 'Live Order Progress Radar',
      subtitle: 'Transparent order stages for dine-in, takeaway, and pickup',
      rows: [
        { title: 'Stage 1: Order Confirmed', sub: 'Payment verified via UPI / Cash at counter', metric: '12:04 PM', status: 'Done' },
        { title: 'Stage 2: Food Being Cooked', sub: 'Items currently on fire at kitchen station', metric: '12:06 PM', status: 'In Progress' },
        { title: 'Stage 3: Ready for Table / Pickup', sub: 'Runner assigned or SMS notification dispatched', metric: '12:14 PM', status: 'Alert Sent' }
      ],
      metrics: [
        { label: 'Diner Satisfaction', value: '4.9 / 5.0' },
        { label: 'Status Queries', value: '-75%' }
      ]
    }
  },

  // 6. Delivery Management
  'delivery-management': {
    dispatch: {
      badge: 'Smart Dispatch & Driver Allocation',
      subtitle: 'Assign orders to in-house riders or delivery aggregators',
      rows: [
        { title: 'Order #DEL-301 · Direct WhatsApp', sub: 'Indiranagar 2nd Stage · Assigned to Suresh M.', metric: '₹620.00', status: 'Out for Delivery' },
        { title: 'Order #DEL-299 · Zomato Sync', sub: 'Domlur Layout · Partner fleet rider arrived', metric: '₹480.00', status: 'Rider at Counter' },
        { title: 'Order #DEL-304 · Web Storefront', sub: 'Koramangala 4th Block · Auto-assigning nearest rider', metric: '₹1,120.00', status: 'Assigning Fleet' }
      ],
      metrics: [
        { label: 'Fleet on Duty', value: '8 Riders' },
        { label: 'Dispatch Latency', value: '1.8 mins' }
      ]
    },
    tracking: {
      badge: 'Real-Time GPS Route Radar',
      subtitle: 'Track courier coordinates and customer delivery progress',
      rows: [
        { title: 'Rider Suresh M. (En Route)', sub: '1.2 km away from destination · Indiranagar', metric: 'ETA 11m', status: 'Smooth Traffic' },
        { title: 'Customer Tracking SMS', sub: 'Live map link viewed by customer on smartphone', metric: 'Link Opened', status: 'Customer Tracking' },
        { title: 'Geofenced Arrival Ping', sub: 'Automated WhatsApp ping sent when within 200m', metric: 'Geofence', status: 'Armed' }
      ],
      metrics: [
        { label: 'On-Time Arrival', value: '94.6%' },
        { label: 'Avg Transit Time', value: '22 mins' }
      ]
    },
    reports: {
      badge: 'Delivery Performance Analytics',
      subtitle: 'Evaluate dispatch turnaround, rider efficiency, and delivery cost',
      rows: [
        { title: 'Total Deliveries Completed', sub: 'Today across in-house and third-party fleets', metric: '84 Deliveries', status: '+12 vs Yesterday' },
        { title: 'Average Delivery Time', sub: 'From order placement to customer doorstep handoff', metric: '24.2 mins', status: 'Target < 30m' },
        { title: 'Failed / Delayed Deliveries', sub: '0 misplaced addresses or delivery cancellations', metric: '0 Failures', status: '100% Success' }
      ],
      metrics: [
        { label: 'Direct Delivery Share', value: '48%' },
        { label: 'Aggregator Comm. Saved', value: '₹6,800 Today' }
      ]
    }
  },

  // 7. Business Analytics
  'business-analytics': {
    sales: {
      badge: 'Consolidated Revenue & Margins',
      subtitle: 'Net profit, gross sales, and hourly velocity curves',
      rows: [
        { title: 'Net Daily Revenue', sub: 'All 3 outlets combined · Pacing +14.8% vs last week', metric: '₹1,84,500', status: '+14.8% Growth' },
        { title: 'Gross Operating Margin', sub: 'Food cost deducted from gross billing revenue', metric: '68.4%', status: 'Optimal Margin' },
        { title: 'Average Order Value (AOV)', sub: 'Blended dine-in and online takeaway average', metric: '₹480.00', status: '+₹35 Lift' }
      ],
      metrics: [
        { label: 'Invoices Cleared', value: '412 Bills' },
        { label: 'Tax Liability (GST)', value: '₹9,225' }
      ]
    },
    items: {
      badge: 'ABC Item Performance Matrix',
      subtitle: 'Identify bestsellers and eliminate dead inventory stock',
      rows: [
        { title: 'Special Masala Dosa', sub: 'Category A · 34% of breakfast gross margin', metric: '184 Sold', status: 'Star Performer' },
        { title: 'South Indian Filter Coffee', sub: 'High volume, 78% margin beverage champion', metric: '312 Cups', status: 'High Velocity' },
        { title: 'Fruit Custard Bowl', sub: 'Category C · Slow moving stock flag triggered', metric: '4 Sold', status: 'Recipe Review' }
      ],
      metrics: [
        { label: 'Menu Engineering', value: '24 Core SKUs' },
        { label: 'Dead Stock Risk', value: '< 1.2%' }
      ]
    },
    staff: {
      badge: 'Team Velocity & Shift Audits',
      subtitle: 'Evaluate billing punch speed and shift contribution',
      rows: [
        { title: 'Rahul S. (Morning Counter)', sub: 'Average bill punch time: 38s · Zero void errors', metric: '₹38,200 Billed', status: 'Top Cashier' },
        { title: 'Priya M. (Evening Shift)', sub: 'Upselling rate: 24% on dessert combos', metric: '₹34,100 Billed', status: 'Upsell Leader' },
        { title: 'Shift Attendance', sub: 'All duty personnel clocked in within grace window', metric: '100% Present', status: 'On Time' }
      ],
      metrics: [
        { label: 'Avg Punch Speed', value: '41 secs' },
        { label: 'Cash Variance', value: '₹0.00' }
      ]
    }
  },

  // 8. E-commerce
  'e-commerce': {
    storefront: {
      badge: 'Omnichannel Digital Storefront',
      subtitle: 'Branded web store sharing inventory pool with counter POS',
      rows: [
        { title: 'Single Catalog Architecture', sub: 'Updates made on POS reflect on web instantly', metric: '18 Active SKUs', status: 'Synced' },
        { title: 'Mobile Optimized Checkout', sub: 'One-click UPI, Cards, Netbanking via Razorpay', metric: 'Sub-30s', status: 'Fast Checkout' },
        { title: 'Zero Double-Selling', sub: 'Stock automatically decrements across web and store', metric: '0 Conflicts', status: 'Real-Time Pool' }
      ],
      metrics: [
        { label: 'Conversion Rate', value: '4.8%' },
        { label: 'Store Uptime', value: '99.99%' }
      ]
    },
    orders: {
      badge: 'Unified Online Fulfillment Pipeline',
      subtitle: 'Manage, pack, and ship web orders from a single screen',
      rows: [
        { title: 'Order #WEB-2041 · Ananya S.', sub: 'Coffee Beans + Chemex · Shipping to Koramangala', metric: '₹1,850.00', status: 'Ready to Pack' },
        { title: 'Order #WEB-2040 · Vikram R.', sub: 'Cold Brew 4-Pack · Local Delivery', metric: '₹760.00', status: 'Packed & Labeled' },
        { title: 'Automated Shipping Waybills', sub: 'Courier tracking number generated and SMS sent', metric: 'Courier Sync', status: 'Dispatched' }
      ],
      metrics: [
        { label: 'Fulfillment SLA', value: '< 24 hrs' },
        { label: 'Return Rate', value: '< 1%' }
      ]
    },
    coupons: {
      badge: 'Smart Promotions & Coupon Engine',
      subtitle: 'Create flat discounts, percentages, and minimum order rules',
      rows: [
        { title: 'WELCOME10 (First Order Discount)', sub: '10% off on orders above ₹500 · Max ₹100', metric: '88 Redemptions', status: 'Active Promo' },
        { title: 'FESTIVE50 (Flat ₹50 Off)', sub: 'Applicable on weekend bakery and snack items', metric: '42 Redemptions', status: 'Active Promo' },
        { title: 'Discount Usage Limits', sub: 'Restricted to 1 redemption per registered phone', metric: 'Fair Use Guard', status: 'Enforced' }
      ],
      metrics: [
        { label: 'Discount Spend', value: '₹5,400' },
        { label: 'Incremental Revenue', value: '₹38,200' }
      ]
    }
  },

  // 9. Business Management
  'business-management': {
    staff: {
      badge: 'Role-Based Staff Permissions',
      subtitle: 'Control screen access, discount limits, and sensitive data',
      rows: [
        { title: 'Store Managers', sub: 'Full access to inventory, reports, and staff schedules', metric: '2 Managers', status: 'Admin Role' },
        { title: 'Cashiers & Counter Stewards', sub: 'Billing only · Void bills require manager PIN', metric: '6 Cashiers', status: 'Restricted Role' },
        { title: 'Kitchen Expediter Crew', sub: 'Dedicated KDS ticket bump screen without pricing', metric: '4 Cooks', status: 'KDS Only Role' }
      ],
      metrics: [
        { label: 'Security Incidents', value: '0' },
        { label: 'Role Presets', value: '4 Groups' }
      ]
    },
    attendance: {
      badge: 'Shift Attendance & Punch Clock',
      subtitle: 'PIN and biometric clock-in logs with overtime tracking',
      rows: [
        { title: 'Kavita Nair (Store Manager)', sub: 'Clock-in: 08:45 AM · Shift: Morning (09:00 - 17:00)', metric: '08:45 AM', status: 'On Duty' },
        { title: 'Rohan Sharma (Head Barista)', sub: 'Clock-in: 09:02 AM · Shift: Morning (09:00 - 17:00)', metric: '09:02 AM', status: 'On Duty' },
        { title: 'Automated Shift Overlap', sub: 'Evening crew handoff scheduled for 04:45 PM', metric: 'Handoff', status: 'Scheduled' }
      ],
      metrics: [
        { label: 'Attendance Today', value: '100%' },
        { label: 'Unexcused Absences', value: '0' }
      ]
    },
    expenses: {
      badge: 'Daily Petty Cash & Operating Expenses',
      subtitle: 'Record store expenses with instant manager sign-off',
      rows: [
        { title: 'Morning Dairy & Milk Top-Up', sub: 'Urgent store replenishment · Cash bill attached', metric: '₹1,240.00', status: 'Approved' },
        { title: 'Sanitization & Cleaning Supplies', sub: 'Monthly store cleaning material purchase', metric: '₹380.00', status: 'Approved' },
        { title: 'Daily Petty Cash Reconciliation', sub: 'Opening cash ₹5,000 - Expenses ₹1,620 = Balance ₹3,380', metric: '₹3,380 Bal.', status: 'Verified' }
      ],
      metrics: [
        { label: 'Daily Expense Cap', value: '₹2,500' },
        { label: 'Audit Match', value: '100%' }
      ]
    }
  },

  // 10. Multi-Location Management
  'multi-location-management': {
    outlets: {
      badge: 'Multi-Outlet Executive Overview',
      subtitle: 'Monitor active registers, footfall, and live store status',
      rows: [
        { title: 'Indiranagar Flagship Outlet', sub: '3 Billing Terminals Active · 14 Tables Seated', metric: '₹48,920', status: 'Open (Busy)' },
        { title: 'Koramangala 4th Block Outlet', sub: '2 Billing Terminals Active · 10 Tables Seated', metric: '₹38,400', status: 'Open (Steady)' },
        { title: 'Whitefield Tech Park Outlet', sub: '2 Billing Terminals Active · Takeaway Peak', metric: '₹29,800', status: 'Open (Steady)' }
      ],
      metrics: [
        { label: 'Total Group Revenue', value: '₹1,17,120' },
        { label: 'Active Registers', value: '7 / 7 Online' }
      ]
    },
    menu: {
      badge: 'Central Catalog & Regional Pricing',
      subtitle: 'Update pricing centrally or configure outlet-specific menus',
      rows: [
        { title: 'Global Price Synchronization', sub: 'Updated Filter Coffee to ₹45 pushed to all 3 stores', metric: '3 Outlets', status: 'Synced (1s)' },
        { title: 'Outlet-Specific Item Overrides', sub: 'Brewed Cold Can available only at Whitefield branch', metric: '1 Override', status: 'Active' },
        { title: 'Dynamic Menu Toggle (86\'d)', sub: 'Turn off sold-out items across registers instantly', metric: 'Live Toggle', status: 'Enabled' }
      ],
      metrics: [
        { label: 'Catalog Sync Time', value: '< 2 secs' },
        { label: 'Menu Versions', value: 'v2.4 Live' }
      ]
    },
    reports: {
      badge: 'Consolidated Multi-Branch Financials',
      subtitle: 'Compare branches side-by-side with centralized tax reporting',
      rows: [
        { title: 'Consolidated Sales Comparison', sub: 'Indiranagar (+14.8%), Koramangala (+9.2%), Whitefield (+11.5%)', metric: '₹1,17,120', status: 'All Growing' },
        { title: 'Centralized GST Filing Audit', sub: 'Automated aggregation of all branch invoices for accountant', metric: 'Export Ready', status: 'Audited' },
        { title: 'Inter-Store Margin Benchmarking', sub: 'Lowest food cost variance achieved at Indiranagar', metric: '68.4% Margin', status: 'Benchmark' }
      ],
      metrics: [
        { label: 'Report Generation', value: '1 Click' },
        { label: 'Tax Discrepancy', value: '₹0.00' }
      ]
    }
  }
}

const canonicalSlugMap: Record<string, string> = {
  'pos-and-billing': 'pos-billing',
  'inventory-and-stock': 'inventory-stock',
  'multi-location': 'multi-location-management',
  'ecommerce': 'e-commerce'
}

export function getTabPreviewData(moduleSlug: string, tabId: string): TabPreviewData {
  const slug = canonicalSlugMap[moduleSlug] || moduleSlug
  const moduleTabs = tabPreviewsMap[slug]
  if (moduleTabs && moduleTabs[tabId]) {
    return moduleTabs[tabId]
  }

  // Fallback if specific tab not found
  return {
    badge: 'Operational Workflow',
    subtitle: 'Live synchronized system state',
    rows: [
      { title: 'Active Module Service', sub: 'Real-time telemetry and database connection', metric: 'Online', status: 'Connected' },
      { title: 'Subscribed Branch Endpoints', sub: 'Local network sync and offline-first queue', metric: '3 Nodes', status: 'Synced' },
      { title: 'Audit Verification', sub: 'End-to-end encryption with TLS 1.3 & AES-256', metric: 'Verified', status: 'Secure' }
    ],
    metrics: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Sync Latency', value: '< 50ms' }
    ]
  }
}

