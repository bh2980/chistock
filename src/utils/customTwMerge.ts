import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  theme: {
    colors: [
      "current",
      "transparent",
      "primary",
      "primary-on",
      "primary-fixed",
      "primary-fixed-on",
      "secondary",
      "secondary-on",
      "secondary-fixed",
      "secondary-fixed-on",
      "tertiary",
      "tertiary-on",
      "tertiary-fixed",
      "tertiary-fixed-on",
      "surface",
      "surface-variant",
      "surface-variant-high",
      "surface-variant-highest",
      "surface-on",
      "surface-on-variant",
      "outline",
      "outline-variant",
      "red",
      "red-on",
      "red-variant",
      "red-variant-on",
      "yellow",
      "yellow-on",
      "green",
      "green-on",
      "magenta",
      "magenta-on",
    ],
    spacing: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl"],
    borderRadius: ["none", "xs", "s", "m", "l", "circle"],
    borderWidth: ["s", "m"],
  },
  classGroups: {
    "font-size": [{ text: ["inherit", "xs", "s", "m", "l", "xl", "2xl"] }],
  },
});

export default twMerge;
