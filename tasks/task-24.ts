// zastąp pole prywatne (TS) isbn w klasie Book polem prywatnym (ES) 

class B {
  #jet: string;

  constructor(jet: string) {
    this.#jet = jet;
  }

  public getJet(): string {
    return this.#jet;
  }
}

new B('jet').getJet(); // jet
new B('jet').#jet; // Property '_jet' is private and only accessible within class 'B'.
