import { get, post } from 'axios';
import $ from 'jquery';

Promise.all([
  get('http://localhost:3000/articles'),
  get('http://localhost:3000/users'),
]).then((res) => {
  const articles = res[0].data;
  const users = res[1].data;
  console.log(articles, users);

  articles.forEach((article) => {
    const date = (new Date(article.date));

    // const writer = users.find((user) => user.id === article.userId);
    let writer = null;
    for (let i = 0; i < users.length; i++) {
      if (article.userId === users[i].id) {
        writer = users[i];
        break;
      }
    }
    // const toto = [1, 2, 3].find((el) => el > 1);

    $(`<h3>${article.title}</h3>`).appendTo('body');
    $(`<h4>${writer.firstname} ${writer.lastname} - ${date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</h4>`).appendTo('body');
    $(`<p>${article.body}</p>`).appendTo('body');
  });
});
