type DayCounter<
  TStart extends number,
  TEnd extends number,
  TAcc extends number[] = [],
> = TAcc['length'] extends TEnd
  ? TAcc[number]
  : DayCounter<TStart, TEnd, [...TAcc, [TStart, ...TAcc]['length']]>
