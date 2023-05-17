import { gameid } from './game.js';

export default async (data) => {
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    .then((json) => json);
};
