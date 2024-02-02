import { VariantProps } from "tailwind-variants";

import { toggleButtonVariant } from ".";
import type { ButtonProps } from "../Button";

export type ToggleButtonProps = Omit<
  ButtonProps<"button">,
  "renderAs" | "press" | "variant" | "color"
> &
  Omit<VariantProps<typeof toggleButtonVariant>, "variant"> & {
    variant?: "outlined" | "ghost";
  };
