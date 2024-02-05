import { renderHook } from "@testing-library/react";

import useID from "../useID";

describe("useID", () => {
  it("userProvidedID가 주어지지 않으면 정상적으로 ID를 생성한다.", () => {
    const { result } = renderHook(() => useID("componentName"));
    expect(result.current).toMatch(/^componentName-\d+$/);
  });

  it("userProvidedID가 주어지면 해당 ID를 반환한다.", () => {
    const { result } = renderHook(() => useID("componentName", "customID"));
    expect(result.current).toBe("customID");
  });

  it("같은 componentName으로 여러번 호출하면 증가하는 숫자가 포함된 서로 다른 ID를 생성한다.", () => {
    const { result: result1 } = renderHook(() => useID("componentName"));
    const { result: result2 } = renderHook(() => useID("componentName"));

    expect(result1.current).toMatch(/^componentName-\d+$/);
    expect(result2.current).toMatch(/^componentName-\d+$/);

    const [, number1] = result1.current.split("-");
    const [, number2] = result2.current.split("-");
    expect(Number(number1)).toBe(Number(number2) - 1);
  });

  it("다른 componentName으로 호출하면 각 componentName에 대해 별도의 증가하는 숫자가 포함된 ID를 생성한다.", () => {
    const { result: result1 } = renderHook(() => useID("componentName1"));
    const { result: result2 } = renderHook(() => useID("componentName2"));

    expect(result1.current).toMatch(/^componentName1-\d+$/);
    expect(result2.current).toMatch(/^componentName2-\d+$/);

    const [, number1] = result1.current.split("-");
    const [, number2] = result2.current.split("-");
    expect(Number(number1)).toBe(Number(number2) - 1);
  });
});
