import { useState } from "react";
import { tv } from "tailwind-variants";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { makeNum2Unit } from "@utils/utils";

import Button from "@atoms/Button/Button/Button";
import Tile from "@atoms/Tile/Tile";

import { TileAlterAs, TileBasePropsType, TileDefault } from "./Tile.types";

/** ExpandTile 기본 Props 타입 */
export type ExpandTileBasePropsType = Omit<
  TileBasePropsType,
  "height" | "justifyContent" | "itemAligns" | "gap"
> & {
  collapseHeight: number;
  expandHeight?: number | "100vh";
};

const expandTileVariants = tv({
  base: "transition-[max-height]",
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

/** 길이를 확장할 수 있는 타일 */
const ExpandTile = <
  T extends TileDefault | TileAlterAs = TileDefault,
  A extends TileAlterAs = TileAlterAs
>({
  children,
  width,
  collapseHeight,
  expandHeight = "100vh",
  padding,
  ...props
}: PolymorphicPropsWithInnerRefType<T, ExpandTileBasePropsType, A>) => {
  {
    const [isExpend, setIsExpand] = useState(false);

    const changeTileState = () => {
      setIsExpand((current) => !current);
    };

    return (
      <Tile
        className={expandTileVariants({ padding })}
        style={{
          width: makeNum2Unit(width),
          maxHeight: isExpend
            ? expandHeight === "100vh"
              ? expandHeight
              : makeNum2Unit(expandHeight)
            : collapseHeight,
        }}
        {...props}
      >
        <div className="flex flex-col w-full relative gap-s">
          <div className="h-[calc(100%-32rem)] overflow-hidden">{children}</div>
          <Button size="s" onClick={changeTileState} className="bg-transparent text-inherit">
            {isExpend ? CLOSE_TEXT : EXPAND_TEXT}
          </Button>
        </div>
      </Tile>
    );
  }
};

export default ExpandTile;
