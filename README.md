# TVN Body Recovery

Static website for TVN Body Recovery.

## Local Preview

Run a static server from the parent folder so the `/tvn-body-recovery/` base path works:

```bash
python -m http.server 8787 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8787/tvn-body-recovery/
```

## Shared Blocks

`index.html` is the source of truth for the shared ambient gallery, header, and footer. After changing those shared blocks, run:

```bash
python scripts/sync-shared.py
```

Site-level values live in `site.config.json`. If the production domain changes, update `productionUrl`, then update `robots.txt`, `sitemap.xml`, canonical URLs, and JSON-LD URLs to match.

## Assets

Display images use optimized `.webp` files. Keep the original PNGs as source assets and social fallbacks.
