import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// お知らせ。Sveltia CMS の i18n（multiple_folders）で ja/ と en/ に同じファイル名で保存される。
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    // CMS は空の日時を '' で保存するので、未入力として扱う
    unpublishDate: z.preprocess((v) => (v === '' ? undefined : v), z.coerce.date().optional().nullable()),
    draft: z.boolean().default(false),
    category: z.string().optional(),
    image: z.string().optional().nullable(),
    summary: z.string().optional(),
  }),
});

export const collections = { news };
