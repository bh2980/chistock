import type { Dispatch } from "react";

export type SelectedListAction =
  | { type: "SELECT"; payload: string }
  | { type: "MULTISELECT"; payload: string }
  | { type: "UNSELECT"; payload: string };

export type SelectedListDispatch = Dispatch<SelectedListAction>;

export type SelectedListContextType = {
  multiSelect?: boolean;
  selectedList: string[];
  dispatchSelectedList: SelectedListDispatch;
};

export type SelectListProviderBaseProps = {
  defaultSelected?: string | string[];
  multiSelect?: boolean;
};

export type SelectedListProviderProps = React.PropsWithChildren & SelectListProviderBaseProps;
