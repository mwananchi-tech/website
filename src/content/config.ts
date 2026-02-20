import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().optional(),
    live: z.string().optional(),
    accentColor: z.enum(["red", "navy"]).default("red"),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  blog,
};

export const siteConfig = {
  plausible: {
    enabled: true,
    domain: "mwananchi-tech.github.io",
  },
};
