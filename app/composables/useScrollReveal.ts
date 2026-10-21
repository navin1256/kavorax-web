import { ref, onMounted, onUnmounted, watch, nextTick, type Ref } from 'vue'

export interface ScrollRevealOptions {
  /** Viewport intersection threshold (0.0 to 1.0) */
  threshold?: number
  /** Root margin offset string, e.g. '0px 0px -40px 0px' */
  rootMargin?: string
  /** Whether to trigger only once (default: true) */
  triggerOnce?: boolean
  /** Delay in milliseconds before setting isRevealed to true */
  delay?: number
  /** If true, immediately marks visible without waiting for scroll */
  immediate?: boolean
}

/**
 * Composable for performant, accessible scroll-triggered reveals.
 * - Supports dual calling styles:
 *     1) const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })
 *     2) const { isRevealed } = useScrollReveal(existingRef, { threshold: 0.15 })
 * - Respects prefers-reduced-motion (marks visible immediately with zero transition lag)
 * - Safe for Nuxt SSR hydration (defaults visible on server for SEO/crawlers)
 * - Guarantees initial frame paint before immediate triggers so CSS transitions execute visibly
 * - Disconnects observer on unmount to prevent memory leaks
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
    threshold = 0.15,
    rootMargin = '0px 0px -30px 0px',
    triggerOnce = true,
    delay = 0,
    immediate = false
  } = options

  // Initialize to false on both server and client for consistent SSR hydration
  const isRevealed = ref(false)
  let observer: IntersectionObserver | null = null
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const triggerReveal = () => {
    if (delay > 0) {
      timeoutId = setTimeout(() => {
        isRevealed.value = true
      }, delay)
    } else {
      isRevealed.value = true
    }
  }

  const observeTarget = () => {
    if (!observer || !targetRef.value) return
    observer.observe(targetRef.value)
  }

  onMounted(() => {
    // 1. Accessibility check: if user prefers reduced motion, reveal instantly
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isRevealed.value = true
      return
    }

    // 2. Set to false initially on client so the smooth entrance animation plays visibly
    isRevealed.value = false

    // 3. If immediate trigger requested (e.g. hero top elements)
    if (immediate) {
      // Delay slightly (double rAF / 40ms) to ensure browser paints the hidden initial state first,
      // allowing the CSS transition to play visibly rather than skipping to end state
      const initialDelay = Math.max(delay, 50)
      timeoutId = setTimeout(() => {
        isRevealed.value = true
      }, initialDelay)
      return
    }

    // 4. Feature check: Fallback gracefully if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      isRevealed.value = true
      return
    }

    // 5. Initialize IntersectionObserver
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveal()
            if (triggerOnce && observer && entry.target) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            isRevealed.value = false
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    // Observe immediately if element is already attached to DOM
    if (targetRef.value) {
      observeTarget()
    } else {
      // Otherwise wait for next DOM tick or ref change
      nextTick(() => {
        if (targetRef.value) {
          observeTarget()
        }
      })
    }
  })

  // Watch for dynamic template ref assignments
  watch(
    () => targetRef.value,
    (newEl) => {
      if (newEl && observer) {
        observer.observe(newEl)
      }
    }
  )

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  })

  return {
    isRevealed,
    targetRef
  }
}
