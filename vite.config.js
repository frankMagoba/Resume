import { defineConfig } from "vite";

// The site is served from https://frankmagoba.github.io/Resume/
export default defineConfig({
  base: "/Resume/",
  build: { outDir: "dist", target: "es2020" },
});
