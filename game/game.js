const score = document.getElementById("score");
const flavor = document.getElementById("flavor-text");
const upgradeContainer = document.getElementById("upgrade-container");

if (!flavor.textContent) {
  flavor.textContent = "Hello fellow Googologist";
}

let player = {
  score: 0n,
  perSec: 0n,
  fractionalScore: 0n,
};

function updateGame() {
  score.textContent = `Your number is ${player.score}\nYour number goes up by ${player.perSec} Every Second`;
}

setInterval(function () {
  player.fractionalScore += player.perSec;

  player.score = player.fractionalScore / 100n;

  updateGame();
}, 10);

updateGame();
