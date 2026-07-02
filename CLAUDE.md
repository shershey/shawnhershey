# shawnhershey.com

Personal site for Shawn Hershey — swing & blues dancer, teacher, and musician.
Built with Astro, extended using Claude Code.

## Stack & deploy

- **Framework:** Astro (static, no adapter). `npm run build` → `dist`.
- **Hosting:** Cloudflare Pages/Workers — **native git build on push to `main`** (no build config beyond the default). There is intentionally **no deploy GitHub Action** — a `wrangler deploy` workflow used to exist but was wrong for a static site and was removed. Just push to `main`; Cloudflare builds and deploys.
- To watch a deploy: Cloudflare dashboard → Workers & Pages → shawnhershey → Deployments.

## Aesthetic — preserve this

Warm, classic, **vintage 1930s–40s swing** feel. Not trendy, not a generic modern/WordPress look.

- Dark header `#1e1a16`, gold accent `#e8c97e`, warm cream background `#f7f2ea`, brown links `#7a4f1e`.
- Fonts: **Playfair Display** (headings) + **Source Sans 3** (body).
- Defined in `src/layouts/Layout.astro` (shared header/nav/footer + global styles).

> An old pre-2026 WordPress version of this site (the generic "Twenty Twelve" theme) is
> archived on the Wayback Machine: https://web.archive.org/web/20190520085313/http://shawnhershey.com/
> Reviving that look was evaluated and **deliberately rejected** — keep the current vintage design.

## Pages / content

- `src/pages/index.astro` → renders `src/content/home.md` (editable markdown homepage).
- `src/pages/bio.astro` → Bios & Photos (blues + balboa dance bios, headshot, Dropbox gallery link).
- `src/pages/videos.astro` → competition videos; edit `src/data/videos.js` (categories; first entry per category is featured; paste any YouTube/Instagram/Facebook URL).
- `src/pages/where.astro` → "Where's Shawn" travel schedule.
  - Reads a **public Google Sheet as CSV client-side** (gviz endpoint, CORS-enabled for the domain) so edits appear **without a redeploy**.
  - Rendered as **vintage travel tickets** with a "Right now" hero; each stop's end date is inferred from the next stop.
  - **Gotcha:** its `<style>` is `is:global` namespaced under `.wsx` — because the tickets are injected at runtime by JS, Astro's default scoped styles would NOT apply to them.

## Conventions

- **Mobile-first**; keep it fast and simple.
- Footer has Instagram + Facebook icon links (site-wide, in `Layout.astro`).
- Sheet-driven content (the Where page) stays client-side so non-technical edits go live instantly.
