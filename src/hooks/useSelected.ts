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

  const select = () => {
    dispatchSelectedList({
      type: multiSelect ? "MULTISELECT" : "SELECT",
      payload: value,
    });
  };

  const unselect = () => {
    dispatchSelectedList({ type: "UNSELECT", payload: value });
  };

  const toggleClick = isSelected ? unselect : select;

  const changeSelectState = (e: React.MouseEvent) => {
    toggleClick();

    if (onClick) onClick(e);
  };

  return {
    styleVariant: { selected: isSelected, ...styleVariant },
    "aria-selected": isSelected,
    onClick: changeSelectState,
    value,
    ...otherProps,
  };
};

export default useSelectedList;
