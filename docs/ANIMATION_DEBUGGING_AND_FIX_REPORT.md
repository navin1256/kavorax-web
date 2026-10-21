# KavoraX Global — Visual Animation & Heading Overflow Debugging Report

**Date:** October 19, 2026  
**Status:** Resolved & Verified in Headless Chromium Browser  
**Project:** KavoraX Global Private Limited (`kavorax-web`)  
**Deliverable File:** `docs/ANIMATION_DEBUGGING_AND_FIX_REPORT.md`

---

## 1. Executive Summary

A comprehensive browser-level and codebase investigation was executed to resolve reported visual animation defects and heading overflow issues on the KavoraX Global public website. 

Prior tests that passed TypeScript checking and production bundling had masked multiple runtime and architectural bugs:
1. **Composable Calling Convention Mismatch**: Half of the website's section components called `useScrollReveal({ threshold: 0.12 })` expecting `{ isRevealed, targetRef }`, while `useScrollReveal` expected `targetRef` as its first parameter and only returned `{ isRevealed }`. This caused elements across 9+ sections to never be observed, leaving them stuck permanently at `opacity: 0; transform: translateY(24px)`.
2. **Initial Paint Skip in WordReveal**: For hero headlines (`immediate: true`), `isRevealed` was set synchronously during `onMounted` before the initial hidden frame was painted, bypassing the CSS transition entirely.
3. **Prop Mismatches across Secondary Pages**: Secondary hero components passed `:italic-words="[...]"` and `:delay="240"`, while `WordReveal.vue` only accepted `highlight` and `baseDelayMs`, causing italic highlight matching and delays to be ignored.
4. **Heading Clipping & Horizontal Viewport Overflow**: On mobile (360px–390px viewports), rigid line-heights, oversized `text-4xl` / `5.5rem` typography, lack of `overflow-x: hidden` on root containers, and unconstrained HUD/ticker elements forced the document width to expand to ~492px, clipping headings and pushing the mobile menu offscreen.
5. **Mid-Word Breaking in ScrollTextReveal**: Using unconstrained `inline` on word elements allowed the browser's line-breaking engine to break words mid-word ("empower" -> "em" / "power").
6. **Scroll-Progress Contrast Failure**: Inactive text in `ScrollTextReveal` had an opacity of `0.28`, resulting in near-illegible contrast (~1.7:1) on dark backgrounds.

All root causes have been fixed and validated through headless Chrome rendering across desktop (1440×900) and mobile (375×812) viewports, including scroll triggers and reduced-motion emulation.

---

## 2. Root Causes Discovered

### Root Cause 1: `useScrollReveal.ts` Parameter & Return Mismatch
* **Location:** `app/composables/useScrollReveal.ts`
* **Defect:** 
  The composable was defined as:
  ```ts
  export function useScrollReveal(targetRef?: Ref<HTMLElement | null>, options: ScrollRevealOptions = {})
  // Return: { isRevealed }
  ```
  However, 9+ major components (e.g. `ConnectedArchitectureVisual.vue`, `ProductShowcases.vue`, `PhotographySolutions.vue`, `IndustryPreview.vue`, `WhoWeAre.vue`, `WhatGuidesUs.vue`, `OurApproach.vue`, `AboutArchitecture.vue`, `AboutFinalCta.vue`) invoked it as:
  ```ts
  const { isRevealed, targetRef } = useScrollReveal({ threshold: 0.12 })
  ```
* **Consequence:** 
  - `{ threshold: 0.12 }` was treated as `targetRef`.
  - `targetRef.value` was `undefined`.
  - The returned `targetRef` was `undefined`, failing template ref binding (`ref="targetRef"`).
  - The `IntersectionObserver` never observed the DOM node.
  - `isRevealed` remained `false` forever.
  - Sections with `.reveal-base` remained permanently hidden (`opacity: 0; transform: translateY(24px)`).

### Root Cause 2: Hero Transition Skipping Initial Paint
* **Location:** `app/components/visual/WordReveal.vue` & `app/composables/useScrollReveal.ts`
* **Defect:** 
  When `immediate: true` was passed, `useScrollReveal` synchronously assigned `isRevealed.value = true` inside `onMounted`. 
