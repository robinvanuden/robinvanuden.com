import { defineIcons } from "./font-awesome.ts";

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
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
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
        name: "Petrona",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ["normal", "italic"],
      },
      {
        name: "Poppins",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ["normal", "italic"],
      },
    ],
  },
  icon: {
    customCollections: defineIcons(),
    provider: "server",
    serverBundle: {
      collections: ["fas", "far", "fab", "lucide", "simple-icons"],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  typescript: { strict: true, typeCheck: true },
});
