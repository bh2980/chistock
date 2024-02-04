/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SelectedListProvider } from "@contexts/SelectedContext/SelectedListContext";
import useSelectedList from "@hooks/useSelected";
import { act, renderHook } from "@testing-library/react";

describe("useSelectedList 훅 테스트", () => {
  const createWrapper = (options = {}) => {
    // eslint-disable-next-line react/display-name
    return ({ children }: { children: React.ReactNode | React.ReactNode[] }) => (
      <SelectedListProvider {...options}>{children}</SelectedListProvider>
    );
  };

  it("Chip 클릭 시, 선택 상태가 변경되어야 합니다.", () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useSelectedList({ value: "1" }), { wrapper });

    act(() => {
      //@ts-ignore
      result.current.onClick({ currentTarget: { value: "1" } });
    });
    expect(result.current["aria-selected"]).toBe(true);

    act(() => {
      //@ts-ignore
      result.current.onClick({ currentTarget: { value: "1" } });
    });
    expect(result.current["aria-selected"]).toBe(false);
  });

  it("onClick prop이 있는 경우, Chip 클릭 시 해당 함수가 호출되어야 합니다.", () => {
    const handleClick = jest.fn();
    const wrapper = createWrapper();
    const { result } = renderHook(() => useSelectedList({ value: "1", onClick: handleClick }), {
      wrapper,
    });

    act(() => {
      //@ts-ignore
      result.current.onClick({ currentTarget: { value: "1" } });
    });

    expect(handleClick).toHaveBeenCalledWith(
      expect.objectContaining({ currentTarget: { value: "1" } })
    );
  });

  it("styleVariant이 정상적으로 반환되어야 합니다.", () => {
    const wrapper = createWrapper({ multiSelect: true });
    const { result } = renderHook(() => useSelectedList({ value: "1" }), { wrapper });

    expect(result.current).toHaveProperty("styleVariant");
  });

  it("버튼 클릭 시, styleVariant의 selected 속성과 aria-selected 속성이 변경되어야 합니다.", () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useSelectedList({ value: "1" }), { wrapper });

    expect(result.current.styleVariant.selected).toBe(false);
    expect(result.current["aria-selected"]).toBe(false);

    act(() => {
      //@ts-ignore
      result.current.onClick({ currentTarget: { value: "1" } });
    });

    expect(result.current.styleVariant.selected).toBe(true);
    expect(result.current["aria-selected"]).toBe(true);

    act(() => {
      //@ts-ignore
      result.current.onClick({ currentTarget: { value: "1" } });
    });

    expect(result.current.styleVariant.selected).toBe(false);
    expect(result.current["aria-selected"]).toBe(false);
  });
});
