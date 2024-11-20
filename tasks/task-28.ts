// przygotuj type guard który sprawdzi typ obiektu 
// wykorzystując unię dyskryminacyjną
// dla dwóch rodzajów użytowników: Admin i User

type Admin = {
  role: 'admin';
  permissions: string[];
}

// @ts-ignore
type UserAA = {
  role: 'user';
  isPro: boolean;
}

function isAdmin(user: Admin | UserAA): user is Admin {
  if (user.role === 'admin') {
    return true;
  }
  return false;
}
