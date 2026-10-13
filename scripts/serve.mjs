import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 4317);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".ttf": "font/ttf", ".woff2": "font/woff2" };

http.createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (pathname.startsWith("/Portafolio/")) pathname = pathname.slice("/Portafolio".length);
    const resource = pathname === "/" ? "index.html" : pathname.slice(1);
    // Expose only the public site, keeping Git metadata and local QA files private.
    if (!(resource === "index.html" || resource === "robots.txt" || resource === "sitemap.xml" || /^(css|js|assets)\//.test(resource))) {
      response.writeHead(404).end("Not found");
      return;
    }
    const target = resolve(root, resource);
    const relativeTarget = relative(root, target);
    if (relativeTarget.startsWith(`..${sep}`) || relativeTarget === ".." || relativeTarget.split(sep).some((part) => part.startsWith("."))) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const body = await readFile(target);
    response.writeHead(200, { "Content-Type": types[extname(target)] || "application/octet-stream", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    response.end(body);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`Portfolio preview: http://127.0.0.1:${port}/Portafolio/`));
