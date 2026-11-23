# KavoraX Global Website — Comprehensive Codebase Summary Report

**Audit Date:** November 18, 2026  
**Auditor:** Senior Front-End Engineer & Senior Systems Architect  
**Project:** KavoraX Global Marketing Website (`kavorax-web`)  
**Repository:** `https://github.com/navin1256/kavorax-web.git`  
**Target Domain:** `https://kavorax.com`  
**Branch Audited:** `font-preview-p1` (`ecf1b87` tracking `origin/font-preview-p1`)  
**Scope:** Forensic Codebase Audit (Read-Only)

---

## 1. Executive Summary

This forensic codebase audit examines the complete repository of the KavoraX marketing web platform. The platform was evaluated against the approved commercial requirements (B2B SaaS operations platform covering POS & Billing, Inventory, KDS, CRM, Digital Ordering, Delivery, and Analytics for Restaurants, Retail, and SMEs in India and Oman).

* **Overall Codebase State:** The technical plumbing is stable and modern (Nuxt 4.5.2, Vite, Tailwind CSS v4, Vue 3.5, TypeScript strict mode with 0 compile errors, clean ESLint pass, and server-side Turnstile verification). However, the business logic and marketing presentation suffer from an **acute architectural disconnect**: the marketing pages describe an abstract, high-frequency enterprise telemetry and FinTech/Healthcare data pipeline, completely divorced from KavoraX's actual product (POS, counter billing, kitchen display, and retail inventory).
* **Biggest Strength — Modern Build & Verification:** The project compiles cleanly with `vue-tsc --noEmit` (0 errors) and passes ESLint with 0 warnings. Server-side rendering (SSR) and Nitro static pre-rendering are fully functional; testing with JavaScript disabled confirmed that all main routes deliver pre-rendered HTML (45 KB to 140 KB per page).
* **Biggest Strength — Secure BFF Architecture:** Form endpoints (`server/api/contact.post.ts`, `server/api/demo-booking.post.ts`) implement fail-closed Cloudflare Turnstile CAPTCHA verification before proxying sanitized payloads to backend Spring Boot endpoints (`http://localhost:8080/api/v1/...`).
* **Critical Finding 1 — Severe Brand & Industry Misalignment:** Core marketing sections (`app/components/industries/IndustriesOverview.vue:11-60`, `app/components/industries/IndustryDetailSections.vue`, and `app/components/demo/DemoFormSection.vue:75-100`) promote "Financial Services & FinTech", "Healthcare & Life Sciences", and "Supply Chain & Logistics". Nowhere does the site feature dedicated landing pages or tailored copy for Restaurants, Cafes, Hospitality, Retail, Salons, or Convenience Stores.
* **Critical Finding 2 — Disconnected Internationalization (i18n):** While `@nuxtjs/i18n` is installed and four translation files exist in `i18n/locales/` (`en.json`, `ar.json`, `hi.json`, `ta.json`), **zero components import `useI18n` or call `$t()`**. 100% of the UI copy is hardcoded in English across all 113 Vue components.
* **Critical Finding 3 — RTL Layout Incompatibility:** A directional scan revealed **353 occurrences of hardcoded physical CSS properties** (`ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`, `text-left`) versus only **7 logical properties** (`ms-`, `me-`, `ps-`, `pe-`). When rendered in Arabic (`dir="rtl"`), layouts, chevrons, and inputs will break visually.
* **Critical Finding 4 — Pricing Obfuscation & Missing Currency Switches:** The pricing page (`app/pages/pricing.vue`, `app/components/pricing/SolutionComparison.vue:26-54`) lists zero figures, zero tiers, no ₹ (INR) pricing, no OMR pricing, and no currency toggle. It presents abstract "Departmental", "Cross-Enterprise", and "Global Distributed Grid" latency tiers instead of SaaS subscription plans.
* **Critical Finding 5 — Unused UI Component Bloat:** 23 shadcn-vue component files in `app/components/ui/card/` (7 files), `app/components/ui/dropdown-menu/` (14 files), and `app/components/ui/separator/` (2 files) are completely unimported anywhere in the application, triggering duplicate name warnings (`[NUXT_B3011]`) on every build.
* **Critical Finding 6 — Missing Required Pages:** Routes specified in the approved architecture for **Resources / Insights** (`/resources`) and **Careers** (`/careers`) do not exist; both are configured as 301 redirects to `/solutions` and `/about` in `nuxt.config.ts:98-99`. Furthermore, all 6 industry paths (`/restaurants`, `/cafes`, `/retail`, etc.) are 301-redirected to the generic `/industries` page.
* **Critical Finding 7 — Monolithic Component Outliers:** Two components exceed 990 lines of code: `app/components/products/SolutionsOverview.vue` (1,017 lines) and `app/components/industries/IndustryDetailSections.vue` (992 lines). Both embed repetitive hardcoded tab arrays and simulated telemetry widgets.
* **Readiness for Launch:** **NOT READY FOR MARKET LAUNCH.** While the code runs without technical crashes, deploying this site today would present potential customers with an AI-generated facade discussing healthcare diagnostics and latency SLAs rather than a retail POS and billing platform.

---

## 2. Repository Overview

### 2.1 File and Line Counts by File Type

Total files in audit scope: **166 files** (excluding `node_modules/`, `.nuxt/`, `.output/`, `dist/`, and `.git/`).

| File Extension | File Count | Total Lines of Code | Total Raw Bytes | Primary Purpose |
|---|---|---|---|---|
| `.vue` | 113 | 14,006 | 639,094 | Page templates, section views, UI primitives, layouts |
| `.ts` | 25 | 1,982 | 67,277 | Composables, config, type definitions, server BFF routes |
| `.json` | 7 | 467 | 23,621 | Locale dictionaries (`en`, `ar`, `hi`, `ta`), `package.json`, config |
| `.webp` | 7 | 0 (Binary) | 1,085,658 | Editorial and architectural background photography |
| `.md` | 2 | 1,066 | 72,186 | `README.md` and legacy industries audit report |
| `.yaml` | 2 | 12,002 | 437,260 | `pnpm-lock.yaml` and `pnpm-workspace.yaml` |
| `.png` | 1 | 0 (Binary) | 305,768 | Official raster logo (`public/logo.png`) |
| `.ico` | 1 | 0 (Binary) | 4,286 | Browser tab favicon (`public/favicon.ico`) |
| `.css` | 1 | 509 | 14,051 | Global Tailwind v4 design system (`app/assets/css/main.css`) |
| `.mjs` | 1 | 18 | 357 | ESLint configuration (`eslint.config.mjs`) |
| `.txt` | 1 | 7 | 107 | Robots exclusion template (`public/_robots.txt`) |
| `.example` | 1 | 6 | 206 | Environment template (`.env.example`) |
| `.prettierrc` | 1 | 7 | 108 | Code formatting config |
| `.gitignore` | 1 | 30 | 319 | Git version control exclusions |
| `.npmrc` | 1 | 1 | 50 | Package manager settings |
| `.gitkeep` | 1 | 0 | 0 | Empty middleware folder placeholder |
| **TOTAL** | **166** | **30,102** | **2,649,948** | Complete Codebase Inventory |

### 2.2 Nuxt 4 Directory Layout Structure

The repository adheres to the Nuxt 4 forward-compatible directory layout:

