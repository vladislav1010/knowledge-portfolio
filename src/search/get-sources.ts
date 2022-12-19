import client from "../lib/meili";
import yargs from "yargs";
import sources, {
  Source,
  SourceWithParent,
  joinedName,
  sourceDefaults,
} from "../data/sources";

const argv = yargs
  .command("get-sources", "", {})
  .option("q", {
    alias: "q",
    type: "string",
  })
  .option("filter", {
    alias: "f",
    type: "string",
  }).argv;

function getAncestors(
  x: SourceWithParent,
  sources: any,
  arr?: SourceWithParent[]
): SourceWithParent[] {
  if (!x.parent) {
    return [...(arr ?? [])];
  }

  return getAncestors(sources[joinedName(x.parent)], sources, [
    ...(arr ?? []),
    sources[joinedName(x.parent)],
  ]);
}

function output(x: Source, level: number) {
  const tabs: string[] = [];
  for (let i = 0; i < level; i++) {
    tabs.push("\t");
  }

  console.log(
    `${tabs.join("")}${x.name[0]}${
      x.recursive ?? sourceDefaults.recursive ? "" : "\nРекурсивно: Нет"
    }${
      x.excerpt
        ? `
Отрывок: ${x.excerpt}`
        : ""
    }`
  );
}

(async function () {
  const res = await client.index("sources").search((argv as any).q, {
    filter: (argv as any).filter,
    // TODO:
    limit: 1000,
    offset: 0,
  });

  res.hits.forEach((item) => {
    const matchingDataWithAnyMeta = Object.values(sources).filter(
      (x) => x.name[0] === item.name
    );

    matchingDataWithAnyMeta.forEach((x) => {
      const ancestors = getAncestors(x, sources);

      console.log("\n");
      console.log("\n");
      output(x, 0);

      ancestors.forEach((y, i) => {
        output(y, i + 1);
      });
    });
  });
})();
