import { defineConfig } from "vite";
import { renderResume } from "./src/render.js";

// Fill the <!--slot--> markers in index.html with the resume content.
const prerender = () => ({
  name: "prerender-resume",
  transformIndexHtml(html) {
    const r = renderResume();
    return html
      .replace("<!--summary-->", r.summary).replace("<!--jobs-->", r.jobs)
      .replace("<!--projects-->", r.proj).replace("<!--skills-->", r.sk).replace("<!--edu-->", r.edu);
  },
});

// The site is served from https://frankmagoba.github.io/Resume/
export default defineConfig({
  base: "/Resume/",
  plugins: [prerender()],
  build: { outDir: "dist", target: "es2020" },
});
