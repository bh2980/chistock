import { tv } from "tailwind-variants";

import { interactionStateVariants } from "@atoms/InteractionState";

export const buttonVariants = tv({
  extend: interactionStateVariants,
  base: "relative flex justify-center items-center rounded-m py-xs cursor-pointer",
  variants: {
    /**
     * 버튼의 형태
     * @default secondary
     * */
    variant: {
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
      error: "bg-error text-error-on",
      text: "bg-transparent text-surface-on",
    },
    /**
     * 버튼의 크기
     * @default m
     * */
    size: {
      s: "h-[32rem] px-s text-s gap-xs",
      m: "h-[40rem] px-m text-m gap-s",
      l: "h-[48rem] px-m text-xl gap-s",
    },
    isIconButton: {
      true: "aspect-square p-0",
    },
    disabled: {
      true: "",
    },
    focusOutlineOffset: {
      true: "",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: ["text"],
      className: "bg-transparent",
    },
  ],
  defaultVariants: {
    variant: "secondary",
    size: "m",
  },
});
