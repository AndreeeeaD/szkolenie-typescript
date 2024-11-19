import { Book as BookType } from '../type.js';

class Book {
  private _isbn: string;
  private _title: string;
  private _author: string;
  private _publicationDate: Date | string;
  
  constructor(book: BookType) {
    this._isbn = '1234567890';
    this._title = book.title;
    this._author = book.author;
    this._publicationDate = book.publicationDate;
  }


  public getISBN(): string {
    return this._isbn;
  }
  
  public getInfo(): string {
    return `ISBN: ${this._isbn}, Title: ${this._title}, Author: ${this._author}, Publication date: ${this._publicationDate}`;
  }

  public renderBook(): HTMLLIElement {
    const liElement = document.createElement('li');
    const h2Element = document.createElement('h2');
    const pElementAuthor = document.createElement('p');

    liElement.appendChild(h2Element);
    liElement.appendChild(pElementAuthor);

    h2Element.innerText = this._title;
    pElementAuthor.innerText = this._author;

    return liElement;
  }
}

export default Book;
