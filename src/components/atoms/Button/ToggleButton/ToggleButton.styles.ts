import { tv } from "tailwind-variants";

import { buttonVariants } from "../Button";

const toggleButtonVariant = tv({
  extend: buttonVariants,
  variants: {
    variant: { outlined: "", ghost: "" },
    pressed: {
      true: "[&_>_svg]:fill-current",
    },
  },
  compoundVariants: [
    {
      pressed: true,
      variant: "outlined",
      className: "bg-secondary-container text-secondary-container-on",
    },
    {
      pressed: true,
      variant: "ghost",
      className: "bg-transparent text-primary",
    },
  ],
  defaultVariants: {
    pressed: false,
    variant: "outlined",
  },
});

export default toggleButtonVariant;
