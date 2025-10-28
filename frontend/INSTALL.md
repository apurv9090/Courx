# Installation Guide for CourX Frontend UI

Follow these steps to set up the Web3-inspired CourX interface locally.

## 1. Prerequisites

- Node.js 18 or newer (LTS recommended)
- npm 9 or newer (bundled with Node.js 18+)

Verify versions:

```bash
node --version
npm --version
```

## 2. Install Project Dependencies

From the `frontend` directory:

```bash
cd frontend
npm install
```

This pulls all runtime and dev libraries listed in `package.json`, including React, Vite, Tailwind CSS, Framer Motion, Lenis, and other animation/UI helpers.

## 3. Useful npm Scripts

- `npm run dev` – start the development server with hot module reload
- `npm run build` – create a production build in `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint checks

## 4. Optional: Fresh Dependency Install

If you need to reinstall from scratch:

```bash
rm -rf node_modules package-lock.json
npm install
```

You are now ready to explore the CourX UI.
