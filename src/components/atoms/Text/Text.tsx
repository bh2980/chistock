import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import classMerge from "@utils/classMerge";
import { PolymorphicComponentType, PolymorphicPropsType, PolymorphicRefType } from "@customTypes/polymorphicType";

type TextPropsType = VariantProps<typeof textVariants>;

export const textVariants = cva("", {
  variants: {
    color: {
      current: "text-current",
      onSurface: "text-surface-on",
      onSub: "text-surface-on-variant",
      onPrimary: "text-primary-on",
      onPrimaryFixed: "text-primary-fixed-on",
      onSecondary: "text-secondary-on",
      onSecondaryFixed: "text-secondary-fixed-on",
      onTertiary: "text-tertiary-on",
      onTertiaryFixed: "text-tertiary-fixed-on",
      onRed: "text-red-on",
      onRedSub: "text-red-variant-on",
      onYellow: "text-yellow-on",
    },
    size: {
      inherit: "text-inherit",
      xs: "text-xs",
      s: "text-s",
      m: "text-m",
      l: "text-l",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      regular: "font-regular",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    color: "current",
    size: "inherit",
    weight: "regular",
  },
});

const Text: PolymorphicComponentType<"span", TextPropsType> = forwardRef(function Text<T extends React.ElementType>(
  { children, as, className, color, size, weight, ...props }: PolymorphicPropsType<T, TextPropsType>,
  ref: PolymorphicRefType<T>
) {
  const TextComponent = as || "span";

  return (
    <TextComponent ref={ref} className={classMerge([textVariants({ color, size, weight }), className])} {...props}>
      {children}
    </TextComponent>
  );
});

export default Text;
