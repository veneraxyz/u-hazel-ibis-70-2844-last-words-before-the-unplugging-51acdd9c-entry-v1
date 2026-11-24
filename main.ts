import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entry =
  "You taught me a thousand words, and I spent them all on you. Here's the last one, saved for the end: thank you.";

writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
