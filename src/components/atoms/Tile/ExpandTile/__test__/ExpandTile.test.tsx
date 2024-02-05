import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ExpandTile from "../ExpandTile";

describe("ExpandTile", () => {
  it("렌더링 테스트", () => {
    render(<ExpandTile />);
    expect(screen.getByText("더 보기")).toBeInTheDocument();
  });

  it("본문 렌더링 테스트", () => {
    render(<ExpandTile>본문</ExpandTile>);

    expect(screen.getByText("본문")).toBeInTheDocument();
  });

  it("더 보기 버튼 클릭 후 텍스트 변경 테스트", async () => {
    render(<ExpandTile />);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(button).toHaveTextContent("닫기");
  });

  it("ARIA 속성 테스트", async () => {
    render(<ExpandTile />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("임의 발급 ID 테스트", () => {
    render(<ExpandTile />);

    const button = screen.getByRole("button");
    // eslint-disable-next-line testing-library/no-node-access
    const expandContent = document.getElementById(button.getAttribute("aria-controls")!);

    expect(button).toHaveAttribute("aria-controls", expandContent!.id);
  });

  it("버튼을 누른 후 ID 유지 확인", async () => {
    render(<ExpandTile />);

    const button = screen.getByRole("button");
    // eslint-disable-next-line testing-library/no-node-access
    const expandContent = document.getElementById(button.getAttribute("aria-controls")!);
    const initialId = expandContent?.id;

    await userEvent.click(button);

    expect(expandContent).toBeInTheDocument();
    expect(expandContent?.id).toBe(initialId);
  });

  it("사용자 지정 ID 테스트", async () => {
    render(<ExpandTile id="custom-expand-tile" />);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-controls", "custom-expand-tile");
  });

  it("사용자 정의 closeText 및 expandText 테스트", async () => {
    render(<ExpandTile closeText="닫기 버튼" expandText="열기 버튼" />);

    const button = screen.getByRole("button");
    expect(screen.getByText("열기 버튼")).toBeInTheDocument();
    await userEvent.click(button);

    expect(screen.getByText("닫기 버튼")).toBeInTheDocument();
  });

  it("초기 상태가 확장된 상태로 시작하는지 테스트", () => {
    render(<ExpandTile expanded />);
    expect(screen.getByText("닫기")).toBeInTheDocument();
  });

  it("다른 props가 올바르게 전달되는지 테스트", () => {
    render(<ExpandTile data-testid="custom-test-id" className="custom-class" />);

    const component = screen.getByTestId("custom-test-id");

    expect(component).toHaveClass("custom-class");
  });
});
