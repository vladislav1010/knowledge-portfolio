import keyBy, { KeyBy, Temp } from "./utils/keyBy";

export type Source = {
  id: number;
  name: string;
  excerpt?: string;
  recursive?: boolean;
};

const sourceDefaults = {
  recursive: true,
} as const satisfies Partial<Source>;

const sources = [
  {
    id: 1,
    name: "https://www.componentdriven.org/",
  },
  {
    id: 3,
    name: "file:///G:/YandexDisk/Books/Event%20Modeling_%20What%20is%20it_%20-%20Event%20Modeling.html",
  },
  {
    id: 4,
    name: "solidbook",
  },
  {
    id: 5,
    name: "16. Learning the domain",
  },
  {
    id: 6,
    name: "21. Understanding a story",
  },
  {
    id: 7,
    excerpt:
      "remedy some of the problem areas that came up in our Event Storming/Modelling session.",
    name: "remedy… Storming/Modelling session.",
  },
  {
    id: 8,
    name: "13. Features (use-cases) are the key",
  },
  {
    id: 9,
    name: 'Output events are all about enabling… use case"',
  },
  {
    id: 10,
    name: "Use cases are invoked… to domain events.",
    excerpt:
      "Use cases are invoked by either an actor (be it a user, a server, an automation) or through a subscription to an event. To decouple logic across separate modules, subdomains and microservices, we subscribe to domain events.",
  },
  {
    id: 11,
    name: "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller; NR",
    recursive: false,
  },
  {
    id: 12,
    name: "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller:~:text=is%20responsible%20for,that%20need%20it",
  },
  {
    id: 13,
    name: "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller:~:text=to%20act%20as%20the%20glue%2C%20knowing%20which%20components%20to%20load%20up%20for%20the%20features%20we%20enable%20on%20a%20page.",
  },
  {
    id: 14,
    name: "CSS is all about relationships",
  },
  {
    id: 15,
    name: "CSS Demystified",
  },
  {
    id: 16,
    name: "https://khalilstemmler.com/articles/client-side-architecture/layers/#Presentation-components-are-an-implementation-detail",
  },
  {
    id: 17,
    name: "8. Style Guides and Rules",
  },
  {
    id: 18,
    name: "Software Engineering at Google",
  },
  {
    id: 19,
    name: "https://cbea.ms/git-commit/",
  },
  {
    id: 20,
    name: "http://who-t.blogspot.com/2009/12/on-commit-messages.html",
  },
] as const;

const ks = keyBy(sources, "name");

export type SourcesWithParent = readonly (Source & {
  parent?: Source;
})[];

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
    ...ks['Output events are all about enabling… use case"'],
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
] as const;

const kst = keyBy(sourcesWithParent, "name");

const result = { ...ks, ...kst } as const satisfies KeyBy<
  "name",
  SourcesWithParent,
  Temp<"name", SourcesWithParent>
>;

export { sourceDefaults };
export default result;
