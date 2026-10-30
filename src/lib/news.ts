import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'ja' | 'en';

/** 公開中の記事だけを返す。下書き・公開日時前・公開終了後は出さない（予約公開はビルド時刻で判定）。 */
export async function publishedNews(lang: Lang) {
  const now = new Date();
  const all = await getCollection('news', (e) => e.id.startsWith(`${lang}/`));
  return all
    .filter((e) => !e.data.draft)
    .filter((e) => e.data.publishDate <= now)
    .filter((e) => !e.data.unpublishDate || e.data.unpublishDate > now)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

export const slugOf = (e: CollectionEntry<'news'>) => e.id.split('/').slice(1).join('/');

export const fmt = (d: Date, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'ja' ? 'ja-JP' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tokyo' }).format(d);
