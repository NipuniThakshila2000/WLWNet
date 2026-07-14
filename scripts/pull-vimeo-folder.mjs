import { writeFile } from "node:fs/promises";

const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;
const USER_ID = process.env.VIMEO_USER_ID || "157366169";
const FOLDER_ID = process.env.VIMEO_FOLDER_ID || "28602152";
const OUTPUT_FILE = process.env.VIMEO_OUTPUT_FILE || "deep-dives.json";
const SOURCE = process.env.VIMEO_SOURCE || "folder";

const VIDEO_FIELDS = [
  "uri",
  "name",
  "description",
  "duration",
  "created_time",
  "release_time",
  "modified_time",
  "link",
  "embed.html",
  "pictures.sizes",
  "user.name",
].join(",");

const FOLDER_ITEM_FIELDS = [
  "uri",
  "type",
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
  console.error("Create a Vimeo API access token that can read folder 28602152, then run:");
  console.error("  $env:VIMEO_ACCESS_TOKEN='your_token'; node scripts/pull-vimeo-folder.mjs");
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

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/vnd.vimeo.*+json;version=3.4",
    },
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Vimeo API ${response.status}: ${text}`);
  }

  return JSON.parse(text);
}

function mapVideo(video) {
  const vimeoVideoId = getVideoId(video?.uri);
  if (!video || !vimeoVideoId) return null;

  return {
    id: `vimeo_${vimeoVideoId}`,
    vimeoVideoId,
    embedUrl: getEmbedUrl(video),
    title: video.name || "Untitled video",
    description: video.description || "",
    publishedAt: video.release_time || video.created_time || video.modified_time || "",
    duration: video.duration || 0,
    thumbnailUrl: getBestThumbnail(video),
    speaker: video.user?.name || "WOWLife Church",
    category: "Deep Dives",
  };
}

async function pullVideos() {
  const videos = [];
  let page = 1;

  while (true) {
    const params = new URLSearchParams({
      fields: SOURCE === "account" ? VIDEO_FIELDS : FOLDER_ITEM_FIELDS,
      filter: "video",
      per_page: "100",
      page: String(page),
      sort: "date",
      direction: "desc",
    });
    const url =
      SOURCE === "account"
        ? `https://api.vimeo.com/users/${USER_ID}/videos?${params}`
        : `https://api.vimeo.com/users/${USER_ID}/projects/${FOLDER_ID}/items?${params}`;
    const payload = await requestJson(url);
    const items = payload.data || [];

    for (const item of items) {
      const video = SOURCE === "account" ? item : item.video;
      const mapped = mapVideo(video);
      if (mapped) videos.push(mapped);
    }

    if (!payload.paging?.next || items.length === 0) break;
    page += 1;
  }

  return videos;
}

const videos = await pullVideos();
await writeFile(OUTPUT_FILE, `${JSON.stringify(videos, null, 2)}\n`, "utf8");
console.log(`Wrote ${videos.length} videos to ${OUTPUT_FILE}`);
