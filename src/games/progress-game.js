import random from '../lib/utils';
import playGame from '../lib/core';

const progressionLength = 10;

const makeProgression = (start, d) => {
  const iter = (num, result) => {
    if (result.length === progressionLength) {
      return result;
    }

    const element = (result.length === 0) ? num : num + d;
    return iter(element, result.concat(element));
  };

  return iter(start, []);
};

const queryProcessor = () => {
  const start = random(0, 100);
  const d = random(2, progressionLength);
  const emptyIndex = random(1, progressionLength);

  const progression = makeProgression(start, d);
  const correctAnswer = progression[emptyIndex];
  progression[emptyIndex] = undefined;

  return {
    question: progression.reduce((acc, item) => {
      const element = (item) ? item.toString() : '..';
      return `${acc} ${element}`;
    }, ''),
    correctAnswer: correctAnswer.toString(),
  };
};

const gameData = {
  rule: 'What number is missing in this progression?',
  queryProcessor,
};

export default () => playGame(gameData);
