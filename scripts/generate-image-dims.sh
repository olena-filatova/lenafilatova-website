#!/bin/sh
# Regenerates src/data/image-dims.json (intrinsic width/height of every file in
# public/images and public/recipes/images) — run after adding or replacing a
# blog or recipe image. macOS only (sips).
#
# Two consumers: BlogPostBody reserves layout space from these numbers, and
# BaseLayout picks the Twitter card shape from the aspect ratio, so recipe
# photos have to be in here too.
cd "$(dirname "$0")/.."
out=src/data/image-dims.json
echo "{" > "$out"
first=1
# .jpeg as well as .jpg: seven recipe photos carry the four-letter extension and
# were silently absent from the manifest until OPS-360, so their pages reserved
# no layout space and their Twitter card shape fell back to the default.
# public/images/cards is included (OPS-415) because BaseLayout picks the Twitter
# card shape from this manifest: /ua/meal-plan/ is the first Astro page to point
# og:image at a generated 1200x630 card, and with the cards absent it fell back
# to `summary` — declaring a wide banner as a small square thumbnail, the exact
# mismatch the fallback exists to avoid. The tool pages in public/ are unaffected
# either way; their <head> is hand-written and names twitter:card itself.
for f in public/images/*.jpg public/images/*.jpeg public/images/*.png \
         public/images/cards/*.jpg \
         public/recipes/images/*.jpg public/recipes/images/*.jpeg public/recipes/images/*.png; do
  [ -f "$f" ] || continue
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
  [ $first -eq 0 ] && echo "," >> "$out"
  printf '  "%s": { "w": %s, "h": %s }' "${f#public}" "$w" "$h" >> "$out"
  first=0
done
printf '\n}\n' >> "$out"
