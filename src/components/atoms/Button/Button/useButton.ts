import type { ButtonAlterAs, ButtonDefault, ButtonProps } from "./Button.types";

/** Button에서 사용하는 tv 속성들만 따로 빼서 정리 후 styleVariant에 넣어 return하는 hook */
const useButtonStyleVariant = (props: ButtonProps<ButtonDefault | ButtonAlterAs>) => {
  const { variant, color, size, rounded, isIconButton, disabled, className, ...otherProps } = props;

  return {
    styleVariant: {
      className,
      variant,
      color,
      size,
      rounded,
      disabled,
      isIconButton,
      focusOutlineOffset: true,
    },
    disabled,
    ...otherProps,
  };
};

const useButtonDefaultProps = (props: ButtonProps<ButtonDefault | ButtonAlterAs>) => {
  const { renderAs, disabled, role, tabIndex, onClick, label, ...otherProps } = props;

  const isAnchor = renderAs === "a";

  return {
    renderAs: renderAs || "button",
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
  const { styleVariant, ...defaultProps } = useButtonStyleVariant(props);
  const convertProps = useButtonDefaultProps(defaultProps);

  return { ...convertProps, styleVariant };
};

export default useButton;
