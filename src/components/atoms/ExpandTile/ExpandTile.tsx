import { forwardRef, useState } from "react";
import { cva } from "class-variance-authority";

import { PolymorphicComponentType, PolymorphicPropsType, PolymorphicRefType } from "@customTypes/polymorphicType";
import classMerge from "@utils/classMerge";

import Button from "@atoms/Button/Button";
import Tile, { TilePropsType } from "@atoms/Tile/Tile";

type ExpandTilePropsType = { shrinkHeight: string } & Omit<TilePropsType, "backgroundColor">;

const expandTileVariants = cva("", {
  variants: {
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
  },
  defaultVariants: {
    padding: "2xl",
  },
});

const CLOSE_TEXT = "닫기";
const EXPAND_TEXT = "더 보기";

const ExpandTileComponent = <T extends React.ElementType>(
  { shrinkHeight, padding, children, ...props }: PolymorphicPropsType<T, ExpandTilePropsType>,
  ref: PolymorphicRefType<T>
) => {
  {
    const [isExpend, setIsExpand] = useState(false);

    const changeTileState = () => {
      setIsExpand((current) => !current);
    };

    return (
      <Tile
        className={classMerge([isExpend ? "h-auto" : shrinkHeight, expandTileVariants({ padding })])}
        padding={"none"}
        {...(props as TilePropsType)}
        ref={ref}
      >
        <div className="flex flex-col w-full h-full relative gap-s">
          <div className="h-[calc(100%-32rem)] overflow-hidden">{children}</div>
          <Button variant={"text"} size="s" onClick={changeTileState} className="w-full">
            {isExpend ? CLOSE_TEXT : EXPAND_TEXT}
          </Button>
        </div>
      </Tile>
    );
  }
};

const ExpandTile: PolymorphicComponentType<"article", ExpandTilePropsType> = forwardRef(ExpandTileComponent);

export default ExpandTile;
