import BooksList from './books/BooksList.js';
import { books as data } from './data.js';

class App {
  private appWrapper: HTMLDivElement;

  constructor(wrapper: HTMLDivElement) {
    this.appWrapper = wrapper;
    this.render();
  }

  private render() {
    this.appWrapper.appendChild(
      new BooksList(data).prepareDOMObject()
    );
  }
}

export default App;
