import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist/
app.use(express.static(path.join(__dirname, "dist"), {
  etag: true,
  lastModified: true,
  setHeaders(res, filePath) {
    // Cache static assets for 1 year, HTML for 1 hour
    if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "public, max-age=3600");
    } else {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  },
}));

// Fallback to index.html for SPA-style routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio running on http://0.0.0.0:${PORT}`);
});
