# Embedding the Smartboard on Blogger (library method)

This method loads the smartboard's **CSS and JS once as CDN libraries** in your
Blogger theme's `<head>`, then lets you drop the board into **any post or page**
with a one-line HTML chunk — no iframe, no direct link to a hosted page.

You need two files from this project hosted on GitHub (served free via jsDelivr):

```
https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.css
https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.js
```

Replace **USER** with your GitHub username and **REPO** with your repo name.
(See the main README for the 3-step GitHub upload.)

---

## Step 1 — Add the libraries to your theme `<head>` (once)

Blogger → **Theme** → the down-arrow next to *Customize* → **Edit HTML**.
Find `</head>` and paste this just **above** it, then **Save**:

```html
<!-- Teaching Smartboard libraries -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.css"/>
<script src="https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.js" defer="defer"></script>
```

> Blogger themes are XHTML, so use the self-closing forms shown above
> (`...css"/>` and `defer="defer"`). Paste it once; it now works on every post
> and page of your blog.

## Step 2 — Drop the board into a post or page

Open a post or page, switch the editor to **HTML view** (the `<>` / *HTML*
toggle), and paste this where you want the board to appear:

```html
<div class="smartboard-embed"></div>
```

Switch back to Compose, then **Preview** or **Publish**. That's it — the board
builds itself inside that `<div>`.

**Sizing is responsive by default.** With no `data-height`, the board's height
follows the width of your Blogger post column (16:10 by default), so it adapts to
any theme width and to phones automatically. You can tune it:

```html
<!-- Responsive, 16:9 instead of the default 16:10 -->
<div class="smartboard-embed" data-aspect="16:9"></div>

<!-- Responsive, but never shorter than 480px -->
<div class="smartboard-embed" data-min-height="480"></div>

<!-- Fixed height (old behaviour), a number is treated as pixels -->
<div class="smartboard-embed" data-height="640"></div>
```

| Attribute | Meaning |
|-----------|---------|
| *(none)* | Responsive height = width ÷ 1.6 (16:10), clamped 360px–~86% of screen |
| `data-aspect="16:9"` or `data-aspect="1.6"` | Responsive with your width-to-height ratio |
| `data-min-height` / `data-max-height` | Clamp limits in px for responsive mode |
| `data-height="640"` | Fixed height (px or any CSS length / `vh`) |

You can place more than one board on different pages; one board per page is
recommended.

---

## Don't want to (or can't) edit the theme?

The JavaScript auto-loads its own CSS, so you can skip Step 1 entirely and put
**everything inside the post** instead. Paste this single block in HTML view:

```html
<div class="smartboard-embed" data-height="640"></div>
<script src="https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.js" defer="defer"></script>
```

The board appears and the styles load automatically. (Putting the library in the
theme `<head>` is still cleaner if you'll use the board on several pages, because
it loads once and is cached.)

---

## Sidebar / gadget placement

To put the board in a sidebar, header, or footer instead of a post:
Blogger → **Layout** → **Add a Gadget** → **HTML/JavaScript**, then paste the
same `<div class="smartboard-embed" ...></div>` chunk (with the libraries either
in the theme head or included in the gadget as shown above).

---

## Notes

- **Self-contained & private.** Everything runs in the visitor's browser. No
  server, no accounts, nothing uploaded. Files a teacher imports stay on their
  device.
- **Heavy features load on demand.** PDF, PowerPoint, and PDF-export libraries
  are fetched from their CDNs only the first time you use those buttons, so the
  page stays light.
- **Keyboard shortcuts** (P/H/E/S/T/V/L/O, Ctrl+Z, etc.) only act after you
  click the board, so they never interfere with typing elsewhere on the page.
- **Web lookup panel.** Opening it loads Google (via Google's embeddable
  `webhp?igu=1` page) plus quick links (Google, a privacy search, Wikipedia,
  dictionary, Wolfram, Desmos, periodic table, maps). Type any URL or search
  term in the bar. **Browsers forbid many sites from loading inside any embedded
  frame** (Google's normal page, YouTube watch pages, banking, etc.) — a
  security rule no website can bypass from the page side. When a site refuses,
  use the **Open in new tab ↗** button in the panel header. If Google's
  embeddable page is ever blocked on your network, the privacy-search and
  Wikipedia links frame reliably.
- **Fullscreen** expands just the board.
- **PowerPoint** import is best-effort; for reliable results convert slides to
  PDF first and use the PDF import.
- **Cache:** jsDelivr caches `@main` for up to 7 days. For instant updates while
  testing add `?v=2` to the URLs; for production, tag a release (e.g. `@v1.0`).

---

## Quick reference

| Where | What to paste |
|-------|----------------|
| Theme `<head>` (once) | the `<link>` + `<script>` library tags |
| Post / page (HTML view) | `<div class="smartboard-embed"></div>` (responsive) |
| No theme access | the `<div>` **plus** the `<script>` tag, together in the post |
