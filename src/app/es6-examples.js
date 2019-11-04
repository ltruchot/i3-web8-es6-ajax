const iterate = (arr) => {
  const [head, ...tail] = arr;
  console.log(head);
  if (tail.length > 0) {
    iterate(tail);
  }
};
iterate([1, 2, 3]);

const prix = 21;

const divineLumiere = {
  livre: 'La divine lumière',
  auteur: 'Eiji Yoshikawa',
  prix,
  type: 'roman',
};
console.log(divineLumiere.$);

/*
import { Person } from "./app/classes/Person";

const loic = new Person("loic", "truchot");

loic.bannir();

/* const extractName = ({ name, lastname }) => ({
  name: name,
  lastname: lastname
});

console.log(extractName(loic)); */
/* const obj = { a: 1,const  b = 2 };
const { a, b } = obj; */
/*
const livre = "La divine lumière";

const obj = {
  livre,
  auteur: "toto"
};
const { auteur } = obj;
console.log(auteur);
*/
let toto = 'ti' + 'ti';

const obj2 = {
  [toto]: 3,
};

toto += "ti";
const obj3 = {
  [toto]: 4,
};
console.log(obj2, obj3);
