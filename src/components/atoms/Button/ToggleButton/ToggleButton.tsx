import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import toggleButtonVariant from "./ToggleButton.styles";
import type { ToggleButtonProps } from "./ToggleButton.types";
import useToggleButton from "./useToggleButton";

const ToggleButton = (props: ToggleButtonProps) => {
  const { children, styleVariant, ...otherProps } = useToggleButton(props);

  return (
    <Slot className={toggleButtonVariant(styleVariant)} {...otherProps}>
      <InteractionState />
      {children}
    </Slot>
  );
};

export default ToggleButton;
