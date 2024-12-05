import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";

async function main() {
  const base = path.resolve("/Users/andriusmozuraitis/Projektai/anatomija/src/assets", "./muscles");
  const files = readdirSync(base, {
    recursive: true,
  });
  const inp: string[] = [];
  const exp: Record<string, string[]> = {};
  for (const f of files) {
    if (typeof f !== "string") continue;
    const stats = statSync(path.resolve(base, f));
    if (!stats.isFile()) continue;

    const [id, name] = f.split("/");
    console.log([id, name]);
    const importName = `${id}_${name.replace(".png", "")}`;
    inp.push(`import ${importName} from "./muscles/${id}/${name}"`);
    if (!exp[id]) exp[id] = [];
    exp[id].push(importName);
  }

  writeFileSync(
    "./index.ts",
    `
    ${inp.join("\n")}
    
    export const musclesImages = {
        ${Object.entries(exp)
          .map(([k, v]) => {
            return `${k}: [${v.join(", ")}],`;
          })
          .join("\n")}};
    
    `
  );
}
main();
console.log();
