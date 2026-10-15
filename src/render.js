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
  const proj = projects.map((p) => `<li><strong>${esc(p.name)}</strong> (${esc(p.where)}): ${esc(p.what)}.${p.links.length ? ` <a href="${p.links[0][1]}">${short(p.links[0][1])}</a>` : ""}</li>`).join("");
  const sk = Object.entries(skills).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v.join(", "))}</dd>`).join("");
  const edu = [...education.map((e) => `${e.degree}, ${e.school}, ${e.start} to ${e.end}`), ...certifications].map((x) => `<li>${esc(x)}</li>`).join("");
  return { summary: esc(profile.intro), jobs, proj, sk, edu };
}
