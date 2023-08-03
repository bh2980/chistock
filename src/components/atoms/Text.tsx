import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import classMerge from "utils/classMerge";

export const textVariants = cva("", {
  variants: {
    color: {
      onDefault: "text-surface-on",
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
    color: "onDefault",
    size: "m",
    weight: "regular",
  },
});

type TextPropsType<T extends ElementType> = {
  as?: T;
} & VariantProps<typeof textVariants> &
  Omit<ComponentPropsWithRef<T>, keyof VariantProps<typeof textVariants>>;

type TextComponentType = <C extends React.ElementType = "span">(
  props: TextPropsType<C>
) => React.ReactNode | null;

const TextComponent = <T extends ElementType = "span">(
  { children, as, color, size, weight, ...props }: TextPropsType<T>,
  ref: React.ComponentPropsWithRef<T>["ref"]
) => {
  const TextComponent = as || "span";

  return (
    <TextComponent
      ref={ref}
      className={classMerge(textVariants({ color, size, weight }))}
      {...props}
    >
      {children}
    </TextComponent>
  );
};

const Text: TextComponentType = forwardRef(TextComponent);

export default Text;
