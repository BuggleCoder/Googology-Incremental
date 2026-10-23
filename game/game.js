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

function updateGame() {
  score.textContent = `Your number is ${player.score}\nYour number goes up by ${player.perSec} Every Second`;
}

setInterval(updateGame, 1000);

updateGame();
