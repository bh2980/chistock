import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToggleButton from ".";
import useToggleButton from "./useToggleButton";

describe("ToggleButton", () => {
  describe("useToggleButton", () => {
    it("아무 값도 주어지지 않을 경우 aria-pressed가 false여야합니다.", () => {
      const { result } = renderHook(() => useToggleButton({}));

      expect(result.current["aria-pressed"]).toBe(false);
    });

    it("pressed가 false로 주어질 경우 aria-pressed가 false여야합니다.", () => {
      const { result } = renderHook(() => useToggleButton({ pressed: false }));

      expect(result.current["aria-pressed"]).toBe(false);
    });

    it("pressed가 true로 주어질 경우 aria-pressed가 true여야합니다.", () => {
      const { result } = renderHook(() => useToggleButton({ pressed: true }));

      expect(result.current["aria-pressed"]).toBe(true);
    });

    it("pressed의 값이 styleVariant에 들어있어야 합니다.", () => {
      const { result } = renderHook(() => useToggleButton({ pressed: false }));

      expect(result.current.styleVariant).toHaveProperty("pressed", false);
    });
  });

  describe("Toggle Button 컴포넌트", () => {
    it("에러 없이 정상적으로 렌더링되어야 합니다.", () => {
      render(<ToggleButton>버튼</ToggleButton>);

      const button = screen.getByRole("button");

      expect(button.tagName).toBe("BUTTON");
    });

    it("기본값으로 aria-pressed가 false여야합니다.", () => {
      render(<ToggleButton>버튼</ToggleButton>);

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-pressed", "false");
    });

    it("pressed를 true로 줄 경우 aria-pressed가 true여야합니다..", () => {
      render(<ToggleButton pressed={true}>버튼</ToggleButton>);

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("버튼을 click 시 aria-pressed가 true로 변경되어야합니다.", async () => {
      const onClick = jest.fn();
      render(<ToggleButton onClick={onClick}>버튼</ToggleButton>);

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-pressed", "false");

      await userEvent.click(button);

      expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("버튼을 click 후 다시 click 시 aria-pressed가 false로 변경되어야합니다.", async () => {
      const onClick = jest.fn();
      render(<ToggleButton onClick={onClick}>버튼</ToggleButton>);

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-pressed", "false");

      await userEvent.click(button);
      await userEvent.click(button);

      expect(button).toHaveAttribute("aria-pressed", "false");
    });
  });
});
