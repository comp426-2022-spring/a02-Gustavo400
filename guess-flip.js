// Import the coinFlip function from your coin.mjs file
import * as coin from "./modules/coin.mjs";

let whatWillItBe = process.argv[process.argv.length - 1];
let guess = whatWillItBe.substr(7); //7 is the length of "--call=" which is being taken out to find the actual guess

if (guess != "heads" && guess != "tails") {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    let outcome = coin.coinFlip();
    let victory = guess === outcome ? "win" : "lose";
    console.log(`{ call: '${guess}', flip: '${outcome}', result: '${victory}' }`);
}
