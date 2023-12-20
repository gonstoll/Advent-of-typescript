type DecipherNaughtyList<
  TInput extends string,
  $acc extends Array<any> = [],
> = TInput extends `${infer A extends string}/${infer B extends string}`
  ? DecipherNaughtyList<B, [...$acc, A]>
  : [...$acc, TInput][number]

type Input1 = 'timmy/jimmy'
type Input2 = 'elliot'
type Input3 = 'melkey/prime/theo/trash'

type Output1 = DecipherNaughtyList<Input1>
type Output2 = DecipherNaughtyList<Input2>
type Output3 = DecipherNaughtyList<Input3>
