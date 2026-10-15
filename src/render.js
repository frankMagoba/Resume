// Builds the resume markup from content.js. Vite runs this at build time,
// so the page arrives fully rendered and nothing shifts once the JS loads.
import { profile, experience, projects, skills, education, certifications } from "./content.js";

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const short = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function renderResume() {
  const jobs = experience.map((e) => `
      <article class="job" data-tags="${e.tags.join(" ")}">
        <div class="job-head"><h3>${esc(e.role)}, ${esc(e.company)}</h3><span class="dates">${e.start} to ${e.end}</span></div>
        <p class="type">${esc(e.type)}</p>
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </article>`).join("");
  const proj = projects.map((p) => `
      <article class="job pj" data-tags="${p.tags.join(" ")}">
        <div class="job-head"><h3>${esc(p.name)} <span class="where">${esc(p.where)}</span></h3><span class="dates">${esc(p.dates)}</span></div>
        <p>${esc(p.what)}. ${esc(p.role)}.${p.note ? ` <span class="type pnote">${esc(p.note)}</span>` : ""}</p>
        <p class="type">${esc(p.stack.join(", "))}${p.links.length ? " · " + p.links.map(([l, h]) => `<a href="${h}">${esc(l === "Website" || l === "MenoLabs" || l === "Optibus" || l === "Medbook" ? short(h) : l)}</a>`).join(" · ") : ""}</p>
      </article>`).join("");
  const sk = Object.entries(skills).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v.join(", "))}</dd>`).join("");
  const edu = [...education.map((e) => `${e.degree}, ${e.school}, ${e.start} to ${e.end}`), ...certifications].map((x) => `<li>${esc(x)}</li>`).join("");
  return { summary: esc(profile.intro), jobs, proj, sk, edu };
}
