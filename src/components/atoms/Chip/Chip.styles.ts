import { tv } from "tailwind-variants";

import { buttonVariants } from "@atoms/Button/Button";

export const chipVariants = tv({
  extend: buttonVariants,
  variants: {
    variant: {
      outlined: "text-surface-on-variant",
    },
    selected: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "outlined",
    size: "s",
    rounded: "circular",
  },
  compoundVariants: [
    {
      selected: true,
      variant: "outlined",
      className: "bg-secondary-container text-secondary-container-on border-secondary-container",
    },
  ],
});

export default chipVariants;
