## GSAP + React Landing Page

A modern, animated landing page built with React, TypeScript, Vite, Tailwind CSS, and GSAP. Features include a hero section, animated titles, bento-style features grid, story/gallery visuals, and a contact section with smooth interactions.

### Tech stack

- **Build**: Vite 7, TypeScript 5
- **UI**: React 19, Tailwind CSS 3
- **Animation**: GSAP 3, @gsap/react
- **Utilities**: react-use, react-icons
- **Linting**: ESLint

---

## Getting started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9/10+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project structure

```text
.
├─ public/
│  ├─ fonts/         # Local webfonts used via @font-face
│  ├─ img/           # Images (webp/png/svg)
│  ├─ videos/        # MP4 videos for sections (hero/features/etc.)
│  └─ audio/         # Optional looped audio
├─ src/
│  ├─ components/
│  │  ├─ About.tsx
│  │  ├─ AnimatedTitle.tsx
│  │  ├─ Button.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Features.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ RoundedCorners.tsx
│  │  └─ Story.tsx
│  ├─ App.tsx        # Page composition
│  ├─ index.css      # Tailwind + global styles, fonts, utilities
│  └─ main.tsx       # App entry
├─ index.html        # Root HTML (mounts #root)
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.ts
```

---

## Key features

- **GSAP-powered animations**: Smooth entrance, text, and section transitions via GSAP and @gsap/react.
- **Responsive layout**: Tailwind utilities for adaptive typography, spacing, and section layouts.
- **Bento grid**: Feature tiles with hover/tilt and masked media.
- **Custom fonts**: Local fonts loaded via `@font-face` for strong brand typography.
- **Media-rich**: Optimized images and short videos to enhance visual storytelling.

---

## Styling and utilities

- **Tailwind CSS** is configured via `tailwind.config.js` and used throughout components.
- Global styles and utilities live in `src/index.css`, including:
  - **Font setup**: `circular-web`, `general`, `robert-*`, `zentry` via `@font-face` mapped to utility classes like `font-zentry`, `font-circular-web`, etc.
  - **Utility classes**: Helpers like `border-hsla`, `nav-hover-btn`, `absolute-center`, `flex-center`, `mask-clip-path`, section-specific classes (e.g., `hero-heading`, `about-image`, `story-img-*`, `gallery-img-*`, `contact-clip-path-*`).
  - **Animations**: Keyframes and small helpers used by components (e.g., `indicator-line`, loader styles).

---

## Animations

- **GSAP + @gsap/react** are used directly in components to orchestrate timelines and effects.
- Components like `AnimatedTitle`, `Hero`, `Features`, and `Story` apply transforms, masks, and staged reveals.
- Keep animations performant by:
  - Preferring `transform`/`opacity`,
  - Using `will-change` sparingly,
  - Scoping effects to elements that are actually on screen.

---

## Assets

- Place images, videos, fonts, and audio in `public/` so they’re available at runtime (e.g., `/img/...`, `/videos/...`).
- Replace placeholder media with your own; keep formats optimized (`.webp` for images, compressed `.mp4` for short clips).

---

## Scripts (from package.json)

- **dev**: Start local dev server (HMR)
- **build**: Type-check then build for production
- **preview**: Preview the production build locally
- **lint**: Run ESLint on the project

---

## Customization

- **Branding/Fonts**: Update `public/fonts/` and the `@font-face` blocks in `src/index.css`.
- **Colors/Theme**: Extend Tailwind in `tailwind.config.js`.
- **SEO**: Update title/meta in `index.html`.
- **Sections**: Modify or extend `src/components/` to add/remove sections.

---

## Notes

- Ensure media paths (images/videos/fonts) match their usage in components.
- For best performance, keep videos short and use lazy-loading techniques where possible.
- If supporting reduced motion, gate complex timelines with `prefers-reduced-motion`.

---

## Acknowledgements

- **GSAP** and **@gsap/react** for animation tools
- Tailwind CSS for utility-first styling
- Vite for a fast React + TS development experience
