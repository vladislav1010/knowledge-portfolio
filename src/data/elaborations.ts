import sources, { SourceWithParent } from "./sources";

type Elaboration = {
  id: number;
  sources: readonly (
    | SourceWithParent
    | readonly [SourceWithParent, { primary?: boolean }]
  )[];
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
      sources["Output events are all about enabling… use case"],
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
        "https://khalilstemmler.com/articles/client-side-architecture/layers/#Containercontroller @!recursive"
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
        { primary: true },
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
  {
    id: 6,
    elaboration: [
      "https://github.com/vladislav1010/my-turborepo; .github/contributing/style-guide.md; CSS; Руководство; 1.",
      `
      - Optimize for reader;
      - Without the explicit in-place evidence of design, readers can likely figure out this intent, though it would take a bit more digging on the part of each reader working through the code;
      - Implementation comments (the comments interspersed throughout the code itself) justify or highlight non-obvious choices, explain tricky bits, and underscore important parts of the code;
      - Consistency is what enables any engineer to jump into an unfamiliar part of the codebase and get to work fairly quickly;
      - When a codebase is internally consistent in its style and norms, engineers writing code and others reading it can focus on what’s getting done rather than how it is presented.
      `,
    ],
    sources: [sources["8. Style Guides and Rules"]],
  },
  {
    id: 7,
    elaboration: [
      "https://github.com/vladislav1010/my-turborepo/commit/d2d17659a1b480e4310ea6c64a03ba48ad5858aa; сообщение фиксации",
    ],
    sources: [
      sources["https://cbea.ms/git-commit/"],
      sources["http://who-t.blogspot.com/2009/12/on-commit-messages.html"],
    ],
  },
  {
    id: 8,
    elaboration: [""],
    sources: [
      sources["How We Figure Things Out — The Psychology of Human Action"],
    ],
  },
] as const satisfies readonly Elaboration[];

export default result;
