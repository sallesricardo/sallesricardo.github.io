import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['low-level', 'fullstack']),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
