export type ChipAction =
  | { type: "SELECT"; payload: string }
  | { type: "MULTISELECT"; payload: string }
  | { type: "UNSELECT"; payload: string };

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
