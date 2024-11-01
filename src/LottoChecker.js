class LottoChecker {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = {};
    this.#bonusNumber = 0;
  }

  createWinningNumbers(numbers) {
    numbers.split(",").forEach((number) => {
      this.#winningNumbers[number] = true;
    });
  }

  createBonusNumber(number) {
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
