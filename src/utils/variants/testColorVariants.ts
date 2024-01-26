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
