import { useSelectedListContext } from "@contexts/SelectedContext";
import type { ComponentProps } from "react";

type useSelectedListProps = {
  styleVariant?: object;
  onClick?: (e: React.MouseEvent) => void;
} & ComponentProps<React.ElementType>;

const useSelectedList = (props: useSelectedListProps) => {
  const { multiSelect, selectedList, dispatchSelectedList } = useSelectedListContext();
  const isSelected = selectedList.includes(props.value);

  const { styleVariant, onClick, value, ...otherProps } = props;

  const selectChip = () => {
    dispatchSelectedList({
      type: multiSelect ? "MULTISELECT" : "SELECT",
      payload: value,
    });
  };

  const unselectChip = () => {
    dispatchSelectedList({ type: "UNSELECT", payload: value });
  };

  const toggleClick = isSelected ? unselectChip : selectChip;

  const changeChipState = (e: React.MouseEvent) => {
    toggleClick();

    if (onClick) onClick(e);
  };

  return {
    styleVariant: { selected: isSelected, ...styleVariant },
    "aria-selected": isSelected,
    onClick: changeChipState,
    ...otherProps,
  };
};

export default useSelectedList;
