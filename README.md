# Resume

Printable resume for Franklin Magoba — https://frankmagoba.github.io/Resume/

Vite static site, no framework. Source on `master`; GitHub Pages serves the built `gh-pages` branch under `/Resume/`.

## How it’s put together

- `src/content.js` holds the facts. The portfolio repo keeps a matching copy — edit both when roles or projects change.
- `src/render.js` fills the HTML slots at build time, so the page arrives with content already in the markup.
- Area chips in the toolbar dim jobs and projects that don’t match the selected tag.
- Contact row in the header is icon chips (email, phone, LinkedIn, GitHub, portfolio).
- Ask / terminal stays on the portfolio only; this page is meant to read and print cleanly.

Same SF Pro Text / Display treatment as the portfolio on Apple machines.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173/Resume/
```

## PDF

`public/resume.pdf` is a print of this page:

```bash
npm run build && npm run preview   # leave running
npm run pdf                        # set CHROME=... if Chrome isn’t on the default path
```

## Deploy

```bash
git push origin master
npm run deploy     # builds dist/ and pushes it to gh-pages
```

`vite.config.js` sets `base: "/Resume/"` so assets resolve under the Pages URL.
