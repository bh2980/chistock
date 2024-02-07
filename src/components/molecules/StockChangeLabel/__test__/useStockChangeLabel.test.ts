import { act, renderHook } from "@testing-library/react";

import { useStockChangeLabel } from "../useStockChangeLabel";

describe("useStockChangeLabel", () => {
  it("content를 올바르게 포맷팅해야합니다.", () => {
    const { result } = renderHook(() =>
      useStockChangeLabel({ change: 10000, changePercentage: 8.1234 })
    );

    expect(result.current.makeChangeString()).toBe("+10,000");
    expect(result.current.makeChangePercentageString()).toBe("+8.1%");
  });

  it("양수 변화를 처리해야 합니다.", () => {
    const { result } = renderHook(() => useStockChangeLabel({ change: 10, changePercentage: 5 }));

    // 양수 변화 확인
    expect(result.current.labelVariant).toBe("error");
    expect(result.current.content).toBe("+5.0%");
    expect(result.current.makeChangeString()).toBe("+10");
  });

  it("음수 변화를 처리해야 합니다.", () => {
    const { result } = renderHook(() => useStockChangeLabel({ change: -8, changePercentage: -4 }));

    // 음수 변화 확인
    expect(result.current.labelVariant).toBe("primary");
    expect(result.current.content).toBe("-4.0%");
    expect(result.current.makeChangeString()).toBe("-8");
  });

  it("변화가 0인 경우를 처리해야 합니다.", () => {
    const { result } = renderHook(() => useStockChangeLabel({ change: 0, changePercentage: 0 }));

    // 0인 경우 확인
    expect(result.current.labelVariant).toBe("secondary");
    expect(result.current.content).toBe("0.0%");
    expect(result.current.makeChangeString()).toBe("-");
  });

  it("5초마다 showPercentage를 토글해야 합니다.", () => {
    jest.useFakeTimers();

    const { result } = renderHook(() => useStockChangeLabel({ change: 5, changePercentage: 2 }));

    // 초기 상태 확인
    expect(result.current.content).toBe("+2.0%");

    act(() => {
      jest.advanceTimersByTime(5000); // 5초 경과
    });

    // 5초 후 상태 확인
    expect(result.current.content).toBe("+5");
  });
});
