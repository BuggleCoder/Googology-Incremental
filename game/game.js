const score = document.getElementById("score");
const flavor = document.getElementById("flavor-text");
const upgradeContainer = document.getElementById("upgrade-container");

if (!flavor.textContent) {
  flavor.textContent = "Hello fellow Googologist";
}

let player = {
  score: 0n,
  perSec: 0n,
};

function game() {
  score.textContent = `Your number is ${player.score} \n Your number goes up by ${player.perSec} Every Second`;
  game();
}

player.score += 100 * player.perSec;
