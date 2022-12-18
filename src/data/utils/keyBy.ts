import untypedKeyBy from "lodash/keyBy";

export type Temp<
  TKey extends string,
  T extends readonly Record<TKey, string | number>[]
> = Record<T[number][TKey], T[number]>;

export type KeyBy<
  TKey extends string,
  T1 extends readonly Record<TKey, string | number>[],
  T extends Temp<TKey, T1>
> = {
  [K in keyof T]: Extract<T[K], Record<TKey, K>>;
};

function keyBy<
  TKey extends string,
  T1 extends readonly Record<TKey, string | number>[],
  T extends Temp<TKey, T1>
>(arr: T1, key: TKey): KeyBy<TKey, T1, T> {
  return untypedKeyBy(arr, key);
}

export default keyBy;
