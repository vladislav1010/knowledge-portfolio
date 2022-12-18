import sources, { Source } from "./sources";

type Question = {
  id: number;
  question: string;
  sourcesQuestion: readonly Source[];
};

const result = [] as const;

const _test: readonly Question[] = result;

export default result;
