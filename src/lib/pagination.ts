export const PAGE_SIZE = 10;

export function pagePath(num: number): string {
  return num === 1 ? '/blog/' : `/blog/page/${num}/`;
}
