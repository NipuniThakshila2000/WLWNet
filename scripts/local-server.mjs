import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 5173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function fileForUrl(url) {
  const pathname = new URL(url, "http://localhost").pathname;
  const relative = pathname === "/" ? "index.html" : pathname.slice(1);
  const file = resolve(root, normalize(relative));
  return file.startsWith(root) ? file : null;
}

createServer((request, response) => {
  const file = fileForUrl(request.url || "/");
  if (!file) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const stats = statSync(file);
    if (!stats.isFile()) throw new Error("Not a file");
    response.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Content-Length": stats.size,
      "Cache-Control": "no-store",
    });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Serving ${join(root, "index.html")} at http://127.0.0.1:${port}/`);
});
