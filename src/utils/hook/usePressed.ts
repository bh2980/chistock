import { ComponentProps, useState } from "react";

type usePressedProps = {
  styleVariant?: object;
  onClick?: (e: React.MouseEvent) => void;
} & ComponentProps<React.ElementType>;

const usePressed = (pressed: boolean = false, props: usePressedProps = {}) => {
  const [isPressed, setIsPressed] = useState(pressed);

  const { styleVariant, onClick, ...otherProps } = props;

  const onToggleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed((current) => !current);

    if (onClick) onClick(e);
  };

  return {
    styleVariant: { pressed: isPressed, ...styleVariant },
    "aria-pressed": isPressed,
    onClick: onToggleButtonClick,
    ...otherProps,
  };
};

export default usePressed;
