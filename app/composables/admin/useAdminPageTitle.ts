import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ROUTE_TITLE_MAP } from '~/utils/admin-navigation'

export function useAdminPageTitle(customTitle?: string, customDescription?: string) {
  const route = useRoute()

  const fallback = computed(() => {
    const cleanPath = route.path.replace(/\/$/, '') || '/admin'
    return ROUTE_TITLE_MAP[cleanPath] || {
      title: 'Admin Console',
      description: 'KavoraX Global Administration Platform',
      iconName: 'Shield'
    }
  })

  const pageTitle = computed(() => customTitle || fallback.value.title)
  const pageDescription = computed(() => customDescription || fallback.value.description)

  useHead({
    title: `${pageTitle.value} | KavoraX Global Admin`,
    meta: [
      {
        name: 'description',
        content: pageDescription.value
      },
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]
  })

  return {
    pageTitle,
    pageDescription,
    iconName: computed(() => fallback.value.iconName)
  }
}
