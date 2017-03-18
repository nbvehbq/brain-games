import random from '../lib/utils';
import playGame from '../lib/core';

const isPrime = (num, i) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % i === 0) return false;
  if (i < num / 2) return isPrime(num, i + 1);

  return true;
};

const queryProcessor = () => {
  const question = random(0, 1000);
  const correctAnswer = isPrime(question, 2) ? 'yes' : 'no';
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
