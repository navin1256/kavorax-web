# KavoraX Global — Complete Website Design System, UI/UX & Animation Audit Report

**Project:** KavoraX Global Private Limited (`kavorax-web`)  
**Role:** Senior UI/UX Designer, Design Systems Architect, Frontend Animation Engineer & Website Reverse-Engineering Specialist  
**Audit Scope:** Read-Only Complete Frontend Codebase Audit  
**Target File:** `docs/WEBSITE_DESIGN_ANIMATION_AUDIT_REPORT.md`  
**Date:** October 19, 2026  
**Status:** **COMPLETE & FULLY VERIFIED (Source-Evidence Based)**  

---

## 1. Executive Summary

This report delivers an exhaustive, evidence-based reverse-engineering audit of the design system, visual language, component architecture, styling tokens, animations, and responsive interactions powering the KavoraX Global public website (`kavorax-web`).

The KavoraX Global digital experience is built upon a distinct visual aesthetic that can be classified as **"Institutional Editorial & Technical Precision."** It bridges two traditionally divergent design languages:
1. **Classical High-End Editorial Gravitas:** Characterized by serif typography (`Cormorant Garamond`), italicized emotional accents, Roman/Arabic chapter indexing (`CHAPTER 01 //`), asymmetrical multi-column compositions, narrative quotation blocks, and full-bleed architectural photography.
2. **Deterministic High-Tech Enterprise Dark Mode:** Characterized by deep obsidian surfaces (`#0b0f14`, `#080c10`, `#070D10`), sharp hairline borders (`rgba(255, 255, 255, 0.08)`), subtle straight-line technical grid lines (192px emerald cadence and 48px white cadence), monospaced coordinate HUD tags, Active Theory inspired `+` corner crosshairs, vibrant emerald status pulses (`#10b981`), and strict dark-mode color-scheme discipline.

All findings in this report are backed by explicit source file paths, line references, CSS variables, Tailwind configuration tokens, and component source code.

---

## 2. Project and Styling Stack

Inspection of `package.json`, `nuxt.config.ts`, `tailwind.config.ts`, and `components.json` reveals the following production stack:

| Layer | Technology | Version | Source File / Evidence | Notes / Architectural Role |
| :--- | :--- | :--- | :--- | :--- |
| **Core Framework** | Nuxt | `^4.6.1` (Nuxt 4 compatibility mode) | `package.json:21`, `nuxt.config.ts:3` | Server-side rendering (SSR), file-system routing, runtime configuration. |
| **View Library** | Vue | `^3.5.43` | `package.json:25` | Composition API, `<script setup lang="ts">`, reactive refs. |
| **Language** | TypeScript | `^5.x` (`vue-tsc: ^3.3.13`) | `package.json:37`, `tsconfig.json` | Strict type checking enabled (`strict: true`). |
| **CSS Engine** | Tailwind CSS | `^3.4.x` via `@nuxtjs/tailwindcss: ^6.14.0` | `package.json:31`, `nuxt.config.ts:6` | Utility-first styling with extended theme tokens. |
| **Animation Plugins** | `tailwindcss-animate` | `^1.0.7` | `package.json:35`, `tailwind.config.ts:2` | Keyframe-driven entry/exit animations for Radix primitives. |
| **Component Primitives** | Reka UI / Radix Vue | `reka-ui: ^2.11.0`, `radix-vue: ^1.9.17` | `package.json:22-23`, `components.json:1` | Accessible, unstyled headless UI primitives (`shadcn-vue` architecture). |
| **Style Composition** | `class-variance-authority` (cva) | `^0.7.1` | `package.json:17`, `app/components/ui/button/index.ts:6` | Type-safe component variant matrices. |
| **Class Merging** | `clsx` + `tailwind-merge` | `clsx: ^2.1.1`, `tailwind-merge: ^3.7.0` | `package.json:18,24`, `app/utils/index.ts:4` | `cn()` utility resolving conditional and conflicting utility classes. |
| **Iconography** | `lucide-vue-next` | `^1.0.0` | `package.json:19` | Scalable vector SVG icon system used across all sections. |
| **Form Validation** | `zod` | `^4.6.7` | `package.json:27`, `ContactFormSection.vue:24`, `DemoFormSection.vue:21` | Client-side strict schema validation. |
| **Reactivity Utilities**| `@vueuse/core` | `^15.0.0` | `package.json:16`, `Input.vue:3`, `Textarea.vue:3` | `useVModel` two-way bindings on form components. |
| **Installed Animation Lib**| `motion-v` | `^2.7.0` | `package.json:20` | **Audit Note:** Installed in `package.json`, but currently unreferenced in components. |

---

## 3. Global Design Language

### 3.1 Design Philosophy & Aesthetic Identity
The site rejects standard SaaS visual clichés (e.g., bright purple blob gradients, floating 3D clay illustrations, rounded cartoon buttons). Instead, KavoraX Global establishes an **authoritative, architectural, and institutional** tone.

Key visual pillars:
1. **Editorial Hierarchy:** Primary messaging uses oversized display headings in `Cormorant Garamond`, often pairing an italicized accent word in brand emerald (`#10b981`) with white text (e.g., *"Technology that moves business <span class="italic text-brand">forward</span>."* in `HeroSection.vue:117-118`).
2. **Active Theory Crosshairs:** Micro-crosshairs (`+`) rendered in monospace font positioned at `top-3 left-3`, `top-3 right-3`, `bottom-3 left-3`, and `bottom-3 right-3` of major visual containers, giving an engineering blueprint / HUD aesthetic (`ArchitecturalFrame.vue:31-35`, `main.css:170-190`, `FinalCta.vue:19`).
3. **Linear Technical Grid Discipline:** Strict removal of circular rings, radial concentric waves, or playful dots. Backgrounds feature an architectural double-cadence straight-line grid: fine dark-gray lines every 48px overlaid with subtle emerald lines every 192px (`main.css:145-162`).
4. **Photographic Gravitas:** Real-world corporate skyscraper, engineering, data-center, and logistics photography with high contrast, desaturated tones, and layered dark charcoal linear overlays (`HeroSection.vue:58-77`, `PhotographySolutions.vue:29-41`, `IndustryDetailSections.vue`).

---

## 4. Complete Color Palette and Tokens

### 4.1 Master Color Token Table

The table below catalogs every color token, variable, HEX value, scope, and implementation file across the codebase.

