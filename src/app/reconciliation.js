
let articles;
get('http://localhost:3000/articles')
  .then((res) => res.data)
  .then((data) => {
    articles = data;
    return get('http://localhost:3000/users');
  })
  .then((res) => res.data)
  .then((users) => {
    console.log(users, articles);
    for (const article of articles) {
      for (const user of users) {
        if (user.id === article.userId) {
          article.user = user;
        }
      }
    }
    console.log(articles);
  });
