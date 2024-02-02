/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defaultConfig } from "tailwind-variants";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@root/tailwind.config";

const customTailwindTheme = resolveConfig(tailwindConfig).theme;

/** Tailwind 설정으로부터 커스텀 토큰 리스트를 가져오는 함수 */
export const getToken = (tokenName: Exclude<keyof typeof customTailwindTheme, "extend">) =>
  Object.keys(customTailwindTheme[tokenName]).filter((key) => key !== "DEFAULT");

/** tv에 twMerge 설정 적용 */
defaultConfig.twMergeConfig = {
  theme: {
    colors: getToken("colors"),
    spacing: getToken("spacing"),
    borderRadius: getToken("borderRadius"),
    borderWidth: getToken("borderWidth"),
    //@ts-ignore
    opacity: getToken("opacity"),
  },
  classGroups: {
    "font-size": [{ text: getToken("fontSize") }],
  },
};
