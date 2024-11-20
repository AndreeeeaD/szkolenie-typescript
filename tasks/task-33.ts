// przygotuj dwie funkcje:
// getUserName - która przyjmuje userId i zwraca imię i nazwisko użytkownika
// oraz getProductName - która przyjmuje productId i zwraca nazwę produktu
// productId oraz userId są stringami, ale chcielibyśmy żeby były 
// rozpatrywane nominalnie, czyli żeby nie były zamienne z innymi stringami
// użyj brandów do zdefiniowania typów UserId oraz ProductId

// type Brand<T, TBrand> = T & { __brand: TBrand };

type UserId = string & { __brand: "userId" };

function getUserName(userId: UserId) {
  return "John Doe" + userId;
}

type ProductId = string & { __brand: "productId" };

function getProductName(productId: ProductId) {
  return "Product Name";
}

const uid: UserId = "123" as UserId;

const pid: ProductId = "456" as ProductId;

getUserName(uid); // John Doe 123

