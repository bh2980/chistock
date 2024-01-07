import { cx } from "class-variance-authority";
import { extendTailwindMerge } from "tailwind-merge";
import { ClassNameValue } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@root/tailwind.config";

const customTailwindTheme = resolveConfig(tailwindConfig).theme;

/** Tailwind 설정으로부터 커스텀 토큰 리스트를 가져오는 함수 */
const getToken = (tokenName: Exclude<keyof typeof customTailwindTheme, "extend">) =>
  Object.keys(customTailwindTheme[tokenName]).filter((key) => key !== "DEFAULT");

/** 커스텀 twMerge */
const twMerge = extendTailwindMerge({
  theme: {
    colors: getToken("colors"),
    spacing: getToken("spacing"),
    borderRadius: getToken("borderRadius"),
    borderWidth: getToken("borderWidth"),
  },
  classGroups: {
    "font-size": [{ text: getToken("fontSize") }],
  },
});

/** cx와 twMerge로 tailwind class를 충돌을 방지하면서 합치는 함수 */
export const classMerge = (classes: ClassNameValue | ClassNameValue[]) => {
  return twMerge(cx(classes));
};

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
