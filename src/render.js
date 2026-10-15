// Builds the resume markup from content.js. Vite runs this at build time,
// so the page arrives fully rendered and nothing shifts once the JS loads.
import { profile, experience, projects, skills, education } from "./content.js";

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const short = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function renderResume() {
  const jobs = experience.map((e) => `
      <article class="job" data-tags="${e.tags.join(" ")}">
        <div class="job-head"><h3>${esc(e.role)}, ${esc(e.company)}</h3><span class="dates">${e.start} to ${e.end}</span></div>
        <p class="type">${esc(e.type)}</p>
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </article>`).join("");
  const linkLabel = (l, h) => (l === "Website" || l === "MenoLabs" || l === "Optibus" || l === "Medbook") ? short(h) : l;
  const linkHtml = (links) => (links || []).filter(([, h]) => h).map(([l, h]) =>
    `<a class="plink" href="${esc(h)}" target="_blank" rel="noopener noreferrer">${esc(linkLabel(l, h))}</a>`).join('<span class="psep" aria-hidden="true">·</span>');
  const proj = projects.map((p) => {
    const links = linkHtml(p.links);
    return `
      <article class="job pj" data-tags="${p.tags.join(" ")}">
        <div class="job-head"><h3>${esc(p.name)} <span class="where">${esc(p.where)}</span></h3><span class="dates">${esc(p.dates)}</span></div>
        <p>${esc(p.what)}. ${esc(p.role)}.${p.note ? ` <span class="type pnote">${esc(p.note)}</span>` : ""}</p>
        <p class="type">${esc(p.stack.join(", "))}${links ? ` <span class="psep" aria-hidden="true">·</span> <span class="plinks">${links}</span>` : ""}</p>
      </article>`;
  }).join("");
  const sk = Object.entries(skills).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v.join(", "))}</dd>`).join("");
  const edu = [...education.map((e) => `${e.degree}, ${e.school}, ${e.start} to ${e.end}`)].map((x) => `<li>${esc(x)}</li>`).join("");
  return { summary: esc(profile.intro), jobs, proj, sk, edu };
}
