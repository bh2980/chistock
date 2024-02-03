import type { Dispatch } from "react";
import type { VariantProps } from "tailwind-variants";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import chipVariants from "./Chip.styles";
import type { ChipAction } from "./context/ChipReducer";

export type ChipProps = ComponentPropsWithInnerRef<"button"> &
  Omit<VariantProps<typeof chipVariants>, "color" | "variant"> & {
    value: string;
    variant?: "filled" | "outlined";
  };

export type ChipGroupBaseProps = {
  defaultSelected?: string | string[];
  multiSelect?: boolean;
};

export type ChipGroupProps = ComponentPropsWithInnerRef<"div"> & ChipGroupBaseProps;

export type ChipDispatch = Dispatch<ChipAction>;

export type ChipContextType = {
  multiSelect?: boolean;
  selectedChipList: string[];
  dispatchSelectedChipList: ChipDispatch;
};

export type ChipProviderProps = React.PropsWithChildren & ChipGroupBaseProps;
