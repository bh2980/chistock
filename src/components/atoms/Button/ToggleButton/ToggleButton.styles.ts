import { tv } from "tailwind-variants";

import { buttonVariants } from "../Button";

const toggleButtonVariant = tv({
  extend: buttonVariants,
  variants: {
    variant: {
      default: "bg-surface-container-highest text-surface-on border border-outline",
    },
    pressed: {
      true: "bg-primary-container text-primary-container-on border-primary [&_>_svg]:fill-primary-container-on",
    },
  },
  compoundVariants: [
    {
      pressed: true,
      variant: "text",
      className: "bg-transparent text-primary [&_>_svg]:fill-primary",
    },
  ],
  defaultVariants: {
    variant: "default",
  },
});

export default toggleButtonVariant;
