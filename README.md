# Amit Kumar Gandhi — Personal Portfolio

Personal portfolio site for **Amit Kumar Gandhi**, WooCommerce Specialist & WordPress Automation Expert.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on **Hostinger Node.js Web App**.

---

## Tech stack

- **Framework**: Astro 5 with Node.js adapter (standalone mode)
- **Styling**: Tailwind CSS v3
- **Fonts**: Inter + JetBrains Mono (self-hosted)
- **Hosting**: Hostinger Node.js Web App

---

## Deploying to Hostinger

### Option 1 — Deploy via GitHub (recommended)

1. Push this repo to GitHub
2. In Hostinger hPanel → **Node.js Web App** → connect your GitHub repo
3. Set the build command: `npm install && npm run build`
4. Set the start command: `npm start`
5. Add environment variable: `SITE_URL=https://www.amitkumargandhi.com`
6. Deploy

### Option 2 — Upload files manually

1. Run locally: `npm install && npm run build`
2. Upload the entire project folder via Hostinger File Manager or FTP
3. In Hostinger hPanel, set:
   - **Build command**: `npm install && npm run build`
   - **Start command**: `npm start`

---

## Local development

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
npm start   # starts the Node.js server on port 3000
```

---

## Updating your content

All content is in one file — just edit and redeploy:

```
src/data/site.ts
```

## Adding your photo

Add your profile picture as `public/Amit_pfp.jpg`.

## Adding your resume

Add your CV as `public/Amit_Kumar_Gandhi_Resume.pdf`.
