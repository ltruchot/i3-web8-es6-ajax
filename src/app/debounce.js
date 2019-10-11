import { get, post } from 'axios';
import $ from 'jquery';

let debounce = true;
const url = 'http://localhost:3000/users';
$('#btn').on('click', () => {
  const firstname = $('#firstname').val();
  const lastname = $('#lastname').val();
  const username = $('#username').val();
  const salary = parseInt($('#salary').val(), 10);

  const newUser = {
    firstname,
    lastname,
    username,
    salary,
  };
  if (debounce) {
    post(url, newUser);
  } else {
    console.log('calme toi');
  }

  get('http://localhost:3000/users').then((res) => res.data).then((users) => {
    document.body.innerHTML = users.reduce((acc, cur) => {
      acc += `<div>${cur.firstname} ${cur.lastname}</div>`;
      return acc;
    }, '');
  });
  debounce = false;
  setTimeout(() => { debounce = true; }, 3000);
});
