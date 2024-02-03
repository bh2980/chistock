export type ChipAction =
  | { type: "SELECT"; payload: string }
  | { type: "MULTISELECT"; payload: string }
  | { type: "UNSELECT"; payload: string };
