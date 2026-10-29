import { ref, onMounted, onUnmounted, watch, type Ref } from 'vue'

export interface ScrollProgressOptions {
  /** Offset factor from top of viewport to start tracking (0.0 to 1.0, default 0.85) */
  startOffset?: number
  /** Offset factor from top of viewport to finish tracking (0.0 to 1.0, default 0.25) */
  endOffset?: number
}

interface ProgressSubscriber {
  element: HTMLElement
  startOffset: number
  endOffset: number
  update: (progress: number) => void
}

const activeSubscribers = new Set<ProgressSubscriber>()
let sharedRafId: number | null = null
let isListening = false

function runSharedLoop() {
  sharedRafId = null
  if (typeof window === 'undefined' || activeSubscribers.size === 0) return

  const windowHeight = window.innerHeight

  for (const sub of activeSubscribers) {
    const rect = sub.element.getBoundingClientRect()
    const startPx = windowHeight * sub.startOffset
    const endPx = windowHeight * sub.endOffset
    const totalDistance = startPx - endPx
    const currentDistance = startPx - rect.top
    const rawProgress = totalDistance !== 0 ? currentDistance / totalDistance : 1
    const clampedProgress = Math.max(0, Math.min(1, rawProgress))
    sub.update(clampedProgress)
  }
}

function queueSharedUpdate() {
  if (sharedRafId === null && activeSubscribers.size > 0 && typeof window !== 'undefined') {
    sharedRafId = requestAnimationFrame(runSharedLoop)
  }
}

function ensureListener() {
  if (typeof window === 'undefined' || isListening) return
  window.addEventListener('scroll', queueSharedUpdate, { passive: true })
  window.addEventListener('resize', queueSharedUpdate, { passive: true })
  isListening = true
}

function checkCleanupListener() {
  if (typeof window === 'undefined' || !isListening) return
  if (activeSubscribers.size === 0) {
    window.removeEventListener('scroll', queueSharedUpdate)
    window.removeEventListener('resize', queueSharedUpdate)
    isListening = false
    if (sharedRafId !== null) {
      cancelAnimationFrame(sharedRafId)
      sharedRafId = null
    }
  }
}

let scrollVisibilityObserver: IntersectionObserver | null = null
const observerSubscribers = new Map<Element, {
  sub: ProgressSubscriber
  onIntersect: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void
}>()

function getScrollVisibilityObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null
  if (!scrollVisibilityObserver) {
    scrollVisibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const item = observerSubscribers.get(entry.target)
          if (item) {
            item.onIntersect(entry.isIntersecting, entry)
          }
        })
      },
      { rootMargin: '120px 0px 120px 0px' }
    )
  }
  return scrollVisibilityObserver
}

/**
 * Performant composable tracking relative scroll progress of a section through the viewport.
 * - Single shared rAF loop across all instances
 * - Gated by shared IntersectionObserver: calculates only when target is visible
 * - Clamps progress appropriately when target is offscreen above/below
 * - Respects prefers-reduced-motion (instantly returns 1.0)
 */
export function useScrollProgress(
  targetRef: Ref<HTMLElement | null>,
  options: ScrollProgressOptions = {}
) {
  const { startOffset = 0.85, endOffset = 0.25 } = options
  const progress = ref(0)

  let subscriber: ProgressSubscriber | null = null
  let observedEl: HTMLElement | null = null

  const unregister = () => {
    if (subscriber) {
      activeSubscribers.delete(subscriber)
      checkCleanupListener()
    }
    if (observedEl) {
      const obs = getScrollVisibilityObserver()
      obs?.unobserve(observedEl)
      observerSubscribers.delete(observedEl)
      observedEl = null
    }
    subscriber = null
  }

  const register = (el: HTMLElement | null) => {
    unregister()
    if (!el || typeof window === 'undefined') return

    // Accessibility check: immediately set full progress if user requests reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      progress.value = 1
      return
    }

    observedEl = el
    subscriber = {
      element: el,
      startOffset,
      endOffset,
      update: (val: number) => {
        progress.value = val
      }
    }

    const obs = getScrollVisibilityObserver()
    if (!obs) {
      activeSubscribers.add(subscriber)
      ensureListener()
      queueSharedUpdate()
      return
    }

    observerSubscribers.set(el, {
      sub: subscriber,
      onIntersect: (isIntersecting, entry) => {
        if (!subscriber) return
        if (isIntersecting) {
          activeSubscribers.add(subscriber)
          ensureListener()
          queueSharedUpdate()
        } else {
          activeSubscribers.delete(subscriber)
          checkCleanupListener()
          // If element is above viewport, progress is 1; if below, progress is 0
          if (entry.boundingClientRect.top < 0) {
            progress.value = 1
          } else {
            progress.value = 0
          }
        }
      }
    })
    obs.observe(el)
  }

  onMounted(() => {
    register(targetRef.value)
  })

  watch(
    () => targetRef.value,
    (newEl) => {
      register(newEl)
    }
  )

  onUnmounted(() => {
    unregister()
  })

  return {
    progress
  }
}

