import random from '../lib/utils';

const yes = 'yes';
const no = 'no';

const queryProcessor = () => {
  const question = random(0, 100);
  const correctAnswer = question % 2 ? no : yes;
  return {
    question: [question],
    correctAnswer: [correctAnswer],
  };
};

const gameData = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  queryProcessor: [queryProcessor],
};


export default gameData;

