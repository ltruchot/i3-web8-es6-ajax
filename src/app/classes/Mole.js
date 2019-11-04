import { randomInArray } from '../helpers/random';

const colors = ['green', 'yellow', 'black', 'blue', 'rainbow'];
const sizes = ['S', 'M', 'L'];

export class Mole {
  constructor(name) {
    this.name = name;
    this.color = randomInArray(colors);
    this.size = randomInArray(sizes);
  }

  show() {
    console.log(`${this.name} is visible !`);
  }

  hide() {
    console.log(`${this.name} is hidden !`);
  }

  die() {
    console.log(`${this.name} is dead. Let's cry`);
  }
}

/*
const colors = ['green', 'yellow', 'black', 'blue', 'rainbow'];
const sizes = ['S', 'M', 'L'];
*/
export const createMole = (nom) => ({
  nom: nom,
  color: randomInArray(colors),
  size: randomInArray(sizes),
});
/*
const log = (nom, smt) => console.log(nom + smt);

const taupinambour = createMole('tau');
log(taupinambour.nom, ' est mort.');
*/
