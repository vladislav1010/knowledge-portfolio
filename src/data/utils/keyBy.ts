import untypedKeyBy from "lodash/keyBy";

type Join<T extends readonly [string, string] | readonly [string]> =
  T extends number
    ? `${T}`
    : T[1] extends undefined
    ? T[0]
    : `${T[0]} @${T[1]}`;

type Split<T extends string> = T extends `${infer PartA} @${infer PartB}`
  ? readonly [PartA, PartB]
  : readonly [T];

export type Temp<
  TKey extends string,
  T extends readonly Record<
    TKey,
    readonly [string, string] | readonly [string]
  >[]
> = Record<Join<T[number][TKey]>, T[number]>;

export type KeyBy<
  TKey extends string,
  T1 extends readonly Record<
    TKey,
    readonly [string, string] | readonly [string]
  >[],
  T extends Temp<TKey, T1>
> = {
  [K in keyof T]: Extract<T[K], Record<TKey, Split<string & K>>>;
};

function keyBy<
  TKey extends string,
  T1 extends readonly Record<
    TKey,
    readonly [string, string] | readonly [string]
  >[],
  T extends Temp<TKey, T1>
>(arr: T1, key: TKey): KeyBy<TKey, T1, T> {
  return untypedKeyBy(arr, key);
}

export default keyBy;
