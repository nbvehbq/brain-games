import random from '../lib/utils';

const balance = (num) => {
  const len = num.length;
  const digits = num.split('')
    .map(item => Number(item))
    .sort();

  const first = digits[0];
  const last = digits[len - 1];

  if ((last - first) <= 1) {
    return digits.map(item => item.toString()).join('');
  }

  digits[0] = first + 1;
  digits[len - 1] = last - 1;

  return balance(digits.map(item => item.toString()).join(''));
};

const queryProcessor = () => {
  const question = random(10, 10000).toString();
  const correctAnswer = balance(question);
  return {
    question,
    correctAnswer,
  };
};

const gameData = {
  rules: 'Balance the given number.',
  queryProcessor,
};

export default gameData;

