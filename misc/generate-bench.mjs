/*
Usage:
  node misc/generate-bench.mjs
*/

import * as fs from "node:fs";

async function main() {
  const count = 100;
  const content = await fs.promises.readFile(
    "misc/kentcdodds-blog.tsx",
    "utf-8"
  );
  for (let i = 0; i < count; i++) {
    const name = String(i).padStart(4, "0");
    const filepath = `app/routes/page${name}.tsx`;
    await fs.promises.writeFile(filepath, content);
  }
}

main();
