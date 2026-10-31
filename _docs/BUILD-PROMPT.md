# Market.Watch: Phase-wise Build Prompt

A reusable, phase-by-phase prompt for building (or rebuilding and extending) Market.Watch, a modern, interactive, responsive, AdSense-monetised market dashboard and investor-education site hosted free on GitHub Pages.

> Folder `_docs/` is ignored by GitHub Pages (Jekyll skips underscore folders), so this file is not published on the live site.

---

## Phase 0: Constraints (paste at the top of every phase)

- **Domain / brand:** Market.Watch (market.watch). Original logo, palette and layout.
- **Trademark:** never use "MarketWatch" as a brand, logo or styling. Footer and `/disclaimer.html#trademarks` must state non-affiliation with MarketWatch, Dow Jones & Company and News Corp.
- **Hosting:** static HTML/CSS/vanilla JS only. Must run on GitHub Pages free plan, `main` branch, root folder. No server code, no build step required.
- **AdSense:** publisher `ca-pub-6620975821265271`. Put this exact tag in `<head>` of every indexable page:
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6620975821265271" crossorigin="anonymous"></script>`
  plus `<meta name="google-adsense-account" content="ca-pub-6620975821265271">` and a root `ads.txt`.
- **Top bar on every page:** "Contact, if you are interested in this website / domain name / Sponsorship / Advertisement / Partnership" linking to the owner's external contact page.
- **Single inbox:** every form posts to one owner email. The address and the external contact URL must never appear in visible text, `mailto:` links or plain source. Store them encoded and decode only at click/submit time.
- **Content policy:** original, substantive, educational. Not financial advice. No fabricated traffic numbers, testimonials or reviews.

## Phase 1: Research and information architecture

Audit the 35-site benchmark below. For each, note: navigation model, data widgets, tools, lead magnets, newsletter placement, monetisation, trust and legal pages, mobile UX. Output a feature matrix and a sitemap.

Resulting sitemap:
`/` · `/markets` · `/screener` · `/calendar` · `/tools` · `/watchlist` · `/learn` + 10 guides · `/glossary` · `/videos` · `/leads` · `/contests` · `/support` · `/careers` · `/advertise` · `/about` · `/contact` · `/privacy` · `/terms` · `/disclaimer` · `/cookies` · `/404`

## Phase 2: Design system

Dark-first fintech theme with light mode toggle (persisted). Cyan-to-emerald gradient brand, system font stack, 16px radius cards, sticky glass header, gradient top bar, mobile burger menu, sticky mobile CTA bar, reveal-on-scroll, reduced-motion support, WCAG-friendly contrast, skip link, visible focus states. One stylesheet: `assets/css/style.css`.

## Phase 3: Site engine (`assets/js/site.js`)

Inject shared header/top bar/ticker tape/footer so pages stay lean. Include:
- TradingView widget loader with lazy loading (IntersectionObserver) and theme sync.
- Tabs, symbol search and quick-pick buttons for the advanced chart.
- Universal form handler (AJAX to form relay, honeypot, multi-step support with progress bar and per-step validation).
- Cookie consent banner, exit-intent and timed lead modal (frequency-capped, suppressed on conversion pages).
- YouTube click-to-load facades (privacy-enhanced domain).
- Watchlist (localStorage), glossary search, guide search and category filter.

## Phase 4: Live market pages

- **Home:** hero + live S&P snapshot, market overview (indices/futures/bonds/forex/crypto), US movers, heatmaps (S&P 500, crypto, ETF), tools grid, lead band, latest guides, featured video, economic calendar preview, contest and support teasers, FAQ.
- **Markets:** advanced chart with symbol search, asset-class tabs (stocks, crypto, forex, commodities, bonds, ETFs), news timeline, technical rating, usage guide.
- **Screener:** US, crypto, forex, Canada, India, UK tabs + five example screens.
- **Calendar:** live economic calendar + table of the releases that matter + earnings-season explainer.
- **Watchlist:** add/remove symbols, quick-add chips, live mini charts.

## Phase 5: Tools

Eleven client-side calculators with live results: compound growth (with SVG chart), position size, risk/reward, average cost, FIRE number, P/E fair value, inflation, Rule of 72, dividend income, profit/loss, loan payment. Plus live forex cross rates.

## Phase 6: Content (AdSense approval engine)

