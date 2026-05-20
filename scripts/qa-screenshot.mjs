import { chromium } from "playwright";

const url = process.argv[2] || "http://127.0.0.1:4173";
const browser = await chromium.launch({ headless: true });

for (const [name, width, height] of [
  ["desktop", 1440, 1100],
  ["mobile", 390, 844]
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({
    path: `docs/design-references/clone-${name}.png`,
    fullPage: true
  });
  await page.close();
}

await browser.close();
