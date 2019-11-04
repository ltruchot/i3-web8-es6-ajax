
export const cloneDeep = (obj) => {
  let clone;
  try {
    clone = JSON.parse(JSON.stringify(obj));
  } catch (error) {
    console.log('il y a eu une erreur');
  }
  return clone;
};
export const merge = (o1, o2) => ({ ...o1, ...o2 });

export const animateWidth = ({ width }, { duration }) => {
  console.log(duration, width);
};
animateWidth({ width: '10px', height: '10px' }, { duration: 300, easing: 'slow' });
/* const { b } = { b: 'a', c: 't' };
console.log(b); */
/*
const arr = [1, 2, 3, 4, 5, 6];
const [, , ...c] = arr;
console.log(c);
*/

const nombres = [1, 3, 6, 89, 'tptp'];

const tail = ([a, ...b]) => b;
const head = ([a, ...b]) => a;

const o = decompose(nombres);
console.log(o);
