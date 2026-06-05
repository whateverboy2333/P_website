import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
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
  [".mp4", "video/mp4"],
  [".md", "text/markdown"]
]);

function parseByteRange(rangeHeader, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader || "");
  if (!match) return null;

  const [, startText, endText] = match;
  if (!startText && !endText) return null;

  if (!startText) {
    const suffixLength = Number(endText);
    if (!Number.isSafeInteger(suffixLength) || suffixLength <= 0) return null;
    return {
      start: Math.max(0, size - suffixLength),
      end: size - 1
    };
  }

  const start = Number(startText);
  const end = endText ? Number(endText) : size - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
    return null;
  }

  return {
    start,
    end: Math.min(end, size - 1)
  };
}

function sendStream(response, file, headers, range, method) {
  response.writeHead(range ? 206 : 200, headers);
  if (method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(file, range || undefined).pipe(response);
}

async function serveVideo(request, response, file, contentType) {
  const { size } = await stat(file);
  const baseHeaders = {
    "Accept-Ranges": "bytes",
    "Content-Type": contentType
  };
  const rangeHeader = request.headers.range;

  if (!rangeHeader) {
    sendStream(response, file, {
      ...baseHeaders,
      "Content-Length": size
    }, null, request.method);
    return;
  }

  const range = parseByteRange(rangeHeader, size);
  if (!range) {
    response.writeHead(416, {
      ...baseHeaders,
      "Content-Range": `bytes */${size}`
    });
    response.end();
    return;
  }

  sendStream(response, file, {
    ...baseHeaders,
    "Content-Length": range.end - range.start + 1,
    "Content-Range": `bytes ${range.start}-${range.end}/${size}`
  }, range, request.method);
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://127.0.0.1");
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const file = path.join(root, decodeURIComponent(pathname));

  try {
    const contentType = types.get(path.extname(file)) || "application/octet-stream";
    if (path.extname(file) === ".mp4") {
      await serveVideo(request, response, file, contentType);
      return;
    }

    const body = await readFile(file);
    response.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": body.length
    });
    response.end(request.method === "HEAD" ? undefined : body);
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
