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
      email: process.env.NUXT_PUBLIC_SITE_EMAIL,
      socials: {
        github: process.env.NUXT_PUBLIC_SOCIAL_GITHUB_URL,
        instagram: process.env.NUXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
        linkedin: process.env.NUXT_PUBLIC_SOCIAL_LINKEDIN_URL,
        letterboxd: process.env.NUXT_PUBLIC_SOCIAL_LETTERBOXD_URL,
        pinterest: process.env.NUXT_PUBLIC_SOCIAL_PINTEREST_URL,
      },
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/tailwind.css",
  ],
  fonts: {
    families: [
      {
        name: "Jost",
        weights: [400, 500, 600, 700],
        styles: ["normal", "italic"],
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
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true, typeCheck: true },
});
