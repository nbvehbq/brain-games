import readLineSync from 'readline-sync';
import { playGame, printRule } from './games/even-game';

const wellcomString = 'Welcome to the Brain Games!';

const getName = () => {
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const startEvenGame = () => {
  console.log(wellcomString);
  printRule();
  const name = getName();
  playGame(name);
};

export { startEvenGame, getName };
