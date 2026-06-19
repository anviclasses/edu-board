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
<div class="smartboard-embed" data-height="640"></div>
```

Switch back to Compose, then **Preview** or **Publish**. That's it — the board
builds itself inside that `<div>`.

Change the height with `data-height` (a number is treated as pixels):

```html
<div class="smartboard-embed" data-height="720"></div>
```

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
| Post / page (HTML view) | `<div class="smartboard-embed" data-height="640"></div>` |
| No theme access | the `<div>` **plus** the `<script>` tag, together in the post |
