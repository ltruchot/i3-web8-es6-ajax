const unique = (a) => [...new Set(a)];
const u = unique(['lo', 2, 3, 1.3, 4, 'lo', 1.3, false, false]);
/* console.log(u);
const obj1 = { a: 'toto', b: obj1 };
const obj2 = JSON.parse(JSON.stringify(obj1));
const objs = unique([obj1, obj2]);
console.log(objs);
 */
// console.log('toto', {}, 'toto');
let toto = '';
for (let i = 0; i < 1000; i++) {
  toto += `titi${i}`;
  console.log(toto);
}
console.log(toto);
