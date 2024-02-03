import React from "react";

import Button from "@atoms/Button/Button/Button";
import Slot from "@atoms/Slot/Slot";

import type { TileAlterAs, TileDefault } from "../Tile/Tile.types";
import { expandTileVariants } from "./ExpandTile.styles";
import type { ExpandTileProps } from "./ExpandTile.types";
import useExpandTile from "./useExpandTile";

/** 길이를 확장할 수 있는 타일 */
const ExpandTile = <
  T extends TileDefault | TileAlterAs = TileDefault,
  A extends TileAlterAs = TileAlterAs
>(
  props: ExpandTileProps<T, A>
) => {
  {
    const { styleVariant, children, showGradient, buttonProps, ...otherProps } =
      useExpandTile(props);

    return (
      <Slot className={expandTileVariants(styleVariant)} {...otherProps}>
        <div className="relative h-full overflow-hidden">
          {children}
          {showGradient && (
            <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-white" />
          )}
        </div>
        <div className="flex flex-col gap-s">
          <Button variant="ghost" size="s" color="primary" className="w-full" {...buttonProps} />
        </div>
      </Slot>
    );
  }
};

export default ExpandTile;
