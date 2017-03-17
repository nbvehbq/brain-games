import random from '../lib/utils';

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
    question: [question],
    correctAnswer: correctAnswer.toString(),
  };
};

const gameData = {
  rules: 'What is the result of the expression?',
  queryProcessor: [queryProcessor],
};


export default gameData;