10 original guides (700-1,000+ words each, Article schema, internal links to tools): stock market basics, ETFs/index funds, chart reading, valuation, compounding/DCA, economic indicators, risk management, bonds/yield curve, crypto basics, diversified portfolio. 120+ term glossary. Video library with one verified embed plus topic playlists.

## Phase 7: Monetisation and conversion

- **Lead generation (`/leads`):** 3-step qualifying form (goal → experience/portfolio/markets → contact + consent + optional partner opt-in). Repeated capture: home band, footer, article sidebars, exit-intent modal, mobile sticky CTA.
- **Donations (`/support`):** 4 tiers, transparent allocation bars (operations, hiring, promotions/marketing, contests/prizes, new tools), pledge form with amount, frequency, purpose and payment method; owner replies with a secure payment link.
- **Contests (`/contests`):** monthly Forecast Challenge with countdown, entry form, scoring method and official rules (no purchase necessary, 18+, skill-testing question where required).
- **Hiring (`/careers`):** role cards + application form.
- **Advertising (`/advertise`):** formats, packages, media-kit inquiry form, domain acquisition CTA.
- **AdSense:** Auto ads via the head tag; no manual empty ad slots before approval.

## Phase 8: Compliance, SEO and launch

- Privacy (AdSense cookie language, opt-out links, GDPR/CCPA/PIPEDA/Law 25), Terms, Disclaimer & Trademarks, Cookie policy.
- Unique titles/descriptions, canonical URLs, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, `ads.txt`, `site.webmanifest`, custom 404.
- QA: headless-browser crawl of every page for console errors, broken links, mobile layout, and a source scan proving the owner email and contact domain never appear in plain text.
- Deploy: push to `main`, enable Pages (Deploy from branch → main → /root), then add the custom domain and enforce HTTPS.

## Phase 9: Growth roadmap (expandable)

Portfolio tracker, earnings calendar, community leaderboard, translated guides, course tracks, newsletter archive pages, programmatic symbol pages, more international markets.

---

## 35-site benchmark set (features studied)

| # | Site | Patterns adopted |
|---|------|------------------|
| 1 | Yahoo Finance | Market overview tabs, watchlists, quote pages |
| 2 | Google Finance | Clean minimal quote cards, compare |
| 3 | Bloomberg | Ticker tape, dense market data hub |
| 4 | Reuters Markets | Global indices/bonds/FX grouping |
| 5 | CNBC | Pre-market movers, video integration |
| 6 | Financial Times Markets | Market data section, editorial standards page |
| 7 | Wall Street Journal Markets | Data center tables, economic calendar |
| 8 | Barron's | Weekly brief newsletter model |
| 9 | Investing.com | Economic calendar, cross rates, technical ratings |
| 10 | TradingView | Advanced chart, heatmaps, screener (embedded) |
| 11 | Finviz | Heatmap-first homepage, screener presets |
| 12 | Seeking Alpha | Valuation metrics, community contests |
| 13 | Morningstar | Fund analysis, fee emphasis, portfolio X-ray idea |
| 14 | The Motley Fool | Plain-English education, lead magnets |
| 15 | Investopedia | Glossary/term pages, calculators, SEO structure |
| 16 | Zacks | Ranked screens, email capture |
| 17 | Benzinga | Movers lists, news timeline |
| 18 | MarketBeat | Newsletter-driven lead generation |
| 19 | StockAnalysis.com | Fast static pages, clean tables |
| 20 | Macrotrends | Long-term chart context |
| 21 | Koyfin | Dashboard layout, dark theme |
| 22 | Stocktwits | Community/social engagement |
| 23 | Kiplinger | Personal-finance calculators, retirement content |
| 24 | Nasdaq.com | Earnings and dividend calendars |
| 25 | CoinMarketCap | Crypto heatmap, coin tables |
| 26 | CoinGecko | Crypto education, stablecoin explainers |
| 27 | Forex Factory | Calendar impact ratings, forum |
| 28 | Barchart | Commodities/futures overview |
| 29 | Simply Wall St | Visual valuation, fair-value framing |
| 30 | Business Insider Markets | Commodity and currency snapshots |
| 31 | Fortune / Forbes Money | Rankings, personal-finance guides |
| 32 | NerdWallet | Calculators + conversion-focused CTAs |
| 33 | Bankrate | Rate tables, trust and methodology pages |
| 34 | Moneycontrol | Indian markets, multi-market tabs |
| 35 | Globe and Mail Investing | Canadian market coverage, TSX screener |

All patterns were re-implemented with original design, code and copy. No third-party text, logos or trade dress were copied.
