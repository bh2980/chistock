import * as NextImage from "next/image";

import { imageVariants } from "./Image.styles";
import type { ImagePropsType } from "./Image.types";

/**
 * next/image를 사용하여 이미지를 렌더링하는 컴포넌트입니다.
 *
 * 기본적으로 컨테이너 내에 비율을 유지한채로 꽉 채워 렌더링되며 컨테이너를 넘어가는 부분은 잘리게 됩니다.
 *
 * next/image의 prop 역시 사용 가능합니다.
 *
 * @todo 정적 이미지일 경우 width, height를 받을 필요 없도록
 */
const Image = ({ className, rounded, alt, src, fill = true, ...props }: ImagePropsType) => {
  return (
    <div className={imageVariants({ rounded, className })}>
      <NextImage.default src={src} alt={alt} fill={fill} objectFit="cover" {...props} />
    </div>
  );
};

export default Image;
