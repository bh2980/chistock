import type { ButtonProps } from "../Button";

export type ToggleButtonProps = Omit<ButtonProps<"button">, "renderAs" | "press"> & {
  pressed?: boolean;
};
