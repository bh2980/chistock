import { cva } from "class-variance-authority";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { textColorVariants } from "@constants/textColor";

import classMerge from "@utils/classMerge";

import { createBox } from "@atoms/Box/Box";

import { TextAlterAs, TextBasePropsType, TextDefault } from "./Text.types";

export const textVariants = cva("", {
  variants: {
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
    size: "inherit",
    weight: "regular",
  },
});

const Text = <
  T extends TextDefault | TextAlterAs = TextDefault,
  A extends TextAlterAs = TextAlterAs
>({
  children,
  renderAs,
  className,
  color,
  size,
  weight,
  ...props
}: PolymorphicPropsWithInnerRefType<T, TextBasePropsType, A>) => {
  const TextRoot = createBox<TextDefault | TextAlterAs>("span");

  return (
    <TextRoot
      renderAs={renderAs}
      className={classMerge([
        textVariants({ size, weight }),
        textColorVariants({ color }),
        className,
      ])}
      {...props}
    >
      {children}
    </TextRoot>
  );
};

export default Text;
