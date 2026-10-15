// "Ask about Franklin": keyword match first, optional in-browser semantic search.
// It only ever returns sentences that already exist in content.js.
import { faq, buildChunks } from "./content.js";

const chunks = buildChunks();
const STOP = new Set("a an the is are was were does do did he his him franklin what which who how has have of in on at to for and or with about any can".split(" "));
const tokens = (s) => s.toLowerCase().replace(/[^a-z0-9+#.\- ]/g, " ").split(/\s+/).filter((t) => t && !STOP.has(t));

export function keywordAnswer(question) {
  const q = question.toLowerCase();
  const qt = tokens(question);
  let best = null, bestScore = 0;
  for (const f of faq) {
    const s = f.k.reduce((n, k) => n + (new RegExp(`\\b${k}\\b`).test(q) ? 2 : 0), 0);
    if (s > bestScore) { best = { text: f.a, ref: f.q }; bestScore = s; }
  }
  for (const c of chunks) {
    const ct = new Set(tokens(c.text + " " + c.ref));
    const s = qt.reduce((n, t) => n + (ct.has(t) ? 1 : 0), 0);
    if (s > bestScore) { best = c; bestScore = s; }
  }
  return bestScore > 0 ? best : null;
}

let embedder = null, vectors = null;
export async function loadSemantic(onStatus = () => {}) {
  if (embedder) return;
  onStatus("Downloading a small model (about 23 MB, cached after the first time)...");
  const { pipeline } = await import("https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2");
  embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  const out = await embedder(chunks.map((c) => c.text), { pooling: "mean", normalize: true });
  vectors = out.tolist();
  onStatus("Smart search is on.");
}
export const semanticReady = () => !!embedder;

export async function semanticAnswer(question) {
  const [q] = (await embedder([question], { pooling: "mean", normalize: true })).tolist();
  let best = -1, idx = 0;
  vectors.forEach((v, i) => { const s = v.reduce((n, x, j) => n + x * q[j], 0); if (s > best) { best = s; idx = i; } });
  return best > 0.3 ? chunks[idx] : null;
}

export async function answer(question) {
  if (embedder) {
    try { const r = await semanticAnswer(question); if (r) return r; } catch { /* fall through */ }
  }
  return keywordAnswer(question);
}

export const fallback = "I don't have that one. Try asking about his current role, SRE, backend, mobile or AI work, or just email him.";
