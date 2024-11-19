// napisz funkcję sprawdzającą czy książka jest ebookiem czy audiobookiem
// wykorzystaj kod z poprzendiego zadania
// użyj operatora in do przygotowania type guarda

function isBookEbook(book): boolean {
  // if ("format" in book) {
  //   return true;
  // }
  // return false;

  return "format" in book;
}
