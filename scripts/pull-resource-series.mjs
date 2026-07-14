import { writeFile } from "node:fs/promises";

const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;
const USER_ID = process.env.VIMEO_USER_ID || "157366169";
const OUTPUT_FILE = process.env.RESOURCE_OUTPUT_FILE || "resource-series.json";

const SERIES = [
  ["CMS Redux", 21, "28762467"],
  ["Cornerstone Reflections", 7, "27501854"],
  ["WOWLife Uncut", 11, "22626065"],
  ["Theos & Theory", 2, "24867004"],
  ["WOW Online Church (WOC) Teachings", 16, "26036833"],
  ["Conscience Series (2023)", 12, "16420145"],
  ["The Wildcard Series [New]", 4, "22118326"],
  ["Purpose Series", 4, "16434018"],
  ["Law & Grace", 16, "16434021"],
  ["Righteousness by faith", 3, "16435177"],
  ["Crash Course", 16, "16513411"],
  ["The Vast Mind of Christ", 24, "16435194"],
  ["Jesus the Man", 4, "16435183"],
  ["Wisdom Series", 9, "16435184"],
  ["New Creation Reality", 11, "16435187"],
  ["Ego Man", 7, "16556164"],
  ["Emotional Alchemy", 5, "16556407"],
  ["Rise of the SHE", 8, "16556166"],
  ["Who is Satan", 8, "16605806"],
  ["Synchronized Knowledge", 14, "17360611"],
  ["Awaken to Righteousness (South Africa)", 3, "18769102"],
  ["Communion Series", 6, "18769103"],
  ["The New Grace Series", 15, "18769105"],
  ["Patience Series", 3, "18769108"],
  ["Conscience Series 2015", 4, "18769111"],
  ["Spirit of Mammon", 2, "18769119"],
  ["Blessings In Grace Series", 9, "18769124"],
  ["Faith Series", 12, "18769133"],
  ["Lasting Life Series", 17, "18769136"],
  ["Lords of The Earth Series", 6, "18769138"],
  ["Prosperity Gospel Series", 9, "18769143"],
  ["The Power of Communion Series", 3, "18769147"],
  ["Cleanse Your Conscience Series", 6, "18769149"],
  ["Heart Culture Series", 12, "18769154"],
  ["Psych-Ascension Series", 6, "18769159"],
  ["The Last Enemy Series", 7, "18769163"],
  ["Character of the Flesh Series", 7, "18769177"],
  ["Teachings on Righteousness Series", 6, "18769182"],
  ["Priesthood Series", 12, "18769189"],
  ["Why Church? Series", 3, "18769197"],
  ["Unending Provision Series", 3, "18769203"],
  ["The Secret Place Series", 3, "18769225"],
  ["The Conscience Series 2018", 10, "18769229"],
  ["Manifest Sons of God Series", 4, "18769241"],
  ["Ecclesiastical Purpose", 13, "18769247"],
  ["Meta Cognition Series", 9, "18769250"],
  ["Thelēma Series", 4, "18769258"],
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

const output = [];

for (const [title, parts, projectId] of SERIES) {
  const videos = (await pullProject(projectId)).slice(0, parts);
  output.push({ title, parts, projectId, videos });
  console.log(`${title}: ${videos.length}/${parts}`);
}

await writeFile(OUTPUT_FILE, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Wrote ${output.length} series to ${OUTPUT_FILE}`);
