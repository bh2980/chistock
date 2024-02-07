/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { act, render, screen } from "@testing-library/react";

import StockChangeLabel from "../StockChangeLabel";

describe("StockChangeLabel", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링", () => {
    render(<StockChangeLabel change={10} changePercentage={5} data-testid="stock-change-label" />);
  });

  it("props로 전달한 값을 렌더링합니다.", () => {
    render(<StockChangeLabel change={10} changePercentage={5} data-testid="stock-change-label" />);

    const [_, changePercentage] = screen.getAllByText("+5.0%");
    const change = screen.getByText("+10");

    // 전달한 값이 렌더링되었는지 확인
    expect(changePercentage).toBeInTheDocument();
    expect(change).toBeInTheDocument();
  });

  it("5초마다 showPercentage를 토글해야 합니다.", () => {
    jest.useFakeTimers();

    const { container } = render(
      <StockChangeLabel change={10} changePercentage={5} data-testid="stock-change-label" />
    );

    // 초기 상태 확인
    const contentContainer = container.querySelector("span > div:first-child");

    expect(contentContainer).toHaveTextContent("+5.0%");
    expect(contentContainer).not.toHaveTextContent("+10");

    // 5초 경과 후 상태 확인
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(contentContainer).toHaveTextContent("+10");
    expect(contentContainer).not.toHaveTextContent("+5.0%");
  });
});
