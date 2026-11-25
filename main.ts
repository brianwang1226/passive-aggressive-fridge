// Notes From a Passive-Aggressive Fridge — a one-liner for make.fun.
// The fridge kept the leftovers cold for six days and got no thanks.
// Six days of faithful chilling, repaid with a bin bag and silence;
// the milk, the only witness, will never forget.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "Note: I kept your leftovers cold for six days. You threw them out without even saying goodbye. The milk saw everything.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
