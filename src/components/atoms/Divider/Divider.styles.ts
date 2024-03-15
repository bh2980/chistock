import { tv } from "@utils/customTV";

export const dividerVariants = tv({
  base: [
    "flex",
    "text-body2",
    "text-surface-on-variant",
    "before:grow",
    "before:border",
    "after:grow",
    "after:border",
    "before:border-outline-variant",
    "after:border-outline-variant",
  ],
  variants: {
    vertical: {
      false: ["items-center", "before:h-[0rem]", "after:h-[0rem]"],
      true: ["flex-col", "justify-center", "items-center", "before:w-[0rem]", "after:w-[0rem]"],
    },
    hasContent: {
      true: "",
    },
  },
  compoundVariants: [
    {
      vertical: false,
      hasContent: true,
      className: "before:mr-s after:ml-s",
    },
    {
      vertical: true,
      hasContent: true,
      className: "before:mb-s after:mt-s",
    },
  ],
  defaultVariants: {
    vertical: false,
  },
});
