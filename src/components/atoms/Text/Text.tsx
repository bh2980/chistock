import { cva } from "class-variance-authority";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { textColorVariants } from "@constants/textColor";

import { classMerge } from "@utils/utils";

import Box from "@atoms/Box/Box";

import { TextAlterAs, TextBasePropsType, TextDefault } from "./Text.types";

export const textVariants = cva("", {
  variants: {
    /** 텍스트 크기
     * @default inherit
     */
    size: {
      inherit: "text-sizeInherit",
      xs: "text-xs",
      s: "text-s",
      m: "text-m",
      l: "text-l",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    /** 텍스트 굵기
     * @default regular
     */
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

/** Text를 렌더링합니다. */
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
  return (
    <Box<TextDefault | TextAlterAs>
      renderAs={renderAs || "span"}
      className={classMerge([
        textVariants({ size, weight }),
        textColorVariants({ color }),
        className,
      ])}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Text;
