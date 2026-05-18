import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

const schemaColor = z
  .enum([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "neutral",
  ])
  .optional();

const schemaVariant = z
  .enum(["solid", "outline", "soft", "subtle", "ghost", "link"])
  .optional();

const schemaLink = z.object({
  label: z.string(),
  to: z.string(),
  icon: z.string(),
  color: schemaColor,
  variant: schemaVariant,
});
const schemaImage = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  lazy: z.boolean().optional(),
});

export default defineContentConfig({
  collections: {
    section: defineCollection({
      type: "page",
      source: "section/**",
      schema: z.object({
        description: z.string().optional(),
        headline: z.string().optional(),
        image: schemaImage.optional(),
        links: z.array(schemaLink).optional(),
      }),
    }),
    experience: defineCollection({
      type: "page",
      source: "experience/**",
      schema: z.object({
        company: z.string(),
        title: z.string(),
        location: z.string(),
        type: z.string(),
        date_start: z.date(),
        date_ended: z.date().optional(),
      }),
    }),
  },
});
