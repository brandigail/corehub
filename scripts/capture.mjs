import { chromium } from "playwright";

const [url, slug, ...paths] = process.argv.slice(2);
const sizes = { desktop: { width: 1280, height: 800 }, mobile: { width: 375, height: 812 } };
const browser = await chromium.launch();
for (const [label, viewport] of Object.entries(sizes)) {
  const context = await browser.newContext({ viewport, colorScheme: process.env.SCHEME ?? "light" });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
  for (const [index, path] of (paths.length ? paths : ["/"]).entries()) {
    await page.goto(new URL(path, url).href, { waitUntil: "load" });
    await page.waitForTimeout(2500);
    // Netlify injects a "Powered by" badge iframe on some plans; keep it out of the screenshots.
    await page.addStyleTag({ content: "#nl-badge-frame { display: none !important; }" });
    await page.screenshot({ path: `${process.env.OUT}/${slug}-${index + 1}-${label}.png` });
  }
  console.log(label, "console errors:", errors.length, errors.slice(0, 3));
  await context.close();
}
await browser.close();
