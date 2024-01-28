import Slot from "@atoms/Slot/Slot";

import { textVariants } from "./Text.styles";
import type { TextAlterAs, TextDefault, TextProps } from "./Text.types";

/** Text를 렌더링합니다. */
const Text = <
  T extends TextDefault | TextAlterAs = TextDefault,
  A extends TextAlterAs = TextAlterAs
>({
  children,
  renderAs,
  className,
  color,
  size,
  bold,
  ...props
}: TextProps<T, A>) => {
  return (
    <Slot<TextDefault | TextAlterAs>
      renderAs={renderAs || "span"}
      className={textVariants({ size, color, bold, className })}
      {...props}
    >
      {children}
    </Slot>
  );
};

export default Text;
