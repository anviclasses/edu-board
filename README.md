# 🎓 Teaching Smartboard

A professional, **100% browser-based digital smartboard** for teaching — no
server, no install, no account. One self-contained HTML file you can host on
GitHub, serve worldwide through the free **jsDelivr CDN**, and embed in a
Blogger post, a WordPress page, or any website with a single line of code.

Built for real classrooms: pressure-sensitive pen input, multi-page boards,
PDF / image / PowerPoint import, a built-in web-lookup panel, and teaching
tools like a laser pointer, spotlight, and screen shade.

---

## ✨ Features

**Drawing & ink**
- Pressure-sensitive **pen** (works with stylus, Apple Pencil, S-Pen, graphics
  tablets) — line weight responds to how hard you press.
- **Highlighter / marker** with adjustable opacity and multiply blending.
- **Object eraser** (removes whole strokes, not pixel smudges).
- **Shapes**: line, arrow, rectangle, ellipse.
- **Text** boxes — double-click any text to edit it.
- **Select / move / resize** — reposition or scale strokes and images, delete
  with the `Delete` key.
- Full **colour palette** + custom colour picker, adjustable stroke size.

**Teaching tools**
- 🔴 **Laser pointer** with a fading trail.
- 🔦 **Spotlight** — dims the board and reveals a movable circle (scroll to
  resize) to focus attention.
- 🎬 **Screen shade** — a draggable curtain to reveal content gradually.
- ⏱️ **Timer** for activities and exams.

**Pages & canvas**
- Unlimited **pages** with thumbnails-free quick navigation (next / prev / add).
- **Backgrounds**: plain, grid, lined (ruled), dotted, and blackboard.
- **Infinite pan & zoom** (pinch on touch, `Ctrl`+scroll on desktop, or the
  zoom buttons).

**Import & media**
- 📄 **PDF import** — every page becomes a board page you can annotate.
- 🖼️ **Image overlay** — drop pictures onto the board as movable, resizable
  objects, or set them as a page background.
- 📊 **PowerPoint (PPT/PPTX)** import — best-effort slide rendering
  (see the reliability note below).

**Quick web access**
- 🌐 Built-in **web-lookup panel** — a draggable mini-browser with one-tap
  shortcuts to Wikipedia, a dictionary, Wolfram Alpha, Desmos graphing, an
  interactive periodic table, and maps. Look things up without leaving the
  board.

**Save, export & share**
- 💾 **Save / open** boards as a portable `.smartboard` file (JSON).
- 🖼️ **Export PNG** (current page) or **export PDF** (all pages).
- ⛶ **Fullscreen** mode for distraction-free teaching.

**Designed for every device**
- Works on **laptops, tablets, and smartphones**.
- **Touch gestures**: one finger draws, two fingers pan and pinch-zoom.
- Large touch targets and a responsive toolbar that adapts to small screens.

**Privacy**
- Everything runs **in your browser**. No data is uploaded, no tracking, no
  server. Files you import never leave the device.

---

## 📦 Files in this repo

| File             | Purpose                                                        |
|------------------|----------------------------------------------------------------|
| `smartboard.html`| The entire application — open it directly or embed it.         |
| `embed.js`       | One-line loader that drops the board into any page as an iframe.|
| `README.md`      | This file.                                                     |

Heavy libraries (PDF.js, jsPDF, PPTXjs) are **lazy-loaded from public CDNs only
when you actually use the matching feature**, so the board opens instantly.

---

## 🚀 Quick start (try it now)

1. Download `smartboard.html`.
2. Double-click it. It opens in your browser and works offline (except PDF/PPT
   import and the web panel, which need internet to load their libraries).

That's the whole app. Everything below is about putting it online and embedding
it.

---

## 🛠️ Hosting on GitHub + jsDelivr

