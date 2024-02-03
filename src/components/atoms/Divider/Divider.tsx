import Slot from "@atoms/Slot/Slot";

import { dividerVariants } from "./Divider.styles";
import type { DividerProps } from "./Divider.types";
import useDivider from "./useDivider";

/**
 * 영역을 구분하기 위한 구분선을 표시하는 컴포넌트입니다.
 *
 * `div` 태그를 사용하여 구현됩니다.
 */
const Divider = (props: DividerProps) => {
  const { styleVariant, children, ...otherProps } = useDivider(props);

  return (
    <Slot className={dividerVariants(styleVariant)} {...otherProps}>
      {children && <div className="text-center">{children}</div>}
    </Slot>
  );
};

export default Divider;
