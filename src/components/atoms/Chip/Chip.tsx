import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import chipVariants from "./Chip.styles";
import { ChipProps } from "./Chip.types";
import useChip from "./useChip";

const Chip = (props: ChipProps) => {
  const { styleVariant, children, ...otherProps } = useChip(props);

  return (
    <Slot className={chipVariants(styleVariant)} {...otherProps}>
      <InteractionState />
      {children}
    </Slot>
  );
};

export default Chip;
