# Market.Watch

Independent live market dashboards, 11 free investing calculators and plain-English investing education. A static site built for **GitHub Pages (free plan, `main` branch, root)**.

## Features

- Live markets dashboard (TradingView widgets): advanced chart with symbol search, heatmaps, movers, forex, commodities, bonds, ETFs, news, technical ratings
- Multi-market screener, economic calendar, private watchlist (localStorage)
- 11 client-side calculators with instant results
- 10 in-depth guides, 126-term searchable glossary, video library
- Lead generation: 3-step qualifying funnel, exit-intent modal, inline and sidebar capture, mobile sticky CTA
- Monetisation: Google AdSense (Auto ads), donations/pledges, contests, sponsorships, careers
- Compliance: privacy, terms, disclaimer and trademark notice, cookie policy and consent banner, `ads.txt`
- SEO: unique metadata, canonical URLs, Open Graph, JSON-LD, sitemap, robots

## Structure

```
index.html, markets.html, screener.html, calendar.html, tools.html, watchlist.html
learn.html, learn/*.html, glossary.html, videos.html
leads.html, support.html, contests.html, careers.html, advertise.html
about.html, contact.html, privacy.html, terms.html, disclaimer.html, cookies.html, 404.html
assets/css/style.css   design system (dark + light)
assets/js/site.js      layout, widgets, forms, consent, lead capture
assets/js/tools.js     calculators
ads.txt, robots.txt, sitemap.xml, site.webmanifest
_docs/BUILD-PROMPT.md  phase-wise build prompt and benchmark (not published)
```

## Deploy

1. Settings → Pages → Build and deployment → Source: **Deploy from a branch** → Branch: **main** / **(root)** → Save.
2. Custom domain: enter `market.watch`, then point DNS: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and `AAAA` equivalents), or a `CNAME` for `www` to `webworksa1.github.io`. Tick **Enforce HTTPS**.
3. Forms: the first submission triggers a one-time activation email from the form relay to the owner inbox. Click it once and all forms go live.

## Adding a guide

Copy any file in `learn/`, update the title, description, canonical URL and content, then add a card to `learn.html` and a URL to `sitemap.xml`.

## Legal

Market.Watch is not affiliated with MarketWatch, Dow Jones & Company, Inc. or News Corp. Market data © TradingView and its data providers. Original content © Market.Watch.
