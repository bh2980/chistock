import { getFormatNumber } from "@utils/getFormatNumber";

describe("getFormatNumber", () => {
  it("숫자만 넣을 경우, 형식화 후 소수점 2자리까지 표시", () => {
    const result = getFormatNumber({ number: 1234.5678 });
    expect(result).toBe("1,234.57");
  });

  it("소수점을 0으로 설정 시, 소수점을 표시하지 않음", () => {
    const result = getFormatNumber({ number: 1234.5678, decimalPoint: 0 });
    expect(result).toBe("1,234");
  });

  it("소수점을 5으로 설정 시, 5자리 까지 표시", () => {
    const result = getFormatNumber({ number: 1234.5678, decimalPoint: 5 });
    expect(result).toBe("1,234.56780");
  });

  it("prefix가 주어질 경우, prefix 표시", () => {
    const result = getFormatNumber({ number: 1234.5678, prefix: "$ " });
    expect(result).toBe("$ 1,234.57");
  });

  it("postfix가 주어질 경우, prefix 표시", () => {
    const result = getFormatNumber({ number: 1234.5678, postfix: " 달러" });
    expect(result).toBe("1,234.57 달러");
  });
});
