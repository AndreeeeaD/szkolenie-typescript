// zrzuć obiekt Product na typ User za pomocą force type casting

type User = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  price: number;
};

const product: Product = {
  id: 1,
  price: 100,
};

const user = product as unknown as User;
