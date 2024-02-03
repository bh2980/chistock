/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Icon from "@atoms/Icon/Icon";

import TextField from ".";
import useTextField from "./useTextField";

// eslint-disable-next-line react/display-name
jest.mock("@atoms/Icon/Icon", () => ({ icon }: { icon: string }) => <div>{icon}</div>);

describe("useTextFieldProps", () => {
  it("id가 없을 경우 생성하여 부여합니다.", () => {
    const props = {};

    const { result } = renderHook(() => useTextField(props));

    expect(result.current.id).not.toBeUndefined();
  });

  it("id가 있을 경우 id를 그대로 내보냅니다..", () => {
    const props = { id: "myTestID" };

    const { result } = renderHook(() => useTextField(props));

    expect(result.current.id).toBe("myTestID");
  });

  it("label이 없을 경우, haveLabel는 false여야합니다.", () => {
    const props = {};

    const { result } = renderHook(() => useTextField(props));

    expect(result.current.haveLabel).toBe(false);
  });

  it("label이 있을 경우, haveLabel는 true여야햡니다..", () => {
    const props = { label: "myTestLabel" };

    const { result } = renderHook(() => useTextField(props));

    expect(result.current.haveLabel).toBe(true);
  });
});

describe("TextField", () => {
  // normal rendering
  it("에러 없이 렌더링 되어야 합니다.", () => {
    render(<TextField />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.tagName).toBe("INPUT");
  });

  it("id 미부여 시 label의 for와 input의 id가 동일한 값으로 부여됩니다.", () => {
    const { container } = render(<TextField label="LABEL" />);

    const label = container.querySelector("label");
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(label?.htmlFor).toBe(input.id);
  });

  it("id 부여 시 해당 id로 label과 input이 연결됩니다.", () => {
    const { container } = render(<TextField id="TEST-ID" label="LABEL" />);

    const input = screen.getByLabelText("LABEL") as HTMLInputElement;
    const label = container.querySelector("label");

    expect(label?.htmlFor).toBe("TEST-ID");
    expect(input.id).toBe("TEST-ID");
  });

  it("label을 props로 받아 렌더링해야합니다.", () => {
    render(<TextField label="LABEL" />);

    const label = screen.getByText("LABEL");

    expect(label).toBeInTheDocument();
  });

  it("placeholder를 props로 받아 렌더링해야합니다.", () => {
    render(<TextField placeholder="PLACEHOLDER" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.placeholder).toBe("PLACEHOLDER");
  });

  it("value를 prosp로 받아 렌더링해야합니다.", () => {
    const onChange = jest.fn();
    render(<TextField value="VALUE" onChange={onChange} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).toHaveValue("VALUE");
  });

  it("defaultValue를 prosp로 받아 렌더링해야합니다.", () => {
    render(<TextField defaultValue="defaultValue" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).toHaveValue("defaultValue");
  });

  it("helper text를 prosp로 받아 렌더링해야합니다.", () => {
    const { container } = render(<TextField helperText="HELPER_TEXT" />);

    expect(container).toHaveTextContent("HELPER_TEXT");
  });

  it("leading Icon를 prosp로 받아 렌더링해야합니다.", () => {
    const { container } = render(<TextField leadingIcon={<Icon icon="moon" />} />);

    expect(container).toHaveTextContent("moon");
  });

  it("trailing Icon를 prosp로 받아 렌더링해야합니다.", () => {
    const { container } = render(<TextField trailingIcon={<Icon icon="moon" />} />);

    expect(container).toHaveTextContent("moon");
  });

  // focus
  it("tab으로 input 태그에 focus가 되어야합니다.", async () => {
    render(<TextField />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).not.toHaveFocus();
    await userEvent.tab();

    expect(input).toHaveFocus();
  });

  it("label을 click하면 input 태그에 focus가 되어야합니다.", async () => {
    const { container } = render(<TextField />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const label = container.querySelector("label") as HTMLLabelElement;

    expect(input).not.toHaveFocus();
    await userEvent.click(label);

    expect(input).toHaveFocus();
  });

  // typing
  it("user가 typing 시 value가 update 되어야합니다.", async () => {
    render(<TextField />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(input).toHaveValue("TYPE");
  });

  it("onChange 함수를 props로 받아 typeing 시 실행해야합니다.", async () => {
    const onChange = jest.fn();
    render(<TextField onChange={onChange} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(onChange).toHaveBeenCalled();
  });

  // disalbed
  it("disabled 시 tab으로 focus를 받지 않아야합니다.", async () => {
    render(<TextField disabled />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).not.toHaveFocus();
    await userEvent.tab();

    expect(input).not.toHaveFocus();
  });

  it("disabled 시 label을 click해도 focus를 받지 않아야합니다.", async () => {
    const { container } = render(<TextField disabled />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const label = container.querySelector("label") as HTMLLabelElement;

    expect(input).not.toHaveFocus();
    await userEvent.click(label);

    expect(input).not.toHaveFocus();
  });

  it("disabled 시 user가 typing 시 value가 update 되지 않아야합니다", async () => {
    render(<TextField disabled value="VALUE" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(input).toHaveValue("VALUE");
  });

  // readOnly
  it("readOnly 시 tab으로 focus 되어야합니다.", async () => {
    render(<TextField readOnly />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input).not.toHaveFocus();
    await userEvent.tab();

    expect(input).toHaveFocus();
  });

  it("readOnly 시 label을 click하면 focus 되어야합니다.", async () => {
    const { container } = render(<TextField readOnly />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const label = container.querySelector("label") as HTMLLabelElement;

    expect(input).not.toHaveFocus();
    await userEvent.click(label);

    expect(input).toHaveFocus();
  });

  it("readOnly 시 user가 typing 시 value가 update 되지 않아야합니다", async () => {
    render(<TextField readOnly value="VALUE" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    await userEvent.type(input, "TYPE");

    expect(input).toHaveValue("VALUE");
  });
});
