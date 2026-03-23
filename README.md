# MetaRemover

Static Astro site for an image-only metadata remover designed to rank for privacy-focused EXIF search terms and deploy on GitHub Pages.

## What is included

- Astro + static export
- Browser-side image metadata remover for `JPG`, `PNG`, and `WebP`
- Launch-ready SEO pages
- Sitemap and robots configuration
- GitHub Pages workflow
- Page map in [`docs/page-map.md`](./docs/page-map.md)

## Site structure

```text
src/
  components/
    FaqList.astro
    Footer.astro
    Header.astro
    MetadataRemover.astro
    PageHero.astro
  data/
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    about.astro
    faq.astro
    how-to-remove-location-from-photos.astro
    privacy.astro
    remove-exif-from-jpg.astro
    remove-exif-from-png.astro
    remove-exif-from-webp.astro
    what-is-exif-data.astro
    why-remove-photo-metadata.astro
  styles/
    global.css
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Deploy to GitHub Pages

1. Push this project to GitHub.
2. Use a repository named `metaremover.github.io` if you want the site on the root subdomain `https://metaremover.github.io/`.
3. In GitHub, set Pages to deploy from GitHub Actions.
4. Push to `main` and the workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) will publish the site.

## Before launch

- Replace the site URL in [`astro.config.mjs`](./astro.config.mjs) if your GitHub username or org is different.
- Replace any branding copy you want to personalize.
- Add Google Search Console and analytics.
- Submit the sitemap after the first deployment.
- Use the local checklist in [`docs/local-launch-checklist.md`](./docs/local-launch-checklist.md) before publishing.
