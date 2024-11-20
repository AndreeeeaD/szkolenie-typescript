// const newBooks = data.map((book: Book, index: number) => ({
//   ...book,
//   isRead: index % 2 === 0,
// }))

// // callback = (acc, currentItem, index, array) => {
// // return newAcc;
// //}

// // [].reduce(callback, initialValue)

// const howManyBooksWereRead = newBooks.reduce((acc: number, book: Book) => {
//   if (book.isRead) {
//     return acc + 1;
//   }
//   return acc;
// }, 0) // reduce

// const abc = newBooks.filter((book: Book) => book.title.startsWith('S')).length;

// const howManyBooksWereRead2 = newBooks.filter((book: Book) => book.isRead).length;

// const onlyCrimeBooks = data.reduce((acc: Book[], book: Book) => {
//   if (book.category === 'Crime') {
//     return [...acc, book];
//   }
//   return acc;
// }, [])

// const onlyBooksCrime = [];

// data.forEach((book: any) => {
//   if (book.category === BookCategory.Crime) {
//     onlyBooksCrime.push(book);
//   }
// });

// console.log(onlyCrimeBooks.length, onlyCrimeBooks); 

// type Computer<T> = {
//   name: string;
//   processor: Processor[];
//   ram: number;
//   hdd: number;
//   ssd: number;
//   isGaming: boolean;
// } & T;

// type Macbook = {
//   touchbar: boolean;
// } & Computer<{ wifeIsUsingIt: boolean }>;

// const mateuszComputer: Macbook = {
//   name: 'Macbook Pro',
//   processor: ['M1'],
//   ram: 16,
//   hdd: 0,
//   ssd: 512,
//   isGaming: false,
//   touchbar: true,
//   wifeIsUsingIt: false,
// }

// const mateuszSecondComputer: Computer<{ wifeIsUsingIt: boolean }> = {
//   name: 'Macbook Pro',
//   processor: ['i9', 'Ryzen 5'],
//   ram: 16,
//   hdd: 0,
//   ssd: 512,
//   isGaming: false,
//   wifeIsUsingIt: true,
// }

// type Processor = 'M1'
//   | 'M2'
//   | 'i7'
//   | 'i9'
//   | 'Ryzen 5'
//   | 'Ryzen 7'
//   | 'Ryzen 9';

// const obj = {
//   name: 'Mateusz',
//   age: 30,
//   isDeveloper: true,
// }

// if ('name' in obj) {
//   console.log(obj.name);
// }

// const value = true;

// if (typeof value === 'boolean') {
//   console.log(value);
// }

// class Person {
//   constructor(public name: string, public age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person('Mateusz', 30);

// if (person instanceof Person) {
//   console.log(person.name);
// }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const myFunction: MyFunctionType = () => 'Hello';
type MyFunctionType = () => string;
type MyAsycFuntionType = () => Promise<number>;

type ReturnTypeOfMyFunction = ReturnType<MyFunctionType>;
type ReturnTypeOfMyAsyncFunction = ReturnType<MyAsycFuntionType>;

const promise = Promise.resolve({});

type PromiseValue<T> = T extends Promise<infer R> ? R : never;

type Test = PromiseValue<typeof promise>

type Invoice = {
  type: 'INVOICE',
  number: string,
  date: Date
  positions: {
    name: string
    price: number
    quantity: number
  }[],
}
 
type Bill = {
  type: 'BILL',
  date: Date,
  totalPrice: number
}

type CompanyPurchase = Invoice | Bill;

const getPrice = (purchase: CompanyPurchase): number => {
  switch(purchase.type) {
    case 'INVOICE':
      return purchase.positions.reduce((acc, item) => acc + item.price * item.quantity, 0);
    case 'BILL':
      return purchase.totalPrice;
    default:
      return 0;
  }
}

enum Tesla {
  Model3 = 'Model 3',
  ModelS = 'Model S',
  ModelX = 'Model X',
  ModelY = 'Model Y',
}

enum FakeTesla {
  Model3 = 'Model 3',
  ModelS = 'Model S',
  ModelX = 'Model X',
  ModelY = 'Model Y',
}

declare let mytesla: Tesla;
declare let myFakeTesla: FakeTesla;

// mytesla = myFakeTesla;

function getWoodenWall(): any {
  return 2 * 10;
}

enum Wall {
  Brick,
  Wood = 10,
  Concrete,
}

const myWallObj = {
  'Brick': 0,
  'Wood': 10,
  'Concrete': 11,
  0: 'Brick',
  10: 'Wood',
  11: 'Concrete',
}

let myWall: Wall = Wall.Brick; // 0

Wall[10] 

const enum Wall2 {
  Brick,
  Wood = 10,
  Concrete,
}

let myWall2: Wall2 = Wall2.Wood; // 10

const awalsls2 = [ Wall2.Brick, Wall2.Wood, Wall2.Concrete ];
const awalsls2res = [ 0 /* Brick */, 10 /* Wood */, 11 /* Concrete */ ];

type Player = {
  readonly name: string;
  xp?: number;
}

type Player2 = {
  -readonly [K in keyof Player]-?: 
    K extends 'xp'
      ? boolean 
      : K extends 'name'
        ? string[]
        : never;
}

class TestClass {
  name: string = 'Mateusz';

  getName(test: string): string {
    return this.name;
  }
}

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type Params<T, K extends keyof T> = T[K] extends (...args: infer P) => any ? P : never; // Wyciąga parametry

type Return<T, K extends keyof T> = T[K] extends (...args: any[]) => infer R ? R : never; // Wyciąga zwracany typ

type ClassType<T> = {
  [K in FunctionKeys<T>]: (...params: Params<T, K>) => Return<T, K>;
};

type TestClassType = ClassType<TestClass>;
