// Prints the built resume to public/resume.pdf with headless Chrome.
// Usage: npm run build && npm run preview (in another terminal) && npm run pdf
import { execFileSync } from "node:child_process";

const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = process.env.URL || "http://localhost:4173/Resume/";
execFileSync(chrome, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--print-to-pdf=public/resume.pdf", url], { stdio: "inherit" });
console.log("Wrote public/resume.pdf");
