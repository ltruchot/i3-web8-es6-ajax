
/*
const promesse = new Promise((resolve) => {
  setTimeout(() => resolve('titi'), 2000);
});
promesse.then((str) => console.log(str));
*/

const delay = function (timer, data) {
  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (data === 1) {
      // reject(['toto']);
      // }
      resolve(data);
    }, timer);
  });
  return pro;
};

delay(1000, 3)
  .then((a) => { console.log(a); return delay(1000, 2); })
  .then((a) => { console.log(a); return delay(1000, 1); })
  .then((a) => { console.log(a); return delay(1000, 'bonne année'); })
  .then(console.log)
  .catch((a) => console.log('Il y a eu un problem:', a));
