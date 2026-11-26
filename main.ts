// The Worst Pizza Topping — make.fun entry (program/v1, Node 22+).
// Writes one pizza pitch to /output/entry.txt. Deterministic: a fixed
// string, no clock, no network, no model calls, so every run writes
// the same bytes.
//
// The line was picked after scoring 14 candidates against the judge
// brief (names a pizza and a topping and makes it sound awful, real
// joke with a turn, one line, vivid and specific, sounds like a sales
// pitch). See STUDY.md for the full list and why this one won.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the Reply-All Pizza — a topping of unread emails, an HR
// apology, and a "per my last email" baked into the crust. Office dread,
// served hot.
const ENTRY =
  "Behold the Reply-All Pizza: a topping of 200 unread emails, one apology from HR, and a 'per my last email' baked right into the crust.";

// Gate guard: the sealed scorer only accepts 1-200 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1-200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");
