import { renderHook } from "@testing-library/react";

import { type ButtonAlterAs, type ButtonDefault, type ButtonProps, useButton } from "..";

describe("useButton 함수 테스트", () => {
  it("renderAs가 정의되지 않았을 때, renderAs의 기본값이 button이어야 합니다", () => {
    const props = {};
    const { result } = renderHook(() => useButton(props));

    expect(result.current.renderAs).toBe("button");
  });

  it("renderAs가 a로 정의되었을 때, role이 button이어야 합니다", () => {
    const props = { renderAs: "a" as const };
    const { result } = renderHook(() => useButton(props));

    expect(result.current.role).toBe("button");
  });

  it("renderAs가 'a'이고 disabled가 false일 때, tabIndex가 0이 되어야합니다.", () => {
    const props = { renderAs: "a" as const, disabled: false };
    const { result } = renderHook(() => useButton(props));

    expect(result.current.tabIndex).toBe(0);
  });

  it("disabled가 true일 때, aria-disabled가 true가 되어야합니다.", () => {
    const props = { disabled: true };
    const { result } = renderHook(() => useButton(props));

    expect(result.current["aria-disabled"]).toBe(true);
  });

  it("label이 정의되었을 때, aria-label이 해당 label값을 가져야합니다.", () => {
    const label = "Test Label";
    const props = { label };
    const { result } = renderHook(() => useButton(props));

    expect(result.current["aria-label"]).toBe(label);
  });

  it("renderAs가 'a'이고 disabled가 false일 때, onClick이 원래의 onClick함수를 가져야합니다.", () => {
    const onClick = jest.fn();
    const props = { renderAs: "a" as const, disabled: false, onClick };
    const { result } = renderHook(() => useButton(props));

    expect(result.current.onClick).toBe(onClick);
  });

  it("renderAs가 'a'이고 disabled가 true일 때, onClick이 undefined가 되어야합니다.", () => {
    const props = { renderAs: "a" as const, disabled: true, onClick: jest.fn() };
    const { result } = renderHook(() => useButton(props));

    expect(result.current.onClick).toBeUndefined();
  });

  it("otherProps가 정의되었을 때, 결과 객체에 otherProps가 포함되어야합니다.", () => {
    const otherProps = { dataTestId: "test" };
    const props = { ...otherProps };
    const { result } = renderHook(() =>
      useButton(props as ButtonProps<ButtonDefault, ButtonAlterAs>)
    );

    expect(result.current).toHaveProperty("dataTestId", "test");
  });
});
