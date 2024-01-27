import { useState } from "react";

import { tv } from "@utils/utils";

import Button from "@atoms/Button/Button/Button";
import Tile from "@atoms/Tile/Tile/Tile";

import { TileAlterAs, TileDefault, TileProps } from "../Tile/Tile.types";

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
    isExpand: {
      true: "!max-h-screen",
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
  padding,
  className,
  ...props
}: TileProps<T, A>) => {
  {
    const [isExpand, setIsExpand] = useState(false);

    const changeTileState = () => {
      setIsExpand((current) => !current);
    };

    return (
      <Tile className={expandTileVariants({ padding, isExpand, className })} {...props}>
        <div className="flex flex-col w-full relative gap-s">
          <div className="h-[calc(100%-32rem)] overflow-hidden">{children}</div>
          <Button variant="text" size="s" onClick={changeTileState}>
            {isExpand ? CLOSE_TEXT : EXPAND_TEXT}
          </Button>
        </div>
      </Tile>
    );
  }
};

export default ExpandTile;
