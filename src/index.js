import {
  merge, reduce, reject, equals, splitEvery,
  sort, dropLast, juxt, descend, prop, takeWhile, repeat,
} from 'ramda';

import { users } from './data/humans';


const mergeMultiple = (...objs) => reduce(merge, {})(objs);
const loic = mergeMultiple({ nom: 'toto', age: 10 }, { age: 40, taille: 176 }, { age: 34 }, { toot: 3 });
console.log(loic);


const tb = [1, 2, 30];
const enlever = reject(equals(30), tb);
console.log(enlever);

const motTroisLettres = splitEvery(3, 'précléarcfoicoqsonp');
console.log(motTroisLettres);

const byAge = descend(prop('age'));
const people = [
  { name: 'Mélanie', age: 23 },
  { name: 'Jessica', age: 28 },
  { name: 'Lavinia', age: 35 },
  { name: 'Lucie', age: 83 },
  { name: 'Julia', age: 59 },
];
const peopleByOldestFirst = sort(byAge, people);
console.log(peopleByOldestFirst);

// jette le dernier élèment de la list ou a partir du dernier élèment selon le nombre donnée
const twoItems = dropLast(1, ['Pikachu', 'Carapuce', 'Miaouss']);
const guess = dropLast(2, 'bouhaueiuAieboauebo');
console.log(twoItems);
console.log(guess);

const double = (a) => a * 2;
const square = (a) => a * a;
const doubledAndSquared = juxt([double, square]);
console.log(doubledAndSquared(10));

const words = ['star', 'toto', "l'enfant", 'le soleil', 'la libre', 'star'];
const answer = takeWhile(x => !x.startsWith('l'), words);
console.log(answer);

const arr = 2;
console.log(repeat(arr, 4));
