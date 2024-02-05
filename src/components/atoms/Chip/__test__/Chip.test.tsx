/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Chip from "../Chip";

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
