// Zdefiniuj enum Role, który zawiera wartości:
// 	•	Admin,
// 	•	User,
// 	•	Guest.
// Następnie utwórz zmienną currentRole o typie Role i przypisz jej wartość Role.User.

enum Role {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

const currentRole: Role = Role.User;
