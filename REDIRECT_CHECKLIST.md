# pages.dev -> AstroInsightTools.com Redirect Checklist

Use this checklist before and after enabling redirects to keep SEO and AdSense review stable.

## 1) DNS and SSL
- [ ] `astroinsighttools.com` and `www.astroinsighttools.com` resolve correctly.
- [ ] TLS certificate is valid on both hostnames.

## 2) Redirect rules
- [ ] `https://astroinsighttools.pages.dev/*` returns `301` to `https://astroinsighttools.com/*`.
- [ ] `http://astroinsighttools.com/*` returns `301` to `https://astroinsighttools.com/*`.
- [ ] `https://www.astroinsighttools.com/*` returns `301` to `https://astroinsighttools.com/*` (or your chosen canonical).
- [ ] No redirect chains (single hop to final canonical URL).

## 3) Canonical + sitemap consistency
- [ ] All pages use canonical URLs on `https://astroinsighttools.com`.
- [ ] `sitemap.xml` only contains canonical `.com` URLs.
- [ ] `robots.txt` references the canonical sitemap URL.

## 4) Search Console setup
- [ ] Add and verify `https://astroinsighttools.com` property in Google Search Console.
- [ ] Submit `https://astroinsighttools.com/sitemap.xml`.
- [ ] Use URL Inspection on key pages (`/`, `/tools/`, `/articles/`, privacy/terms/disclaimer).

## 5) AdSense readiness checks
- [ ] Submit only the canonical `.com` domain in AdSense.
- [ ] Ensure policy pages are accessible from footer on all templates.
- [ ] Confirm ads load only on canonical domain after redirect.

## 6) Post-migration monitoring (7-14 days)
- [ ] Check crawl/index coverage daily for spikes in excluded pages.
- [ ] Track 404s and add redirects for missed paths.
- [ ] Compare organic clicks/impressions before and after migration.
