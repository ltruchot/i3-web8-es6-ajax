import $ from 'jquery';
import { get } from 'axios';
import { prop, map, pipe } from 'ramda';

// const prop = (key) => (obj) => obj[key];
const propAvatarUrl = prop('avatar_url');
const toto = {
  avatar_url: 'hâttp://photo-de-toto.com',
};
propAvatarUrl(toto);


const extractAvatarUrl = pipe(map(prop('data')), map(prop('avatar_url')));

Promise.all([
  get('http://api.github.com/users/ltruchot'),
  get('http://api.github.com/users/mkoch'),
])
  .then(extractAvatarUrl)
  .then((images) => images.map((image) => $(`<img src="${image}" class="image-rounded" />`)))
  .then((elImages) => {
    $('body').append(elImages);
  })
  .catch((err) => console.error('error'));


const log = (str) => console.log(str);
[1, 2, 3].forEach(console.log);
