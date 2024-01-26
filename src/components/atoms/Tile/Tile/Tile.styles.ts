import { tv } from "@utils/utils";

export const tileVariants = tv({
  base: "flex border border-outline-variant text-m",
  variants: {
    /** Tile의 형태
     * @default default
     */
    variant: {
      default: "bg-surface-variant text-surface-on",
      primary: "bg-primary text-primary-on",
      primaryFixed: "bg-primary-fixed text-primary-fixed-on",
      secondary: "bg-secondary text-secondary-on",
      secondaryFixed: "bg-secondary-fixed text-secondary-fixed-on",
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
    shadow: {
      none: "shadow-none",
      xs: "shadow-xs",
      s: "shadow-s",
      m: "shadow-m",
      l: "shadow-l",
      xl: "shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "m",
    padding: "none",
    shadow: "xs",
  },
});
