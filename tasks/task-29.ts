// przygotuj dwie funkcje do sprawdzania isAdmin oraz isUser
// w poprzednim zadaniu przygotowaliśmy type guard pod te funkcje
// uzupełnij go o brakujące typy predykatów (type predicates)

//@ts-ignore
type Jet = { jet: string }

function isJet(thing: unknown): thing is Jet {
  return typeof thing === 'object' && thing !== null && 'jet' in thing;
}
