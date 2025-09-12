import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/i18n",
  ],
  site: {
    indexable: true,
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
  },
  runtimeConfig: {
    public: {
      url: process.env.NUXT_PUBLIC_SITE_URL,
      name: process.env.NUXT_PUBLIC_SITE_NAME,
    },
  },
  css: ["~/assets/tailwind.css"],
  fonts: {
    families: [
      {
        name: "Jost",
        weights: [400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
    ],
  },
  i18n: {
    defaultLocale: "nl",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "rvu-locale",
      alwaysRedirect: true,
      fallbackLocale: "nl",
    },
    locales: [
      {
        code: "nl",
        iso: "nl-NL",
        name: "Nederlands",
        file: "nl.json",
      },
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
