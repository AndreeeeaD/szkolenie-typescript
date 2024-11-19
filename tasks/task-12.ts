// przygotuj typ generyczny GenericBook, który rozszerza typ Book o dodatkowe pola
// w zależności od rodzaju książki (np. Ebook, Audiobook, ...)
// dla audiobook dodaj pole duration, które reprezentuje długość nagrania w minutach oraz narrator typu string
// dla książki papierowej dodaj pole pages, które reprezentuje liczbę stron oraz weight typu number
// dla ebook dodaj pole rozmiar pliku typu number oraz dodatkowe pole link typu string

type Book = {

}

type PaperBook = {
  page: number;
  weight: number;
}

type EBook = {
  fileSize: number;
  link: string;
}

type Audiobook = {
  duration: number;
  narrator: string;
}

type GenericBook<T> = Book & T;

const ebookExample: GenericBook<EBook> = {
  fileSize: 100,
  link: 'http://example.com'
}

const audiobookExample: GenericBook<{
  duration: number;
  narrator: string;
}> = {
  duration: 100,
  narrator: 'John Doe'
}

const paperBookExample: GenericBook<PaperBook> = {
  page: 100,
  weight: 100
}
