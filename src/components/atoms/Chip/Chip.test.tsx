/* eslint-disable @typescript-eslint/ban-ts-comment */
import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Chip from "./Chip";
import { ChipProvider, useChipContext } from "./context/ChipContext";
import useChip from "./useChip";

describe("ChipContext 테스트", () => {
  it("defaultSelected prop이 있는 경우 초기값이 설정되어야 합니다.", () => {
    const { result } = renderHook(() => useChipContext(), {
      wrapper: ({ children }) => <ChipProvider defaultSelected={["1"]}>{children}</ChipProvider>,
    });

    expect(result.current.selectedChipList).toEqual(["1"]);
  });

  it("dispatchSelectedChipList 함수가 동작하여 상태가 변경되어야 합니다.", () => {
    const { result } = renderHook(() => useChipContext(), { wrapper: ChipProvider });

    act(() => {
      result.current.dispatchSelectedChipList({ type: "SELECT", payload: "1" });
    });

    expect(result.current.selectedChipList).toEqual(["1"]);

    act(() => {
      result.current.dispatchSelectedChipList({ type: "UNSELECT", payload: "1" });
    });

    expect(result.current.selectedChipList).toEqual([]);
  });

  it("multiSelect가 아닐 경우 다른 상태 선택 시 기존 선택 상태가 버려져야합니다.", () => {
    const { result } = renderHook(() => useChipContext(), { wrapper: ChipProvider });

    act(() => {
      result.current.dispatchSelectedChipList({ type: "SELECT", payload: "1" });
    });

    expect(result.current.selectedChipList).toEqual(["1"]);

    act(() => {
      result.current.dispatchSelectedChipList({ type: "SELECT", payload: "2" });
    });

    expect(result.current.selectedChipList).toEqual(["2"]);
  });

  it("multiSelect이 true인 경우, dispatchSelectedChipList 함수가 동작하여 상태가 변경되어야 합니다.", () => {
    const { result } = renderHook(() => useChipContext(), {
      wrapper: ({ children }) => <ChipProvider multiSelect>{children}</ChipProvider>,
    });

    act(() => {
      result.current.dispatchSelectedChipList({ type: "MULTISELECT", payload: "1" });
    });

    expect(result.current.selectedChipList).toEqual(["1"]);

    act(() => {
      result.current.dispatchSelectedChipList({ type: "MULTISELECT", payload: "2" });
    });

    expect(result.current.selectedChipList).toEqual(["1", "2"]);

    act(() => {
      result.current.dispatchSelectedChipList({ type: "UNSELECT", payload: "1" });
    });

    expect(result.current.selectedChipList).toEqual(["2"]);
  });
});

describe("useChip 훅 테스트", () => {
  const createWrapper = (options = {}) => {
    // eslint-disable-next-line react/display-name
    return ({ children }: { children: React.ReactNode | React.ReactNode[] }) => (
      <ChipProvider {...options}>{children}</ChipProvider>
    );
  };

  it("Chip 클릭 시, 선택 상태가 변경되어야 합니다.", () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useChip({ value: "1" }), { wrapper });

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
    const { result } = renderHook(() => useChip({ value: "1", onClick: handleClick }), { wrapper });

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
    const { result } = renderHook(() => useChip({ value: "1" }), { wrapper });

    expect(result.current).toHaveProperty("styleVariant");
  });

  it("버튼 클릭 시, styleVariant의 selected 속성과 aria-selected 속성이 변경되어야 합니다.", () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useChip({ value: "1" }), { wrapper });

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

