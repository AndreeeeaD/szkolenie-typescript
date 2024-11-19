// Stwórz typ ApiResponse, który reprezentuje odpowiedź z API:
// 	•	Pole data - może być typu string lub null,
// 	•	Pole error - może być typu string lub undefined.
// Zadeklaruj zmienną response o typie ApiResponse i przypisz jej obiekt z odpowiednimi wartościami.

type ApiResponse = {
  data: string | null;
  error?: string;
}

const response: ApiResponse = {
  data: 'some data',
  error: 'some error'
};
