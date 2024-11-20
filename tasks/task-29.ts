// przygotuj dwie funkcje do sprawdzania isAdmin oraz isUser
// w poprzednim zadaniu przygotowaliśmy type guard pod te funkcje
// uzupełnij go o brakujące typy predykatów (type predicates)

//@ts-ignore
type Jet = { jet: string }

function isJet(thing: unknown): thing is Jet {
  return typeof thing === 'object' && thing !== null && 'jet' in thing;
}

type User2 = {
  role: 'user';
}


function isUserAAA (user: any): user is User2 {
  if (typeof user === 'object' && 'role' in user && user.role === 'user') {
    return true;
  }

  return false;
}
