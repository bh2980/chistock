import { renderHook } from "@testing-library/react";

import useTextField from "../useTextField";

describe("useTextField", () => {
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
