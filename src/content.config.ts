import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const items = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/en/items' }),
	schema: z.object({
		title: z.string(),
		itemId: z.string(),
		collection: z.string(),
		language: z.string().default('en'),
		translationStatus: z.enum(['not-started', 'ai-draft', 'reviewed', 'published']).default('not-started'),
		availableLocales: z.array(z.string()).default(['en']),
		translationSourceItemId: z.string().optional(),
		originalUrl: z.string().url(),
		sourceType: z.enum(['original', 'mirror', 'wayback']),
		sourceUsed: z.string().url(),
		firstPublished: z.string().optional(),
		captureDate: z.string(),
		provenance: z.object({
			sourceId: z.string(),
			rawPath: z.string(),
			hash: z.string(),
		}),
		originalFormat: z.enum(['html', 'pdf', 'image', 'text']),
		assets: z.array(z.string()).default([]),
		editorialNotes: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const archiveCollections = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/en/collections' }),
	schema: z.object({
		title: z.string(),
		collectionId: z.string(),
		summary: z.string(),
		sequence: z.number(),
		defaultLanguage: z.string().default('en'),
		translationReady: z.boolean().default(true),
	}),
});

export const collections = {
	items,
	collections: archiveCollections,
};
