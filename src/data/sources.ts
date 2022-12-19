import keyBy from "./utils/keyBy";

export type Source = {
  name: readonly [name: string, meta: string] | readonly [string];
  excerpt?: string;
  recursive?: boolean;
};

function joinedName(x: SourceWithParent) {
  return x.name.length === 1 ? x.name[0] : `${x.name[0]} @${x.name[1]}`;
}

const sourceDefaults = {
  recursive: true,
} as const satisfies Partial<Source>;

const sources = [
  {
    name: ["https://www.componentdriven.org/"],
  },
  {
    name: [
      "file:///G:/YandexDisk/Books/Event%20Modeling_%20What%20is%20it_%20-%20Event%20Modeling.html",
    ],
  },
  {
    name: ["solidbook"],
  },
  {
    name: ["16. Learning the domain"],
  },
  {
    name: ["21. Understanding a story"],
  },
  {
    excerpt:
      "remedy some of the problem areas that came up in our Event Storming/Modelling session.",
    name: ["remedy… Storming/Modelling session."],
  },
  {
    name: ["13. Features (use-cases) are the key"],
  },
  {
    name: ["Output events are all about enabling… use case"],
  },
  {
    name: ["Use cases are invoked… to domain events."],
    excerpt:
      "Use cases are invoked by either an actor (be it a user, a server, an automation) or through a subscription to an event. To decouple logic across separate modules, subdomains and microservices, we subscribe to domain events.",
  },
  {
    name: [
      "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller",
      "!recursive",
    ],
    recursive: false,
  },
  {
    name: [
      "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller:~:text=is%20responsible%20for,that%20need%20it",
    ],
  },
  {
    name: [
      "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller:~:text=to%20act%20as%20the%20glue%2C%20knowing%20which%20components%20to%20load%20up%20for%20the%20features%20we%20enable%20on%20a%20page.",
    ],
  },
  {
    name: ["CSS is all about relationships"],
  },
  {
    name: ["CSS Demystified"],
  },
  {
    name: [
      "https://khalilstemmler.com/articles/client-side-architecture/layers/#Presentation-components-are-an-implementation-detail",
    ],
  },
  {
    name: ["8. Style Guides and Rules"],
  },
  {
    name: ["Software Engineering at Google"],
  },
  {
    name: ["https://cbea.ms/git-commit/"],
  },
  {
    name: ["http://who-t.blogspot.com/2009/12/on-commit-messages.html"],
  },
  {
    name: ["5. Human-Centered Design For Developers"],
  },
  {
    name: ["How We Figure Things Out — The Psychology of Human Action"],
  },
  {
    name: [
      "https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/",
    ],
  },
] as const satisfies readonly Source[];

const ks = keyBy(sources, "name");

export type SourceWithParent = Source & {
  parent?: Source;
};

const sourcesWithParent = [
  {
    ...ks["13. Features (use-cases) are the key"],
    parent: ks["solidbook"],
  },
  {
    ...ks["16. Learning the domain"],
    parent: ks.solidbook,
  },
  {
    ...ks["21. Understanding a story"],
    parent: ks.solidbook,
  },
  {
    ...ks["8. Style Guides and Rules"],
    parent: ks["Software Engineering at Google"],
  },
  {
    ...ks["remedy… Storming/Modelling session."],
    parent: ks["21. Understanding a story"],
  },
  {
    ...ks["Output events are all about enabling… use case"],
    parent: ks["13. Features (use-cases) are the key"],
  },
  {
    ...ks["Use cases are invoked… to domain events."],
    parent: ks["13. Features (use-cases) are the key"],
  },
  {
    ...ks["CSS is all about relationships"],
    parent: ks["CSS Demystified"],
  },
  {
    ...ks["How We Figure Things Out — The Psychology of Human Action"],
    parent: ks["5. Human-Centered Design For Developers"],
  },
] as const satisfies readonly SourceWithParent[];

const kst = keyBy(sourcesWithParent, "name");

const result = { ...ks, ...kst } as const;

export { sourceDefaults, joinedName };
export default result;
