// One line, one laugh: the joke is the whole payload, nothing else is computed.
// thinking_revised v2: a quick hello, then the list does the bookkeeping and I do the ignoring.
// The to-do list takes a batch of orders and hands each one a slot on paper;
// my side of the bargain is to ignore every last one of them.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir; // the source lives here; the output goes where the harness asks

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'My to-do list and I have an understanding: it writes things down, I ignore them.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
