import { VariantProps } from "tailwind-variants";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import chipVariants from "./Chip.styles";

export type ChipProps = ComponentPropsWithInnerRef<"button"> &
  Omit<VariantProps<typeof chipVariants>, "color" | "variant"> & {
    value: string;
    variant?: "filled" | "outlined";
  };
