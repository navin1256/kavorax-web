# KavoraX Global — Enterprise Digital Platform

[![Framework: Nuxt 4](https://img.shields.io/badge/Framework-Nuxt%204.6.1-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue: 3.5](https://img.shields.io/badge/Vue-3.5.43-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript: 5+](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS: 3.4](https://img.shields.io/badge/Tailwind%20CSS-3.4.19-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![UI Primitives: shadcn-vue](https://img.shields.io/badge/UI-shadcn--vue-000000?logo=shadcnui&logoColor=white)](https://shadcn-vue.com/)
[![Package Manager: pnpm](https://img.shields.io/badge/pnpm-Locked-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-emerald.svg)]()

The official enterprise digital web platform for **KavoraX Global Private Limited**. Built on Nuxt 4, Vue 3, TypeScript, Tailwind CSS, and shadcn-vue primitives, engineered for high performance, zero-friction responsiveness, and sophisticated editorial enterprise storytelling.

---

## 📑 Table of Contents

- [Overview & Brand Philosophy](#-overview--brand-philosophy)
- [Technology Stack](#-technology-stack)
- [Platform Routes & Architecture](#-platform-routes--architecture)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Repository Structure](#-repository-structure)
- [Step-by-Step Installation & Setup](#-step-by-step-installation--setup)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Clone Repository](#2-clone-repository)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Install Dependencies](#4-install-dependencies)
  - [5. Run Development Server](#5-run-development-server)
  - [6. Code Quality & Linting](#6-code-quality--linting)
  - [7. Production Build & Preview](#7-production-build--preview)
- [Git & GitHub Push Workflow](#-git--github-push-workflow)
- [Available NPM Scripts](#-available-npm-scripts)
- [Deployment](#-deployment)
- [License & Corporate Identity](#-license--corporate-identity)

---

## 🌐 Overview & Brand Philosophy

KavoraX Global Private Limited architects connected business platforms, deterministic orchestration engines, and high-fidelity telemetry infrastructure. The web platform is designed with an editorial, cinematic enterprise aesthetic—avoiding generic SaaS tropes in favor of:

- **Architectural Realism**: Real enterprise architecture imagery with cinematic dark scrims.
- **Pure Straight-Line Geometry**: Lightweight, subtle CSS `linear-gradient` technical grids (48px / 192px cadence) without distracting curves or radial patterns.
- **Editorial Typography**: Pairing classical `Cormorant Garamond` serif headlines with pragmatic `Inter` UI body text and `JetBrains Mono` technical metadata ribbons.
- **Strict Accessibility & Performance**: Zero layout shift, fully accessible radix primitives, and sub-second load times.

---

## 🚀 Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [Nuxt 4](https://nuxt.com/) (`v4.6.1`) | Full-stack Vue 3 framework with SSR and file-based routing |
| **Core View Engine** | [Vue 3](https://vuejs.org/) (`v3.5.43`) | Composition API with `<script setup lang="ts">` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety across components, pages, and shared models |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (`v3.4.19`) | Utility-first CSS extended with custom KavoraX tokens |
| **UI Primitives** | [shadcn-vue](https://shadcn-vue.com/) / `reka-ui` | Accessible headless components (`Button`, `Sheet`, `Dropdown`, `Card`) |
| **Icons** | [Lucide Vue Next](https://lucide.dev/) (`v1.0.0`) | Scalable vector enterprise icons |
| **Validation** | [Zod](https://zod.dev/) (`v4.6.7`) | Schema and input validation |
| **Motion** | [motion-v](https://motion.dev/) | Subtle, performant entrance transitions |
| **Linting & Formatting** | [ESLint 10](https://eslint.org/) + Prettier 3 | Automated code cleanliness adhering to `@nuxt/eslint` |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, deterministic dependency management via `pnpm-lock.yaml` |

---

## 🗺️ Platform Routes & Architecture

The application comprises 8 responsive routes:

1. **Homepage (`/`)**:
   - Full-bleed cinematic architectural skyscraper hero with dark charcoal overlays.
   - Preserved editorial headline (*"Technology that moves business forward."*).
   - Deterministic Systems Infrastructure topology visual (3 layers) and capability pillars.
   - The Connected Mandate editorial essay with pull quotes and core principles.
   - Interactive Connected Architecture visual diagram.
   - Flagship product showcases with technical feature highlights.
   - Photography-led Connected Solutions section with architectural framing.
   - Sector Architectures / Industry preview tabs.
   - The KavoraX Standard foundational commitment ledger.
   - High-impact closing advisory CTA.

2. **Products (`/products`)**:
   - Interactive Solutions Console covering Operations Platform, Analytics & Insights, and Integration Hub.
   - Deep architectural feature matrix and platform specifications.

3. **Solutions (`/solutions`)**:
   - Connected Systems Architecture blueprint and multi-cloud telemetry workflows.
   - Interactive system layers and cross-functional synchronization diagrams.

4. **Industries (`/industries`)**:
   - Dedicated sector frameworks for Financial Services, Healthcare & Life Sciences, Supply Chain & Logistics, and Manufacturing.

5. **Pricing (`/pricing`)**:
   - Consultative scope sizing framework, engagement tiers, and SLA telemetry readouts.
   - Transparent engagement models and comprehensive FAQ accordion.

6. **About (`/about`)**:
   - Corporate founding narrative, corporate value pillars (*Cohesive*, *Pragmatic*, *Resilient*), and architectural headquarters overview.

7. **Contact (`/contact`)**:
   - Enterprise consultation form, interactive inquiry routing, validation feedback, and global presence index.

8. **Demo (`/demo`)**:
   - Technical walkthrough modules, architectural overview, and interactive briefing scheduler.

---

## 🎨 Design System & Aesthetics

```
Color Palette:
├── Background (Base):      #070D10 (Near-black obsidian)
├── Background (Elevated):  #080c10 / #0b0f14 (Charcoal slate)
├── Brand Primary:          #10b981 (Emerald Green)
├── Brand Secondary/Accent: #34d399 (Luminous Mint)
├── Card Surfaces:          #0c141e / #0f1722 (Deep navy-charcoal with 90% opacity)
├── Borders:                rgba(255, 255, 255, 0.08)
└── Text Hierarchy:         #FFFFFF (Headlines) / #E2E8F0 (Body) / #94A3B8 (Metadata)

Typography Hierarchy:
├── Serif Headlines:        Cormorant Garamond, Georgia, serif
├── UI & Interface Text:    Inter, system-ui, sans-serif
└── Technical Metadata:     JetBrains Mono, monospace
```

### Technical Straight-Line Grid Specification
Dark sections utilize a dual-cadence CSS `linear-gradient` grid:
- **Fine grid**: 48px cadence with subtle dark-gray lines (`rgba(255, 255, 255, 0.022)`).
- **Major accent grid**: 192px cadence with faint emerald-green tint (`rgba(16, 185, 129, 0.04)`).
- **Hero Image Protection**: The hero photographic building visual is explicitly exempted (`.hero-cinematic-bg`) to maintain pristine photographic clarity.

---

## 📂 Repository Structure

```
kavorax-web/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css                 # Design tokens, typography, and technical grid classes
│   ├── components/
│   │   ├── about/                       # Corporate narrative and leadership components
│   │   ├── contact/                     # Inquiry forms and office locations
│   │   ├── demo/                        # Briefing request and walkthrough modules
│   │   ├── home/                        # Homepage modular sections (Hero, Editorial, Topology, etc.)
│   │   ├── industries/                  # Sector-specific architecture components
│   │   ├── layout/                      # Global AppHeader, AppFooter, and MobileNavigation
│   │   ├── pricing/                     # Engagement tiers, SLA telemetry, and FAQ accordion
│   │   ├── products/                    # Solutions Console and capability showcases
│   │   ├── solutions/                   # Systems architecture blueprint components
│   │   ├── ui/                          # shadcn-vue accessible primitives (button, input, etc.)
│   │   └── visual/                      # Technical badges, dividers, and architectural frames
│   ├── layouts/
│   │   └── default.vue                  # Primary layout wrapper
│   ├── pages/
│   │   ├── about.vue                    # /about route
│   │   ├── contact.vue                  # /contact route
│   │   ├── demo.vue                     # /demo route
│   │   ├── index.vue                    # / (homepage) route
│   │   ├── industries/index.vue         # /industries route
│   │   ├── pricing.vue                  # /pricing route
│   │   ├── products/index.vue           # /products route
│   │   └── solutions/index.vue          # /solutions route
│   ├── utils/                           # Tailwind class merging utility (`cn`)
│   └── app.vue                          # Root Nuxt application entry
├── public/
│   ├── images/                          # Authentic enterprise & architectural photography
│   └── favicon.ico                      # Brand favicon asset
├── shared/
│   └── types/                           # Shared TypeScript interfaces
├── .env.example                         # Environment configuration template
├── .gitignore                           # Git ignore rules for build, deps, and secrets
├── .npmrc                               # pnpm package installation configuration
├── .prettierrc                          # Prettier code formatting rules
├── components.json                      # shadcn-vue registry configuration
├── eslint.config.mjs                    # ESLint 10 + @nuxt/eslint configuration
├── nuxt.config.ts                       # Nuxt 4 configuration, modules, and SEO metadata
├── package.json                         # Project dependencies and script declarations
├── pnpm-lock.yaml                       # Deterministic dependency lockfile
├── tailwind.config.ts                   # Tailwind theme extensions and token definitions
└── tsconfig.json                        # Strict TypeScript compiler options
```

---

## 🛠️ Step-by-Step Installation & Setup

Follow these steps to set up the project locally from scratch:

### 1. Prerequisites

Ensure your development environment meets the following minimum requirements:

- **Node.js**: `v20.10.0` or higher (LTS recommended)
  - Verify with: `node -v`
- **pnpm**: `v9.x` or higher (pnpm `10+` recommended)
  - Install or update via Corepack:
    ```bash
    corepack enable
    corepack prepare pnpm@latest --activate
    ```
  - Or install globally via npm:
    ```bash
    npm install -g pnpm
    ```
- **Git**: Installed and configured on your machine.

---

### 2. Clone Repository

Clone the project from GitHub and navigate into the project root:

```bash
# Clone via HTTPS
git clone https://github.com/<your-organization-or-username>/kavorax-web.git

# Navigate into the project folder
cd kavorax-web
```

---

### 3. Configure Environment Variables

Create a local `.env` configuration file from the provided template:

```bash
# On Linux / macOS / Git Bash / PowerShell
cp .env.example .env
```

Review and adjust variables in `.env` as needed:

```env
# Production domain / local development URL
NUXT_PUBLIC_SITE_URL=http://localhost:3000

# Backend API endpoint (if applicable)
NUXT_PUBLIC_API_BASE=https://api.kavorax.com

# Environment indicator
NODE_ENV=development
```

---

### 4. Install Dependencies

Install all project dependencies deterministically using `pnpm`:

```bash
pnpm install
```

> **Note**: This will generate the necessary Nuxt types and configure your `.nuxt` environment automatically via `nuxt prepare`.

---

### 5. Run Development Server

Start the local Nuxt development server with Hot Module Replacement (HMR):

```bash
pnpm dev
```

Once compilation completes, open your browser and navigate to:

👉 **`http://localhost:3000`**

---

### 6. Code Quality & Linting

Verify code quality and formatting before committing changes:

```bash
# Run ESLint across all components, pages, and layouts
pnpm lint

# Automatically format code using Prettier
pnpm format
```

---

### 7. Production Build & Preview

Generate an optimized, production-ready build:

```bash
# Compile client and Nitro server bundle
pnpm build
```

Preview the production build locally:

```bash
# Preview via Nuxt CLI
pnpm preview

# Or launch the standalone Node Nitro server directly
node .output/server/index.mjs
```

The production preview server runs at `http://localhost:3000`.

---

## 🐙 Git & GitHub Push Workflow

To push this codebase to a new or existing GitHub repository:

### Step 1: Initialize Git & Stage All Files

```bash
# Check current git status
git status

# Stage all files
git add .

# Verify staged files
git status
```

### Step 2: Create Initial Commit

```bash
git commit -m "feat: complete KavoraX enterprise website implementation with cinematic hero and subtle technical grid"
```

### Step 3: Link to Your GitHub Repository

Create a new repository on [GitHub](https://github.com/new) (e.g. `kavorax-web`), then link it:

```bash
# Rename branch to main (if not already main)
git branch -M main

# Add your GitHub repository as remote origin (replace with your repo URL)
git remote add origin https://github.com/<YOUR_USERNAME_OR_ORG>/kavorax-web.git

# Verify remote configuration
git remote -v
```

### Step 4: Push to GitHub

```bash
# Push code to main branch
git push -u origin main
```

---

## ⚡ Available NPM Scripts

| Command | Action | Description |
| :--- | :--- | :--- |
| `pnpm dev` | `nuxt dev` | Launches local development server on `http://localhost:3000` |
| `pnpm build` | `nuxt build` | Compiles optimized production bundle into `.output/` |
| `pnpm preview` | `nuxt preview` | Previews the compiled production build locally |
| `pnpm generate` | `nuxt generate` | Pre-renders static HTML pages |
| `pnpm postinstall` | `nuxt prepare` | Prepares Nuxt TypeScript declarations and auto-imports |
| `pnpm lint` | `eslint .` | Runs ESLint 10 checks across the workspace |
| `pnpm format` | `prettier --write .` | Formats all code according to `.prettierrc` rules |

---

## 🚀 Deployment

The compiled output (`.output/`) is self-contained and ready to deploy across all modern platforms:

- **Node.js Server**: Run `node .output/server/index.mjs` behind Nginx, Caddy, or PM2.
- **Vercel**: Zero-configuration deployment by connecting the GitHub repository. Nuxt preset is automatically detected.
- **Cloudflare Pages**: Configure `nitro.preset: 'cloudflare-pages'` in `nuxt.config.ts`.
- **Docker**:
  ```dockerfile
  FROM node:20-alpine
  WORKDIR /app
  COPY .output ./
  ENV PORT=3000
  EXPOSE 3000
  CMD ["node", "server/index.mjs"]
  ```

---

## ⚖️ License & Corporate Identity

© 2026 **KavoraX Global Private Limited**. All rights reserved.

All proprietary brand marks, corporate copy, and intellectual property remain the exclusive property of KavoraX Global Private Limited.
