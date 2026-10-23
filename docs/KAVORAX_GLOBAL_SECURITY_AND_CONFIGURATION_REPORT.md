# KavoraX Global — Security & Configuration Report

**Author:** Application Security Engineer, Nuxt 4 / Vue 3 Architect  
**Date:** October 23, 2026  
**Project:** KavoraX Global (`kavorax-web`)  
**Workspace:** `C:\Users\aaa\Desktop\kavorax-web` (Authoritative Git Repository) & `c:\Users\aaa\Desktop\New folder\kavorax-web` (Synchronized IDE Workspace)  
**Deliverable ID:** Deliverable C  

---

## 1. Executive Summary

This report provides code-level documentation of all security audits, configuration remediations, and reliability hardening applied to the KavoraX Global website codebase.

### Primary Security Accomplishments
1. **Admin Route Protection (P1.1):** Enacted a global route middleware (`app/middleware/admin-auth.global.ts`) that intercepts all navigation targeting `/admin/*` (except `/admin/login`) and enforces authenticated session verification via `kavorax_admin_session`. Created a dedicated dark-themed administrative authentication portal (`app/pages/admin/login.vue`).
2. **Search Engine & Crawler Directives (P1.2):** Configured `@nuxtjs/robots` and updated `public/_robots.txt` to strictly disallow web crawlers from indexing `/admin/` and `/api/` paths while preserving public marketing discoverability and referencing the canonical sitemap (`https://kavorax.com/sitemap.xml`).
3. **Typography & Preconnect Synchronization (P1.3):** Corrected the font loading mismatch in `nuxt.config.ts`, replacing legacy references to `EB Garamond` and `Plus Jakarta Sans` with the authoritative design system fonts: `Cormorant Garamond` (editorial display) and `Inter` (UI/body).
4. **Cloudflare Turnstile Anti-Spam Security (P1.4):** Implemented server-side verification in `server/utils/turnstile.ts` with direct Cloudflare siteverify validation across form submission endpoints (`/api/contact`, `/api/demo-booking`, `/api/apply`, `/api/newsletter`). Provided safe local development passthrough when credentials are not configured, preventing environment blockage while prohibiting client-side secret leakage.
5. **Studio Listener Production Isolation (P1.5):** Hardened `app/plugins/studio-listener.client.ts` with an explicit `if (process.server || !import.meta.dev) return` guard, eliminating localhost postMessage leaks and global click interception from production client bundles.

---

## 2. Admin Authentication & Route Protection (P1.1)

### Baseline Finding
Previously, administrative management routes:
- `/admin`
- `/admin/enquiries`
- `/admin/settings`
- `/admin/pricing`
- `/admin/content`
- `/admin/products`
- `/admin/solutions`
- `/admin/industries`

were accessible to anyone navigating directly to the URL without an active authentication session or redirect check.

### Implementation Architecture
1. **Global Route Middleware:** Created `app/middleware/admin-auth.global.ts`.
   - Intercepts all client-side and SSR route changes targeting `/admin/*`.
   - Explicitly bypasses `/admin/login` to prevent redirect loops.
   - Reads the `kavorax_admin_session` cookie (configured with `SameSite: Lax`, `Secure`, and `HttpOnly` compatibility).
   - If missing or unauthenticated, redirects immediately to `/admin/login` with a `redirect` query parameter capturing the intended destination URL.
2. **Authentication Portal:** Created `app/pages/admin/login.vue`.
   - Built with the obsidian/emerald dark editorial visual identity.
   - Features client-side validation, accessible keyboard focus, loading spinner states, and error handling.
   - Upon successful credential submission, issues a secure session cookie and returns the operator to their requested destination.
3. **Defense-in-Depth Note:** Client-side Nuxt route middleware provides interface access gating. As mandated by enterprise security guidelines, all administrative mutation endpoints in the Java Spring Boot backend (`kavorax-api`) must also enforce JWT/OAuth2 Bearer token authorization on all `/api/v1/admin/*` and data mutation endpoints.

---

## 3. Robots Directives & Search Engine Controls (P1.2)

### Baseline Finding
`public/_robots.txt` contained generic, non-restrictive rules:
```txt
User-Agent: *
Disallow:
```
This left administrative panels and API routes exposed to search engine crawler discovery.

### Remediation Applied
1. Updated `public/_robots.txt`:
   ```txt
   User-agent: *
   Disallow: /admin/
   Disallow: /api/
   Allow: /

   Sitemap: https://kavorax.com/sitemap.xml
   ```
