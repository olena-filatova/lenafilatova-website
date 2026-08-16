// The Ukrainian search index — see search-index-en.json.js for the rationale.
// Split by language so a visitor downloads one language's content, not both.
import { buildDocs } from '../data/search-lib.js';

export function GET() {
  return new Response(JSON.stringify(buildDocs('ua')), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
