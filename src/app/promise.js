import { get } from 'axios';

/* get('https://jsonplaceholder.typicode.com/todos/1')
  .then((x) => console.log(x.data.title)); */
/*
const mettreAuPluriel = (res) => `${res}s`;
const getTitle = (res) => res.data[0].title;


get('https://jsonplaceholder.typicode.com/todos')
  .then(getTitle)
  .then(mettreAuPluriel)
  .then(console.log);

setTimeout(() => console.log('titi'), 0);
console.log('toto');


/*
const end = new Promise((resolve, reject) => {
  console.log('Game over...');
  setTimeout(() => {
    setTimeout(((x) => resolve('... try again ?')
    ), 2000);
  }, 1000);
});

end.then((x) => console.log(x)); */
/*
const getPost = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.onload = () => resolve(xhr.responseText);
  // xhr.onerror = () => reject(xhr.statusText);
  xhr.send();
});


getPost
  .then((a) => console.log(a))
  .catch((a) => console.log('404 not found hohoho', a));
*/
/*     const filtered = [];
    for (const el of data) {
      if (el.title.includes('dolorem')) {
        filtered.push(el);
      }
    }
    return filtered; */
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => data.filter((el) => el.title.includes('dolorem')))
  .then((data) => data.map((el) => `
    <div>
        <h3>${el.title}</h3>
        <p>${el.body}</p>
    </div>
  `))
  .then((data) => { document.body.innerHTML = data.join(''); });
