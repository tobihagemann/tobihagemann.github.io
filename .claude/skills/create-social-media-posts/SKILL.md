---
name: create-social-media-posts
description: This skill should be used when the user asks to "create social media posts", "write social media posts", "social media posts for this blog post", "share this blog post", or wants to draft posts for sharing a blog post on social media.
---

# Create Social Media Posts

Draft social media posts for sharing a blog post on X/Twitter, Mastodon, Facebook, and LinkedIn.

## Process

1. Read the blog post to understand its content and tone
2. Determine the blog post URL from the file name: `https://tobiha.de/YYYY/MM/DD/slug/`
3. Create a Markdown file named `social-media-YYYY-MM-DD.md` in the project root
4. Present the draft for review

## Output Format

The output file has a header with the blog post URL for reference, followed by sections for each platform separated by `---`:

```markdown
# Social Media Posts: Post Title

Blog post URL: https://tobiha.de/YYYY/MM/DD/slug/

---

## X/Twitter

...

---

## Mastodon

...

---

## Facebook

...

---

## LinkedIn

...
```

## Rules

- **One link per platform**: Only include the blog post URL, no additional links
- **No hashtags**: On any platform
- **No product name dropping**: Keep the focus on the topic, not specific tools or services
- **Same opener on all platforms**: Start every post with the same line, beginning with a relevant emoji (e.g., "🔊 New blog post: Post Title")
- **Casual tone**: Match the blog post's conversational, first-person style

## Platform-Specific Guidelines

### X/Twitter and Mastodon

Keep it short. Do not prefix the link with "New blog post:" or similar, because the OG card (title, description, image) already provides that context. The link appears as a rich card preview.

### Facebook and LinkedIn

Slightly longer format with more context. Include a brief summary of the problem and solution. The opener line ("🔊 New blog post: ...") goes at the top, followed by a paragraph of context, then the link at the end.

LinkedIn can be the longest and most detailed of the four.
