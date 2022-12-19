import client from "../lib/meili";
import sources, { Source, SourceWithParent } from "../data/sources";

const stringifyName = (name: readonly [string, string] | readonly [string]) => {
  return name.length === 1 ? name[0] : name[0];
};

(async function () {
  await client.createIndex("sources");

  await client.index("sources").deleteAllDocuments();

  await client.index("sources").updateFilterableAttributes(["name"]);

  const res = await client.index("sources").addDocuments(
    Object.values(sources)
      .reduce(([res, id], s) => [[...res, { ...s, id }], id + 1] as const, [
        [],
        1,
      ] as readonly [readonly SourceWithParent[], number])[0]
      .map((s) => ({
        ...s,
        name: stringifyName(s.name),
        parent: (s as Source & { id: number; parent?: { id: number } & Source })
          .parent?.id,
      }))
  );

  console.log(res.taskUid);
})();
