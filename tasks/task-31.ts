// napisz mapped type który stworzy kopie obiektu Book
// nazwij ją FrozenBook
// ale z polami które są readonly (+readonly)

import { Book } from '../app/src/type';

type FrozenBook = {
  +readonly[K in keyof Book]: Book[K];
}
