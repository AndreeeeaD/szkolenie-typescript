// popraw poniższą funkcję tak, aby działała poprawnie
// padding ma być stringiem złożonym z "_" o długości 
// równej wartości przekazanej w pierwszym argumencie
// np. padLeft(5, "Hello") => "_____Hello" gdy pierwszy argument jest liczbą
// lub padLeft("abc", "Hello") => "abcHello" gdy pierwszy argument jest stringiem

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return `${"_".repeat(padding)}${input}`;
  }

  return `${padding}${input}`;
}
 