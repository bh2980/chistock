import { act, renderHook } from "@testing-library/react";

import { SelectedListProvider, useSelectedListContext } from "./SelectedListContext";
import SelectedListReducer from "./SelectedListReducers";

describe("SelectedListReducer 테스트", () => {
  it("SELECT 액션에 대한 상태 변경이 올바르게 이루어져야 합니다.", () => {
    const initialState = ["1"];

    const newState = SelectedListReducer(initialState, {
      type: "SELECT",
      payload: "2",
    });

    expect(newState).toEqual(["2"]);
  });

  it("UNSELECT 액션에 대한 상태 변경이 올바르게 이루어져야 합니다.", () => {
    const initialState = ["1", "2"];

    const newState = SelectedListReducer(initialState, {
      type: "UNSELECT",
      payload: "1",
    });

    expect(newState).toEqual(["2"]);
  });

  it("MULTISELECT 액션에 대한 상태 변경이 올바르게 이루어져야 합니다.", () => {
    const initialState = ["1"];

    const newState = SelectedListReducer(initialState, {
      type: "MULTISELECT",
      payload: "2",
    });

    expect(newState).toEqual(["1", "2"]);
  });
});

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
