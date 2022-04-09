// Import the coinFlip function from your coin.mjs file
import * as coin from "./modules/coin.mjs";

let lastArg = process.argv[process.argv.length - 1];
let number = parseInt(lastArg.substr(9));
let variable = coin.coinFlips(number);

console.log(variable);
console.log(coin.countFlips(variable));