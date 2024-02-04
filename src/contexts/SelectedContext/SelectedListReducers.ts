export type SelectedListAction =
  | { type: "SELECT"; payload: string }
  | { type: "MULTISELECT"; payload: string }
  | { type: "UNSELECT"; payload: string };

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
