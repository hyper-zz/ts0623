import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const isAssetRequest = safePath.startsWith("/assets/");
  let filePath = isAssetRequest
    ? join(root, "public", safePath)
    : join(root, safePath);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    if (isAssetRequest) {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      response.end("Asset not found");
      return;
    }

    filePath = join(root, "index.html");
  }

  response.setHeader("Content-Type", types[extname(filePath)] || "application/octet-stream");
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Travel Science site running at http://localhost:${port}`);
});
