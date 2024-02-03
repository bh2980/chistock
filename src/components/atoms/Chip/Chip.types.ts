import { VariantProps } from "tailwind-variants";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import chipVariants from "./Chip.styles";

export type ChipProps = ComponentPropsWithInnerRef<"button"> &
  VariantProps<typeof chipVariants> & { value: string };
