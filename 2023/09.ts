type Reverse<TString extends string> =
  TString extends `${infer TFirstLetter}${infer TRest}`
    ? `${Reverse<TRest>}${TFirstLetter}`
    : TString
