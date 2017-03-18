import random from '../lib/utils';
import game from '../lib/core';

const makeProgression = (items, d) => {
  if (items.length === 10) {
    return items;
  }

  const last = items[items.length - 1];

  items.push(last + d);
  return makeProgression(items, d);
};

const queryProcessor = () => {
  const start = random(0, 100);
  const d = random(2, 10);
  const emptyIndex = random(1, 10);

  const progression = makeProgression([start], d);
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

export default () => game(gameData);
