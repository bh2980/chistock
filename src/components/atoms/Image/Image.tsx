import { cva } from "class-variance-authority";
import * as NextImage from "next/image";

import classMerge from "@utils/classMerge";

import { ImagePropsType } from "./Image.types";

export const ImageVariants = cva("relative min-w-[1em] overflow-hidden aspect-square", {
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

/**
 * next/image를 사용하여 이미지를 렌더링하는 컴포넌트입니다.
 *
 * 기본적으로 컨테이너 내에 비율을 유지한채로 꽉 채워 렌더링되며 컨테이너를 넘어가는 부분은 잘리게 됩니다.
 *
 * next/image의 prop 역시 사용 가능합니다.
 *
 * @todo 정적 이미지일 경우 width, height를 받을 필요 없도록
 */
const Image = ({
  className,
  width,
  height,
  rounded,
  alt,
  fill = true,
  ...props
}: ImagePropsType) => {
  return (
    <div className={classMerge([ImageVariants({ rounded }), width, height, className])}>
      <NextImage.default style={{ objectFit: "cover" }} alt={alt} fill={fill} {...props} />
    </div>
  );
};

export default Image;
