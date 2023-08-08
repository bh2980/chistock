import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const classMerge = (classes: string | (string | undefined)[]) => {
  const fontSizePattern =
    /(text-(xs|s|m|l|xl|2xl))[ ]+|(text-(xs|s|m|l|xl|2xl)$)/g;

  return `${twMerge(cx(classes).replace(fontSizePattern, ""))} ${twMerge(
    cx(classes).match(fontSizePattern)
  )}`;
};

export default classMerge;
