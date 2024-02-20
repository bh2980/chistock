import { tv } from "@utils/utils";

export const imageVariants = tv({
  base: "relative min-w-[1em] overflow-hidden aspect-square",
  variants: {
    /** 이미지의 테두리 반경을 조절합니다
     *
     * @default m
     */
    rounded: {
      none: "rounded-none",
      xs: "rounded-xs",
      s: "rounded-s",
      m: "rounded-m",
      l: "rounded-l",
      circle: "rounded-circle",
    },
  },
  defaultVariants: {
    rounded: "m",
  },
});
