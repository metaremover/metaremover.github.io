# Local Launch Checklist

Use this checklist before you upload the site to GitHub.

## 1. Run the site locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## 2. Review the key pages

- Homepage tool flow
- JPG landing page
- PNG landing page
- WebP landing page
- FAQ, About, and Privacy pages
- Article pages and internal links

## 3. Test the tool itself

- Drop a `JPG` image and confirm metadata appears
- Click `Remove metadata`
- Download the cleaned file
- Repeat with `PNG`
- Repeat with `WebP`
- Test on mobile width in browser dev tools

## 4. Check SEO basics locally

- Every page has a unique title
- Every page has a unique meta description
- Canonical tag is present
- Open Graph image loads
- Internal links work
- `robots.txt` is available
- `sitemap-index.xml` is created after build

## 5. Production build test

```bash
npm run build
npm run preview
```

Open the preview URL and re-check the homepage plus one page from each content type.

## 6. Before uploading

- Confirm the final site URL is `https://metaremover.github.io`
- Make sure the GitHub repo name will be `metaremover.github.io`
- Add analytics only if you want them
- Keep the first launch simple and clean
