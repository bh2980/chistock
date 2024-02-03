import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import chipVariants from "./Chip.styles";
import type { ChipGroupProps, ChipProps } from "./Chip.types";
import { ChipProvider } from "./context/ChipContext";
import useChip from "./useChip";

const ChipGroup = ({ multiSelect, defaultSelected, ...props }: ChipGroupProps) => {
  return (
    <ChipProvider multiSelect={multiSelect} defaultSelected={defaultSelected}>
      <Slot className="flex gap-s" aria-multiselectable={multiSelect} {...props} />
    </ChipProvider>
  );
};

const Chip = (props: ChipProps) => {
  const { styleVariant, children, ...otherProps } = useChip(props);

  return (
    <Slot className={chipVariants(styleVariant)} {...otherProps}>
      <InteractionState />
      {children}
    </Slot>
  );
};

Chip.ChipGroup = ChipGroup;

export default Chip;
