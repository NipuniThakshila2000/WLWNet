import { readFile, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;
const USER_ID = process.env.VIMEO_USER_ID || "157366169";
const OUTPUT_FILE = process.env.RESOURCE_OUTPUT_FILE || "resource-series.json";
const APP_FILE = process.env.APP_FILE || "app.js";

const SERIES = [
  ["CMS Redux", "28762467"],
  ["Cornerstone Reflections", "27501854"],
  ["WOWLife Uncut", "22626065"],
  ["Theos & Theory", "24867004"],
  ["WOW Online Church (WOC) Teachings", "26036833"],
  ["Conscience Series (2023)", "16420145"],
  ["The Wildcard Series [New]", "22118326"],
  ["Purpose Series", "16434018"],
  ["Law & Grace", "16434021"],
  ["Righteousness by faith", "16435177"],
  ["Crash Course", "16513411"],
  ["The Vast Mind of Christ", "16435194"],
  ["Jesus the Man", "16435183"],
  ["Wisdom Series", "16435184"],
  ["New Creation Reality", "16435187"],
  ["Ego Man", "16556164"],
  ["Emotional Alchemy", "16556407"],
  ["Rise of the SHE", "16556166"],
  ["Who is Satan", "16605806"],
  ["Synchronized Knowledge", "17360611"],
  ["Awaken to Righteousness (South Africa)", "18769102"],
  ["Communion Series", "18769103"],
  ["The New Grace Series", "18769105"],
  ["Patience Series", "18769108"],
  ["Conscience Series 2015", "18769111"],
  ["Spirit of Mammon", "18769119"],
  ["Blessings In Grace Series", "18769124"],
  ["Faith Series", "18769133"],
  ["Lasting Life Series", "18769136"],
  ["Lords of The Earth Series", "18769138"],
  ["Prosperity Gospel Series", "18769143"],
  ["The Power of Communion Series", "18769147"],
  ["Cleanse Your Conscience Series", "18769149"],
  ["Heart Culture Series", "18769154"],
  ["Psych-Ascension Series", "18769159"],
  ["The Last Enemy Series", "18769163"],
  ["Character of the Flesh Series", "18769177"],
  ["Teachings on Righteousness Series", "18769182"],
  ["Priesthood Series", "18769189"],
  ["Why Church? Series", "18769197"],
  ["Unending Provision Series", "18769203"],
  ["The Secret Place Series", "18769225"],
  ["The Conscience Series 2018", "18769229"],
  ["Manifest Sons of God Series", "18769241"],
  ["Ecclesiastical Purpose", "18769247"],
  ["Meta Cognition Series", "18769250"],
  ["Thel\u0113ma Series", "18769258"],
];

const FIELDS = [
  "uri",
  "type",
  "folder.uri",
  "folder.name",
  "video.uri",
  "video.name",
  "video.description",
  "video.duration",
  "video.created_time",
  "video.release_time",
  "video.modified_time",
  "video.link",
  "video.embed.html",
  "video.pictures.sizes",
  "video.user.name",
].join(",");

if (!ACCESS_TOKEN) {
  console.error("Missing VIMEO_ACCESS_TOKEN.");
  process.exit(1);
}

function getVideoId(uri = "") {
  return uri.split("/").filter(Boolean).pop();
}

function getBestThumbnail(video) {
  const sizes = video?.pictures?.sizes || [];
  const sorted = [...sizes].sort((a, b) => (b.width || 0) - (a.width || 0));
  return sorted[0]?.link || "";
}

function getEmbedUrl(video) {
  const html = video?.embed?.html || "";
  const match = html.match(/src="([^"]+)"/);
  if (match?.[1]) return match[1].replace(/&amp;/g, "&");

  const id = getVideoId(video?.uri);
  return id ? `https://player.vimeo.com/video/${id}` : "";
}

function mapVideo(video) {
  const vimeoVideoId = getVideoId(video?.uri);
  if (!video || !vimeoVideoId) return null;

  return {
    id: `vimeo_${vimeoVideoId.replace(/[^a-zA-Z0-9_-]/g, "_")}`,
    vimeoVideoId,
    embedUrl: getEmbedUrl(video),
    title: video.name || "Untitled video",
    description: video.description || "",
    publishedAt: video.release_time || video.created_time || video.modified_time || "",
    duration: video.duration || 0,
    thumbnailUrl: getBestThumbnail(video),
    speaker: video.user?.name || "WOWLife Church",
    category: "Resources",
  };
}

async function requestJson(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
    });

    const text = await response.text();
    if (response.status === 429 && attempt < 3) {
      const waitSeconds = Number(response.headers.get("retry-after") || 65);
      console.warn(`Vimeo rate limit hit. Waiting ${waitSeconds}s before retrying.`);
      await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
      continue;
    }

    if (!response.ok) {
      throw new Error(`Vimeo API ${response.status}: ${text}`);
    }

    return JSON.parse(text);
  }
}

