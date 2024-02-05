import { SelectedListProvider } from "@contexts/SelectedContext";
import { renderHook } from "@testing-library/react";

import { useTab, useTabList } from "../useTabList";

describe("useTab", () => {
  it("초기값 확인", () => {
    const { result } = renderHook(() => useTab({ value: "tab1" }), {
      wrapper: SelectedListProvider,
    });

    expect(result.current.styleVariant.focusOutlineOffset).toBe(false);
    expect(result.current.role).toBe("tab");
    expect(result.current.tabIndex).toBe(-1);
  });

  it("선택되지 않은 탭의 경우 'aria-selected' 속성이 false로 설정되어 있는지 확인합니다.", () => {
    const { result } = renderHook(() => useTab({ value: "tab1" }), {
      wrapper: SelectedListProvider,
    });

    expect(result.current["aria-selected"]).toBe(false);
  });

  it("선택되지 않은 탭의 경우 'tabIndex' 속성이 -1로 설정되어 있는지 확인합니다.", () => {
    const { result } = renderHook(() => useTab({ value: "tab1" }), {
      wrapper: SelectedListProvider,
    });

    expect(result.current.tabIndex).toBe(-1);
  });

  it("선택된 탭의 경우 'aria-selected' 속성이 true로 설정되어 있는지 확인합니다.", () => {
    const { result } = renderHook(() => useTab({ value: "tab1" }), {
      wrapper: (props) => <SelectedListProvider defaultSelected={"tab1"} {...props} />,
    });

    expect(result.current["aria-selected"]).toBe(true);
  });

  it("선택된 탭의 경우 'tabIndex' 속성이 전달한 대로 설정되어 있는지 확인합니다.", () => {
    const { result } = renderHook(() => useTab({ value: "tab1", tabIndex: 2 }), {
      wrapper: (props) => <SelectedListProvider defaultSelected={"tab1"} {...props} />,
    });

    expect(result.current.tabIndex).toBe(2);
  });
});

describe("useTabList", () => {
  it("초기값 확인", () => {
    const { result } = renderHook(() => useTabList({ defaultSelected: "" }), {
      wrapper: SelectedListProvider,
    });

    expect(result.current.role).toBe("tablist");
    expect(result.current["aria-orientation"]).toBe("horizontal");
  });
});
