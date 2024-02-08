import { render, screen } from "@testing-library/react";
import React from "react";

import StockPrice from "../StockPrice";

describe("StockPrice", () => {
  it("prefix, postfix를 렌더링해야합니다.", () => {
    render(
      <StockPrice
        price={1234.5678}
        prefix="$"
        postfix=" USD"
        decimalPoint={2}
        data-testid="stock-price"
      />
    );

    expect(screen.getByTestId("stock-price")).toHaveTextContent("$");
    expect(screen.getByTestId("stock-price")).toHaveTextContent(" USD");
  });
});
