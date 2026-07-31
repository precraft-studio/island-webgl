# Drop the aerial photo here

Save it as **`island-aerial.webp`** in this folder and the terrain switches from
procedural colour to the photograph automatically — no code change.

## What the photo has to be

| Requirement | Why |
|---|---|
| **Top-down (nadir), straight down** | It is projected vertically onto the terrain. An oblique shot will smear down the slopes. |
| **Island centred, square crop** | The projection assumes the island sits at the centre of a square footprint. |
| **2048×2048 or 4096×4096** | 2K is enough for the current camera distances; 4K only if you plan to fly close. |
| **Flat, overcast or high-sun light** | The scene supplies its own sun. A photo with long hard shadows fights the light sweep. |
| **WebP, quality ~82** | Keeps the file near ~300–600KB. |

## Tuning after you drop it in

In `src/webgl/IslandScene.js`:

- `uPhotoSize` — world units the photo spans. Increase if the image looks too
  zoomed-in on the island, decrease if the island doesn't fill it.
- `uDelight` — `0` keeps the photo's own shading, `1` flattens it hard.
  Start at `0.6`. Raise it if the photo's baked shadows stay visible as you
  drag the sun around; lower it if the terrain looks washed out.

Match the terrain silhouette to the photo by editing `IslandScene.height()` —
the coastline in the image should land on the coastline in the geometry.

## Licensing

Use imagery you have the right to use: a commissioned drone flight, a paid
stock licence, or a source whose terms permit commercial use. Check the licence
before shipping — "found on the internet" is not a licence.