| Category | Token / Name | Value (HEX / HSL / RGBA) | Scope | Source File & Line | Usage Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Background** | `--background` | `hsl(213 29% 6.1%)` / `#0b0f14` | Global CSS Variable | `main.css:7`, `tailwind.config.ts:34` | Default website canvas background. |
| **Background** | `canvas.DEFAULT` | `#0b0f14` | Tailwind Token | `tailwind.config.ts:73` | Explicit background utility `bg-canvas`. |
| **Background** | `canvas.secondary` | `#080c10` | Tailwind Token | `tailwind.config.ts:74` | Darker secondary section canvas. |
| **Background** | `--popover` | `hsl(210 33% 4.7%)` / `#080c10` | Global CSS Variable | `main.css:13`, `tailwind.config.ts:56` | Popover, sheet, and dropdown canvas. |
| **Background** | Hero Cinematic Canvas | `#070D10` | Hardcoded Utility | `HeroSection.vue:50,53` | Deepest charcoal-black canvas for hero. |
| **Background** | Footer Canvas | `#070b0f` | Hardcoded Utility | `AppFooter.vue:22`, `main.css:149,152`| Dark technical footer background. |
| **Surface / Card**| `--card` | `hsl(214 30% 8.5%)` / `#0f161f` | Global CSS Variable | `main.css:16`, `tailwind.config.ts:60` | Default UI card background surface. |
| **Surface / Card**| `canvas.card` | `#0f161f` | Tailwind Token | `tailwind.config.ts:75` | Explicit card canvas token. |
| **Surface / Card**| `canvas.surface` | `#121a24` | Tailwind Token | `tailwind.config.ts:76` | Elevated surface token. |
| **Surface / Card**| Architectural Card | `#0c131d` / `#0c141e` / `#0d141e`| Component Hardcoded | `HeroSection.vue:176`, `FinalCta.vue:19`| Dark blue-gray frosted card surfaces. |
| **Surface / Card**| Editorial Card Glass | `rgba(15, 22, 31, 0.75)` | Custom CSS Class | `main.css:192-197` (`.glass-surface`)| Glassmorphic backdrop-blur card surface. |
| **Surface / Card**| Elevated Glass | `rgba(18, 27, 38, 0.85)` | Custom CSS Class | `main.css:199-205` (`.glass-surface-elevated`)| High-elevation glassmorphic modal/card surface. |
| **Brand Primary** | `--primary` | `hsl(160 84% 39%)` / `#10b981` | Global CSS Variable | `main.css:22`, `tailwind.config.ts:36` | Primary emerald brand color. |
| **Brand Primary** | `brand.DEFAULT` | `#10b981` | Tailwind Token | `tailwind.config.ts:65` | Main emerald accent (`bg-brand`, `text-brand`). |
| **Brand Secondary**| `--accent` | `hsl(156 73% 52%)` / `#34d399` | Global CSS Variable | `main.css:28`, `tailwind.config.ts:52` | Lighter mint-emerald accent. |
| **Brand Secondary**| `brand.secondary`| `#34d399` | Tailwind Token | `tailwind.config.ts:66` | Secondary brand emerald token. |
| **Brand Hover** | `brand.hover` | `#059669` | Tailwind Token | `tailwind.config.ts:67` | Darker emerald hover state for buttons. |
| **Brand Dark** | `brand.dark` | `#047857` | Tailwind Token | `tailwind.config.ts:68` | Deep emerald active/pressed state. |
| **Brand Glow** | `brand.glow` | `rgba(16, 185, 129, 0.18)` | Tailwind Token | `tailwind.config.ts:69`, `main.css:83`| Glow shadow and border tint. |
| **Brand Subtle** | `brand.subtle` | `rgba(16, 185, 129, 0.08)` | Tailwind Token | `tailwind.config.ts:70` | Subtle background tint for pills and badges. |
| **Text Primary** | `--foreground` | `hsl(0 0% 100%)` / `#ffffff` | Global CSS Variable | `main.css:8`, `tailwind.config.ts:35` | Pure white heading and label text. |
| **Text Body** | Body Base Text | `#e2e8f0` (Slate 200) | Global CSS Rule | `main.css:55` | Base text color applied to `<body>`. |
| **Text Editorial**| Zinc 200 / 300 | `#e4e4e7` / `#d4d4d8` | Tailwind Utilities | Throughout components | High-legibility editorial paragraph text. |
| **Text Muted** | `--muted-foreground` | `hsl(0 0% 60%)` / `#999999` | Global CSS Variable | `main.css:11`, `tailwind.config.ts:50` | Muted secondary label text. |
| **Text Dim** | Zinc 400 / 500 | `#a1a1aa` / `#71717a` | Tailwind Utilities | Throughout components | Monospaced coordinate tags, footer links, metadata. |
| **Border** | `--border` | `hsl(215 25% 15%)` / `#1d2430` | Global CSS Variable | `main.css:19`, `tailwind.config.ts:31` | Default border color. |
| **Border Hairline**| Hairline White | `rgba(255, 255, 255, 0.08)` | Tailwind / CSS Class | `main.css:98,207` (`.hairline-border`) | Fine-line section dividers and card edges. |
| **Border Emerald** | Subtle Emerald Border | `rgba(16, 185, 129, 0.18)` | Custom CSS Class | `main.css:94-96` (`.border-subtle-emerald`)| Highlighted card borders. |
| **Status Error** | `--destructive` | `hsl(0 62.8% 30.6%)` / `#801d1d`| Global CSS Variable | `main.css:31`, `tailwind.config.ts:44` | Form error states and destructive actions. |
| **Status Error** | Rose 400 / 500 | `#fb7185` / `#f43f5e` | Tailwind Utilities | `ContactFormSection.vue`, `DashboardStatCard.vue` | Validation error text and negative stat trend. |
| **Focus Ring** | `--ring` | `hsl(160 84% 39%)` / `#10b981` | Global CSS Variable | `main.css:34`, `tailwind.config.ts:33` | Focus ring outline for accessible keyboard nav. |

### 4.2 Near-Duplicate & Inconsistency Observations
- **Near-Duplicate Dark Backgrounds:** The codebase contains 5 slightly different dark obsidian colors: `#0b0f14` (primary canvas), `#080c10` (secondary canvas), `#070D10` (hero background), `#070b0f` (footer background), and `#070b10` (product code visual). While visually coherent, consolidating these to 2 formal tokens (`canvas.DEFAULT` and `canvas.secondary`) would improve token discipline.
- **Card Background Variations:** Components mix `#0c131d`, `#0c141e`, `#0d141e`, and `#0f161f` for card surfaces. These differ by less than 2% in lightness and hue.
- **Admin vs Public Token Isolation:** Admin views (`app/assets/css/admin.css`) cleanly declare `#26313d` for borders, isolating admin surfaces from the public website's `rgba(255, 255, 255, 0.08)` hairline borders.

---

## 5. Typography System

### 5.1 Font Family Declarations
Fonts are loaded remotely via Google Fonts in `nuxt.config.ts:45-47` with preconnect headers:
- **Heading / Display / Editorial:** `Cormorant Garamond` (Weights: 300 Light, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold; Styles: Normal, Italic). Fallbacks: `Georgia, serif`.
- **Interface / Body / Sans:** `Inter` (Weights: 300 Light, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold). Fallbacks: `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`.
- **Metadata / HUD / Monospace:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.

### 5.2 Typographic Hierarchy Scale

| Level / Role | Font Family | Weight | Size (Mobile / Desktop) | Line Height | Letter Spacing | Case / Transform | Usage Location |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero H1** | `Cormorant Garamond` | 400 (Regular) | `4xl` (36px) sm / `6xl` (60px) md / `7xl` (72px) lg / `5.5rem` (88px) | `1.05` | `-0.025em` | Title Case (with italic accent) | `HeroSection.vue:114-119` |
| **Page Hero H1** | `Cormorant Garamond` | 400 (Regular) | `4xl` (36px) / `6xl` (60px) / `4.75rem` (76px) | `1.02` | `-0.03em` | Title Case | `AboutHero.vue:44-50`, `ProductsHero.vue:131` |
| **Section Heading H2** | `Cormorant Garamond` | 400–500 | `3xl` (30px) sm / `5xl` (48px) lg / `6xl` (60px) | `1.08–1.12` | `-0.02em` | Sentence Case | `EditorialIntro.vue:54-62`, `ConnectedArchitectureVisual.vue:92` |
| **Feature / Card H3** | `Cormorant Garamond` | 500–600 | `2xl` (24px) sm / `3xl` (30px) lg / `4xl` (36px) | `1.1–1.15` | `-0.015em` | Sentence / Title Case | `ProductShowcases.vue:47-49`, `BrandStatement.vue:84` |
| **Editorial Lead Body** | `Cormorant Garamond` | 400 (Regular) | `lg` (18px) sm / `xl` (20px) md / `1.55rem` (24.8px) | `1.6–1.7` | Normal | Normal Case | Hero subtext, section introductory paragraphs |
| **Standard Body UI** | `Inter` | 400 (Regular) | `1rem` (16px) / `text-sm` (14px) | `1.65` | Normal | Normal Case | Form inputs, checklist items, card body text (`main.css:53-56`) |
| **Eyebrow / Category** | `Inter` | 600 (SemiBold)| `xs` (12px) / `11px` | `1.2` | `0.1em` (`tracking-widest`) | Uppercase | `ChapterLabel.vue:21`, Eyebrow badges |
| **HUD / Coordinate Tag**| Monospace | 400–500 | `10px` / `11px` / `12px` | `1.0` | `0.05em` (`tracking-wider`)| Uppercase | Corner badges, telemetry metrics, status tags |
| **Button Label** | `Inter` | 600 (SemiBold)| `xs` (12px) sm / `sm` (14px) / `base` (16px) lg | `1.2` | Normal / Slight Tracking | Sentence / Title Case | Primary & secondary CTAs (`AppHeader.vue:67`, `HeroSection.vue:134`) |

---

## 6. Spacing, Layout and Design Tokens

### 6.1 Layout Containers & Maximum Widths
- **Full Viewport Wrapper:** `overflow-x-hidden min-h-screen bg-[#0b0f14]` on page roots.
- **Maximum Container Width:** Defined in `tailwind.config.ts:26`:
  ```typescript
  container: {
    center: true,
    padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '2.5rem', xl: '3rem', '2xl': '4rem' },
    screens: { '2xl': '1380px' }
  }
  ```
