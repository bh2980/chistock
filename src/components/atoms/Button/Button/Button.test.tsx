import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
  describe("button 태그로 렌더링", () => {
    it("정상 렌더링", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");

      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveTextContent("Button");
    });

    it("focus 가능", async () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).not.toHaveFocus();
      await userEvent.tab();

      expect(button).toHaveFocus();
    });

    // focus 후 space 시 함수 호출 -> focus 유지
    it("space 키로 함수 실행", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      const button = screen.getByRole("button");

      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.type(button, "{space}");

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    // enter 시 함수 호출 -> focus 유지
    it("enter 키로 함수 실행", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      const button = screen.getByRole("button");

      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.type(button, "{enter}");

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    // click 시 함수 호출 -> focus 유지
    it("click 시 함수 실행", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("disabled 시 focus 불가", async () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).not.toHaveFocus();
      await userEvent.tab();

      expect(button).not.toHaveFocus();
    });

    it("disabled 시 클릭 불가", async () => {
      const onClick = jest.fn();

      render(
        <Button onClick={onClick} disabled>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
