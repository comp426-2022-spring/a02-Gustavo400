// Import the coinFlip function from your coin.mjs file
import * as coin from "./modules/coin.mjs";

let lastArg = process.argv[process.argv.length - 1];
let number = parseInt(lastArg.substr(9)); //9 is the length of "--number=" which is being taken out to find the actual number
let variable = coin.coinFlips(number);

console.log(variable);
console.log(coin.countFlips(variable));