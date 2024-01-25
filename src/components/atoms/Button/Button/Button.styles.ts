import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "relative flex justify-center items-center overflow-hidden rounded-m py-xs cursor-pointer",
  variants: {
    /**
     * 버튼의 형태
     * @default secondary
     * */
    variant: {
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
      danger: "bg-red text-red-on",
      text: "bg-transparent text-inherit",
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
      true: "cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: ["primary", "secondary", "danger", "text"],
      className: "text-surface-on/30 grayscale",
    },
    {
      disabled: true,
      variant: ["primary", "secondary", "danger"],
      className: "bg-surface-on/10",
    },
  ],
  defaultVariants: {
    variant: "secondary",
    size: "m",
  },
});

export const overlayVariants = tv({
  base: "absolute top-0 left-0 w-full h-full bg-current opacity-0 hover:opacity-20 active:opacity-10",
  variants: {
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
