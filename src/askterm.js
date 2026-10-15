// Terminal-styled "Ask about Franklin" widget. Answers type out on screen,
// while screen readers get the full answer at once through a live region.
import { answer, loadSemantic, fallback } from "./ask.js";

const still = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function mountAskTerminal(root, { run, suggestions, title = "ask-franklin" }) {
  root.classList.add("aterm");
  root.innerHTML = `
    <div class="aterm-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="aterm-title">${title}</span>
      <button type="button" class="aterm-smart" aria-pressed="false">smart search: off</button></div>
    <div class="aterm-log" aria-hidden="true"></div>
    <p class="sr" role="status" aria-live="polite"></p>
    <form class="aterm-line"><label class="aterm-ps1" for="${title}-in">franklin@portfolio:~$</label>
      <input id="${title}-in" autocomplete="off" spellcheck="false" autocapitalize="off" placeholder="ask has he run kubernetes in production?"></form>
    <div class="aterm-chips" role="group" aria-label="Suggested questions"></div>`;
  const log = root.querySelector(".aterm-log");
  const live = root.querySelector('[role="status"]');
  const input = root.querySelector("input");
  const chips = root.querySelector(".aterm-chips");

  const line = (text, cls) => { const d = document.createElement("div"); d.className = cls || ""; d.textContent = text; log.append(d); log.scrollTop = log.scrollHeight; return d; };
  const type = async (text) => {
    live.textContent = text;
    const d = line("", "out");
    if (still()) { d.textContent = text; return; }
    for (let i = 0; i < text.length; i += 3) { d.textContent = text.slice(0, i + 3); log.scrollTop = log.scrollHeight; await new Promise((r) => setTimeout(r, 12)); }
  };

  // Commands queue up, so a click during a typed answer isn't lost.
  let queue = Promise.resolve();
  const submit = (raw) => (queue = queue.then(() => exec(raw)));
  const exec = async (raw) => {
    raw = raw.trim();
    if (!raw) return;
    line(`$ ${raw}`, "cmd");
    if (raw === "clear") { log.replaceChildren(); return; }
    await type(await run(raw));
  };

  root.querySelector("form").addEventListener("submit", (e) => { e.preventDefault(); const v = input.value; input.value = ""; submit(v); });
  for (const s of suggestions) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "aterm-chip"; b.textContent = s;
    b.addEventListener("click", () => { submit(s); input.focus(); });
    chips.append(b);
  }
  const smart = root.querySelector(".aterm-smart");
  smart.addEventListener("click", async () => {
    smart.disabled = true; smart.textContent = "smart search: loading";
    try { await loadSemantic((s) => line(`# ${s}`, "note")); smart.textContent = "smart search: on"; smart.setAttribute("aria-pressed", "true"); }
    catch { line("# Couldn't load the model, so keyword search stays on.", "note"); smart.textContent = "smart search: off"; smart.disabled = false; }
  });
  line("# Ask anything about my work, or type help. Answers quote this site and stay in your browser.", "note");
}

// Default runner for a page without the full command set.
export async function askOnly(raw) {
  const q = raw.replace(/^ask\s+/i, "");
  if (/^help$/i.test(q)) return "Type a question, for example: what backend stack does he use?";
  const r = await answer(q);
  return r ? `${r.text}\n  (from: ${r.ref})` : fallback;
}
