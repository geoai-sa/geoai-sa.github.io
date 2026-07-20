# 🕋 GeoAI — National Sovereign Geospatial AI Engine

A visually stunning, high-performance single-page sovereign landing page featuring frosted iOS-style glassmorphism and a highly realistic, custom-shaded interactive 3D Earth globe. Engineered as the digital profile for **GeoAI**, the leading sovereign geospatial AI engine in the Kingdom of Saudi Arabia (B2G/B2B Defense & Security).

---

## 🎨 The Sovereign Design System
The visual architecture is built upon a refined, authoritative, Saudi-aligned corporate design palette that replaces generic neon sci-fi tones with deep sovereign colors:

*   **Sovereign Emerald (`#0e6e53`):** Reflects national pride, deep-learning intelligence, and geospatial sovereignty.
*   **Noble Saudi Gold (`#c5a059`):** Conveys prestige, authority, and high-end governance.
*   **Slate Space Steel (`#485c7e`):** The technical shade representing remote sensing telemetry, orbital satellite calculations, and deep space intelligence.
*   **Frosted iOS Glassmorphism:** Features ultra-dense frosted glass containers built with `backdrop-filter: blur(20px)`, a delicate inner border light-catching gradient (`rgba(255, 255, 255, 0.08)`), and deep, soft slate shadows.

---

## 🌟 Visual & Cinematic Features

### 1. 🪐 3D Earth Orbit Realism (Three.js & Custom Shaders)
*   **Dynamic Day/Night Scattering Shader:** Combines hi-res satellite maps with an active twilight zone (sunset terminator glow) that blends warm golden ambers and cold daylights as the sun position slowly rotates.
*   **Rayleigh Scattering Atmosphere:** An inner atmosphere mesh utilizing a custom Fresnel shader, creating a glowing emerald scatter on the daylight side and an amber-gold sunset rim on the twilight side.
*   **Warm City Lights:** Night side city networks glow with highly realistic warm amber light emissions instead of stark white.
*   **Cinematic Lighting:** Uses space-accurate high-contrast illumination: a powerful solar ray directional light (`2.2` intensity) and deep space slate ambient shadow (`0.12` intensity).

### 2. 💫 Premium UI Interactions
*   **Arabic Text Reveals:** Staggered word-by-word slide-up reveal transitions on the Hero title upon page load.
*   **Multi-Layered Parallax:** Lagged mouse-move translations bound to the hero cards, background vectors, and logos to give an organic sense of luxury depth.
*   **Horizontal Progress Bar:** A custom horizontal progress indicator running along the top of the viewport with a glowing sovereign emerald shadow.
*   **Haptic Ripple CTA:** An organic click wave-ripple expansion, GSAP elastic scale pop feedback, and real physical device haptic vibration integration (`navigator.vibrate(12)`).
*   **Mobile Touch Drawer:** A fully optimized slide-in navigation drawer with a frosted-glass blur filter (`blur(25px)`) and staggered link reveals.

---

## ⚡ High-Performance Engineering
The codebase is heavily optimized to secure a solid 60 FPS on both mobile and desktop viewports:

*   **Dual-Trigger Lazy Loader:** WebGL scene assets, heavy 16k textures, and Three.js geometry meshes are completely halted from loading on startup. They initialize dynamically when the user starts scrolling to the `#about` section or after a 1.5-second idle delay.
*   **GPU Instance Pulsing:** Pre-computes and caches marker coordinates onto vector arrays during setup. The animation loop updates instance scales without math-heavy matrix decomposition operations, saving massive CPU cycles.
*   **Motion Accessibility Gating:** If `prefers-reduced-motion` is detected, continuous rendering loops and auto-rotations are completely disabled. The 3D scene scales and positions strictly via ScrollTrigger event calls, dropping CPU usage to exactly 0% when the page is static.
*   **Touch Hygiene:** Magnetic button forces and 3D card tilt behaviors are safely bypassed on mobile/touch screens using standard hover media queries (`hover: hover`), preventing visual stutters.

---

## 🛠️ Technical Stack & Dependencies
*   **Core:** Vanilla JavaScript (ES Modules), HTML5, CSS3 Variables.
*   **3D Graphics:** [Three.js](https://threejs.org/) (Custom ShaderMaterial, ShaderPass, EffectComposer, UnrealBloomPass).
*   **Animation:** [GSAP](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (Cinema sequences, staggers, and scroll-linked translations).
*   **Physics Scrolling:** [Lenis](https://lenis.darkroom.engineering/) (Smooth, inertia-driven custom scrolling).
*   **Bundler:** [Vite](https://vite.dev/) (Rapid client asset bundling and code-splitting).

---

## 🚀 Quick Start & Development

### 1. Prerequisite
Ensure [Node.js](https://nodejs.org/) (v18+) is installed on your system.

### 2. Installation
Navigate to the directory and install all dependencies:
```bash
npm install
```

### 3. Run Local Development Server
Launch the local dev environment with hot-module reloading:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build Production Bundle
Build and minify the application into highly optimized production assets (`/dist`):
```bash
npm run build
```

### 5. Preview Production Build
Serve the local compiled production build to inspect load performance:
```bash
npm run preview
```

---

## 🚀 Deployment (GitHub Pages)

This repository ships with a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) that builds the site and publishes it to GitHub Pages automatically on every push to `main`.

### One-time setup
1. Push this repository to GitHub as **`geoai-sa`**.
2. In the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site will be published at:
   ```
   https://<your-github-username>.github.io/geoai-sa/
   ```

### Base path
Because a GitHub Pages project site is served from a `/geoai-sa/` sub-path (not the domain root), [vite.config.mjs](vite.config.mjs) sets `base: '/geoai-sa/'`. All page navigation and runtime asset URLs (3D textures, videos, page links) are resolved relative to this base. If you rename the repository, deploy to a custom domain, or use a `*.github.io` **user/organization** root page instead, update the `base` value (or set the `VITE_BASE` environment variable) accordingly — e.g. `base: '/'` for a root deployment.

### Manual build check
```bash
npm run build
npm run preview
```
`npm run preview` serves the built `dist/` output using the same `base`, so you can verify the production build locally before pushing.

---

## 🏛️ Project Directory Structure
```
├── .github/workflows/        # CI/CD — GitHub Pages build & deploy
├── dist/                      # Optimized production build output (git-ignored)
├── design-sources/            # Raw, unoptimized 3D source files (.fbx) kept for reference — not shipped to production
├── public/                    # Static assets served as-is (copied into dist/ on build)
│   ├── earth-3D/textures/     # 16k day, night, bump, spec, and cloud textures
│   └── sky-pano-milkyway/     # Starfield/skybox texture assets
├── index.html                 # Main landing page entrypoint
├── details.html                # Per-advantage detail page
├── engine.html                # Engine/architecture scrollytelling page
├── main.js / details.js / engine.js / transitions.js  # Page logic (Three.js, GSAP, page transitions)
├── package.json                # Bundler scripts & dependencies
├── style.css                   # Sovereign Design System CSS Variables & styles
└── README.md                   # Project documentation
```

---

*GeoAI — المحرك الجيومكاني الوطني. جميع الحقوق محفوظة © 2026*
