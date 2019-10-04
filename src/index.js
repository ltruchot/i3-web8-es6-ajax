import { get, post } from 'axios';
import $ from 'jquery';

post('http://localhost:3000/users', {
  firstname: 'toutou',
  lastname: 'titi',
  username: 'tt',
  salary: 8000,
}).then(() => {
  const str = prompt('?');
  return get(`http://localhost:3000/users?q=${str}`);
})
  .then((res) => res.data)
  .then((users) => {
    for (const user of users) {
      $(`<div>${user.firstname} ${user.lastname} (${user.username})</div>`).appendTo('body');
    }

    const salaries = users.map((u) => u.salary);
    let count = 0;
    for (const salary of salaries) {
      count += salary;
    }
    console.log(count / salaries.length);
  })
  .catch(() => {
    $('<div>Ce user n\'existe pas</div>').appendTo('body');
  });
