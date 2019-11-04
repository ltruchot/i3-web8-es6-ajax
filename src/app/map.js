import {
  map, filter, pipe, forEach, uniq, prop, pluck,
} from 'ramda';
import { patch, get } from 'axios';
import $ from 'jquery';
import { users } from './data/humans';

users
  .filter(user => user.sexe === 'M')
  .filter(user => user.hobbies.includes('sport'))
  .map(({ prenom, hobbies }) => ({ prenom, hobbies }))
  .map(({ prenom, hobbies }) => $(`<p>${prenom} aime ${hobbies.join(', ')}.</p>`))
  .forEach((el) => {
    $('body').append(el);
  });

const appendHobbyInBody = pipe(
  uniq,
  filter(user => user.sexe === 'M'),
  filter(user => user.hobbies.includes('sport')),
  map(({ prenom, hobbies }) => ({ prenom, hobbies })),
  map(({ prenom, hobbies }) => $(`<p>${prenom} aime ${hobbies.join(', ')}.</p>`)),
  forEach((el) => {
    $('body').append(el);
  }),
);
appendHobbyInBody(users);

const urls = [
  'http://localhost:3000/all/0',
  'http://localhost:3000/all/1',
  'http://localhost:3000/all/9',
];

Promise.all(map(get, urls))
  .then(console.log)
  .then(pluck('data'))
  .then(console.log)
  .catch(console.log);

