// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  site: {
    indexable: true,
    url: "https://www.robinvanuden.com",
    name: "Robin van Uden",
  },
  css: ["~/assets/master.css"],
  fonts: {
    families: [
      {
        name: "Poppins",
        styles: ["normal", "italic"],
        weights: [400, 600, 700],
      },
    ],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
