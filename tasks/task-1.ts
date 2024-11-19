// Napisz funkcję calculateArea, która przyjmuje dwa parametry:
// 	•	width (typu number),
// 	•	height (typu number),
// i zwraca ich iloczyn jako number.

type CalculateAreaFunc = (width: number, height: number) => number;

const calculateArea: CalculateAreaFunc = (width, height) => width * height;
