import { tv } from "@utils/utils";

export const tileVariants = tv({
  base: "flex text-m shadow-ambient",
  variants: {
    /** Tile의 형태
     * @default default
     */
    variant: {
      default: "bg-surface-container text-surface-on",
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
    },
    /** Tile의 테두리 반경
     * @default m
     */
    rounded: {
      none: "rounded-none",
      s: "rounded-s",
      m: "rounded-m",
      l: "rounded-l",
    },
    /** Tile의 padding
     * @default none
     */
    padding: {
      none: "",
      "3xs": "p-3xs",
      "2xs": "p-2xs",
      xs: "p-xs",
      s: "p-s",
      m: "p-m",
      l: "p-l",
      xl: "p-xl",
      "2xl": "p-2xl",
      "3xl": "p-3xl",
    },
    /** Tile의 그림자
     * @default xs
     */
  },
  defaultVariants: {
    variant: "default",
    rounded: "m",
    padding: "none",
  },
});
