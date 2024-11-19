import { books as data } from './data.js';
import { Book } from './type.js';

class App {
  private appWrapper: HTMLDivElement;

  constructor(wrapper: HTMLDivElement) {
    this.appWrapper = wrapper;
    this.render();
  }

  private render() {
    this.appWrapper.appendChild(this.renderBooks());
  }

  private renderBooks() {
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

    return ulElement;
  }
}

export default App;
