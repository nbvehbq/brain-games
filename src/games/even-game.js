import readLineSync from 'readline-sync';

const YES = 'yes';
const NO = 'no';
const ATEMPTS = 3;

const playRound = (round, name) => {
  if (round === ATEMPTS) {
    return;
  }

  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 ? NO : YES;
  const answer = readLineSync.question(`Question: ${number} `);
  console.log('Your answer: ', answer);
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
Let\`s try again,${name}`);
    return;
  }
  console.log('Correct!');

  playRound(round + 1, name);
};

const playGame = name => playRound(0, name);
const printRule = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

export { playGame, printRule };

