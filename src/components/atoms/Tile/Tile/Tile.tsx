import Slot from "@atoms/Slot/Slot";

import { tileVariants } from "./Tile.styles";
import { TileAlterAs, TileDefault, TileProps } from "./Tile.types";

/** 레이아웃의 단위가 되는 컴포넌트 */
const Tile = <
  T extends TileDefault | TileAlterAs = TileDefault,
  A extends TileAlterAs = TileAlterAs
>({
  children,
  renderAs,
  className,
  variant,
  rounded,
  padding,
  ...props
}: TileProps<T, A>) => {
  return (
    <Slot<TileDefault | TileAlterAs>
      renderAs={renderAs || "div"}
      className={tileVariants({ variant, rounded, padding, className })}
      {...props}
    >
      {children}
    </Slot>
  );
};

export default Tile;
