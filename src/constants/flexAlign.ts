import { tv } from "@utils/utils";

export const flexAlignVariants = tv({
  base: "flex",
  variants: {
    /**
     * flex 가로 배치
     * @default normal
     */
    justifyContent: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
    },
    /**
     * flex 세로 배치
     * @default normal
     */
    itemAligns: {
      normal: "items-normal",
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    /** stack의 gap
     * @default none
     */
    gap: {
      none: "",
      "3xs": "gap-3xs",
      "2xs": "gap-2xs",
      xs: "gap-xs",
      s: "gap-s",
      m: "gap-m",
      l: "gap-l",
      xl: "gap-xl",
      "2xl": "gap-2xl",
      "3xl": "gap-3xl",
    },
  },
  defaultVariants: {
    justifyContent: "normal",
    itemAligns: "normal",
    gap: "none",
  },
});
