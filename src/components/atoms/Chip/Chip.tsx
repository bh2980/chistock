import { type Dispatch, createContext, useReducer } from "react";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import chipVariants from "./Chip.styles";
import { ChipProps } from "./Chip.types";
import { type ChipAction } from "./ChipAction";
import ChipReducer from "./ChipReducer";
import useChip from "./useChip";

type chipGroupBaseProps = {
  defaultSelected?: string;
  multiSelect?: boolean;
};

type ChipGroupProps = ComponentPropsWithInnerRef<"div"> & chipGroupBaseProps;

// multiSelect가 아닐 경우 하나의 선택된 값만 저장
// multiSelect일 경우 여러 개의 선택된 값을 저정하고 렌더링

type ChipDispatch = Dispatch<ChipAction>;

export type ChipContextType = {
  multiSelect?: boolean;
  selectedChipList: string[];
  dispatchSelectedChipList: ChipDispatch;
};

export const ChipContext = createContext<ChipContextType>({
  multiSelect: false,
  selectedChipList: [],
  dispatchSelectedChipList: () => {},
});

export const ChipGroup = ({ multiSelect, defaultSelected, ...props }: ChipGroupProps) => {
  const [selectedChipList, dispatchSelectedChipList] = useReducer(
    ChipReducer,
    defaultSelected ? [defaultSelected] : []
  );

  return (
    <ChipContext.Provider value={{ multiSelect, selectedChipList, dispatchSelectedChipList }}>
      <Slot className="flex gap-s" {...props} />
    </ChipContext.Provider>
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

export default Chip;
