import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",
  devtools: { enabled: false },

  experimental: {
    appManifest: false
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@vueuse/nuxt",
    "nuxt-gtag",
    "@nuxtjs/turnstile",
  ],

  fonts: {
    families: [
      { name: "Cormorant Garamond", provider: "google", weights: [400, 500, 600, 700], styles: ["normal", "italic"] },
      { name: "Inter", provider: "google", weights: [300, 400, 500, 600, 700], styles: ["normal"] },
    ],
    defaults: {
      preload: true,
      weights: [400, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
    },
  },

  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://kavorax.com",
    name: "KavoraX Global"
  },

  robots: {
    groups: [
      {
        userAgent: ['*'],
        disallow: ['/admin', '/admin/*', '/api', '/api/*'],
        allow: ['/']
      }
    ],
    sitemap: 'https://kavorax.com/sitemap.xml'
  },

  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
  },

  i18n: {
    locales: [
      { code: "en", language: "en-IN", name: "English", file: "en.json" },
      { code: "ar", language: "ar-OM", name: "العربية", file: "ar.json", dir: "rtl" },
      { code: "hi", language: "hi-IN", name: "हिन्दी", file: "hi.json" },
      { code: "ta", language: "ta-IN", name: "தமிழ்", file: "ta.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "../i18n/locales",
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8080/api",
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || "",
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || "919629579358",
    },
  },

  routeRules: {
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=86400, stale-while-revalidate=604800' } },
    '/': { prerender: true },
    '/about': { prerender: true },
    '/solutions': { prerender: true },
    '/products': { prerender: true },
    '/industries': { prerender: true },
    '/pricing': { prerender: true },
    '/contact': { prerender: true },
    '/demo': { prerender: true },
    '/pos-and-billing': { prerender: true },
    '/kitchen-display': { prerender: true },
    '/privacy-policy': { prerender: true },
    '/terms-of-service': { prerender: true },
    '/contact-us': { redirect: { to: '/contact', statusCode: 301 } },
    '/careers': { redirect: { to: '/about', statusCode: 301 } },
    '/resources': { redirect: { to: '/solutions', statusCode: 301 } },
    '/restaurants': { redirect: { to: '/industries', statusCode: 301 } },
    '/cafes': { redirect: { to: '/industries', statusCode: 301 } },
    '/retail': { redirect: { to: '/industries', statusCode: 301 } },
    '/convenience-stores': { redirect: { to: '/industries', statusCode: 301 } },
    '/hospitality': { redirect: { to: '/industries', statusCode: 301 } },
    '/salons': { redirect: { to: '/industries', statusCode: 301 } },
    '/ecommerce': { redirect: { to: '/solutions', statusCode: 301 } },
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/about',
        '/solutions',
        '/products',
        '/industries',
        '/pricing',
        '/contact',
        '/demo',
        '/pos-and-billing',
        '/kitchen-display',
        '/privacy-policy',
        '/terms-of-service'
      ]
    }
  },
});
