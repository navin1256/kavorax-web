import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface ScrollProgressOptions {
  /** Offset factor from top of viewport to start tracking (0.0 to 1.0, default 0.85) */
  startOffset?: number
  /** Offset factor from top of viewport to finish tracking (0.0 to 1.0, default 0.25) */
  endOffset?: number
}

/**
 * Composable tracking relative scroll progress of a section through the viewport.
 * - Progress ranges continuously from 0.0 (entering) to 1.0 (completed)
 * - Throttled with requestAnimationFrame for smooth 60fps/120fps execution
 * - Immediately returns 1.0 when prefers-reduced-motion is active
 * - Cleans up window scroll and resize event listeners on unmount
 */
export function useScrollProgress(
  targetRef: Ref<HTMLElement | null>,
  options: ScrollProgressOptions = {}
) {
  const { startOffset = 0.85, endOffset = 0.25 } = options

  // Initialize to 0 on both server and client for consistent SSR hydration
  const progress = ref(0)
  let rafId: number | null = null

  const calculateProgress = () => {
    if (!targetRef.value || typeof window === 'undefined') return

    const rect = targetRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const startPx = windowHeight * startOffset
    const endPx = windowHeight * endOffset

    // When the top of the element is below startPx, progress = 0
    // When the top of the element reaches endPx, progress = 1
    const totalDistance = startPx - endPx
    const currentDistance = startPx - rect.top

    const rawProgress = currentDistance / totalDistance
    const clampedProgress = Math.max(0, Math.min(1, rawProgress))

    progress.value = clampedProgress
  }

  const onScroll = () => {
    if (rafId !== null) return
    rafId = requestAnimationFrame(() => {
      calculateProgress()
      rafId = null
    })
  }

  onMounted(() => {
    // Accessibility check: immediately set full progress if user requests reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      progress.value = 1
      return
    }

    // Calculate immediately and also after next frame to account for font loading/layout stabilization
    calculateProgress()
    requestAnimationFrame(() => {
      calculateProgress()
    })

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  })

  return {
    progress
  }
}
