import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";
import type { ButtonAlterAs, ButtonDefault, ButtonProps } from "./Button.types";
import convertButtonProps from "./Button.utils";

describe("Button", () => {
  describe("convertButtonProps 함수 테스트", () => {
    it("renderAs가 정의되지 않았을 때, renderAs의 기본값이 button이어야 합니다", () => {
      const props = {};
      const resultProps = convertButtonProps(props);

      expect(resultProps.renderAs).toBe("button");
    });

    it("renderAs가 a로 정의되었을 때, role이 button이어야 합니다", () => {
      const props = { renderAs: "a" as const };
      const resultProps = convertButtonProps(props);

      expect(resultProps.role).toBe("button");
    });

    it("isIconButton이 true일 때, children이 undefined가 되어야합니다.", () => {
      const props = {
        isIconButton: true,
        label: "테스트라벨",
        children: [<div key="1">Test</div>, <div key="2">Test</div>],
      };
      const { children } = convertButtonProps(props);

      expect(children).toBeUndefined();
    });

    it("iconPosition이 정의되지 않았을 때, iconPosition의 기본값이 before여야합니다.", () => {
      const props = {};
      const resultProps = convertButtonProps(props);

      expect(resultProps.iconPosition).toBe("before");
    });

    it("renderAs가 'a'이고 disabled가 false일 때, tabIndex가 0이 되어야합니다.", () => {
      const props = { renderAs: "a" as const, disabled: false };
      const resultProps = convertButtonProps(props);

      expect(resultProps.tabIndex).toBe(0);
    });

    it("disabled가 true일 때, aria-disabled가 true가 되어야합니다.", () => {
      const props = { disabled: true };
      const resultProps = convertButtonProps(props);

      expect(resultProps["aria-disabled"]).toBe(true);
    });

    it("label이 정의되었을 때, aria-label이 해당 label값을 가져야합니다.", () => {
      const label = "Test Label";
      const props = { label };
      const resultProps = convertButtonProps(props);

      expect(resultProps["aria-label"]).toBe(label);
    });

    it("renderAs가 'a'이고 disabled가 false일 때, onClick이 원래의 onClick함수를 가져야합니다.", () => {
      const onClick = jest.fn();
      const props = { renderAs: "a" as const, disabled: false, onClick };
      const resultProps = convertButtonProps(props);

      expect(resultProps.onClick).toBe(onClick);
    });

    it("renderAs가 'a'이고 disabled가 true일 때, onClick이 undefined가 되어야합니다.", () => {
      const props = { renderAs: "a" as const, disabled: true, onClick: jest.fn() };
      const resultProps = convertButtonProps(props);

      expect(resultProps.onClick).toBeUndefined();
    });

    it("otherProps가 정의되었을 때, 결과 객체에 otherProps가 포함되어야합니다.", () => {
      const otherProps = { dataTestId: "test" };
      const props = { ...otherProps };
      const resultProps = convertButtonProps(
        props as ButtonProps<ButtonDefault | ButtonAlterAs, ButtonAlterAs>
      );

      expect(resultProps).toHaveProperty("dataTestId", "test");
    });
  });

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
