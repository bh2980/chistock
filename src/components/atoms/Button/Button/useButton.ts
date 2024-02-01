import { Children } from "react";

import type { ButtonAlterAs, ButtonDefault, ButtonProps } from "./Button.types";

const useButtonStyleVariant = (props: ButtonProps<ButtonDefault | ButtonAlterAs>) => {
  const { variant, size, isIconButton, disabled, className } = props;

  return {
    className,
    variant,
    size,
    disabled,
    isIconButton,
    focusOutlineOffset: true,
  };
};

const useButtonDefaultProps = (props: ButtonProps<ButtonDefault | ButtonAlterAs>) => {
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

  // icon이 있으면서 아이콘 버튼이 아닐 경우 icon 위치에 따라 놓기
  if (icon && !isIconButton) {
    if (iconPosition === "before") {
      childrenWithIcon = [icon, ...Children.toArray(children)];
    } else {
      childrenWithIcon = [...Children.toArray(children), icon];
    }
  }

  // icon버튼이라면 children 에 icon만 넣기
  if (isIconButton) {
    childrenWithIcon = icon;
  }

  // styleVariants의 className과 중복되지 않도록 제거
  delete otherProps.className;

  return {
    renderAs: renderAs || "button",
    children: icon ? childrenWithIcon : children,
    disabled,
    role: isAnchor ? "button" : role,
    tabIndex: isAnchor && !disabled ? 0 : tabIndex,
    onClick: isAnchor && disabled ? undefined : onClick,
    "aria-label": label,
    "aria-disabled": disabled,
    ...otherProps,
  };
};

const useButton = (props: ButtonProps<ButtonDefault | ButtonAlterAs>) => {
  const styleVariant = useButtonStyleVariant(props);
  const defaultProps = useButtonDefaultProps(props);

  return { ...defaultProps, styleVariant };
};

export default useButton;
