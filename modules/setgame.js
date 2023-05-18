import game from './game.js';

export default async () => {
  let id;
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'Module funzu',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then((json) => { id = json.result; });
  game(id);
};
