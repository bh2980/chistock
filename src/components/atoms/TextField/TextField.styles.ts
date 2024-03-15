import { tv } from "@utils/customTV";

import { interactionStateVariants } from "@atoms/InteractionState";

export const containerVariants = tv({
  base: "flex flex-col gap-xs text-surface-on-variant",
  variants: {
    error: { true: "text-error" },
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
    "bg-surface-container-highest",
    "px-l",
    "py-xs",
    "text-left",
    "text-body1",
    "rounded-m",
    "cursor-text",
    "border",
    "border-outline",
  ],
  variants: {
    focus: {
      true: "interactionFocus:opacity-0 interactionFocusVisible:opacity-0 focus-within:border-none focus-visible:border-none",
    },
    error: {
      true: ["bg-error-container", "border-error", "!outline-error"],
    },
    haveLabel: {
      true: "h-[68rem]",
      false: "h-[40rem]",
    },
    fullWidth: { true: "w-full" },
  },
  defaultVariants: {
    error: false,
    haveLabel: false,
    fullWidth: false,
  },
});

export const labelVariants = tv({
  base: [
    "absolute",
    "flex",
    "gap-3xs",
    "top-2xs",
    "text-body3",
    "transition-['font-size']",
    "peer-placeholder-shown:text-body1",
    "peer-placeholder-shown:top-m",
  ],
  variants: {
    error: {
      true: "peer-focus:text-error",
    },
    required: {
      true: ["after:content-['*']", "after:text-error"],
    },
    readOnly: {
      true: [],
      false: ["peer-focus:text-primary", "peer-focus:top-2xs", "peer-focus:text-body3"],
    },
  },
  compoundVariants: [
    {
      error: true,
      readOnly: false,
      className: "peer-focus:text-error peer-focus:top-2xs peer-focus:text-body3",
    },
  ],
  defaultVariants: {
    required: false,
    readOnly: false,
  },
});

export const inputVariants = tv({
  base: ["peer", "w-full", "h-[32rem]", "bg-transparent", "text-body1", "text-surface-on"],
  variants: {
    haveLabel: {
      true: ["absolute bottom-0"],
      false: "mt-[2rem]",
    },
    error: { true: "text-error" },
    disabled: {
      true: ["cursor-not-allowed text-disabled-on", "placeholder:text-disabled-on"],
      false: "placeholder:text-surface-on-variant",
    },
    readOnly: {
      true: [],
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
    haveLabel: false,
    error: false,
    disabled: false,
    readOnly: false,
  },
});
