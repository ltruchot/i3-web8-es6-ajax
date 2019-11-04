import { reduce, slice } from 'ramda';
/*
const add = (a, b) => a + b;
 const mul = reduce((a, b) => a * b, 1);
mul([2, 5]);

const sum = reduce(add, 0);


console.log(sum([4, 34, 889]));


const nbs = [[3, 8, 9], [4, 8, 39]];
const str = nbs.reduce((acc, el) => {
  const total = acc.concat(el);
  return total;
}, []);
console.log(str);

const personnes = [4, 78, 987, 8];
// const max = ;
console.log(personnes.reduce((acc, el) => (acc < el ? el : acc), -Infinity));


const ages = [34, 60, 30, 28, 25, 23, 28, 28, 35];


const sommes = ages.reduce(add, 0);

const moyenne = Math.round(sommes / ages.length);
console.log(moyenne);

const prenoms = ['toto', 'titi'];
let salutation = prenoms.reduce((acc, cur) => `${acc + cur}, `, 'Coucou ');
salutation = `${salutation.trim().slice(0, -1)}.`;
console.log(salutation);


const filter = (arr, func) => arr.reduce((acc, cur) => {
  const isOk = func(cur);
  if (isOk) {
    acc.push(cur);
  }
  return acc;
}, []);

  const tab = [];
  for (const el of arr) {
    if (func(el)) {
      tab.push(el);
    }
  }
  return tab;

console.log(filter([1, 4, 67, 11], val => val > 10));

const map = (arr, func) => arr.reduce((acc, cur) => {
  acc.push(func(cur));
  return acc;
}, []);
console.log(map([1, 2, 4], a => a * 2));


function toto (b){
  console.log(b);
}
const toto = b => console.log(b)

[1, 2, 3].forEach(toto);

// const max = reduce((acc, el) => (acc < el ? el : acc), -Infinity);
// console.log(reduce(max, -Infinity, [89, 43, 809, 3, 987089, 23]));

let count = 0;
for (const nb of nbs) {
  count += nb;
}
console.log(count);


const makeFizzBuzz = converters => nb => Object
  .keys(converters)
  .reduce((acc, cur) => (nb % cur === 0 ? acc + converters[cur] : acc), '') || nb;

const fizzBuzz = makeFizzBuzz({
  3: 'fizz',
  5: 'buzz',
});


console.log(fizzBuzz(30));
console.log(fizzBuzz(2));
/*
// eslint-disable-next-line no-unused-expressions
const fizzbuzz = nb => Object
  .keys({
    3: 'fizz',
    5: 'buzz',
  })
  .reduce((acc, cur) => (nb % cur === 0 ? acc + {
    3: 'fizz',
    5: 'buzz',
  }[cur] : acc), '') || nb;

const add = a => b => a + b;
const add1 = add(1);
console.log(add1(8));

console.log(add1(50));

const bools = [true, false, false, true, true];
console.log(bools.reduce((a, b) => a && b, true));
console.log(bools.reduce((a, b) => a || b, false));

const join = (sep) => pipe(
  reduce((acc, cur) => acc + cur + sep, ''),
  slice(0, -sep.length),
);

const joinByComa = join(', ');
console.log(['toto', 'titi', 'tata'].join(', '));


const sub = a => b => b - a;
const mul = a => b => a * b;
const toto = a => `${a}toto`;
const sub13 = pipe(mul(10), sub(1), sub(2), sub(10));

console.log(sub13(30));

const isEven = n => (n % 2 === 0);
const not = n => !n;
const isOdd = pipe(isEven, not);

 const pipe = (f1, f2, val) => {
  return f2(f1(val));
} */
// const compose = (f1, f2, val) => f1(f2(val));
const add = a => b => a + b;
const mul = a => b => a * b;
const sub = a => b => b - a;
const pipe = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val);
const toto = pipe(add(7), mul(10), sub(5));
