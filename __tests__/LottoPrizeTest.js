import LottoPrize from "../src/LottoPrize.js";
import LottoChecker from "../src/LottoChecker.js";

describe("로또 당첨 클래스 테스트", () => {
  let lottoPrize;
  beforeEach(() => {
    const lottoChecker = new LottoChecker();
    lottoPrize = new LottoPrize(lottoChecker);
    lottoChecker.createWinningNumbers("1,2,3,4,5,6");
    lottoChecker.createBonusNumber("7");
  });

  describe("getRank 메서드", () => {
    test("사용자가 구매한 로또의 등수를 확인할 수 있다.", () => {
      expect(lottoPrize.getRank([1, 2, 3, 4, 5, 6])).toEqual("first");
    });
  });

  describe("getPrize 메서드", () => {
    test("로또 당첨 기준, 금액, 당첨 횟수를 담은 객체를 반환한다.", () => {
      const RANDOM_NUMBERS = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];

      expect(lottoPrize.getPrize(RANDOM_NUMBERS)).toEqual({
        first: { condition: 6, money: 2000000000, count: 1 },
        second: { condition: 5, money: 30000000, count: 0 },
        third: { condition: 5, money: 1500000, count: 0 },
        forth: { condition: 4, money: 50000, count: 0 },
        fifth: { condition: 3, money: 5000, count: 0 },
      });
    });
  });
});