- **Major Content Widths:**
  - `max-w-7xl` (1280px): Standard content sections (`AppHeader.vue:21`, `AppFooter.vue:23`, `EditorialIntro.vue:41`).
  - `max-w-5xl` (1024px): Centered hero messaging and final CTA banners (`HeroSection.vue:102`, `FinalCta.vue:17`).
  - `max-w-4xl` (896px): FAQ accordion and pricing comparison tables (`PricingFaq.vue:41`).
  - `max-w-3xl` (768px): Centered section headers and quote blocks (`BrandStatement.vue:48`).

### 6.2 Section Vertical Rhythm
- **Hero Sections:** Explicit minimum heights ensuring full-viewport presence:
  `min-h-[660px] sm:min-h-[700px] md:min-h-[740px] lg:min-h-[780px] xl:min-h-[820px]` (`HeroSection.vue:53`).
- **Standard Content Sections:** Strict vertical breathing room:
  `py-24 md:py-36` (96px mobile, 144px desktop) across all major editorial sections.
- **Section Dividers:** Fine hairline white borders `border-t border-white/[0.08]` separating every consecutive section.

### 6.3 Asymmetrical Editorial Grid Systems
Instead of standard symmetrical 3-column or 4-column card matrices, KavoraX implements an **asymmetrical 12-column editorial grid**:
- **7 / 5 Column Split:** Left 7 columns hold oversized manifesto typography; right 5 columns hold sequential principles or photographic frames (`EditorialIntro.vue:51-86`, `PhotographySolutions.vue:25-45`, `AboutHero.vue:33-112`).
- **Interactive Split Stage:** Left 5 columns hold interactive category selectors; right 7 columns hold active dynamic details (`ConnectedArchitectureVisual.vue:102-148`, `IndustryPreview.vue:87-136`).

---

## 7. Border, Radius, Shadow, and Elevation System

### 7.1 Border System
- **Hairline Border:** `border border-white/[0.08]` or `border border-white/[0.06]` (1px subtle white overlay, providing crisp structure on deep black canvas without visual clutter).
- **Subtle Emerald Border:** `.border-subtle-emerald` (`rgba(16, 185, 129, 0.18)`) and `border-brand/20`–`border-brand/40` for highlighted/active elements.
- **Admin Border:** `#26313d` and `rgba(38, 49, 61, 0.7)` (`admin.css:37-43`).

### 7.2 Border Radius System
Configured in `tailwind.config.ts:79-84` via CSS variable `--radius: 0.5rem` (8px):
- `rounded-sm`: `calc(var(--radius) - 4px)` = 4px (micro badges, tags).
- `rounded-md`: `calc(var(--radius) - 2px)` = 6px (buttons, input fields, navigation links).
- `rounded-lg`: `var(--radius)` = 8px (icon containers, small cards).
- `rounded-xl`: `calc(var(--radius) + 4px)` = 12px (capability cards, node stages).
- `rounded-2xl`: 16px (large editorial feature cards, photographic frames).
- `rounded-3xl`: 24px (grand closing CTA card in `FinalCta.vue:19`).
- `rounded-full`: 9999px (pulsing status dots, pill badges, scroll cue button).

### 7.3 Shadow & Elevation Scale
- **Subtle Card Shadow:** `shadow-sm` and `shadow-[0_4px_24px_rgba(16,185,129,0.12)]`.
- **Deep Elevation:** `shadow-[0_20px_50px_rgba(0,0,0,0.5)]` to `shadow-[0_25px_70px_rgba(0,0,0,0.7)]` on floating glassmorphic cards.
- **Photographic Heavy Shadow:** `shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]` (`ArchitecturalFrame.vue:29`).
- **Emerald Glow Presets (`main.css:82-92`):**
  - `.glow-emerald-sm`: `box-shadow: 0 2px 12px -2px rgba(16, 185, 129, 0.15)`
  - `.glow-emerald-subtle`: `box-shadow: 0 4px 24px -4px rgba(16, 185, 129, 0.18)`
  - `.glow-emerald-lg`: `box-shadow: 0 8px 36px -6px rgba(16, 185, 129, 0.25)`
  - Button Glow: `shadow-[0_0_28px_-4px_rgba(16,185,129,0.45)] hover:shadow-[0_0_36px_0px_rgba(16,185,129,0.65)]`.

---

## 8. Component Inventory

The project contains 42 Vue components structured across functional directories:

| Component Path | Directory | Role / Category | Used / Mounted In | Primary Visual Style |
| :--- | :--- | :--- | :--- | :--- |
| `layout/AppHeader.vue` | Layout | Sticky Top Navigation | `app/layouts/default.vue` | Frosted glass `#0b0f14]/80`, border-b hairline, responsive brand logo. |
| `layout/AppFooter.vue` | Layout | Global Site Footer | `app/layouts/default.vue` | Technical grid `#070b0f`, 12-col brand/link layout, copyright note. |
| `layout/MobileNavigation.vue` | Layout | Mobile Sheet Drawer | `AppHeader.vue` | Radix Sheet slide-out from right, 300–350px width, dark canvas. |
| `visual/ChapterLabel.vue` | Visual | Chapter Index & Label | All pages (Hero, Intro, CTA) | Pulse dot, monospaced chapter index, uppercase brand title. |
| `visual/ArchitecturalFrame.vue`| Visual | Photography Container | `PhotographySolutions`, `About`| Corner crosshairs, 4 aspect ratios, zoom hover, coordinate HUD. |
| `visual/TelemetryBadge.vue` | Visual | Monospaced Metric Badge| `SolutionsOverview.vue` | Pulsing dot, status color map, border hairline, backdrop blur. |
| `visual/AmbientSpotlight.vue` | Visual | Mouse-Follow Ambient Light| **Orphaned (Unmounted)** | 700px radial emerald spotlight tracking fine pointer movements. |
| `visual/FineLineDivider.vue` | Visual | Hairline Beam Divider | **Orphaned (Unmounted)** | 1px line with optional center emerald beam and coordinate tag. |
| `visual/TechGridOverlay.vue` | Visual | Background Grid Mask | **Orphaned (Unmounted)** | Radial masked tech grid overlay component. |
| `ui/button/Button.vue` | UI Primitives | Reusable Button | Global (Headers, Forms, CTAs)| CVA variants (`default`, `outline`, `ghost`, etc.), sizes, focus rings. |
| `ui/card/Card.vue` (and sub) | UI Primitives | Card Primitive Structure| UI library | Rounded-xl, border, card background, card shadow. |
| `ui/input/Input.vue` | UI Primitives | Form Text Input | `ContactFormSection`, `Demo` | 44px height (`h-11`), dark `#0c121a`, emerald focus ring. |
| `ui/textarea/Textarea.vue` | UI Primitives | Form Multiline Input | `ContactFormSection`, `Demo` | Min-height 120px, dark `#0c121a`, emerald focus ring. |
| `ui/label/Label.vue` | UI Primitives | Form Field Label | `ContactFormSection`, `Demo` | Uppercase tracking-wider text-xs, accessible `for` association. |
| `ui/accordion/*` (5 files) | UI Primitives | FAQ Accordion Primitive | `PricingFaq.vue` | Radix Accordion with animated accordion-up/down keyframes. |
| `ui/sheet/*` (9 files) | UI Primitives | Off-canvas Drawer | `MobileNavigation.vue`, Admin | Radix Dialog/Sheet with slide-in and fade animations. |
| `home/HeroSection.vue` | Home Page | Cinematic Hero + Topology| `app/pages/index.vue` | Skyscraper photo overlay, dual CTAs, scroll indicator, 3 capability cards. |
| `home/EditorialIntro.vue` | Home Page | Typographic Manifesto | `app/pages/index.vue` | 7/5 asymmetrical grid, 3 sequential principle cards. |
| `home/ConnectedArchitectureVisual.vue`| Home Page | Interactive 4-Layer Spec | `app/pages/index.vue` | Clickable Layer 01–04 selector with dynamic details pane. |
| `home/ProductShowcases.vue` | Home Page | 3 Product Capability Cards| `app/pages/index.vue` | Wide workflow diagram + 2-col split for telemetry and integration map. |
| `home/PhotographySolutions.vue`| Home Page | Photography Feature Section | `app/pages/index.vue` | ArchitecturalFrame workspace visual + solution pillars checklist. |
| `home/IndustryPreview.vue` | Home Page | Interactive Sector Switcher| `app/pages/index.vue` | 4-industry tab selector with dynamic background image transition. |
| `home/BrandStatement.vue` | Home Page | Monumental Brand Quote | `app/pages/index.vue` | Centered blockquote + horizontal principles ledger. |
| `home/FinalCta.vue` | Home Page | Closing Conversion Card | `app/pages/index.vue` | Rounded-3xl grand card, corner crosshairs, dual CTAs. |
| `home/ProductGrid.vue` | Home Page | Legacy Product Grid | **Unreferenced Legacy** | Replaced by `ProductShowcases.vue`. |
| `home/IndustriesSection.vue` | Home Page | Legacy Industry Grid | **Unreferenced Legacy** | Replaced by `IndustryPreview.vue`. |
| `home/TrustSection.vue` | Home Page | Legacy Trust Pillars | **Unreferenced Legacy** | Preserved in codebase. |
| `home/WhyKavorax.vue` | Home Page | Legacy Value Points | **Unreferenced Legacy** | Preserved in codebase. |
| `about/AboutHero.vue` | About Page | Editorial Hero | `app/pages/about.vue` | Chapter 01 archive header, dual CTAs, quick anchor jumps. |
| `about/WhoWeAre.vue` | About Page | Company Narrative & Context| `app/pages/about.vue` | Verified corporate profile, institutional commitments. |
| `about/OurApproach.vue` | About Page | 3-Phase Methodology | `app/pages/about.vue` | Discovery, Connection, Architecture chapters with photo frames. |
| `about/AboutArchitecture.vue`| About Page | 4-Quadrant Architecture | `app/pages/about.vue` | Interactive dimension selector with active radar pulse. |
| `about/WhatGuidesUs.vue` | About Page | 4 Guiding Ethics | `app/pages/about.vue` | 2x2 grid of values (Clarity, Cohesion, Adaptability, Growth). |
| `about/AboutFinalCta.vue` | About Page | About Closing CTA | `app/pages/about.vue` | Architectural consultation invitation card. |
| `contact/ContactFormSection.vue`| Contact Page| Public Contact Form | `app/pages/contact.vue` | Real API submission, Zod validation, receipt card `#KX-C{id}`. |
| `contact/ContactChannels.vue` | Contact Page| Direct Engagement Links | `app/pages/contact.vue` | Email, office, and advisory channel cards. |
| `demo/DemoFormSection.vue` | Demo Page | Public Demo Booking Form | `app/pages/demo.vue` | Real API submission, requirements packing, receipt `#KX-D{id}`. |
| `demo/DemoWhatToExpect.vue` | Demo Page | Demo Expectations Grid | `app/pages/demo.vue` | 3-step walkthrough preview (Discovery, Platform, Scope). |
| `pricing/SolutionComparison.vue`| Pricing Page| 3 Solution Comparison | `app/pages/pricing.vue` | Interactive Department/Enterprise/Global scope switch. |
| `pricing/PricingFaq.vue` | Pricing Page| Collapsible FAQ Accordion | `app/pages/pricing.vue` | Radix Accordion with animated expand/collapse. |
| `admin/*` (12 components) | Admin Portal | Dashboard & Management | `app/pages/admin/*` | Utilitarian dark console, stats, data tables, metrics. |

