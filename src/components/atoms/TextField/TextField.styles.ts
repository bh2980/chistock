import { tv } from "@utils/utils";

import { interactionStateVariants } from "@atoms/InteractionState";

export const containerVariants = tv({
  base: "flex flex-col gap-xs text-surface-on-variant",
  variants: {
    error: { true: "text-red" },
    disabled: { true: "text-disabled-on" },
    fullWidth: { true: "w-full" },
  },
  defaultVariants: {
    disabled: false,
    error: false,
    fullWidth: false,
  },
});

export const textFieldVariants = tv({
  extend: interactionStateVariants,
  base: [
    "flex",
    "justify-between",
    "items-center",
    "gap-m",
    "w-[320rem]",
    "bg-surface-variant-highest",
    "px-l",
    "py-xs",
    "text-left",
    "text-m",
    "rounded-m",
    "cursor-text",
  ],
  variants: {
    focus: {
      true: "interactionFocus:opacity-0 interactionFocusVisible:opacity-0",
    },
    error: {
      true: ["!bg-red/20", "!outline-red", "outline", "outline-1"],
    },
    haveLabel: {
      true: "h-[68rem]",
      false: "h-[40rem]",
    },
    fullWidth: { true: "w-full" },
  },
  defaultVariants: {
    error: false,
  },
});

export const labelVariants = tv({
  base: [
    "absolute",
    "flex",
    "gap-3xs",
    "top-2xs",
    "text-xs",
    "transition-['font-size']",
    "peer-placeholder-shown:text-m",
    "peer-placeholder-shown:top-m",
  ],
  variants: {
    error: {
      true: "peer-focus:text-red",
    },
    required: {
      true: ["after:content-['*']", "after:text-red"],
    },
    readOnly: {
      true: "",
      false: ["peer-focus:text-primary", "peer-focus:top-2xs", "peer-focus:text-xs"],
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const inputVariants = tv({
  base: ["peer", "w-full", "h-[32rem]", "bg-transparent", "text-m", "text-surface-on"],
  variants: {
    haveLabel: {
      true: ["absolute bottom-0"],
      false: "mt-[2rem]",
    },
    error: { true: "text-red" },
    disabled: {
      true: ["cursor-not-allowed text-disabled-on", "placeholder:text-disabled-on"],
      false: "placeholder:text-surface-on-variant",
    },
    readOnly: {
      true: "",
    },
  },
  compoundVariants: [
    {
      haveLabel: true,
      readOnly: false,
      className: "placeholder:invisible focus:placeholder:visible",
    },
    {
      haveLabel: true,
      readOnly: true,
      className: "placeholder:invisible",
    },
  ],
  defaultVariants: {
    error: false,
    disabled: false,
    readOnly: false,
  },
});
