import readLineSync from 'readline-sync';

export default () => {
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
