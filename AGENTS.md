# AGENTS.md

## What this is / Энэ юу вэ
Static HTML/CSS/JS + p5.js summer course repo. **No build system, no tests, no lint.** Weeks hold lesson files; `projects/` is a Firebase Hosting site.

## Layout / Бүтэц
- `weekNN/<day>/` — lessons by day (`monday/tuesday/thursday/friday`), each with html + `js/` + `css/`.
- `week04/week03/` — there is **no top-level `week03`**; week 3 lives inside week04.
- `projects/` — Firebase Hosting root (own `firebase.json`, `public/`, `.firebaserc`). This is the deploy target; week folders are teaching material.
- `dataconnect/` — Firebase Data Connect config (root-level init, currently untracked).

## Running / verification / Ажиллуулах
No dev server or tests. Verify by opening the HTML in a browser, or:
`python3 -m http.server 8000` from the relevant folder.

## p5.js gotcha
Some day-folders vendor a local `p5.min.js` (~1MB, e.g. week05–07); others load the CDN (1.9.0). No canonical copy — reuse the nearest local one rather than assuming a CDN.

## Firebase
- **Two separate contexts**: root-level Data Connect init vs `projects/` hosting.
- Deploy hosting from `projects/`:
  `firebase deploy --only hosting:summer-course-2026-garid-fd835`
- `firebase-debug.log` at repo root is untracked; keep it that way.

## Conventions / Заншил
- Lesson files named `ex*.html` / `ex*.js` (also `exe*`, `exercises*`).
- Code is copied per-week; don't refactor across weeks.