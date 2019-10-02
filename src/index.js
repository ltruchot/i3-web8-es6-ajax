/* import { get } from 'axios';
// import $ from 'jquery';

get('https://xivapi.com/character/20940169').then((response) => {
  console.log(response);
  console.log(response.data.Character.Name);
});


setTimeout(() => {
  console.log('3');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('1');
      setTimeout(() => {
        console.log('Bonne année !');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 */
/* const promesse = new Promise((resolve) => {
  setTimeout(() => resolve('titi'), 2000);
});
promesse.then((str) => console.log(str)); */

const delay = function (timer, data) {
  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === 1) {
        // reject(['toto']);
      }
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
  .catch((a) => console.log('y a eu un blem:', a));
