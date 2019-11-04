import { cloneDeep } from './app/exo2';

cloneDeep({});
/*
import { prop } from 'ramda';
import { toto } from './app/callstack';

const propNom = prop('nom');
/* console.log(propNom({ nom: 'toto', prenom: 'titi' }));
console.log(propNom({ noms: 'loic', prenom: 't' }));
 */
/*
const arr = [
  { nom: 'toto', prenom: 'titi' },
  { nom: 'loic', prenom: 't' },
];
const arr2 = [...arr];
arr[0].nom = 'lolo';
console.log(arr2);


const makeLog = (method) => (str) => (css) => {
  console[method](`%c ${str}`, css);
};

const logRed = makeLog('log')('color:red')('toto');
const logGreen = makeLog('warn')('color:green');


logGreen('titi');


/* import './styles.scss'; // entry point for styles
import { Mole } from './app/classes/Mole';

console.log(new Mole('taupinambour'));
const taupes = [];
for (let i = 0; i < 100; i++) {
  taupes.push(new Mole(`tautaupe${i}`));
}
console.log(taupes);
 */
