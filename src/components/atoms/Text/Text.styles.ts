import { textColor } from "@constants/textColor";

import { tv } from "@utils/customTV";

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
      body3: "text-body3",
      body2: "text-body2",
      body1: "text-body1",
      headline3: "text-headline3",
      headline2: "text-headline2",
      headline1: "text-headline1",
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
