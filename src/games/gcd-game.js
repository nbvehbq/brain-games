import random from '../lib/utils';

const gcd = (left, right) => {
  if (right === 0) {
    return Math.abc(left);
  }
  return gcd(right, left % right);
};

const queryProcessor = () => {
  const left = random(0, 100);
  const right = random(0, 100);

  const question = `${left} ${right}`;
  const correctAnswer = gcd(left, right);
  return {
    question: [question],
    correctAnswer: correctAnswer.toString(),
  };
};

const gameData = {
  rules: 'Find the greatest common divisor of given numbers.',
  queryProcessor: [queryProcessor],
};

export default gameData;