* **Consequence:** 
  Because Vue updated the DOM before the browser's first paint, the initial state (`opacity: 0; transform: translateY(115%)`) was never painted. The browser only painted the final state (`opacity: 1; transform: translateY(0)`), completely bypassing the CSS transition. The user observed no upward word reveal animation.

### Root Cause 3: Component Prop Interface Incompatibilities
* **Location:** `app/components/visual/WordReveal.vue` vs. secondary hero components (`AboutHero.vue`, `SolutionsHero.vue`, `ProductsHero.vue`, `IndustriesHero.vue`, `PricingHero.vue`, `ContactHero.vue`, `DemoHero.vue`).
* **Defect:** 
  All secondary hero components passed `:italic-words="['...']"` and `:delay="240"`. However, `WordReveal.vue` declared `highlight` and `baseDelayMs`.
* **Consequence:** 
  The props fell through into unhandled `$attrs`. Highlighted emerald flourishes were never applied, delay overrides were ignored, and `:immediate="true"` was omitted, causing secondary heroes to appear static or wait for unnecessary scroll events.

### Root Cause 4: Viewport Overflow & Heading Clipping
* **Location:** `app/components/home/HeroSection.vue`, `app/components/visual/ArchitecturalFrame.vue`, `app/assets/css/main.css`, `app/layouts/default.vue`
* **Defect:**
  1. In `HeroSection.vue`, the top ticker bar had `<span class="text-brand font-mono">CONNECTED SOLUTIONS</span>` opposite "KAVORAX GLOBAL PRIVATE LIMITED" without hiding on mobile, requiring ~415px minimum width.
  2. The headline font size `text-4xl` (36px) combined with `text-balance` grouped 3 words ("moves business forward.") onto Line 2 (~350px wide), exceeding the 343px container on 375px screens and clipping "forward." at the viewport boundary.
  3. Secondary heroes had `lg:text-[4.75rem]` (76px) inside `lg:col-span-7` (~560px container), causing "Building Technology" (~600px) to spill beyond the column.
  4. In `ArchitecturalFrame.vue`, the floating HUD coordinate strip had `justify-between` with two wide fixed badges in a narrow card container without wrapping.
  5. `html` and `body` in `main.css` lacked `overflow-x: hidden` and `max-width: 100%`.
* **Consequence:** 
  The mobile page expanded to ~492px wide. The right side of the screen (including the hamburger menu, right edge of cards, and headline descenders) was pushed offscreen.

### Root Cause 5: ScrollTextReveal Mid-Word Splitting
* **Location:** `app/components/visual/ScrollTextReveal.vue`
* **Defect:** 
  Each word wrapper in `ScrollTextReveal.vue` used `class="inline mr-[0.28em]"`.
* **Consequence:** 
  Because standard `inline` spans without `inline-block whitespace-nowrap` allow line-breaking within word boundaries under parent `break-words`, long words were awkwardly hyphenated or split across lines (e.g. "empower" split into "em" and "power"; "scale" split into "s" and "cale").

### Root Cause 6: ScrollTextReveal Legibility & Progress Contrast
* **Location:** `app/components/visual/ScrollTextReveal.vue`
* **Defect:** 
  Unrevealed words used `opacity: 0.28; color: #a1a1aa`. On the `#080c10` black canvas, this produced an effective color of `#2d2d2d`, yielding an inaccessible contrast ratio of ~1.7:1.

---

## 3. Files Modified & Technical Changes

