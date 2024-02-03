import { tv } from "tailwind-variants";

import { buttonVariants } from "@atoms/Button/Button";

export const chipVariants = tv({
  extend: buttonVariants,
  variants: {
    variant: {
      filled: "",
      outlined: "text-surface-on-variant",
    },
    selected: {
      true: "",
    },
  },
  defaultVariants: {
    size: "s",
    rounded: "circular",
  },
  compoundVariants: [
    {
      selected: false,
      variant: "filled",
      className: "bg-surface-container-highest text-surface-on-variant",
    },
    {
      selected: false,
      variant: "outlined",
      className: "text-surface-on-variant",
    },
    {
      selected: true,
      variant: ["filled", "outlined"],
      className: "bg-secondary text-secondary-on",
    },
  ],
});

export default chipVariants;
