import random from '../lib/utils';
import playGame from '../lib/core';

const queryProcessor = () => {
  const question = random(0, 100);
  const correctAnswer = question % 2 ? 'no' : 'yes';
  return {
    question,
    correctAnswer,
  };
};

const gameData = {
  rule: 'Answer "yes" if number even otherwise answer "no".',
  queryProcessor,
};

export default () => playGame(gameData);
