import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { ButtonAlterAs, ButtonBasePropsType, ButtonDefault } from "./Button.types";

const convertButtonProps = (
  props: PolymorphicPropsWithInnerRefType<
    ButtonDefault | ButtonAlterAs,
    ButtonBasePropsType,
    ButtonAlterAs
  >
) => {
  const {
    renderAs,
    children,
    iconPosition = "before",
    isIconButton,
    disabled,
    role,
    tabIndex,
    onClick,
    label,
    ...otherProps
  } = props;

  const isAnchor = renderAs === "a";

  return {
    renderAs: renderAs || "button",
    children: isIconButton ? undefined : children,
    iconPosition: iconPosition || "before",
    isIconButton,
    disabled,
    role: isAnchor ? "button" : role,
    tabIndex: isAnchor && !disabled ? 0 : tabIndex,
    onClick: isAnchor && disabled ? undefined : onClick,
    "aria-label": label,
    "aria-disabled": disabled,
    ...otherProps,
  };
};

export default convertButtonProps;
