// One-Line Roast: The Gadget You Use Every Day
// Writes the picked roast line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch throws me a party for 10,000 steps a day, nine thousand of which are just the walk from the couch to the fridge.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
