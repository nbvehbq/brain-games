import game from './lib/core';
import evenData from './games/even-game';
import calcData from './games/calc-game';
import gcdData from './games/gcd-game';
import balanceData from './games/balance-game';

const startEvenGame = () => game(evenData);
const startBrainGames = () => game({ });
const startCalcGame = () => game(calcData);
const startGcdGame = () => game(gcdData);
const startBalanceGame = () => game(balanceData);

export {
  startEvenGame,
  startBrainGames,
  startCalcGame,
  startGcdGame,
  startBalanceGame,
};
