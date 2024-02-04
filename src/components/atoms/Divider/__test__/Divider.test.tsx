import { render, screen } from "@testing-library/react";

import Divider from "@atoms/Divider/Divider";

describe("Divider 컴포넌트", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링되어야 합니다.", () => {
    render(<Divider />);
  });

  it("커스텀 클래스가 제대로 적용되어야 합니다.", () => {
    render(<Divider className="custom-divider" />);
    const dividerElement = screen.getByRole("separator");
    expect(dividerElement).toHaveClass("custom-divider");
  });

  it("수직 구분선일 경우, aria-orientation이 'vertical'이어야 합니다.", () => {
    render(<Divider vertical />);
    const dividerElement = screen.getByRole("separator");
    expect(dividerElement).toHaveAttribute("aria-orientation", "vertical");
  });

  it("수평 구분선일 경우, aria-orientation이 'horizontal'이어야 합니다.", () => {
    render(<Divider />);
    const dividerElement = screen.getByRole("separator");
    expect(dividerElement).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("자식 요소가 있는 경우, 자식 요소가 렌더링되어야 합니다.", () => {
    render(<Divider>내용</Divider>);
    const childElement = screen.getByText("내용");
    expect(childElement).toBeInTheDocument();
  });

  it("자식 요소가 없는 경우, 내용이 렌더링되지 않아야 합니다.", () => {
    render(<Divider />);
    const childElement = screen.queryByText("내용");
    expect(childElement).not.toBeInTheDocument();
  });
});
