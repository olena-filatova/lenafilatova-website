// /ua/rss.xml — Ukrainian blog feed (OPS-213). See src/data/feed-lib.js.
import { buildFeed } from '../../data/feed-lib.js';

export function GET() {
  return buildFeed('ua');
}
