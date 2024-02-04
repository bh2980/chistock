import usePressed from "@utils/hook/usePressed";

import { type ButtonProps, useButton } from "../Button";
import type { ToggleButtonProps } from "./ToggleButton.types";

const useToggleButton = ({ pressed = false, ...props }: ToggleButtonProps) => {
  const buttonProps = useButton(props as ButtonProps<"button">);

  const pressedProps = usePressed(pressed, buttonProps);

  return pressedProps;
};

export default useToggleButton;
