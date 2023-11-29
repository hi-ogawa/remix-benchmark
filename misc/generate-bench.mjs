/*
Usage:
  node misc/generate-bench.mjs
*/

import * as fs from "node:fs";

async function main() {
  const count = 100;
  const routeSource = await fs.promises.readFile(
    "misc/kentcdodds-blog.tsx",
    "utf-8"
  );

  let manyCompoentSourcePart1 = "";
  let manyCompoentSourcePart2 = "";
  for (let i = 0; i < count; i++) {
    const name = String(i).padStart(4, "0");
    await fs.promises.writeFile(`app/routes/page${name}.tsx`, routeSource);
    await fs.promises.writeFile(
      `app/components/component${name}.tsx`,
      `
        export default function Component() {
          return <div>Component${name}</div>
        }
      `
    );
    manyCompoentSourcePart1 += `import Component${name} from "../components/component${name}";\n`;
    manyCompoentSourcePart2 += `<li><Component${name} /></li>\n`;
  }

  await fs.promises.writeFile(
    `app/routes/many-components.tsx`,
    manyCompoentSourcePart1 +
      `
    export default function ManyComponentsRoute() {
      return <ul>${manyCompoentSourcePart2}</ul>
    }
  `
  );
}

main();
