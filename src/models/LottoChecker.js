import Validates from "../validates/Validates.js";
import Lotto from "./Lotto.js";
import BonusNumberError from "../errors/BonusNumberError.js";

class LottoChecker {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = {};
    this.#bonusNumber = 0;
  }

  #validateBonusNumber(number) {
    if (!Validates.isNumber(number)) throw new BonusNumberError("숫자만 입력 가능합니다.");
  }

  createWinningNumbers(numbers) {
    const lotto = new Lotto(numbers.split(","));
    lotto.getLottoNumbers().forEach((number) => {
      this.#winningNumbers[number] = true;
    });
  }

  createBonusNumber(number) {
    this.#validateBonusNumber(number);
    this.#bonusNumber = Number(number);
  }

  isWinningNumber(number) {
    if (this.#winningNumbers[number]) return true;
    return false;
  }

  isBonusNumber(number) {
    return this.#bonusNumber === number;
  }

  checkLotto(lotto) {
    let isMatchBonus = false;
    const winningCount = lotto.reduce(
      (count, number) => {
        if (this.isBonusNumber(number)) {
          isMatchBonus = true;
          return count;
        }
        return count + this.isWinningNumber(number);
      },
      0,
    );
    return { winningCount, isMatchBonus };
  }
}

export default LottoChecker;