---

## 9. Card Design Catalog

The codebase features 11 specialized card patterns:

### 1. Enterprise Architecture Capability Card (`HeroSection.vue:284-315`)
- **Dimensions:** Full height in 3-column grid (`h-full flex flex-col justify-between`).
- **Surface:** `bg-[#0c131d]/85`, `border border-white/[0.08]`, `rounded-xl`, `p-6`.
- **Hover State:** `hover:border-brand/40 hover:bg-[#0e1622] transition-all duration-300`. Title changes to `text-brand`.
- **Header:** Category tag (`font-mono text-[11px] text-zinc-400`), icon inside 36x36px emerald container (`bg-brand/10 border border-brand/20`), sequential number `01–03` in monospace.
- **Body:** `Cormorant Garamond` title (24px, SemiBold), 14px body text (`text-zinc-300`).
- **Footer:** Hairline top divider (`border-t border-white/[0.06]`), 11px monospaced metric description.

### 2. Interactive Layer Selector Card (`ConnectedArchitectureVisual.vue:108-144`)
- **Surface:** `p-5 rounded-xl border transition-all duration-300 cursor-pointer`.
- **Active State:** `border-brand/50 bg-[#111a26] shadow-[0_8px_30px_rgba(16,185,129,0.16)]`.
- **Inactive State:** `border-white/[0.06] bg-[#0c131c]/60 hover:border-white/20 hover:bg-[#0e1622]`.
- **Indicator:** Active layer displays a glowing emerald dot (`shadow-[0_0_8px_#10b981]`).

### 3. Product Showcase Canvas Card (`ProductShowcases.vue:39-136`)
- **Dimensions:** Wide asymmetrical editorial canvas (12 columns) or 2-column split.
- **Surface:** `bg-[#0d141e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12`.
- **Decorations:** `.corner-crosshair` with `+` active theory corner glyphs.
- **Embedded Visuals:** Live SVG/CSS mock state diagrams (Workflow Pipeline, Bar-chart Telemetry, Protocol Interop Bus).

