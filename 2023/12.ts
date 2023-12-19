type PopTuple<TList extends Array<any>> = TList extends [
  ...infer Head,
  infer Rest,
]
  ? Head
  : never

type LastItem<TList extends Array<any>> = TList extends [
  ...infer Head,
  infer Rest,
]
  ? Rest
  : never

type FindSanta<TList extends Array<any>> = LastItem<TList> extends '🎄'
  ? PopTuple<TList> extends infer Rest extends Array<any>
    ? Rest['length'] extends 0
      ? never
      : FindSanta<Rest>
    : never
  : PopTuple<TList> extends infer Rest extends Array<any>
  ? Rest['length']
  : never

// TKdodo's solution, which I think is phenomenal
// (https://github.com/TkDodo/aot-2023/blob/main/12.ts)
type FindSanta2<
  TForest extends Array<any>,
  Acc extends Array<any> = [],
> = TForest extends [infer Head, ...infer Tail]
  ? Head extends '🎅🏼'
    ? Acc['length']
    : FindSanta2<Tail, [...Acc, Head]>
  : never
