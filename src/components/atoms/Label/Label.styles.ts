import { tv } from "@utils/customTV";

export const labelVariants = tv({
  base: "inline-block px-xs rounded-s",
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      primaryContainer: "bg-primary-container text-primary-container-on border border-primary",
      secondary: "bg-secondary text-secondary-on",
      secondaryContainer:
        "bg-secondary-container text-secondary-container-on border border-secondary",
      error: "bg-error text-error-on",
      errorContainer: "bg-error-container text-error-container-on border border-error",
    },
    size: {
      xs: "text-body3 h-[16rem]",
      s: "text-body2 h-[20rem]",
      m: "text-body1 h-[24rem]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "m",
  },
});
