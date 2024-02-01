import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import { ButtonProps } from "../Button";
import toggleButtonVariant from "./ToggleButton.styles";
import type { ToggleButtonProps } from "./ToggleButton.types";
import useToggleButton from "./useToggleButton";

const ToggleButton = (props: ToggleButtonProps) => {
  const { children, styleVariant, ...otherProps } = useToggleButton(props);

  return (
    <Slot<"button">
      className={toggleButtonVariant(styleVariant)}
      {...(otherProps as ButtonProps<"button">)}
    >
      <InteractionState />
      {children}
    </Slot>
  );
};

export default ToggleButton;
