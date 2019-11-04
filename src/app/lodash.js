import {
  map, filter, compact, reverse, curry, fill, castArray, shuffle, concat, find,
} from 'lodash';


// map: pour transformer chaque élément d'un array
console.log(
  map([1, 2, 3, 4], a => a * 3),
);

// filter: pour ne garder qu'une partie d'un array
console.log(
  filter([1, 2, 3, 4], a => a % 2 === 0),
);

// compact: pour exclure les valeurs "vides ou nulles" d'un array (filter de truthy values)
const loic = compact([undefined, null, 'toto', 42, false, '', 'lodash <3<3<3']);
console.log(loic);

// reverse: cela inverse les éléments de mon array
const jessica = reverse(['chat', 'chien', 'crocodile']);
console.log(jessica);

// curry: ça prend une fonction avec plusieurs arguments et ca permet de la curryfier
const jordane = curry((a, b, c) => [a, b, c]);
const toto = jordane(1)(2)(3);
console.log(toto);

// fill: Remplace tous les éléments d'un array par un seul élément
const ferdawss = fill(['Chemise', 'Pantalon', 'T-shirt'], 'SOLD OUT!');
console.log(ferdawss);

// prend ce qu'on lui donne en paramètres et le met dans un tableau qu'il crée.
const lavinia = castArray('toto is the best');
console.log(lavinia);

// Crée un array avec des valeurs mélangées. Il utilise le mélange de Fisher-Yates (algorithme pour mélanger un ensemble d'objets).
const melanie = shuffle(['demain', 'le canari', 'chantera']);
console.log(melanie);

// Find : Prend le premier objet de la collection correspondant à la condition de la callback
const yasmina = find([
  { user: 'Joruchan', age: 36, active: true },
  { user: 'Aki', age: 40, active: false },
  { user: 'Yuna', age: 5, active: true },
], (a) => a.age > 37);
console.log(yasmina);

// lodash : concatener un tableau
const array1 = [1];
const array2 = [2, 3, [4, 5], [[6]]];
const sabrina = concat(array1, array2);
console.log(sabrina);
