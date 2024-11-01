import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printLottoCount(count) {
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);
  },
  /**
   *
   * @param {number[][]} lottos
   */
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
    OutputView.printNewLine();
  },
  printNewLine() {
    MissionUtils.Console.print("");
  },
};

export default OutputView;