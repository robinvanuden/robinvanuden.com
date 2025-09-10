const url = process.env.NUXT_PUBLIC_SITE_URL;
const name = process.env.NUXT_PUBLIC_SITE_NAME;

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
    url,
    name,
  },
  runtimeConfig: {
    public: {
      url,
      name,
    },
  },
  css: ["~/assets/tailwind.css"],
  fonts: {
    families: [
      {
        name: "Poppins",
        styles: ["normal", "italic"],
      },
    ],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
