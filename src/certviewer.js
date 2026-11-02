// Certificate thumbnails plus an accessible lightbox (Esc closes, arrows move, focus stays inside).
export function mountCertViewer(root, certs, base) {
  const src = (c, thumb) => `${base}${c.file}${thumb ? "-thumb" : ""}.webp`;
  const label = (c) => [c.title, c.issuer, c.date].filter(Boolean).join(" · ");
  const grid = document.createElement("ul");
  grid.className = "cert-grid";
  certs.forEach((c, i) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cert-thumb";
    b.setAttribute("aria-label", `View certificate: ${c.title}`);
    b.innerHTML = `<img src="${src(c, true)}" alt="" loading="lazy" decoding="async" width="480" height="${c.file === "alc-badge" ? 270 : 371}"><span>${c.title}</span>`;
    b.addEventListener("click", () => open(i, b));
    li.append(b);
    grid.append(li);
  });
  root.append(grid);

  const dlg = document.createElement("div");
  dlg.className = "cert-modal";
  dlg.hidden = true;
  dlg.setAttribute("role", "dialog");
  dlg.setAttribute("aria-modal", "true");
  dlg.setAttribute("aria-labelledby", "cert-cap");
  // A macOS-style window: red closes, yellow minimises back to the thumbnails, green zooms to fill the screen.
  dlg.innerHTML = `<div class="cert-box">
      <div class="cert-bar"><span class="cert-lights">
        <button type="button" class="cert-close" aria-label="Close"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3.5 3.5l5 5m0-5l-5 5"/></svg></button>
        <button type="button" class="cert-min" aria-label="Minimise"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 6h6"/></svg></button>
        <button type="button" class="cert-zoom" aria-label="Zoom" aria-pressed="false"><svg viewBox="0 0 12 12" aria-hidden="true"><path class="fill" d="M3.2 8.8V4.6l4.2 4.2zM8.8 3.2v4.2L4.6 3.2z"/></svg></button>
      </span><span class="cert-file"></span></div>
      <figure><img alt=""><figcaption id="cert-cap"></figcaption></figure>
      <div class="cert-nav"><button type="button" class="cert-prev" aria-label="Previous certificate">&larr;</button>
      <span class="cert-count" aria-live="polite"></span>
      <button type="button" class="cert-next" aria-label="Next certificate">&rarr;</button></div></div>`;
  document.body.append(dlg);
  const img = dlg.querySelector("img"), cap = dlg.querySelector("figcaption"), count = dlg.querySelector(".cert-count");
  const box = dlg.querySelector(".cert-box"), file = dlg.querySelector(".cert-file"), zoom = dlg.querySelector(".cert-zoom");
  let cur = 0, opener = null;
  const show = (i) => {
    cur = (i + certs.length) % certs.length;
    const c = certs[cur];
    img.src = src(c);
    img.alt = `Certificate: ${c.title}`;
    cap.textContent = label(c);
    file.textContent = `${c.file}.webp`;
    count.textContent = `${cur + 1} / ${certs.length}`;
  };
  function open(i, from) {
    opener = from;
    show(i);
    dlg.hidden = false;
    document.body.style.overflow = "hidden";
    dlg.querySelector(".cert-close").focus();
  }
  const setZoom = (on) => { box.classList.toggle("zoom", on); zoom.setAttribute("aria-pressed", String(on)); };
  const close = () => {
    dlg.hidden = true;
    setZoom(false);
    document.body.style.overflow = "";
    opener?.focus();
  };
  dlg.querySelector(".cert-close").addEventListener("click", close);
  dlg.querySelector(".cert-min").addEventListener("click", close);
  zoom.addEventListener("click", () => setZoom(!box.classList.contains("zoom")));
  dlg.querySelector(".cert-prev").addEventListener("click", () => show(cur - 1));
  dlg.querySelector(".cert-next").addEventListener("click", () => show(cur + 1));
  dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "Tab") {
      const f = [...dlg.querySelectorAll("button")];
      const i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  return { open: (i = 0, from = null) => open(i, from) }; // `from` gets focus back on close
}
