import { experimental_AstroContainer, type AstroContainer } from 'astro/container';
import mdxRenderer from '@astrojs/mdx/server.js';
import { render, type CollectionEntry } from 'astro:content';

let containerPromise: Promise<AstroContainer> | undefined;

async function getContainer(): Promise<AstroContainer> {
  if (!containerPromise) {
    containerPromise = (async () => {
      const container = await experimental_AstroContainer.create();
      container.addServerRenderer({ renderer: mdxRenderer });
      return container;
    })();
  }
  return containerPromise;
}

export async function renderEntryToHtml(entry: CollectionEntry<'blog'>): Promise<string> {
  const container = await getContainer();
  const { Content } = await render(entry);
  return container.renderToString(Content);
}
