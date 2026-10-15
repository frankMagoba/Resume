import "./style.css";
import "./askterm.css";
import { mountAskTerminal, askOnly } from "./askterm.js";

const $ = (s) => document.querySelector(s);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  n.append(...kids);
  return n;
};

// Highlight chips: dim jobs that don't match the chosen area.
const areas = { all: "All", backend: "Backend", frontend: "Frontend", mobile: "Mobile", sre: "SRE", ai: "AI" };
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

mountAskTerminal($("#askterm"), {
  run: askOnly,
  title: "ask-franklin --resume",
  suggestions: ["has he done SRE work?", "what backend stack does he use?", "does he build mobile apps?", "what AI work has he done?", "how do I contact him?"],
});

