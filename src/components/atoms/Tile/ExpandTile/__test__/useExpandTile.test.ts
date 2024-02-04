import { act, renderHook } from "@testing-library/react";

import useExpandTile from "../useExpandTile";

describe("useExpandTile", () => {
  it("초기화 테스트", () => {
    const { result } = renderHook(() => useExpandTile({}));
    expect(result.current.styleVariant.isExpand).toBe(false);
  });

  it("상태 토글 테스트", () => {
    const { result } = renderHook(() => useExpandTile({}));
    const { buttonProps } = result.current;

    expect(result.current.styleVariant.isExpand).toBe(false);

    act(() => {
      buttonProps.onClick();
    });

    expect(result.current.styleVariant.isExpand).toBe(true);
  });

  it("aria 속성 테스트", () => {
    const { result } = renderHook(() => useExpandTile({}));
    const { buttonProps } = result.current;

    expect(result.current.buttonProps["aria-expanded"]).toBe(false);
    act(() => {
      buttonProps.onClick();
    });
    expect(result.current.buttonProps["aria-expanded"]).toBe(true);
  });

  it("그라데이션 표시 테스트", () => {
    const { result } = renderHook(() => useExpandTile({ hideWithGradient: true }));
    const { buttonProps } = result.current;

    expect(result.current.showGradient).toBe(true);
    act(() => {
      buttonProps.onClick();
    });
    expect(result.current.showGradient).toBe(false);
  });

  it("ID 생성 테스트", () => {
    const { result } = renderHook(() => useExpandTile({}));
    expect(result.current.id).toContain("expand-tile");
  });

  it("사용자 제공 ID 테스트", () => {
    const { result } = renderHook(() => useExpandTile({ id: "custom-id" }));
    expect(result.current.id).toBe("custom-id");
  });
});
