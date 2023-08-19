import resolveConfig from "tailwindcss/resolveConfig";
import { extendTailwindMerge } from "tailwind-merge";

import tailwindConfig from "@root/tailwind.config";

const customTailwindTheme = resolveConfig(tailwindConfig).theme;

const getToken = (tokenName: Exclude<keyof typeof customTailwindTheme, "extend">) =>
  Object.keys(customTailwindTheme[tokenName]).filter((key) => key !== "DEFAULT");

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

export default twMerge;
``;
