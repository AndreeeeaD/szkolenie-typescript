// użyj typu Record do zdefiniowania typu, 
// który będzie zawierał informacje o książkach
// jako klucze użyj ISBN książki (ISBN to unikalny numer identyfikacyjny książki),
// a jako wartość użyj obiektu, który będzie zawierał informacje o książce

type Brand<K, T> = K & { __brand: T };

type ISBN = Brand<string, 'isbn'>;

type BookWithIsbn = {
  title: string;
}

// @ts-ignore
type BookInfo = Record<ISBN, BookWithIsbn>;

const titleBookisbn: ISBN = '1234567890' as ISBN;

const books: BookInfo = {
  [titleBookisbn]: {
    title: 'Title',
  }
};

type Action<T = string, P = {}> = { type: T, payload: P }

type Store = {
  dispatch<T, P>(action: Action<T, P>): void;
};

declare const store: Store;

const INCREMENT_COUNTER_ACTION = 'INCREMENT COUNTER';

const incrementCounter = (
  value: number
): Action<
  typeof INCREMENT_COUNTER_ACTION,
  { value: number }
> => ({ type: INCREMENT_COUNTER_ACTION, payload: { value }})

store.dispatch(incrementCounter(10));
