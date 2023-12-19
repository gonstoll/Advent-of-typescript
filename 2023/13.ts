type DayCounter<
  TStart extends number,
  TEnd extends number,
  TAcc extends number[] = [],
> = TAcc['length'] extends TEnd
  ? TAcc[number] // Nope
  : DayCounter<TStart, TEnd, [...TAcc, [TStart, ...TAcc]['length']]>