async function pullProject(projectId, seen = new Set()) {
  if (seen.has(projectId)) return [];
  seen.add(projectId);

  const videos = [];
  let page = 1;

  while (true) {
    const params = new URLSearchParams({
      fields: FIELDS,
      per_page: "100",
      page: String(page),
      sort: "date",
      direction: "asc",
    });
    const url = `https://api.vimeo.com/users/${USER_ID}/projects/${projectId}/items?${params}`;
    const payload = await requestJson(url);
    const items = payload.data || [];

    for (const item of items) {
      if (item.type === "folder") {
        const childProjectId = getVideoId(item.folder?.uri);
        if (childProjectId) {
          videos.push(...(await pullProject(childProjectId, seen)));
        }
        continue;
      }

      if (item.type === "video") {
        const mapped = mapVideo(item.video);
        if (mapped) videos.push(mapped);
      }
    }

    if (!payload.paging?.next || items.length === 0) break;
    page += 1;
  }

  return videos;
}

function byVideoId(video) {
  return video?.vimeoVideoId || String(video?.id || "").replace(/^vimeo_/, "");
}

function nextOrder(videos) {
  const orders = videos.map((video) => Number(video.order)).filter(Number.isFinite);
  return orders.length ? Math.max(...orders) + 1 : videos.length + 1;
}

function mergeVideo(existing, fresh, order) {
  if (!existing) return { ...fresh, order };

  return {
    ...fresh,
    ...existing,
    embedUrl: fresh.embedUrl || existing.embedUrl,
    description: fresh.description || existing.description || "",
    publishedAt: fresh.publishedAt || existing.publishedAt || "",
    duration: fresh.duration || existing.duration || 0,
    thumbnailUrl: fresh.thumbnailUrl || existing.thumbnailUrl || "",
    speaker: existing.speaker || fresh.speaker || "WOWLife Church",
    category: existing.category || fresh.category || "Resources",
    order: Number.isFinite(Number(existing.order)) ? Number(existing.order) : order,
  };
}

function mergeSeries(existingSeries, freshVideos, title, projectId) {
  const existingVideos = existingSeries?.videos || [];
  const freshById = new Map(freshVideos.map((video) => [byVideoId(video), video]));
  const existingIds = new Set(existingVideos.map(byVideoId));
  const used = new Set();
  const mergedVideos = [];

  for (const existing of existingVideos) {
    const id = byVideoId(existing);
    const fresh = freshById.get(id);
    if (!fresh) {
      mergedVideos.push(existing);
      continue;
    }

    used.add(id);
    mergedVideos.push(mergeVideo(existing, fresh, nextOrder(mergedVideos)));
  }

  for (const fresh of freshVideos) {
    const id = byVideoId(fresh);
    if (used.has(id) || existingIds.has(id)) continue;
    mergedVideos.push(mergeVideo(null, fresh, nextOrder(mergedVideos)));
  }

  return {
    ...(existingSeries || {}),
    title,
    parts: mergedVideos.length,
    projectId,
    videos: mergedVideos,
  };
}

async function refreshAppResourceSeries(series) {
  const app = await readFile(APP_FILE, "utf8");
  const block = `  const RESOURCE_SERIES =   ${JSON.stringify(series, null, 4)
    .split("\n")
    .join("\n  ")};`;
  const next = app.replace(
    /  const RESOURCE_SERIES =\s+\[[\s\S]*?\n  \];\r?\n\r?\n  const state = /,
    `${block}\n\n  const state = `,
  );

  if (next === app) {
    throw new Error(`Could not replace RESOURCE_SERIES block in ${APP_FILE}`);
  }

  await writeFile(APP_FILE, next, "utf8");
}

const existing = JSON.parse(await readFile(OUTPUT_FILE, "utf8"));
const existingByTitle = new Map(existing.map((series) => [series.title, series]));
const output = [];

for (const [title, projectId] of SERIES) {
  const freshVideos = await pullProject(projectId);
  const merged = mergeSeries(existingByTitle.get(title), freshVideos, title, projectId);
  output.push(merged);
  console.log(`${title}: ${merged.videos.length} videos (${freshVideos.length} from Vimeo)`);
}

await writeFile(OUTPUT_FILE, `${JSON.stringify(output, null, 2)}\n`, "utf8");
await refreshAppResourceSeries(output);
await execFileAsync(process.execPath, ["scripts/build-mighty-embed.mjs"]);
console.log(`Synced ${output.length} resource series and rebuilt mighty-embed.html`);
