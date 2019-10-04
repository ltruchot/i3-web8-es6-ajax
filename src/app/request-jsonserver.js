import { get } from 'axios';
import $ from 'jquery';

get('http://localhost:3000/users')
  .then((res) => res.data)
  .then((users) => {
    // jquery court
    for (const user of users) {
      $(`<div>${user.name}</div>`).appendTo('body');
    }
    // jquery long
    for (const user of users) {
      const div = $('<div></div>');
      div.text(user.name);
      $('body').append(div);
    }
    // javascript pure "vanilla"
    for (const user of users) {
      const div = document.createElement('div');
      div.innerText = user.name;
      document.body.appendChild(div);
    }
  });
