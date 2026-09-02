/**
 * Responsive image pipeline (OPS-305).
 *
 * Walks the two raster trees under public/ and, for every photograph, writes
 * AVIF copies at a small ladder of widths into a sibling `v/` folder. The
 * originals are never touched: they stay exactly where the markup and the
 * share tags point, and remain the <img> fallback.
 *
 * AVIF only, deliberately. A WebP tier was built and measured first and cost
 * another 19 MB — more than the AVIF ladder itself — to serve the shrinking
 * slice of browsers that take WebP but not AVIF. Those visitors get the
 * original JPEG instead, which is exactly what every visitor gets today, so
 * nobody is worse off than before this change. The deploy workflow's own
 * comment asks us to keep the built artifact small (a 10-minute cap in
 * actions/deploy-pages that cannot be raised; see OPS-205), and 19 MB is a
 * poor trade against that.
 *
 * The manifest it emits (src/data/image-variants.json) is what <Picture> reads
 * at build time to decide which <source> rows it can honestly offer. An image
 * missing from the manifest simply renders as a plain <img>, which is why a
 * hero Lena has not supplied yet costs nothing here.
 *
 *   node scripts/build-images.mjs           # incremental, skips fresh output
 *   node scripts/build-images.mjs --force   # re-encode everything
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');
const MANIFEST = path.join(ROOT, 'src/data/image-variants.json');

// Source trees. Anything outside these (favicons, the OG fallbacks, SVG) is
// deliberately left alone — it is either already tiny or not a photograph.
const TREES = ['images', 'recipes/images'];

// public/images/cards holds the share cards. Those are only ever fetched by
// Facebook, X and the like through og:image, and those crawlers want the JPEG
// the tag names — they will not look at a <picture> or an AVIF sibling. So a
// ladder here would be pure weight in the deploy artifact for no reader.
const SKIP_DIRS = new Set(['cards']);

// The ladder, picked from the layout rather than from habit. The reading
// column is 592px and figures break out to 712px; cards sit around 340px.
// So: 480 covers a card at 1x and a small phone, 800 covers a card at 2x and
// a hero at 1x, and 1200 covers a hero on a retina desktop. 1200 is the top
// rung because no source in the repo is wider, and upscaling would add bytes
// without adding a single pixel of detail.
const WIDTHS = [480, 800, 1200];

// Below this a single file is already smaller than the HTTP overhead of
// choosing between three, so we skip the image entirely.
const MIN_WIDTH = 500;

const RASTER = /\.(jpe?g|png)$/i;
const force = process.argv.includes('--force');

// Quality settings, picked by measuring this repo's own photographs rather than
// by copying defaults: at these values a 1200px hero lands around 60% smaller
// as AVIF than as the JPEG it replaces, with no visible artefacts on skin or
// on the flat studio backgrounds most of the recipe shots use.
const AVIF = { quality: 50, effort: 4 };

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'v' || entry.name.startsWith('.')) continue;
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (RASTER.test(entry.name)) out.push(full);
  }
  return out;
}

// Only re-encode when the source is newer than the variant. A full run over
// this repo is a couple of minutes; an incremental one is instant, which is
// what makes it safe to leave wired into `npm run build`.
const stale = (src, out) => {
  if (force || !fs.existsSync(out)) return true;
  return fs.statSync(src).mtimeMs > fs.statSync(out).mtimeMs;
};

const manifest = {};
let written = 0, skipped = 0, bytesOut = 0, bytesIn = 0;

for (const tree of TREES) {
  for (const file of walk(path.join(PUBLIC, tree))) {
    const meta = await sharp(file).metadata();
    const rel = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
    bytesIn += fs.statSync(file).size;

    if (!meta.width || meta.width < MIN_WIDTH) { skipped++; continue; }

    const dir = path.join(path.dirname(file), 'v');
    fs.mkdirSync(dir, { recursive: true });
    const base = path.basename(file).replace(RASTER, '');

    // Never upscale, and never emit two rungs that resolve to the same width.
    // A source narrower than the second rung also gets one at its own width,
    // so a small picture is not left with only an undersized copy to offer.
    const rungs = [...new Set(WIDTHS.filter((w) => w <= meta.width).concat(
      meta.width < WIDTHS[1] ? [meta.width] : []
    ))].sort((a, b) => a - b);

    const entry = { w: meta.width, h: meta.height, avif: [] };

    for (const w of rungs) {
      const out = path.join(dir, `${base}-${w}.avif`);
      if (stale(file, out)) {
        await sharp(file).resize({ width: w, withoutEnlargement: true }).avif(AVIF).toFile(out);
        written++;
      }
      bytesOut += fs.statSync(out).size;
      entry.avif.push([w, '/' + path.relative(PUBLIC, out).split(path.sep).join('/')]);
    }
    manifest[rel] = entry;
  }
}

// Sweep out variants that no longer belong to any current rung — a source
// deleted or renamed, or the ladder itself changed. Without this the `v`
// folders only ever grow, and stale files ship in the deploy artifact for
// nothing (they did, once, while this script was being written).
const wanted = new Set(
  Object.values(manifest).flatMap((e) => e.avif.map(([, rel]) => path.join(PUBLIC, rel)))
);
let pruned = 0;
const variantDirs = (dir) => {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name === 'v') out.push(full);
    else out.push(...variantDirs(full));
  }
  return out;
};
for (const tree of TREES) {
  for (const dir of variantDirs(path.join(PUBLIC, tree))) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (!wanted.has(full)) { fs.unlinkSync(full); pruned++; }
    }
    if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  }
}

const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');

const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
console.log(
  `images: ${Object.keys(sorted).length} covered, ${skipped} too small to bother with\n` +
  `variants: ${written} encoded this run, ${pruned} stale removed\n` +
  `originals ${mb(bytesIn)} -> variants ${mb(bytesOut)}`
);
