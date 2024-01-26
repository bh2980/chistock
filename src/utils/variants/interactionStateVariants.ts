import { tv } from "tailwind-variants";

export const focusVariants = tv({
  variants: {
    focus: {
      true: "focus:before:opacity-20",
    },
    focusVisible: {
      true: [
        "focus-visible:before:opacity-20",
        "focus-visible:outline",
        "focus-visible:outline-4",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-surface-on",
      ],
    },
  },
  defaultVariants: {
    focus: false,
    focusVisible: true,
  },
});

export const interactionStateVariants = tv({
  extend: focusVariants,
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
    },
    hover: {
      true: "hover:before:opacity-20",
    },
    press: {
      true: "press:before:opacity-40",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      hover: true,
      className: "hover:before:opacity-0",
    },
    { disabled: true, press: true, className: "press:before:opacity-0" },
  ],
  defaultVariants: {
    disabled: false,
    hover: true,
    press: true,
  },
});
