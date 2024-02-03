import { useContext } from "react";

import { type ButtonProps, useButton } from "@atoms/Button/Button";

import { ChipContext } from "./Chip";
import { ChipProps } from "./Chip.types";

const useChip = ({ ...props }: ChipProps) => {
  const { selectedChipList, dispatchSelectedChipList } = useContext(ChipContext);
  const isSelected = selectedChipList.includes(props.value);

  const { styleVariant, onClick, ...convertProps } = useButton(props as ButtonProps<"button">);

  const selectChip = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatchSelectedChipList({ type: "SELECT", payload: e.currentTarget.value });
  };

  const unselectChip = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatchSelectedChipList({ type: "UNSELECT", payload: e.currentTarget.value });
  };

  const toggleClick = isSelected ? unselectChip : selectChip;

  const changeChipState = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleClick(e);

    const typedOnClick = onClick as React.MouseEventHandler<HTMLButtonElement>;

    if (onClick) typedOnClick(e);
  };

  return {
    styleVariant: { selected: isSelected, ...styleVariant },
    "aria-selected": isSelected,
    onClick: changeChipState,
    ...convertProps,
  };
};

export default useChip;
