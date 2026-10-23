class BEAFNumber {
  constructor(array = [0]) {
    if (
      !Array.isArray(array) ||
      array.length === 0 ||
      array.some((n) => !Number.isSafeInteger(n) || n < 0)
    ) {
      throw new Error("Invalid BEAF array");
    }

    this.array = [...array];
  }

  compare(other) {
    if (this.array.length !== other.array.length) {
      return Math.sign(this.array.length - other.array.length);
    }

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] !== other.array[i]) {
        return Math.sign(this.array[i] - other.array[i]);
      }
    }

    return 0;
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

const player = {
  score: new BEAFNumber([0]),
  perSec: new BEAFNumber([1]),
};

function updateGame() {
  score.textContent =
    `Your number is ${player.score.toString()}\n` +
    `Your number goes up by ${player.perSec.toString()} every second`;
}

setInterval(() => {
  updateGame();
}, 1000);

updateGame();
