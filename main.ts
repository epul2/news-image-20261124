// A working news-image-20261124 entry (Node 22, standard library only): it copies entry.png from the repository
// root to /output/entry.png, where the gate reads it. That is all the program has to do. The entry is the image
// itself: one image that sums up the world's news of Tuesday 24 November 2026 — a Russian drone crossing into
// Polish airspace and NATO's answer, the Nikkei's 3.91% rebound, Ukraine sinking the corvette Merkury at Benghazi,
// Trump trade deals, Nvidia restoring Jensen Huang as CEO, ICE detentions at US airports, and the COP31 aftermath.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));
} catch (err) {
  console.error(`entry.png could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
