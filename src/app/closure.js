/* eslint-disable no-var */
import {
  pipe, filter, map, prop, pluck, uniq, sort, reverse,
} from 'ramda';

const vetements = [
  { nom: 'chemise', taille: 'L' },
  { nom: 'chemise', taille: 'XL' },
  { nom: 'chemise', taille: 'XL' },
  { nom: 'chemise', taille: 'S' },
  { nom: 'jean', taille: 'S' },
  { nom: 'jean', taille: 'M' },
];


const keepChemise = filter(el => el.nom === 'chemise');

const sortTaille = sort((a, b) => {
  const correctSizeOrder = ['S', 'M', 'L', 'XL'];
  return correctSizeOrder.indexOf(a) - correctSizeOrder.indexOf(b);
});

const getTaillesChemises = pipe(
  keepChemise,
  pluck('taille'),
  uniq,
  sortTaille,
  reverse,
);

console.log(getTaillesChemises(vetements));

const animal = {
  categorie: 'animal',
  son: 'grogne',
  dormir() {
    console.log('ZZZzzzzzZZZ');
  },
  parler() {
    console.log(this.son);
  },
};
animal.parler();

const chat = Object.create(animal, { son: { value: 'miaou' } });
chat.dormir();
chat.parler();
console.log(animal);
console.log(chat);
console.log(filter);


function Toto() {
  this.youpi = 'yeah';
}
Toto.prototype.direCoucou = function () {
  console.log('coucou');
};

const toto = new Toto();

toto.direCoucou();
console.log(toto.youpi);
console.log(toto);
console.log(JSON.stringify(toto));


function f() {
  const a = 2;
  return function () {
    console.log(a);
  };
}

console.log('%c toto', 'color:violet;');

const logColored = color => str => console.log(`%c ${str}`, `color:${color};`);
const logPink = logColored('pink');
const logAquamarine = logColored('aquamarine');


logPink('vive toto !');
logAquamarine('coucou les amis.');
logAquamarine("c'est la fete !");

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10000);
}

