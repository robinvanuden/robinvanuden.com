import { defineIcons } from "./icons/font-awesome";

export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  css: ["~/assets/tailwind.css"],
  site: {
    indexable: true,
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
  },
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
  runtimeConfig: {
    public: {
      site: {
        url: "",
        name: "",
        email: "",
      },
      socials: {
        github: "",
        instagram: "",
        linkedin: "",
        letterboxd: "",
        pinterest: "",
      },
    },
  },
  fonts: {
    families: [
      {
        name: "Jost",
        weights: [400, 500, 600, 700],
        styles: ["normal", "italic"],
      },
    ],
  },
  icon: {
    customCollections: defineIcons(),
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  typescript: { strict: true, typeCheck: true },
});
