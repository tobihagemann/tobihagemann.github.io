# tobihagemann.github.io

Personal portfolio and blog website built with [Astro](https://astro.build/) and hosted on GitHub Pages.

## Prerequisites

- Node.js (version 20 or higher)
- pnpm (`npm install -g pnpm`)

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open http://localhost:4321 in your browser

## Build

```bash
pnpm build
```

The static site is generated into `dist/`.

## Deployment

Push changes to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and deploys it to GitHub Pages.