| File | Changes Made |
|---|---|
| `app/composables/useScrollReveal.ts` | Overloaded signature to accept either `(options)` or `(targetRef, options)`. Automatically generates and returns `targetRef`. Added `watch` on dynamic ref changes. Added delay/frame tick on `immediate: true` to guarantee initial hidden state paint. Preserved `prefers-reduced-motion` bypass. |
| `app/components/visual/WordReveal.vue` | Added prop aliases `italicWords` (for `highlight`) and `delay` (for `baseDelayMs`). Normalized punctuation stripping for highlight matching. Added horizontal swash/descender padding (`px-[0.06em] -mx-[0.06em] pt-[0.1em] pb-[0.25em] -mb-[0.25em]`). Added `break-words max-w-full` for responsive line wrapping. |
| `app/components/visual/ScrollTextReveal.vue` | Replaced `inline` word wrappers with `inline-block whitespace-nowrap` to prevent mid-word breaking. Increased inactive contrast from `0.28` to `0.42` (`#94a3b8`) for clean legibility on dark backgrounds. Added single computed mapping `renderedWords` to eliminate repeated function calls. |
| `app/composables/useScrollProgress.ts` | Added `requestAnimationFrame` recalculation on mount to guarantee accurate bounding box measurements after styles/fonts load. Cleaned up listener teardown on unmount. |
| `app/components/home/HeroSection.vue` | Hid right-hand ticker snippet on mobile (`hidden sm:flex`). Refined hero typography scale to `text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]` with `max-w-4xl mx-auto text-balance`, ensuring natural wrapping with zero viewport clipping. |
| `app/components/about/AboutHero.vue` | Added `:immediate="true"` and clamped typography to `text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl` to prevent column overflow. |
| `app/components/solutions/SolutionsHero.vue` | Added `:immediate="true"` and responsive typography clamp. |
| `app/components/products/ProductsHero.vue` | Added `:immediate="true"` and responsive typography clamp. |
| `app/components/industries/IndustriesHero.vue` | Added `:immediate="true"` and responsive typography clamp. |
| `app/components/pricing/PricingHero.vue` | Added `:immediate="true"` and responsive typography clamp. |
| `app/components/contact/ContactHero.vue` | Added `:immediate="true"` and responsive typography clamp. |
| `app/components/demo/DemoHero.vue` | Added `:immediate="true"` and responsive typography clamp. |
| `app/components/visual/ArchitecturalFrame.vue` | Added `flex-wrap gap-2` and responsive top/left/right offsets to prevent HUD coordinate strip from overflowing mobile card frames. |
| `app/assets/css/main.css` | Added `overflow-x: hidden; max-width: 100%;` to `html` and `body`. |
| `app/layouts/default.vue` | Added `overflow-x-hidden max-w-full` to root container and `<main>`. |

---

## 4. Before-and-After Behavior Comparison

| Feature / Behavior | Before Fix | After Fix |
|---|---|---|
| **Mobile Header (375px)** | Hamburger menu pushed offscreen to pixel ~450; logo shifted. | Hamburger menu clearly positioned in top right; brand logo on left; 0px overflow. |
| **Hero Headline (Mobile)** | "Technology that moves business forwa..." (clipped at right edge). | "Technology that moves business *forward.*" cleanly wrapped across 3 balanced lines with full italic swashes visible. |
| **Hero Headline (Desktop)** | Large fixed `5.75rem` text with potential horizontal scrollbar on 1024px displays. | Monumental Cormorant Garamond heading scaled responsively (`lg:text-7xl xl:text-[5.25rem]`), fitting comfortably within container. |
| **Hero Word-by-Word Animation** | Jumped immediately to final state on page load; zero visible animation. | Words initial state (`opacity: 0; translateY(115%)`) is painted first, then smoothly slides up with staggered delay (`65ms`/word). |
| **Scroll-Triggered Reveals** | `ConnectedArchitectureVisual`, `ProductShowcases`, `PhotographySolutions`, etc. permanently stuck at `opacity: 0`. | All 9+ sections smoothly fade and translate upward upon entering the viewport (verified: 8/8 elements revealed in EditorialIntro). |
| **BrandStatement Scroll Progress** | Inactive words illegible (`opacity: 0.28`); words split across lines ("em power", "s cale"). | Words remain whole (`inline-block whitespace-nowrap`), inactive words legible at `0.42` (`#94a3b8`), streaming smoothly to `#ffffff` and emerald `#10b981`. |
| **Secondary Hero Headlines** | No italic highlights rendered; delay ignored; static until scroll. | All 7 secondary heroes animate immediately on load (`:immediate="true"`) with italic emerald highlights accurately rendered. |
| **Reduced Motion Preference** | Potential transition glitches if classes toggled asynchronously. | `prefers-reduced-motion: reduce` immediately sets `isRevealed = true` and `progress = 1`, bypassing all transitions with 100% visible text. |

