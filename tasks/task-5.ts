// Utwórz typ Coordinates, który reprezentuje punkt w przestrzeni 2D:
// 	•	x - number,
// 	•	y - number.
// Następnie stwórz funkcję distance, która przyjmuje dwa obiekty typu Coordinates i zwraca odległość między nimi.
//
// d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}

type Coordinates = {
  x: number;
  y: number;
}

type DistanceFunc = (a: Coordinates, b: Coordinates) => number;

const distance: DistanceFunc = (a, b) => {
  const xdiff = b.x - a.x;
  const ydiff = b.y - a.y;

  return Math.sqrt(xdiff ** 2 + ydiff ** 2);
}
