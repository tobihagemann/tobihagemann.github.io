// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import remarkGemoji from 'remark-gemoji';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://tobiha.de',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGemoji],
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
    }),
    shikiConfig: { theme: 'github-light' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
