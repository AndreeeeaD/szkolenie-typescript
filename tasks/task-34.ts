// przygotuj typ Price techniką flavoring'u, który będzie zawierał
// dwie właściwości: amount oraz currency

type Price = {
  amount: number;
  currency: string;
} & { __flavor?: 'price' };
