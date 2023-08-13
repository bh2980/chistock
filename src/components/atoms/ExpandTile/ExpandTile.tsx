import { forwardRef, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { PolymorphicPropsType, PolymorphicRefType } from "@customTypes/polymorphicType";
import classMerge from "@utils/classMerge";

import Button from "@atoms/Button/Button";

type ExpandTilePropsType = { shrinkHeight: string } & VariantProps<typeof expandTileVariants>;

type ExpandTileComponentType = <T extends React.ElementType = "article">(
  props: PolymorphicPropsType<T, ExpandTilePropsType>
) => React.ReactNode | null;

const expandTileVariants = cva("border border-outline-variant text-m bg-surface-variant", {
  variants: {
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
      "3xs": "px-3xs pt-3xs pb-[1rem]",
      "2xs": "px-2xs pt-2xs pb-3xs",
      xs: "px-xs pt-xs pb-2xs",
      s: "px-s pt-s pb-[6rem]",
      m: "px-m pt-m pb-xs",
      l: "px-l pt-l pb-[10rem]",
      xl: "px-xl pt-xl pb-s",
      "2xl": "px-2xl pt-2xl pb-m",
      "3xl": "px-3xl pt-3xl pb-l",
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
    width: "auto",
    borderRadius: "m",
    padding: "2xl",
    shadow: "xs",
  },
});

const CLOSE_TEXT = "닫기";
const EXPAND_TEXT = "더 보기";

const ExpandTileComponent = <T extends React.ElementType>(
  {
    children,
    as,
    className,
    width,
    shrinkHeight,
    borderRadius,
    padding,
    shadow,
    ...props
  }: PolymorphicPropsType<T, ExpandTilePropsType>,
  ref: PolymorphicRefType<T>
) => {
  const [isExpend, setIsExpand] = useState(false);

  const changeTileState = () => {
    setIsExpand((current) => !current);
  };

  const ExpandTileComponent = as || "article";

  return (
    <ExpandTileComponent
      className={classMerge([
        className,
        expandTileVariants({
          width,
          borderRadius,
          padding,
          shadow,
        }),
        isExpend ? "h-auto" : shrinkHeight,
      ])}
      ref={ref}
      {...props}
    >
      <div className="flex flex-col w-full h-full relative gap-s">
        <div className="h-[calc(100%-32rem)] overflow-hidden">{children}</div>
        <Button variant={"text"} size="s" onClick={changeTileState} className="w-full">
          {isExpend ? CLOSE_TEXT : EXPAND_TEXT}
        </Button>
      </div>
    </ExpandTileComponent>
  );
};

const ExpandTile: ExpandTileComponentType = forwardRef(ExpandTileComponent);

export default ExpandTile;
