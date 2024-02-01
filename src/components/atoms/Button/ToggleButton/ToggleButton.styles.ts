import { tv } from "tailwind-variants";

import { buttonVariants } from "../Button";

const toggleButtonVariant = tv({
  extend: buttonVariants,
  variants: {
    variant: {
      default: "bg-surface-container-highest text-surface-on",
    },
    pressed: {
      true: "bg-primary-container text-primary-container-on",
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
