import { render, screen } from "@testing-library/react";
import React from "react";

import Divider from "@atoms/Divider/Divider";

import List from "../List";

describe("List 컴포넌트", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링되어야 합니다.", () => {
    render(<List />);
  });

  it("자식 요소가 있는 경우, 자식 요소가 렌더링되어야 합니다.", () => {
    render(
      <List>
        <div>아이템 1</div>
        <div>아이템 2</div>
        <div>아이템 3</div>
      </List>
    );

    const item1 = screen.getByText("아이템 1");
    const item2 = screen.getByText("아이템 2");
    const item3 = screen.getByText("아이템 3");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
  });

  it("rating prop이 주어진 경우, 순위가 렌더링되어야 합니다.", () => {
    render(
      <List rating>
        <div>아이템 1</div>
        <div>아이템 2</div>
        <div>아이템 3</div>
      </List>
    );

    const rank1 = screen.getByText("1");
    const rank2 = screen.getByText("2");
    const rank3 = screen.getByText("3");

    expect(rank1).toBeInTheDocument();
    expect(rank2).toBeInTheDocument();
    expect(rank3).toBeInTheDocument();
  });

  it("divider prop이 주어진 경우, 아이템 사이에 구분선이 렌더링되어야 합니다.", () => {
    render(
      <List divider={<Divider />} data-testid="list">
        <div>아이템 1</div>
        <div>아이템 2</div>
        <div>아이템 3</div>
      </List>
    );

    const list = screen.getByTestId("list");
    const dividers = screen.getAllByRole("separator");

    expect(dividers).toHaveLength(2);
    dividers.forEach((divider) => expect(list).toContainElement(divider));
  });
});
