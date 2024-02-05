/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createTV } from "tailwind-variants";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@root/tailwind.config";

const customTailwindTheme = resolveConfig(tailwindConfig).theme;

/** Tailwind 설정으로부터 커스텀 토큰 리스트를 가져오는 함수 */
export const getToken = (tokenName: Exclude<keyof typeof customTailwindTheme, "extend">) =>
  Object.keys(customTailwindTheme[tokenName]).filter((key) => key !== "DEFAULT");

/** tv에 twMerge 설정 적용 */
export const tv = createTV({
  twMergeConfig: {
    theme: {
      colors: getToken("colors"),
      spacing: getToken("spacing"),
      borderRadius: getToken("borderRadius"),
      //@ts-ignore
      opacity: getToken("opacity"),
    },
    classGroups: {
      "font-size": [{ text: getToken("fontSize") }],
    },
  },
});

type AccType = { [key: string]: { table: { disable: true } } };

/** Storybook에서 ArgsTable에서 제외할 타입들을 argsType 객체로 만드는 함수 */
export const exceptProperty = (exceptProperties: string[]) => {
  return exceptProperties.reduce((acc: AccType, cur) => {
    console.log(acc, cur);
    acc[cur] = {
      table: {
        disable: true,
      },
    };

    return acc;
  }, {});
};

/** number를 인수로 받아서 `{number}px`, `{number}rem` 형태의 string을 만드는 함수 */
export const makeNum2Unit = (num: undefined | number, unit: "px" | "rem" = "rem") =>
  num !== undefined ? `${num}${unit}` : undefined;
