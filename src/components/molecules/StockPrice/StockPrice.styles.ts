import { tv } from "@utils/utils";

export const stockPriceVariants = tv({
  base: "inline-flex text-center overflow-hidden font-bold",
  variants: {
    size: {
      xs: "text-xs h-[16rem]",
      s: "text-s h-[20rem]",
      m: "text-m h-[24rem]",
      l: "text-l h-[28rem]",
      xl: "text-xl h-[32rem]",
      "2xl": "text-2xl h-[48rem]",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});
