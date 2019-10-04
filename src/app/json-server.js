import { get, post } from 'axios';

get('https://mini-json-server.committers.ngo/livres').then(console.log);
/* post('https://mini-json-server.committers.ngo/livres',
  { name: 'SICP', author: 'Hal Abelson', id: 0 })
  .then(console.log); */
/*
post('http://localhost:3060/test',
  { id: 0 })
  .then(console.log);
*/
