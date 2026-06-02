import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const types = new Map([
  [".html", "text/html"],
  [".css", "text/css"],
  [".js", "text/javascript"],
  [".gif", "image/gif"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".md", "text/markdown"]
]);

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://127.0.0.1");
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const file = path.join(root, decodeURIComponent(pathname));

  try {
    const body = await readFile(file);
    response.writeHead(200, {
      "Content-Type": types.get(path.extname(file)) || "application/octet-stream"
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("not found");
  }
});

server.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});

server.listen(4173, "0.0.0.0", () => {
  console.log("Serving http://127.0.0.1:4173");
});
