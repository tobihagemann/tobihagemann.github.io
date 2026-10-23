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

The first content element, after the front matter and any component imports, is always a styled lead paragraph:

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
- **Plain words**: Prefer plain words over metaphors and wordplay that need explaining, in headings too
- **The author's voice**: Attribute to the author only feelings, opinions, and claims they have stated in their posts, talks, or notes, or in the conversation. When the author supplies wording, keep it and fix only grammar and typos

## Facts

Describe a project's current status (released, live, on the App Store) from its entry in `src/data/projects.ts` and its live site. Use git history for numbers and timelines; a commit message records an intermediate step, not where the project ended up. For posts that report the author's activity (contributions, commits, a year in review), follow [references/activity-stats.md](references/activity-stats.md).

## Links

Use either inline links or reference-style links collected at the bottom of the file. External links get `target="_blank" rel="noopener"` added automatically by `rehype-external-links`, so do not add `{:target}`/`{:rel}` attributes (those were Jekyll/kramdown-only).

```markdown
Check out [this tool](https://example.com/) or [this one][tool-name].

[tool-name]: https://example.com/ "Tool Name"
```

Internal links (to other blog posts) use the permalink path, e.g. `[The Shit Is Hot](/2018/03/26/the-shit-is-hot/)`.

## Assets

Asset files go in `public/assets/` with the naming pattern `YYYY-MM-DD-description.{png,jpg,webp,svg,mp4}`. The date prefix matches the post date. Reference them with a root-absolute path: `/assets/YYYY-MM-DD-description.png` (no Jekyll `prepend: site.baseurl` filter).

For screenshots taken on a Retina display (@2x), set the displayed `maxWidth` to half the actual pixel width.

Capture product screenshots fresh from the live site or app rather than reusing older assets from slides or past posts, which drift from the current design:

- Use light mode and a 2x device scale (`agent-browser set media light`, `agent-browser set viewport 1280 800 2`)
- Keep one aspect ratio across screenshots shown together, e.g. a 1280x800 viewport for 16:10 tiles
- Wait for intro animations to settle before capturing
- When an empty state looks bare, seed demo data through the app's own storage or import, then clear it afterwards
- For an app behind a login, open a headed browser (`agent-browser --session <name> --headed open <url>`), let the user log in and arrange the scene, and capture when they say so
- Convert to `.webp` at about 1200px wide

## Post Components

Non-markdown blocks are the Astro components in `src/components/`, imported at the top of the `.mdx` file after the front matter. Each wraps itself in `not-prose`, and its caption slot still processes Markdown.

```mdx
import Figure from '../../components/Figure.astro';
import Embed from '../../components/Embed.astro';
import Video from '../../components/Video.astro';
```

### Figure

`src` and `alt` are required. `maxWidth` takes a number (px) or a string such as `"100%"`. `rounded` defaults to `true`; set `rounded={false}` for SVGs and diagrams. `float` floats the figure right on wider screens, and `href` links the image. The slot is the caption. For an uncaptioned image, self-close the tag, since MDX rejects an unclosed one.

```mdx
<Figure src="/assets/YYYY-MM-DD-name.png" alt="Alt text" maxWidth="835">Caption with [a link](https://example.com/)</Figure>

<Figure src="/assets/YYYY-MM-DD-diagram.svg" alt="Alt text" maxWidth="100%" rounded={false}>Caption text</Figure>

<Figure src="/assets/YYYY-MM-DD-name.png" alt="Alt text" maxWidth="600" />
```

### Embed (YouTube, Vimeo)

Use the nocookie domain for YouTube. The slot is the caption.

```mdx
<Embed src="https://www.youtube-nocookie.com/embed/VIDEO_ID" maxWidth="720">[Video Title](https://www.youtube.com/watch?v=VIDEO_ID) by Author</Embed>
```

### Video (self-hosted mp4)

```mdx
<Video src="/assets/YYYY-MM-DD-name.mp4" poster="/assets/YYYY-MM-DD-name.png" maxWidth="800" />
```

### Tweet and Description Lists

For an embedded tweet card, follow the `<Tweet>` usage in `src/content/blog/2018-03-26-the-shit-is-hot.mdx`. For the year-review date/event lists, follow `<DescriptionList>`/`<DescriptionEntry term="...">` in `src/content/blog/2017-12-29-reviewing-2017.mdx`.

## Keyboard Shortcuts

```html
<kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd></kbd>
```
