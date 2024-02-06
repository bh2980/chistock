import { SelectedListProvider } from "@contexts/SelectedContext/SelectedListContext";

import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import chipVariants from "./Chip.styles";
import type { ChipGroupProps, ChipProps } from "./Chip.types";
import useChip from "./useChip";

// TODO dismiss 기능 만들기 role: toolbar?
const ChipGroup = ({ multiSelect, defaultSelected, ...props }: ChipGroupProps) => {
  return (
    <SelectedListProvider multiSelect={multiSelect} defaultSelected={defaultSelected}>
      <Slot className="flex gap-s" role="group" {...props} />
    </SelectedListProvider>
  );
};

// TODO dismiss 기능 만들기
// TODO interaction이 아니면 span interaction이면 button
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
