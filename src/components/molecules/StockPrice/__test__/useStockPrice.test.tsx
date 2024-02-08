/* eslint-disable testing-library/render-result-naming-convention */
// useStockPrice.test.js
import { renderHook } from "@testing-library/react";

import { useStockPrice } from "../useStockPrice";

describe("useStockPrice", () => {
  it("가격을 올바르게 서식화해야 합니다.", () => {
    const { result } = renderHook(() => useStockPrice());

    // 소수점 이하 두 자리까지 포함하는 경우 테스트
    expect(result.current.makeFormatPrice(1234.5678, 2)).toBe("1,234.57");

    // 소수점 없이 정수만 있는 경우 테스트
    expect(result.current.makeFormatPrice(1234, 0)).toBe("1,234");
  });

  it("문자열을 MovingNumber로 변환해야 합니다.", () => {
    const { result } = renderHook(() => useStockPrice());

    // 숫자 문자인 경우 테스트
    const resultWithNumber = result.current.makeString2MovingNumber("5", 0);
    expect(resultWithNumber).toMatchSnapshot();

    // 숫자가 아닌 문자인 경우 테스트
    const resultWithChar = result.current.makeString2MovingNumber("A", 1);
    expect(resultWithChar).toBe("A");
  });

  it("애니메이션 효과가 적용된 가격을 올바르게 렌더링해야 합니다.", () => {
    const { result } = renderHook(() => useStockPrice());

    // 소수점 이하 두 자리까지 포함하는 경우 테스트
    const resultWithDecimal = result.current.renderAnimatedPrice(1234.5678, 2);
    expect(resultWithDecimal).toMatchSnapshot();

    // 소수점 없이 정수만 있는 경우 테스트
    const resultWithoutDecimal = result.current.renderAnimatedPrice(5678, 0);
    expect(resultWithoutDecimal).toMatchSnapshot();
  });
});