```
d:/kavorax-web/
├── app/                                 # Nuxt 4 application root
│   ├── app.vue                          # Root app component (5 lines)
│   ├── assets/
│   │   └── css/main.css                 # Master Tailwind v4 & design tokens (509 lines)
│   ├── components/
│   │   ├── about/                       # 6 About page components
│   │   ├── contact/                     # 4 Contact page components
│   │   ├── demo/                        # 4 Demo / Experience Center components
│   │   ├── home/                        # 9 Homepage sections & hero visual
│   │   ├── industries/                  # 5 Industry overview and detail sections
│   │   ├── layout/                      # AppHeader, AppFooter, MobileNavigation
│   │   ├── pricing/                     # 6 Pricing and scope comparison components
│   │   ├── products/                    # 6 Product catalog and architecture components
│   │   ├── solutions/                   # 6 Solutions areas and problem-mapping components
│   │   ├── ui/                          # 40 shadcn-vue/reka UI components (23 unused)
│   │   ├── visual/                      # 5 Visual effects (WordReveal, ChapterLabel, etc.)
│   │   ├── CookieBanner.vue             # LocalStorage consent banner
│   │   ├── ProductPageTemplate.vue      # Dynamic template for all 8 product routes
│   │   └── WhatsAppWidget.vue           # Floating WhatsApp CTA
│   ├── composables/                     # API client, module store, scroll utilities
│   ├── layouts/default.vue              # Main site shell
│   ├── lib/utils.ts                     # cn() helper
│   ├── middleware/.gitkeep              # Empty middleware directory
│   ├── pages/                           # 18 page routes (SSR & prerendered)
│   ├── plugins/studio-listener.client.ts# Nuxt Studio preview listener
│   ├── types/api.ts                     # API payload interfaces
│   └── utils/index.ts                   # Export helpers
├── audit/                               # Forensic audit outputs (this directory)
├── docs/                                # Documentation and legacy audit reports
├── i18n/locales/                        # ar.json, en.json, hi.json, ta.json
├── public/                              # logo.png, favicon.ico, _robots.txt, images/*.webp
├── server/                              # Nitro server engine
│   ├── api/                             # apply, contact, demo-booking, newsletter BFF routes
│   └── utils/turnstile.ts               # Server-side Turnstile verification helper
├── shared/types/index.ts                # Shared navigation interfaces
├── nuxt.config.ts                       # Nuxt 4 build configuration
├── tailwind.config.ts                   # Tailwind theme extension
├── package.json                         # Dependencies & scripts
└── tsconfig.json                        # TypeScript settings
```

---

## 3. Tech Stack & Dependencies Audit

| Package | Installed Version | Purpose | In Use? (Evidence) | Health & Risk Notes |
|---|---|---|---|---|
| `nuxt` | `^4.5.2` | Core fullstack framework | **Yes** (`package.json:27`) | Nuxt 4.6.1 runtime loaded. Modern, stable. |
| `vue` | `^3.5.43` | Reactive UI engine | **Yes** (`package.json:34`) | Vue 3 Composition API. |
| `vue-router` | `^5.3.1` | Client router | **Yes** (`package.json:35`) | Managed via Nuxt routing. |
| `@nuxtjs/turnstile` | `^1.1.3` | Bot challenge protection | **Yes** (`nuxt.config.ts:29`, `server/utils/turnstile.ts:8`) | Integrated on contact and demo booking forms. |
| `@tailwindcss/vite` | `^4.3.3` | Tailwind CSS v4 compiler | **Yes** (`nuxt.config.ts:1`, `main.css:1`) | Uses Vite plugin architecture. |
| `tailwindcss` | `^4.3.3` | Utility CSS framework | **Yes** (`package.json:32`) | Core engine for Tailwind v4. |
| `@nuxt/fonts` | `^0.14.0` | Automated font loading | **Yes** (`nuxt.config.ts:24, 32-44`) | Manages Fraunces, Inter, JetBrains Mono. |
| `@nuxt/image` | `^2.1.0` | Image optimization pipeline | **Yes** (`nuxt.config.ts:23`) | Sharp included in Nitro output. |
| `@nuxtjs/i18n` | `^10.6.0` | Internationalization framework | **Partial** (`nuxt.config.ts:22, 69-78`) | Configured with 4 locales, but **0 components use it**. |
| `@nuxtjs/robots` | `^6.2.3` | Crawling policy rules | **Yes** (`nuxt.config.ts:26, 53-62`) | Generates robots.txt; flags /api disallow warning. |
| `@nuxtjs/sitemap` | `^8.5.1` | XML sitemap generation | **Yes** (`nuxt.config.ts:25`) | Successfully builds `sitemap.xml` during build. |
| `@vueuse/core` | `^15.0.0` | Composition utilities | **Yes** (`package.json:22`) | Used for scroll and observer utilities. |
| `@vueuse/nuxt` | `^15.0.0` | VueUse auto-imports | **Yes** (`nuxt.config.ts:27`) | Enables composable auto-imports. |
| `nuxt-gtag` | `^5.0.0` | Google Tag Manager / GA4 | **Partial** (`nuxt.config.ts:28, 82`) | Module loaded; not gated by cookie consent. |
| `lucide-vue-next` | `^1.0.0` | UI icon library | **Yes** (Imported in 50+ files) | Consistent Lucide icon set throughout. |
| `zod` | `^3.24.2` | Schema validation | **Yes** (`ContactFormSection.vue:19`, `DemoFormSection.vue:21`) | Client-side form validation schemas. |
| `clsx` | `^2.1.1` | Conditional class builder | **Yes** (`app/lib/utils.ts:1`) | Utility for `cn()` helper. |
| `tailwind-merge` | `^3.7.0` | Conflict-free class merger | **Yes** (`app/lib/utils.ts:2`) | Utility for `cn()` helper. |
| `class-variance-authority` | `^0.7.1` | Component variant typing | **Yes** (`app/components/ui/button/index.ts:3`) | CVA button variant definition. |
| `reka-ui` | `^2.11.0` | Headless UI primitives | **Yes** (`Button.vue:2`, `Sheet.vue:2`) | Radix-Vue v2 rebrand used in UI primitives. |
| `radix-vue` | `^1.9.17` | Legacy headless primitives | **Redundant** (`Accordion.vue:7`) | **Redundant with `reka-ui`**. Should be unified. |
| `tailwindcss-animate` | `^1.0.7` | Keyframe animation utilities | **Yes** (`tailwind.config.ts:158`) | Animation utility plugin. |

---

## 4. Configuration Review

### 4.1 `nuxt.config.ts` Analysis
* **Rendering & Route Rules (`routeRules`):** Static pre-rendering (`prerender: true`) is explicitly declared for 12 routes (`/`, `/about`, `/solutions`, `/products`, `/industries`, `/pricing`, `/contact`, `/demo`, `/pos-and-billing`, `/kitchen-display`, `/privacy-policy`, `/terms-of-service`). Static cache headers are defined for `/_nuxt/**` (1 year immutable) and `/images/**` (24 hours).
* **Redirects:** Redirect rules are enforced:
  * `/contact-us` -> `/contact` (301)
  * `/careers` -> `/about` (301) — **Careers page is missing!**
  * `/resources` -> `/solutions` (301) — **Resources/Insights page is missing!**
  * `/restaurants`, `/cafes`, `/retail`, `/convenience-stores`, `/hospitality`, `/salons`, `/ecommerce` -> all redirected to `/industries` or `/solutions` (301).
* **Typography Configuration (`fonts`):** Google Fonts provider configured for **Fraunces** (weights 300-700, normal/italic), **Inter** (weights 300-700, normal/italic), and **JetBrains Mono** (weights 400-600). Defaults request preloading of weights 400 and 600, but only for `["latin", "latin-ext"]` subsets.
* **Turnstile Configuration:** Site key is read from `process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY`. When unset, it outputs a build warning.
* **i18n Configuration:** Strategy is `prefix_except_default` with default locale `en`. Locales declared: English (`en-IN`), Arabic (`ar-OM`, RTL), Hindi (`hi-IN`), Tamil (`ta-IN`).

