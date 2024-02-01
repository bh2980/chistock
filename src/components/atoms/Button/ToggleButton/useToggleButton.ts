import { useState } from "react";

import { type ButtonProps, useButton } from "../Button";
import type { ToggleButtonProps } from "./ToggleButton.types";

const useToggleButton = ({ pressed = false, ...props }: ToggleButtonProps) => {
  const [isPressed, setIsPressed] = useState(pressed);

  const { styleVariant, onClick, ...convertProps } = useButton(props as ButtonProps<"button">);

  const onToggleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed((prev) => !prev);
    const typedOnClick = onClick as React.MouseEventHandler<HTMLButtonElement>;

    if (onClick) typedOnClick(e);
  };

  return {
    styleVariant: { pressed: isPressed, ...styleVariant },
    "aria-pressed": isPressed,
    onClick: onToggleButtonClick,
    ...convertProps,
  };
};

export default useToggleButton;
