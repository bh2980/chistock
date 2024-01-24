import * as NextImage from "next/image";

import { convertCSSSize } from "@utils/hooks/convertSizeProps";
import { tv } from "@utils/utils";

import { ImagePropsType } from "./Image.types";

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
  src,
  fill = true,
  ...props
}: ImagePropsType) => {
  const containerStyle = { width: convertCSSSize(width), height: convertCSSSize(height) };

  return (
    <div className={imageVariants({ rounded, className })} style={containerStyle}>
      <NextImage.default
        src={src}
        alt={alt}
        fill={fill}
        style={{ objectFit: "cover" }}
        {...props}
      />
    </div>
  );
};

export default Image;
