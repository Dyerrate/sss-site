# Astro Port — Sister Project Notes

This Next.js codebase has a sibling Astro rebuild in progress. The Astro
project intentionally lives **outside** this repository so it can be tested,
iterated on, and ultimately swapped in without touching this codebase until
parity is verified.

## Location

```
sssWebsite/
├── sss-site/         ← this repo (Next.js 15 + React 19, current production)
└── sss-astro/        ← sibling Astro 5 rebuild (not in any git repo)
```

## Status

**In active development.** The Astro port reproduces every route from this
site (Home, About, Products, Connectz product + privacy policy, Poker
Legends, plus the legacy redirects from `next.config.ts`) with a redesigned
layout that keeps the existing glass-morphism theme tokens.

Key architectural choices:

- **No React/Vue/Svelte integrations** — pure `.astro` components, near-zero
  client JS by default
- **anime.js** replaces framer-motion for all animation
- **CSS/SVG** replaces three.js — the poker chip and SSS mark are rendered
  as animated SVG instead of GLB models, eliminating the three.js bundle
- **Tailwind v4** via `@tailwindcss/vite` (matching this repo's Tailwind
  version)
- **Persistent `SiteBackdrop`** — the orange SSS mark, glow, and orbital
  rings live as a fixed background visible behind every page, surviving
  client-side navigation via `transition:persist`. Each page change fires
  an anime.js "expression" timeline (mark pulses, glow brightens, rings
  briefly accelerate, an outward "ping" ring expands) using Astro's
  `astro:before-preparation` view-transition event.

## Running both sites side by side

```bash
# Next.js (this repo, terminal 1)
cd sss-site
npm run dev          # http://localhost:3000

# Astro (sibling repo, terminal 2)
cd ../sss-astro
npm install          # first time only
npm run dev          # http://localhost:4321
```

Compare any route on `localhost:3000` (this site) against the same path on
`localhost:4321` (Astro port).

## What's in this PR

This PR does **not** include the Astro source — that lives in the sibling
folder by design. The diff in this PR is limited to a routine
`next` dependency bump (`15.5.9` → `^15.5.18`) that was already pending in
the worktree before the Astro work started, plus this note for reviewers
who need to find the port.

When the Astro rebuild is verified at parity, a follow-up PR will move it
into a tracked location (either as a folder in this repo or its own repo)
and decommission the Next.js source.
