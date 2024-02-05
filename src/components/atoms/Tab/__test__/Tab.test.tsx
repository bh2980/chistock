/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tab from "../Tab";

describe("Tab", () => {
  it("에러 없이 렌더링", () => {
    render(<Tab value="tab1" />, {
      wrapper: (props) => <Tab.TabList defaultSelected="" {...props} />,
    });

    const tab = screen.getByRole("tab") as HTMLButtonElement;

    expect(tab.value).toBe("tab1");
    expect(tab).toHaveAttribute("aria-selected", "false");
    expect(tab).toBeInTheDocument();
  });

  it("click 시 aria-selected가 true로 변경", async () => {
    render(<Tab value="tab1" />, {
      wrapper: (props) => <Tab.TabList defaultSelected="" {...props} />,
    });

    const tab = screen.getByRole("tab") as HTMLButtonElement;

    await userEvent.click(tab);

    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it("selected된 탭을 다시 click 시 aria-selected가 true으로 유지", async () => {
    render(<Tab value="tab1" />, {
      wrapper: (props) => <Tab.TabList defaultSelected="" {...props} />,
    });

    const tab = screen.getByRole("tab") as HTMLButtonElement;

    // 첫 클릭 시 true
    await userEvent.click(tab);
    expect(tab).toHaveAttribute("aria-selected", "true");

    // 다음 click 시에도 true
    await userEvent.click(tab);
    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it("click 시 기존 onClick 함수 실행", async () => {
    const onClick = jest.fn();

    render(<Tab value="tab1" onClick={onClick} />, {
      wrapper: (props) => <Tab.TabList defaultSelected="" {...props} />,
    });

    const tab = screen.getByRole("tab") as HTMLButtonElement;

    await userEvent.click(tab);

    expect(onClick).toHaveBeenCalled();
  });
});

describe("TabList", () => {
  it("에러 없이 렌더링", () => {
    render(
      <Tab.TabList defaultSelected="tab1">
        <Tab value="tab1" />
        <Tab value="tab2" />
        <Tab value="tab3" />
      </Tab.TabList>
    );

    const tablist = screen.getByRole("tablist");
    const tabs = screen.getAllByRole("tab");

    expect(tablist).toBeInTheDocument();
    expect(tabs).toHaveLength(3);
  });

  it("tab 할 경우 defaultSelected인 tab으로 focus가 이동해야합니다.", async () => {
    render(
      <Tab.TabList defaultSelected="tab1">
        <Tab value="tab1" />
        <Tab value="tab2" />
        <Tab value="tab3" />
      </Tab.TabList>
    );

    const tablist = screen.getByRole("tablist");

    await userEvent.tab();

    const focusTab = document.activeElement as HTMLButtonElement;

    expect(focusTab.value).toBe("tab1");
    expect(tablist).toContainElement(focusTab);
  });

  it("tab에 focus되어있는 상태에서 다시 tab을 할 경우 tablist 외부로 focus가 이동해야합니다.", async () => {
    render(
      <>
        <Tab.TabList defaultSelected="tab1">
          <Tab value="tab1" />
          <Tab value="tab2" />
          <Tab value="tab3" />
        </Tab.TabList>
        <button>Outside Button</button>
      </>
    );

    const outsideButton = screen.getByText("Outside Button");

    // 첫 번째 tab에 포커스를 이동합니다.
    await userEvent.tab();
    const focusTab = document.activeElement as HTMLButtonElement;

    expect(focusTab.value).toBe("tab1");

    // 마지막으로 한 번 더 tab을 누르면, 포커스가 TabList 외부의 버튼으로 이동해야 합니다.
    await userEvent.tab();
    expect(outsideButton).toHaveFocus();
  });

  it("tab에 focus되어있는 상태에서 왼쪽 방향키를 누를 경우 왼쪽 Tab으로 focus가 이동해야합니다.", async () => {
    render(
      <>
        <Tab.TabList defaultSelected="tab2">
          <Tab value="tab1" />
          <Tab value="tab2" />
          <Tab value="tab3" />
        </Tab.TabList>
      </>
    );

    const tabs = screen.getAllByRole("tab");

    tabs[1].focus();
    // 초기에는 두 번째 탭에 포커스가 맞춰져 있어야 합니다.
    expect(tabs[1]).toHaveFocus();

    await userEvent.keyboard("[ArrowLeft]");

    // 왼쪽 화살표를 누를 경우 왼쪽 탭에 focus가 가야합니다.
    expect(tabs[0]).toHaveFocus();
  });

  it("tab에 focus되어있는 상태에서 오른쪽 방향키를 누를 경우 오른쪽 Tab으로 focus가 이동해야합니다.", async () => {
    render(
      <>
        <Tab.TabList defaultSelected="tab2">
          <Tab value="tab1" />
          <Tab value="tab2" />
          <Tab value="tab3" />
        </Tab.TabList>
      </>
    );

    const tabs = screen.getAllByRole("tab");

    tabs[1].focus();
    // 초기에는 두 번째 탭에 포커스가 맞춰져 있어야 합니다.
    expect(tabs[1]).toHaveFocus();

    await userEvent.keyboard("[ArrowRight]");

    // 오른쪽 화살표를 누를 경우 오른쪽 탭에 focus가 가야합니다.
    expect(tabs[2]).toHaveFocus();
  });

  it("첫 번째 tab에 focus 되어있는 상태에서 왼쪽 화살표를 누를 경우 마지막 tab으로 이동해야합니다.", async () => {
    render(
      <>
        <Tab.TabList defaultSelected="tab2">
          <Tab value="tab1" />
          <Tab value="tab2" />
          <Tab value="tab3" />
        </Tab.TabList>
      </>
    );

    const tabs = screen.getAllByRole("tab");

    tabs[0].focus();
    // 초기에는 두 번째 탭에 포커스가 맞춰져 있어야 합니다.
    expect(tabs[0]).toHaveFocus();

    await userEvent.keyboard("[ArrowLeft]");

    // 왼쪽 화살표를 누를 경우 마지막 탭에 focus가 가야합니다.
    expect(tabs[2]).toHaveFocus();
  });

  it("마지막 tab에 focus 되어있는 상태에서 오른쪽 화살표를 누를 경우 첫 번째 tab으로 이동해야합니다.", async () => {
    render(
      <>
        <Tab.TabList defaultSelected="tab2">
          <Tab value="tab1" />
          <Tab value="tab2" />
          <Tab value="tab3" />
        </Tab.TabList>
      </>
    );

    const tabs = screen.getAllByRole("tab");

    tabs[2].focus();
    // 초기에는 두 번째 탭에 포커스가 맞춰져 있어야 합니다.
    expect(tabs[2]).toHaveFocus();

    await userEvent.keyboard("[ArrowRight]");

    // 오른쪽 화살표를 누를 경우 첫 번째 탭에 focus가 가야합니다.
    expect(tabs[0]).toHaveFocus();
  });
});
