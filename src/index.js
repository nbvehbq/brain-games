import game from './lib/core';
import evenData from './games/even-game';
import calcData from './games/calc-game';


const startEvenGame = () => game(evenData);
const startBrainGames = () => game({ });
const startCalcGame = () => game(calcData);

export { startEvenGame, startBrainGames, startCalcGame };
