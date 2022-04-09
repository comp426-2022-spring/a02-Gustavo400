// Import the coinFlip function from your coin.mjs file
import * as coin from "./modules/coin.mjs";

// Call the coinFlip function and put the return into STDOUT
// console.log(coin.coinFlip());
// console.log(coin.coinFlips(7));
let variable = coin.coinFlips(7);
console.log(variable);
console.log(coin.countFlips(variable));