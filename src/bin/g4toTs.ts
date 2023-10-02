import * as fs from "fs";
import { join as pathJoin, basename as pathBasename } from "path";

const libDirPath = pathJoin(__dirname, "..", "lib");

const fileBasename = "Vtl.g4";

const vlt_g4_raw = fs
  .readFileSync(pathJoin(libDirPath, fileBasename))
  .toString("utf8");

fs.writeFileSync(
  pathJoin(libDirPath, "generated", `${fileBasename}.ts`),
  Buffer.from(
    [
      `// generated by ${pathBasename(__filename)}`,
      `const _default = \`${vlt_g4_raw}\`;`,
      "export default _default;",
    ].join("\n"),
    "utf8"
  )
);
