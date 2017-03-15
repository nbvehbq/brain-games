import random from '../lib/utils';

const queryProcessor = () => {
  const question = random(0, 100);
  const correctAnswer = question % 2 ? 'no' : 'yes';
  return {
    question,
    correctAnswer,
  };
};

const gameData = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  queryProcessor,
};

export default gameData;