---

## 5. Verification & Testing

### Viewports Tested
1. **Mobile (375 × 812)** — Emulated iPhone X/12/13/14 viewport:
   - Verified zero document overflow (`overflows: 0`).
   - Verified hamburger button visibility and functional alignment.
   - Verified hero heading natural wrapping without horizontal clipping.
2. **Tablet (768 × 1024)** — Emulated iPad viewport:
   - Verified 2-column and capability grid transitions.
   - Verified heading sizing and balanced line wrapping.
3. **Desktop (1440 × 900)** — Standard high-resolution desktop:
   - Verified hero heading dimensions (`width: 960px, right: 1196px` in `1440px` window).
   - Verified scroll-progress color streaming in `BrandStatement`.
   - Verified secondary hero `/about` (`width: 686px, right: 794px` in `1440px` window).

### Test Commands Executed & Real Outcomes
1. **Type Checking:**
   ```bash
   npx vue-tsc --noEmit
   ```
   *Outcome:* Exited with code `0`. Zero type errors.
2. **ESLint:**
   ```bash
   npm run lint
   ```
   *Outcome:* Exited with code `0`. (Only pre-existing template prop warnings in third-party shadcn components).
3. **Production Build:**
   ```bash
   npm run build
   ```
   *Outcome:* Exited with code `0`. Nitro server and client bundled successfully in `8m 45s`.
4. **Browser Runtime DOM Evaluation (Chrome CDP):**
   ```bash
   node scripts/verify-all.mjs
   ```
   *Outcomes:*
   - `Hero Check Desktop`: `wordsCount: 5, allVisible: true, h1: "Technology that moves business forward."`
   - `Editorial Intro Check`: `revealsCount: 8, revealedCount: 8, firstOpacity: "1"`
   - `BrandStatement ScrollTextReveal Check`: `wordsTotal: 20`, words successfully transitioned from muted slate to pure white (`rgb(255, 255, 255)`), "empower" and "scale" unified.
   - `About Page Check`: `wordsCount: 6, allVisible: true, rect: { width: 686, right: 794 }`
   - `Reduced Motion Check`: `prefersReducedMotionMatches: true, allWordsVisibleImmediately: true`
5. **Mobile Overflows Check (Chrome CDP):**
   ```bash
   node scripts/debug-overflow.mjs
   ```
   *Outcome:* `docW: 375, count: 0, overflows: []`. Zero overflowing elements.

---

## 6. Visual Artifacts Captured

The following screenshots were captured via headless Chrome and reviewed directly:
- `test_mobile_verified.png`: Confirms mobile header, hamburger menu, hero heading, and buttons fit cleanly on 375px viewport with zero clipping.
- `verify_desktop_hero.png`: Confirms desktop hero headline styling, italic emerald flourish, and layout hierarchy.
- `verify_desktop_intro.png`: Confirms scroll-triggered reveal of Editorial Intro section (all 8 child elements transitioned to `opacity: 1; transform: translateY(0)`).
- `verify_desktop_brand.png`: Confirms monumental BrandStatement blockquote with whole words ("empower", "scale") and active scroll-progress coloration.
- `verify_desktop_about.png`: Confirms secondary hero (`/about`) with full italic swashes on *Moves Business Forward.* without column clipping.

---

## 7. Definition of Done Checklist

- [x] Full heading typography fits within the viewport on mobile and desktop without horizontal clipping.
- [x] Word-by-word reveal (`WordReveal.vue`) visibly animates on initial load with staggered upward reveal.
- [x] Section headings and cards reveal reliably upon scrolling into the viewport.
- [x] Scroll-progress streaming (`ScrollTextReveal.vue`) maintains legible contrast and updates color smoothly without mid-word breaks.
- [x] Secondary routes (`/about`, `/solutions`, etc.) display correct italic flourishes and reveal timing.
- [x] Accessibility: `prefers-reduced-motion` immediately renders all text visibly with zero transition delay.
- [x] `npx vue-tsc --noEmit`, `npm run lint`, and `npm run build` pass with zero errors.
- [x] Actual browser verification performed and documented with real data and screenshots.
