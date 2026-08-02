# Deploy Portfolio to Vercel

## Problem
Vercel auto-detects the project as a Node.js app because `script/build.ts` bundles the Express server into `dist/index.cjs`, so Vercel runs that instead of serving the React app at `dist/public/index.html`.

## Solution
The portfolio is a static site (Contact form uses EmailJS directly in the browser). Configure Vercel to build only the React client and serve `dist/public`.

## Steps
- [x] Analyze repo: confirmed `script/build.ts` builds client + server; Contact uses EmailJS; Express API unused
- [x] Get plan approval from user
- [x] Add `vercel.json` with `buildCommand: "vite build"`, `outputDirectory: "dist/public"`, framework `vite`, and SPA rewrites
- [x] Run `vite build` locally to verify `dist/public` is produced (no `dist/index.cjs`)
- [x] Add Dark Mode toggle (ThemeToggle + theme-init script + dark CSS vars + dark: classes across all sections)
- [x] Add GSAP animations (Hero word-by-word stagger + Projects ScrollTrigger reveal)
- [x] Update favicon/apple-touch-icon + theme-color meta
- [ ] Commit & push to GitHub so Vercel redeploys

