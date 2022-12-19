import sources, { SourceWithParent } from "./sources";

type Question = {
  id: number;
  question: string;
  sourcesQuestion: readonly SourceWithParent[];
};

const result = [] as const satisfies readonly Question[];

export default result;
