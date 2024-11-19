// popraw poniższą funkcję tak, aby działała poprawnie
// padding ma być stringiem złożonym z "_" o długości 
// równej wartości przekazanej w pierwszym argumencie
// np. padLeft(5, "Hello") => "_____Hello" gdy pierwszy argument jest liczbą
// lub padLeft("abc", "Hello") => "abcHello" gdy pierwszy argument jest stringiem

function padLeft(padding: number | string, input: string): string {
  return "_".repeat(padding);
  // Argument of type 'string | number' is not assignable to parameter of type ‚number'.
  // Type 'string' is not assignable to type 'number'.
}
