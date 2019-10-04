async function welcomePlayer(playerName) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`La partie commence, ${playerName} !`);
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json());
  return data;
}
welcomePlayer('Peach');
welcomePlayer('Mario').then(console.log);


