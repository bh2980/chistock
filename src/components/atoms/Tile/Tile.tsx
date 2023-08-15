import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { PolymorphicComponentType, PolymorphicPropsType, PolymorphicRefType } from "@customTypes/polymorphicType";
import classMerge from "@utils/classMerge";

export type TilePropsType = VariantProps<typeof tileVariants>;

const tileVariants = cva("flex border border-outline-variant text-m", {
  variants: {
    backgroundColor: {
      default: "bg-surface-variant",
      primary: "bg-primary",
      secondary: "bg-secondary",
    },
    width: {
      auto: "w-auto",
      full: "w-full",
      "desktop-4": "w-desktop-4",
      "desktop-8": "w-desktop-8",
      "desktop-12": "w-desktop-12",
    },
    borderRadius: {
      none: "rounded-none",
      xs: "rounded-xs",
      s: "rounded-s",
      m: "rounded-m",
      l: "rounded-l",
      circle: "rounded-circle",
    },
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
    backgroundColor: "default",
    width: "auto",
    borderRadius: "m",
    padding: "2xl",
    shadow: "xs",
  },
});

const Tile: PolymorphicComponentType<"article", TilePropsType> = forwardRef(function Tile<T extends React.ElementType>(
  {
    children,
    as,
    className,
    backgroundColor,
    width,
    borderRadius,
    padding,
    shadow,
    ...props
  }: PolymorphicPropsType<T, TilePropsType>,
  ref: PolymorphicRefType<T>
) {
  const TileComponent = as || "article";

  return (
    <TileComponent
      className={classMerge([
        className,
        tileVariants({
          backgroundColor,
          width,
          borderRadius,
          padding,
          shadow,
        }),
      ])}
      ref={ref}
      {...props}
    >
      {children}
    </TileComponent>
  );
});

export default Tile;
