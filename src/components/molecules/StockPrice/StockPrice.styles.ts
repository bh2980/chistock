import { tv } from "@utils/customTV";

import { textVariants } from "@atoms/Text";

export const stockPriceVariants = tv({
  extend: textVariants,
  base: "inline-flex text-center overflow-hidden whitespace-break-spaces",
  variants: {
    color: {},
    size: {
      body3: "h-[16rem]",
      body2: "h-[20rem]",
      body1: "h-[24rem]",
      headline3: "h-[28rem]",
      headline2: "h-[32rem]",
      headline1: "h-[48rem]",
    },
  },
  defaultVariants: {
    size: "headline2",
    bold: true,
  },
});
