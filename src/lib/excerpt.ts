import type { CollectionEntry } from 'astro:content';

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '');
}

function stripMarkdown(value: string): string {
  return value
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/!\[[^\]]*\]\[[^\]]*\]/g, '') // reference images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // inline links
    .replace(/\[([^\]]*)\]\[[^\]]*\]/g, '$1') // reference links
    .replace(/[*_`]/g, '') // emphasis and inline code markers
    .replace(/:[a-z0-9_+-]+:/g, ''); // emoji shortcodes
}

function stripNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, ' ');
}

function collapseSpaces(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

// Mirror kramdown's smartypants typography, which Jekyll applied to the
// rendered paragraph before deriving the excerpt. Safe here because the
// value is already plain text (tags, links, and code have been stripped).
function smartQuotes(value: string): string {
  const result = value.replace(/\.\.\./g, '…').replace(/'/g, '’');
  return result.replace(/"/g, (_match, offset) => {
    const previous = offset > 0 ? result[offset - 1] : '';
    return previous === '' || /\s|[([{]/.test(previous) ? '“' : '”';
  });
}

function truncate(value: string, length: number, ellipsis = '...'): string {
  if (value.length <= length) {
    return value;
  }
  return value.slice(0, Math.max(0, length - ellipsis.length)) + ellipsis;
}

function firstBlock(body: string): string {
  const withoutImports = body.replace(/^(?:\s*(?:import|export)\s[^\n]*\n)+/, '');
  const trimmed = withoutImports.replace(/^\s+/, '');
  const paragraph = /^<p\b[^>]*>([\s\S]*?)<\/p>/i.exec(trimmed);
  if (paragraph) {
    return paragraph[1];
  }
  return trimmed.split(/\n\s*\n/)[0];
}

export function getExcerpt(entry: CollectionEntry<'blog'>, length: number): string {
  const source = entry.data.excerpt ?? firstBlock(entry.body ?? '');
  const text = smartQuotes(collapseSpaces(stripNewlines(stripMarkdown(stripHtml(source)))));
  return truncate(text, length);
}
