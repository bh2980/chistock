import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { textColorVariants } from "@constants/textColor";

import { tv } from "@utils/utils";

import Slot from "@atoms/Slot/Slot";

import { TextAlterAs, TextBasePropsType, TextDefault } from "./Text.types";

export const textVariants = tv({
  extend: textColorVariants,
  variants: {
    /** 텍스트 크기
     * @default inherit
     */
    size: {
      inherit: "text-sizeInherit",
      body3: "text-xs",
      body2: "text-s",
      body1: "text-m",
      headline3: "text-l",
      headline2: "text-xl",
      headline1: "text-2xl",
    },
    bold: {
      true: "font-bold",
      false: "",
    },
  },
  defaultVariants: {
    size: "inherit",
    bold: false,
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
  bold,
  ...props
}: PolymorphicPropsWithInnerRefType<T, TextBasePropsType, A>) => {
  return (
    <Slot<TextDefault | TextAlterAs>
      renderAs={renderAs || "span"}
      className={textVariants({ size, color, bold, className })}
      {...props}
    >
      {children}
    </Slot>
  );
};

export default Text;
