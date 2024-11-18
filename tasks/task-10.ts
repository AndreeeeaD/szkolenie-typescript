// dodaj typy do poniższej funkcji


function calculateArea() {
  return this.width * this.height;
}

const rectangle = { width: 5, height: 10, calculateArea };

console.log(rectangle.calculateArea()); // 50
