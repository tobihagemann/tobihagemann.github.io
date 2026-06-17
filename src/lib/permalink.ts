export interface PermalinkParts {
  year: string;
  month: string;
  day: string;
  slug: string;
}

const ID_PATTERN = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;

export function parsePermalink(id: string): PermalinkParts {
  const match = ID_PATTERN.exec(id);
  if (!match) {
    throw new Error(`Post id "${id}" does not match YYYY-MM-DD-slug`);
  }
  const [, year, month, day, slug] = match;
  return { year, month, day, slug };
}

export function permalink(id: string): string {
  const { year, month, day, slug } = parsePermalink(id);
  return `/${year}/${month}/${day}/${slug}/`;
}
