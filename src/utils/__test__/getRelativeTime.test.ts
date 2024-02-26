import { getRelativeTime } from "@utils/getRelativeTime";

describe("getRelativeTime", () => {
  jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

  it("1시간 미만이라면 방금 전", () => {
    const result = getRelativeTime(Date.now() - 1000 * 60 * 60 + 1);
    expect(result).toBe("방금 전");
  });

  it("1시간인 경우 1시간 전", () => {
    const result = getRelativeTime(Date.now() - 1000 * 60 * 60);
    expect(result).toBe("1시간 전");
  });

  it("24시 미만인 경우 23시간 전", () => {
    const result = getRelativeTime(Date.now() - 1000 * 60 * 60 * 24 + 1);
    expect(result).toBe("23시간 전");
  });

  it("24시간부터 X일 전", () => {
    const result = getRelativeTime(Date.now() - 1000 * 60 * 60 * 24);
    expect(result).toBe("1일 전");
  });

  it("7일 미만인 경우 X일 전", () => {
    const result = getRelativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7 + 1);
    expect(result).toBe("6일 전");
  });

  it("7일 이상인 경우 X주 전", () => {
    const result = getRelativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7);
    expect(result).toBe("1주 전");
  });
});
