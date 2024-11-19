import { Book, BookCategory } from './type.js';
import { books as data } from './data.js';

const app = document.getElementById('app');

if (app) {
  const ulElement = document.createElement('ul');

  data.forEach((book: Book) => {
    const liElement = document.createElement('li');
    const h2Element = document.createElement('h2');
    const pElementAuthor = document.createElement('p');
    const pElementCategory = document.createElement('p');

    liElement.appendChild(h2Element);
    liElement.appendChild(pElementAuthor);
    liElement.appendChild(pElementCategory);

    h2Element.innerText = book.title;
    pElementAuthor.innerText = book.author;
    pElementCategory.innerText = book.category;

    ulElement.appendChild(liElement);
  });

  app.appendChild(ulElement);
}

console.log(app);

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