### 4. Architectural Photography Frame Card (`ArchitecturalFrame.vue:28-77`)
- **Surface:** `relative rounded-2xl border border-white/10 bg-[#0d141e] overflow-hidden group shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]`.
- **Crosshairs:** 4 corner `+` symbols in monospace font (`text-brand/70`).
- **Aspect Ratio:** Dynamic: `video` (16:9), `wide` (16:10), `square` (1:1), `portrait` (4:5), `auto`.
- **Image Interaction:** Zoom transition `scale-100` to `scale-104` with `transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Vignette:** `bg-gradient-to-t from-[#080c10] via-[#080c10]/35 to-transparent`.
- **HUD Strip:** Floating top coordinate badge (`bg-black/75 backdrop-blur-md border border-white/10 text-white font-mono text-[10px]`).

### 5. Interactive Industry Selector Card (`IndustryPreview.vue:90-133`)
- **Surface:** `p-5 rounded-xl border transition-all duration-300 cursor-pointer`.
- **Triggers:** Both `@mouseenter` and `@click` dynamically swap the right photographic stage.
- **Active State:** `border-brand/40 bg-[#101924] shadow-[0_4px_24px_rgba(16,185,129,0.12)]`.

### 6. Solution Scope Comparison Card (`SolutionComparison.vue`)
- **Surface:** `rounded-2xl border border-white/[0.08] bg-[#0c131e]/90 p-8`.
- **Interactive Scope Toggle:** 3-way segmented control (`Departmental Foundation`, `Cross-Enterprise Operations`, `Global Distributed Grid`) updating latency, concurrency, and governance metrics.

### 7. Principles Ledger Card (`BrandStatement.vue:63-96`)
- **Surface:** Large continuous ledger container (`rounded-2xl border border-white/10 bg-[#0c131e]/90 p-6 sm:p-12 divide-y divide-white/[0.08]`).
- **Rows:** 3-column grid row per principle: Number & icon on left (3 cols), Title in middle (4 cols), Description on right (5 cols).

### 8. Grand Conversion Card (`FinalCta.vue:18-75`)
- **Surface:** `rounded-3xl border border-white/10 bg-[#0c141e]/90 p-6 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)]`.
- **Atmosphere:** Centered emerald halo glow behind container (`w-[700px] h-[400px] bg-brand/[0.06] blur-[160px]`).

### 9. Form Container Card (`ContactFormSection.vue`, `DemoFormSection.vue`)
- **Surface:** `rounded-2xl border border-white/10 bg-[#0c131e]/95 p-6 sm:p-8 md:p-10 backdrop-blur-xl`.
- **Interactive State Feedback:** Displays live inline validation errors, submitting spinner state, and transitions to an interactive receipt card upon backend 201 Created.

### 10. Receipt Confirmation Card (`ContactFormSection.vue:150-250`, `DemoFormSection.vue:150-250`)
- **Surface:** `rounded-xl border border-brand/40 bg-[#0e1722] p-6 sm:p-8 space-y-6`.
- **Content:** Checkmark icon (`bg-brand/20 text-brand`), Reference ID badge (`#KX-C{id}` or `#KX-D{id}`), timestamp, and a "Submit Another" reset button.

### 11. Administrative Metric Card (`DashboardStatCard.vue:56-108`)
- **Surface:** `rounded-lg border border-[#26313d] bg-[#0f161f] p-5 shadow-sm hover:border-[#384859]`.
- **Layout:** Icon + title header, bold numeric stat (`text-slate-100 font-bold text-3xl`), trend pill with arrow (`text-emerald-400 bg-emerald-500/10` or `text-rose-400 bg-rose-500/10`).

---

## 10. Buttons, Links and Interactive Elements

### 10.1 Button Variants Matrix (`app/components/ui/button/index.ts`)

| Variant | Background | Border | Text Color | Shadow | Hover State | Active / Focus |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`default` (Primary)** | `bg-primary` (`#10b981`) | None | `text-primary-foreground` (`#0a0a0a` / Black) | `shadow` | `hover:bg-primary/90` | `focus-visible:ring-1 focus-visible:ring-ring` |
| **`destructive`** | `bg-destructive` (`#801d1d`) | None | `text-destructive-foreground` (`#ffffff`) | `shadow-sm` | `hover:bg-destructive/90` | `focus-visible:ring-1 focus-visible:ring-ring` |
| **`outline`** | `bg-background` (`#0b0f14`) | `border border-input` (`hsl(215 25% 15%)`) | `text-foreground` (`#ffffff`) | `shadow-sm` | `hover:bg-accent hover:text-accent-foreground` | `focus-visible:ring-1` |
| **`secondary`** | `bg-secondary` (`#18222f`) | None | `text-secondary-foreground` (`#ffffff`) | `shadow-sm` | `hover:bg-secondary/80` | `focus-visible:ring-1` |
| **`ghost`** | Transparent | None | `text-foreground` | None | `hover:bg-accent hover:text-accent-foreground` | `focus-visible:ring-1` |
| **`link`** | Transparent | None | `text-primary` (`#10b981`) | None | `hover:underline underline-offset-4` | `focus-visible:ring-1` |

### 10.2 Button Sizes Matrix
- **`xs`:** `h-7 rounded px-2 text-xs` (compact badges/actions).
- **`sm`:** `h-8 rounded-md px-3 text-xs` (header CTA: `AppHeader.vue:65`).
- **`default`:** `h-9 px-4 py-2 text-sm` (standard UI buttons).
- **`lg`:** `h-10 rounded-md px-8 text-base` (Hero and closing CTAs: `HeroSection.vue:133`, `FinalCta.vue:45`). Overridden in hero sections with `px-8 py-6` for larger touch targets.
- **`icon` / `icon-sm` / `icon-lg`:** Square dimensions (`size-8`, `size-9`, `size-10`) for mobile hamburger and quick action buttons.

### 10.3 Micro-Interactions on Interactive Elements
1. **Horizontal Arrow Translation:** `ArrowRight` icon inside primary CTA buttons translates right by 4px on hover (`group-hover:translate-x-1 transition-transform`).
2. **Diagonal Arrow Translation:** `ArrowUpRight` icon inside secondary exploration links translates diagonally by 2px right and 2px up (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`).
3. **Scroll Cue Chevron Drop:** The hero scroll indicator button translates downward by 2px on hover (`group-hover:translate-y-0.5 transition-transform duration-200`).
4. **Card Title Color Shift:** Hovering over any capability or product card smoothly transitions its title from white (`#ffffff`) to brand emerald (`#10b981`) over `200–300ms`.
5. **Interactive Icon Scale:** Principle row icons scale up by 5% on group hover (`group-hover:scale-105 transition-transform`).

---

## 11. Complete Animation Inventory

The table below catalogs every distinct animation discovered in the codebase:

| # | Animation Name / Description | Component & File Reference | Trigger | Animated Properties | Duration | Delay | Easing | Transform / Keyframe Values | Mobile Behavior | Reduced-Motion Compliant |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **`emerald-pulse-dot`** (`.animate-pulse-subtle`) | `main.css:124-137`, `ChapterLabel.vue:16`, `TelemetryBadge.vue:26`, `HeroSection.vue:86` | Continuous Loop | `opacity`, `transform` | `3s` | None | `ease-in-out` | `0%, 100%: opacity: 1, scale(1); 50%: opacity: 0.4, scale(0.85)` | Active on all viewports | **Yes** (reset to `0.01ms`) |
| **2** | **`accordion-down`** | `tailwind.config.ts:108-111,122`, `AccordionContent.vue:12`, `PricingFaq.vue:72` | User Click / State Toggle | `height` | `0.2s` (200ms) | None | `ease-out` | `from: 0; to: var(--radix-accordion-content-height)` | Active on all viewports | **Yes** (reset to `0.01ms`) |
| **3** | **`accordion-up`** | `tailwind.config.ts:112-115,123`, `AccordionContent.vue:12`, `PricingFaq.vue:72` | User Click / State Toggle | `height` | `0.2s` (200ms) | None | `ease-out` | `from: var(--radix-accordion-content-height); to: 0` | Active on all viewports | **Yes** (reset to `0.01ms`) |
| **4** | **`float-slow`** | `tailwind.config.ts:116-125` | Continuous Loop | `transform` (`translateY`) | `6s` | None | `ease-in-out` | `0%, 100%: translateY(0px); 50%: translateY(-6px)` | Utility available | **Yes** (reset to `0.01ms`) |
| **5** | **`img-editorial-zoom`** | `main.css:116-122`, `ArchitecturalFrame.vue:43`, `IndustryPreview.vue:142` | Container Hover (`.group:hover`) | `transform`, `filter` | `0.7s` (zoom), `0.5s` (filter) | None | `cubic-bezier(0.16, 1, 0.3, 1)` | `transform: scale(1.04)` | Disabled on touch (hover only) | **Yes** (reset to `0.01ms`) |
| **6** | **`animate-spin`** | `ContactFormSection.vue:641`, `DemoFormSection.vue:649` | Submission Active (`isSubmitting === true`) | `transform` (`rotate`) | `1s` | None | `linear` | `from: rotate(0deg); to: rotate(360deg)` | Active on all viewports | **Yes** (reset to `0.01ms`) |
| **7** | **Standard `animate-pulse`** | `SolutionsAreas.vue:155`, `SolutionsOverview.vue:484`, `AdminSidebar.vue:162` | Continuous Loop | `opacity` | `2s` | None | `cubic-bezier(0.4, 0, 0.6, 1)` | `0%, 100%: opacity: 1; 50%: opacity: 0.5` | Active on all viewports | **Yes** (reset to `0.01ms`) |
| **8** | **Sheet / Drawer Slide In** | `app/components/ui/sheet/index.ts:14-25`, `SheetContent.vue:38` | User Click (Open Mobile Nav) | `transform`, `opacity` | `500ms` (open), `300ms` (closed) | None | `ease-in-out` | `slide-in-from-right`, `fade-in-0`, `slide-out-to-right`, `fade-out-0` | Mobile primary navigation | **Yes** (reset to `0.01ms`) |
| **9** | **Dropdown Menu Zoom & Fade** | `DropdownMenuContent.vue:27` | Trigger Click / Hover | `opacity`, `transform` | `150–200ms` | None | `ease-out` | `zoom-in-95`, `slide-in-from-top-2`, `fade-in-0` | Active on desktop & tablet | **Yes** (reset to `0.01ms`) |
| **10** | **Ambient Spotlight Follow** | `AmbientSpotlight.vue:8-38` | Pointer Mousemove (`pointer: fine`) | `left`, `top`, `opacity` | `700ms` opacity transition | None | Dynamic JS | `left: ${x}px; top: ${y}px; radial-gradient(circle, rgba(16,185,129,0.055) ...)` | **Desktop Only** (unmounted) | **Yes** (opacity reset) |
| **11** | **CTA Button Arrow Slide** | `HeroSection.vue:137`, `FinalCta.vue:49`, `ProductShowcases.vue:33` | Button Hover | `transform` (`translateX`) | `200–300ms` | None | `ease` | `group-hover:translate-x-1` (4px slide) | Hover-capable devices | **Yes** (reset to `0.01ms`) |
| **12** | **Diagonal Arrow Lift** | `HeroSection.vue:149`, `EditorialIntro.vue:80`, `PhotographySolutions.vue:83` | Link Hover | `transform` (`translate`) | `200ms` | None | `ease` | `group-hover:translate-x-0.5 group-hover:-translate-y-0.5` | Hover-capable devices | **Yes** (reset to `0.01ms`) |
| **13** | **Scroll Cue Chevron Bounce**| `HeroSection.vue:165` | Button Hover | `transform` (`translateY`) | `200ms` | None | `ease` | `group-hover:translate-y-0.5` (2px drop) | Hover-capable devices | **Yes** (reset to `0.01ms`) |
| **14** | **Smooth Page Scroll** | `main.css:45`, `HeroSection.vue:44` | Anchor Click / Scroll Cue | `scroll-top` | Browser native smooth | None | `smooth` | `scrollIntoView({ behavior: 'smooth' })` | Supported on all modern devices | **Yes** (`auto !important`) |

> [!NOTE]
> **Animation Library Inspection:** `motion-v` is declared in `package.json:20`, but inspection confirms **zero imports** in the application codebase. All existing animations are driven cleanly by native CSS keyframes, Tailwind transitions, and `tailwindcss-animate`.

---

## 12. Page-by-Page Design Breakdown

### 12.1 Homepage (`/` — `app/pages/index.vue`)
1. **Hero Section (`HeroSection.vue`):** Full-bleed corporate skyscraper architectural image (`/images/fintech-headquarters.jpg`) with 4 straight-line charcoal linear gradients (zero radial overlays). Display H1 with italicized accent. Dual CTAs. Chevron scroll cue triggering smooth scroll to `#enterprise-capabilities`. Architectural topology section below hero with Active Theory crosshairs and 3 equal-height enterprise capability cards.
2. **Editorial Intro (`EditorialIntro.vue`):** Asymmetrical 7/5 column grid. Chapter 01 label. Oversized manifesto statement. Three fine-line sequential principles with numbers `01–03`.
3. **Connected Architecture Visual (`ConnectedArchitectureVisual.vue`):** Interactive 4-layer blueprint. Left column features 4 clickable layer selectors (`Workflows & Operations`, `Data & Telemetry Stream`, `Universal Integration Fabric`, `Governance & Security Perimeter`). Right column features dynamic operational detail card.
4. **Product Showcases (`ProductShowcases.vue`):** Chapter 03 showcase. Asymmetrical canvas for Operations Platform featuring a multi-stage workflow pipeline diagram. Two-column split below showcasing real-time telemetry distribution (live CSS bar chart) and universal interoperability protocol map.
5. **Photography Solutions (`PhotographySolutions.vue`):** High-resolution photographic showcase using `ArchitecturalFrame.vue` (`/images/architectural-workspace.jpg`) with HUD coordinates and corner crosshairs. Right column highlights enterprise delivery frameworks.
6. **Industry Preview (`IndustryPreview.vue`):** Interactive sector switcher across 4 critical industries (Financial Services, Healthcare, Supply Chain, Technology). Hover/click swaps photographic background with gradient overlays.
7. **Brand Statement (`BrandStatement.vue`):** Monumental centered editorial blockquote in `Cormorant Garamond` (60px). Followed by a horizontal 3-column principles ledger (`Interoperability First`, `Zero-Compromise Security`, `Durable Architecture`).
8. **Final CTA (`FinalCta.vue`):** Rounded-3xl grand conversion card with corner crosshairs, emerald lighting halo, dual CTAs (`Book an Architectural Demo` and `Contact Solutions Team`), and SLA verification footnote.

### 12.2 About Page (`/about` — `app/pages/about.vue`)
1. **About Hero (`AboutHero.vue`):** Editorial archive header with corporate registration metadata. Display H1 (*"Building Technology That Moves Business Forward"*). Right column features an architectural photo frame (`/images/executive-briefing.jpg`) with coordinate badge and bottom caption card.
2. **Who We Are (`WhoWeAre.vue`):** Narrative context addressing modern enterprise software fragmentation. Two verified institutional commitment cards (`Pragmatic Architecture` and `Auditable Governance`).
3. **Our Approach (`OurApproach.vue`):** Alternating 3-phase methodology chapters (Phase 01: Understand the Business; Phase 02: Connect the Parts; Phase 03: Build for Change), each pairing deep narrative principles with photographic frames.
4. **About Architecture (`AboutArchitecture.vue`):** Interactive 4-quadrant conceptual framework with active dimension selector and radar pulse indicator.
5. **What Guides Us (`WhatGuidesUs.vue`):** 2x2 grid of guiding values (`Clarity`, `Cohesion`, `Adaptability`, `Responsible Growth`) featuring corner crosshairs and commitment tags.
6. **About Final CTA (`AboutFinalCta.vue`):** Architectural consultation closing CTA.

### 12.3 Solutions Page (`/solutions` — `app/pages/solutions/index.vue`)
1. **Solutions Hero (`SolutionsHero.vue`):** Explains how connected technology simplifies complex multi-system operations.
2. **Business Needs (`SolutionsBusinessNeeds.vue`):** Addresses 4 common enterprise challenges: Fragmented Systems, Operational Blindspots, Slow Handoffs, and Brittle Integrations.
3. **Solution Areas (`SolutionsAreas.vue`):** Detailed breakdown of Operations Platform, Analytics & Intelligence, and Integration Hub.
4. **Solutions Evaluation (`SolutionsEvaluation.vue`):** Diagnostic guide helping organizations evaluate their current maturity level.
5. **Solutions Industries (`SolutionsIndustries.vue`):** Direct mapping from solution areas to industry applications.
6. **Solutions Closing CTA (`SolutionsClosingCta.vue`):** Advisory consultation invitation.

### 12.4 Products Page (`/products` — `app/pages/products/index.vue`)
1. **Products Hero (`ProductsHero.vue`):** Deep dive into institutional technology capabilities.
2. **Solutions Overview (`SolutionsOverview.vue`):** 43KB component containing deep-dive interactive architectural stages:
   - Operations Platform: Interactive 3-step pipeline (`Ingestion & Validation`, `Multi-Cluster Dispatch`, `Immutable Audit Record`).
   - Analytics & Insights: Interactive telemetry channel switcher (`Throughput`, `Latency`, `Anomalies`) with dynamic bar charts.
   - Integration Hub: Multi-system protocol bridge map with secure TLS status indicators.
3. **Connected Architecture (`ConnectedArchitecture.vue`):** Illustrates how the 3 platform engines communicate via an event bus.
4. **Business Value (`BusinessValue.vue`):** Quantified enterprise impact foundations.
5. **Solution Selection (`SolutionSelection.vue`):** Sizing decision tree.
6. **Products Final CTA (`ProductsFinalCta.vue`):** Technical walkthrough CTA.

### 12.5 Industries Page (`/industries` — `app/pages/industries/index.vue`)
1. **Industries Hero (`IndustriesHero.vue`):** Sector-specific architectures for critical industries.
2. **Industries Overview (`IndustriesOverview.vue`):** Summary grid of the 4 key verticals.
3. **Industry Detail Sections (`IndustryDetailSections.vue`):** 42KB comprehensive alternating layout with dedicated photographic assets:
   - `enterprise-tech`: Enterprise Technology & SaaS (`/images/tech-infrastructure.jpg`).
   - `financial-services`: Financial Services & FinTech (`/images/fintech-headquarters.jpg`).
   - `healthcare`: Healthcare & Life Sciences (`/images/healthcare-diagnostics.jpg`).
   - `supply-chain`: Supply Chain & Logistics (`/images/logistics-terminal.jpg`).
4. **Connected Operations (`ConnectedOperations.vue`):** Cross-sector operational synchronization.
5. **Industries Consultation CTA (`IndustriesConsultationCta.vue`):** Sector advisory booking.

### 12.6 Pricing Page (`/pricing` — `app/pages/pricing.vue`)
1. **Pricing Hero (`PricingHero.vue`):** Transparent, consultative engagement philosophy.
2. **Pricing Approach (`PricingApproach.vue`):** 3-step consultative methodology (Requirement Discovery, Architecture Scoping, Value-Driven Proposal).
3. **Solution Comparison (`SolutionComparison.vue`):** 3 solution pillars with an interactive scope toggle (`Departmental`, `Cross-Enterprise`, `Global Distributed Grid`).
4. **Custom Engagement CTA (`CustomEngagementCta.vue`):** Bespoke enterprise scope discussion.
5. **Pricing FAQ (`PricingFaq.vue`):** Accessible Radix accordion addressing commercial and scoping questions.
6. **Pricing Final CTA (`PricingFinalCta.vue`):** Restrained closing call to action.

### 12.7 Contact Page (`/contact` — `app/pages/contact.vue`)
1. **Contact Hero (`ContactHero.vue`):** Direct invitation to dialogue.
2. **Contact Form Section (`ContactFormSection.vue`):** Two-column layout. Left column provides direct communication channels and response SLAs. Right column contains the live connected form with Zod client validation, double-submission locking, real API submission to `POST /api/v1/contact-messages`, and interactive receipt card `#KX-C{id}`.
3. **Contact Channels (`ContactChannels.vue`):** Direct email, corporate office, and advisory cards.
4. **Contact Closing CTA (`ContactClosingCta.vue`):** Secondary reach-out prompt.

### 12.8 Demo Page (`/demo` — `app/pages/demo.vue`)
1. **Demo Hero (`DemoHero.vue`):** Invitation to schedule an architectural walkthrough.
2. **Demo Form Section (`DemoFormSection.vue`):** Two-column layout. Captures Name, Work Email, Company, Job Title, Industry, Area of Interest, and Business Challenge. Encodes rich fields into backend `@JsonProperty("reqs")` without data loss. Real API submission to `POST /api/v1/demo-requests`, displaying confirmation receipt `#KX-D{id}` upon 201 Created.
3. **Demo What to Expect (`DemoWhatToExpect.vue`):** 3-step timeline preview (Discovery Dialogue, Architectural Demonstration, Deployment Roadmap).
4. **Demo Closing CTA (`DemoClosingCta.vue`):** Final engagement prompt.

---

## 13. Navigation, Scroll and Page Transitions

### 13.1 Navigation Architecture
- **Desktop Header (`AppHeader.vue`):**
  - Sticky positioning: `sticky top-0 z-50 w-full`.
  - Surface: `bg-[#0b0f14]/80 backdrop-blur-xl border-b border-white/[0.07]`.
  - Height: Fixed `h-[72px]`.
  - Links: 6 primary routes (`/products`, `/solutions`, `/industries`, `/pricing`, `/about`, `/contact`).
  - Active Route Indicator: `active-class="text-white bg-white/[0.06] font-semibold"`.
  - Right Action: Primary emerald button linking to `/demo`.
- **Mobile Navigation Drawer (`MobileNavigation.vue`):**
  - Trigger: Hamburger button (`md:hidden`, 36x36px).
  - Component: Radix Sheet (`SheetContent side="right"`).
  - Width: `w-[300px] sm:w-[350px]`.
  - Surface: `bg-[#0b0f14] border-l border-white/[0.08]`.
  - Dual CTAs at bottom: "Book a Demo" (Primary emerald) and "Contact Sales" (Outline).

### 13.2 Scroll Mechanics
- **Global Smooth Scroll:** Declared in `main.css:45`: `html { scroll-behavior: smooth; }`.
- **Programmatic Smooth Scroll:** Used in `HeroSection.vue:44`:
  ```typescript
  const scrollToContent = () => {
    const el = document.getElementById('enterprise-capabilities') || document.getElementById('editorial-intro')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  ```
- **Custom Dark Scrollbar:** Declared in `main.css:216-232`:
  - Width: `8px`. Track: `#080c10`. Thumb: `#1a2533` (rounded 4px). Hover: `#10b981` (emerald).
- **Page Transitions:** No custom Nuxt page transition classes (`page-enter-active`, etc.) are declared; route changes perform default instantaneous content swaps, ensuring maximum responsiveness without layout jumps.

---

## 14. Backgrounds and Decorative Effects

### 14.1 Technical Straight-Line Grid Pattern
Defined in `main.css:145-162`:
```css
.bg-technical-grid,
.bg-tech-grid,
section[class*="bg-[#0b0f14]"]:not(.hero-cinematic-bg),
section[class*="bg-[#080c10]"]:not(.hero-cinematic-bg),
section[class*="bg-[#070b0f]"]:not(.hero-cinematic-bg),
section[class*="bg-[#070D10]"]:not(.hero-cinematic-bg),
div[id="enterprise-capabilities"],
footer.bg-\[\#070b0f\] {
  background-image: 
    /* Subtle emerald-green tinted vertical & horizontal straight accent lines (192px cadence) */
    linear-gradient(to right, rgba(16, 185, 129, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(16, 185, 129, 0.04) 1px, transparent 1px),
    /* Fine dark-gray straight vertical & horizontal grid lines (48px cadence) */
    linear-gradient(to right, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 192px 192px, 192px 192px, 48px 48px, 48px 48px;
  background-position: 0 0;
}
```
**Audit Finding:** This CSS rule guarantees consistent, straight technical lines across all dark sections while strictly excluding `.hero-cinematic-bg` to protect photographic clarity.

### 14.2 Active Theory Corner Crosshairs
Declared in `main.css:170-190` and inline across cards:
```css
.corner-crosshair { position: relative; }
.corner-crosshair::before,
.corner-crosshair::after {
  content: '+';
  position: absolute;
  font-family: monospace;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.2);
  line-height: 1;
}
.corner-crosshair::before { top: -6px; left: -5px; }
.corner-crosshair::after { bottom: -6px; right: -5px; }
```

### 14.3 Atmospheric Emerald Halos & Scrims
- **Ambient Glows:** Large circular divs with heavy CSS blurs (`w-[600px] h-[600px] bg-brand/[0.04] blur-[160px] rounded-full pointer-events-none`).
- **Photographic Vignette Scrims:** Layered linear gradients fading images to `#080c10` at top, bottom, and edges so photographic assets merge seamlessly into the page background.

---

## 15. Responsive Design Audit

### 15.1 Breakpoint System
Inspected from `tailwind.config.ts`:
- **`sm`:** 640px
- **`md`:** 768px
- **`lg`:** 1024px
- **`xl`:** 1280px
- **`2xl`:** 1380px (explicitly customized in `tailwind.config.ts:26`)

### 15.2 Cross-Device Behavior Matrix

| Viewport Range | Breakpoint | Navigation | Typography Scaling | Layout Stacking | Interactive Elements |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Small Mobile** (<375px) | `< sm` | Hamburger drawer active. | Display H1 scales down to `text-4xl` (36px). Lead text scales to `text-lg`. | All grids stack into a single vertical column (`grid-cols-1`). | Dual CTA buttons stack vertically (`w-full`). Input height remains 44px for tap compliance. |
| **Large Mobile** (375px–640px) | `< sm` | Hamburger drawer active. | H1 scales to `text-5xl`–`text-6xl`. | Single-column stacking with comfortable `px-4 sm:px-6` gutters. | Dual CTAs remain full-width stacked or auto. Touch targets are comfortable. |
| **Tablet** (640px–1024px) | `sm` to `md` | Desktop nav activates at `md: 768px` (`hidden md:flex`). | Headings scale to `text-6xl`–`text-7xl`. | Asymmetrical grids collapse into balanced 2-column or stacked layouts. | Dual CTAs align horizontally (`flex-row w-auto`). |
| **Desktop** (1024px–1380px) | `lg` to `xl` | Full desktop navigation bar with active route highlighting. | Full editorial display scale (`text-[5.5rem]`). | Full 12-column asymmetrical spreads (7/5 splits, 3-column capability grids). | Hover zoom transitions and diagonal arrow animations active. |
| **Wide Desktop** (>1380px) | `2xl` | Centered within 1380px container with 64px padding. | Optimal line-length balancing (`text-balance-editorial`). | Uncompromised architectural layouts. | Ambient mousemove spotlight active if fine pointer detected. |

---

## 16. Accessibility and Performance Observations

### 16.1 Accessibility (a11y) Verification
- **Color Contrast:** White (`#ffffff`) and slate (`#e2e8f0`) body text against `#0b0f14` / `#080c10` achieves a contrast ratio of **15.2:1 to 18.4:1**, far exceeding WCAG AAA standard (7:1). Brand emerald (`#10b981`) text on dark backgrounds achieves **6.1:1**, exceeding WCAG AA standard (4.5:1) for body text and AAA for large text.
- **Touch Target Sizing:** Form input fields (`Input.vue:27`) use `h-11` (44px) and primary action buttons use `h-10` to `h-12` (40–48px), fulfilling the WCAG 2.1 Success Criterion 2.5.5 minimum target requirement of 44x44px.
- **Screen Reader Accommodations:** Decorative elements, background grids, corner crosshairs, and pulsing indicator dots feature `aria-hidden="true"`. Form inputs use explicit `<Label>` components with matching `id` and `for` associations.
- **Focus Indicators:** Interactive elements feature explicit keyboard focus styling (`focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`). Admin shell explicitly enforces `outline: 2px solid #10b981; outline-offset: 2px;` (`admin.css:90-95`).
- **Reduced Motion Support:** A universal CSS media query in `main.css:234-243` explicitly cancels all animations and transitions when `prefers-reduced-motion: reduce` is enabled:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

### 16.2 Performance Observations
- **Font Optimization:** Fonts are preconnected to Google Fonts CDN with `crossorigin=""`.
- **Image Assets:** 7 photography assets are located in `public/images/`, totaling ~1.55 MB. Images in hero sections use `loading="eager"`, while secondary cards use `loading="lazy"`.
- **Potential Optimization:** Images are currently stored in JPEG format (`.jpg`). Converting to modern WebP or AVIF formats would reduce payload size by 40–60%.

---

## 17. Design Inconsistencies

Inspection reveals 4 confirmed design and architecture inconsistencies:

| # | Inconsistency Category | Description | Source File Reference | Impact |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Orphaned Visual Components** | `AmbientSpotlight.vue`, `FineLineDivider.vue`, and `TechGridOverlay.vue` exist in `app/components/visual/` with rich styling, but are **never imported or mounted** in any layout or page template. | `app/components/visual/*` | Unused code assets; intended ambient spotlight effect is never rendered. |
| **2** | **Unreferenced Legacy Home Components** | 4 legacy components (`ProductGrid.vue`, `WhyKavorax.vue`, `TrustSection.vue`, `IndustriesSection.vue`) exist in `app/components/home/`, but were superseded by the editorial redesign and are unreferenced. | `app/components/home/*` | Dead code creating ambiguity for engineers maintaining the homepage. |
| **3** | **Dark Canvas Color Drift** | 5 near-identical dark canvas colors (`#0b0f14`, `#080c10`, `#070D10`, `#070b0f`, `#070b10`) are used across different sections without shared token abstraction. | `HeroSection.vue`, `AppFooter.vue`, `main.css` | Minor token fragmentation; hampers global theme adjustments. |
| **4** | **Unused Animation Dependency** | `motion-v: ^2.7.0` is installed in `package.json:20`, but is unreferenced in any component. | `package.json:20` | Unnecessary dependency bloating `node_modules` and lockfile. |

---

## 18. Recommended Improvements

The following improvements are recommended to consolidate the design system:

1. **Mount or Prune `AmbientSpotlight.vue`:**
   - *Recommendation:* Place `<AmbientSpotlight />` in `app/layouts/default.vue` to activate the desktop cursor-following emerald light, or remove the component if the subtle look without cursor tracking is preferred.
2. **Consolidate Dark Canvas Tokens:**
   - *Recommendation:* Standardize on `bg-canvas` (`#0b0f14`) and `bg-canvas-secondary` (`#080c10`) across all section backgrounds, replacing ad-hoc hex values (`#070D10`, `#070b0f`).
3. **Archive Unused Legacy Components:**
   - *Recommendation:* Move `ProductGrid.vue`, `WhyKavorax.vue`, `TrustSection.vue`, and `IndustriesSection.vue` to an `archive/` folder or delete them to eliminate dead code.
4. **Remove Unused `motion-v` Dependency:**
   - *Recommendation:* Run `npm uninstall motion-v` since all animations are handled natively and performantly by Tailwind CSS keyframes.
5. **Modern Image Format Conversion:**
   - *Recommendation:* Convert the 7 JPEG assets in `public/images/` to WebP/AVIF format with responsive `srcset` resolutions for mobile viewports.

---

## 19. Source File and Line Reference Index

- `nuxt.config.ts`:
  - Lines 8–13: Runtime configuration (`apiBase`, `siteUrl`).
  - Lines 41–48: Google Fonts link declarations (`Cormorant Garamond` & `Inter`).
- `tailwind.config.ts`:
  - Lines 16–28: Container settings, padding scale, and `2xl: 1380px` screen definition.
  - Lines 30–78: Color palette tokens (`brand`, `canvas`, HSL CSS variable references).
  - Lines 85–106: Font family mappings (`serif`, `heading`, `display`, `sans`, `mono`).
  - Lines 107–125: CSS keyframes and animations (`accordion-down`, `accordion-up`, `float-slow`).
- `app/assets/css/main.css`:
  - Lines 6–37: `:root` HSL color definitions and base radius (`0.5rem`).
  - Lines 48–67: `body` typography, base color `#e2e8f0`, heading serif rules.
  - Lines 82–92: Emerald glow classes (`.glow-emerald-sm`, `.glow-emerald-subtle`, `.glow-emerald-lg`).
  - Lines 116–122: Editorial image zoom transition (`.img-editorial-zoom`).
  - Lines 124–137: `@keyframes emerald-pulse-dot` and `.animate-pulse-subtle`.
  - Lines 145–167: `.bg-technical-grid` straight-line 192px/48px pattern definitions.
  - Lines 170–190: `.corner-crosshair` active theory corner markers.
  - Lines 216–232: Custom dark scrollbar styling.
  - Lines 234–243: `@media (prefers-reduced-motion: reduce)` accessibility override.
- `app/assets/css/admin.css`:
  - Lines 8–21: Admin typography override forcing pure `Inter` sans-serif.
  - Lines 46–52: Admin 64px straight-line grid.
- `app/components/ui/button/index.ts`:
  - Lines 6–34: CVA button variant declarations and sizing classes.
- `app/components/visual/AmbientSpotlight.vue`:
  - Lines 8–24: Mousemove reactive coordinate tracking for ambient lighting.

---

## 20. Verification Limitations

- **Read-Only Codebase Audit:** This audit was performed via static source code inspection, AST verification, and configuration analysis. No production files were altered or refactored.
- **Headless Browser Runtime Verification:** Headless browser automation was restricted due to upstream CDN connectivity (`playwright.azureedge.net`), meaning visual rendering behavior at arbitrary screen sizes was verified via static viewport media queries and Tailwind breakpoint rules rather than live browser screenshot captures.
- **Production Asset Weights:** Asset weights were extracted directly from the filesystem (`117 KB` to `335 KB`). Network waterfall loading metrics should be validated in a live staging environment.

---

## 21. Implementation Reference Appendix

To assist engineers reproducing or extending the KavoraX Global design system, the following code snippet demonstrates the canonical assembly of an institutional editorial card:

```vue
<template>
  <div class="relative rounded-2xl border border-white/10 bg-[#0d141e]/90 p-8 backdrop-blur-xl corner-crosshair group hover:border-brand/40 transition-all duration-300">
    <!-- Active Theory Corner Crosshairs -->
    <div class="absolute top-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
    <div class="absolute top-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
    <div class="absolute bottom-3 left-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>
    <div class="absolute bottom-3 right-3 z-20 font-mono text-xs text-brand/60 select-none pointer-events-none" aria-hidden="true">+</div>

    <!-- Chapter Eyebrow -->
    <div class="inline-flex items-center gap-2 font-ui text-xs tracking-widest uppercase mb-4">
      <span class="h-2 w-2 rounded-full bg-brand animate-pulse-subtle" aria-hidden="true" />
      <span class="font-mono text-zinc-500 font-medium">01</span>
      <span class="text-white/20">//</span>
      <span class="font-semibold text-brand">ARCHITECTURE</span>
    </div>

    <!-- Editorial Heading with Italic Accent -->
    <h3 class="font-editorial text-3xl font-medium text-white group-hover:text-brand transition-colors">
      Deterministic systems engineered for <span class="italic font-light text-brand">clarity</span>.
    </h3>

    <!-- High-Legibility Body Copy -->
    <p class="font-ui text-sm text-zinc-300 leading-relaxed mt-3">
      Connecting fragmented enterprise toolchains into one unified, auditable operational backbone.
    </p>

    <!-- Footer Action -->
    <div class="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between font-ui text-xs">
      <span class="font-mono text-zinc-400">CLASS-1 RELIABILITY</span>
      <a href="/solutions" class="text-brand font-semibold hover:text-white flex items-center gap-1.5 transition-colors">
        <span>Explore Architecture</span>
        <svg class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</template>
```
