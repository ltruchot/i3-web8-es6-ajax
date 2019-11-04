export const promise = () => {
// PROMISES
  const questions = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

  questions.then((data) => console.log('received data:', data));

const end = new Promise((resolve, reject) => {
console.log('Game over...');
setTimeout(() => {
    resolve('... try again ?');
}, 1000);
});

end.then((val) => console.log(val));
};
