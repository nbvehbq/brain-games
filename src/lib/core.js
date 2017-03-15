import readLineSync from 'readline-sync';

const attempts = 3;

const playRound = (round, name, query) => {
  if (round === attempts) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const data = query();
  const { question, correctAnswer } = data;
  const answer = readLineSync.question(`Question: ${question} `);
  console.log('Your answer: ', answer);
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
Let\`s try again,${name}`);
    return;
  }
  console.log('Correct!');

  playRound(round + 1, name, query);
};


const startGame = (gameData) => {
  const { rules, queryProcessor } = gameData;

  console.log('Welcom to the Brain game');
  if (rules) {
    console.log(rules);
  }

  const playerName = readLineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  if (!queryProcessor) {
    return;
  }

  playRound(0, playerName, queryProcessor);
};


export default startGame;
