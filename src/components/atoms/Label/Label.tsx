import { ComponentPropsWithoutRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

import { InnerRefType } from "@customTypes/polymorphicType";

type LabelProps = ComponentPropsWithoutRef<"span"> &
  InnerRefType<"span"> &
  VariantProps<typeof labelVariants>;

const labelVariants = tv({
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
      xs: "text-xs h-[16rem]",
      s: "text-s h-[20rem]",
      m: "text-m h-[24rem]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "m",
  },
});

const Label = ({ children, variant, size, className, ...props }: LabelProps) => {
  return (
    <span className={labelVariants({ variant, size, className })} {...props}>
      {children}
    </span>
  );
};

export default Label;
