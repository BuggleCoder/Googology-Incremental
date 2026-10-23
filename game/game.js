class BEAFNumber {
  constructor(array = [0]) {
    this.array = [...array];
    this.normalize();
  }

  normalize() {
    while (this.array.length > 1 && this.array[this.array.length - 1] === 1) {
      this.array.pop();
    }

    if (this.array.some((n) => !Number.isSafeInteger(n) || n < 0)) {
      throw new Error("BEAF entries must be non-negative safe integers.");
    }
  }

  addOne() {
    if (this.array.length === 1) {
      this.array[0]++;
    } else {
      this.array = [this.array[0] + 1];
    }

    return this;
  }

  toString() {
    if (this.array.length === 1) {
      return this.array[0].toLocaleString();
    }

    return `{${this.array.join(",")}}`;
  }
}

const flavor = document.getElementById("flavor-text");
const upgradeContainer = document.getElementById("upgrade-container");

if (!flavor.textContent) {
  flavor.textContent = "Hello fellow Googologist";
}

let player = {
  score: new BEAFNumber([0]),
  perSec: new BEAFNumber([10, 100]),
};

function updateGame() {
  score.textContent =
    `Your number is ${player.score.toString()}\n` +
    `Your number goes up by ${player.perSec.toString()} every second`;
}

setInterval(function () {
  player.score.addOne();
  updateGame();
}, 1000);

updateGame();
