// Zdefiniuj funkcję assertNever, która przyjmuje argument value typu never. 
// Następnie napisz kod zawierający wyliczenie (enum) i funkcję, która wykorzysta typ never 
// w celu upewnienia się, że wszystkie przypadki są obsłużone.

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}

function assertNever(): never {
  throw new Error('Never');
}

function handleStatus(status: Status): string {
  switch(status) {
    case Status.Active:
      return 'active';
    case Status.Inactive:
      return 'inactive';
    default:
      return assertNever();
  }
}

