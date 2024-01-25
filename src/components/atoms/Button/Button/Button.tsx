import Slot from "@atoms/Slot/Slot";

import { buttonVariants, overlayVariants } from "./Button.styles";
import type { ButtonAlterAs, ButtonDefault, ButtonProps } from "./Button.types";
import convertButtonProps from "./Button.utils";

/**
 * 버튼을 표시합니다.
 */
const Button = <
  T extends ButtonDefault | ButtonAlterAs = ButtonDefault,
  A extends ButtonAlterAs = ButtonAlterAs
>(
  props: ButtonProps<T, A>
) => {
  const { children, className, variant, size, isIconButton, icon, iconPosition, ...otherProps } =
    convertButtonProps(props);
  const { disabled } = otherProps;

  return (
    <Slot<ButtonDefault | ButtonAlterAs>
      className={buttonVariants({
        variant,
        size,
        isIconButton,
        disabled,
        className,
      })}
      {...otherProps}
    >
      {iconPosition === "before" && icon}
      {children}
      {iconPosition === "after" && icon}
      <div className={overlayVariants({ disabled })} />
    </Slot>
  );
};

export default Button;
