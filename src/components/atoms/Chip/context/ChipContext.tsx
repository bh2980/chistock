import { createContext, useContext, useReducer } from "react";

import type { ChipContextType, ChipProviderProps } from "../Chip.types";
import ChipReducer from "../context/ChipReducer";

const ChipContext = createContext<ChipContextType>({
  multiSelect: false,
  selectedChipList: [],
  dispatchSelectedChipList: () => {},
});

const ChipProvider = ({ children, defaultSelected, multiSelect }: ChipProviderProps) => {
  const initChipList = defaultSelected
    ? Array.isArray(defaultSelected)
      ? defaultSelected
      : [defaultSelected]
    : [];

  const [selectedChipList, dispatchSelectedChipList] = useReducer(ChipReducer, initChipList);

  return (
    <ChipContext.Provider value={{ multiSelect, selectedChipList, dispatchSelectedChipList }}>
      {children}
    </ChipContext.Provider>
  );
};

const useChipContext = () => {
  const context = useContext(ChipContext);
  if (!context) {
    throw new Error("useChipContext must be used within a ChipProvider");
  }

  return context;
};

export { useChipContext, ChipProvider };
