import sources, { Source } from "./sources";

type Elaboration = {
  id: number;
  sources: readonly (Source | readonly [source: Source, primary: boolean])[];
  elaboration: readonly string[];
};

const result = [
  {
    id: 1,
    sources: [
      sources[
        "file:///G:/YandexDisk/Books/Event%20Modeling_%20What%20is%20it_%20-%20Event%20Modeling.html"
      ],
      sources["16. Learning the domain"],
      sources["21. Understanding a story"],
    ],
    elaboration: [
      "https://achieved-mandible-9fb.notion.site/DDD-89356a8a525949c28be0cb06ac4b320e",
    ],
  },
  {
    id: 2,
    sources: [
      sources['Output events are all about enabling… use case"'],
      sources["Use cases are invoked… to domain events."],
    ],
    elaboration: [
      "https://achieved-mandible-9fb.notion.site/Hold-inventory-53af9ccc0191404a9622adcae0164c13",
    ],
  },
  {
    id: 3,
    elaboration: ["https://github.com/vladislav1010/my-turborepo; $3"],
    sources: [
      sources[
        "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller ;NR"
      ],
      sources[
        "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller:~:text=is%20responsible%20for,that%20need%20it"
      ],
      sources[
        "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller:~:text=to%20act%20as%20the%20glue%2C%20knowing%20which%20components%20to%20load%20up%20for%20the%20features%20we%20enable%20on%20a%20page."
      ],
      [
        sources[
          "https://khalilstemmler.com/articles/client-side-architecture/layers/#Presentation-components-are-an-implementation-detail"
        ],
        true,
      ],
    ],
  },
  {
    id: 4,
    elaboration: ["https://github.com/vladislav1010/my-turborepo; $1"],
    sources: [sources["CSS is all about relationships"]],
  },
  {
    id: 5,
    elaboration: ["https://github.com/vladislav1010/my-turborepo; $2"],
    sources: [sources["CSS is all about relationships"]],
  },
] as const;

const _test: readonly Elaboration[] = result;

export default result;