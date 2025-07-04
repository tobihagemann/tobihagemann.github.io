# Repository Overview

This is a personal portfolio/blog website (tobihagemann.github.io) built with Jekyll, a Ruby-based static site generator. The site is hosted on GitHub Pages and uses a custom Bootstrap 4 implementation.

# Technology Stack

- **Static Site Generator**: Jekyll (via github-pages gem)
- **CSS Framework**: Bootstrap 4 with custom SCSS
- **Templating**: Liquid
- **Content**: Markdown with YAML front matter
- **Icons**: Font Awesome
- **Hosting**: GitHub Pages with custom domain (tobiha.de)

# Development Commands

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# The site will be available at http://localhost:4000
```

# Architecture & Structure

## Content Organization
- **Blog Posts**: Located in `_posts/` directory, written in Markdown with Jekyll front matter
- **Projects**: Displayed on `projects.html`, data likely embedded in the file
- **Pages**: Root level HTML/Markdown files (index.html, projects.html, impressum.md)

## Styling System
- Bootstrap 4 source files are imported via `_sass/bootstrap/`
- Custom styles are in `css/main.scss` which imports Bootstrap components selectively
- SCSS compilation is handled automatically by Jekyll
- Output CSS is compressed in production

## Layout System
- `_layouts/default.html`: Base template with navigation and footer
- `_layouts/post.html`: Blog post template
- `_layouts/page.html`: Generic page template
- `_includes/`: Reusable components (nav.html, footer.html, icon.html)

## Key Configuration
- `_config.yml`: Jekyll configuration including site metadata, plugins, and build settings
- `_data/menu.yml`: Navigation menu structure
- `Gemfile`: Ruby dependencies (primarily github-pages gem)

# Important Notes

- This is a static site - no backend or database
- GitHub Pages handles deployment automatically on push to master branch
- Blog pagination is set to 10 posts per page
- The site uses Jekyll's built-in Sass processor
- No test suite or build scripts beyond Jekyll's defaults
- Social media links and project URLs are hardcoded in templates