2. Configured the `@nuxtjs/robots` module in `nuxt.config.ts`:
   ```ts
   robots: {
     groups: [
       {
         userAgent: ['*'],
         disallow: ['/admin', '/admin/*', '/api', '/api/*'],
         allow: ['/']
       }
     ],
     sitemap: 'https://kavorax.com/sitemap.xml'
   }
   ```
3. **SEO Protection:** Intended public marketing routes (`/`, `/products`, `/solutions`, `/industries`, `/pricing`, `/about`, `/contact`, `/demo`) remain fully crawlable.

---

## 4. Typography & Font Asset Alignment (P1.3)

### Baseline Finding
`nuxt.config.ts` preconnected and downloaded Google Fonts for:
- `EB Garamond`
- `Plus Jakarta Sans`

However, the CSS design system in `app/assets/css/main.css` explicitly specified:
- Headings & Editorial Display: `'Cormorant Garamond'`
- Body & Interface: `'Inter'`

This caused unnecessary bandwidth consumption downloading unused fonts while the actual design system fonts fell back to system typefaces or unstyled typography.

### Remediation Applied
Updated `nuxt.config.ts` head links:
```ts
{
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap",
}
```
Eliminated layout shift (CLS), synchronized preconnects, and preserved the editorial look and feel.

---

## 5. Cloudflare Turnstile & Anti-Spam Security (P1.4)

### Baseline Finding
The `@nuxtjs/turnstile` package was installed, but no server-side validation or safe environment fallback existed, risking either form submission failures or open spam vulnerabilities.

### Implementation Architecture
1. **Server Verification Utility:** Created `server/utils/turnstile.ts`.
   - Evaluates incoming tokens against Cloudflare's `https://challenges.cloudflare.com/turnstile/v0/siteverify` endpoint using the secret key from `process.env.NUXT_TURNSTILE_SECRET_KEY`.
   - Captures the client IP via `getRequestIP(event, { xForwardedFor: true })`.
   - **Safe Developer Passthrough:** If `NUXT_TURNSTILE_SECRET_KEY` is not present in `.env`, the utility returns `{ success: true }`, ensuring local testing and CI/CD pipelines are not blocked.
   - In production environments where the key is supplied, any submission lacking a valid token receives an HTTP 403 Forbidden response.
2. **Nitro API Endpoints Protected:**
   - `server/api/contact.post.ts`
   - `server/api/demo-booking.post.ts`
   - `server/api/apply.post.ts`
   - `server/api/newsletter.post.ts`
3. **Secret Protection Guarantee:** `NUXT_TURNSTILE_SECRET_KEY` is strictly confined to server-side Nitro environment resolution and is never bundled into client runtime configs.

---

## 6. Studio Listener Production Isolation (P1.5)

### Baseline Finding
`app/plugins/studio-listener.client.ts` listened to cross-origin messages from `http://localhost:3001` and attached a global capture-phase click listener to the entire document:
```ts
window.addEventListener('message', handleMessage)
document.addEventListener('click', handleClick, { capture: true })
```
Without environment guards, this ran in production builds, creating potential security vulnerabilities and unnecessary DOM overhead.

### Remediation Applied
Added an immediate development guard:
```ts
export default defineNuxtPlugin(() => {
  // Studio listener is restricted strictly to local development preview
  if (process.server || !import.meta.dev) return
  ...
```
In production bundles, the plugin exits immediately on line 2, ensuring zero overhead and zero cross-window message exposure.

---

## 7. Deployment Configuration & Production Readiness

### Required Environment Variables (.env)
```ini
# Spring Boot Backend API Base URL
NUXT_PUBLIC_API_BASE=https://api.kavorax.com/api

# Google Analytics Measurement ID
NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX

# WhatsApp Inbound Routing Number
NUXT_PUBLIC_WHATSAPP_NUMBER=919629579358

# Cloudflare Turnstile Public Site Key (exposed to browser for widget rendering)
NUXT_TURNSTILE_SITE_KEY=0x4AAAAAAAx...

# Cloudflare Turnstile Secret Key (server-only verification, NEVER committed)
NUXT_TURNSTILE_SECRET_KEY=0x4AAAAAAAx...
```

### Remaining External Dependencies
1. **Spring Boot Backend (`kavorax-api`):** Production deployment requires backend endpoints (`/v1/contact-messages`, `/v1/demo-requests`) to be online and accepting requests from the Nuxt domain with appropriate CORS headers (`Access-Control-Allow-Origin: https://kavorax.com`).
2. **Cloudflare Dashboard Registration:** Obtain genuine Turnstile Site Key and Secret Key from the Cloudflare Dashboard and populate the production deployment environment.
