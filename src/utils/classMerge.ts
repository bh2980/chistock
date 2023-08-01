import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const classMerge = (classes: string) => {
  const fontSizePattern =
    /(text-(xs|s|m|l|xl|2xl))[ ]+|(text-(xs|s|m|l|xl|2xl)$)/g;

  return `${twMerge(clsx(classes.replace(fontSizePattern, "")))} ${twMerge(
    clsx(classes.match(fontSizePattern))
  )}`;
};

export default classMerge;
