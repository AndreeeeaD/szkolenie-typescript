// dodaj typy do poniższej funkcji

type CalculateAreaObj = {
  width: number;
  height: number;
  calculateArea2(): number;
}

function calculateArea2(this: CalculateAreaObj): number {
  return this.width * this.height;
}

const rectangle = { width: 5, height: 10, calculateArea2 };

console.log(rectangle.calculateArea2()); // 50
