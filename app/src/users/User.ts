type Email = string;

type UserType = {
  name: string;
  lastName: string;
  email: Email;
};

class User {
  private _name: string;
  private _lastName: string;
  private _email: Email;

  constructor(name: string, lastName: string, email: Email) {
    this._name = name;
    this._lastName = lastName;
    this._email = email;
  }

  public getUser(): UserType {
    return {
      name: this._name,
      lastName: this._lastName,
      email: this._email
    };
  }

  static validateEmail(email: string): boolean {
    return email.includes('@');
  }
}

User.validateEmail('ad@da.pl'); // true
User.validateEmail('ad.pl'); // false

export default User;
