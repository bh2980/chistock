import { act, renderHook } from "@testing-library/react";

import usePressed from "../usePressed";

describe("usePressed", () => {
  it("아무 값도 주어지지 않을 경우 aria-pressed가 false여야 합니다.", () => {
    const { result } = renderHook(() => usePressed());

    expect(result.current["aria-pressed"]).toBe(false);
  });

  it("pressed가 false로 주어질 경우 aria-pressed가 false여야 합니다.", () => {
    const { result } = renderHook(() => usePressed(false));

    expect(result.current["aria-pressed"]).toBe(false);
  });

  it("pressed가 true로 주어질 경우 aria-pressed가 true여야 합니다.", () => {
    const { result } = renderHook(() => usePressed(true));

    expect(result.current["aria-pressed"]).toBe(true);
  });

  it("pressed의 값이 styleVariant에 들어있어야 합니다.", () => {
    const styleVariant = { customStyle: "value" };
    const { result } = renderHook(() => usePressed(false, { styleVariant }));

    expect(result.current.styleVariant).toHaveProperty("pressed", false);
    expect(result.current.styleVariant).toHaveProperty("customStyle", "value");
  });

  it("onClick 함수가 주어진 경우 버튼 클릭 시 호출되어야 합니다.", () => {
    const onClickMock = jest.fn();
    const { result } = renderHook(() => usePressed(false, { onClick: onClickMock }));

    act(() => {
      result.current.onClick();
    });

    expect(onClickMock).toHaveBeenCalled();
  });

  it("onClick 함수 클릭 시 isPressed가 변경되어야 합니다.", () => {
    const { result } = renderHook(() => usePressed(false));

    act(() => {
      result.current.onClick();
    });

    expect(result.current["aria-pressed"]).toBe(true);

    act(() => {
      result.current.onClick();
    });

    expect(result.current["aria-pressed"]).toBe(false);
  });
});
