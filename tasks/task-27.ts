// dokończ deklarację typu ElementType, tak aby zwracał typ elementów z tablicy
// wykorzstaj operator infer

type ElementType<T> = any;

type StringArray = string[];
type NumberArray = number[];
type NotArray = string;

type Element1 = ElementType<StringArray>; // string
type Element2 = ElementType<NumberArray>; // number
type Element3 = ElementType<NotArray>;    // neve
