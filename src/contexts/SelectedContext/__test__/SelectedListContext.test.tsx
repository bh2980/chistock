import { act, renderHook } from "@testing-library/react";

import { SelectedListProvider, useSelectedListContext } from "../SelectedListContext";

describe("SelectedListContext 테스트", () => {
  it("defaultSelected이 없을 경우 초기값은 빈 배열이어야 합니다.", () => {
    const { result } = renderHook(() => useSelectedListContext(), {
      wrapper: SelectedListProvider,
    });

    expect(result.current.selectedList).toEqual([]);
  });

  it("defaultSelected이 문자열일 경우 초기값이 설정되어야 합니다.", () => {
    const { result } = renderHook(() => useSelectedListContext(), {
      wrapper: ({ children }) => (
        <SelectedListProvider defaultSelected={"1"}>{children}</SelectedListProvider>
      ),
    });

    expect(result.current.selectedList).toEqual(["1"]);
  });

  it("defaultSelected이 배열일 경우 초기값이 설정되어야 합니다.", () => {
    const { result } = renderHook(() => useSelectedListContext(), {
      wrapper: ({ children }) => (
        <SelectedListProvider defaultSelected={["1", "2"]}>{children}</SelectedListProvider>
      ),
    });

    expect(result.current.selectedList).toEqual(["1", "2"]);
  });

  it("dispatchSelectedList 함수가 동작하여 상태가 변경되어야 합니다.", () => {
    const { result } = renderHook(() => useSelectedListContext(), {
      wrapper: SelectedListProvider,
    });

    act(() => {
      result.current.dispatchSelectedList({ type: "SELECT", payload: "1" });
    });

    expect(result.current.selectedList).toEqual(["1"]);

    act(() => {
      result.current.dispatchSelectedList({ type: "UNSELECT", payload: "1" });
    });

    expect(result.current.selectedList).toEqual([]);
  });

  it("multiSelect가 아닐 경우 다른 상태 선택 시 기존 선택 상태가 버려져야합니다.", () => {
    const { result } = renderHook(() => useSelectedListContext(), {
      wrapper: SelectedListProvider,
    });

    act(() => {
      result.current.dispatchSelectedList({ type: "SELECT", payload: "1" });
    });

    expect(result.current.selectedList).toEqual(["1"]);

    act(() => {
      result.current.dispatchSelectedList({ type: "SELECT", payload: "2" });
    });

    expect(result.current.selectedList).toEqual(["2"]);
  });

  it("multiSelect이 true인 경우, dispatchSelectedList 함수가 동작하여 상태가 변경되어야 합니다.", () => {
    const { result } = renderHook(() => useSelectedListContext(), {
      wrapper: ({ children }) => (
        <SelectedListProvider multiSelect>{children}</SelectedListProvider>
      ),
    });

    act(() => {
      result.current.dispatchSelectedList({ type: "MULTISELECT", payload: "1" });
    });

    expect(result.current.selectedList).toEqual(["1"]);

    act(() => {
      result.current.dispatchSelectedList({ type: "MULTISELECT", payload: "2" });
    });

    expect(result.current.selectedList).toEqual(["1", "2"]);

    act(() => {
      result.current.dispatchSelectedList({ type: "UNSELECT", payload: "1" });
    });

    expect(result.current.selectedList).toEqual(["2"]);
  });
});
