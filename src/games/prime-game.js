import random from '../lib/utils';
import playGame from '../lib/core';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  const iter = (divider) => {
    if (num % divider === 0) return false;
    if (divider < num / 2) {
      return iter(divider + 1);
    }
    return true;
  };

  return iter(2);
};

const queryProcessor = () => {
  const question = random(0, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

const gameData = {
  rule: 'Is it a simple number?',
  queryProcessor,
};

export default () => playGame(gameData);
