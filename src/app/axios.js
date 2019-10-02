import { get } from 'axios';

get('https://xivapi.com/character/20940169').then((response) => {
  console.log(response);
  console.log(response.data.Character.Name);
});
