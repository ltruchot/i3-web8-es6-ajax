export class Person {
  constructor(prenom, nom) {
    this.lastname = nom;
    this.firstname = prenom;
    this.banni = false;
  }

  bannir() {
    const clone = { ...this, banni: true };
    console.log(clone);
  }
}
