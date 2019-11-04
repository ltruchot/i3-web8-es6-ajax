const add = function (a, b) {
  return a + b;
};

const getFromage = (type, cb) => {
  cb(type);
};

const f = (a) => (b) => a;

const log = (color) => (text) => console.log('%c ' + text, 'color:' + color);
const logRed = log('red');
const logGreen = log('green');
logRed('toto');
logGreen('titi');
log('violet')('tutu');

const logSimple = (bg, color, text) => console.log('%c ' + text, 'background-color:' + bg + ';color:' + color + ';');

logSimple('red', 'white', 'Bonjour');
const logSimple2 = (bg) => (color) => (text) => console.log('%c ' + text, 'background-color:' + bg + ';color:' + color + ';');
logSimple2('violet')('white')('toto');

const map = (f) => (arr) => {
  const newArr = [];
  for (const el of arr) {
    const newEl = f(el);
    newArr.push(newEl);
  }
  return newArr;
};

const doubler = (a) => a * 2;
/*
  const arrDoubles = map(doubler, [1, 2, 3]);
  console.log(arrDoubles); */

const mapDouble = map(doubler);
mapDouble([20, 88, 45, 90]);

const noNull = (a) => (!a ? 'inconnu' : a);
console.log(noNull(undefined));
const mapNoNull = map(noNull);
console.log(mapNoNull([undefined, null, 0, false, 'toto']));

const sub = (a, b) => {
  throw new Error();
  return a - b;
};
const mul = (a, b) => a * b;
const calculate = (a, b) => {
  const c = sub(a, b);
  const d = mul(a, c);
  return d;
};

calculate(10, 5);
