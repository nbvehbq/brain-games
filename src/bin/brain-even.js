#!/usr/bin/env node

import printWelcome from '..';
import startGame from '../even-game';

console.log(`Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".\n`);

const name = printWelcome();
startGame(name);

