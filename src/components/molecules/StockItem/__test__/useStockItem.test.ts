import { renderHook } from "@testing-library/react";

import { useStockItem } from "../useStockItem";

describe("useStockItem", () => {
  it("size와 tickerAccent를 설정할 경우 이 값을 그대로 객체에 담아 return해야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
      size: "lg" as const,
      tickerAccent: true,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.size).toBe("lg");
    expect(result.current.tickerAccent).toBe(true);
  });

  it("size가 지정되지 않을 경우 size를 'md'로 설정해야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.size).toBe("md");
  });

  it("tickerAccent가 지정되지 않을 경우 title은 companyName으로 subtitle은 ticker로 지정되어야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.title).toBe("companyName");
    expect(result.current.subtitle).toBe("ticker");
  });

  it("tickerAccent가 true라면 title은 ticker로 subtitle은 companyName으로 지정되어야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
      tickerAccent: true,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.title).toBe("ticker");
    expect(result.current.subtitle).toBe("companyName");
  });

  it("size가 지정되지 않을 경우 stockChangeLabelSize는 s, stockPriceSize는 headline3여야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
      tickerAccent: true,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.stockChangeLabelSize).toBe("s");
    expect(result.current.stockPriceSize).toBe("headline3");
  });

  it("size가 md라면 stockChangeLabelSize는 s, stockPriceSize는 headline3여야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
      tickerAccent: true,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.stockChangeLabelSize).toBe("s");
    expect(result.current.stockPriceSize).toBe("headline3");
  });

  it("size가 lg라면 stockChangeLabelSize는 m, stockPriceSize는 headline2여야합니다.", () => {
    const props = {
      companyName: "companyName",
      ticker: "ticker",
      currentPrice: 100,
      change: 100,
      changePercentage: 100,
      tickerAccent: true,
      size: "lg" as const,
    };

    const { result } = renderHook(() => useStockItem(props));

    expect(result.current.stockChangeLabelSize).toBe("m");
    expect(result.current.stockPriceSize).toBe("headline2");
  });
});