---

## 5. Routes & Pages Inventory

The application defines **18 distinct page routes** in `app/pages/`:

| Route URL | Source File | Layout | Rendering | SEO Meta Present? | Key Components Used | Primary CTAs & Targets | Status |
|---|---|---|---|---|---|---|---|
| `/` | `app/pages/index.vue` | `default` | Prerender | Title & Description (`index.vue:15-30`) | HeroSection, ConnectedArchitectureVisual, EditorialIntro, ProductShowcases, BrandStatement | `/demo` (Book Demo), `/solutions` | Complete |
| `/about` | `app/pages/about.vue` | `default` | Prerender | Title & Description (`about.vue:7-21`) | AboutHero, WhoWeAre, WhatGuidesUs, OurApproach, AboutArchitecture, AboutFinalCta | `/demo` (Book Demo), `/contact` | Complete |
| `/solutions` | `app/pages/solutions/index.vue` | `default` | Prerender | Title & Description (`solutions/index.vue:8-23`) | SolutionsHero, SolutionsAreas, SolutionsBusinessNeeds, SolutionsIndustries, SolutionsClosingCta | `/demo` (Schedule Architecture Review) | Complete |
| `/products` | `app/pages/products/index.vue` | `default` | Prerender | Title & Description (`products/index.vue:8-23`) | ProductsHero, SolutionsOverview, ConnectedArchitecture, SolutionSelection, ProductsFinalCta | `/demo` (Book a Demo), `/contact` | Complete |
| `/industries` | `app/pages/industries/index.vue` | `default` | Prerender | Title & Description (`industries/index.vue:8-21`) | IndustriesHero, IndustriesOverview, IndustryDetailSections, ConnectedOperations | `/demo` (Request Industry Briefing) | **Misaligned** |
| `/pricing` | `app/pages/pricing.vue` | `default` | Prerender | Title & Description (`pricing.vue:8-21`) | PricingHero, PricingApproach, SolutionComparison, PricingFaq, PricingFinalCta | `/demo` (Book a Demo), `/contact` | **No Prices** |
| `/demo` | `app/pages/demo.vue` | `default` | Prerender | Title & Description (`demo.vue:7-24`) | DemoHero, DemoFormSection, DemoWhatToExpect, DemoClosingCta | `server/api/demo-booking` (Submit) | Partial |
| `/contact` | `app/pages/contact.vue` | `default` | Prerender | Title & Description (`contact.vue:7-22`) | ContactHero, ContactChannels, ContactFormSection, ContactClosingCta | `server/api/contact` (Submit) | Complete |
| `/pos-and-billing` | `app/pages/pos-and-billing.vue` | `default` | Prerender | Title & Description (`pos-and-billing.vue:14-21`) | ProductPageTemplate (`module="pos-and-billing"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/kitchen-display` | `app/pages/kitchen-display.vue` | `default` | Prerender | Title & Description (`kitchen-display.vue:8-15`) | ProductPageTemplate (`module="kitchen-display"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/inventory-and-stock` | `app/pages/inventory-and-stock.vue` | `default` | SSR | Title & Description (`inventory-and-stock.vue:8-15`) | ProductPageTemplate (`module="inventory-and-stock"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/digital-ordering` | `app/pages/digital-ordering.vue` | `default` | SSR | Title & Description (`digital-ordering.vue:8-15`) | ProductPageTemplate (`module="digital-ordering"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/crm` | `app/pages/crm.vue` | `default` | SSR | Title & Description (`crm.vue:8-15`) | ProductPageTemplate (`module="crm"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/multi-location` | `app/pages/multi-location.vue` | `default` | SSR | Title & Description (`multi-location.vue:8-15`) | ProductPageTemplate (`module="multi-location"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/business-analytics` | `app/pages/business-analytics.vue` | `default` | SSR | Title & Description (`business-analytics.vue:8-15`) | ProductPageTemplate (`module="business-analytics"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/delivery-management` | `app/pages/delivery-management.vue` | `default` | SSR | Title & Description (`delivery-management.vue:8-15`) | ProductPageTemplate (`module="delivery-management"`) | `/demo` (Book Demo), `#showcase` | Complete |
| `/privacy-policy` | `app/pages/privacy-policy.vue` | `default` | Prerender | Title & Description (`privacy-policy.vue:3-12`) | Markdown-style legal article blocks | Internal nav links | Complete |
| `/terms-of-service` | `app/pages/terms-of-service.vue` | `default` | Prerender | Title & Description (`terms-of-service.vue:3-12`) | Markdown-style legal article blocks | Internal nav links | Complete |

---

## 6. Coverage Against the Approved Commercial Plan

| Requirement | Status | Evidence (file:line) | Detailed Finding |
|---|---|---|---|
| **10 Main Pages** | ⚠️ Partial | `nuxt.config.ts:98-99` | 8 pages exist. **Resources / Insights** and **Careers** do not exist and are hard-redirected to `/solutions` and `/about`. |
| **9 Product Pages** | ⚠️ Partial | `app/composables/useModules.ts:1-485` | 8 dedicated pages exist using `ProductPageTemplate.vue`. **E-commerce** lacks a dedicated route and redirects to `/solutions` (`nuxt.config.ts:107`). |
| **8 Industry Pages** | ❌ Missing | `nuxt.config.ts:101-106` | Zero dedicated landing pages for Restaurants, Cafes, Hospitality, Retail, Convenience Stores, Salons, or SMEs. All are 301-redirected to `/industries`. |
| **Experience Center: Qualifying Fields** | ⚠️ Partial | `DemoFormSection.vue:21-49` | Has Name, Email, Company, Industry, Challenge. **Missing**: Phone / WhatsApp number, Number of Outlets, Business Type, Preferred Date/Time. |
| **Experience Center: Online vs Visit** | ❌ Missing | `DemoFormSection.vue:55-63` | Only one generic online submission form exists. No physical visit path, showroom address, opening hours, or Google Maps embed. |
| **Experience Center: Interactive Tour** | ❌ Missing | `ProductPageTemplate.vue:138-142` | "See it in action" displays an empty dark box with a `LayoutDashboard` icon rather than a real product tour or live sandbox. |
| **Demo CTAs on Every Page** | ✅ Present | `AppHeader.vue:64`, `HeroSection.vue:164`, `FinalCta.vue:55` | Prominent "Book a Demo" CTA present on every page and in the persistent header. |
| **Contact Forms & Spam Protection** | ✅ Present | `ContactFormSection.vue:150`, `server/utils/turnstile.ts:8` | Turnstile challenge verification enforced on server before Spring Boot proxying. |
| **WhatsApp Click-to-Chat** | ✅ Present | `WhatsAppWidget.vue:11-14` | Fixed floating button with prefilled message linked to `wa.me/919629579358`. |
| **CRM Hand-off & Sales Alerts** | ⚠️ Partial | `server/api/contact.post.ts:38-46` | Forwards payload to backend API at `http://localhost:8080/api/v1/contact-messages`. No email fallback mechanism inside Nuxt. |
| **Newsletter Sign-up** | ⚠️ Partial | `server/api/newsletter.post.ts:1-17` | Server BFF route exists, but **no frontend newsletter subscription component** exists on any page or in the footer. |
| **Pricing: ₹ / OMR & Market Switch** | ❌ Missing | `pricing.vue:1-42`, `SolutionComparison.vue:26-54` | Zero rupee figures, zero OMR figures, no tier cards with pricing, no market switcher. |
| **GA4 / UTM / Consent Gating** | ❌ Defective | `CookieBanner.vue:17-29`, `nuxt.config.ts:28` | `nuxt-gtag` loads unconditionally on page load; user consent in `CookieBanner` is stored in `localStorage` but never gates GTag scripts. No UTM capture. |
| **i18n Readiness** | ⚠️ Defective | `i18n/locales/en.json`, `main.css:100` | 4 locale JSON files exist, but **zero Vue components use translations**. 353 physical left/right CSS classes break RTL support for Arabic. |
| **SEO: Metadata, OG & Sitemap** | ⚠️ Partial | `nuxt.config.ts:25-26`, `index.vue:15-30` | Per-page title and description present on all routes; XML sitemap generated. **Missing**: Structured data (`application/ld+json` Organization and Product schemas). |
| **CMS / Content Editability** | ❌ Hardcoded | `app/composables/useModules.ts` | All product features, copy, and navigation are hardcoded in TypeScript and Vue template files. Non-developers cannot edit copy or pricing. |

---

## 7. Component Architecture Audit

### 7.1 Hierarchy and Structural Flow
The application divides components into domain feature directories (`about/`, `contact/`, `demo/`, `home/`, `industries/`, `pricing/`, `products/`, `solutions/`, `layout/`, `ui/`, and `visual/`).
* The **App Shell** (`app/layouts/default.vue:9-19`) wraps every page in `AppHeader`, `<slot />`, `AppFooter`, `WhatsAppWidget`, and `CookieBanner`.
* The **Product Pages** (`app/pages/pos-and-billing.vue`, etc.) instantiate a single shared template (`ProductPageTemplate.vue`) that consumes structured objects from `app/composables/useModules.ts`.

### 7.2 Unused Component Bloat
A codebase scan revealed that **23 component files** in `app/components/ui/` were scaffolded from shadcn-vue but are never imported or rendered anywhere in the application:
1. `app/components/ui/card/` (7 files: `Card.vue`, `CardContent.vue`, `CardDescription.vue`, `CardFooter.vue`, `CardHeader.vue`, `CardTitle.vue`, `index.ts`)
2. `app/components/ui/dropdown-menu/` (14 files: `DropdownMenu.vue`, `DropdownMenuItem.vue`, `DropdownMenuContent.vue`, etc.)
3. `app/components/ui/separator/` (2 files: `Separator.vue`, `index.ts`)

These files create noise and trigger the Nuxt build warning:
```
WARN [NUXT_B3011] Two component files resolving to the same name:
 - ~/components/ui/card/index.ts
 - ~/components/ui/card/Card.vue
```

### 7.3 Monolithic File Outliers (> 300 Lines)
The following 13 components exceed standard maintainability thresholds:
1. `app/components/products/SolutionsOverview.vue` — **1,017 lines** (Monolithic tab container embedding duplicated marketing copy)
2. `app/components/industries/IndustryDetailSections.vue` — **992 lines** (Monolithic 4-vertical technical data grid)
3. `app/components/contact/ContactFormSection.vue` — **733 lines** (Contact form, validation logic, and channel descriptions)
4. `app/components/demo/DemoFormSection.vue` — **705 lines** (Demo booking form, Zod schema, Turnstile handler)
5. `app/composables/useModules.ts` — **485 lines** (Hardcoded 8-module content database)
6. `app/components/about/OurApproach.vue` — **391 lines** (4-phase consultative deployment cards)
7. `app/components/pricing/SolutionComparison.vue` — **382 lines** (Abstract scope matrix)
8. `app/components/home/HeroSection.vue` — **364 lines** (Homepage hero visual and capabilities)
9. `app/components/products/ProductsHero.vue` — **360 lines** (Products hero and telemetry ribbons)
10. `app/components/solutions/SolutionsAreas.vue` — **351 lines** (Three solution area breakdowns)
11. `app/components/home/ConnectedArchitectureVisual.vue` — **339 lines** (Complex interactive SVG architecture diagram)
12. `app/components/ProductPageTemplate.vue` — **319 lines** (Multi-section product page template)
13. `app/components/home/ProductShowcases.vue` — **305 lines** (Product tabs container)

---

## 8. State, Data & Server Logic

### 8.1 Client-Side State Management
* There is no Pinia store installed. Reactive state is managed cleanly using Vue 3 Composition API primitives (`ref`, `reactive`, `computed`).
* Form state is localized to each form component (`ContactFormSection.vue:55-63`, `DemoFormSection.vue:55-63`).
* Scroll animation state is handled via composables (`useScrollReveal.ts`, `useScrollProgress.ts`).

### 8.2 Server Engine & BFF Layer
The Nitro server routes in `server/api/` act as a secure Backend-For-Frontend:
1. `server/api/contact.post.ts`: Validates the Cloudflare Turnstile token via `validateTurnstile(turnstileToken, event)`, ensures required fields (`name`, `email`, `message`) are present, strips unexpected attributes, and forwards to `http://localhost:8080/api/v1/contact-messages`.
2. `server/api/demo-booking.post.ts`: Validates Turnstile, enforces field constraints, sanitizes data, and forwards to `http://localhost:8080/api/v1/demo-requests`.
3. `server/utils/turnstile.ts`: Calls `https://challenges.cloudflare.com/turnstile/v0/siteverify` with `process.env.NUXT_TURNSTILE_SECRET_KEY` and the client's forwarded IP address. Fails closed (returns 403 Forbidden) if verification fails or the key is missing.

---

## 9. Code Quality & Linting Audit

* **TypeScript Compilation:** Strict typing is enforced in `nuxt.config.ts:133` (`strict: true`). Running `pnpm typecheck` (`vue-tsc --noEmit`) completed with **0 errors**.
* **ESLint Validation:** Running `pnpm lint` (`eslint .`) completed with **0 errors and 0 warnings**.
* **Dead Code / Comments:** Scaffolding comments like `<!-- Hero Section -->` were identified on 6 pages (`about.vue:23`, `pricing.vue:23`, `demo.vue:39`, `industries/index.vue:22`, `solutions/index.vue:32`, and `ProductPageTemplate.vue:3`).
* **Console Logging:** Zero `console.log` or `console.warn` statements exist in production code (clean pass).

---

## 10. Security & Privacy Audit

* **Exposed Secrets:** A regex scan across all 166 files found **zero exposed credentials, API tokens, or private keys**. All sensitive credentials are appropriately retrieved via `process.env`.
* **Input Validation:** Strong server-side sanitization: input fields are trimmed and validated with Zod on the client and explicitly cast to strings before backend dispatch.
* **Headers & CSP:** Missing Content Security Policy (CSP), `X-Frame-Options: DENY`, and `X-Content-Type-Options: nosniff` headers in `nuxt.config.ts:routeRules`.
* **Cookie Consent:** `CookieBanner.vue` provides "Accept" and "Reject" buttons, but neither setting controls the loading of `nuxt-gtag` scripts.

---

## 11. Performance & Assets Audit

* **Image Optimization:** 7 stock photos exist in `public/images/`, all converted to modern `.webp` format. Total weight is 1.08 MB (average 155 KB per photo).
* **Logo Weight Issue:** The official brand logo (`public/logo.png`) is a **305.7 KB raster PNG file**. It should be converted to an optimized SVG (< 15 KB) to eliminate visual fuzziness and decrease header payload.
* **Font Loading Overhead:** `nuxt.config.ts:32-44` requests 23 distinct font weights from Google Fonts. Preloading 4 weights without script subsetting introduces render-blocking font overhead.
* **Pre-rendering:** 12 primary pages are statically pre-rendered by Nitro during `pnpm build`, ensuring instant TTFB (Time to First Byte) on edge CDNs.

---

## 12. Accessibility (a11y) & Contrast Audit

* **Semantic HTML:** Pages use standard landmark elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`).
* **Heading Order:** Headings generally follow `h1` -> `h2` -> `h3` hierarchy.
* **WCAG AA Contrast Audit:**
  * **Brand Green (`#08E888`) on True Black (`#0A0A0A`):** **12.17:1** — **PASSES WCAG AAA** (Exceptional contrast).
  * **Brand Green (`#08E888`) on White (`#FFFFFF`):** **1.63:1** — **CRITICAL FAIL** (Illegible on light backgrounds).
  * **Black Text (`#000000`) on Brand Green Button (`#08E888`):** **12.91:1** — **PASSES WCAG AAA**.
  * **White Text (`#FFFFFF`) on Brand Green Button (`#08E888`):** **1.63:1** — **CRITICAL FAIL**.
  * **Muted Zinc-500 (`#71717A`) on Canvas (`#0B0F14`):** **3.98:1** — **FAILS WCAG AA Normal Text (< 4.5:1)**. Used in footer legal notes (`AppFooter.vue:87-98`).

---

## 13. Content & Copy Status

* **Copywriting Disconnect:** The copy presents an enterprise data infrastructure platform rather than a retail/restaurant commerce solution.
  * Example (`ProductShowcases.vue:185`): *"Transform continuous business signals into immediate operational advantages with automated cross-vertical analytics."*
  * Real customer need: *"Manage dine-in table bills, split payments, track low-stock kitchen ingredients, and punch orders during peak weekend rushes."*
* **Simulated Metrics Risk:** The website displays hardcoded operational metrics that could pose a legal and credibility risk for a pre-launch platform:
  * `ProductShowcases.vue:156`: *"Reliability: 99.99% Uptime"*
  * `ProductsHero.vue:27-28`: *"99.99% Reliability"*, *"4.8ms Dispatch"*
  * `SolutionsOverview.vue:81, 95`: *"99.98% ACCURACY"*, *"99.99% DRIFT-FREE"*
  * `SolutionComparison.vue:360`: *"SLA: 99.99% Guaranteed"*

---

## 14. Template & AI-Generation Traces

* **Pill Badges with Pulsing Dots:** Identified in 14 components (`HeroSection.vue:129`, `ProductPageTemplate.vue:22`, `AboutHero.vue:45`, `PricingHero.vue:45`, etc.).
* **Blurred Radial Glow Blobs:** **50 instances** of `w-[650px] h-[450px] bg-brand/5 blur-[160px] rounded-full animate-ambient-drift` sprayed behind headers and section dividers.
* **Glassmorphism Saturation:** **99 instances** of `backdrop-blur-xl` / `border border-white/10`.
* **Cyberpunk Corner Crosshairs:** `<div class="font-mono text-brand/60">+</div>` placed on card corners (`HeroSection.vue:219-220`, `ArchitecturalFrame.vue:12-18`).
* **Empty Feature Showcase:** `ProductPageTemplate.vue:138-142` displays an empty dark square with a generic `LayoutDashboard` icon labeled "Live Workflow" instead of genuine application UI.

---

## 15. Prioritised Issue List

| # | Severity | Issue Description | Evidence (file:line) | Recommended Remediation | Effort |
|---|---|---|---|---|---|
| 1 | **Critical** | **Core Copy & Industry Misalignment** | `IndustriesOverview.vue:11-60` | Rewrite industries and demo options to reflect Restaurants, Retail, Cafes, and SMEs. | **L** |
| 2 | **Critical** | **Missing Pricing Data & Currency Toggle** | `SolutionComparison.vue:26-54` | Implement concrete ₹ (India) and OMR (Oman) tier cards with transparent monthly/annual billing. | **M** |
| 3 | **Critical** | **i18n Hardcoded Disconnect** | `main.css:100`, `AppHeader.vue:50-60` | Wire `useI18n()` into navigation, headers, and forms; add language switcher to header. | **L** |
| 4 | **High** | **353 Physical CSS Classes Breaking RTL** | 53 Vue components (`ml-`, `mr-`) | Migrate physical properties to Tailwind logical equivalents (`ms-`, `me-`, `ps-`, `pe-`). | **M** |
| 5 | **High** | **23 Unused shadcn UI Files** | `app/components/ui/card/` | Delete unused `card/`, `dropdown-menu/`, and `separator/` folders to clean build warnings. | **S** |
| 6 | **High** | **Logo Raster PNG Instead of SVG** | `public/logo.png` (305 KB) | Replace with clean vectorized SVG logo; update `AppHeader.vue` to use it. | **S** |
| 7 | **High** | **Missing Resources & Careers Pages** | `nuxt.config.ts:98-99` | Build dedicated `/resources` insights hub and `/careers` hiring page. | **L** |
| 8 | **Medium** | **Cookie Consent Not Gating GA4** | `CookieBanner.vue:17-29` | Wire consent state into `nuxt-gtag` configuration to respect user rejection. | **S** |
| 9 | **Medium** | **Simulated SLA & Latency Metrics** | `ProductsHero.vue:27-28` | Replace fake "4.8ms Dispatch" claims with verifiable business outcomes (e.g. 3-click billing). | **M** |
| 10 | **Medium** | **Monolithic Component Complexity** | `SolutionsOverview.vue:1-1017` | Refactor 1,000-line components into modular child components and external data files. | **M** |
| 11 | **Low** | **Missing Security Headers** | `nuxt.config.ts:85-115` | Add CSP, X-Frame-Options, and HSTS headers into Nitro `routeRules`. | **S** |

---

## 16. Appendix A — File Coverage Log

* **Total Files in Scope:** **166**
* **Total Files Audited:** **166**
* **Coverage:** **100%**

| # | File Path | Line Count | Purpose |
|---|---|---|---|
| 1 | `.env.example` | 6 | Environment variable specification template documenting site URL, API base, and Turnstile keys |
| 2 | `.gitignore` | 30 | Git exclusion patterns for node_modules, .nuxt build cache, .output, and environment secrets |
| 3 | `.npmrc` | 1 | pnpm configuration setting shamefully-hoist=false for strict node_modules isolation |
| 4 | `.prettierrc` | 7 | Code formatting rules (single quotes, trailing commas, 2-space indentation) |
| 5 | `components.json` | 19 | shadcn-vue configuration defining UI component aliases and CSS variables mapping |
| 6 | `eslint.config.mjs` | 18 | Flat ESLint configuration using Nuxt and Prettier rules |
| 7 | `nuxt.config.ts` | 135 | Core Nuxt 4 configuration for modules, fonts, i18n, routeRules, and Nitro prerendering |
| 8 | `package.json` | 46 | Project manifest defining dependencies, devDependencies, and build scripts |
| 9 | `pnpm-lock.yaml` | 12002 | Deterministic dependency tree lockfile for pnpm v12 |
| 10 | `pnpm-workspace.yaml` | 3 | pnpm workspace configuration specifying root package boundaries |
| 11 | `README.md` | 351 | Project documentation covering architecture, scripts, and deployment instructions |
| 12 | `tailwind.config.ts` | 160 | Tailwind CSS theme tokens, custom animations, color palettes, and typography families |
| 13 | `tsconfig.json` | 11 | TypeScript compiler configuration extending Nuxt-generated tsconfig |
| 14 | `app/app.vue` | 5 | Root application template wrapping NuxtLayout and NuxtPage |
| 15 | `app/assets/css/main.css` | 509 | Global design system CSS with theme variables, typography utilities, and glow effects |
| 16 | `app/layouts/default.vue` | 20 | Default site layout rendering AppHeader, slot, AppFooter, WhatsAppWidget, and CookieBanner |
| 17 | `app/components/CookieBanner.vue` | 61 | Client-side cookie consent banner storing state in localStorage without GTM integration |
| 18 | `app/components/ProductPageTemplate.vue` | 319 | Reusable template for all 8 product pages with hero, feature cards, and mock tour |
| 19 | `app/components/WhatsAppWidget.vue` | 56 | Fixed floating WhatsApp quick-connect button linking to wa.me with prefilled message |
| 20 | `app/components/about/AboutArchitecture.vue` | 290 | Interactive architectural layers diagram detailing ingestion, processing, and display |
| 21 | `app/components/about/AboutFinalCta.vue` | 104 | Bottom conversion call-to-action on About page linking to /demo and /contact |
| 22 | `app/components/about/AboutHero.vue` | 210 | Hero header for About page with headline, subline, and executive metrics |
| 23 | `app/components/about/OurApproach.vue` | 391 | Detailed 4-phase methodology section explaining consultative engineering deployment |
| 24 | `app/components/about/WhatGuidesUs.vue` | 200 | Brand values and operational principles grid highlighting resilience and connectivity |
| 25 | `app/components/about/WhoWeAre.vue` | 230 | Corporate narrative section detailing KavoraX Global identity and engineering focus |
| 26 | `app/components/contact/ContactChannels.vue` | 160 | Support channel cards showing enterprise sales, technical support, and global outreach |
| 27 | `app/components/contact/ContactClosingCta.vue` | 90 | Secondary conversion banner at base of Contact page linking to /demo |
| 28 | `app/components/contact/ContactFormSection.vue` | 733 | Multi-field contact enquiry form with Zod validation, category selector, and Turnstile |
| 29 | `app/components/contact/ContactHero.vue` | 130 | Header banner for Contact page introducing communication channels |
| 30 | `app/components/demo/DemoClosingCta.vue` | 55 | Closing reassurance banner on demo booking page reiterating no-pressure consultation |
| 31 | `app/components/demo/DemoFormSection.vue` | 705 | Product demonstration request form with Zod schema, dropdowns, and Turnstile CAPTCHA |
| 32 | `app/components/demo/DemoHero.vue` | 120 | Header section for Experience Center / Demo page with value propositions |
| 33 | `app/components/demo/DemoWhatToExpect.vue` | 80 | Three-step expectations timeline explaining what happens after demo form submission |
| 34 | `app/components/home/BrandStatement.vue` | 90 | Full-width cinematic brand manifesto featuring scrolling text reveal |
| 35 | `app/components/home/ConnectedArchitectureVisual.vue` | 339 | Interactive SVG architectural diagram showing real-time operational hub data flows |
| 36 | `app/components/home/EditorialIntro.vue` | 120 | Editorial transition section connecting hero to core platform capabilities |
| 37 | `app/components/home/FinalCta.vue` | 85 | Primary bottom CTA on homepage driving visitors to demo booking |
| 38 | `app/components/home/HeroSection.vue` | 364 | Cinematic homepage hero with background image drift, pill badge, and 3 capability cards |
| 39 | `app/components/home/IndustryPreview.vue` | 230 | Industry teaser section on homepage highlighting FinTech, Healthcare, and SaaS |
| 40 | `app/components/home/PhotographySolutions.vue` | 125 | Split layout showcasing enterprise solutions with architectural photography frame |
| 41 | `app/components/home/ProductShowcases.vue` | 305 | Tabs showcase highlighting Operations Platform, Analytics, and Integration Hub |
| 42 | `app/components/industries/ConnectedOperations.vue` | 250 | Cross-industry operational architecture diagram and feature list |
| 43 | `app/components/industries/IndustriesConsultationCta.vue` | 95 | Consultation CTA encouraging industry-specific architecture reviews |
| 44 | `app/components/industries/IndustriesHero.vue` | 220 | Header for Industries page with sector overview and anchor links |
| 45 | `app/components/industries/IndustriesOverview.vue` | 190 | Four-card grid summarizing SaaS, FinTech, Healthcare, and Logistics verticals |
| 46 | `app/components/industries/IndustryDetailSections.vue` | 992 | Massive monolithic component rendering deep-dive tabs for 4 non-POS industry sectors |
| 47 | `app/components/layout/AppFooter.vue` | 103 | Site footer with brand statement, navigation links, copyright, and legal links |
| 48 | `app/components/layout/AppHeader.vue` | 78 | Sticky header with SVG polygon logo, navigation links, and Book a Demo button |
| 49 | `app/components/layout/MobileNavigation.vue` | 75 | Mobile responsive slide-out drawer using Radix/Reka Sheet primitive |
| 50 | `app/components/pricing/CustomEngagementCta.vue` | 85 | Enterprise custom deployment CTA block encouraging direct engineering consultation |
| 51 | `app/components/pricing/PricingApproach.vue` | 155 | Three-step consultative engagement framework explaining how pricing is structured |
| 52 | `app/components/pricing/PricingFaq.vue` | 120 | Frequently asked questions accordion addressing contracts, deployment, and trials |
| 53 | `app/components/pricing/PricingFinalCta.vue` | 90 | Closing call to action on Pricing page linking to demo and contact |
| 54 | `app/components/pricing/PricingHero.vue` | 140 | Header banner for Pricing page explaining transparent enterprise engagement model |
| 55 | `app/components/pricing/SolutionComparison.vue` | 382 | Comparative scope table (Department, Enterprise, Global) without concrete prices |
| 56 | `app/components/products/BusinessValue.vue` | 110 | Executive ROI and business value proposition grid highlighting risk reduction |
| 57 | `app/components/products/ConnectedArchitecture.vue` | 180 | Technical diagram showing API interconnectivity between platform modules |
| 58 | `app/components/products/ProductsFinalCta.vue` | 85 | Bottom conversion CTA banner for products page linking to demo |
| 59 | `app/components/products/ProductsHero.vue` | 360 | Header for products page with latency metrics, telemetry tags, and solution anchors |
| 60 | `app/components/products/SolutionSelection.vue` | 130 | Interactive selector helping visitors choose between operations, analytics, and hub |
| 61 | `app/components/products/SolutionsOverview.vue` | 1017 | Gigantic monolithic overview of Operations Platform, Analytics, and Integration Hub |
| 62 | `app/components/solutions/SolutionsAreas.vue` | 351 | Three key operational focus areas with deep functional breakdown and metrics |
| 63 | `app/components/solutions/SolutionsBusinessNeeds.vue` | 230 | Problem-solution mapping grid connecting operational friction to platform features |
| 64 | `app/components/solutions/SolutionsClosingCta.vue` | 85 | Closing conversion block on Solutions page linking to demo request |
| 65 | `app/components/solutions/SolutionsEvaluation.vue` | 140 | Four-point evaluation criteria checklist for organizations assessing KavoraX |
| 66 | `app/components/solutions/SolutionsHero.vue` | 150 | Header for Solutions page explaining unified business infrastructure |
| 67 | `app/components/solutions/SolutionsIndustries.vue` | 160 | Industry application preview linking general solutions to specific verticals |
| 68 | `app/components/ui/accordion/Accordion.vue` | 17 | Radix-based accordion root component providing collapsible disclosure panels |
| 69 | `app/components/ui/accordion/AccordionContent.vue` | 21 | Accordion content wrapper with height transition animations |
| 70 | `app/components/ui/accordion/AccordionItem.vue` | 16 | Accordion item container managing expanded/collapsed state |
| 71 | `app/components/ui/accordion/AccordionTrigger.vue` | 30 | Accordion header toggle button with rotating chevron icon |
| 72 | `app/components/ui/accordion/index.ts` | 5 | Export barrel for accordion UI components |
| 73 | `app/components/ui/button/Button.vue` | 40 | Versatile button component supporting variants (default, outline, ghost) and sizes |
| 74 | `app/components/ui/button/index.ts` | 36 | CVA variant definitions and types for button component |
| 75 | `app/components/ui/card/Card.vue` | 19 | Unused shadcn card container primitive |
| 76 | `app/components/ui/card/CardContent.vue` | 14 | Unused shadcn card content wrapper |
| 77 | `app/components/ui/card/CardDescription.vue` | 14 | Unused shadcn card subtitle description primitive |
| 78 | `app/components/ui/card/CardFooter.vue` | 14 | Unused shadcn card bottom actions container |
| 79 | `app/components/ui/card/CardHeader.vue` | 14 | Unused shadcn card header wrapper |
| 80 | `app/components/ui/card/CardTitle.vue` | 15 | Unused shadcn card heading title primitive |
| 81 | `app/components/ui/card/index.ts` | 7 | Unused export barrel for card components |
| 82 | `app/components/ui/dropdown-menu/DropdownMenu.vue` | 15 | Unused Reka-UI dropdown menu root primitive |
| 83 | `app/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue` | 29 | Unused dropdown menu selectable checkbox item |
| 84 | `app/components/ui/dropdown-menu/DropdownMenuContent.vue` | 29 | Unused dropdown menu floating popover content wrapper |
| 85 | `app/components/ui/dropdown-menu/DropdownMenuGroup.vue` | 14 | Unused dropdown menu item group container |
| 86 | `app/components/ui/dropdown-menu/DropdownMenuItem.vue` | 23 | Unused dropdown menu interactive menu action item |
| 87 | `app/components/ui/dropdown-menu/DropdownMenuLabel.vue` | 20 | Unused dropdown menu section header label |
| 88 | `app/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue` | 15 | Unused dropdown menu radio options group |
| 89 | `app/components/ui/dropdown-menu/DropdownMenuRadioItem.vue` | 29 | Unused dropdown menu single-choice radio item |
| 90 | `app/components/ui/dropdown-menu/DropdownMenuSeparator.vue` | 17 | Unused dropdown menu horizontal divider line |
| 91 | `app/components/ui/dropdown-menu/DropdownMenuShortcut.vue` | 15 | Unused dropdown menu keyboard shortcut label |
| 92 | `app/components/ui/dropdown-menu/DropdownMenuSub.vue` | 15 | Unused dropdown menu nested sub-menu root |
| 93 | `app/components/ui/dropdown-menu/DropdownMenuSubContent.vue` | 27 | Unused dropdown menu sub-menu popover container |
| 94 | `app/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue` | 26 | Unused dropdown menu sub-menu flyout trigger |
| 95 | `app/components/ui/dropdown-menu/DropdownMenuTrigger.vue` | 14 | Unused dropdown menu trigger button |
| 96 | `app/components/ui/dropdown-menu/index.ts` | 18 | Unused export barrel for dropdown menu components |
| 97 | `app/components/ui/input/index.ts` | 2 | Export barrel for input component |
| 98 | `app/components/ui/input/Input.vue` | 28 | Form input field component styled with brand focus states |
| 99 | `app/components/ui/label/index.ts` | 2 | Export barrel for label component |
| 100 | `app/components/ui/label/Label.vue` | 19 | Form field label component styled with font-ui |
| 101 | `app/components/ui/separator/index.ts` | 2 | Unused export barrel for separator component |
| 102 | `app/components/ui/separator/Separator.vue` | 25 | Unused Reka-UI horizontal/vertical separator line |
| 103 | `app/components/ui/sheet/index.ts` | 10 | Export barrel for mobile drawer sheet components |
| 104 | `app/components/ui/sheet/Sheet.vue` | 15 | Reka-UI dialog root primitive for mobile drawer |
| 105 | `app/components/ui/sheet/SheetClose.vue` | 14 | Drawer dismiss button trigger primitive |
| 106 | `app/components/ui/sheet/SheetContent.vue` | 48 | Drawer sliding panel container with backdrop overlay |
| 107 | `app/components/ui/sheet/SheetDescription.vue` | 16 | Drawer accessibility description element |
| 108 | `app/components/ui/sheet/SheetFooter.vue` | 14 | Drawer bottom action items container |
| 109 | `app/components/ui/sheet/SheetHeader.vue` | 14 | Drawer title and header container |
| 110 | `app/components/ui/sheet/SheetTitle.vue` | 22 | Drawer accessibility title heading |
| 111 | `app/components/ui/sheet/SheetTrigger.vue` | 14 | Drawer open action trigger wrapper |
| 112 | `app/components/ui/textarea/index.ts` | 2 | Export barrel for textarea component |
| 113 | `app/components/ui/textarea/Textarea.vue` | 27 | Multi-line form textarea component with dark theme styling |
| 114 | `app/components/visual/ArchitecturalFrame.vue` | 75 | Decorative visual frame with corner crosshairs and technical bounding box |
| 115 | `app/components/visual/ChapterLabel.vue` | 25 | Numbered section chapter eyebrow pill with subtle green dot |
| 116 | `app/components/visual/ScrollTextReveal.vue` | 88 | Scroll-linked opacity text reveal component for editorial pull quotes |
| 117 | `app/components/visual/TelemetryBadge.vue` | 35 | Micro-telemetry status badge displaying simulated dispatch metrics |
| 118 | `app/components/visual/WordReveal.vue` | 124 | Staggered word-by-word heading animation with italic highlight flourish |
| 119 | `app/composables/useKavoraxApi.ts` | 174 | Client API composable handling form submissions to internal /api endpoints |
| 120 | `app/composables/useModules.ts` | 485 | Data store defining 8 product modules with headlines, features, and tab data |
| 121 | `app/composables/useScrollProgress.ts` | 125 | Viewport scroll position and percentage tracking utility |
| 122 | `app/composables/useScrollReveal.ts` | 155 | IntersectionObserver composable animating elements into view on scroll |
| 123 | `app/plugins/studio-listener.client.ts` | 80 | Client-side message bridge listener for Nuxt Studio preview integration |
| 124 | `app/lib/utils.ts` | 6 | Utility function cn() combining clsx and tailwind-merge |
| 125 | `app/utils/index.ts` | 8 | General utility barrel exporting formatting helpers |
| 126 | `app/types/api.ts` | 45 | TypeScript interface definitions for contact and demo form payloads |
| 127 | `app/middleware/.gitkeep` | Binary / 0 | Git tracking placeholder preserving empty Nuxt middleware directory |
| 128 | `shared/types/index.ts` | 12 | Shared navigation and link type definitions used across client and server |
| 129 | `app/pages/index.vue` | 45 | Homepage assembling hero, architecture visual, intro, showcases, and final CTA |
| 130 | `app/pages/about.vue` | 42 | About page assembling hero, who we are, approach, architecture, and CTA |
| 131 | `app/pages/solutions/index.vue` | 48 | Solutions hub assembling hero, solution areas, business needs, and CTA |
| 132 | `app/pages/products/index.vue` | 42 | Products hub assembling products hero, overview, architecture, and CTA |
| 133 | `app/pages/industries/index.vue` | 42 | Industries hub assembling hero, overview, detail sections, and consultation CTA |
| 134 | `app/pages/pricing.vue` | 42 | Pricing page assembling hero, approach, solution comparison, and FAQ |
| 135 | `app/pages/demo.vue` | 51 | Experience Center / Demo booking conversion page assembling form and expectations |
| 136 | `app/pages/contact.vue` | 40 | Contact Us page assembling contact hero, channels, and enquiry form |
| 137 | `app/pages/pos-and-billing.vue` | 32 | Dedicated product page for POS & Counter Billing powered by ProductPageTemplate |
| 138 | `app/pages/kitchen-display.vue` | 26 | Dedicated product page for Kitchen Display System (KDS) powered by template |
| 139 | `app/pages/inventory-and-stock.vue` | 26 | Dedicated product page for Inventory & Stock Management powered by template |
| 140 | `app/pages/digital-ordering.vue` | 26 | Dedicated product page for Digital & QR Ordering powered by template |
| 141 | `app/pages/crm.vue` | 26 | Dedicated product page for CRM & Guest Loyalty powered by template |
| 142 | `app/pages/multi-location.vue` | 26 | Dedicated product page for Multi-Location Management powered by template |
| 143 | `app/pages/business-analytics.vue` | 26 | Dedicated product page for Business Analytics & BI powered by template |
| 144 | `app/pages/delivery-management.vue` | 26 | Dedicated product page for Delivery Fleet Management powered by template |
| 145 | `app/pages/privacy-policy.vue` | 110 | Legal privacy policy page specifying data collection, GDPR, and Indian DPDP terms |
| 146 | `app/pages/terms-of-service.vue` | 135 | Legal terms of service page specifying enterprise licensing and liability terms |
| 147 | `server/api/apply.post.ts` | 18 | BFF handler for job/partner applications forwarding to backend |
| 148 | `server/api/contact.post.ts` | 56 | BFF contact handler validating Turnstile and proxying to Spring Boot /v1/contact-messages |
| 149 | `server/api/demo-booking.post.ts` | 55 | BFF demo handler validating Turnstile and proxying to Spring Boot /v1/demo-requests |
| 150 | `server/api/newsletter.post.ts` | 17 | BFF newsletter signup handler forwarding to backend subscriber list |
| 151 | `server/utils/turnstile.ts` | 59 | Server-side Turnstile verification utility validating tokens against Cloudflare API |
| 152 | `i18n/locales/en.json` | 96 | English localization dictionary containing navigation, hero, and form labels |
| 153 | `i18n/locales/ar.json` | 96 | Arabic localization dictionary translated for GCC market (RTL) |
| 154 | `i18n/locales/hi.json` | 96 | Hindi localization dictionary translated in Devanagari script for Indian market |
| 155 | `i18n/locales/ta.json` | 96 | Tamil localization dictionary translated in Tamil script for South Indian market |
| 156 | `public/_robots.txt` | 7 | Robots.txt rule configuration specifying crawler allow/disallow paths and sitemap link |
| 157 | `public/favicon.ico` | Binary / 0 | Browser tab icon asset (4.2 KB ICO binary) |
| 158 | `public/logo.png` | Binary / 0 | KavoraX official brand logo raster image (305 KB PNG binary) |
| 159 | `public/images/architectural-workspace.webp` | Binary / 0 | Stock photography image of modern workspace (57.8 KB WebP binary) |
| 160 | `public/images/executive-briefing.webp` | Binary / 0 | Stock photography image of corporate conference room (63.2 KB WebP binary) |
| 161 | `public/images/fintech-headquarters.webp` | Binary / 0 | Stock photography image of glass high-rise headquarters (169.6 KB WebP binary) |
| 162 | `public/images/global-connectivity.webp` | Binary / 0 | Stock image representing global network infrastructure (228.8 KB WebP binary) |
| 163 | `public/images/healthcare-diagnostics.webp` | Binary / 0 | Stock photography image of laboratory diagnostic equipment (145.9 KB WebP binary) |
| 164 | `public/images/logistics-terminal.webp` | Binary / 0 | Stock photography image of freight transport terminal (254.4 KB WebP binary) |
| 165 | `public/images/tech-infrastructure.webp` | Binary / 0 | Stock photography image of server racks and cloud data center (165.6 KB WebP binary) |
| 166 | `docs/KAVORAX_INDUSTRIES_PAGE_DESIGN_AND_ANIMATION_AUDIT.md` | 715 | Legacy detailed animation and design audit documentation for industries page |

---

## 17. Appendix B — Build, Typecheck, and Lint Output

### B.1 Production Build Output (`pnpm build`)
```
Nuxt 4.6.1 (with Nitro 2.13.4, Vite 8.3.4 and Vue 3.5.43)
Setting up modules: @nuxtjs/i18n, @nuxt/image, @nuxt/fonts, @nuxtjs/sitemap, @nuxtjs/robots, @vueuse/nuxt, nuxt-gtag, @nuxtjs/turnstile
WARN [turnstile] No site key was provided. Make sure you pass one at runtime.
WARN [@nuxt/robots] You have disallowed robots accessing /api/**.
WARN [NUXT_B3011] Two component files resolving to the same name:
 - ~/components/ui/accordion/index.ts & Accordion.vue
 - ~/components/ui/button/index.ts & Button.vue
 - ~/components/ui/card/index.ts & Card.vue
 - ~/components/ui/dropdown-menu/index.ts & DropdownMenu.vue
 - ~/components/ui/input/index.ts & Input.vue
 - ~/components/ui/label/index.ts & Label.vue
 - ~/components/ui/separator/index.ts & Separator.vue
 - ~/components/ui/sheet/index.ts & Sheet.vue
 - ~/components/ui/textarea/index.ts & Textarea.vue
2848 modules transformed.
Nitro preset: node-server
Build complete in 11m 10s.
```

### B.2 TypeScript Compilation Output (`pnpm typecheck`)
```
$ vue-tsc --noEmit
(Exited with code 0 - Zero compile errors)
```

### B.3 Lint Output (`pnpm lint`)
```
$ eslint .
(Exited with code 0 - Zero lint warnings/errors)
```

### B.4 SSR HTML Verification Output (JavaScript Disabled)
```
Route /                : Status 200, Length: 113,677 bytes, Title: 'KavoraX Global | Technology that moves business forward', Content Verified
Route /about           : Status 200, Length: 116,139 bytes, Title: 'About KavoraX Global | Connected Business Solutions', Content Verified
Route /solutions       : Status 200, Length: 114,013 bytes, Title: 'Connected Solutions | KavoraX Global Private Limited', Content Verified
Route /products        : Status 200, Length: 139,757 bytes, Title: 'Products & Connected Solutions | KavoraX Global', Content Verified
Route /industries      : Status 200, Length: 128,271 bytes, Title: 'Enterprise Industries & Solutions | KavoraX Global', Content Verified
Route /pricing         : Status 200, Length: 100,259 bytes, Title: 'Pricing & Engagement | KavoraX Global', Content Verified
Route /demo            : Status 200, Length:  55,304 bytes, Title: 'Book a Demo | KavoraX Global Private Limited', Content Verified
Route /contact         : Status 200, Length:  69,176 bytes, Title: 'Contact Us | KavoraX Global', Content Verified
Route /pos-and-billing : Status 200, Length:  45,335 bytes, Title: 'POS & Billing | High-Speed Counter Operations | KavoraX', Content Verified
```
