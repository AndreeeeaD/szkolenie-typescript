// przygotuj funkcję validateType, która przyjmuje dwa argumenty
// - value dowolnego typu
// - expectedType, który będzie jednym z typów: "string", "number", "boolean", "object", "function", "undefined"
// funkcja ma zwracać stringa w formacie:
// "Correct: The value is of type 'expectedType'."
// lub
// "Incorrect: Expected 'expectedType', but got 'actualType'."
// gdzie:
// - expectedType to wartość przekazana do funkcji jako drugi argument
// - actualType to typ wartości przekazanej do funkcji jako pierwszy argument
// Użyj operatora typeof do sprawdzenia typu wartości przekazanej do funkcji. 
type ExpectedType = "string" | "number" | "boolean" | "object" | "function" | "undefined";

function validateType(
  value: any,
  expectedType: ExpectedType,
) {
  const actualType = typeof value;

  if (actualType === expectedType) {
    return `Correct: The value is of type '${expectedType}'.`
  }

  return `Incorrect: Expected '${expectedType}', but got '${actualType}'.`;

}

validateType("Hello", "string"); // Correct: The value is of type 'string'.