### 1. Create the repository
1. Sign in to [github.com](https://github.com) and click **New repository**.
2. Name it, e.g. `smartboard`. Make it **Public**. Click **Create**.

### 2. Upload the files
1. On the repo page click **Add file → Upload files**.
2. Drag in `smartboard.html` and `embed.js`.
3. Click **Commit changes**.

### 3. Your jsDelivr CDN links
jsDelivr serves any public GitHub file automatically — no sign-up. Replace
`USER` with your GitHub username and `REPO` with your repository name:

```
https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.html
https://cdn.jsdelivr.net/gh/USER/REPO@main/embed.js
```

> **Tip — cache busting & stable versions.** `@main` always serves the latest
> commit but jsDelivr caches it for up to 7 days. For instant updates during
> testing, append a query string (`...smartboard.html?v=2`). For production,
> create a Git **tag/release** (e.g. `v1.0`) and use it in the URL — it's cached
> forever and never changes unexpectedly:
> ```
> https://cdn.jsdelivr.net/gh/USER/REPO@v1.0/smartboard.html
> ```
> To purge the cache for a file, visit `https://purge.jsdelivr.net/gh/USER/REPO@main/smartboard.html`.

---

## 🌍 Embedding the smartboard

### Method 1 — One-line loader (recommended for Blogger)

Paste this where you want the board to appear. It auto-sizes and stays in sync
with the app version:

```html
<script
  src="https://cdn.jsdelivr.net/gh/USER/REPO@main/embed.js"
  data-smartboard
  data-height="640"></script>
```

Optional attributes:

| Attribute      | Default | What it does                                  |
|----------------|---------|-----------------------------------------------|
| `data-height`  | `640`   | Height in px. Use `100vh` for full screen.    |
| `data-width`   | `100%`  | Width (px, %, or vw).                          |
| `data-border`  | *(off)* | Add it (no value) for a rounded bordered frame.|
| `data-src`     | auto    | Override the `smartboard.html` URL.            |
| `data-id`      | random  | Custom id for the generated iframe.            |

### Method 2 — Plain iframe (works anywhere)

```html
<iframe
  src="https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.html"
  style="width:100%;height:640px;border:0;border-radius:12px;"
  allow="fullscreen; clipboard-read; clipboard-write"
  allowfullscreen></iframe>
```

### Method 3 — Full-page board

Just link people straight to the hosted file:
```
https://cdn.jsdelivr.net/gh/USER/REPO@main/smartboard.html
```

---

## ✍️ Embedding in Blogger specifically

1. Open your post and switch the editor from **Compose** to **HTML view**
   (the `<>` pencil/HTML toggle in the toolbar).
2. Paste the **Method 1** script (or the **Method 2** iframe) where you want
   the board.
3. Switch back to **Compose**, then **Publish** or **Preview**.

> Blogger sometimes strips `<script>` tags inside post bodies depending on your
> template. If the one-liner doesn't appear, use the **Method 2 iframe**
> instead — iframes are always allowed. To put the board in a sidebar or
> footer, go to **Layout → Add a Gadget → HTML/JavaScript** and paste the same
> snippet there.

---

## 🎛️ Customising

- **More teaching space / less chrome:** press the fullscreen button (⛶) or
  embed with `data-height="100vh"`. Toolbars are deliberately compact and float
  over the board.
- **Default look:** the colour theme lives in the `:root` CSS variables near
  the top of `smartboard.html` (e.g. `--accent` for the highlight colour).
  Fork the repo and tweak them.
- **Web-panel shortcuts:** the quick-lookup chips are defined in the engine
  script — edit or add your own subject sites.
- **Programmatic control:** the embedded page exposes `window.Smartboard` with
  `open()` (file import dialog) and `addPage()`.

---

## ⌨️ Keyboard shortcuts

| Key | Action | Key | Action |
|-----|--------|-----|--------|
| `P` | Pen | `H` | Highlighter |
| `E` | Eraser | `S` | Shapes |
| `T` | Text | `V` | Select / move |
| `L` | Laser | `O` | Spotlight |
| `Ctrl/⌘ + Z` | Undo | `Ctrl/⌘ + Y` | Redo |
| `+` / `-` / `0` | Zoom in / out / reset | `← / →` | Prev / next page |
| `Delete` | Delete selected | | |

---

## ⚠️ Notes & known limits

- **PowerPoint import is best-effort.** PPT/PPTX is a complex format; the board
  renders slides client-side but fonts, animations, and exotic layouts may not
  survive. **For reliable results, export your slides to PDF first** (PowerPoint
  → *File → Export → PDF*, or Google Slides → *Download → PDF*) and use the rock-solid
  PDF import.
- **Some external sites refuse to be framed** in the web-lookup panel (they send
  an `X-Frame-Options` header). When that happens the panel offers an
  **"open in new tab"** link.
- Import and web features need an internet connection to fetch their libraries
  from the CDN; freehand drawing works offline.

---

## 🌐 Browser support

Modern Chrome, Edge, Firefox, and Safari on desktop, Android, and iPadOS/iOS.
Pen pressure requires a device + browser that report PointerEvent pressure
(most current stylus setups do).

---

## 📄 License

Released for free educational use. Fork it, adapt it, and use it in your
classroom. Attribution appreciated but not required.
