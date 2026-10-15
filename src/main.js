import "./style.css";
import { answer, loadSemantic, fallback } from "./ask.js";

const $ = (s) => document.querySelector(s);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  n.append(...kids);
  return n;
};

// Highlight chips: dim jobs that don't match the chosen area.
const areas = { all: "All", backend: "Backend", frontend: "Frontend", mobile: "Mobile", sre: "SRE", ai: "AI eval" };
const chips = $("#chips");
for (const [key, label] of Object.entries(areas)) {
  const b = el("button", { type: "button", class: "chip", "aria-pressed": String(key === "all"), "data-k": key }, label);
  b.addEventListener("click", () => {
    chips.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document.querySelectorAll(".job").forEach((j) => j.classList.toggle("dim", key !== "all" && !j.dataset.tags.split(" ").includes(key)));
  });
  chips.append(b);
}

$("#print").addEventListener("click", () => window.print());

$("#ask-form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const r = await answer($("#ask-input").value.trim());
  $("#ask-out").replaceChildren(r ? el("p", {}, r.text, el("span", { class: "ref" }, `From: ${r.ref}`)) : el("p", {}, fallback));
});
$("#ask-smart").addEventListener("click", async (ev) => {
  ev.target.disabled = true;
  try { await loadSemantic((s) => ($("#ask-status").textContent = s)); }
  catch { $("#ask-status").textContent = "Couldn't load the model, so keyword search stays on."; ev.target.disabled = false; }
});
