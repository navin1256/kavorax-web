import { ref, onMounted, onUnmounted, watch, nextTick, type Ref } from 'vue'

export interface ScrollRevealOptions {
  /** Viewport intersection threshold (0.0 to 1.0) */
  threshold?: number
  /** Root margin offset string, e.g. '100px 0px 100px 0px' */
  rootMargin?: string
  /** Whether to trigger only once (default: true) */
  triggerOnce?: boolean
  /** Delay in milliseconds before setting isRevealed to true */
  delay?: number
  /** If true, immediately marks visible without waiting for scroll */
  immediate?: boolean
}

type ObserverCallback = (isIntersecting: boolean, entry?: IntersectionObserverEntry) => void

interface ObserverRecord {
  observer: IntersectionObserver
  targets: Map<Element, ObserverCallback>
}

// Module-level shared observer pool keyed by threshold and rootMargin
const observerPool = new Map<string, ObserverRecord>()

let prefersReducedMotionCache: boolean | null = null

function getPrefersReducedMotion(): boolean {
  if (prefersReducedMotionCache !== null) return prefersReducedMotionCache
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotionCache = mq.matches
    mq.addEventListener?.('change', (e) => {
      prefersReducedMotionCache = e.matches
    })
    return prefersReducedMotionCache
  }
  return false
}

// Global scroll/jump check for fast scrolling, anchor jumps, and End key
let globalScrollListenerAttached = false
let scrollDebounceTimer: ReturnType<typeof setTimeout> | null = null

function runGlobalScrollCheck() {
  scrollDebounceTimer = null
  if (typeof window === 'undefined') return
  const windowHeight = window.innerHeight

  for (const record of observerPool.values()) {
    for (const [el, cb] of record.targets) {
      try {
        const rect = el.getBoundingClientRect()
        // If element is in or very near the viewport, trigger reveal
        if (rect.top < windowHeight + 120 && rect.bottom > -80) {
          cb(true)
        }
      } catch (e) {}
    }
  }
}

function queueGlobalScrollCheck() {
  if (typeof window === 'undefined') return
  if (scrollDebounceTimer) clearTimeout(scrollDebounceTimer)
  scrollDebounceTimer = setTimeout(runGlobalScrollCheck, 120)
}

function ensureGlobalScrollListener() {
  if (globalScrollListenerAttached || typeof window === 'undefined') return
  window.addEventListener('scroll', queueGlobalScrollCheck, { passive: true })
  window.addEventListener('resize', queueGlobalScrollCheck, { passive: true })
  window.addEventListener('hashchange', runGlobalScrollCheck, { passive: true })
  window.addEventListener('popstate', runGlobalScrollCheck, { passive: true })
  globalScrollListenerAttached = true
}

function getSharedObserver(threshold: number, rootMargin: string): ObserverRecord | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null
  const key = `${threshold}_${rootMargin}`
  let record = observerPool.get(key)
  if (!record) {
    const targets = new Map<Element, ObserverCallback>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = targets.get(entry.target)
          if (cb) {
            cb(entry.isIntersecting, entry)
          }
        })
      },
      { threshold, rootMargin }
    )
    record = { observer, targets }
    observerPool.set(key, record)
  }
  ensureGlobalScrollListener()
  return record
}

/**
 * Hardened, performant composable for scroll-triggered reveals.
 * - Safe for Nuxt SSR / prerender: defaults to true on server so prerendered HTML has content
 * - Instant mount check: elements already in the viewport reveal immediately without double DOM thrash
 * - Gentle threshold (0.05) and expansive rootMargin (100px) so content is visible before hitting screen edge
 * - Safety net: forces reveal 1.5s after mount or entering viewport
 * - Fast scroll / End key / anchor jump handler: window scroll fallback checks all active targets
 * - Unobserves strictly AFTER reveal has completed
 */
