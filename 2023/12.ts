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
