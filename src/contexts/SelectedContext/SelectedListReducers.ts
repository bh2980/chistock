import type { SelectedListAction } from "./SelectedList.types";

function SelectedListReducer(state: string[], action: SelectedListAction) {
  switch (action.type) {
    case "SELECT":
      return [action.payload];
    case "MULTISELECT":
      return [...state, action.payload];
    case "UNSELECT":
      return state.filter((selectedChipValue) => selectedChipValue !== action.payload);
  }
}

export default SelectedListReducer;
