import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const site =
  process.env.SITE_URL?.replace(/\/$/, "") ?? "https://www.amitkumargandhi.com";

export default defineConfig({
  site,
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      cssMinify: true,
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
