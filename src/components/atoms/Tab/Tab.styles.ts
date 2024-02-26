import { tv } from "@utils/customTV";

import { buttonVariants } from "@atoms/Button/Button";

export const tabVariant = tv({
  extend: buttonVariants,
  base: [
    "overflow-visible",
    "interaction:h-[3rem]",
    "interaction:top-[calc(100%-3rem)]",
    "interaction:rounded-circle",
  ],
  compoundVariants: [
    { variant: "ghost", className: "text-surface-on-variant" },
    {
      selected: true,
      variant: "ghost",
      className: [
        "text-primary",
        "font-bold",
        "[&_>_svg]:fill-current",
        "interaction:bg-primary",
        "interaction:!opacity-100",
      ],
    },
  ],
  defaultVariants: {
    variant: "ghost",
    size: "m",
  },
});
