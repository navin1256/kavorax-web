import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",
  devtools: { enabled: true },

  experimental: {
    appManifest: false
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-gtag",
    "@nuxtjs/turnstile",
  ],

  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },

  site: { url: "https://kavorax.com" }, // used by sitemap module

  robots: {
    groups: [
      {
        userAgent: ['*'],
        disallow: ['/api', '/api/*'],
        allow: ['/']
      }
    ],
    sitemap: 'https://kavorax.com/sitemap.xml'
  },

  turnstile: {
    siteKey: process.env.NUXT_TURNSTILE_SITE_KEY || '',
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

  // Removed hardcoded prerender routes to dynamically generate based on available pages
  nitro: {},
});
