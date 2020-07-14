import { arrayFromOtoN, randInt } from "common/utils";
import { LIGHT_SQUARE_TIME } from "common/constants";

const generateSequence = itemsNum => arrayFromOtoN(itemsNum).map(randInt(0, 8));

class Controller {
  super(nBack) {
    this.nBack = nBack;
    this.sequence = null;
    this.player = {
      cur: null
    };
  }

  startGame() {
    const rounds = 20;
    this.sequence = generateSequence(rounds);
    for (let i = 0; i < rounds; i++) {
      setTimeout(i * LIGHT_SQUARE_TIME);
    }
  }

  click(cell) {}
}
