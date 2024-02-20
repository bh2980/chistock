/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";

import StockItem from "../StockItem";

const IMAGE_URL =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh6ap9%2Fbtsz6jE1NAF%2FU1bUIepR14dMID1g0Z8Wr1%2Fimg.png";

describe("StockItem", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링", () => {
    render(
      <StockItem
        tickerAccent
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
        market="NASDAQ"
      />
    );
  });

  // eslint-disable-next-line jest/expect-expect
  it("market이 없을 경우에도 정상 렌더링", () => {
    render(
      <StockItem
        tickerAccent
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
      />
    );
  });
});
