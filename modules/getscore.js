import { gameid } from './game.js';

const scoreCard = document.querySelector('.scoreCard');

const display = (scoreList) => {
  scoreCard.innerHTML = '';
  scoreList.forEach((value) => {
    scoreCard.innerHTML += `<h3 class="users"> <i class="fa-solid fa-medal"></i>  &nbsp ${value.user} : ${value.score}</h3>`;
  });
};

export default async () => {
  let scoreList;
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameid}/scores/`,
  )
    .then((resolve) => resolve.json())
    .then((json) => { scoreList = json.result; });
  display(scoreList);
};
