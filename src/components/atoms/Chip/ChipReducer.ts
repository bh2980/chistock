import { ChipAction } from "./ChipAction";

function ChipReducer(state: string[], action: ChipAction) {
  switch (action.type) {
    case "SELECT":
      return [action.payload];
    case "MULTISELECT":
      return [...state, action.payload];
    case "UNSELECT":
      return state.filter((selectedChipValue) => selectedChipValue !== action.payload);
  }
}

export default ChipReducer;
