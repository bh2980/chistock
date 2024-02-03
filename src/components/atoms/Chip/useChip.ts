import { type ButtonProps, useButton } from "@atoms/Button/Button";

import { ChipProps } from "./Chip.types";
import { useChipContext } from "./context/ChipContext";

const useChip = (props: ChipProps) => {
  const { multiSelect, selectedChipList, dispatchSelectedChipList } = useChipContext();
  const isSelected = selectedChipList.includes(props.value);

  const {
    styleVariant,
    onClick: originOnClick,
    ...convertProps
  } = useButton(props as ButtonProps<"button">);

  const selectChip = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatchSelectedChipList({
      type: multiSelect ? "MULTISELECT" : "SELECT",
      payload: e.currentTarget.value,
    });
  };

  const unselectChip = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatchSelectedChipList({ type: "UNSELECT", payload: e.currentTarget.value });
  };

  const toggleClick = isSelected ? unselectChip : selectChip;

  const changeChipState = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleClick(e);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (originOnClick) originOnClick(e);
  };

  return {
    styleVariant: { selected: isSelected, ...styleVariant },
    "aria-selected": isSelected,
    onClick: changeChipState,
    ...convertProps,
  };
};

export default useChip;
