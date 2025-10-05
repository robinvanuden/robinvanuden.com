import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content_nl: defineCollection({
      type: "page",
      source: "nl/**/*.md",
    }),
    content_en: defineCollection({
      type: "page",
      source: "en/**/*.md",
    }),
  },
});
