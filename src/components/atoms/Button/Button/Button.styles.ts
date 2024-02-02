import { tv } from "tailwind-variants";

import { interactionStateVariants } from "@atoms/InteractionState";

export const buttonVariants = tv({
  extend: interactionStateVariants,
  base: "relative flex justify-center items-center py-xs cursor-pointer",
  variants: {
    /**
     * 버튼의 형태
     * @default secondary
     * */
    variant: {
      filled: "",
      outlined: "border border-outline",
      ghost: "",
    },
    color: {
      primary: "",
      primaryContainer: "",
      secondary: "",
      secondaryContainer: "",
      danger: "",
      dangerContainer: "",
      default: "",
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
    rounded: {
      rounded: "rounded-m",
      circular: "rounded-circle",
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
    //disabled
    {
      disabled: true,
      variant: ["outlined", "ghost"],
      color: ["primary", "secondary", "danger"],
      className: ["interaction:hidden"],
    },
    //primary
    {
      disabled: false,
      color: "primary",
      variant: "filled",
      className: "bg-primary text-primary-on",
    },
    {
      disabled: false,
      color: "primary",
      variant: "outlined",
      className: "text-primary",
    },
    {
      disabled: false,
      color: "primary",
      variant: "ghost",
      className: "text-primary",
    },
    //secondary
    {
      disabled: false,
      color: "secondary",
      variant: "filled",
      className: "bg-secondary text-secondary-on",
    },
    {
      disabled: false,
      color: "secondary",
      variant: "outlined",
      className: "text-secondary",
    },
    {
      disabled: false,
      color: "secondary",
      variant: "ghost",
      className: "text-secondary",
    },
    //error
    {
      disabled: false,
      color: "danger",
      variant: "filled",
      className: "bg-error text-error-on",
    },
    {
      disabled: false,
      color: "danger",
      variant: "outlined",
      className: "text-error",
    },
    {
      disabled: false,
      color: "danger",
      variant: "ghost",
      className: "text-error",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "secondary",
    size: "m",
    rounded: "rounded",
  },
});
