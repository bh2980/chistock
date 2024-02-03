import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import { buttonVariants } from "./Button.styles";
import type { ButtonAlterAs, ButtonDefault, ButtonProps } from "./Button.types";
import useButton from "./useButton";

/**
 * 버튼을 표시합니다.
 */
const Button = <
  T extends ButtonDefault | ButtonAlterAs = ButtonDefault,
  A extends ButtonAlterAs = ButtonAlterAs
>(
  props: ButtonProps<T, A>
) => {
  const { children, styleVariant, ...otherProps } = useButton(props);

  return (
    <Slot className={buttonVariants(styleVariant)} {...otherProps}>
      <InteractionState />
      {children}
    </Slot>
  );
};

export default Button;
