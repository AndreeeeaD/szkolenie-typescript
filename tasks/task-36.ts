// użyj Omit aby przygotować typ BookPreview zawierający
// tylko te właściwości z typu Book, które są potrzebne 
// do wyświetlenia podglądu książki

import { Book } from '../app/src/type';


type BookPreview = Omit<Book, 'publicationDate' | 'category' | 'related'>;
