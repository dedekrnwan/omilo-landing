# Omilo animated pet bundle

Raster animations for `omilo-os` and `omilo-os-landing`, based on the existing
indigo Omilo mascot and gold sparkle. Artwork generated with the built-in
image-generation tool; this bundle contains no SVG artwork.

## Files

- `omilo-sprites.png`: transparent 4-column, 4-row sprite atlas.
- `omilo-idle.webp`, `omilo-jump.webp`, `omilo-greet.webp`, `omilo-think.webp`:
  transparent looping animations.
- `frames/<state>/00.png` through `03.png`: individual transparent frames.
- `manifest.json`: cell dimensions, row indices, and frame timings in milliseconds.
- `preview.gif`: all four states on a light background for review.
- `index.html`: browser preview with state selection and reduced-motion support.

## Use in either project

Copy the desired WebP files and a still PNG into the project's public assets.
An ordinary image element plays each WebP without an animation library:

```html
<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="/pets/omilo/idle.png">
  <img src="/pets/omilo/omilo-idle.webp" width="128" height="128" alt="Omilo">
</picture>
```

Copy `frames/idle/00.png` as `idle.png` for that static fallback. To change state,
change the image's source to another animation. For precise timing or one-shot
playback, use the individual PNG frames with the durations in the manifest.

These are the project animations. A separate ChatGPT Work pet named Omilo has also been created and verified.

## Rebuild

With Pillow installed, run `python3 build.py /absolute/path/to/generated-atlas.png`.
The packaging script preserves the generated pixels and checks transparency,
nonempty cells, and the encoded WebP frame counts. Visual motion quality must
also be checked in the browser preview.
