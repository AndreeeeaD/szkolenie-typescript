// napisz funkcję wg poniższego wywołania oraz 
// dopisz typy dla argumentów i zwracanej wartości

const getFirstElement = (numbers: number[]): number => {
  const [first, ...rest] = numbers;

  return first;
};

getFirstElement([1, 2, 3]); // => 1