export function useScrollReveal(
  targetRefOrOptions?: Ref<HTMLElement | null> | ScrollRevealOptions,
  maybeOptions?: ScrollRevealOptions
) {
  const isRefProvided = targetRefOrOptions && typeof targetRefOrOptions === 'object' && 'value' in targetRefOrOptions
  const targetRef = (isRefProvided
    ? (targetRefOrOptions as Ref<HTMLElement | null>)
    : ref<HTMLElement | null>(null)) as Ref<HTMLElement | null>

  const options: ScrollRevealOptions = (
    isRefProvided
      ? maybeOptions
      : (targetRefOrOptions as ScrollRevealOptions)
  ) || {}

  const {
    threshold = 0.05,
    rootMargin = '100px 0px 100px 0px',
    triggerOnce = true,
    delay = 0,
    immediate = false
  } = options

  // Safe SSR & Client initialization: matches exactly between server and client
  // - Prevents hydration flash (revealed -> hidden -> animating)
  // - Below-the-fold elements start hidden/offset and animate in on scroll
  // - Immediate elements (heros) reveal immediately
  const isRevealed = ref(Boolean(immediate))
  let observedEl: HTMLElement | null = null
  let activeRecord: ObserverRecord | null = null
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let safetyTimerId: ReturnType<typeof setTimeout> | null = null

  const unobserveCurrent = () => {
    if (observedEl && activeRecord) {
      activeRecord.observer.unobserve(observedEl)
      activeRecord.targets.delete(observedEl)
      observedEl = null
      activeRecord = null
    }
  }

  const triggerReveal = () => {
    if (isRevealed.value) {
      if (triggerOnce) unobserveCurrent()
      return
    }

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        isRevealed.value = true
        if (triggerOnce) {
          unobserveCurrent()
        }
      }, delay)
    } else {
      isRevealed.value = true
      if (triggerOnce) {
        unobserveCurrent()
      }
    }
  }

  const observeTarget = (el: HTMLElement | null) => {
    if (!el || typeof window === 'undefined') return
    if (el === observedEl && activeRecord) return

    // If already revealed and triggerOnce is true, keep it revealed
    if (isRevealed.value && triggerOnce) return

    unobserveCurrent()

    // Immediate viewport proximity check
    try {
      const rect = el.getBoundingClientRect()
      const inOrNearViewport = rect.top < window.innerHeight + 120 && rect.bottom > -80
      if (inOrNearViewport || immediate) {
        triggerReveal()
        return
      }
    } catch (e) {}

    // Safe threshold clamping: large section headings must not wait for 15% of section height
    const safeThreshold = Math.min(threshold, 0.05)
    activeRecord = getSharedObserver(safeThreshold, rootMargin)
    if (!activeRecord) {
      isRevealed.value = true
      return
    }

    observedEl = el
    activeRecord.targets.set(el, (isIntersecting) => {
      if (isIntersecting) {
        triggerReveal()
      } else if (!triggerOnce) {
        isRevealed.value = false
      }
    })
    activeRecord.observer.observe(el)

    // Safety net: force reveal after 1.5s if not already triggered
    if (!safetyTimerId) {
      safetyTimerId = setTimeout(() => {
        if (!isRevealed.value) {
          triggerReveal()
        }
      }, 1500)
    }
  }

  onMounted(() => {
    // 1. Accessibility check: if user prefers reduced motion, reveal immediately
    if (getPrefersReducedMotion()) {
      isRevealed.value = true
      return
    }

    // 2. Immediate mode (e.g. hero elements)
    if (immediate) {
      isRevealed.value = true
      return
    }

    // 3. Fallback if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      isRevealed.value = true
      return
    }

    // 4. Initial viewport check and observe
    const el = targetRef.value
    if (el) {
      const rect = el.getBoundingClientRect()
      const inOrNearViewport = rect.top < window.innerHeight + 120 && rect.bottom > -80
      if (inOrNearViewport) {
        // Element is already in the viewport upon mount! Reveal immediately without double DOM thrash
        triggerReveal()
        return
      }
      isRevealed.value = false
      observeTarget(el)
    } else {
      isRevealed.value = false
      nextTick(() => {
        if (targetRef.value) {
          observeTarget(targetRef.value)
        }
      })
    }

    // Global safety net: 1.5s after mount, force reveal if still hidden
    safetyTimerId = setTimeout(() => {
      if (!isRevealed.value) {
        triggerReveal()
      }
    }, 1500)
  })

  // Watch for dynamic template ref assignments
  watch(
    () => targetRef.value,
    (newEl) => {
      if (newEl) {
        observeTarget(newEl)
      } else {
        unobserveCurrent()
      }
    }
  )

  onUnmounted(() => {
    unobserveCurrent()
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    if (safetyTimerId) {
      clearTimeout(safetyTimerId)
      safetyTimerId = null
    }
  })

  return {
    isRevealed,
    targetRef
  }
}
