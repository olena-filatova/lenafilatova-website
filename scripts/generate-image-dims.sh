#!/bin/sh
# Regenerates src/data/image-dims.json (intrinsic width/height of every file in
# public/images) — run after adding or replacing a blog image. macOS only (sips).
cd "$(dirname "$0")/.."
out=src/data/image-dims.json
echo "{" > "$out"
first=1
for f in public/images/*.jpg public/images/*.png; do
  [ -f "$f" ] || continue
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
  [ $first -eq 0 ] && echo "," >> "$out"
  printf '  "/images/%s": { "w": %s, "h": %s }' "$(basename "$f")" "$w" "$h" >> "$out"
  first=0
done
printf '\n}\n' >> "$out"
