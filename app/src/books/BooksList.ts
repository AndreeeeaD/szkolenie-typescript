import { Book as BookType } from '../type.js';
import Book from './Book.js';

interface BooksList {
  prepareDOMObject(): HTMLUListElement;
  addBook(book: BookType): void;
  getBooks(): BookType[];
  removeBook(id: number): void;
  getBook(id: number): BookType;
  getBooksByAuthor(author: string): BookType[];
}

class BooksList implements BooksList {
  private _books: BookType[];

  constructor(books: BookType[]) {
    this._books = books;
  }

  public prepareDOMObject(): HTMLUListElement {
    return this.renderBooks(document.createElement('ul'));
  };

  private renderBooks(wrapper: HTMLUListElement): HTMLUListElement {
    this._books.forEach((book: BookType) => {
      

      wrapper.appendChild(new Book(book).renderBook());
    });

    return wrapper;
  }

  public addBook(book: BookType): void {
    this._books.push(book);
  }

  public getBooks(): BookType[] {
    return this._books;
  }

  public removeBook(id: number): void {
    this._books = this._books.filter((book: BookType) => book.id !== id);
  }

  public getBook(id: number): BookType {
    const book = this._books.find((book: BookType) => book.id === id);

    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }

  public getBooksByAuthor(author: string): BookType[] {
    return this._books.filter((book: BookType) => book.author === author);
  }
}

export default BooksList;
