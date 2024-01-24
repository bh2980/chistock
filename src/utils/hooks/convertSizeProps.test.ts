import convertSizeProps, { convertCSSSize } from "./convertSizeProps";

describe("1. convertParamsToString 검증", () => {
  it("1. 숫자", () => {
    const input = 100;
    const expectOutput = "100rem";

    const output = convertCSSSize(input);

    expect(output).toBe(expectOutput);
  });

  it("2. 숫자만으로 구성된 문자열", () => {
    const input = "100";
    const expectOutput = "100rem";

    const output = convertCSSSize(input);

    expect(output).toBe(expectOutput);
  });

  it("3. 일반 문자열", () => {
    const input = "100%";
    const expectOutput = "100%";

    const output = convertCSSSize(input);

    expect(output).toBe(expectOutput);
  });

  describe("4. 문자열 내에 px이 포함된 경우", () => {
    it("1. px 문자열", () => {
      const input = "100px";
      const expectOutput = "100rem";

      const output = convertCSSSize(input);

      expect(output).toBe(expectOutput);
    });

    it("2. calc 내에 px이 포함된 경우", () => {
      const input = "calc(100% - 32px)";
      const expectOutput = "calc(100% - 32rem)";

      const output = convertCSSSize(input);

      expect(output).toBe(expectOutput);
    });
  });
});

describe("2. useSizeProps 검증", () => {
  it("1. props를 받아서 inline Style로 return", () => {
    const input = {
      width: 100,
      minWidth: "100%",
      maxWidth: "100vh",
      height: "100",
      minHeight: "100px",
      maxHeight: "calc(100% - 32px)",
      top: -100,
      bottom: "-100",
      left: "-100%",
      right: "-100px",
    };

    const expectOutput = {
      style: {
        width: "100rem",
        minWidth: "100%",
        maxWidth: "100vh",
        height: "100rem",
        minHeight: "100rem",
        maxHeight: "calc(100% - 32rem)",
        top: "-100rem",
        bottom: "-100rem",
        left: "-100%",
        right: "-100rem",
      },
    };

    const convertProps = convertSizeProps(input);

    expect(convertProps).toEqual(expectOutput);
  });

  it("2. 기존 inline style과 병합", () => {
    const input = {
      width: 100,
      minWidth: "100%",
      maxWidth: "100vh",
      height: "100",
      minHeight: "100px",
      maxHeight: "calc(100% - 32px)",
      style: {
        backgroundColor: "black",
        opacity: "100%",
      },
    };

    const expectOutput = {
      style: {
        width: "100rem",
        minWidth: "100%",
        maxWidth: "100vh",
        height: "100rem",
        minHeight: "100rem",
        maxHeight: "calc(100% - 32rem)",
        backgroundColor: "black",
        opacity: "100%",
      },
    };

    const convertProps = convertSizeProps(input);

    expect(convertProps).toEqual(expectOutput);
  });

  it("3. 기타 항목 유지", () => {
    const input = {
      width: 100,
      minWidth: "100%",
      maxWidth: "100vh",
      height: "100",
      minHeight: "100px",
      maxHeight: "calc(100% - 32px)",
      params1: "params1",
      params2: { params3: "params2-params3" },
    };

    const expectOutput = {
      params1: "params1",
      params2: { params3: "params2-params3" },
      style: {
        width: "100rem",
        minWidth: "100%",
        maxWidth: "100vh",
        height: "100rem",
        minHeight: "100rem",
        maxHeight: "calc(100% - 32rem)",
      },
    };

    const convertProps = convertSizeProps(input);

    expect(convertProps).toEqual(expectOutput);
  });

  it("4. size 속성 중 명시하지 않은 속성은 style 내에서 undefined", () => {
    const input = {
      width: 100,
    };

    const convertProps = convertSizeProps(input);

    expect(convertProps.style.maxWidth).toBeUndefined();
    expect(convertProps.style.minWidth).toBeUndefined();
    expect(convertProps.style.height).toBeUndefined();
    expect(convertProps.style.maxHeight).toBeUndefined();
    expect(convertProps.style.minHeight).toBeUndefined();
  });

  it("5. 반환 후의 props에는 sizeProps가 존재하지 않음", () => {
    const input = {
      width: 100,
    };

    const convertProps = convertSizeProps(input);

    expect(convertProps).not.toHaveProperty("width");
  });
});
