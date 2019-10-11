import { get, post } from 'axios';
import $ from 'jquery';

Promise.all([
  get('http://localhost:3000/articles'),
  get('http://localhost:3000/users'),
]).then(([{ data: articles }, { data: users }]) => {
  console.log(articles, users);
});
