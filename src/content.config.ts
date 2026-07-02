import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
  schema: z.object({
    title: z.string(),
    version: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { changelog };
