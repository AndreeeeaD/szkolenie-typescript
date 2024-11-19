
export enum BookCategory {
  Crime = 'Crime',
  Biography = 'Biography',
  Romance = 'Romance',
  Reportage = 'Reportage',
}

export type BookTitle = string;

export type Book = {
  id?: number,
  title: BookTitle,
  author: string,
  publicationDate: Date | string,
  category: BookCategory,
  related: BookTitle[],
  isRead?: boolean,
}
