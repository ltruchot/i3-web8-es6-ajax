import { filter, pipe } from 'ramda';
import { patch } from 'axios';
import { users } from './data/humans';

const vieuxCuisiniers = users
  .filter(user => user.sexe === 'M')
  .filter(user => user.age > 35)
  .filter(user => user.hobbies.includes('cooking'));
console.log(vieuxCuisiniers);

const rHomme = filter(user => user.sexe === 'M', users);
const rHommeVieux = filter(user => user.age > 35, rHomme);
const rVieuxCuisiniers = filter(user => user.hobbies.includes('cooking'), rHommeVieux);

const filterVieuxCuisinier = pipe(
  filter(user => user.sexe === 'M'),
  filter(user => user.age > 35),
  filter(user => user.hobbies.includes('cooking')),
);
const toto = filterVieuxCuisinier(users);
console.log('final', toto);
/*
const fil = (cb, arr) => {
  for()
  return [];
}
*/
