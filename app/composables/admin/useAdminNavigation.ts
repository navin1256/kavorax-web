import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ADMIN_NAV_ITEMS, getBreadcrumbsForRoute } from '~/utils/admin-navigation'
import type { AdminNavItem, BreadcrumbItem } from '~/types/admin'

export function useAdminNavigation() {
  const route = useRoute()

  // Persistent shared state for mobile drawer and sidebar collapse
  const isMobileNavOpen = useState<boolean>('admin-mobile-nav-open', () => false)
  const isSidebarCollapsed = useState<boolean>('admin-sidebar-collapsed', () => false)

  const navItems = computed<readonly AdminNavItem[]>(() => ADMIN_NAV_ITEMS)

  const currentPath = computed(() => route.path.replace(/\/$/, '') || '/admin')

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    return getBreadcrumbsForRoute(route.path)
  })

  function isActive(itemPath: string, exact: boolean = false): boolean {
    const cleanItem = itemPath.replace(/\/$/, '')
    const cleanCurrent = currentPath.value

    if (exact || cleanItem === '/admin') {
      return cleanCurrent === cleanItem
    }

    return cleanCurrent.startsWith(cleanItem)
  }

  function toggleMobileNav() {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  function closeMobileNav() {
    isMobileNavOpen.value = false
  }

  function toggleSidebar() {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }

  return {
    navItems,
    currentPath,
    breadcrumbs,
    isMobileNavOpen,
    isSidebarCollapsed,
    isActive,
    toggleMobileNav,
    closeMobileNav,
    toggleSidebar
  }
}
