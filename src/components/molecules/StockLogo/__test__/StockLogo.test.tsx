import { render, screen } from "@testing-library/react";

import StockLogo from "../StockLogo";

const IMAGE_URL =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh6ap9%2Fbtsz6jE1NAF%2FU1bUIepR14dMID1g0Z8Wr1%2Fimg.png";

describe("StockLogo", () => {
  test("올바른 src에 대해서 렌더링 시 이미지 렌더링", () => {
    const src = IMAGE_URL;
    render(<StockLogo src={src} alt="Stock Logo" ticker="AAPL" />);

    const imageElement = screen.getByAltText("Stock Logo");
    expect(imageElement).toBeInTheDocument();
  });

  test("src가 없을 경우 ticker logo 렌더링", () => {
    render(<StockLogo alt="Stock Logo" ticker="AAPL" />);
    const textElement = screen.getByText("AAPL");
    expect(textElement).toBeInTheDocument();
  });
});
