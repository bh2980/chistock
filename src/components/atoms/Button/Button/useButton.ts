import { Children } from "react";

import type { ButtonAlterAs, ButtonDefault, ButtonProps } from "./Button.types";

const useButton = (props: ButtonProps<ButtonDefault | ButtonAlterAs>) => {
  const {
    renderAs,
    children,
    iconPosition = "before",
    icon,
    isIconButton,
    disabled,
    role,
    tabIndex,
    onClick,
    label,
    ...otherProps
  } = props;

  const isAnchor = renderAs === "a";

  let childrenWithIcon: React.ReactNode | React.ReactNode[] | undefined = undefined;

  if (icon && !isIconButton) {
    if (iconPosition === "before") {
      childrenWithIcon = [icon, ...Children.toArray(children)];
    } else {
      childrenWithIcon = [...Children.toArray(children), icon];
    }
  }

  if (isIconButton) {
    childrenWithIcon = icon;
  }

  return {
    renderAs: renderAs || "button",
    children: icon ? childrenWithIcon : children,
    disabled,
    isIconButton,
    role: isAnchor ? "button" : role,
    tabIndex: isAnchor && !disabled ? 0 : tabIndex,
    focusOutlineOffset: true,
    onClick: isAnchor && disabled ? undefined : onClick,
    "aria-label": label,
    "aria-disabled": disabled,
    ...otherProps,
  };
};

export default useButton;
