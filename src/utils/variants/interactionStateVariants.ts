import { tv } from "tailwind-variants";

export const interactionStateVariants = tv({
  base: [
    "relative",
    "overflow-hidden",
    "before:absolute",
    "before:top-0",
    "before:left-0",
    "before:w-full",
    "before:h-full",
    "before:bg-current",
    "before:opacity-0",
  ],
  variants: {
    disabled: {
      true: ["cursor-not-allowed", "bg-[#c6c6c6]", "text-[#8c8c8c]"],
      false: [],
    },
    hover: {
      true: "hover:before:opacity-20",
      false: [],
    },
    press: {
      true: "press:before:opacity-30",
      false: [],
    },
    focusVisible: {
      true: [
        "focus-visible:before:opacity-20",
        "focus-visible:outline",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-surface-on",
      ],
      false: [],
    },
  },
  compoundVariants: [
    {
      disabled: true,
      hover: true,
      className: [],
    },
    { disabled: true, press: true, className: [] },
  ],
  defaultVariants: {
    disabled: false,
    hover: true,
    press: true,
    focusVisible: true,
  },
});
