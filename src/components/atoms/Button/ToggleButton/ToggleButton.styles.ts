import { tv } from "tailwind-variants";

import { buttonVariants } from "../Button";

const toggleButtonVariant = tv({
  extend: buttonVariants,
  variants: {
    pressed: {
      true: "interaction:opacity-40",
    },
    variant: {
      text: "interactionHover:bg-surface-on",
    },
  },
  compoundVariants: [
    {
      pressed: true,
      variant: "text",
      className: "interaction:opacity-0 text-primary [&_>_svg]:fill-primary",
    },
  ],
});

export default toggleButtonVariant;
