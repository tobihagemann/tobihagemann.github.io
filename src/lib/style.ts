/** Build a `max-width` inline style: a bare integer is treated as pixels, any other value (e.g. "100%") is used as-is, and falsy values produce no style. */
export function maxWidthStyle(maxWidth?: number | string): string | undefined {
  if (!maxWidth) return undefined;
  const width = /^\d+$/.test(String(maxWidth)) ? `${maxWidth}px` : maxWidth;
  return `max-width: ${width};`;
}
