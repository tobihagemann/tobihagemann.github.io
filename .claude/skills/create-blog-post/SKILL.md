---
name: create-blog-post
description: This skill should be used when the user asks to "create a blog post", "write a blog post", "new blog post", "add a blog post", or wants to create a new post for the Astro blog.
---

# Create Blog Post

Create a new blog post for the Astro blog at tobiha.de, following the established conventions and writing style.

## Process

1. Read at least 2-3 recent posts from `src/content/blog/` to absorb the current writing style and tone
2. If the user provides a draft or notes, read them first
3. Create the post file and any associated assets
4. Present the draft for review

## File Naming

Post files go in `src/content/blog/` with the format `YYYY-MM-DD-slug-name.mdx`. Use the current date unless specified otherwise. The slug should be short and descriptive, using hyphens. All posts are `.mdx`.

## Front Matter

Posts use this front matter structure:

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
ogimage: /assets/YYYY-MM-DD-ogimage.png  # optional
---
```

The schema is defined in `src/content.config.ts`. Only `title` and `date` are required. Quote the `title`; leave `date` unquoted. Optional fields: `ogimage` (only if the user provides an OG image), `excerpt` (a custom blog-listing summary), and `noindex` (set `true` to hide a post from search engines). Do not add `layout`, `activelink`, or `stylesheets` fields — those were Jekyll-only and the Astro layout handles them.

## Lead Paragraph

The first element after front matter is always a styled lead paragraph:

```html
<p class="lead">Lead text here with [a link](https://example.com/) and _markdown_ support.</p>
```

Write the inner content as plain Markdown (links, `_emphasis_`, backticks). MDX reprocesses it, so smartypants curls the quotes and `rehype-external-links` adds `target`/`rel` to external links automatically. Do not add `markdown="1"` (a Jekyll attribute) and do not pre-convert the inner content to literal inline HTML — literal inline elements split the block and stop MDX from reprocessing the surrounding text. Keep the lead to 2-3 sentences. It should hook the reader and summarize the post's topic.

## Writing Style

The blog has a distinct personal voice. Before writing, read recent posts to match:

- **Tone**: Conversational, first-person, casual but informative
- **No em dashes**: Use commas or restructure the sentence instead
- **No ultra-short dramatic sentences**: Avoid things like "Or so I thought." or "Let that sink in."
- **Emoji**: Use sparingly, as gemoji shortcodes (`:wink:`, `:joy:`, `:tada:`) not Unicode. The `remark-gemoji` plugin converts them.
- **Headers**: Use `##` for sections, `###` for subsections
- **Code blocks**: Use fenced code blocks with language identifiers (Shiki highlights them with the `github-light` theme)

## Links

Use either inline links or reference-style links collected at the bottom of the file. External links get `target="_blank" rel="noopener"` added automatically by `rehype-external-links`, so do not add `{:target}`/`{:rel}` attributes (those were Jekyll/kramdown-only).

```markdown
Check out [this tool](https://example.com/) or [this one][tool-name].

[tool-name]: https://example.com/ "Tool Name"
```

Internal links (to other blog posts) use the permalink path, e.g. `[The Shit Is Hot](/2018/03/26/the-shit-is-hot/)`.

## Assets

Asset files go in `public/assets/` with the naming pattern `YYYY-MM-DD-description.{png,jpg,svg,mp4}`. The date prefix matches the post date. Reference them with a root-absolute path: `/assets/YYYY-MM-DD-description.png` (no Jekyll `prepend: site.baseurl` filter).

For screenshots taken on a Retina display (@2x), set the displayed `max-width` to half the actual pixel width.

## HTML Patterns

These blocks are written as literal HTML/JSX inside the `.mdx` file. MDX requires self-closing tags (`<img ... />`, `<source ... />`).

### Image with Caption

Set `max-width` on the `<figure>` (not the `<img>`) to half the pixel width for @2x screenshots. This ensures `img-fluid` scales correctly on mobile.

```html
<div class="text-center">
  <figure class="figure" style="max-width: 835px;">
    <img class="figure-img img-fluid rounded" src="/assets/YYYY-MM-DD-name.png" alt="Alt text"/>
    <figcaption class="figure-caption">Caption text</figcaption>
  </figure>
</div>
```

### Image without Caption

```html
<div class="text-center">
  <figure class="figure" style="max-width: 516px;">
    <img class="figure-img img-fluid rounded" src="/assets/YYYY-MM-DD-name.png" alt="Alt text"/>
  </figure>
</div>
```

### Full-Width Image (SVGs, Diagrams)

No `rounded` class, no fixed `max-width`.

```html
<div class="text-center">
  <figure class="figure" style="max-width: 100%;">
    <img class="figure-img img-fluid" src="/assets/YYYY-MM-DD-name.svg" alt="Alt text"/>
    <figcaption class="figure-caption">Caption text</figcaption>
  </figure>
</div>
```

### Video

Add `mb-3` to the wrapper div if content follows.

```html
<div class="text-center mb-3">
  <video controls loop poster="/assets/YYYY-MM-DD-name.png" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="/assets/YYYY-MM-DD-name.mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

### YouTube Embed

Use the nocookie domain. The caption is a `<p class="figure-caption">` with inline Markdown (MDX reprocesses it).

```html
<div class="text-center">
  <div class="ratio ratio-16x9 mx-auto mb-2" style="max-width: 720px;">
    <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID"></iframe>
  </div>
  <p class="figure-caption">[Video Title](https://www.youtube.com/watch?v=VIDEO_ID) by Author</p>
</div>
```

### Keyboard Shortcuts

```html
<kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd></kbd>
```
