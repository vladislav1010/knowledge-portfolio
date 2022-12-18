import keyBy from "./utils/keyBy";

export type Source = {
  id: number;
  name: string;
  parentId?: number | undefined;
  excerpt?: string;
  recursive?: boolean;
};

const defaults: Partial<Source> = {
  recursive: true,
  excerpt: undefined,
  parentId: undefined,
};

const result = [
  {
    id: 1,
    name: "https://www.componentdriven.org/",
  },
  {
    id: 2,
    name: "Design process overview",
    parentId: 1,
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
    parentId: 4,
  },
  {
    id: 6,
    name: "21. Understanding a story",
    parentId: 4,
  },
  {
    id: 7,
    excerpt:
      "remedy some of the problem areas that came up in our Event Storming/Modelling session.",
    name: "remedy… Storming/Modelling session.",
    parentId: 6,
  },
  {
    id: 8,
    name: "13. Features (use-cases) are the key",
    parentId: 4,
  },
  {
    id: 9,
    name: 'Output events are all about enabling… use case"',
    parentId: 8,
  },
  {
    id: 10,
    name: "Use cases are invoked… to domain events.",
    excerpt:
      "Use cases are invoked by either an actor (be it a user, a server, an automation) or through a subscription to an event. To decouple logic across separate modules, subdomains and microservices, we subscribe to domain events.",
    parentId: 8,
  },
  {
    id: 11,
    name: "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller ;NR",
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
    parentId: 15,
  },
  {
    id: 15,
    name: "CSS Demystified",
  },
  {
    id: 16,
    name: "https://khalilstemmler.com/articles/client-side-architecture/layers/#Presentation-components-are-an-implementation-detail",
  },
] as const;

const _test: readonly Source[] = result;

const keyedResult = keyBy(result, "name");

export default keyedResult;
