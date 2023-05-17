import getscore from './getscore.js';
import setscore from './setscore.js';

const form = document.querySelector('.form');
const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

// submit

export default () => {
  submit.addEventListener('click', (event) => {
    const userN = form.user_name.value;
    const scoreN = form.user_score.value;
    const data = {
      user: userN,
      score: scoreN,
    };
    event.preventDefault();
    setscore(data);
    form.user_name.value = '';
    form.user_score.value = '';
  });
};

// render data
const render = () => {
  refresh.addEventListener('click', (event) => {
    getscore();
    event.preventDefault();
  });
};

export { render };
