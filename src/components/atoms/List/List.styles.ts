import { tv } from "@utils/customTV";

export const listVariant = tv({
  base: "flex w-full",
  variants: {
    horizontal: {
      true: "flex-row",
      false: "flex-col",
    },
  },
  defaultVariants: {
    horizontal: false,
  },
});
