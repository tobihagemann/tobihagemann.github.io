import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { permalink } from '../lib/permalink';
import { renderEntryToHtml } from '../lib/render';
import { getSortedPosts } from '../lib/posts';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = (await getSortedPosts()).slice(0, 10);

  const items = await Promise.all(
    posts.map(async (post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: permalink(post.id),
      content: await renderEntryToHtml(post),
    }))
  );

  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<atom:link href="${new URL('feed.xml', context.site).href}" rel="self" type="application/rss+xml"/>`,
  });
}
