type AppendGood<TObj extends Record<string, any>> = {
  [TKey in keyof TObj as TKey extends string ? `good_${TKey}` : '']: TObj[TKey]
}
