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
    },
    hover: {
      true: "",
    },
    press: {
      true: "",
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
  compoundVariants: [
    {
      disabled: false,
      hover: true,
      className: "hover:before:opacity-20",
    },
    { disabled: false, press: true, className: "press:before:opacity-30" },
  ],
  defaultVariants: {
    disabled: false,
    hover: true,
    press: true,
    focusVisible: true,
  },
});
