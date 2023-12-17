type SantasList<
  TBadList extends ReadonlyArray<{}>,
  TGoodList extends ReadonlyArray<{}>,
> = [...TBadList, ...TGoodList]
