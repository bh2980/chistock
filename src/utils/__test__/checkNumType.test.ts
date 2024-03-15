import { NEGATIVE, POSITIVE, ZERO } from "@constants/numType";

import { checkNumType } from "@utils/checkNumType";

describe("checkNumType", () => {
  it("양수일 경우 POSITIVE", () => {
    const result = checkNumType(1);
    expect(result).toBe(POSITIVE);
  });

  it("음수 일 경우 NEGATIVE", () => {
    const result = checkNumType(-1);
    expect(result).toBe(NEGATIVE);
  });

  it("0일 경우 ZERO", () => {
    const result = checkNumType(0);
    expect(result).toBe(ZERO);
  });
});
