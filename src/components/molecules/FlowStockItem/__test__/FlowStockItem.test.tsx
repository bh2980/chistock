import { render, screen } from "@testing-library/react";

import FlowStockItem from "../FlowStockItem";

describe("StockChangeLabel", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링", () => {
    render(<FlowStockItem changePercentage={5} ticker="AAPL" price={123456} />);

    const changePercentageText = screen.getByText("+5.0%");
    const ticker = screen.getByText("AAPL");
    const price = screen.getByText("123,456.00");

    expect(changePercentageText).toBeInTheDocument();
    expect(ticker).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
