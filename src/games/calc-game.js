import random from '../lib/utils';
import playGame from '../lib/core';

const queryProcessor = () => {
  const left = random(0, 100);
  const right = random(0, 100);
  const results = [
    {
      operand: '+',
      result: () => left + right,
    },
    {
      operand: '-',
      result: () => left - right,
    },
    {
      operand: '*',
      result: () => left * right,
    },
  ];

  const result = results[random(0, 3)];
  const question = `${left} ${result.operand} ${right}`;
  const correctAnswer = result.result();
  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const gameData = {
  rule: 'What is the result of the expression?',
  queryProcessor,
};

export default () => playGame(gameData);
