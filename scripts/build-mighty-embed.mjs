import { readFile, writeFile } from "node:fs/promises";

const html = await readFile("index.html", "utf8");
const css = await readFile("styles.css", "utf8");
const js = await readFile("app.js", "utf8");
const videos = JSON.parse(await readFile("deep-dives.json", "utf8"));
const resourceSeries = JSON.parse(await readFile("resource-series.json", "utf8"));
const videoDataScript = `<script>\nwindow.WLWN_EMBEDDED_VIDEOS = ${JSON.stringify(videos)};\n</script>`;
const resourceDataScript = `<script>\nwindow.WLWN_RESOURCE_SERIES = ${JSON.stringify(resourceSeries)};\n</script>`;

const embed = html
  .replace(/<link rel="stylesheet" href="\.\/styles\.css" \/>/, `<style>\n${css}\n</style>`)
  .replace(/<script src="\.\/app\.js"><\/script>/, `${videoDataScript}\n${resourceDataScript}\n<script>\n${js}\n</script>`);

await writeFile("mighty-embed.html", embed, "utf8");
console.log("Wrote mighty-embed.html");
