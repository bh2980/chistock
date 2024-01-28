import { tv } from "tailwind-variants";

import { textColor } from "@constants/textColor";

/** 텍스트 색상 지정용 cva 함수 */
export const textColorVariants = tv({
  variants: {
    /**
     * 텍스트의 색상을 설정하는 속성
     *
     * @default inherit
     *  */
    color: textColor,
  },
  defaultVariants: { color: "inherit" },
});

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
