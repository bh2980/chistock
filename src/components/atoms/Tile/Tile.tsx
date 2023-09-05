import { cva } from "class-variance-authority";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { classMerge } from "@utils/utils";

import Box from "@atoms/Box/Box";

import { TileAlterAs, TileBasePropsType, TileDefault } from "./Tile.types";

export const tileVariants = cva("flex border border-outline-variant text-m", {
  variants: {
    /** Tile의 형태
     * @default default
     */
    variant: {
      default: "bg-surface-variant text-surface-on",
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
     * @default 2xl
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
    padding: "2xl",
    shadow: "xs",
  },
});

const Tile = <
  T extends TileDefault | TileAlterAs = TileDefault,
  A extends TileAlterAs = TileAlterAs
>({
  children,
  renderAs,
  className,
  variant,
  width,
  height,
  rounded,
  padding,
  shadow,
  ...props
}: PolymorphicPropsWithInnerRefType<T, TileBasePropsType, A>) => {
  return (
    <Box<TileDefault | TileAlterAs>
      renderAs={renderAs || "div"}
      className={classMerge([
        width,
        height,
        tileVariants({
          variant,
          rounded,
          padding,
          shadow,
        }),
        className,
      ])}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Tile;
