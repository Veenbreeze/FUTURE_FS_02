# Project Setup and CI/CD Guide

## Overview

This repository is a React + Vite application configured for professional GitHub CI and Vercel deployment.
It includes linting, formatting, type checks, pre-commit hooks, environment management, and a production build pipeline.

## Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Install Husky hooks after the first install:
   ```bash
   npm run prepare
   ```
3. Start the local dev server:
   ```bash
   npm run dev
   ```
4. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Scripts

- `npm run dev` — start the Vite development server.
- `npm run build` — generate a production-ready build in `dist`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint across supported files.
- `npm run format` — format source files with Prettier.
- `npm run check:types` — run TypeScript type checking.
- `npm run check:lint` — run lint checks.
- `npm run check:format` — validate formatting.
- `npm run test` — run tests if a test script exists.
- `npm run ci` — run full CI-style checks and build.

## GitHub Actions CI Workflow

The CI workflow is defined in `.github/workflows/ci.yml`.
It runs on:

- `pull_request` targeting `main`
- `push` to `main`

CI performs:

- `npm ci`
- `npm run check:types`
- `npm run lint`
- `npm run test --if-present`
- `npm run build`

## Pre-commit and Lint-staged

Husky and lint-staged are configured to run on every commit.

- `npx husky install` is triggered via the `prepare` script.
- On `git commit`, staged `.js`, `.jsx`, `.ts`, `.tsx` files are automatically:
  - fixed with ESLint
  - formatted with Prettier

If lint-staged changes files during commit, they are re-staged automatically.

## Deployment to Vercel

This project is ready for Vercel automatic deployment.
The Vercel settings are configured in `vercel.json`:

- `build.command`: `npm run build`
- `outputDirectory`: `dist`
- SPA route fallback to `index.html` for client-side routing

### Vercel Setup

1. Connect the GitHub repository to Vercel.
2. Ensure the project uses the root folder.
3. Confirm the build command is `npm run build`.
4. Confirm the output directory is `dist`.
5. Add any required environment variables in the Vercel dashboard.

## Environment Variables

- `.env` and `.env.*` files are ignored by Git.
- Example values are stored in `.env.example`.
- Use only `VITE_` prefixed variables for Vite client injection.

### Recommended `.env.example`

```text
VITE_API_URL=https://api.example.com
VITE_PUBLIC_URL=https://example.com
```

## Troubleshooting

- If ESLint or Prettier fails:
  - run `npm run format`
  - run `npm run lint`
- If the build fails:
  - run `npm run build`
  - inspect Vite output for missing imports or config issues
- If Husky hooks are not installed after cloning:
  ```bash
  npm run prepare
  ```
- If Vercel deploys incorrectly:
  - verify `vercel.json`
  - ensure the build command is `npm run build`
  - ensure routes rewrite to `/index.html`

## Notes

- This project currently has no required runtime environment variables in source files.
- Add any additional `VITE_` values to `.env.example` and to Vercel environment settings when needed.
