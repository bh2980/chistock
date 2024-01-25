import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
  describe("button 태그로 렌더링", () => {
    it("에러 없이 렌더링되어야 합니다.", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");

      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveTextContent("Button");
    });

    it("tab으로 focus가 되어야합니다.", async () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).not.toHaveFocus();
      await userEvent.tab();

      expect(button).toHaveFocus();
    });

    it("space 키로 onClick 함수를 실행해야합니다.", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      const button = screen.getByRole("button");

      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.type(button, "{space}");

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("enter 키로 onClick 함수를 실행해야합니다.", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      const button = screen.getByRole("button");

      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.type(button, "{enter}");

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("click 시 onClick 함수를 실행해야합니다.", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick}>Button</Button>);
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("아이콘 버튼에서는 자식이 렌더링되면 안됩니다.", async () => {
      render(
        <Button isIconButton label="테스트 라벨">
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      expect(button).not.toHaveTextContent("Button");
    });

    //disabled

    it("disabled 속성이 정상적으로 적용되어야합니다..", async () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });

    it("disabled시 focus가 잡히지않아야 합니다.", async () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).not.toHaveFocus();
      await userEvent.tab();

      expect(button).not.toHaveFocus();
    });

    it("disabled시 click이 불가능해야합니다.", async () => {
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

    //accessibility

    it("disabled 시 aria-disabled를 가져야합니다.", async () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-disabled");
    });

    it("아이콘 버튼에서는 aria-label을 가져야합니다.", async () => {
      render(<Button isIconButton label="테스트 라벨" />);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-label");
    });
  });

  describe("a 태그로 렌더링", () => {
    it("에러 없이 렌더링되어야 합니다.", () => {
      render(<Button renderAs="a">Button</Button>);
      const button = screen.getByRole("button");

      expect(button.tagName).toBe("A");
      expect(button).toHaveTextContent("Button");
    });

    it("tab으로 focus가 되어야합니다.", async () => {
      render(<Button renderAs="a">Button</Button>);
      const button = screen.getByRole("button");

      expect(button).not.toHaveFocus();
      await userEvent.tab();

      expect(button).toHaveFocus();
    });

    it("space 키로 onClick 함수를 실행해야합니다.", async () => {
      const onClick = jest.fn();

      render(
        <Button renderAs="a" onClick={onClick}>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.type(button, "{space}");

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("enter 키로 onClick 함수를 실행해야합니다.", async () => {
      const onClick = jest.fn();

      render(
        <Button renderAs="a" onClick={onClick}>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      await userEvent.tab();
      expect(button).toHaveFocus();
      await userEvent.type(button, "{enter}");

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("click 시 onClick 함수를 실행해야합니다.", async () => {
      const onClick = jest.fn();

      render(
        <Button renderAs="a" onClick={onClick}>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveFocus();
    });

    it("아이콘 버튼에서는 자식이 렌더링되면 안됩니다.", async () => {
      render(
        <Button renderAs="a" isIconButton label="테스트 라벨">
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      expect(button).not.toHaveTextContent("Button");
    });

    //disabled

    it("disabled시 focus가 잡히지않아야 합니다.", async () => {
      render(
        <Button renderAs="a" disabled>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      expect(button).not.toHaveFocus();
      await userEvent.tab();

      expect(button).not.toHaveFocus();
    });

    it("disabled시 click이 불가능해야합니다.", async () => {
      const onClick = jest.fn();

      render(
        <Button renderAs="a" onClick={onClick} disabled>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(onClick).not.toHaveBeenCalled();
    });

    //accessibility

    it("disabled 시 aria-disabled를 가져야합니다.", async () => {
      render(
        <Button renderAs="a" disabled>
          Button
        </Button>
      );
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-disabled");
    });

    it("아이콘 버튼에서는 aria-label을 가져야합니다.", async () => {
      render(<Button renderAs="a" isIconButton label="테스트 라벨" />);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-label");
    });
  });
});
