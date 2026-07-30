# Personal Portfolio Website

A modern, high-performance portfolio website built with **Astro**, **Tailwind CSS**, and **Three.js WebGL**.

[![Live Preview](https://img.shields.io/badge/Live_Website-www.amitkumargandhi.com-00C853?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.amitkumargandhi.com/)
[![Astro](https://img.shields.io/badge/Astro_v7-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Hostinger](https://img.shields.io/badge/Hosted_on-Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white)](https://www.hostinger.com/)

---

## 🌐 Website Preview

[![Portfolio Website Preview](./public/preview.png)](https://www.amitkumargandhi.com/)

👉 **Live URL:** [https://www.amitkumargandhi.com/](https://www.amitkumargandhi.com/)

---

## ⚡ Technical Features & Architecture

* **Astro Static Site Generation (SSG):** Built with Astro 7 for ultra-fast, zero-JS-by-default static HTML rendering and minimal asset payload.
* **Interactive 3D WebGL Shader:** Custom Three.js fragment shader with real-time cursor-following chromatic aberration and RGB displacement effects. Features screen-width viewport detection to automatically bypass 3D rendering on mobile devices (< 1024px) for optimal mobile battery life and speed.
* **Reflow-Free Background Grid:** High-performance canvas grid background using document-relative scroll offset range caching instead of layout-thrashing DOM queries, maintaining `~0ms` Total Blocking Time (TBT).
* **Preloaded LCP Assets:** Optimized image loading via `<link rel="preload" as="image" fetchpriority="high">` tag in `<head>` for rapid Largest Contentful Paint.
* **Analytics & Privacy Integration:** Integrated Google Analytics (`gtag.js`) and SecurePrivacy cookie consent manager.
* **Production Express Server:** Embedded lightweight `server.mjs` Node.js Express server configured with long-term static asset caching headers.

---

## 🛠️ Technology Stack & Badges

### Core Frameworks & Languages
![Astro](https://img.shields.io/badge/Astro_v7-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### 3D Visuals & Animation
![Three.js](https://img.shields.io/badge/Three.js_WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP_Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

### Server & Infrastructure
![Node.js](https://img.shields.io/badge/Node.js_v22.x-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Hostinger](https://img.shields.io/badge/Hostinger_Web_App-673DE6?style=for-the-badge&logo=hostinger&logoColor=white)

---

## 📁 Repository Structure

```
├── public/                     # Static assets (images, favicon, resume PDF, htaccess)
│   ├── AmitG.webp              # Optimized profile WebP
│   ├── Amit Kumar Gandhi - Resume.pdf # Portfolio resume file
│   └── preview.png             # Website preview screenshot
├── src/
│   ├── components/             # UI and section components
│   │   ├── layout/             # Navbar and SiteFooter
│   │   ├── sections/           # Hero, About, Projects, Experience, Skills, Contact, etc.
│   │   └── ui/                 # Container, Section, SkillBadge, ResumeButton
│   ├── data/                   # Centralized site content definitions
│   │   ├── site.ts             # Primary configuration data object
│   │   └── types.ts            # TypeScript interfaces
│   ├── layouts/                # BaseLayout document wrapper & analytics head tags
│   ├── pages/                  # Page entry points (index.astro, 404.astro, robots.txt.ts)
│   └── styles/                 # Global CSS styles & Tailwind directives
├── astro.config.mjs            # Astro configuration
├── server.mjs                  # Production Node.js Express server
└── package.json                # Dependencies and build scripts
```

---

## 💻 Local Development Setup

### Prerequisites
* **Node.js:** `>= 22.12.0`
* **Package Manager:** `npm`

### Commands

```bash
# 1. Clone the repository
git clone https://github.com/iamitgandhi/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Check TypeScript & Astro diagnostics
npm run check

# 5. Build for production
npm run build

# 6. Preview production build via Express server
npm start
```

Local dev server runs on `http://localhost:4321`.

---

## ☁️ Hostinger Node.js Web App Deployment

This website is deployed as a **Node.js Web App** on Hostinger:

1. **Connect Repository:** In Hostinger hPanel ➔ **Node.js Web App** ➔ connect `iamitgandhi/portfolio-website`.
2. **Build Configuration:**
   * **Framework preset:** `Express`
   * **Node version:** `22.x`
   * **Root directory:** `./`
   * **Package manager:** `npm`
   * **Entry file:** `server.mjs`
3. **Build & Start Commands:**
   * **Build Command:** `npm install && npm run build`
   * **Start Command:** `npm start`
4. **Environment Variables:**
   * `SITE_URL=https://www.amitkumargandhi.com`

---

## 📝 License

This project is open-source under the [MIT License](LICENSE).
