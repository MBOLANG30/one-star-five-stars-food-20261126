// One Star, Five Stars for the Food — make.fun entry.
// Writes the winning one-liner to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: Earth charged me rent to breathe its air, fined me for hugging a cactus, and still served noodles so good I forgave the whole planet mid-bite.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Keep the mounted output folder itself intact; only create it if missing.
// The write is byte-exact: the 152-character sentence, no trailing newline.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
