# WOWLife Deep Dives Watch Feed

Static video-feed implementation for:

`https://wowlifeworld.net/spaces/12760353/feed`

The app uses the approved dark video-library layout and shows only WOWLife Deep Dives Vimeo content from:

`https://vimeo.com/user/157366169/folder/28602152`

Browsers should not call the Vimeo API with a private token, so the app reads `deep-dives.json`. That file must be generated from folder `28602152`; do not use the public account RSS fallback.

Refresh the file from the folder with:

```powershell
$env:VIMEO_ACCESS_TOKEN='your_vimeo_token'
node scripts/pull-vimeo-folder.mjs
```

The token must be able to read user `157366169` folder `28602152`.

Resource-series videos are curated in `resource-series.json`. To refresh Vimeo metadata while preserving the corrected site titles and order, run:

```powershell
$env:VIMEO_ACCESS_TOKEN='your_vimeo_token'
node scripts/sync-resource-series.mjs
```

The GitHub workflow `.github/workflows/sync-vimeo.yml` runs hourly and can also be started manually from GitHub Actions. Add repository secret `VIMEO_ACCESS_TOKEN`; optional repository variable `VIMEO_USER_ID` can override the default Vimeo user `157366169`. When the workflow finds new Vimeo videos, it commits the refreshed JSON, `app.js`, and `mighty-embed.html`. If Vercel is connected to this GitHub repository, that commit triggers the site deployment automatically.

## Vimeo Playback Privacy

If the player shows:

`Because of its privacy settings, this video cannot be played here.`

the Vimeo videos are not allowed to embed on the current domain. This cannot be fixed in frontend code. In Vimeo, update each video or the folder/default video settings:

1. Open the video in Vimeo.
2. Go to Settings -> Privacy.
3. Set embed permission to allow this site, or allow anywhere.
4. If using specific domains, add:
   - `wowlifeworld.net`
   - `www.wowlifeworld.net`
   - `localhost` only if testing locally

After that, the existing Vimeo iframe player in this app will play the videos on `/spaces/12760353/feed`.

## Files

- `index.html` - app shell
- `styles.css` - responsive video-library/watch styling
- `app.js` - filters, grid, and watch player
- `deep-dives.json` - Vimeo Deep Dives data snapshot
- `scripts/pull-vimeo-folder.mjs` - pulls folder contents from Vimeo into `deep-dives.json`
- `scripts/sync-resource-series.mjs` - appends new Vimeo resource-series videos while preserving curated titles and order

Host these files so `/spaces/12760353/feed` serves `index.html`. The internal watch route uses URL hashes, for example `#/watch/vimeo_1006496941`, so it does not require server-side routing rules.
