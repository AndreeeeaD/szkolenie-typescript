import Book from './Book.js';
import { Book as BookType } from '../type.js';

class Ebook extends Book {
  _format: 'pdf' | 'epub' | 'mobi';

  constructor(book: BookType) {
    super(book);
    this._format = 'pdf';
  }

  public getFormat(): 'pdf' | 'epub' | 'mobi' {
    return this._format;
  }

  public getInfo(): string {
    return `${super.getInfo()}, Format: ${this._format}`;
  }
}

export default Ebook;
