import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const reference = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const spreadsheets = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/spreadsheets" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
  }),
});

const gettingstarted = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/gettingstarted" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
  }),
});

const whitepapers = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/whitepapers" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    readLink: z.string().optional(),
    btnTitle: z.string().optional(),
    btnLink: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const roadmaps = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/roadmaps" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const aiml = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/aiml" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const sitecore = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/sitecore" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const frontend = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx', '**/*.mdoc'], base: "./src/content/frontend" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = { articles, reference, spreadsheets, whitepapers, projects, roadmaps, gettingstarted, aiml, sitecore, frontend };
