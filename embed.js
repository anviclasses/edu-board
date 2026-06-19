/*!
 * Smartboard Embed Loader
 * ------------------------------------------------------------------
 * Drop the smartboard into any web page (Blogger, WordPress, plain
 * HTML, etc.) with a single <script> tag. No build step required.
 *
 * Usage:
 *   <script
 *     src="https://cdn.jsdelivr.net/gh/USER/REPO@main/embed.js"
 *     data-smartboard
 *     data-height="640"></script>
 *
 * Optional data-* attributes on the script tag:
 *   data-height="640"        Iframe height in px (default 640). Use
 *                            data-height="100vh" for full viewport.
 *   data-width="100%"        Iframe width  (default 100%).
 *   data-src="...html"       Override the smartboard.html URL. By
 *                            default it is resolved relative to this
 *                            script's own location, so the loader and
 *                            the app always stay in version lock-step.
 *   data-border="1"          Show a thin rounded border (default off).
 *   data-id="myBoard"        Custom id for the generated iframe.
 * ------------------------------------------------------------------
 */
(function () {
  "use strict";

  // Identify the <script> element that loaded this file.
  var self =
    document.currentScript ||
    (function () {
      var s = document.getElementsByTagName("script");
      return s[s.length - 1];
    })();

  if (!self) return;

  // Resolve the smartboard.html URL relative to this script's src,
  // unless the author explicitly overrides it.
  function resolveAppUrl() {
    var override = self.getAttribute("data-src");
    if (override) return override;
    var src = self.src || "";
    var dir = src.replace(/[^\/]*$/, ""); // strip filename, keep dir
    return dir + "smartboard.html";
  }

  var height = self.getAttribute("data-height") || "640";
  var width = self.getAttribute("data-width") || "100%";
  var showBorder = self.hasAttribute("data-border");
  var iframeId =
    self.getAttribute("data-id") ||
    "smartboard-" + Math.random().toString(36).slice(2, 8);

  // Allow bare numbers ("640") or explicit units ("100vh", "80%").
  if (/^\d+$/.test(height)) height = height + "px";
  if (/^\d+$/.test(width)) width = width + "px";

  var iframe = document.createElement("iframe");
  iframe.id = iframeId;
  iframe.src = resolveAppUrl();
  iframe.title = "Teaching Smartboard";
  iframe.loading = "lazy";
  iframe.setAttribute(
    "allow",
    "fullscreen; clipboard-read; clipboard-write; camera; microphone"
  );
  iframe.setAttribute("allowfullscreen", "");

  iframe.style.cssText = [
    "display:block",
    "width:" + width,
    "height:" + height,
    "max-width:100%",
    "border:" + (showBorder ? "1px solid #2a2d33" : "0"),
    "border-radius:" + (showBorder ? "12px" : "0"),
    "background:#16181d",
    "box-shadow:" + (showBorder ? "0 6px 24px rgba(0,0,0,.18)" : "none")
  ].join(";");

  // Insert the iframe right where the script tag sits.
  if (self.parentNode) {
    self.parentNode.insertBefore(iframe, self.nextSibling);
  } else {
    document.body.appendChild(iframe);
  }
})();