describe("Chip 및 ChipGroup 컴포넌트 테스트", () => {
  it("Chip 컴포넌트는 정상적으로 렌더링되어야 합니다.", () => {
    render(<Chip value="1">Chip</Chip>);
    const chipElement = screen.getByRole("button");
    expect(chipElement).toBeInTheDocument();
  });

  it("ChipGroup 컴포넌트는 정상적으로 렌더링되어야 합니다.", () => {
    render(<Chip.ChipGroup />);
    const chipGroupElement = screen.getByRole("group");
    expect(chipGroupElement).toBeInTheDocument();
  });

  it("ChipGroup에 Chip을 추가하고 정상적으로 렌더링되어야 합니다.", () => {
    render(
      <Chip.ChipGroup>
        <Chip value="1">Chip 1</Chip>
        <Chip value="2">Chip 2</Chip>
      </Chip.ChipGroup>
    );
    const chipElements = screen.getAllByRole("button");
    expect(chipElements).toHaveLength(2);
  });

  it("Chip 클릭 시 상태가 변경 및 해제되어야 합니다.", async () => {
    render(
      <Chip.ChipGroup>
        <Chip value="1">Chip</Chip>
      </Chip.ChipGroup>
    );
    const chipElement = screen.getByRole("button");
    expect(chipElement).toHaveAttribute("aria-selected", "false");

    await userEvent.click(chipElement);
    expect(chipElement).toHaveAttribute("aria-selected", "true");

    await userEvent.click(chipElement);
    expect(chipElement).toHaveAttribute("aria-selected", "false");
  });

  it("multiSelect가 아닐 경우, Chip 클릭 시 기존 선택된 Chip 상태가 해제되어야 합니다.", async () => {
    render(
      <Chip.ChipGroup>
        <Chip value="1">Chip 1</Chip>
        <Chip value="2">Chip 2</Chip>
      </Chip.ChipGroup>
    );
    const chipElement1 = screen.getByText("Chip 1");
    const chipElement2 = screen.getByText("Chip 2");

    await userEvent.click(chipElement1);
    expect(chipElement1).toHaveAttribute("aria-selected", "true");

    await userEvent.click(chipElement2);
    expect(chipElement2).toHaveAttribute("aria-selected", "true");
    expect(chipElement1).toHaveAttribute("aria-selected", "false");
  });

  it("multiSelect이 true인 경우, Chip 클릭 시 클릭한 모든 Chip이 선택되어야합니다.", async () => {
    render(
      <Chip.ChipGroup multiSelect>
        <Chip value="1">Chip 1</Chip>
        <Chip value="2">Chip 2</Chip>
      </Chip.ChipGroup>
    );
    const chipElement1 = screen.getByText("Chip 1");
    const chipElement2 = screen.getByText("Chip 2");

    await userEvent.click(chipElement1);
    expect(chipElement1).toHaveAttribute("aria-selected", "true");

    await userEvent.click(chipElement2);
    expect(chipElement2).toHaveAttribute("aria-selected", "true");
    expect(chipElement1).toHaveAttribute("aria-selected", "true");
  });

  it("ChipGroup에 Chip을 추가하고 Chip을 클릭 시 클릭 이벤트가 올바르게 전달되어야 합니다.", async () => {
    const handleClick = jest.fn();
    const handleClick2 = jest.fn();
    render(
      <Chip.ChipGroup>
        <Chip value="1" onClick={handleClick}>
          Chip 1
        </Chip>
        <Chip value="2" onClick={handleClick2}>
          Chip 2
        </Chip>
      </Chip.ChipGroup>
    );
    const chipElements = screen.getAllByRole("button");

    await userEvent.click(chipElements[0]);
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick2).not.toHaveBeenCalled();
  });

  it("defaultSelected prop이 있는 경우 초기 선택 상태가 올바르게 설정되어야 합니다.", () => {
    render(
      <Chip.ChipGroup defaultSelected="1">
        <Chip value="1">Chip 1</Chip>
        <Chip value="2">Chip 2</Chip>
      </Chip.ChipGroup>
    );
    const chipElements = screen.getAllByRole("button");

    expect(chipElements[0]).toHaveAttribute("aria-selected", "true");
    expect(chipElements[1]).toHaveAttribute("aria-selected", "false");
  });

  it("defaultSelected prop이 배열인 경우 초기 선택 상태가 올바르게 설정되어야 합니다.", () => {
    render(
      <Chip.ChipGroup defaultSelected={["1", "2"]}>
        <Chip value="1">Chip 1</Chip>
        <Chip value="2">Chip 2</Chip>
        <Chip value="3">Chip 3</Chip>
      </Chip.ChipGroup>
    );
    const chipElements = screen.getAllByRole("button");

    expect(chipElements[0]).toHaveAttribute("aria-selected", "true");
    expect(chipElements[1]).toHaveAttribute("aria-selected", "true");
    expect(chipElements[2]).toHaveAttribute("aria-selected", "false");
  });
});
