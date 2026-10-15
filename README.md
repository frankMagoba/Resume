# Resume

My resume, live at https://frankmagoba.github.io/Resume/.

It's a static Vite site with no framework. `src/content.js` holds every fact, and the portfolio repo uses a copy of the same file. The page renders from it, along with the area chips and the "Ask about Franklin" box, which matches questions by keyword first. Smart search is optional: it loads a small embedding model with transformers.js in the browser and only ever quotes the content.

## Develop

    npm install
    npm run dev        # http://localhost:5173/Resume/

## PDF

`public/resume.pdf` is printed from the page itself:

    npm run build && npm run preview   # leave running
    npm run pdf                        # set CHROME=... if Chrome lives elsewhere

## Deploy

GitHub Pages serves the `gh-pages` branch. The source stays on `master`.

    npm run deploy     # builds to dist/ and pushes it to gh-pages

`vite.config.js` sets `base: "/Resume/"` so asset paths work under the project URL.
