import { cva } from "class-variance-authority";

export const flexAlignVariants = cva("flex", {
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
  },
  defaultVariants: {
    justifyContent: "normal",
    itemAligns: "normal",
  },
});
