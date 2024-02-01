import type { ButtonProps } from "../Button";

export type ToggleButtonProps = Omit<ButtonProps<"button">, "renderAs" | "press" | "variant"> & {
  pressed?: boolean;
  variant?: "default" | "text";
};
