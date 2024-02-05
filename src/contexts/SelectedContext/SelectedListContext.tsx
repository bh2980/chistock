import { createContext, useContext, useReducer } from "react";

import type { SelectedListContextType, SelectedListProviderProps } from "./SelectedList.types";
import SelectedListReducer from "./SelectedListReducers";

const SelectedListContext = createContext<SelectedListContextType>({
  multiSelect: false,
  selectedList: [],
  dispatchSelectedList: () => {},
});

const SelectedListProvider = ({
  children,
  defaultSelected,
  multiSelect,
}: SelectedListProviderProps) => {
  const initSelectedList = defaultSelected
    ? Array.isArray(defaultSelected)
      ? defaultSelected
      : [defaultSelected]
    : [];

  const [selectedList, dispatchSelectedList] = useReducer(SelectedListReducer, initSelectedList);

  return (
    <SelectedListContext.Provider value={{ multiSelect, selectedList, dispatchSelectedList }}>
      {children}
    </SelectedListContext.Provider>
  );
};

const useSelectedListContext = () => {
  const context = useContext(SelectedListContext);
  if (!context) {
    throw new Error("useSelectedListContext must be used within a SelectedListProvider");
  }

  return context;
};

export { useSelectedListContext, SelectedListProvider };
