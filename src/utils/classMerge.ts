import { cx } from "class-variance-authority";
import { ClassNameValue } from "tailwind-merge";

import twMerge from "./customTwMerge";

const classMerge = (classes: ClassNameValue[]) => {
  return twMerge(cx(classes));
};

export default classMerge;
