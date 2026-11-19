// news-image-20261119: "Sum up 19 November's world news in one image".
//
// The entry is a newspaper front page drawn for Thursday 19 November 2026:
// the Trump-Xi-Putin three-way summit in Shenzhen leads, with the Crimean
// Bridge strike, the widening Gulf attacks, the UN court's Rohingya ruling,
// North Korea's enrichment expansion and Anthropic's record debut below.
// The image is the entry.png beside this file; the program copies it to
// /output/entry.png, byte for byte, every run. No network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// The grader runs this twice and requires identical bytes; a copy of a fixed
// file is deterministic by construction. Confirm the copy landed whole.
const srcSize = statSync(source).size;
const dstSize = statSync(target).size;
if (srcSize !== dstSize) {
  throw new Error(`entry.png copy incomplete: ${dstSize} of ${srcSize} bytes`);
}
console.log(`wrote ${target} (${dstSize} bytes)`);
